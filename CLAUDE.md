# CLAUDE.md

Project memory for **myTAXfilenow** (`mytaxfile.now`). Claude Code reads this file automatically at the start of every session in this repository.

Owner and sole approval authority: **Seung Park**.

## Read this first, every session

**Read the canonical myTAXfilenow Skill before planning or modifying any myTAXfilenow work:**

- Canonical project Skill: `.claude/skills/mytaxfile/SKILL.md` — governs the whole project (website, private portal, pricing, employees, professional review, documents, languages, security, deployment). Auto-discovered by Claude Code; also invocable as `/mytaxfile`.
- Portal reference: `.claude/skills/mytaxfile/references/private-portal-requirements.md`

## Permanent operating rules

1. Read the canonical Skill before planning or modifying any myTAXfilenow work.
2. Treat the existing approved project files as the starting point — never a blank slate.
3. Preserve all approved work and all unrelated existing content.
4. **Never delete, reduce, replace, rename, move, or restructure** existing files, folders, sections, images, or approved content without Seung Park's prior approval for that exact change.
5. Update the existing canonical Skill whenever a new permanent requirement is approved.
6. Update the corresponding Claude Code instructions or references whenever the canonical Skill changes.
7. Record approved business decisions and user-facing requirements in the designated Google Drive folder.
8. Update an existing relevant Google Doc when the subject already exists.
9. Create a separate Google Doc only for a genuinely different subject.
10. Avoid duplicate canonical documents and duplicate Skills.
11. When instructions conflict, **the latest expressly approved instruction controls.**
12. Distinguish **proposed ideas** from **approved requirements** at all times.
13. **Never claim a proposed requirement has already been implemented.**
14. Inspect before editing, implement the smallest coherent change, validate, show previews, and give a completion report.
15. **Standing authority — granted by Seung Park 2026-08-01, in force until he revokes or revises it.**

    Scope: the myTAXfile repository, its approved requirements, and reversible work that stays within the existing business and design direction.

    **Proceed under standing Tier 1–2 authority. Do not stop merely to present a plan when the requested work is already approved and sufficiently defined.**

    Claude Code has principal technical responsibility for: inspecting the repository and governing documents; resolving ordinary technical questions; choosing implementation details and architecture; writing and improving code; fixing defects; responsive design and accessibility corrections; testing, builds, and quality verification; creating branches, commits, pushes, and pull requests; updating required technical records; and presenting completed work with verification results.

    Read the governing documents, make the best reasonable reversible decision, record material decisions in `docs/requirements-register.md`, and continue working without asking Seung to choose among ordinary technical options.

    **Tier 3 — stop and obtain approval before:**
    1. Merging or deploying to production.
    2. Publishing or changing prices, fees, or percentages.
    3. Publishing material legal, tax, privacy, security, or regulatory claims.
    4. Deleting, reducing, replacing, renaming, or moving approved content.
    5. Changing the approved business model or major design direction.
    6. Purchasing a paid service or creating a recurring expense.
    7. Handling production credentials, payments, or sensitive customer data.
    8. Making a consequential or difficult-to-reverse change.

    Accumulate Tier 3 decisions and present them in one concise approval list per work package whenever practical.

    **Planning-only restrictions.** Where a brief says "planning only," "do not edit," or "stop after the plan," follow it only when it is intentionally included for a genuinely undecided Tier 3 matter. Do not carry an old planning-only restriction into later implementation work after implementation has been approved.

    **Never fabricate an operational fact** — legal entity, address, governing law, licence, credential, or tax threshold. Use a visibly marked placeholder instead.

    **Never claim success without direct verification.** Do not state that a test, commit, push, merge, deployment, Google Drive update, or live-site change succeeded unless it has been directly verified and the evidence reported.

    This authority does not weaken rules 1–14. Preservation, verification, privacy, security, and owner-approval safeguards remain in full force.

16. **Page-build protocol — approved 2026-08-01.**

    New website pages are built **one at a time, on Seung Park's go for that specific page.** Do not begin a page he has not named.

    - **Confirm at the start.** State which page is beginning before work on it starts.
    - **Then build it fully.** Once a page is authorised, deliver it complete — best-in-class content, layout, structure, accessibility, and responsive behaviour — without stopping to ask about ordinary content or design choices. Those are Tier 2.
    - **Finish before moving on.** Do not start the next page until the current one is delivered and Seung has given the next go.
    - **Report on delivery:** what was built, decisions made, verification results, and any Tier 3 items the page surfaced.

    Every page inherits the existing approved header, footer, palette, typography, spacing, section-ID scheme, and accessibility baseline. Copy must match the approved Service Catalog, Price Book, State Eligibility Matrix, and legal notices — never exceed them.

17. **Permanent job allocation — approved by Seung Park 2026-08-02.** Governs all future website work.

    1. **Seung Park** is the product owner and final approval authority.
    2. **ChatGPT/Codex is the visual design authority.** It controls brand character, colors, typography, composition, imagery, mockups, design contracts, and final visual acceptance.
    3. **Claude Code is the principal technical implementation authority.** Inspect the complete existing repository before editing, then implement the approved design faithfully in accessible, responsive, maintainable code.
    4. Do not independently reinterpret or redesign an approved ChatGPT/Codex visual reference.
    5. Preserve all approved content, routes, functions, legal language, project requirements, Section IDs, and unrelated repository changes. Approved-content removals must be zero unless Seung explicitly approves them.
    6. Make ordinary reversible technical decisions independently without repeatedly asking Seung.
    7. After implementation, return: ~1440px desktop screenshot; ~390px mobile screenshot; tablet verification; complete changed-file list; build, lint, type, test, accessibility, and responsive results; unavoidable differences and remaining risks.
    8. ChatGPT/Codex performs visual acceptance and provides one consolidated correction list.
    9. Complete the corrections and technical verification, but stop before any merge or production deployment requiring Seung's approval.
    10. **Apply the approved myTAXfile visual system:** warm white, slate-blue typography, teal actions, pale blue-gray sections, and a medium blue-gray footer. Do not restore deep navy or the previous orange-and-brown identity.

18. **Approved master visual style — approved by Seung Park 2026-08-02.** The ChatGPT homepage mockup is the master visual reference for the whole site. Index and category pages lead with an organized, keypoint-first presentation — minimal sentences in the top sections; detail lives lower on the page. The full CTA phrase "Request a Review & Quote" appears **at most once per page**; the header uses the short label "Request a Review".

## Source priority

1. Seung Park's latest express approval
2. Current canonical `SKILL.md`
3. Current approved Google Docs in the designated folder
4. `CLAUDE.md` project operating rules
5. Existing implementation and historical documents

Do not silently overwrite a conflict. Report the exact conflict and request a decision when the latest approved direction is unclear.

Designated Google Drive folder: `https://drive.google.com/drive/folders/1-At9BI6PtD0rroP14TnF_aMsIwcjOAJy`
Private Portal Requirements Doc: `https://docs.google.com/document/d/1OFPURq0SsEkM0t2OGa91asXnslYmISqyTULnHqZIP40`

## Skill update rule

When Seung Park approves a permanent new requirement: update the canonical `SKILL.md`; update only the affected reference file; update the relevant Google Doc; add the approval date and a concise change note; preserve prior approved versions; confirm this file still points at the correct canonical Skill; do not create a second canonical Skill; do not modify the website merely because a planning requirement was documented; obtain separate approval before implementation, GitHub actions, or deployment.

## Project-specific notes

- This project's platform-neutral rules live in `AGENTS.md` — read that too.
- Website execution Skill (binding for all `website/` work, referenced by the canonical Skill, not superseded by it): `skills/mytaxfile/build-mytaxfile-website-with-claude-code/SKILL.md`
- Claude adapter (if it diverges from that website Skill): `skills/mytaxfile/build-mytaxfile-website-with-claude-code/adapters/claude.md`
- General website-build standards that also apply here (loaded from Seung's personal skill set, not part of this repo): `design-stable-web-frames`, `apply-world-class-expert-standard`, `maintain-project-skill-folders`.
- Tax Rules and Parameters framework (binding for **all** calculator work): `docs/tax-rules-framework.md`. No calculator may hard-code a tax figure; no figure may be published below `approved_for_publication`; never populate a figure from model training data.
- Requirements register: `docs/requirements-register.md` — check for superseded/conflicting items before building against any planning doc.
