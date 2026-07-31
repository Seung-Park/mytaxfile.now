# myTAXfile Website (mytaxfile.now)

Prototype website for myTAXfile — a Phase 1/Phase 2 website prototype, built from approved Google Docs planning and repository requirements.

Status: **Prototype / planning stage.** No production launch, no real client data, no payments, no live tax-document intake. See `docs/requirements-register.md` for the full approved-requirements register and open items.

## Source of truth

- Business/service planning: Google Docs (`myTAXfile | Workflow`, `myTAXfile | Website Plan v2`, `myTAXfile | Master Plan` — reference only) in the "2.1 myTaxfile" Drive folder.
- Development execution rules: `skills/mytaxfile/build-mytaxfile-website-with-claude-code/SKILL.md`
- Approved requirements snapshot (kept in-repo for traceability): `docs/requirements-register.md`
- Website source: `website/`

## Stack

Static HTML/CSS/JS. No build step, no framework. Deployment target: Netlify (tentative — see requirements register).

## Frame system

Page layout, section-ID scheme, and default sizing follow Seung Park's `design-stable-web-frames` standard: Header → Main Box → Content/Body → Footer, with `PAGE-C-NNN` section IDs on every Content/Body box. See the Skill file for the confirmed frame hierarchy and color palette.

## Change control

Do not delete, reduce, rename, move, or substantially restructure existing approved pages, content, or design without explicit approval. See the Skill file's change-control section before making material edits.
