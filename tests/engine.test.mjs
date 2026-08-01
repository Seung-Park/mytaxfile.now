import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toCents, applyRateBp, roundScaled, MoneyError } from '../website/js/engine/money.js';
import { applyGraduated, applyFlat, validateBrackets, BracketError } from '../website/js/engine/brackets.js';
import { resolveEffective, versionHistory, ResolutionError } from '../website/js/engine/resolve.js';
import { STATUS, rank, atLeast, isPublishable, assertReviewConsistent } from '../website/js/engine/status.js';

test('money: parses currency strings exactly', () => {
  assert.equal(toCents('1,000,000'), 100000000);
  assert.equal(toCents('$525,000.00'), 52500000);
  assert.equal(toCents('0.01'), 1);
  assert.equal(toCents(0), 0);
});

test('money: refuses ambiguous input rather than guessing', () => {
  assert.throws(() => toCents(''), MoneyError);
  assert.throws(() => toCents('abc'), MoneyError);
  assert.throws(() => toCents('1.234'), MoneyError);
  assert.throws(() => toCents(Infinity), MoneyError);
});

test('money: no floating-point drift on classic failure cases', () => {
  assert.equal(toCents('0.1') + toCents('0.2'), toCents('0.3'));
  // 1.28% of $1,525,000 — exact, not 19519.999999
  assert.equal(applyRateBp(152500000, 128), 1952000);
});

test('rounding: every named rule behaves as specified', () => {
  assert.equal(roundScaled(150n, 100n, 'down'), 1);
  assert.equal(roundScaled(150n, 100n, 'up'), 2);
  assert.equal(roundScaled(150n, 100n, 'half-up'), 2);
  assert.equal(roundScaled(150n, 100n, 'half-even'), 2);
  assert.equal(roundScaled(250n, 100n, 'half-even'), 2); // ties to even
  assert.equal(roundScaled(-150n, 100n, 'half-up'), -2);
  assert.throws(() => roundScaled(1n, 1n, 'nearest-ish'), MoneyError);
});

const B = [
  { upTo: 52500000, rateBp: 110 },
  { upTo: 152500000, rateBp: 128 },
  { upTo: 302500000, rateBp: 275 },
  { upTo: null, rateBp: 300 },
];

test('brackets: graduated maths is correct at a known value', () => {
  // $525,000 @ 1.10% = $5,775 ; next $475,000 @ 1.28% = $6,080
  assert.equal(applyGraduated(100000000, B).totalCents, 1185500);
});

test('brackets: boundary is inclusive of the lower bracket, exclusive above', () => {
  const at = applyGraduated(52500000, B);
  assert.equal(at.totalCents, 577500);
  assert.equal(at.lines.length, 1, 'exactly at the ceiling stays in bracket 1');

  const justOver = applyGraduated(52500001, B);
  assert.equal(justOver.lines.length, 2, 'one cent over enters bracket 2');
  assert.equal(justOver.totalCents, 577500 + applyRateBp(1, 128));
});

test('brackets: zero and top-bracket amounts', () => {
  assert.equal(applyGraduated(0, B).totalCents, 0);
  assert.equal(applyGraduated(0, B).lines.length, 0);
  const top = applyGraduated(400000000, B);
  assert.equal(top.lines.length, 4, 'a $4m sale touches every bracket');
});

test('brackets: negative amounts are rejected, not silently floored', () => {
  assert.throws(() => applyGraduated(-1, B), BracketError);
});

test('brackets: gaps, overlaps, and a missing open-ended tier are data defects', () => {
  assert.throws(() => validateBrackets([{ upTo: 100, rateBp: 1 }, { upTo: 50, rateBp: 2 }, { upTo: null, rateBp: 3 }]), BracketError);
  assert.throws(() => validateBrackets([{ upTo: 100, rateBp: 1 }, { upTo: 100, rateBp: 2 }, { upTo: null, rateBp: 3 }]), BracketError);
  assert.throws(() => validateBrackets([{ upTo: 100, rateBp: 1 }]), BracketError);
  assert.throws(() => validateBrackets([]), BracketError);
});

test('exemption path: classified land is flat, not graduated', () => {
  const flat = applyFlat(100000000, 128);
  assert.equal(flat.totalCents, 1280000);
  assert.notEqual(flat.totalCents, applyGraduated(100000000, B).totalCents);
});

const SETS = [
  { id: 'v1', effective_start: '2023-01-01', effective_end: '2026-01-01' },
  { id: 'v2', effective_start: '2026-01-01', effective_end: null },
];

test('effective dates: a sale uses the rules in force on its own date', () => {
  assert.equal(resolveEffective(SETS, '2025-06-01').id, 'v1');
  assert.equal(resolveEffective(SETS, '2026-06-01').id, 'v2');
});

test('effective dates: intervals are half-open at the changeover', () => {
  assert.equal(resolveEffective(SETS, '2025-12-31').id, 'v1');
  assert.equal(resolveEffective(SETS, '2026-01-01').id, 'v2', 'start date belongs to the new version');
});

test('effective dates: an uncovered date refuses rather than guessing', () => {
  assert.throws(() => resolveEffective(SETS, '2019-01-01'), ResolutionError);
});

test('effective dates: overlapping versions are caught as a defect', () => {
  const bad = [
    { id: 'a', effective_start: '2023-01-01', effective_end: '2027-01-01' },
    { id: 'b', effective_start: '2026-01-01', effective_end: null },
  ];
  assert.throws(() => resolveEffective(bad, '2026-06-01'), /overlap/);
});

test('effective dates: malformed dates are rejected', () => {
  assert.throws(() => resolveEffective(SETS, '01/06/2025'), ResolutionError);
  assert.throws(() => resolveEffective(SETS, '2025-13-45'), ResolutionError);
});

test('missing parameters: an empty pool is an error, never a zero result', () => {
  assert.throws(() => resolveEffective([], '2025-06-01'), ResolutionError);
});

test('history: superseded versions are retained and ordered', () => {
  const h = versionHistory(SETS);
  assert.equal(h.length, 2);
  assert.equal(h[0].id, 'v2', 'newest first');
});

test('status ladder is strictly ordered', () => {
  assert.ok(rank(STATUS.UNVERIFIED) < rank(STATUS.SOURCE_VERIFIED));
  assert.ok(rank(STATUS.SOURCE_VERIFIED) < rank(STATUS.PROFESSIONAL_REVIEW_PENDING));
  assert.ok(rank(STATUS.PROFESSIONALLY_REVIEWED) < rank(STATUS.APPROVED_FOR_PUBLICATION));
  assert.ok(atLeast(STATUS.APPROVED_FOR_PUBLICATION, STATUS.SOURCE_VERIFIED));
  assert.ok(!atLeast(STATUS.UNVERIFIED, STATUS.SOURCE_VERIFIED));
});

test('only approved_for_publication is publishable', () => {
  for (const s of Object.values(STATUS)) {
    assert.equal(isPublishable({ status: s }), s === STATUS.APPROVED_FOR_PUBLICATION);
  }
});

test('a set cannot claim review without naming a reviewer', () => {
  assert.throws(() => assertReviewConsistent({
    id: 'x', status: STATUS.PROFESSIONALLY_REVIEWED,
    source: { url: 'https://example.gov', verified_on: '2026-01-01' }, review: { reviewer: null },
  }), /records no reviewer/);
});

test('a set cannot claim verification without a source URL and date', () => {
  assert.throws(() => assertReviewConsistent({
    id: 'y', status: STATUS.SOURCE_VERIFIED, source: {}, review: {},
  }), /no source URL/);
  assert.throws(() => assertReviewConsistent({
    id: 'z', status: STATUS.SOURCE_VERIFIED, source: { url: 'https://example.gov' }, review: {},
  }), /no verification date/);
});
