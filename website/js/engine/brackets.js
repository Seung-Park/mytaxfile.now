/**
 * Graduated (marginal) bracket application.
 *
 * Each bracket taxes only the portion of the amount that falls inside it —
 * the standard structure for US graduated taxes and for Washington REET.
 * Brackets are validated on every call: gaps and overlaps are bugs that
 * silently produce wrong tax, so they throw rather than degrade.
 */

import { applyRateBp } from './money.js';

export class BracketError extends Error {}

/**
 * @param {Array<{upTo:number|null, rateBp:number}>} brackets ascending; final upTo === null
 */
export function validateBrackets(brackets) {
  if (!Array.isArray(brackets) || brackets.length === 0) {
    throw new BracketError('Brackets must be a non-empty array');
  }
  let previous = 0;
  brackets.forEach((b, i) => {
    const last = i === brackets.length - 1;
    if (!Number.isInteger(b.rateBp) || b.rateBp < 0) {
      throw new BracketError(`Bracket ${i}: rateBp must be a non-negative integer`);
    }
    if (last) {
      if (b.upTo !== null) throw new BracketError('Final bracket must have upTo === null');
      return;
    }
    if (!Number.isInteger(b.upTo)) {
      throw new BracketError(`Bracket ${i}: upTo must be an integer number of cents`);
    }
    if (b.upTo <= previous) {
      throw new BracketError(
        `Bracket ${i}: upTo (${b.upTo}) must exceed the previous ceiling (${previous}) — ` +
        'brackets must ascend without gaps or overlaps'
      );
    }
    previous = b.upTo;
  });
  return true;
}

/**
 * Apply graduated brackets to an amount in cents.
 * Returns per-bracket detail so a result screen can show the working.
 */
export function applyGraduated(cents, brackets, { rounding = 'half-up' } = {}) {
  validateBrackets(brackets);
  if (!Number.isInteger(cents)) throw new BracketError('Amount must be integer cents');
  if (cents < 0) throw new BracketError('Amount must not be negative');

  const lines = [];
  let floor = 0;
  let total = 0;

  for (const b of brackets) {
    const ceiling = b.upTo === null ? Infinity : b.upTo;
    if (cents <= floor) break;
    const portion = Math.min(cents, ceiling) - floor;
    if (portion > 0) {
      const tax = applyRateBp(portion, b.rateBp, rounding);
      total += tax;
      lines.push({
        from: floor,
        to: b.upTo,
        rateBp: b.rateBp,
        portionCents: portion,
        taxCents: tax,
      });
    }
    if (ceiling === Infinity) break;
    floor = ceiling;
  }

  return { totalCents: total, lines };
}

/** Apply a single flat rate — used for REET's agricultural/timberland exception. */
export function applyFlat(cents, rateBp, { rounding = 'half-up' } = {}) {
  if (!Number.isInteger(cents) || cents < 0) throw new BracketError('Amount must be non-negative integer cents');
  const tax = applyRateBp(cents, rateBp, rounding);
  return { totalCents: tax, lines: [{ from: 0, to: null, rateBp, portionCents: cents, taxCents: tax }] };
}
