---
name: build-mytaxfile-website-with-claude-code
description: Build, revise, validate, and publish the myTAXfile English-only website prototype from approved Google Docs planning and repository requirements. Use in Claude Code (or an equivalent agent) for repository inspection, requirement synchronization, wireframes, prototypes, implementation, testing, Git commits, GitHub pushes, and deployment handoff while preserving approved files and requiring approval for destructive changes.
---

# Build the myTAXfile Website

Status: **Active**. Project code: `mytaxfile`. Task code: `build-mytaxfile-website-with-claude-code`.

## Purpose

Turn the approved myTAXfile business plan into an English-only, mobile-first website prototype and then an approved production site. Work from the actual repository and keep implementation traceable, reversible, and aligned with the approved Google Docs planning.

## Platform ownership

- Use **Claude Code** (or an equivalent coding agent) for repository inspection, file edits, local preview, tests, Git commits, GitHub pushes, and deployment preparation.
- Use the connected **Google Drive connector** to search and read planning documents directly, scoped to the "2.1 myTaxfile" Drive folder for this project.
- Treat Google Docs as the business-planning source, this repository's Skill/requirements files as the development execution source, and GitHub as the approved code/version record.
- If Google Docs and repository instructions conflict, stop and present the exact conflict to Seung. Do not silently choose one. See `docs/requirements-register.md` for the current register of confirmed conflicts.

## Confirmed requirements (supersede anything conflicting in Google Docs)

- **Language: English only.** Supersedes the prior "English and Korean, equal functional coverage" requirement found in the Workflow doc, Work Order, and Master Plan. Decided 2026-07-31. No language switcher, no Korean content track.
- **Launch states: Washington, California, New York, Illinois, Texas, Florida** shown as active; all other states shown as "Coming Soon." Supersedes the prior Washington-only pilot scope. Decided 2026-07-31.
- **Service catalog stays at the Phase 1 core** (below) — the state expansion is geographic only; do not add Partnership/Payroll/1099/Trust/Nonprofit/International pages from Website Plan v2 or the Master Plan without a separate approval.
- **Tech stack: static HTML/CSS/JS.** No build framework. Decided 2026-07-31.
- **Frame hierarchy and palette approved** (see "Frame system" below). Decided 2026-07-31.

## Approved Phase 1 service scope

Status: **Prototype Approved**.

- Primary services: Form 1040, Schedule C, Schedule E, and Form 1120-S.
- Form 1065: offer conditionally only when a qualified professional and reviewer are available.
- Amended returns and tax notices: case-by-case review and separate quote.
- Other or complex tax forms: collect a non-sensitive overview, suggest potentially applicable forms, and route to review and quote.
- Launch states: Washington, California, New York, Illinois, Texas, Florida active; other states "Coming Soon."
- Primary language: English only.
- Pricing structure: low base price plus additions for forms, states, and complexity. Do not publish final prices until approved (source docs disagree on Schedule C and entity figures — see requirements register).
- Public website forms must not collect SSNs, tax documents, bank information, identity documents, or other sensitive tax data.

## Required customer functions

### Find My Service

Ask plain-language questions so customers do not need to know tax form numbers. Include customer type, income sources, self-employment, rental income, investments or property sales, employees, filing states, amended-return needs, and tax-notice status.

Show results as **preliminary suggestions**, never final tax advice. Potential suggestions may include Form 1040, Schedules C/D/E/SE, Forms 1040-X, 4868, 1120-S, 1065, 1120, 7004, 941, and 940. Route uncertain, international, estate/gift, nonprofit, legal-dispute, and other complex matters to professional review or referral.

### Request a Review & Quote

Make this a primary conversion path from Home, Individual Tax, Business Tax, Find My Service, FAQ, and Contact.

- Collect only name, email, optional phone, state, customer category, short non-sensitive description, and preferred contact method.
- Display: "We will contact you within one business day, primarily by email and by phone when needed."
- After submission, route internally to one of: service available and quote; professional review required; referral/general guidance.
- Clearly warn users not to enter or upload SSNs, tax documents, bank information, or identity documents on the public form.

## Frame system (per `design-stable-web-frames`)

Confirmed 2026-07-31:

**Global frames**
- Header: wordmark "myTAXfile" (working name — not separately confirmed, see register), nav (Home · Individual Tax · Business Tax · Find My Service · Resources/FAQ · About · Contact), persistent "Request a Review & Quote" CTA.
- Main Box: full-width, **image-only, no text/overlay** (default per `design-stable-web-frames`; headline/value-prop lives in Content/Body instead).
- Footer: contact, active-state list (WA/CA/NY/IL/TX/FL + "Coming Soon"), Privacy/Terms/Accessibility links.
- Colors: White background, Deep Navy `#0B2545` (headings), Teal `#0F766E` (CTA/action), Muted Gold `#C58A2A` (limited accent).
- Sizing: desktop Content/Body 75% width, max 1600px, centered; mobile ~92%; breakpoint 768px; Header/Footer inner content max 1200px centered.

**Category frames** (shared templates)
- Service-page template → Individual Tax, Business Tax.
- Tool/form template → Find My Service, Request a Review & Quote.
- Simple-content template → About, FAQ, Contact, Legal.

**Subcategory frames**
- Individual Tax → 1040 / Schedule C / Schedule E.
- Business Tax → 1120-S core / Form 1065 (conditional).

**Individual frames**
- Find My Service question/branch cards and recommendation result card.
- Request a Review & Quote form + confirmation/error/restart states.
- State-availability badge (6 active states vs. "Coming Soon").
- Pricing-range display (ranges only, no fixed numbers).

Every Content/Body box uses a `PAGE-C-NNN` section ID (see `design-stable-web-frames` for the exact convention). Header, nav, Main Box, and Footer are excluded from section IDs.

**Two-gate approval:** frame skeleton (Header/Main Box/Footer/empty Content outlines) must be confirmed before real content is added to a page.

## Phase 2 website scope (English-only)

1. Confirm the sitemap and global navigation. *(Done — see register.)*
2. Define shared header, footer, mobile behavior, accessibility baseline, and reusable components. *(Done — see Frame system above.)*
3. Build the Home wireframe (frame skeleton, then content).
4. Build Find My Service and its question/branch map.
5. Build the preliminary tax-form recommendation results.
6. Build Request a Review & Quote, confirmation, error, interruption, and restart states.
7. Build Individual Tax and Business Tax pages.
8. Build the estimated-price structure without unapproved final prices.
9. Build Process, FAQ, Security/Privacy overview, About/Professionals, and Contact pages.
10. Connect every button and verify the complete customer journey on desktop and mobile.

Prototype only: do not accept real tax files, process payments, make final professional assignments, promise nationwide availability, or publish unapproved legal/tax claims.

## Design and content rules

- Design mobile-first and make the customer path simple for non-experts.
- English-only content for every customer-facing function.
- Explain that form recommendations and price estimates are preliminary and subject to review.
- Keep secure-document upload separate from the public website. Show only a future secure-portal handoff location until an approved provider is connected.
- Use accessible semantic HTML, keyboard navigation, visible focus states, sufficient contrast, meaningful labels, clear errors, and screen-reader-friendly status messages.
- Add page titles, meta descriptions, canonical structure, and a proposed analytics event map, but do not activate tracking or advertising tools without approval.

## Change-control rules

- Preserve all user work and unrelated changes.
- Do not delete, reduce, replace, rename, move, hide, or substantially restructure existing approved files, pages, functions, content, or design without Seung's explicit approval.
- Make the smallest coherent change and show the planned scope before material edits.
- Never expose secrets or commit `.env`, credentials, client information, or tax data.
- Do not push directly to a protected production branch unless Seung explicitly authorizes it. Prefer a named feature branch and an intentional commit.
- Do not deploy publicly, change DNS, purchase software, connect payments, or enable real data collection without separate approval.

## Questions and decision gates

Ask one concise question at the moment a decision is needed. Stop before proceeding when any of these are unknown and materially affect the build:

- actual repository or project path;
- framework or existing implementation conflict;
- approved brand/logo/colors/domain (colors confirmed 2026-07-31; wordmark/logo still working-name only);
- page or feature deletion/replacement;
- final prices, nationwide availability, legal terms, privacy promises, or professional credentials;
- portal, tax software, payments, electronic signatures, analytics, hosting, or production deployment.

Label all undecided items `TBD` or `Proposed`; never convert them to `Approved` without Seung's confirmation.

## Validation and definition of done

For each approved implementation batch:

1. Run the repository's formatter, lint, type-check, tests, and production build where available.
2. Preview every changed page at desktop and mobile widths.
3. Test all buttons, links, branches, validation, success/error states, interruption, and restart behavior.
4. Verify that public forms reject or warn against sensitive information and do not provide upload fields for tax documents.
5. Check accessibility, console errors, broken links, missing content, and accidental placeholder text left in a "final" page.
6. Inspect the full diff; approved removals should be zero unless specifically authorized.
7. Report changed files, tests and observable results, unresolved `TBD` items, and the exact next approval needed.
8. Commit and push only the approved scope. Confirm the branch and remote result; never claim deployment or push success without evidence.

Phase 2 is complete only when the sitemap, page wireframes, customer-flow prototype, Find My Service, preliminary form recommendation, Review & Quote function, error/restart states, and validation report have been reviewed and approved by Seung.

## Change history

- 2026-07-31 — Initial repo scaffold. English-only scope, 6-state launch list, static HTML/CSS/JS stack, frame hierarchy + palette, and Main Box image-only confirmed. Superseded the prior bilingual and Washington-only pilot requirements from the Workflow doc, Work Order, and Master Plan.
