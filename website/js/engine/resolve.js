/**
 * Version and effective-date resolution.
 *
 * A calculation must use the rules in force on the transaction date, not the
 * rules in force today. A 2024 sale is computed with 2024 rules for as long as
 * anyone can amend it, so superseded versions are retained, never replaced.
 */

export class ResolutionError extends Error {}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function assertIsoDate(value, label = 'date') {
  if (typeof value !== 'string' || !ISO_DATE.test(value)) {
    throw new ResolutionError(`${label} must be an ISO date (YYYY-MM-DD), received "${value}"`);
  }
  const d = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) throw new ResolutionError(`${label} "${value}" is not a real date`);
  return value;
}

/**
 * Select the parameter set effective on `onDate`.
 *
 * Intervals are half-open: effective_start <= date < effective_end.
 * effective_end === null means "still in force".
 */
export function resolveEffective(sets, onDate) {
  assertIsoDate(onDate, 'transaction date');
  if (!Array.isArray(sets) || sets.length === 0) {
    throw new ResolutionError('No parameter sets supplied');
  }

  const matches = sets.filter((s) => {
    assertIsoDate(s.effective_start, `${s.id}.effective_start`);
    if (s.effective_end !== null) assertIsoDate(s.effective_end, `${s.id}.effective_end`);
    const startsBy = s.effective_start <= onDate;
    const endsAfter = s.effective_end === null || onDate < s.effective_end;
    return startsBy && endsAfter;
  });

  if (matches.length === 0) {
    const known = sets
      .map((s) => `${s.effective_start}→${s.effective_end ?? 'open'}`)
      .join(', ');
    throw new ResolutionError(
      `No parameter set covers ${onDate}. Known periods: ${known}. ` +
      'Refusing to guess — the correct rules for that date are not loaded.'
    );
  }
  if (matches.length > 1) {
    throw new ResolutionError(
      `${matches.length} parameter sets overlap ${onDate}: ${matches.map((m) => m.id).join(', ')}. ` +
      'Overlapping effective periods are a data defect.'
    );
  }
  return matches[0];
}

/** Every version that ever applied, newest first — for an audit or history view. */
export function versionHistory(sets) {
  return [...sets].sort((a, b) => (a.effective_start < b.effective_start ? 1 : -1));
}
