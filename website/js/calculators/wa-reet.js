/**
 * Washington State Real Estate Excise Tax calculator.
 *
 * Pure computation: no DOM, no network, no storage. Every value stays in the
 * caller's process. The publication gate is enforced here, not in the UI, so
 * an unverified parameter set cannot reach a customer even if a page forgets
 * to check.
 */

import { toCents, formatCents, applyRateBp } from '../engine/money.js';
import { applyGraduated, applyFlat } from '../engine/brackets.js';
import { resolveEffective } from '../engine/resolve.js';
import { STATUS, isPublishable, NotPublishableError, assertReviewConsistent } from '../engine/status.js';
import { REET_STATE, REET_FLAT_CLASSIFIED } from '../tax-rules/us-wa/reet.js';

export const CLASSIFICATIONS = Object.freeze(['standard', 'agricultural_land', 'timberland']);

/**
 * @param {object} input
 * @param {string|number} input.sellingPrice
 * @param {string} input.saleDate                ISO YYYY-MM-DD
 * @param {string} [input.classification]        one of CLASSIFICATIONS
 * @param {number} [input.localRateBp]           local REET in basis points, from the user
 * @param {object} [options]
 * @param {boolean} [options.allowUnpublished]   internal/preview use only
 */
export function calculateReet(input, options = {}) {
  const { allowUnpublished = false } = options;
  const classification = input.classification ?? 'standard';
  if (!CLASSIFICATIONS.includes(classification)) {
    throw new Error(`Unknown classification "${classification}"`);
  }

  const cents = toCents(input.sellingPrice);
  if (cents < 0) throw new Error('Selling price must not be negative');

  const pool = classification === 'standard' ? REET_STATE : REET_FLAT_CLASSIFIED;
  const set = resolveEffective(pool, input.saleDate);
  assertReviewConsistent(set);

  if (!isPublishable(set) && !allowUnpublished) throw new NotPublishableError(set);

  const state = classification === 'standard'
    ? applyGraduated(cents, set.brackets, { rounding: set.rounding })
    : applyFlat(cents, set.flat_rate_bp, { rounding: set.rounding });

  let local = null;
  if (input.localRateBp != null) {
    if (!Number.isInteger(input.localRateBp) || input.localRateBp < 0) {
      throw new Error('Local rate must be a non-negative integer in basis points');
    }
    local = {
      rateBp: input.localRateBp,
      taxCents: applyRateBp(cents, input.localRateBp, set.rounding),
    };
  }

  const totalCents = state.totalCents + (local?.taxCents ?? 0);

  return {
    jurisdiction: 'us-wa',
    taxType: 'real_estate_excise_tax',
    classification,
    saleDate: input.saleDate,
    sellingPriceCents: cents,

    // Federal, state, and local are reported separately, never merged silently.
    federal: null,
    state: { ...state, parameterSetId: set.id, effectiveFrom: set.effective_start },
    local,
    totalCents,

    display: {
      sellingPrice: formatCents(cents),
      stateTax: formatCents(state.totalCents),
      localTax: local ? formatCents(local.taxCents) : null,
      total: formatCents(totalCents),
    },

    provenance: {
      parameterSetId: set.id,
      version: set.version,
      status: set.status,
      publishable: isPublishable(set),
      source: set.source,
      review: set.review,
      assumptions: set.assumptions,
      exceptions: set.exceptions,
      openQuestions: set.open_questions ?? [],
    },

    // Mandatory on every customer-facing result.
    disclaimer:
      'This calculator provides a preliminary estimate for educational purposes only. ' +
      'It is not tax, legal, or financial advice and does not guarantee your actual tax ' +
      'liability, refund, filing requirement, or eligibility. Tax results depend on your ' +
      'complete facts and current federal, state, and local law.',
  };
}

/** Whether the calculator may be exposed publicly right now. */
export function publicationReadiness() {
  const all = [...REET_STATE, ...REET_FLAT_CLASSIFIED];
  const blocking = all.filter((s) => s.status !== STATUS.APPROVED_FOR_PUBLICATION);
  return {
    ready: blocking.length === 0,
    blocking: blocking.map((s) => ({ id: s.id, status: s.status, source: s.source.url })),
  };
}
