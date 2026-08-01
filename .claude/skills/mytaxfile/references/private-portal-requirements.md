# myTAXfilenow — Private Operations Portal Requirements

Reference file for `.claude/skills/mytaxfile/SKILL.md`. Read this for any portal, document, role, audit, comment, assignment, or professional-workflow work.

**Provenance warning.** This file was written from Seung Park's written instruction of 2026-08-01. It has **not** been reconciled against the canonical Private Portal Requirements Google Doc (`https://docs.google.com/document/d/1OFPURq0SsEkM0t2OGa91asXnslYmISqyTULnHqZIP40`), which was unreachable from the authoring session. Reconcile against that Doc before relying on this file for implementation. Where they differ, the Doc outranks this file (source priority item 3 beats item 5); Seung's latest express approval outranks both.

**Implementation status: none.** The portal does not exist in this repository. Everything below is an approved *requirement*, not a built feature. Never describe any of it as implemented.

## 1. Separation from the public website

The private portal and the public marketing site are separate systems. The public site:

- never stores, processes, or proxies confidential tax data;
- holds no credentials to portal systems or tax-data stores;
- offers no upload path for tax documents, SSNs, bank information, or identity documents;
- may show only a future secure-portal handoff location until an approved provider is connected.

## 2. Identity, roles, and access

Access is **role-based, default-deny, and least-privilege**. Every user gets the minimum access their role requires and nothing more.

| Role | Purpose |
|---|---|
| Owner (Seung Park) | Sole approval authority over pricing, staffing, professional engagement, and role grants |
| Authorized assigning employee | May assign work — only where Seung Park has expressly granted assignment authority |
| Employee / staff | Operational work within least-privilege scope |
| CPA / EA / Attorney | Professional review; must accept an assignment before working it |
| Restricted Records Administrator | Sole authority to grant, revoke, or alter access to legally restricted records |
| Member / client | Own documents and client-visible communications only |

Rules:

- Assignment authority is an explicit, auditable grant. It is never implied by job title or system role alone.
- Privilege escalation requires express authorization and is audit-logged.
- Role grants and revocations are themselves audit-logged events.
- The Restricted Records Administrator is assigned by Seung Park.

## 3. Assignment and acceptance workflow

1. An authorized assigner assigns an engagement to a **named** CPA, EA, or attorney.
2. The assigned professional must **actively accept**. No silent acceptance, no default acceptance, no timeout-to-accepted.
3. Work proceeds only after recorded acceptance.
4. Assignment and acceptance are each recorded with actor, target, and timestamp.
5. Reassignment is a new assign-and-accept cycle; the prior record is preserved.

## 4. Professional review results and opinions

- Attributed to the named professional who authored them.
- Versioned and retained in full.
- Never edited away or overwritten.
- A superseding opinion is **added**; the prior opinion remains retrievable.

## 5. Comment confidentiality tiers

Every comment carries exactly one tier, mandatory at creation:

- **Client-visible** — the member can see it.
- **Company-internal** — staff only; never surfaced to the member.
- **Legally restricted** — expressly authorized parties only; governed by the Restricted Records Administrator.

Rules:

- Default to the most restrictive tier when the correct tier is unclear.
- Never widen a tier without approval; widening is an audit-logged event.
- Tier must be unambiguous in the UI so staff cannot mistake an internal note for a client-visible one.

## 6. Documents

- **Member document storage** lives in the authenticated portal only.
- **Automatic saving** — work saves without relying on a manual save action.
- **Version history** — every document retains its full version history. A new version never destroys its predecessor.
- Documents inherit the access model in section 2 and the tiering discipline in section 5.

## 7. Retention — archive, never delete

- **Members must not be deleted.** No hard delete, no purge, no cascade removal of member records.
- **Archiving replaces deletion** throughout the system.
- Archived records stay retrievable, auditable, and intact.
- No application-level path may permanently destroy member records, documents, opinions, comments, or audit entries.

## 8. Audit logs and access history

Logged with actor, action, target, and timestamp:

- authentication and access events;
- record and document reads where confidentiality requires it;
- creation, modification, and archiving of records;
- assignments and acceptances;
- comment creation and any tier change;
- document uploads, new versions, and archiving;
- permission, role, and restricted-access changes.

Audit logs are **append-only**. They must not be editable or deletable from within the application.

## 9. Agreements and e-signature

- The portal supports **internal agreements** (staff, professionals, contractors) and **external agreements** (members, clients).
- Signature capture uses an **external provider**.
- **The provider is TBD and unapproved.** Do not select, integrate, contract with, or assume a vendor without separate approval from Seung Park.
- Executed agreements follow the same retention rules: versioned, archived, never deleted.

## 10. Languages

The portal is in scope for the six approved languages — English, Korean, Spanish, Simplified Chinese, Traditional Chinese, Japanese.

Translations touching **tax, legal, pricing, qualification, security, or compliance** content require human review before publication. Machine translation alone is never sufficient for those categories.

## 11. Open items requiring approval before implementation

- E-signature provider selection.
- Portal hosting, authentication provider, and data-residency decisions.
- Encryption and key-management approach — no specific security claim may be published until verified.
- Retention schedule durations and legal-hold procedure.
- Notification vendor for email/SMS.
- The full role matrix, reconciled against the canonical Google Doc.
