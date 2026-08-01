---
name: mytaxfile
description: Canonical operating rules and approved requirements for the myTAXfilenow project (mytaxfile.now) — public website, private operations portal, pricing authority, employee and professional assignment, professional review and comments, e-signature and agreements, member document storage and version history, archive-instead-of-delete, Records Administrator authority, audit logs, role-based access, six-language support, security separation, Google Drive documentation, and GitHub/Netlify approval safeguards. Use this Skill before planning, designing, writing, reviewing, or modifying ANY myTAXfilenow work — including website pages, portal features, workflows, pricing, staffing, professional review, documents, translations, security, and deployment. Read it in full before proposing or making changes.
---

# myTAXfilenow — Canonical Project Skill

Status: **Active**. Project code: `mytaxfile`. This is the single canonical Skill for the myTAXfilenow project. Do not create a second canonical Skill.

Repository: `Seung-Park/mytaxfile.now`. Owner and sole approval authority: **Seung Park**.

## Scope and relationship to the website Skill

This Skill governs the **whole project**. The website build has its own long-standing execution spec:

- `skills/mytaxfile/build-mytaxfile-website-with-claude-code/SKILL.md` — binding execution spec for website work (frame system, palette, Phase 1/2 scope, white-first visual system, validation).
- `skills/mytaxfile/build-mytaxfile-website-with-claude-code/adapters/claude.md` — Claude adapter.

That file is **not superseded and not duplicated here**. For any website work, read it in full in addition to this Skill. This Skill is the parent; that file is the website-execution child.

Other required reading:

- `docs/requirements-register.md` — the approved-requirements register, with superseded items and open TBDs.
- `AGENTS.md` — platform-neutral agent rules.
- Seung's personal skills, loaded from his skill set and not duplicated in this repo: `design-stable-web-frames`, `apply-world-class-expert-standard`, `maintain-project-skill-folders`.

## Non-negotiable operating rules

1. Read this Skill before planning or modifying any myTAXfilenow work.
2. Treat the existing approved project files as the starting point — never as a blank slate.
3. Preserve all approved work and all unrelated existing content.
4. **Never delete, reduce, replace, rename, move, or restructure** existing files, folders, sections, images, or approved content without Seung Park's prior approval for that exact change.
5. Update this canonical Skill whenever a new permanent requirement is approved.
6. Update the corresponding Claude Code instructions or references whenever this Skill changes.
7. Record approved business decisions and user-facing requirements in the designated Google Drive folder.
8. Update an existing relevant Google Doc when the subject already exists.
9. Create a separate Google Doc only for a genuinely different subject.
10. Avoid duplicate canonical documents and duplicate Skills.
11. When instructions conflict, the latest expressly approved instruction controls.
12. Distinguish **proposed ideas** from **approved requirements** at all times.
13. Never claim a proposed requirement has already been implemented.
14. Inspect before editing, implement the smallest coherent change, validate, show previews, and give a completion report.
15. **Never commit, push, merge, create a PR, or deploy without Seung Park's express approval.**

## Source priority

When sources disagree, this order controls:

1. **Seung Park's latest express approval** (highest).
2. **This canonical `SKILL.md`.**
3. **Current approved Google Docs** in the designated Drive folder.
4. **`CLAUDE.md` project operating rules.**
5. **Existing implementation and historical documents** (lowest).

Do not silently overwrite a conflict. Report the exact conflict and request a decision whenever the latest approved direction is unclear. A lower-priority source is never edited away just because a higher one disagrees — record the supersession explicitly in `docs/requirements-register.md` so the history survives.

Designated canonical sources:

- Google Drive folder: `https://drive.google.com/drive/folders/1-At9BI6PtD0rroP14TnF_aMsIwcjOAJy` (referred to in older repo docs as "2.1 myTaxfile" — treat as the same folder unless Seung says otherwise).
- Private Portal Requirements: `https://docs.google.com/document/d/1OFPURq0SsEkM0t2OGa91asXnslYmISqyTULnHqZIP40`.

## Skill update rule

When Seung Park approves a permanent new requirement:

1. Update this canonical `SKILL.md`.
2. Update **only** the affected reference file.
3. Update the relevant Google Doc in the designated Drive folder.
4. Add the approval date and a concise change note to the Change history below.
5. Preserve prior approved versions and history — supersede in place, never erase.
6. Verify `CLAUDE.md` still points to this canonical Skill.
7. Do not create a second canonical Skill.
8. **Do not modify the website merely because a planning requirement was documented.**
9. Obtain separate approval before implementation, GitHub actions, or deployment.

## Approved requirement areas

Requirement detail for the private portal and its access-control model lives in
`references/private-portal-requirements.md` — read it for any portal, document, role, audit, or professional-workflow work.

### 1. Public website

Public marketing and intake site at mytaxfile.now. Static HTML/CSS/JS, no build framework. Full frame system, palette, Phase 1 service catalog, six launch states, white-first visual system, and validation rules are in the website Skill — read it before touching `website/`.

Hard constraint: public website forms must never collect SSNs, tax documents, bank information, or identity documents.

### 2. Private operations portal

A separate, authenticated operations portal for staff, professionals, and members. Not built. No repo presence yet. See `references/private-portal-requirements.md` — **reconciled against the canonical Google Doc on 2026-08-01**, and now the authoritative in-repo summary of roles, required pages, assignment/status model, review and comment rules, e-signature, document vault, retention, audit, security controls, multilingual operation, and the phased approval gates.

Current approval covers requirements, page maps, permission rules, workflows, wireframes, and prototypes only. Production handling of real tax data, uploads, authentication, payments, professional sign-off, filing, legal matters, or e-signatures requires separate architecture, vendor, security, legal, and operating approval.

### 3. Owner pricing authority

Seung Park holds sole authority over pricing. No price, rate, discount, fee schedule, or quote figure is published, quoted, or committed without his express approval.

**The canonical Price Book was approved 2026-08-01** — see `references/price-book.md`. It is the single authoritative pricing source; website copy, quotes, estimates, invoices, and code read from it and nothing else. It resolves the long-standing $299/$399 Schedule C and $795/$799 entity conflicts (register row 9) and closes Website Plan v2 §14 launch-blocker #6.

**Approval of the register is not approval to publish.** Displaying any figure on the website is a separate decision. When prices are published, Website Plan v2 §14 governs: "starting at" or "estimate" only, never a guaranteed final fee before scope review, and no promise of refund amount, tax saving, filing time, acceptance, or audit outcome.

Tax year, effective date, minimum fee, discount authority, refund rule, and gross-margin validation remain **TBD** and block publication of any figure.

### 4. Owner authority over employees and professionals

Seung Park holds sole authority over engaging, assigning, suspending, and removing employees and professionals. No system may auto-assign work in a way that bypasses this authority.

### 5. Authorized employee assignment authority

Only employees Seung Park has expressly authorized may assign work. Assignment authority is an explicit, auditable grant — never implied by job title or system role alone.

### 6. CPA, EA, and attorney assignment and acceptance workflow

Engagements are assigned to a named CPA, EA, or attorney, who must **actively accept** before work proceeds. Assignment plus acceptance are both recorded with actor and timestamp. No silent or default acceptance.

### 7. Professional review results and opinions

Professional review outcomes and written opinions are first-class records: attributed to the named professional, versioned, retained, and never edited away. Superseding opinions are added; prior opinions are preserved.

### 8. Comment confidentiality tiers

Every comment carries exactly one visibility tier:

- **Client-visible** — the member can see it.
- **Company-internal** — staff only; never exposed to the member.
- **Legally restricted** — restricted to expressly authorized parties; the tightest tier.

Tier is mandatory at creation. Default to the most restrictive tier when unclear. Never widen a tier without approval.

### 9. External e-signature integration — provider TBD

Signature capture uses an external provider. **Provider is TBD and unapproved.** Do not select, integrate, contract, or assume a vendor without separate approval.

### 10. Internal and external agreement signing

The system supports both internal agreements (staff, professionals, contractors) and external agreements (members, clients). Both route through the approved e-signature flow once a provider exists.

### 11. Member document storage

Members have secure document storage in the private portal. This is **strictly separate** from the public website — see area 20.

### 12. Automatic saving and document version history

Work saves automatically. Documents keep full version history. A new version never destroys its predecessor.

### 13. Member deletion prohibition

**Members must not be deleted.** No hard delete, no purge, no cascade removal of member records.

### 14. Archive instead of deletion

Archiving replaces deletion throughout. Archived records remain retrievable, auditable, and intact.

### 15. Records Administrator authority

A designated, **narrowly limited** Records Administrator role governs restricted records: legal holds, restoration of archived records, export of complete case histories, and final disposition. Final disposition is permitted only under an approved written retention schedule, applicable law, contractual duties, privacy obligations, and **dual approval**. The role is assigned by Seung Park. The retention schedule does not exist yet.

> **Naming unresolved.** Three names are in circulation: the canonical Google Doc §6 says "**Company** Records Administrator"; this Skill originally said "**Restricted** Records Administrator"; the 2026-08-01 work order says plain "Records Administrator." The Doc's definition is the most detailed and is reflected above. Confirm the single correct name with Seung Park before implementing. See `references/private-portal-requirements.md` §2.

### 16. Audit logs and access history

All access, changes, assignments, acceptances, comment activity, document actions, and permission changes are logged with actor, action, target, and timestamp. Audit logs are append-only and must not be editable or deletable from the application.

### 17. Role-based and least-privilege access

Access is role-based, default-deny, and least-privilege. Users receive the minimum access their role requires. Privilege escalation requires express authorization and is audit-logged.

### 18. Languages — English, Korean, Spanish, Simplified Chinese, Traditional Chinese, Japanese

**Approved as a requirement. Not yet implemented.**

Approved 2026-08-01. This supersedes register row 7 ("English only," decided 2026-07-31) as a *planning* requirement.

The live website is **English-only today** and stays that way until multilingual implementation is separately approved and built. Per rule 8 of the Skill update rule, documenting this requirement does not authorize changing the website. Do not describe the site as multilingual, and do not claim this is implemented.

Mechanism (canonical Doc §9): English is the default; the same page structure switches locale **through approved locale files**. No locale-file architecture exists yet. Translation must cover navigation, buttons, forms, validation, confirmations, errors, messages, accessibility labels, and document instructions — not only marketing text. **Never send confidential customer-entered tax information to an unapproved external translation service.**

### 19. Human review for high-risk translations

Translations touching tax, legal, pricing, qualification, security, or compliance content require human review before publication. Machine translation alone is never sufficient for these categories.

### 20. Separation of the public website from confidential tax-data systems

The public website and the confidential tax-data systems are architecturally separate. The public site never stores, processes, proxies, or has credentials to confidential tax data. Secure document handling lives only in the authenticated portal. Show only a future secure-portal handoff location on the public site until an approved provider is connected.

### 21. Google Drive documentation requirements

Approved business decisions and user-facing requirements are recorded in the designated Drive folder. Update the existing relevant Doc when the subject already exists; create a new Doc only for a genuinely different subject. Avoid duplicate canonical documents. Drive file naming convention: `myTAXfile | Short Summary`.

### 22. GitHub and Netlify approval safeguards

No commit, push, merge, pull request, branch deletion, Netlify deploy, DNS change, environment-variable change, or production configuration change without Seung Park's express approval. Prefer a named feature branch. Never push directly to a protected production branch without explicit authorization. Never commit secrets, `.env` files, credentials, client information, or tax data. Never claim a push or deployment succeeded without evidence.

### 23. Index security guidance and personal-account upload

Approved 2026-08-01 (Work Order: *Index Security Guidance & Personal Account Upload*).

**Approved Index page copy — exact, verbatim:**

> To protect your information, please do not send sensitive documents through this public page or regular email. After you start, you can securely upload documents from your personal account. We may also provide a secure upload link in your confirmation email.

This supersedes the earlier absolutist Index wording ("We never ask for your SSN, tax documents, or bank details on this website." / "Sensitive documents are never collected on this website. After reviewing your request, we'll explain how to share them separately."), which was judged overly strict and alarming. Do not reuse the superseded wording on the Index page or in active instructions.

**Applied to the website 2026-08-01**, in `website/index.html` section `HOME-C-004`, replacing the two superseded statements. The third bullet (professional review) was left untouched.

**Availability qualifier.** The copy references a personal account and a secure upload link in the present tense; neither exists. The site **must not imply that an account, portal, or secure link is already operational until it has actually been implemented and tested.** The approved three sentences are therefore published verbatim followed by an italic qualifier — *"Personal accounts and secure upload are launching soon."* — so the page satisfies both the exact-copy requirement and the no-false-availability rule. **Remove the qualifier once the account is live and tested**, not before. See register row 48.

**Approved customer experience**

- The personal account is the primary place for document upload, case status, messages, signatures, invoices, and final documents.
- The confirmation email may provide either a personal-account link or a verified secure-upload link.
- Sensitive documents must not be attached to ordinary email.
- Public pages request only the minimum information needed to begin service.
- A direct upload link sent by email must expire, require appropriate identity verification, and be limited to the intended client or case.

**Data-handling prohibition (hard constraint).** Never place SSNs, tax documents, bank information, passwords, or other sensitive client data in ordinary email, public-page forms, source code, logs, analytics, or URL query strings.

Functional detail — account scope, confirmation email, secure-link controls, upload handling, records, and audit trail — is in `references/private-portal-requirements.md` §1a.

**Already recorded in Drive.** The approved copy is in canonical Doc §12 (modified 2026-08-01T05:54), and the work order is preserved as `myTAXfile | Claude Code Work Order — Index Security & Personal Account Upload`. No further Drive write is needed for this subject; creating another would duplicate a canonical source.

### 24. Public legal and information pages

Approved 2026-08-01. Three pages built: `website/privacy-notice.html`, `website/terms-of-use.html`, `website/accessibility.html`, linked from the footer of every public page as **Privacy Notice | Terms of Use | Accessibility**.

**Accuracy is the governing rule.** These pages describe what myTAXfile actually does, not what it plans to build. Verified as of 2026-08-01: the public site contains no forms, inputs, cookies, analytics, scripts, external requests, or images, so the Privacy Notice states plainly that the public website collects no personal information. If any collecting feature is added, the Privacy Notice must be updated **before** that feature goes live.

**Standing rules for these pages**

- Never copy another company's legal pages.
- Never present draft language as attorney-approved. All three carry a visible "Draft — pending review" banner.
- Never invent an entity name, address, licence, governing law, dispute procedure, refund policy, or professional guarantee. Unknown operational facts use a visibly marked `<span class="placeholder">` and must be replaced before publication.
- No response-time commitment anywhere, including the accessibility contact.
- No security, encryption, certification, or compliance claim until independently verified (canonical Doc §8).
- The Privacy Notice must disclose company retrieval rights over client records (canonical Doc §6).
- The approved Index security copy and its "launching soon" qualifier appear on both the Privacy Notice and Terms of Use; keep all three copies in sync with area 23.

**Accessibility target: WCAG 2.2 Level AA — PROPOSED, not adopted.** No conformance claim may be published, and no audit has been performed. All legal-page colour pairs measure ≥5.04:1.

**Contrast — fixed site-wide 2026-08-01.** `--color-accent-dark` `#c2632f` measured 4.10:1 on white and 3.99:1 on the body background, below AA for normal text. `--color-accent-text` `#9e4a1f` now sits in the primary `:root` and carries **all text** usage; `--color-accent-dark` is reserved for fills, borders, and focus rings. Lowest text pair is 5.04:1. **Rule: never use `--color-accent-dark` for text.** Register rows 69 and 85.

**No shared component system.** The approved stack is static HTML with no build step, so the header and footer are duplicated across all four pages. Any footer change must be applied to every page by hand.

### 25. Resources and the calculator suite

Approved 2026-08-01. `website/resources.html` — **Tax Calculators & Estimators**, linked from the primary nav on every page.

**Nothing is operational.** Nine Phase 1 calculators are carded (6 federal, 3 Washington), 10 planned, plus Process / Checklists / FAQ / Guides. Every card reads "Coming soon" in text, never by colour alone.

**Standing rules when these are built**

- Calculations run **entirely in the browser**. No network call, no storage, no analytics, no values in the URL. This is what lets the Privacy Notice keep its "collects nothing" claim.
- Never request an SSN, bank details, or a document upload.
- Tax parameters live in **per-tax-year data files**, separate from interface code. Each value carries `source_url`, `source_name`, `tax_year`, `verified_by`, `verified_date`. **No calculator ships until those fields are populated** — the review gate is mechanical, not a promise.
- Never populate a tax figure from model training data. Primary sources only, verified by the assigned professional.
- Show tax year and last-updated on every tool; show ranges where an exact figure would mislead; separate federal, state, and combined results.
- The result disclaimer is mandatory and verbatim (register row 63 area). It does not reduce myTAXfile's responsibilities.

**Washington facts already established** (Website Plan v2 §10.1, Workflow): no state income tax, no inheritance tax. The capital gains **excise** tax does **not** apply to real-estate sales or to gains inside retirement accounts. Washington has an estate tax and a real estate excise tax.

**Permanently excluded — no return-level income tax calculator.** Approved by Seung Park 2026-08-01: **no calculator for Form 1040 and none for Form 1120.** These are the returns myTAXfile sells; a public calculator that computes a customer's own return undercuts the service and puts the highest-liability computation on an unsupervised page. Transaction-specific estimators (REET, capital gains, home sale, depreciation recapture, self-employment, quarterly) remain in scope — they surface a situation that then needs professional help. "Business Entity Tax Comparison" stays permitted as a *comparative* tool only, never a 1120 calculation.

**Excluded from Phase 1:** estate, inheritance, and gift calculators — Referral/Specialist per Workflow §10C, and the highest-liability tools in the set. Tax Filing Fee Estimator is unblocked by the approved Price Book but still requires a published-fee-method decision.

## Proposed / unverified — never present as approved

- E-signature provider selection (area 9).
- Canonical Price Book, Service Catalog, State Eligibility Matrix, Responsibility Matrix, Vendor Register, Risk & Exception Register.
- Final display name / logo treatment — "myTAXfile" is a working wordmark, not confirmed.
- Any EA/CPA/IRS Authorized e-file Provider badge, IRS affiliation, "bank-grade security," "256-bit encryption," or specific regulatory-compliance claim.
- Guaranteed professional review, guaranteed response time, or guaranteed filing time. **No specific response-time promise may appear anywhere on the site.**
- Every claim in the Privacy Notice, Terms of Use, and Accessibility pages (area 24) — drafted, **not** reviewed by an attorney or privacy counsel. 15 placeholders remain unresolved.
- WCAG 2.2 AA as the accessibility target (area 24) — recommended, not adopted.
- Multilingual website implementation (area 18) — requirement approved, implementation not. **There is no shared translation architecture in the repository yet**; instructions to "use the shared translation architecture" describe a system still to be built.
- Personal account / client portal availability (area 23) — the account, secure upload, and secure-link systems do not exist. Never state or imply on the public site that they are operational.
- Publication of the approved Index copy in present tense (area 23) — approved as copy, gated on the account being live or on an approved not-yet-live framing.

## Definition of done

For each approved batch: inspect first; make the smallest coherent change; run available formatter/lint/build; preview desktop and mobile for website work; verify the diff contains zero unapproved removals; report changed files, observable results, outstanding TBDs, and the exact next approval needed. Commit and push only the approved scope, only with express approval.

## Change history

- **2026-08-01** — Canonical project Skill created at `.claude/skills/mytaxfile/SKILL.md` so Claude Code discovers and auto-invokes it. Consolidated the permanent operating rules, source priority, Skill update rule, and 22 approved requirement areas. The existing website Skill at `skills/mytaxfile/build-mytaxfile-website-with-claude-code/SKILL.md` was left unchanged and is referenced as the website-execution spec. Approved by Seung Park.
- **2026-08-01** — Languages requirement approved: English, Korean, Spanish, Simplified Chinese, Traditional Chinese, Japanese (area 18). Supersedes register row 7 "English only" as a planning requirement. Website implementation not authorized by this entry.
- **2026-08-01** — Private operations portal requirement areas recorded (areas 2, 5–17, 20). Sourced from Seung Park's written instruction; not yet reconciled against the canonical Private Portal Requirements Google Doc, which was unreachable when this Skill was written.
- **2026-08-01** — Work Order *Index Security Guidance & Personal Account Upload* approved. Added area 23: exact approved Index copy superseding the earlier absolutist wording, personal account as the primary secure workspace, confirmation-email and secure-link rules, and the sensitive-data prohibition covering email, forms, source code, logs, analytics, and URL query strings. Functional detail added to `references/private-portal-requirements.md`. **Documentation and planning only** — the `website/index.html` text change, account/portal development, GitHub actions, and Netlify deployment remain separate approval steps. Google Doc not updated in that session: the Drive connector was unavailable.
- **2026-08-01** — Area 24 added. Privacy Notice, Terms of Use, and Accessibility pages built and linked from every public footer; copyright line changed to "© 2026 myTAXfile. All rights reserved." with the prototype disclaimer retained beneath it. Legal-page CSS appended (263 lines, zero modifications to existing rules) including a scoped `--color-accent-text` that fixes three WCAG AA contrast failures introduced by the brand accent. All three pages are drafts pending attorney, privacy, and accessibility review, carrying 15 marked placeholders. Google Doc not updated — the Drive connector was unavailable in this session.
- **2026-08-01** — Drive connector became available. `references/private-portal-requirements.md` **reconciled against the canonical Google Doc** and substantially expanded: full role table including Operations Manager and Company Records Administrator, three-tier employee assignment authority, five required private pages, assignment record fields, ten-step status sequence, Publish action for client-visible comments, attorney privilege caveat, e-signature candidates and the proprietary-engine prohibition, document-vault storage rules, dual-approval final disposition, expanded security controls, locale-file multilingual mechanism, five-phase development sequence, and the Drive documentation rule. Skill area 15 corrected (Records Administrator scope and dual approval; name still unresolved across three sources), area 2 and area 18 expanded. **No Drive write performed** — Doc §12 already contains the approved Index copy and a work-order Doc already exists; writing again would duplicate a canonical source.
