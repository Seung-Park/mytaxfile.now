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
- Display: "We'll review your request and explain the next step." (Supersedes the earlier "within one business day" wording, per Seung's 2026-08-01 correction — no specific response-time promise may appear anywhere on the site until staffing capacity and operating procedures are confirmed.)
- After submission, route internally to one of: service available and quote; professional review required; referral/general guidance.
- Guide users away from sending sensitive material through the public page or ordinary email, using the approved non-alarming wording (see "Index security guidance" below). The system-level constraint is unchanged: the public form must not collect SSNs, tax documents, bank information, or identity documents.

## Frame system (per `design-stable-web-frames`)

Confirmed 2026-07-31:

**Global frames**
- Header: approved `myTAXfile.now` logo — white `myTAXfile` inside a compact teal rectangular box, with emphasized `.now` outside the box — plus nav (Home · Individual Tax · Business Tax · Find My Service · Resources/FAQ · About · Contact), Sign In, and persistent "Request a Review & Quote" CTA.
- Main Box: full-width, **image-only, no text/overlay** (default per `design-stable-web-frames`; headline/value-prop lives in Content/Body instead).
- Footer: contact, active-state list (WA/CA/NY/IL/TX/FL + "Coming Soon"), Privacy/Terms/Accessibility links.
- Colors (updated 2026-08-02 — **approved master color system**, from the ChatGPT homepage mockup Seung Park adopted as the master visual reference; supersedes the 2026-08-01 cool/institutional navy palette, which superseded warm terracotta, which superseded the original dark navy): warm-white background `#FCFCFA`, white surfaces `#FFFFFF`, slate-blue headings `#294455`, slate body text `#526A78`, teal actions `#168782` (hover `#0F706C`; text links use the hover value — the base teal is fills/borders only), pale blue-gray section bands `#EFF6F7`, medium blue-gray footer `#4B7890` with full-white footer text. Target mix ~70–75% white/warm white, 15–20% pale blue-gray, 5–10% slate/teal. **Do not restore deep navy or the orange-and-brown identity.** All colors are tokenized in `website/css/styles.css` `:root` — a palette change is a single edit to that block; never hard-code a hue elsewhere.
- Master mockup frame (approved 2026-08-02, applied site-wide): header is logo | nav | actions (Sign In + short "Request a Review" CTA, hamburger under 768px); homepage hero is a two-column bright section — text left, photo sweeping in from the right edge with a curved top-left mask, pale circle and slate blob accents (`website/images/hero-tax-professional.webp`; the img layer is independently replaceable); footer is brand + tagline | vertical divider | link columns, with a bottom bar. **Index and category pages lead keypoint-first** — organized short points in the top sections, prose detail lower down. The full phrase "Request a Review & Quote" appears **at most once per page**.
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
- **Every page carries `<meta name="robots" content="noindex, nofollow" />` immediately after the viewport meta** (approved 2026-08-07, canonical Skill area 27). The whole site stays `noindex` until Seung Park gives final launch approval. `website/_headers` sends the matching `X-Robots-Tag: noindex, nofollow` for all paths and must stay in the publish directory (`website/`). A new page without the meta tag is incomplete. Do not add a `robots.txt` `Disallow: /` rule — it would stop crawlers from ever reading the `noindex`.

## Change-control rules

- Preserve all user work and unrelated changes.
- Do not delete, reduce, replace, rename, move, hide, or substantially restructure existing approved files, pages, functions, content, or design without Seung's explicit approval.
- Make the smallest coherent change and show the planned scope before material edits.
- Never expose secrets or commit `.env`, credentials, client information, or tax data.
- Do not push directly to a protected production branch unless Seung explicitly authorizes it. Prefer a named feature branch and an intentional commit.
- Do not deploy publicly, change DNS, purchase software, connect payments, or enable real data collection without separate approval.
- **Pre-launch narrowing (2026-08-07).** Committing, pushing, deploying, and publishing each require Seung Park's separate express approval — they are no longer Tier 1–2. Never deactivate, delete, unpublish, lock, disable, or rename the Netlify site, and make no custom-domain or DNS change at all; Seung disconnects `mytaxfile.now` himself. Keep the site reachable at `https://mytaxfilenow.netlify.app` for review. Canonical Skill area 27.

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
7. Verify every changed or added page carries the `noindex, nofollow` robots meta tag, and that `website/_headers` is still present in the publish directory. After any deployment, confirm `X-Robots-Tag: noindex, nofollow` on the response headers of **both** the netlify.app review URL and the custom domain while it is connected.
8. Report changed files, tests and observable results, unresolved `TBD` items, and the exact next approval needed.
9. Commit and push only the approved scope, and only with Seung Park's separate express approval (pre-launch narrowing, 2026-08-07). Confirm the branch and remote result; never claim deployment or push success without evidence.

Phase 2 is complete only when the sitemap, page wireframes, customer-flow prototype, Find My Service, preliminary form recommendation, Review & Quote function, error/restart states, and validation report have been reviewed and approved by Seung.

## White-first visual system (permanent rules, per Seung's 2026-08-01 Final Integrated Improvement Direction)

**1. Approved permanent rules**
- Body background near-white (`#FAFBFC` since the 2026-08-01 cool-palette adoption; previously warm `#FCFCFA`); content cards and primary content areas pure white (`#FFFFFF`).
- Cool border (`#E2E8EE`) and teal tint (`#D9EEEB`) used only as a subtle accent/border — never a dominant fill. (Supersedes the warm-beige equivalents `#EFEAE1` / `#F7F2EA`-family.)
- Teal (`#0F766E` / `#0C5F59`) and navy (`#1C2B3A` ink, `#0B2545` footer) brand identity; accent colors must never dominate the page. (Supersedes warm orange `#D97742`/`#C2632F` and brown `#4A3728`/`#3D2B20` — the white-first dominance rule itself is unchanged.)
- Subtle but visible borders + very light, consistent shadow (`--card-shadow`) on white cards so they read distinct from the near-white body.
- Larger, accessible typography via shared CSS variables (`--fs-*` scale) — body 17px, section headings ~30px, Hero headline 32/36/52px mobile/tablet/desktop, footer text ≥15px, WCAG AA contrast target.
- Content width increased to ~1220px max / 83% (was effectively ~1080px), inter-section spacing reduced ~18%, via shared `--space-section` variables rather than isolated values.
- Hero image (`.main-box`) is independently replaceable — it is a separate absolutely-positioned layer from the overlay and from the HTML-based headline/support/CTA text in `.hero__content`. Replacing the image never requires touching the text layer or vice versa.
- Verified-claims-only trust policy: only factual, supportable trust statements may be published (see tier 3 below for what's excluded).
- No removal, reduction, rename, move, or restructuring of approved sections/content without Seung's explicit approval; preview approval required before any commit/push/deploy.

**2. Proposed wording — requires preview approval before treated as final**
- Hero eyebrow/headline/support copy and "See How It Works" secondary CTA (currently implemented in the draft, pending sign-off).
- Card CTA wording "Estimate My Fee" (replaces prior "Explore Individual/Business Tax →" — shown in preview per instruction, not silently finalized).
- Trust row copy: "Secure Document Handling," "Clear Pricing Before Filing," "Guided Individual and Business Tax Support."

**3. Claims awaiting factual verification — do not publish until Seung separately verifies**
- Any EA/CPA/IRS Authorized e-file Provider badge or IRS affiliation/endorsement claim.
- "Bank-grade security," "256-bit encryption," or any specific regulatory-compliance claim.
- Guaranteed professional review, guaranteed response time, or guaranteed filing time. **No specific response-time promise may appear anywhere on the site.** The earlier "within one business day" wording was removed sitewide on 2026-08-01 and replaced with "We'll review your request and explain the next step."
- Nationwide professional coverage, or any claim that Netlify hosting alone makes document upload secure.
- "Expert Tax Preparation" wording, until professional qualifications and review structure are verified.

Business Tax card intentionally excludes Form 1120 (C-Corp) and Payroll & Bookkeeping — these remain future-phase per the approved Phase 1 catalog; not added without separate approval.

## Approved slate-blue and teal design system (controls; approved later 2026-08-01)

This section supersedes only the earlier orange/brown/beige and deep-navy color directions above. Preserve the earlier text as history; do not restore those colors in active pages. All service scope, security wording, pricing gates, legal safeguards, Section IDs, and content-preservation rules remain in force.

- ChatGPT/Codex is the visual-design and visual-acceptance authority. Claude Code implements the approved design faithfully, completes accessibility and responsive engineering, and returns technical evidence. Seung Park gives final approval for material design, merge, and deployment.
- Shared CSS tokens: background `#FCFCFA`; surface `#FFFFFF`; heading `#173447`; body `#526A78`; primary accent `#168782`; accessible action/links `#0F706C`; pale section `#EFF6F7`; border `#D9E5E8`; footer `#4B7890`.
- Approved display name is `myTAXfile.now`. The logo must keep `myTAXfile` inside its teal rectangle and `.now` as a separate emphasized element outside that rectangle. Use shared HTML/CSS rather than a rasterized logo.
- Keep all visible colors in `website/css/styles.css`. Page HTML must contain no inline or embedded color values. Do not create a competing stylesheet or page-specific palette.
- Primary service navigation contains two categories: **Individual Tax** and **Business Tax**. **Real Estate Tax Expertise** is a cross-category specialty feature.
- Apply the coordinated design to Index, Individual Tax, and Business Tax while preserving all approved sections, detailed content, routes, legal links, security guidance, and IDs.
- Use the approved local hero image `website/assets/mytaxfile-tax-professional.webp`; keep the text, buttons, and navigation as semantic HTML.
- Required evidence: desktop, tablet, and mobile review; local target and image verification; Section-ID verification; accessibility/contrast review; applicable tests; diff review; and a changed-file report. Stop before production deployment.

## Authentication navigation wording (approved 2026-08-01)

- Keep a standalone **`Sign Up`** link directly below Sign In on the Sign In page.
- Do not precede that link with “Don’t have an account?” or equivalent explanatory copy.
- Do not show Sign Up as a global Header or Footer navigation item; its public entry point is the Sign In page.
- Preserve the Sign Up page and route. Do not imply that preview authentication is operational.

## Index security guidance (approved 2026-08-01, Work Order: Index Security Guidance & Personal Account Upload)

**Approved Index page copy — exact, verbatim:**

> To protect your information, please do not send sensitive documents through this public page or regular email. After you start, you can securely upload documents from your personal account. We may also provide a secure upload link in your confirmation email.

**Superseded wording — do not reuse on the Index page or in active instructions:**

- "We never ask for your SSN, tax documents, or bank details on this website."
- "Sensitive documents are never collected on this website. After reviewing your request, we'll explain how to share them separately."

Both were judged overly strict and alarming. The replacement guides clients toward the personal account or a secure upload link instead of issuing absolute prohibitions.

**Applied 2026-08-01** to `website/index.html` section `HOME-C-004`, on Seung's express approval. The two superseded `<li>` statements were replaced by a single `<li>` carrying the approved copy verbatim, followed by an italic qualifier — *"Personal accounts and secure upload are launching soon."* — because neither the account nor the secure link exists and the site must not imply otherwise. The `<ul class="trust-list">` structure, ✓ pseudo-elements, styling, and spacing are unchanged; the third bullet (professional review) was not touched. **Remove the qualifier only once the account is live and tested.**

Unchanged by this entry: the public form must still not collect SSNs, tax documents, bank information, or identity documents. That is a system constraint, distinct from customer-facing wording.

Full requirement: canonical Skill area 23 and `.claude/skills/mytaxfile/references/private-portal-requirements.md` §1a.

## Legal and information pages (approved 2026-08-01)

Pages: `website/privacy-notice.html`, `website/terms-of-use.html`, `website/accessibility.html`. Footer links on every public page read exactly **Privacy Notice | Terms of Use | Accessibility**.

**Page pattern.** Same header and footer as Index. No hero — legal pages open with `.page-head` (eyebrow, `h1`, intro, effective/revision dates), then a `.review-banner`, then a two-column `.legal-toc`, then `.legal-section` blocks with `PRIV-C-NNN` / `TERMS-C-NNN` / `ACCESS-C-NNN` section IDs. Reading width is capped by `.content--narrow` (780px) because the default `.content` (83% / 1220px) is far too wide for prose.

**Section-ID labels are not rendered on legal pages.** The `data-section-id` attribute is present for traceability, but the visible `.section-id-label` used on Index is omitted — these are customer-trust pages, and the faint codes read as unfinished. Index keeps its labels unchanged.

**Skip link.** All three legal pages carry `.skip-link`. **Index does not** — adding it would be an unrelated edit, so it is recorded as a known limitation on the Accessibility page and needs separate approval.

**Contrast.** [Historical, warm-palette era: `--color-accent-dark` `#c2632f` failed WCAG AA for normal text (4.10:1 on white); a scoped then site-wide `--color-accent-text` `#9e4a1f` carried text usage, and the primary CTA fill (white on `#d97742`, 3.15:1) remained an open defect — register rows 69/85/125.] **Superseded 2026-08-01 by the cool-palette adoption:** all 18 text/UI pairs measured ≥ AA at adoption; the CTA fill is now white on `#0f766e` = 5.47:1, and the lowest text pair is the footer gold heading at 5.16:1. The role rule is retained permanently: **text uses `--color-accent-text`; `--color-accent-dark` is reserved for fills, borders, and focus rings**, so a future value change cannot silently break text contrast.

**Copyright.** `© 2026 myTAXfile. All rights reserved.` on line one, `Prototype — not a live production site.` retained on line two. The disclaimer was kept because register row 15 records public launch as HOLD and every CTA is still inert.

**Placeholders.** 15 unresolved operational facts are marked with `<span class="placeholder">` and render in a loud amber box so they cannot ship unnoticed. They must be replaced before these pages are treated as final.

## Change history

- 2026-07-31 — Initial repo scaffold. English-only scope, 6-state launch list, static HTML/CSS/JS stack, frame hierarchy + palette, and Main Box image-only confirmed. Superseded the prior bilingual and Washington-only pilot requirements from the Workflow doc, Work Order, and Master Plan.
- 2026-08-01 — Color palette changed to light/warm (supersedes the dark-navy palette). Home page moved from empty frame skeleton to finished draft content for all six Content/Body boxes, pending review.
- 2026-08-01 — Brightened to near-white body with subtle card shadows. Applied the Final Integrated Improvement Direction: white-first visual system, wider content area, typography/spacing scale, Hero rebuilt with independently-replaceable image + HTML text/CTAs (supersedes the prior image-only Main Box decision), trust row, accessibility focus states. Pending preview approval before commit.
- 2026-08-01 — All hue-carrying colors tokenized in `styles.css` `:root` (17 tokens added, 21 declarations remapped; verified pixel-identical). Then **cool/institutional palette adopted by Seung Park** after a side-by-side preview of all-pages screenshots: navy/teal/muted-gold (`#1C2B3A` ink, `#0F766E` action, `#0B2545` footer, `#C58A2A` gold) supersedes the warm terracotta palette. Fixes the open CTA contrast defect (was 3.15:1, now 5.47:1); all 18 measured pairs ≥ WCAG AA. White-first dominance rules, frame system, typography, and spacing unchanged. Register rows 124–128.
- 2026-08-01 — Later approved design direction recorded: warm white, slate-blue, teal actions, pale blue-gray sections, and medium blue-gray footer. Central CSS controls all colors. Index, Individual Tax, and Business Tax form one approved design package; Real Estate Tax remains a cross-category specialty. Supersedes the prior orange/brown palette only.
- 2026-08-01 — Display name finalized as `myTAXfile.now`; logo architecture fixed as boxed white `myTAXfile` with `.now` outside and emphasized. Seven linked preview routes added so public navigation no longer depends on dead `#` links; unavailable functions remain clearly labeled as previews.
- 2026-08-01 — Sign In wording simplified: preserve the `Sign Up` link directly below Sign In and remove only the “Don’t have an account?” lead-in.
- 2026-08-07 — Pre-launch indexing protection approved and applied: `<meta name="robots" content="noindex, nofollow" />` added to all 14 public pages and a new `website/_headers` sending `X-Robots-Tag: noindex, nofollow` for all paths. Added to the design/content rules, the change-control rules, and the validation checklist (new step 7). Committing, pushing, deploying, and publishing narrowed to require separate express approval. No content, design, palette, route, Section ID, or copy changed. Canonical Skill area 27; register rows 152–161.
