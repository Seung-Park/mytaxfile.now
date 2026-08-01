/**
 * Source registry — the approved primary sources for tax parameters.
 *
 * A parameter may cite ONLY a source listed here. Adding a source is a
 * deliberate act: it must be a government authority publishing the rule
 * itself, not a summary, a news article, an accounting firm's blog, or a
 * model's recollection.
 */

export const AUTHORITIES = Object.freeze({
  IRS: { id: 'irs', name: 'Internal Revenue Service', jurisdiction: 'us-federal', root: 'https://www.irs.gov' },
  WA_DOR: { id: 'wa-dor', name: 'Washington State Department of Revenue', jurisdiction: 'us-wa', root: 'https://dor.wa.gov' },
  WA_LEG: { id: 'wa-leg', name: 'Washington State Legislature (RCW / WAC)', jurisdiction: 'us-wa', root: 'https://app.leg.wa.gov' },
});

export const SOURCES = Object.freeze([
  {
    id: 'wa-dor-reet',
    authority: AUTHORITIES.WA_DOR,
    title: 'Real estate excise tax',
    url: 'https://dor.wa.gov/taxes-rates/other-taxes/real-estate-excise-tax',
    covers: ['us-wa/reet'],
    check_frequency_days: 30,
  },
  {
    id: 'wa-wac-458-61a-1001',
    authority: AUTHORITIES.WA_LEG,
    title: 'WAC 458-61A-1001 — Graduated real estate excise tax rates, exceptions',
    url: 'https://app.leg.wa.gov/wac/default.aspx?cite=458-61A-1001',
    covers: ['us-wa/reet'],
    check_frequency_days: 30,
  },
  {
    id: 'wa-dor-local-reet-rates',
    authority: AUTHORITIES.WA_DOR,
    title: 'Local Real Estate Excise Tax Rates (Form 84 0013)',
    url: 'https://dor.wa.gov/sites/default/files/2025-03/84%200013_April25.pdf',
    covers: ['us-wa/reet-local'],
    check_frequency_days: 30,
    note: 'Local rates change by jurisdiction and are republished periodically. Always re-read the current edition.',
  },
]);

export function findSource(id) {
  const s = SOURCES.find((x) => x.id === id);
  if (!s) throw new Error(`Source "${id}" is not in the approved registry. Add it deliberately before citing it.`);
  return s;
}
