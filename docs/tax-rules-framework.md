# myTAXfile — Tax Rules and Parameters Framework

Governing document for every myTAXfile calculator. Approved 2026-08-01.

**No calculator may hard-code a tax figure. No figure may be published unless a
named person read it from a primary government source and a named professional
reviewed it.** The system enforces both mechanically; neither depends on anyone
remembering.

## Layout

```
website/js/engine/          pure calculation — no DOM, no network, no storage
  money.js                  integer-cent arithmetic, explicit rounding rules
  brackets.js               graduated + flat application, bracket validation
  resolve.js                effective-date and version selection
  status.js                 verification ladder and the publication gate
website/js/tax-rules/
  registry.js               approved primary sources — the only citable set
  us-wa/reet.js             Washington REET parameter sets, versioned
website/js/calculators/
  wa-reet.js                one calculator: composes engine + parameters
tests/                      node --test; never shipped to the browser
tools/check-sources.mjs     source monitor → review queue
tax-rules-review-queue/     change records awaiting human review
```

Engine code contains **no tax figures**. Parameter files contain **no logic**.
An annual update touches one reviewed data file.

## The verification ladder

Strictly ordered. A result reaches a customer only at the top rung.

| Status | Meaning |
|---|---|
| `unverified` | Not read from its source. **Cannot compute a customer result.** |
| `source_verified` | Read from the primary source; `verified_on` and URL recorded |
| `professional_review_pending` | Queued for a named professional |
| `professionally_reviewed` | A named professional signed off; reviewer recorded |
| `approved_for_publication` | Seung Park approved publication |

`calculateReet()` throws `NotPublishableError` below the top rung. `allowUnpublished`
exists for internal preview only and is never set by a public page.

Consistency is enforced, not trusted: a set claiming `professionally_reviewed`
without a reviewer throws; a set claiming `source_verified` without a URL and a
verification date throws.

## What every parameter set records

`id` · `jurisdiction` · `tax_type` · `scope` (federal/state/local) · `version` ·
`effective_start` · `effective_end` · `status` · `transaction_types` ·
`brackets` or `flat_rate_bp` · `rounding` · `source` (registry id, URL, document
title, `verified_on`, `last_checked`, `check_result`) · `review` (reviewer,
date, notes) · `assumptions` · `exceptions` · `open_questions`.

Rates are **integer basis points** (1.28% = `128`) and money is **integer
cents**, so no tax figure ever passes through binary floating point.

## Effective dates and history

Intervals are half-open: `effective_start <= date < effective_end`. A sale is
computed under the rules in force on **its own date**, not today's.

**Never edit a past version.** A rule change adds a new version with its own
`effective_start`; the prior version is retained so amended returns still
compute correctly. Overlapping periods and uncovered dates both throw — the
engine refuses to guess.

## Change-review workflow

```
source detected → change compared → review pending → approved
→ effective-date activation → prior version retained
```

`npm run check-sources` fingerprints every registered source and diffs it
against the last recorded state. On a difference it writes a change record to
`tax-rules-review-queue/` and exits non-zero. **It never edits a parameter.**

A fingerprint change means the page moved — not that anyone knows what it now
says. Promotion still requires a human to open the source.

## Hard rules

1. Never populate a figure from model training data. Primary sources only.
2. Never invent a reviewer, a verification date, a source, or a figure.
3. A source must be a `.gov` authority publishing the rule itself — not a
   summary, a news article, or a firm's blog. Enforced by test.
4. Leave a figure empty or `unverified` when it cannot be confirmed.
5. Report federal, state, and local separately. Never merge silently.
6. Every customer-facing result carries the mandatory disclaimer verbatim.
7. Calculations run entirely in the browser: no network, no storage, no
   analytics, nothing in the URL.

## Current state — 2026-08-01

**Washington REET is implemented and fully tested, and is NOT publishable.**

Every parameter set is `unverified`. This build environment cannot reach
`dor.wa.gov` or `app.leg.wa.gov` — both return HTTP 403 at the network egress
layer, confirmed by direct fetch and by the source monitor. No figure has been
read from its source by this system.

Candidate values are recorded so a reviewer has something concrete to check
rather than a blank file. They came from a search-engine summary, which is
**not** a primary source and **not** verification. `publicationReadiness()`
returns `ready: false` and lists every blocker.

### To make REET publishable

1. Open the three registry sources from a network that can reach them.
2. Confirm each bracket ceiling and rate; correct any that differ.
3. Resolve the open questions in the 2026 set — whether upper brackets moved,
   and the separate 1% transfer tax above $3,025,000, which is **not modelled**.
4. Set `source_verified` with `verified_on` and the document title.
5. Route to a named professional for `professionally_reviewed`.
6. Seung Park sets `approved_for_publication`.
7. Local REET stays user-supplied until the DOR schedule is read; the
   calculator asks rather than guesses.
