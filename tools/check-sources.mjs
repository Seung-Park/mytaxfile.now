#!/usr/bin/env node
/**
 * Source monitor.
 *
 * Fetches every source in the approved registry, fingerprints the response,
 * and compares it with the last recorded fingerprint. A difference does not
 * change any tax figure — it opens a change record in the review queue.
 *
 * Workflow:
 *   source detected → change compared → review pending → approved
 *   → effective-date activation → prior version retained
 *
 * This script never edits a parameter file. Only a human, after reading the
 * source, may promote a parameter past `unverified`.
 */

import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { SOURCES } from '../website/js/tax-rules/registry.js';

const QUEUE_DIR = new URL('../tax-rules-review-queue/', import.meta.url);
const STATE_FILE = new URL('../tax-rules-review-queue/source-state.json', import.meta.url);
const TIMEOUT_MS = 20000;

const today = () => new Date().toISOString().slice(0, 10);
const fingerprint = (text) =>
  createHash('sha256').update(text.replace(/\s+/g, ' ').trim()).digest('hex').slice(0, 16);

async function loadState() {
  if (!existsSync(STATE_FILE)) return {};
  try { return JSON.parse(await readFile(STATE_FILE, 'utf8')); } catch { return {}; }
}

async function fetchSource(src) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(src.url, { signal: ctrl.signal, redirect: 'follow' });
    if (!res.ok) return { ok: false, reason: `HTTP ${res.status}` };
    return { ok: true, fingerprint: fingerprint(await res.text()) };
  } catch (e) {
    return { ok: false, reason: e.name === 'AbortError' ? 'timeout' : e.message };
  } finally {
    clearTimeout(t);
  }
}

async function main() {
  await mkdir(QUEUE_DIR, { recursive: true });
  const state = await loadState();
  const changes = [];
  const unreachable = [];

  for (const src of SOURCES) {
    process.stdout.write(`checking ${src.id} … `);
    const result = await fetchSource(src);
    const prior = state[src.id];

    if (!result.ok) {
      console.log(`UNREACHABLE (${result.reason})`);
      unreachable.push({ id: src.id, url: src.url, reason: result.reason });
      state[src.id] = { ...(prior ?? {}), last_attempt: today(), last_result: `unreachable: ${result.reason}` };
      continue;
    }

    if (!prior?.fingerprint) {
      console.log('BASELINE recorded');
      state[src.id] = { fingerprint: result.fingerprint, last_checked: today(), last_result: 'baseline' };
    } else if (prior.fingerprint !== result.fingerprint) {
      console.log('CHANGED → review queued');
      changes.push({ id: src.id, url: src.url, title: src.title, from: prior.fingerprint, to: result.fingerprint });
      state[src.id] = { fingerprint: result.fingerprint, last_checked: today(), last_result: 'changed', previous: prior.fingerprint };
    } else {
      console.log('unchanged');
      state[src.id] = { ...prior, last_checked: today(), last_result: 'unchanged' };
    }
  }

  await writeFile(STATE_FILE, JSON.stringify(state, null, 2) + '\n');

  if (changes.length) {
    const file = new URL(`change-${today()}.md`, QUEUE_DIR);
    const body = [
      `# Source change detected — ${today()}`,
      '',
      '**Status: review pending.** No tax figure has been altered. Nothing here is approved.',
      '',
      '| Source | Was | Now |',
      '|---|---|---|',
      ...changes.map((c) => `| [${c.title}](${c.url}) | \`${c.from}\` | \`${c.to}\` |`),
      '',
      '## Required before any parameter changes',
      '',
      '1. Open each source and read the current rule.',
      '2. Compare against the affected parameter set.',
      '3. If the rule changed, add a NEW version with its own effective_start. **Never edit a past version** — a prior-year sale must still compute under the rules of its own year.',
      '4. Set the new version to `source_verified`, recording `verified_on`, the document title, and the URL.',
      '5. Route to a named professional. Only they may set `professionally_reviewed`.',
      '6. Only Seung Park may set `approved_for_publication`.',
      '',
      'Never promote a parameter on the strength of this diff alone. A fingerprint change means the page moved, not that you know what it now says.',
    ].join('\n');
    await writeFile(file, body + '\n');
    console.log(`\n${changes.length} change(s) queued → ${file.pathname}`);
  }

  if (unreachable.length) {
    console.log(`\n${unreachable.length} source(s) unreachable — no conclusion may be drawn about them.`);
  }
  if (!changes.length && !unreachable.length) console.log('\nAll sources unchanged.');

  // Unreachable is not failure; an undetected change is. Exit non-zero only on change.
  process.exit(changes.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
