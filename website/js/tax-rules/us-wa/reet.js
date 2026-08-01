/**
 * Washington State Real Estate Excise Tax — parameter sets.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * STATUS: every set below is `unverified`.
 *
 * The build environment cannot reach dor.wa.gov or app.leg.wa.gov — both
 * return HTTP 403 at the network egress layer. No figure here has been read
 * from its primary source by this system, so none may be published.
 *
 * The candidate values are recorded so a reviewer has something concrete to
 * check against rather than starting from a blank file. They came from a
 * search-engine summary of the DOR page, which is NOT a primary source and
 * NOT verification. Treat every number as unconfirmed until someone opens the
 * source, confirms it, and records their name and the date.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { STATUS } from '../../engine/status.js';

/** Basis points: 1 bp = 0.01%. 1.28% = 128 bp. */
export const REET_STATE = Object.freeze([
  {
    id: 'us-wa/reet/state/2023-01-01',
    jurisdiction: 'us-wa',
    tax_type: 'real_estate_excise_tax',
    scope: 'state',
    version: 1,
    effective_start: '2023-01-01',
    effective_end: '2026-01-01',
    status: STATUS.UNVERIFIED,
    transaction_types: ['standard'],
    brackets: [
      { upTo: 52500000, rateBp: 110 },   // $525,000 @ 1.10%
      { upTo: 152500000, rateBp: 128 },  // $1,525,000 @ 1.28%
      { upTo: 302500000, rateBp: 275 },  // $3,025,000 @ 2.75%
      { upTo: null, rateBp: 300 },       // above @ 3.00%
    ],
    rounding: 'half-up',
    source: {
      registry_id: 'wa-dor-reet',
      url: 'https://dor.wa.gov/taxes-rates/other-taxes/real-estate-excise-tax',
      document_title: 'Real estate excise tax',
      verified_on: null,
      last_checked: '2026-08-01',
      check_result: 'unreachable — HTTP 403 at network egress; not fetched',
    },
    review: { reviewer: null, reviewed_on: null, notes: null },
    assumptions: [
      'Graduated: each portion of the selling price is taxed at its own bracket rate.',
      'State portion only. Local REET is a separate additive rate — see REET_LOCAL.',
      'Candidate figures from a search summary, not from the source document.',
    ],
    exceptions: [
      'Agricultural land and timberland are taxed at a flat rate, not graduated — see REET_FLAT_CLASSIFIED.',
    ],
  },
  {
    id: 'us-wa/reet/state/2026-01-01',
    jurisdiction: 'us-wa',
    tax_type: 'real_estate_excise_tax',
    scope: 'state',
    version: 2,
    effective_start: '2026-01-01',
    effective_end: null,
    status: STATUS.UNVERIFIED,
    transaction_types: ['standard'],
    brackets: [
      { upTo: 75000000, rateBp: 110 },   // $750,000 @ 1.10%
      { upTo: 152500000, rateBp: 128 },
      { upTo: 302500000, rateBp: 275 },
      { upTo: null, rateBp: 300 },
    ],
    rounding: 'half-up',
    source: {
      registry_id: 'wa-dor-reet',
      url: 'https://dor.wa.gov/taxes-rates/other-taxes/real-estate-excise-tax',
      document_title: 'Real estate excise tax',
      verified_on: null,
      last_checked: '2026-08-01',
      check_result: 'unreachable — HTTP 403 at network egress; not fetched',
    },
    review: { reviewer: null, reviewed_on: null, notes: null },
    assumptions: [
      'First-bracket ceiling reportedly rises from $525,000 to $750,000 on 2026-01-01.',
      'Candidate figures from a search summary, not from the source document.',
    ],
    exceptions: [
      'A separate 1% real estate transfer tax on the portion above $3,025,000 was ' +
      'reported as effective 2026-01-01. It is NOT modelled here — it is a distinct tax ' +
      'and must be confirmed and specified before being added.',
    ],
    open_questions: [
      'Confirm whether the upper brackets changed on 2026-01-01 or only the first ceiling.',
      'Confirm the separate 1% transfer tax: base, thresholds, and whether REET applies alongside it.',
    ],
  },
]);

export const REET_FLAT_CLASSIFIED = Object.freeze([
  {
    id: 'us-wa/reet/state-classified/2020-01-01',
    jurisdiction: 'us-wa',
    tax_type: 'real_estate_excise_tax',
    scope: 'state',
    version: 1,
    effective_start: '2020-01-01',
    effective_end: null,
    status: STATUS.UNVERIFIED,
    transaction_types: ['agricultural_land', 'timberland'],
    flat_rate_bp: 128, // 1.28%
    rounding: 'half-up',
    source: {
      registry_id: 'wa-wac-458-61a-1001',
      url: 'https://app.leg.wa.gov/wac/default.aspx?cite=458-61A-1001',
      document_title: 'WAC 458-61A-1001 — Graduated real estate excise tax rates, exceptions',
      verified_on: null,
      last_checked: '2026-08-01',
      check_result: 'unreachable — HTTP 403 at network egress; not fetched',
    },
    review: { reviewer: null, reviewed_on: null, notes: null },
    assumptions: ['Flat, not graduated, for classified agricultural land and timberland.'],
    exceptions: [],
  },
]);

/**
 * Local REET. Deliberately empty.
 *
 * Local rates vary by city and county and are republished periodically. There
 * is no defensible way to populate hundreds of jurisdictions without reading
 * the current DOR schedule, so the calculator asks the user for their local
 * rate instead of guessing it.
 */
export const REET_LOCAL = Object.freeze([]);
