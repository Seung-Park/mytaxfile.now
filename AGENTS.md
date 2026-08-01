# Agent Instructions — myTAXfile Website

This file is the canonical, platform-neutral instruction set for any agent (Claude, Codex, Gemini, etc.) working in this repository. Platform-specific adapters live under `skills/mytaxfile/build-mytaxfile-website-with-claude-code/adapters/`.

## Before making material edits

0. Read `.claude/skills/mytaxfile/SKILL.md` in full — it is the **canonical project Skill** covering the whole project (public website, private operations portal, pricing authority, employee and professional authority, professional review, documents, languages, security, deployment), plus the source-priority order and the Skill update rule. Claude Code discovers it automatically; other agents must open it explicitly.
1. Read `skills/mytaxfile/build-mytaxfile-website-with-claude-code/SKILL.md` in full — it is the binding execution spec for **website** work, referenced by the canonical Skill and not superseded by it.
2. Read `docs/requirements-register.md` for current approved requirements, superseded items, and open TBDs.
3. Inspect current repo state (`git status`, `git log`, `git branch -a`) before assuming what exists.
4. Do not treat Google Docs planning material as directly buildable — only requirements marked `Approved` in the register are in scope. Items marked `Proposed`, `TBD`, or drawn only from `myTAXfile | Master Plan` (strategic reference, not build-authoritative) are out of scope until promoted.

## Change control

- Do not delete, reduce, replace, rename, move, hide, or substantially restructure existing approved files, pages, functions, content, or design without explicit approval from Seung for that exact change.
- Make the smallest coherent change; show planned scope before material edits.
- Never commit secrets, `.env` files, client information, or tax data.
- Prefer a named feature branch and an intentional commit. Do not push directly to a protected production branch without explicit authorization.
- Public-facing forms must never collect SSNs, tax documents, bank information, or identity documents.

## Frame and content rules

Follow Seung Park's `design-stable-web-frames` standard for all page structure: confirmed frame hierarchy (Global / Category / Subcategory / Individual), `PAGE-C-NNN` section IDs on Content/Body boxes, default sizing (75%/1600px desktop content, 92% mobile, 768px breakpoint), and the two-gate approval flow (frame skeleton approved before real content is added).

## Definition of done

See "Validation and definition of done" in the task Skill file. In short: run available formatter/lint/build, preview desktop+mobile, verify no unapproved deletions in the diff, and report changed files plus outstanding TBDs before considering a batch complete.
