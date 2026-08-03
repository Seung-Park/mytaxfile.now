# myTAXfile Adapter — general-translation-skill

Project refinements for the myTAXfilenow repository, layered per the canonical Skill's own rule ("Project-, brand-, and audience-specific instructions may refine this Skill. They may not weaken its factual safeguards."). Adopted by Seung Park 2026-08-03.

## Binding project rules (constrain Mode A creative copy too)

- **The live website is English-only today** (canonical mytaxfile Skill area 18). Six languages are approved as a planning requirement — English, Korean, Spanish, Simplified Chinese, Traditional Chinese, Japanese — but no multilingual implementation is authorized by this Skill's presence. Never describe the site as multilingual until that is separately approved, built, and tested.
- **Human review is REQUIRED, not just recommended** (area 19): translations touching tax, legal, pricing, qualification, security, or compliance content require human review before publication. This strengthens localization Skill Mode B rule 7 for those categories.
- **Never send confidential customer-entered tax information to an unapproved external translation service** (area 18 — hard constraint).
- **No specific response-time promise in any language.** No security/encryption/compliance claim, no unverified credential, no price or fee figure outside the approved Price Book, in any language.
- Nearly all myTAXfile legal, pricing, and tax content is **Mode B (strict factual translation)** under this Skill. Marketing copy (headlines, CTAs, service descriptions) is Mode A but bound by the claim rules above.

## Terminology sources of record

- Pricing terms: `.claude/skills/mytaxfile/references/price-book.md` — figures never restated or converted in translation without approval.
- Legal wording: the approved Index security copy (area 23) and the three legal pages (area 24) are approved **verbatim in English**; their translations are Mode B and require attorney/qualified review before publication.
- Tax figures: `docs/tax-rules-framework.md` — never populate a tax figure from model training data, in any language.

## Locale notes

- Approved planning languages map to: `en-US`, `ko-KR`, `es-*` (locale TBD), `zh-Hans`, `zh-Hant`, `ja-JP`. Locale-file architecture does not exist yet (area 18); do not invent one ahead of the approved implementation plan.
- "myTAXfile.now" and the boxed-logo wordmark are protected strings — never translated or restyled.
