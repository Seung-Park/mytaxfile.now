/**
 * Money arithmetic in integer minor units (cents).
 *
 * Tax figures must never pass through binary floating point: 0.1 + 0.2 is not
 * 0.3, and a cent of drift in a bracket boundary changes which rate applies.
 * Every amount in this engine is an integer number of cents.
 */

export class MoneyError extends Error {}

/** Parse a user-entered amount into integer cents. Rejects anything ambiguous. */
export function toCents(input) {
  if (typeof input === 'number') {
    if (!Number.isFinite(input)) throw new MoneyError('Amount is not a finite number');
    if (!Number.isInteger(input * 100)) {
      // e.g. 0.005 — more precision than cents. Refuse rather than silently round.
      const scaled = Math.round(input * 100);
      if (Math.abs(input * 100 - scaled) > 1e-6) {
        throw new MoneyError('Amount has sub-cent precision; round before calling');
      }
      return scaled;
    }
    return Math.round(input * 100);
  }
  if (typeof input !== 'string') throw new MoneyError('Amount must be a number or string');

  const cleaned = input.trim().replace(/[$,\s]/g, '');
  if (cleaned === '') throw new MoneyError('Amount is empty');
  if (!/^-?\d+(\.\d{1,2})?$/.test(cleaned)) {
    throw new MoneyError(`Amount "${input}" is not a valid monetary value`);
  }
  const negative = cleaned.startsWith('-');
  const [whole, frac = ''] = cleaned.replace('-', '').split('.');
  const cents = BigInt(whole) * 100n + BigInt(frac.padEnd(2, '0'));
  const n = Number(negative ? -cents : cents);
  if (!Number.isSafeInteger(n)) throw new MoneyError('Amount exceeds safe range');
  return n;
}

/** Format integer cents for display. */
export function formatCents(cents, { currency = 'USD', locale = 'en-US' } = {}) {
  if (!Number.isInteger(cents)) throw new MoneyError('formatCents requires integer cents');
  return new Intl.NumberFormat(locale, {
    style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 2,
  }).format(cents / 100);
}

/**
 * Apply a rate to an amount, both exact.
 *
 * `rate` is given in basis points (1 bp = 0.01%) so rates are integers and never
 * suffer float error: 1.28% is 128 bp. Rounding is explicit, never implicit.
 */
export function applyRateBp(cents, basisPoints, rounding = 'half-up') {
  if (!Number.isInteger(cents)) throw new MoneyError('applyRateBp requires integer cents');
  if (!Number.isInteger(basisPoints)) throw new MoneyError('Rate must be integer basis points');
  const exact = (BigInt(cents) * BigInt(basisPoints) * 100n); // scaled by 1e6
  return roundScaled(exact, 1000000n, rounding);
}

/** Round a scaled BigInt to whole cents under a named, explicit rule. */
export function roundScaled(scaled, scale, rounding) {
  const neg = scaled < 0n;
  const abs = neg ? -scaled : scaled;
  const q = abs / scale;
  const r = abs % scale;
  let out;
  switch (rounding) {
    case 'down':    out = q; break;
    case 'up':      out = r > 0n ? q + 1n : q; break;
    case 'half-up': out = r * 2n >= scale ? q + 1n : q; break;
    case 'half-even': {
      const twice = r * 2n;
      if (twice > scale) out = q + 1n;
      else if (twice < scale) out = q;
      else out = q % 2n === 0n ? q : q + 1n;
      break;
    }
    default: throw new MoneyError(`Unknown rounding rule "${rounding}"`);
  }
  const n = Number(neg ? -out : out);
  if (!Number.isSafeInteger(n)) throw new MoneyError('Result exceeds safe range');
  return n;
}

export const ROUNDING_RULES = Object.freeze(['down', 'up', 'half-up', 'half-even']);
