import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateReet, publicationReadiness, CLASSIFICATIONS } from '../website/js/calculators/wa-reet.js';
import { NotPublishableError } from '../website/js/engine/status.js';
import { REET_STATE, REET_FLAT_CLASSIFIED, REET_LOCAL } from '../website/js/tax-rules/us-wa/reet.js';
import { SOURCES, findSource } from '../website/js/tax-rules/registry.js';

const PREVIEW = { allowUnpublished: true };

test('unapproved parameters cannot produce a customer-facing result', () => {
  assert.throws(
    () => calculateReet({ sellingPrice: 500000, saleDate: '2025-06-01' }),
    NotPublishableError,
    'the publication gate must block unverified data',
  );
});

test('publicationReadiness reports the calculator as not ready, and says why', () => {
  const r = publicationReadiness();
  assert.equal(r.ready, false);
  assert.ok(r.blocking.length > 0);
  for (const b of r.blocking) assert.ok(b.source, 'each blocker names its source URL');
});

test('preview mode computes, and labels the result unverified', () => {
  const r = calculateReet({ sellingPrice: '1,000,000', saleDate: '2025-06-01' }, PREVIEW);
  assert.equal(r.state.totalCents, 1185500);
  assert.equal(r.provenance.status, 'unverified');
  assert.equal(r.provenance.publishable, false);
});

test('the 2026 version is selected by sale date, not by today', () => {
  const before = calculateReet({ sellingPrice: '700,000', saleDate: '2025-12-31' }, PREVIEW);
  const after = calculateReet({ sellingPrice: '700,000', saleDate: '2026-01-01' }, PREVIEW);
  assert.equal(before.state.parameterSetId, 'us-wa/reet/state/2023-01-01');
  assert.equal(after.state.parameterSetId, 'us-wa/reet/state/2026-01-01');
  assert.ok(after.state.totalCents < before.state.totalCents,
    'a higher first-bracket ceiling should reduce tax on a $700k sale');
});

test('classified land takes the flat exception path', () => {
  const std = calculateReet({ sellingPrice: '1,000,000', saleDate: '2025-06-01' }, PREVIEW);
  const ag = calculateReet({ sellingPrice: '1,000,000', saleDate: '2025-06-01', classification: 'agricultural_land' }, PREVIEW);
  assert.equal(ag.state.totalCents, 1280000);
  assert.notEqual(ag.state.totalCents, std.state.totalCents);
  const timber = calculateReet({ sellingPrice: '1,000,000', saleDate: '2025-06-01', classification: 'timberland' }, PREVIEW);
  assert.equal(timber.state.totalCents, ag.state.totalCents);
});

test('state and local are reported separately and never merged silently', () => {
  const r = calculateReet({ sellingPrice: '1,000,000', saleDate: '2025-06-01', localRateBp: 50 }, PREVIEW);
  assert.equal(r.state.totalCents, 1185500);
  assert.equal(r.local.taxCents, 500000);
  assert.equal(r.totalCents, 1685500);
  assert.equal(r.federal, null, 'federal is explicitly absent, not zero');
});

test('local rate is optional and is never invented', () => {
  const r = calculateReet({ sellingPrice: '500,000', saleDate: '2025-06-01' }, PREVIEW);
  assert.equal(r.local, null);
  assert.deepEqual(REET_LOCAL, [], 'local rates are deliberately unpopulated');
});

test('bad input is rejected, not coerced', () => {
  assert.throws(() => calculateReet({ sellingPrice: -1, saleDate: '2025-06-01' }, PREVIEW));
  assert.throws(() => calculateReet({ sellingPrice: 'abc', saleDate: '2025-06-01' }, PREVIEW));
  assert.throws(() => calculateReet({ sellingPrice: 1000, saleDate: 'June 2025' }, PREVIEW));
  assert.throws(() => calculateReet({ sellingPrice: 1000, saleDate: '2025-06-01', classification: 'houseboat' }, PREVIEW));
  assert.throws(() => calculateReet({ sellingPrice: 1000, saleDate: '2025-06-01', localRateBp: 0.5 }, PREVIEW));
});

test('a sale before any known version refuses rather than guessing', () => {
  assert.throws(() => calculateReet({ sellingPrice: 1000, saleDate: '2015-01-01' }, PREVIEW), /No parameter set covers/);
});

test('every result carries the mandatory disclaimer verbatim', () => {
  const r = calculateReet({ sellingPrice: 1000, saleDate: '2025-06-01' }, PREVIEW);
  assert.match(r.disclaimer, /^This calculator provides a preliminary estimate for educational purposes only\./);
  assert.match(r.disclaimer, /not tax, legal, or financial advice/);
});

test('no parameter set claims a reviewer or a verification it does not have', () => {
  for (const s of [...REET_STATE, ...REET_FLAT_CLASSIFIED]) {
    if (s.status === 'unverified') {
      assert.equal(s.source.verified_on, null, `${s.id} must not claim a verification date`);
      assert.equal(s.review.reviewer, null, `${s.id} must not name a reviewer`);
    }
  }
});

test('every parameter set cites a source that exists in the approved registry', () => {
  for (const s of [...REET_STATE, ...REET_FLAT_CLASSIFIED]) {
    const src = findSource(s.source.registry_id);
    assert.equal(src.url, s.source.url, `${s.id} URL must match the registry entry`);
  }
});

test('registry sources are government authorities', () => {
  for (const s of SOURCES) {
    assert.match(s.authority.root, /\.gov$/, `${s.id} must cite a .gov authority`);
  }
});

test('classifications are closed', () => {
  assert.deepEqual([...CLASSIFICATIONS].sort(), ['agricultural_land', 'standard', 'timberland']);
});
