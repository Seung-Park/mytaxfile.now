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
| 7 | This conversation, 2026-07-31 | Scope change | Languages: **English only** | **Approved — English only (supersedes prior bilingual requirement, decided 2026-07-31)** | No language switcher, no Korean content track |
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

## Missing / not yet approved

- Canonical Price Book, Service Catalog, State Eligibility Matrix, Responsibility Matrix, Vendor Register, Risk & Exception Register (Workflow's "Required Control Registers") — none exist yet.
- Approved hero/brand imagery asset (Main Box is currently a placeholder pending an approved image).
- Exact display name / logo treatment ("myTAXfile" vs "MyTaxFileNow" vs "mytaxfile.now") — used "myTAXfile" as the working wordmark per Drive doc-title convention; not separately confirmed.
- Hosting target (Netlify connector is available in this session but not explicitly confirmed as the deployment target).
- Real quote-approval mechanism, consultation-booking inclusion, email/SMS notification vendor — explicitly marked TBD in Workflow §"F. 현재 미확정 사항".

## Known internal document conflicts (not introduced by this project — flagged as found)

- Schedule C / entity pricing figures disagree between Website Plan v2 and Workflow.docx (row 9).
- Website Plan v2 and Master Plan both describe a nationwide multi-service catalog that is broader than the approved Phase 1 build scope (row 14) — treated as future-phase reference only.
