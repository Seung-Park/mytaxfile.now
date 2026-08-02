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
| 9 | Website Plan v2 §12 vs Workflow §3 | Pricing tables | Schedule C: $299 (Plan v2) vs $399 (Workflow) · S-Corp/entity: $795 vs $799 | **RESOLVED 2026-08-01 by the approved Price Book** (row 73). Schedule C → $399; entity → $795 | See `.claude/skills/mytaxfile/references/price-book.md`. Publication of any figure remains a separate decision |
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
| 69 | Measured 2026-08-01 | Contrast defect | Global `a` colour `--color-accent-dark` `#c2632f` = **4.10:1** on white, below the AA 4.5:1 threshold. Also affects `.content-box__eyebrow` | **CLOSED 2026-08-01 — fixed site-wide, see row 85** | `--color-accent-text` `#9e4a1f` promoted to the primary `:root`; six text usages remapped. Fills, borders, and focus rings unchanged |
| 70 | Built 2026-08-01 | Placeholders | 15 unresolved operational facts marked in-page: legal entity ×2, mailing address ×3, contact emails ×3, hosting log practices, service-provider register, retention periods, limitation of liability, governing law, dispute procedure, accessibility response time | **Blocking publication** | Rendered in a loud amber box so they cannot ship unnoticed |
| 71 | Identified 2026-08-01 | Professional review | Requires review against: IRC §7216 (taxpayer information disclosure/use), GLBA / FTC Safeguards Rule, CCPA/CPRA (California is a launch state), Circular 230, ADA Title III | **Not started** | Flagged in-page; not asserted as applicable or satisfied |
| 72 | Built 2026-08-01 | Skip link | `.skip-link` added to all three legal pages | **Applied to legal pages only.** Index has none | Recorded as a known limitation on the Accessibility page; index fix needs separate approval |

## Canonical Price Book — approved 2026-08-01

| # | Source | Section | Requirement | Status | Impact |
|---|---|---|---|---|---|
| 73 | Seung Park, 2026-08-01 | Pricing | **Canonical Price Book approved.** Base-plus-add-on model. `MTF-1040-BASE` $199 · `MTF-1040-SCHC` $399 · `MTF-1120S-CORP` $795 · `MTF-1065-PART` $795 (conditional) · `MTF-UNK-INTAKE` quote after review. Add-ons: state +$50, Sch A +$75, Sch D +$100, Sch E +$120/unit, bookkeeping from +$250 | **APPROVED — internal register only** | Resolves row 9. Closes Website Plan v2 §14 blocker #6. Full detail in `.claude/skills/mytaxfile/references/price-book.md` |
| 74 | Derived, 2026-08-01 | Pricing model | Website Plan v2 §12 bundle table retired in favour of base-plus-add-on (row 8). The $299 bundle point is reached arithmetically as $199 + $100 Sch D | **Approved as part of row 73** | Prevents two prices for the same work |
| 75 | Seung Park, 2026-08-01 | Publication | Approving the register does **not** authorize publishing prices. Publication is a separate decision; when made, §14 requires "starting at"/"estimate" only | **Register approved; publication NOT approved** | No figure appears on the website today |
| 76 | Workflow §7 | Price Book completeness | Tax year, effective date, minimum fee, discount authority, refund/cancellation rule, rush/amended/prior-year fees, per-SKU inclusions, state variation, and gross-margin validation | **TBD — block publication** | Workflow §10 3단계 requires unit-economics review before pricing is final |
| 77 | Website Plan v2 §10.3 | Fee Calculator | Interactive "Simple Fee Calculator" approved in concept; was blocked pending the Price Book | **Unblocked by row 73 — still needs separate build approval** | Must display ranges, never fixed fees |
| 78 | Website Plan v2 §12 | Out-of-scope pricing | C Corp $895 and Form 1041 $650 appear in the doc but the services are not in the approved Phase 1 catalog | **Excluded from the Price Book** | Add only after the service is approved |

## Tier 2 decisions and Resources build — 2026-08-01

Decided by Claude Code under the standing Tier 1–2 authority granted 2026-08-01. **All reversible.** Reasoning recorded so Seung can overturn any of them.

| # | Subject | Decision | Reasoning | Reversible |
|---|---|---|---|---|
| 79 | Response-time promise — Workflow §2G (modified 2026-08-01) reinstates "We will contact you by email within one business day"; register row 26 removed it sitewide the same day | **Keep it off the website. Treat §2G as an internal operating target, not published copy.** | Workflow is the *operational specification* (internal); Website Plan v2 "governs customer-facing structure and messaging" and its §14 Truth Rules forbid promising filing time. Both can be true at once: internal target = 1 business day, published text = no promise. Launch is HOLD and staffing is unconfirmed, so a public promise is unbacked | Yes — one line of copy |
| 80 | Palette — Website Plan v2 §8 says "white background and deep navy"; rows 21/23 approved the warm white-first system | **Keep warm white-first. §8's palette line is stale.** | Rows 21 and 23 are dated 2026-08-01, are detailed, and explicitly supersede the navy palette in row 19. §8 predates that decision and was not the subject of today's edit. Source priority item 1 (latest express approval) outranks a legacy line. **Action for Seung: update §8 in the Doc** so the two stop disagreeing | Yes — palette is tokenised |
| 81 | Resources scope — §2/§3 define Resources as Process, Checklists, FAQ, Guides; the calculator suite appears in neither doc | **Add Tax Calculators & Estimators as an approved Resources subsection.** | Seung's express brief requested it (rule 11, latest approval controls), and §10.3 already approves an interactive calculator on the site. Recorded here so the next reader of the Docs does not treat it as unauthorised. **Action for Seung: add to Website Plan v2 §3** | Yes — one page |
| 82 | `website/resources.html` created — Tax Calculators & Estimators hub | Nine Phase 1 calculators carded (6 federal, 3 Washington), 10 planned, 4 other resources, disclaimer section. **No calculator is operational**; every card says "Coming soon" in text, not by colour alone | Per §14, publish only what has a tested route. Cards state the plan without implying function | Yes |
| 83 | Calculator scope — estate, inheritance, gift dropped from Phase 1 | Moved to referral, not built | Workflow §10C lists 상속세·증여세·신탁 as Referral/excluded; Seung confirmed hold until the frame is complete. Highest-liability tools in the set | Yes |
| 84 | Washington calculators | REET, Capital Gains Excise, Combined Federal+WA. Card states WA has **no income tax and no inheritance tax**, and that the capital gains excise **does not apply to real estate or retirement accounts** | Website Plan v2 §10.1 supplies the exclusion; it is the most common error in WA estimators | Yes |
| 85 | **Contrast defect fixed site-wide** — `--color-accent-dark` `#c2632f` measured 4.10:1 on white and 3.99:1 on the body background, below AA for normal text (open defect, row 69) | Added `--color-accent-text` `#9e4a1f` to the primary `:root`; remapped six **text** usages (global `a`, nav hover, outline-button label, content eyebrow, step numerals, trust-list marks). Fills, borders, and focus rings keep `--color-accent-dark` | Row 69 closed. Lowest measured text pair is now 5.04:1; focus ring 3.99:1 against a 3:1 UI threshold. Brand hue preserved | Yes |
| 86 | **Professional-review claim corrected** — "Every return is reviewed by a qualified tax professional before filing" appeared twice on the homepage | Replaced with "Your return goes through a review step before it is filed" and "Every return goes through a review step before filing, and the preparer who signs your return is identified by name on it" | Website Plan v2 §14: "do not imply every preparer is a CPA or EA." Portal Doc §8 names guaranteed professional review as requiring verification. The replacement drops the credential implication and adds a factually grounded statement — paid preparers must sign | Yes |
| 87 | Skip link added to `index.html`; `<main id="main">` added | Homepage previously lacked one, which the Accessibility page listed as a known limitation. Limitation entry updated | Accessibility defect fix under Tier 1 | Yes |
| 88 | Resources linked from the primary nav on all five pages | The nav link was `href="#"` on every page | Dead nav link removed | Yes |

## Drive folder scope — verified 2026-08-01

| # | Subject | Finding |
|---|---|---|
| 89 | Designated folder scope | **Verified by Seung Park's screenshot of the live Drive UI.** Breadcrumb reads `My Drive › 2.1 myTaxfile`. The folder sits directly in My Drive root — there is **no parent project folder** and no sibling numbered folders. The folder ID in `CLAUDE.md` (`1-At9BI6PtD0rroP14TnF_aMsIwcjOAJy`) is confirmed correct against the address bar |
| 90 | Inventory completeness | **Confirmed complete.** Six items visible in the UI match the six returned by the API listing: `Archive` (folder), Claude Code Work Order, Master Plan.docx, Private Operations Portal Requirements, Website Plan v2, Workflow. No document was missed |
| 91 | Earlier scoping concern | **Withdrawn.** The worry that "2.1" implied an unread "2." parent was unfounded. The Price Book (row 73) and all prior reconciliation stand — they were not built on a partial view |
| 92 | `Archive` subfolder | **Still unopened.** Workflow Phase 5 specifies "Archive only clearly superseded policies and plans," so it should hold superseded material only. Low risk, but unverified — open it when the Drive connector is available |

## Tax Rules and Parameters system — 2026-08-01

Built under standing Tier 1–2 authority. Governing document: `docs/tax-rules-framework.md`.

| # | Subject | Status |
|---|---|---|
| 93 | **Tax Rules and Parameters framework approved and built.** Engine code contains no tax figures; parameter files contain no logic. Rates are integer basis points, money is integer cents — no tax figure passes through binary floating point | **Implemented.** `website/js/engine/`, `website/js/tax-rules/`, `website/js/calculators/` |
| 94 | **Five-rung verification ladder** — `unverified` → `source_verified` → `professional_review_pending` → `professionally_reviewed` → `approved_for_publication`. Only the top rung may produce a customer-facing result | **Implemented and enforced.** `calculateReet()` throws `NotPublishableError` below the top rung |
| 95 | **Consistency enforced, not trusted.** A set claiming `professionally_reviewed` without a named reviewer throws; claiming `source_verified` without a URL and verification date throws | **Implemented**, covered by test |
| 96 | **Source registry** — a parameter may cite only a registered `.gov` authority publishing the rule itself. Summaries, news, and firm blogs are not sources | **Implemented.** Enforced by test: every registry root must end `.gov` |
| 97 | **Effective-date versioning.** Half-open intervals; a sale computes under the rules in force on its own date. Past versions are never edited — a change adds a new version. Overlaps and uncovered dates throw | **Implemented**, covered by test |
| 98 | **Change-review workflow** — `source detected → change compared → review pending → approved → effective-date activation → prior version retained`. `tools/check-sources.mjs` fingerprints each source and writes a change record; **it never edits a parameter** | **Implemented.** `npm run check-sources` |
| 99 | **Automated test harness** — 35 tests covering version selection, effective dates, bracket boundaries, exemptions, rounding, missing parameters, malformed input, unapproved changes, and the no-invented-reviewer rule | **35/35 passing**, verified by direct run |
| 100 | **Washington REET calculator implemented** — graduated state brackets, flat exception for agricultural land and timberland, optional user-supplied local rate, federal/state/local reported separately | **Implemented and tested. NOT publishable** |
| 101 | **All REET parameters are `unverified`** — this environment cannot reach `dor.wa.gov` or `app.leg.wa.gov`; both return HTTP 403 at network egress, confirmed by direct fetch and by the source monitor. Candidate values recorded from a search summary, which is **not** a primary source and **not** verification | **Blocking publication.** `publicationReadiness()` returns `ready: false` and lists every blocker |
| 102 | **Local REET deliberately unpopulated** — rates vary by city and county. The calculator asks the user rather than guessing | **By design** |
| 103 | **2026 open questions** — whether the upper brackets moved on 2026-01-01, and the separate 1% real estate transfer tax reported above $3,025,000, which is **not modelled** | **Recorded in the parameter set**, unresolved |

| 104 | Seung Park, 2026-08-01 | Calculator scope | **No calculator for Form 1040 and none for Form 1120.** Permanent exclusion, not a phase deferral | **Approved — excluded.** Federal Income Tax Estimator removed from `resources.html`; a plain-language note explains the boundary to visitors. Business Entity Tax Comparison remains permitted as comparative only, never a 1120 calculation | 1040 and 1120 are the returns myTAXfile sells. A public calculator computing a customer's own return undercuts the service and places the highest-liability computation on an unsupervised page. Transaction-specific estimators stay in scope |
| 105 | Derived, 2026-08-01 | Scope boundary | Retained as in-scope because each estimates a **specific transaction or tax**, not a return: WA REET, WA capital gains excise, capital gains, home sale, rental sale with depreciation recapture, self-employment tax, quarterly estimated tax | **In scope** | If Seung intends a tighter boundary — for example excluding anything that feeds a 1040 schedule — say so and the list narrows |

## Google Drive records written — 2026-08-01

Connector became available. Four owed records cleared. Both documents were verified by reading them back after creation; the `fileSize: 1` returned at creation time was stale metadata.

| # | Subject | Result |
|---|---|---|
| 106 | **Folder inventory COMPLETE.** `Archive/` opened at last — contains exactly one file, `myTAXfile \| Website Plan v1`, the superseded predecessor of v2. Matches Workflow Phase 5 ("archive only clearly superseded plans"); not build-authoritative | **Verified.** 7 items total in the canonical folder. Nothing unread governs anything |
| 107 | **`myTAXfile \| Price Book` created in Drive** — Required Control Register #1, which had no Doc. 2,890 bytes verified | [Doc](https://docs.google.com/document/d/1sMDZ8aHJMFsiiVquqThcOC6WnD-nWek1EioiJy_vjTg) · mirrors `references/price-book.md` |
| 108 | **`myTAXfile \| Decision and Implementation Log` created** — the Decision Log required by Workflow §10 Status Standard and the change log referenced in §9. Neither existed. 4,724 bytes verified | [Doc](https://docs.google.com/document/d/1S9OEIFimHFeqPY4HmgjvIj2tsggcicEi-6T-lPAa0Vo) · records what is live, the eight Tier 2 decisions, the tax rules system, and the six open items |
| 109 | Existing Docs **not modified** | The Drive connector exposes `create_file` but no update or edit tool, so Website Plan v2 §8 and Workflow §2G could not be corrected from here. Both remain listed as actions for Seung |
| 110 | No duplicate canonical document created | Both new Docs cover subjects with no existing Doc, per rule 9. Naming follows the Workflow standard `myTAXfile \| Short Summary`. Neither contains client names, SSNs, tax IDs, or sensitive data |
## Individual Tax page — built 2026-08-01

| # | Subject | Detail |
|---|---|---|
| 111 | **`website/individual-tax.html` created** — first service category page, built on Seung Park's go under the rule 16 page protocol | 9 sections `IND-C-001`–`009`: who it's for, what a return includes, extensions/amended/prior-year, document checklist, how it works, pricing approach, states, FAQ, CTA |
| 112 | Content sourced from the approved catalog only | Website Plan v2 §3 and §6 audience (employees, self-employed, investors, rental owners, retirees) and content rules (scope, documents, process, cost guidance, FAQ). Forms limited to 1040 + Schedules A/C/D/E/SE per register row 1 |
| 113 | **Pricing method described, no figures published** | Base plus additions for schedules, states, complexity; per-property rental pricing; bookkeeping cleanup quoted separately. Verified: zero dollar figures on the page. Price Book publication remains Tier 3 |
| 114 | Compliance verified by automated check | No dollar figure · no response-time promise · no "qualified tax professional" credential implication · no guarantee wording · no nationwide claim · no 1120/1065 offered as available · approved secure-document copy verbatim with the "launching soon" qualifier |
| 115 | Honest-limits content included | Extension gives more time to file, not to pay. No guaranteed refund or outcome, with an explicit caution about anyone who promises one. WA/TX/FL noted as having no personal state income tax |
| 116 | Navigation wired across all six pages | "Individual Tax" was `href="#"` everywhere; now resolves. Homepage service card changed from a dead "Estimate My Fee" to "Explore Individual Tax". Accessibility page's known-limitations list updated so it no longer names Individual Tax as unbuilt |

## Business Tax page — built 2026-08-01

| # | Subject | Detail |
|---|---|---|
| 117 | **`website/business-tax.html` created** — second service category page, on Seung Park's go under rule 16 | 10 sections `BUS-C-001`–`010`: what we file, who it's for, what's included, deadlines, document checklist, how it works, pricing approach, states, FAQ, CTA |
| 118 | Scope matches rows 1, 2, and 25 exactly | **1120-S available.** **1065 conditional**, labelled as such, offered only when a qualified preparer *and* reviewer are available. **Form 1120 (C-Corp), payroll, standalone bookkeeping, non-profit, and international explicitly listed as NOT offered**, with an offer to refer instead |
| 119 | Sole proprietors routed away, not sold to | A card explains that unincorporated business income belongs on the personal return and links to Individual Tax — prevents a mis-sale at the top of the page |
| 120 | Deadline section carries the per-shareholder penalty warning | Entity returns are due before personal returns, late filing is penalised per shareholder per month, and an extension moves the filing date not the payment date. **No specific calendar date published** — dates vary by state and fiscal year-end |
| 121 | Reasonable-compensation question answered honestly | Framed as a judgement call depending on role, industry, and finances, to be discussed with a preparer — not reduced to a rule of thumb |
| 122 | Pricing method only, no figures | Base covers federal 1120-S, one state, and shareholder K-1s. Additional states per state; bookkeeping cleanup quoted after seeing records and named as the largest variable. Verified: zero dollar figures |
| 123 | Navigation wired across all seven pages | "Business Tax" was `href="#"` everywhere; now resolves. Homepage card changed from a dead "Estimate My Fee" to "Explore Business Tax". Accessibility known-limitations updated — only Find My Service, About, and Contact remain unbuilt |

## Approved three-page visual design — 2026-08-01

| # | Subject | Detail |
|---|---|---|
| 124 | Visual authority and implementation roles | **Approved.** ChatGPT/Codex controls visual design and visual acceptance; Claude Code controls repository implementation and technical verification; Seung Park controls business decisions, merge, and deployment approval |
| 125 | Palette | **Approved.** Warm white `#FCFCFA`, white surfaces `#FFFFFF`, slate headings `#173447`, slate body `#526A78`, teal accent `#168782`, accessible teal actions `#0F706C`, pale blue-gray sections `#EFF6F7`, border `#D9E5E8`, medium blue-gray footer `#4B7890`. Supersedes the prior orange/brown palette only |
| 126 | Central CSS color control | **Approved.** Visible page colors are controlled through shared `website/css/styles.css`; page HTML contains no inline or embedded color values |
| 127 | Primary service architecture | **Approved.** Top services are **Individual Tax** and **Business Tax**. **Real Estate Tax Expertise** spans both categories and is highlighted as a specialty, not a third primary category |
| 128 | Three-page design package | **Implemented on feature branch for review.** Index, Individual Tax, and Business Tax share the approved header, palette, typography, spacing, cards, responsive behavior, footer, and stable Section-ID labels. Existing service scope and security/legal content preserved |
| 129 | Hero image | **Approved asset added.** `website/assets/mytaxfile-tax-professional.webp`; image is separate from semantic HTML content and can be replaced independently. Optimized to approximately 40 KB for page performance |
| 130 | Publication gate | **Not deployed.** Desktop/mobile visual acceptance, Claude Code technical review, merge approval, and production deployment approval remain separate gates |

## Authentication navigation — approved 2026-08-01

| # | Subject | Detail |
|---|---|---|
| 131 | Sign In / Sign Up navigation | **Preview pages built; authentication not built. Latest wording approved 2026-08-01.** The Sign In preview is the public entry point for a standalone “Sign Up” link directly below Sign In and omits “Don’t have an account?” Sign Up is not shown in global Header/Footer navigation. The Sign Up page may retain the reciprocal “Already have an account? Sign In” link. Both links require keyboard access, visible focus, and mobile readability. No credential form, authentication engine, or secure portal route exists yet. |

## Display name, logo, and temporary linked pages — approved 2026-08-01

| # | Subject | Detail |
|---|---|---|
| 132 | Display name and logo | **Approved and implemented on the feature branch.** Exact public name: `myTAXfile.now`. The logo places white `myTAXfile` inside a compact teal rectangle and keeps emphasized `.now` outside the rectangle. HTML and shared CSS control the mark; `.now` must not inherit the boxed background. Supersedes the earlier unconfirmed working wordmark. |
| 133 | Temporary linked pages | **Approved and implemented on the feature branch; not deployed.** Added Find My Service, Request a Review & Quote, FAQ, About, Contact, Sign In, and Sign Up preview pages. Replaced dead `#` navigation and CTA links with real local routes. Sign In and Sign Up are non-operational previews with no input fields; the Sign In page keeps a standalone Sign Up link. Unavailable functions are labeled clearly. |

## Missing / not yet approved

- Canonical Price Book, Service Catalog, State Eligibility Matrix, Responsibility Matrix, Vendor Register, Risk & Exception Register (Workflow's "Required Control Registers") — none exist yet.
- Approved hero/brand imagery asset (Main Box is currently a placeholder pending an approved image).
- Hosting target (Netlify connector is available in this session but not explicitly confirmed as the deployment target).
- Real quote-approval mechanism, consultation-booking inclusion, email/SMS notification vendor — explicitly marked TBD in Workflow §"F. 현재 미확정 사항".

## Known internal document conflicts (not introduced by this project — flagged as found)

- Schedule C / entity pricing figures disagree between Website Plan v2 and Workflow.docx (row 9).
- Website Plan v2 and Master Plan both describe a nationwide multi-service catalog that is broader than the approved Phase 1 build scope (row 14) — treated as future-phase reference only.
