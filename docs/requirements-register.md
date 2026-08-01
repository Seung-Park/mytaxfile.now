# myTAXfile — Approved Requirements Register

Snapshot as of 2026-07-31. Source documents live in Google Drive, folder "2.1 myTaxfile" (in scope for this project: this folder only). This register is the in-repo traceability copy; Google Docs remain the business-planning source of record.

Control hierarchy (per `myTAXfile | Workflow`, section 7): the Workflow doc is the operational specification; `myTAXfile | Website Plan v2` governs customer-facing structure/messaging; `myTAXfile | Master Plan` is strategic reference material only. Nothing from the Master Plan is build-authoritative on its own.

## Approved requirements

| # | Source | Section | Requirement | Status | Website impact |
|---|---|---|---|---|---|
| 1 | SKILL.md; Workflow "Phase 1 승인기록" | Approved Phase 1 | Core services: Form 1040, Schedule C, Schedule E, Form 1120-S | Approved | Core service pages |
| 2 | Same | Same | Form 1065 only if qualified preparer + reviewer available | Approved (conditional) | Show as conditional, not guaranteed |
| 3 | Same | Same | Amended returns / IRS or state notices | Approved — case-by-case, separate quote | Route to Review & Quote, not a standard service page |
| 4 | This conversation, 2026-07-31 | Scope change | Launch states: **Washington, California, New York, Illinois, Texas, Florida** active; all other states shown as **"Coming Soon"** — supersedes the prior WA-only pilot scope | **Approved — decided 2026-07-31** | State-availability badge/list on Home and Footer; no nationwide claims |
| 5 | This conversation, 2026-07-31 | Scope change | Service catalog stays at the Phase 1 core (row 1) — geographic expansion only, no new service types added | **Approved — decided 2026-07-31** | Do not add Partnership/Payroll/1099/Trust/Nonprofit/International pages yet |
| 6 | SKILL.md; Work Order; Workflow "Phase 1 승인기록"; Master Plan | Languages | English **and Korean**, equal coverage | **Superseded** | — |
| 7 | This conversation, 2026-07-31 | Scope change | Languages: **English only** | **Superseded as a planning requirement by row 27 (2026-08-01).** Still describes the *implemented* state of the live site until multilingual work is separately approved and built. | Site is English-only today; no language switcher built |
| 8 | SKILL.md | Pricing | Low base + form/state/complexity add-ons; no final prices published | Approved | "Starting at / estimate" language only, no numbers |
| 9 | Website Plan v2 §12 vs Workflow §3 | Pricing tables | Schedule C: $299 (Plan v2) vs $399 (Workflow) · S-Corp/entity: $795 vs $799 | **Not approved / conflicting** — flagged as unresolved by the source docs themselves (Workflow §14) | Publish no dollar figures until a canonical Price Book is approved |
| 10 | SKILL.md | Public forms | No SSN, tax documents, bank information, or identity documents on public forms | Approved — hard constraint | Applies to every intake/contact/quote form |
| 11 | SKILL.md | Required functions | "Find My Service" preliminary-recommendation tool | Approved (Phase 2 scope) | Build per Phase 2 order |
| 12 | SKILL.md | Required functions | "Request a Review & Quote" | Approved (Phase 2 scope) | Entry points: Home, Individual Tax, Business Tax, Find My Service, FAQ, Contact |
| 13 | SKILL.md | Phase 2 build order | Home → Find My Service → Request Review & Quote → Individual Tax → Business Tax → How It Works → Pricing Approach → FAQ/Contact → Professionals/Legal | Approved (Prototype) | Use as build sequence |
| 14 | Website Plan v2; Master Plan | Full site plan | Nationwide catalog: Partnership, Payroll, 1099, Trust/Estate, Gift, Nonprofit, International, Multi-State, Consulting & Review, Client Portal, TaxDome/Canopy integration | **Not approved for current build — future-phase reference** | Do not build now — contradicts row 5 |
| 15 | Workflow.docx | Launch status | Overall public launch = HOLD; only a controlled pilot may proceed after Gates 0–3 | Approved constraint | No live payments, no real client data, no "nationwide available" claims |
| 16 | Workflow.docx | File naming | New project files named `myTAXfile \| Short Summary` | Approved | Applies to Drive docs; repo files use standard code-repo naming |
| 17 | SKILL.md | Change control | No deletion/reduction/rename of approved work without explicit approval; feature branch only, no direct push to protected branch without authorization | Approved | Governs git workflow |
| 18 | This conversation, 2026-07-31 | Tech stack | Static HTML/CSS/JS, no build framework | **Approved — decided 2026-07-31** | `website/` contains plain HTML/CSS/JS |
| 19 | This conversation, 2026-07-31 | Frame hierarchy | Global/Category/Subcategory/Individual frame hierarchy confirmed. Color palette: White / Deep Navy `#0B2545` / Teal `#0F766E` / Muted Gold `#C58A2A` | **Superseded — see row 21** | See Skill file for full hierarchy |
| 20 | This conversation, 2026-07-31 | Main Box | Image-only Main Box (no text/overlay); headline/value-prop goes in Content/Body instead | **Approved — decided 2026-07-31 (per `design-stable-web-frames` default)** | Hero section design |
| 21 | This conversation, 2026-08-01 | Color palette | Light/warm palette — supersedes the dark-navy palette in row 19: warm ivory background `#FDF8F0`, warm brown ink `#4A3728`, terracotta accent/CTA `#D97742`, warm gold `#E3A857`, warm dark-brown footer `#3D2B20` | **Approved — decided 2026-08-01** | Applies to all pages going forward |
| 22 | This conversation, 2026-08-01 | Home page content | Real content approved for Home page's six Content/Body boxes (HOME-C-001–006), replacing the placeholder frame skeleton | **Approved — decided 2026-08-01** | `website/index.html` now has finished draft copy, pending review |
| 23 | This conversation, 2026-08-01 ("Final Integrated Improvement Direction") | Visual system | White-first system: near-white body `#FCFCFA`, pure-white cards, beige as subtle accent only, orange/dark-brown identity preserved, wider content area (~1220px), typography/spacing scale, subtle shadows | **Approved — decided 2026-08-01** | Applies sitewide; implemented in `website/css/styles.css`, pending preview approval before commit |
| 24 | This conversation, 2026-08-01 | Main Box / Hero | Hero now carries real HTML headline/support/CTA text over an independently-replaceable image + dark-brown overlay — **supersedes row 20's image-only Main Box** | **Approved — decided 2026-08-01** | `website/index.html` Hero section; image layer stays swappable without touching text |
| 25 | This conversation, 2026-08-01 | Business Tax card scope | Business Tax stays at the current Phase 1 scope — Form 1120 (C-Corp) and Payroll & Bookkeeping are **not** offered as currently available services until operating capability is separately approved | **Resolved — confirmed by Seung 2026-08-01** | `website/index.html` Business Tax card shows 1120-S + conditional 1065 only |
| 26 | This conversation, 2026-08-01 | Response-time language | **No specific response-time promise anywhere on the site.** All "within one business day" instances replaced with "We'll review your request and explain the next step." Supersedes the earlier turnaround wording in the original Request-a-Review-&-Quote spec | **Resolved — decided by Seung 2026-08-01** | `website/index.html` (How It Works step 3, final CTA) and SKILL.md spec line both updated |

## Project-wide requirements approved 2026-08-01

Recorded from Seung Park's written instruction of 2026-08-01 establishing the canonical project Skill. Rows 28–47 have **no implementation in this repository** — they are approved requirements, not built features. The private operations portal does not exist yet.

Provenance note: rows 28–44 were originally written from Seung's instruction text. **Reconciled 2026-08-01** against the canonical Google Doc `myTAXfile | Private Operations Portal Requirements` (modified 2026-08-01T05:54); see rows 56–62 for what the reconciliation added or corrected.

| # | Source | Section | Requirement | Status | Impact |
|---|---|---|---|---|---|
| 27 | Seung Park, 2026-08-01 | Languages | Support **English, Korean, Spanish, Simplified Chinese, Traditional Chinese, Japanese** — supersedes row 7 "English only" | **Approved as a planning requirement — decided 2026-08-01. NOT implemented.** | Live site stays English-only until multilingual implementation is separately approved. Do not describe the site as multilingual |
| 28 | Seung Park, 2026-08-01 | Private portal | Separate authenticated operations portal for staff, professionals, and members | **Approved — not built** | No repo presence; see `.claude/skills/mytaxfile/references/private-portal-requirements.md` |
| 29 | Seung Park, 2026-08-01 | Pricing authority | Seung Park holds sole authority over all pricing, rates, discounts, fee schedules, and quotes | **Approved** | Reinforces rows 8–9; no figure published or quoted without express approval |
| 30 | Seung Park, 2026-08-01 | Staffing authority | Seung Park holds sole authority over engaging, assigning, suspending, and removing employees and professionals | **Approved** | No system may auto-assign in a way that bypasses this |
| 31 | Seung Park, 2026-08-01 | Assignment authority | Only expressly authorized employees may assign work; authority is an explicit auditable grant, never implied by title or system role | **Approved** | Portal permission model |
| 32 | Seung Park, 2026-08-01 | Professional workflow | Engagements assigned to a **named** CPA, EA, or attorney who must **actively accept** before work proceeds; both events recorded with actor and timestamp | **Approved** | No silent, default, or timeout acceptance |
| 33 | Seung Park, 2026-08-01 | Professional review | Review results and written opinions are attributed, versioned, retained, never edited away; superseding opinions are added, priors preserved | **Approved** | Portal records model |
| 34 | Seung Park, 2026-08-01 | Comments | Three mandatory confidentiality tiers: **client-visible**, **company-internal**, **legally restricted**; default to most restrictive; widening a tier requires approval and is logged | **Approved** | Portal comment model; tier must be unambiguous in UI |
| 35 | Seung Park, 2026-08-01 | E-signature | External e-signature integration; **provider TBD and unapproved** | **Approved in principle — provider NOT approved** | Do not select, integrate, or contract a vendor without separate approval |
| 36 | Seung Park, 2026-08-01 | Agreements | Support both internal (staff/professional/contractor) and external (member/client) agreement signing | **Approved — not built** | Routes through the e-signature flow once a provider exists |
| 37 | Seung Park, 2026-08-01 | Documents | Member document storage inside the authenticated portal | **Approved — not built** | Strictly separate from the public website (row 44) |
| 38 | Seung Park, 2026-08-01 | Documents | Automatic saving and full document version history; a new version never destroys its predecessor | **Approved** | Portal document model |
| 39 | Seung Park, 2026-08-01 | Retention | **Members must not be deleted** — no hard delete, no purge, no cascade removal | **Approved — hard constraint** | Applies to every data model and migration |
| 40 | Seung Park, 2026-08-01 | Retention | **Archive instead of deletion** throughout; archived records stay retrievable, auditable, and intact | **Approved — hard constraint** | No application path may permanently destroy records |
| 41 | Seung Park, 2026-08-01 | Access control | Designated **Restricted Records Administrator** role is the sole authority to grant, revoke, or alter access to legally restricted records; assigned by Seung Park | **Approved** | Portal role model |
| 42 | Seung Park, 2026-08-01 | Audit | Audit logs and access history for access, changes, assignments, acceptances, comments, documents, and permission changes — actor, action, target, timestamp; **append-only**, not editable or deletable from the application | **Approved — hard constraint** | Portal audit model |
| 43 | Seung Park, 2026-08-01 | Access control | Role-based, default-deny, least-privilege access; escalation requires express authorization and is logged | **Approved** | Portal permission model |
| 44 | Seung Park, 2026-08-01 | Security architecture | Public website is architecturally separate from confidential tax-data systems; public site holds no credentials to and never stores, processes, or proxies confidential tax data | **Approved — hard constraint** | Reinforces row 10; secure handling lives only in the authenticated portal |
| 45 | Seung Park, 2026-08-01 | Translations | Tax, legal, pricing, qualification, security, and compliance translations require human review before publication; machine translation alone is never sufficient | **Approved** | Gates any multilingual rollout under row 27 |
| 46 | Seung Park, 2026-08-01 | Documentation | Record approved business decisions and user-facing requirements in the designated Drive folder; update the existing relevant Doc when the subject exists; new Doc only for a genuinely different subject; avoid duplicate canonical documents | **Approved** | Extends row 16. Designated folder: `https://drive.google.com/drive/folders/1-At9BI6PtD0rroP14TnF_aMsIwcjOAJy` |
| 47 | Seung Park, 2026-08-01 | Approval safeguards | No commit, push, merge, PR, branch deletion, Netlify deploy, DNS change, env-var change, or production configuration change without Seung Park's express approval | **Approved — hard constraint** | Extends row 17 to cover Netlify and PRs |

## Index security guidance and personal-account upload — approved 2026-08-01

From Work Order *Index Security Guidance & Personal Account Upload*. **Documentation and planning only** — the website text change, account/portal development, GitHub actions, and Netlify deployment are separate approval steps. Rows 49–55 have no implementation.

| # | Source | Section | Requirement | Status | Impact |
|---|---|---|---|---|---|
| 48 | Work Order, 2026-08-01 | Index copy | Approved Index copy, verbatim: *"To protect your information, please do not send sensitive documents through this public page or regular email. After you start, you can securely upload documents from your personal account. We may also provide a secure upload link in your confirmation email."* Supersedes the absolutist wording in `website/index.html` HOME-C-004 lines 98–99 | **Approved and applied 2026-08-01** to `website/index.html` §`HOME-C-004` on Seung's express approval | Published verbatim plus an italic qualifier, *"Personal accounts and secure upload are launching soon."*, because no account or secure link exists. Remove the qualifier only once the account is live and tested |
| 49 | Work Order, 2026-08-01 | Personal account | Personal account is the primary place for document upload, case status, messages, e-signature access, invoices/payments, completed-return delivery, and prior records | **Approved — not built** | Portal scope; see reference §1a |
| 50 | Work Order, 2026-08-01 | Confirmation email | May contain a personal-account link or a verified secure-upload link; **no sensitive attachments** | **Approved — not built** | Email template rules |
| 51 | Work Order, 2026-08-01 | Secure link | Expiration, identity verification, client/case scope, access check, revocation, audit logging, rate limiting — all required | **Approved — not built** | Seven mandatory controls |
| 52 | Work Order, 2026-08-01 | Upload handling | File-type and size controls, malware scanning, encryption in transit and at rest, version history, role-based access | **Approved — not built** | Portal upload pipeline |
| 53 | Work Order, 2026-08-01 | Records | Members may archive but may **not** permanently delete; final disposition limited to the authorized Records Administrator under the approved retention policy | **Approved — refines rows 39–40.** Retention policy does not exist yet | Role-naming conflict with area 15 "Restricted Records Administrator" — unresolved, see reference §7 |
| 54 | Work Order, 2026-08-01 | Audit trail | Must record upload, access, download, archive, restoration, assignment, review, signature, and filing events | **Approved — extends row 42** | Plus secure-link issuance, access, revocation |
| 55 | Work Order, 2026-08-01 | Sensitive data | Never place SSNs, tax documents, bank information, passwords, or other sensitive client data in ordinary email, public-page forms, source code, logs, analytics, or **URL query strings** | **Approved — hard constraint** | Extends row 10 beyond forms to email, code, logs, analytics, and URLs |

## Canonical Google Doc reconciliation — 2026-08-01

Source: `myTAXfile | Private Operations Portal Requirements` (Doc ID `1OFPURq0SsEkM0t2OGa91asXnslYmISqyTULnHqZIP40`, modified 2026-08-01T05:54). Read directly once the Drive connector became available. Detail in `.claude/skills/mytaxfile/references/private-portal-requirements.md`.

| # | Source | Section | Requirement | Status | Impact |
|---|---|---|---|---|---|
| 56 | Doc §2 | Roles | Six roles: Business Owner/Super Admin, Operations Manager, Authorized Employee/Preparer, CPA/EA Reviewer, Attorney, Client — plus Company Records Administrator (§6). Three-tier employee assignment authority: None / Team / Operations | **Approved — corrects rows 30–31 and 41.** Operations Manager was missing from the repo record | Attorney gets minimum-necessary records only; attorney access does not imply every return receives legal review |
| 57 | Doc §3 | Private pages | Five required pages: Owner Dashboard, Employee Operations Dashboard, Professional Review Center, Attorney Review Center, Client Portal | **Approved — not built.** Was entirely absent from the repo record | Portal page map |
| 58 | Doc §7 | Assignment & status | Assignment records must capture 13 fields; material changes after approval invalidate the approval and reopen review; ten-step status sequence New → … → Completed | **Approved — extends row 32** | Was absent from the repo record |
| 59 | Doc §4 | Comments | Tiers are **Client-visible / Company internal / Restricted professional-legal**; client-visible requires an explicit **Publish** action and, when configured, owner or authorized-employee approval; attorney privileged designation is separate and **the label alone does not create legal privilege** | **Approved — corrects and extends row 34** | Publish gate and privilege caveat were missing |
| 60 | Doc §5 | E-signature | Candidates may include eSign or Authentisign; provider still TBD. **Do not build a proprietary signature engine** or present a drawn-signature field as a complete system. Preserve previously signed versions and record which version each person signed | **Approved — extends rows 35–36** | Integration must support identity, consent, signing order, timestamps, reminders, expiration, sealing, tamper-evident history, retrieval, export |
| 61 | Doc §6 | Document vault | Store in approved cloud object storage with database metadata — **not** on an employee computer, **not** in the public website repository, **not** via a public form. Must not imply local-device files are automatically captured. Final disposition requires **dual approval** under an approved retention schedule | **Approved — extends rows 37–40 and 53** | Storage-location prohibition and dual approval were missing |
| 62 | Doc §9 | Multilingual | English default; locale switching **through approved locale files**; translate UI, validation, errors, and accessibility labels — not only marketing text. **Do not send confidential customer-entered tax data to an unapproved external translation service** | **Approved — extends rows 27 and 45.** No locale-file architecture exists | Resolves what "shared translation architecture" means: approved locale files, still to be built |

Also confirmed: Doc §12 already contains the approved Index copy verbatim (row 48), and a work-order Doc already exists in the folder — **no Drive write was performed**, to avoid duplicating a canonical source. Doc §8 explicitly warns that security controls are implementation requirements, **not** marketing claims, and names "guaranteed professional review" among the claims requiring verification before publication.

## Public legal and information pages — approved 2026-08-01

Work package: Privacy Notice, Terms of Use, Accessibility. Built and validated; **not committed, not deployed**. All three are drafts pending qualified review.

| # | Source | Section | Requirement | Status | Impact |
|---|---|---|---|---|---|
| 63 | Seung Park, 2026-08-01 | Legal pages | Three public pages created: `privacy-notice.html`, `terms-of-use.html`, `accessibility.html`, linked from every public footer as **Privacy Notice \| Terms of Use \| Accessibility** | **Approved and built.** Draft content — **not** attorney reviewed | Replaces the three dead `href="#"` links |
| 64 | Seung Park, 2026-08-01 | Footer | Copyright line `© 2026 myTAXfile. All rights reserved.` | **Approved and applied** | Prototype disclaimer **retained** on a second line — register row 15 records launch as HOLD and all CTAs remain inert. Reversible if Seung wants it removed |
| 65 | Verified 2026-08-01 | Privacy accuracy | The public website collects **no** personal information: 0 forms, 0 inputs, 0 cookies, 0 analytics, 0 scripts, 0 external requests, 0 images | **Verified fact** | Privacy Notice states this plainly. Must be updated **before** any collecting feature ships |
| 66 | Canonical Doc §6 | Privacy | Company retrieval rights over client records must be disclosed in privacy notices | **Satisfied** — Privacy Notice §7 | Was an approved requirement with no prior implementation |
| 67 | Canonical Doc §8 | Security claims | No encryption, security-grade, certification, or compliance claim published until verified | **Satisfied** — Privacy Notice §9 frames all controls as design requirements, not completed safeguards | |
| 68 | Seung Park, 2026-08-01 | Accessibility target | **WCAG 2.2 Level AA** | **PROPOSED — not adopted.** No audit, no conformance claim | Accessibility page states this explicitly |
| 69 | Measured 2026-08-01 | Contrast defect | Global `a` colour `--color-accent-dark` `#c2632f` = **4.10:1** on white, below the AA 4.5:1 threshold. Also affects `.content-box__eyebrow` | **Open defect — not fixed** | Legal pages use scoped `--color-accent-text` `#9e4a1f` (≥5.04:1). Site-wide fix would change approved index design and needs separate approval |
| 70 | Built 2026-08-01 | Placeholders | 15 unresolved operational facts marked in-page: legal entity ×2, mailing address ×3, contact emails ×3, hosting log practices, service-provider register, retention periods, limitation of liability, governing law, dispute procedure, accessibility response time | **Blocking publication** | Rendered in a loud amber box so they cannot ship unnoticed |
| 71 | Identified 2026-08-01 | Professional review | Requires review against: IRC §7216 (taxpayer information disclosure/use), GLBA / FTC Safeguards Rule, CCPA/CPRA (California is a launch state), Circular 230, ADA Title III | **Not started** | Flagged in-page; not asserted as applicable or satisfied |
| 72 | Built 2026-08-01 | Skip link | `.skip-link` added to all three legal pages | **Applied to legal pages only.** Index has none | Recorded as a known limitation on the Accessibility page; index fix needs separate approval |

## Missing / not yet approved

- Canonical Price Book, Service Catalog, State Eligibility Matrix, Responsibility Matrix, Vendor Register, Risk & Exception Register (Workflow's "Required Control Registers") — none exist yet.
- Approved hero/brand imagery asset (Main Box is currently a placeholder pending an approved image).
- Exact display name / logo treatment ("myTAXfile" vs "MyTaxFileNow" vs "mytaxfile.now") — used "myTAXfile" as the working wordmark per Drive doc-title convention; not separately confirmed.
- Hosting target (Netlify connector is available in this session but not explicitly confirmed as the deployment target).
- Real quote-approval mechanism, consultation-booking inclusion, email/SMS notification vendor — explicitly marked TBD in Workflow §"F. 현재 미확정 사항".

## Known internal document conflicts (not introduced by this project — flagged as found)

- Schedule C / entity pricing figures disagree between Website Plan v2 and Workflow.docx (row 9).
- Website Plan v2 and Master Plan both describe a nationwide multi-service catalog that is broader than the approved Phase 1 build scope (row 14) — treated as future-phase reference only.
