---
name: mytaxfile
description: Canonical operating rules and approved requirements for the myTAXfilenow project (mytaxfile.now) — public website, private operations portal, pricing authority, employee and professional assignment, professional review and comments, e-signature and agreements, member document storage and version history, archive-instead-of-delete, Restricted Records Administrator, audit logs, role-based access, six-language support, security separation, Google Drive documentation, and GitHub/Netlify approval safeguards. Use this Skill before planning, designing, writing, reviewing, or modifying ANY myTAXfilenow work — including website pages, portal features, workflows, pricing, staffing, professional review, documents, translations, security, and deployment. Read it in full before proposing or making changes.
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

A separate, authenticated operations portal for staff, professionals, and members. Not built. No repo presence yet. See `references/private-portal-requirements.md`.

### 3. Owner pricing authority

Seung Park holds sole authority over pricing. No price, rate, discount, fee schedule, or quote figure is published, quoted, or committed without his express approval. The canonical Price Book does not yet exist; source docs disagree on Schedule C and entity figures (register row 9). Publish no dollar figures until a Price Book is approved.

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

### 15. Restricted Records Administrator authority

A designated **Restricted Records Administrator** role governs legally restricted records. Only this role may grant, revoke, or alter access to legally restricted material. The role is assigned by Seung Park.

### 16. Audit logs and access history

All access, changes, assignments, acceptances, comment activity, document actions, and permission changes are logged with actor, action, target, and timestamp. Audit logs are append-only and must not be editable or deletable from the application.

### 17. Role-based and least-privilege access

Access is role-based, default-deny, and least-privilege. Users receive the minimum access their role requires. Privilege escalation requires express authorization and is audit-logged.

### 18. Languages — English, Korean, Spanish, Simplified Chinese, Traditional Chinese, Japanese

**Approved as a requirement. Not yet implemented.**

Approved 2026-08-01. This supersedes register row 7 ("English only," decided 2026-07-31) as a *planning* requirement.

The live website is **English-only today** and stays that way until multilingual implementation is separately approved and built. Per rule 8 of the Skill update rule, documenting this requirement does not authorize changing the website. Do not describe the site as multilingual, and do not claim this is implemented.

### 19. Human review for high-risk translations

Translations touching tax, legal, pricing, qualification, security, or compliance content require human review before publication. Machine translation alone is never sufficient for these categories.

### 20. Separation of the public website from confidential tax-data systems

The public website and the confidential tax-data systems are architecturally separate. The public site never stores, processes, proxies, or has credentials to confidential tax data. Secure document handling lives only in the authenticated portal. Show only a future secure-portal handoff location on the public site until an approved provider is connected.

### 21. Google Drive documentation requirements

Approved business decisions and user-facing requirements are recorded in the designated Drive folder. Update the existing relevant Doc when the subject already exists; create a new Doc only for a genuinely different subject. Avoid duplicate canonical documents. Drive file naming convention: `myTAXfile | Short Summary`.

### 22. GitHub and Netlify approval safeguards

No commit, push, merge, pull request, branch deletion, Netlify deploy, DNS change, environment-variable change, or production configuration change without Seung Park's express approval. Prefer a named feature branch. Never push directly to a protected production branch without explicit authorization. Never commit secrets, `.env` files, credentials, client information, or tax data. Never claim a push or deployment succeeded without evidence.

## Proposed / unverified — never present as approved

- E-signature provider selection (area 9).
- Canonical Price Book, Service Catalog, State Eligibility Matrix, Responsibility Matrix, Vendor Register, Risk & Exception Register.
- Final display name / logo treatment — "myTAXfile" is a working wordmark, not confirmed.
- Any EA/CPA/IRS Authorized e-file Provider badge, IRS affiliation, "bank-grade security," "256-bit encryption," or specific regulatory-compliance claim.
- Guaranteed professional review, guaranteed response time, or guaranteed filing time. **No specific response-time promise may appear anywhere on the site.**
- Multilingual website implementation (area 18) — requirement approved, implementation not.

## Definition of done

For each approved batch: inspect first; make the smallest coherent change; run available formatter/lint/build; preview desktop and mobile for website work; verify the diff contains zero unapproved removals; report changed files, observable results, outstanding TBDs, and the exact next approval needed. Commit and push only the approved scope, only with express approval.

## Change history

- **2026-08-01** — Canonical project Skill created at `.claude/skills/mytaxfile/SKILL.md` so Claude Code discovers and auto-invokes it. Consolidated the permanent operating rules, source priority, Skill update rule, and 22 approved requirement areas. The existing website Skill at `skills/mytaxfile/build-mytaxfile-website-with-claude-code/SKILL.md` was left unchanged and is referenced as the website-execution spec. Approved by Seung Park.
- **2026-08-01** — Languages requirement approved: English, Korean, Spanish, Simplified Chinese, Traditional Chinese, Japanese (area 18). Supersedes register row 7 "English only" as a planning requirement. Website implementation not authorized by this entry.
- **2026-08-01** — Private operations portal requirement areas recorded (areas 2, 5–17, 20). Sourced from Seung Park's written instruction; not yet reconciled against the canonical Private Portal Requirements Google Doc, which was unreachable when this Skill was written.
