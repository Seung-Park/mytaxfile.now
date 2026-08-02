# myTAXfilenow — Private Operations Portal Requirements

Reference file for `.claude/skills/mytaxfile/SKILL.md`. Read this for any portal, document, role, audit, comment, assignment, or professional-workflow work.

**Provenance: reconciled 2026-08-01** against the canonical Google Doc `myTAXfile | Private Operations Portal Requirements` (`https://docs.google.com/document/d/1OFPURq0SsEkM0t2OGa91asXnslYmISqyTULnHqZIP40`, modified 2026-08-01T05:54), plus Seung Park's work order of the same date. The earlier unreconciled provenance warning is resolved. Where this file and the Doc differ, the Doc controls on portal requirements; Seung's latest express approval outranks both.

**Implementation status: none.** The portal does not exist in this repository. Everything below is an approved *requirement*, not a built feature. Never describe any of it as implemented.

**Scope of current approval** (Doc §1): requirements, page maps, permission rules, workflows, wireframes, and prototypes. Production handling of real tax data, document uploads, authentication, payments, professional sign-off, filing, legal matters, or electronic signatures requires separate architecture, vendor, security, legal, and operating approval.

## 1. Separation from the public website

The private portal and the public marketing site are separate systems. The public site:

- never stores, processes, or proxies confidential tax data;
- holds no credentials to portal systems or tax-data stores;
- offers no upload path for tax documents, SSNs, bank information, or identity documents;
- explains the service and collects only limited initial contact and filing-situation information;
- directs the client to the authenticated account for anything sensitive;
- may show only a future secure-portal handoff location until an approved provider is connected.

## 1a. Personal account as the primary secure workspace

Approved 2026-08-01 (Doc §12 + Work Order). **Not implemented — no account system exists.**

The client's authenticated personal account is the primary place to view requests, upload sensitive documents, review status, receive professional comments, sign documents, and retrieve completed records. It is also the primary place for:

- case status;
- messages;
- e-signature access;
- invoices and payments;
- completed-return delivery;
- prior records.

### Approved Index copy (Doc §12, verbatim)

> To protect your information, please do not send sensitive documents through this public page or regular email. After you start, you can securely upload documents from your personal account. We may also provide a secure upload link in your confirmation email.

Supersedes the earlier absolutist Index wording. **Published 2026-08-01** in `website/index.html` §`HOME-C-004`, followed by the italic qualifier *"Personal accounts and secure upload are launching soon."* — required because no account or secure link exists yet. Remove the qualifier only once the account is live and tested. See canonical Skill area 23.

### Confirmation email

- Sent after **Start Filing**.
- May contain **either** a personal-account link **or** a verified secure-upload link.
- Must contain **no sensitive attachments**.
- Never carries SSNs, tax documents, bank information, passwords, or other sensitive client data.

### Secure upload link controls

A direct upload link sent by email must have all of:

| Control | Requirement | Source |
|---|---|---|
| Approved provider | Must use an approved provider | Doc §12 |
| Expiration | Expires within a defined period | Doc §12 |
| Scope | Limited to the intended client or matter | Doc §12 |
| No unauthorized browsing | Must prevent browsing beyond the intended matter | Doc §12 |
| Identity verification | Identity verification or account authentication, **based on risk** | Doc §12 |
| Access check | Verified on every request, not just at issuance | Work Order |
| Revocation | Can be revoked before expiry | Work Order |
| Audit logging | Issuance, access, and revocation all logged | Work Order |
| Rate limiting | Applied to prevent enumeration and abuse | Work Order |

### Upload handling

File-type and size controls; malware scanning; encryption in transit and at rest; version history; role-based access.

### Sensitive-data prohibition (hard constraint)

Never place SSNs, tax documents, bank information, passwords, or other sensitive client data in:

ordinary email · public-page forms · source code · logs · analytics · URL query strings.

### Availability gate

The site must not imply the account, portal, or secure link is operational until it has actually been implemented **and tested**. Until then, present these as planned or as coming after enrollment.

### Authentication navigation

- On the **Sign In** screen, place **“Don’t have an account? Sign Up”** directly below the form and link `Sign Up` to the real account-registration route.
- On the **Sign Up** screen, place **“Already have an account? Sign In”** directly below the form and link `Sign In` to the real authentication route.
- Both links must be keyboard accessible, have a visible focus state, remain clearly readable on mobile, and must not point to `#` or another placeholder.
- The current public-site Sign In and Sign Up pages are **non-operational previews only**. They contain no credential fields and link to each other so navigation can be tested. Replace their destinations with the real, separately hosted portal routes only after authentication is implemented and tested.

## 2. Roles and authority

Access is **role-based, default-deny, and least-privilege**. Every user gets the minimum access their role requires and nothing more.

| Role | Authority (Doc §2) |
|---|---|
| **Business Owner / Super Admin** (Seung Park) | Final authority over standard prices, form and complexity add-ons, discounts, refunds, professional-review charges, employees, professional teams, organization-wide assignments, permissions, workload, reports, exceptions, and overrides |
| **Operations Manager** | Workflow, deadlines, assignments, and pricing exceptions — **only within authority expressly delegated by the owner** |
| **Authorized Employee / Preparer** | Works assigned cases; may propose, create, set, prioritize, schedule, assign, or reassign work to owner-approved CPAs, EAs, or attorneys within the employee's configured authority and approved team |
| **CPA / EA Reviewer** | Accepts or declines assigned reviews; reviews only assigned matters; uploads review results and supporting documents; requests corrections; approves only within verified credentials and assigned authority |
| **Attorney** | Receives only an assigned legal or tax matter and the **minimum necessary** records. Attorney access does **not** imply that every return receives legal review |
| **Client** | Own questionnaire, documents, estimates, agreements, messages, signatures, invoices, status, and final deliverables only |
| **Company Records Administrator** | Narrowly limited. Legal holds, restoration of archived records, export of complete case histories, and final disposition — only under an approved written retention schedule, applicable law, contractual duties, privacy obligations, and **dual approval** |

### Employee assignment authority — three tiers (Doc §2)

1. **No Assignment Authority** — handles only work assigned to the employee.
2. **Team Assignment Authority** — assigns work only to approved professionals in the employee's team.
3. **Operations Assignment Authority** — assigns and reassigns cases across approved teams at manager level.

The owner may override any assignment. Assignment authority is an explicit, auditable grant — never implied by job title or system role alone. Privilege escalation requires express authorization. Role grants and revocations are themselves audit-logged events.

> **Open question — Records Administrator naming.** Three names are in circulation: the canonical Doc §6 says "**Company** Records Administrator"; Skill area 15 says "**Restricted** Records Administrator"; the work order says plain "Records Administrator." The Doc's definition is the most detailed and is used above. Confirm the single correct name with Seung Park before implementing. Skill area 15 needs updating once settled.

## 3. Required private pages (Doc §3)

1. **Owner Dashboard** — pricing, users, permissions, professional teams, assignments, deadlines, workload, review queues, exceptions, revenue, balances, audit activity, legal holds, access removal, records administration.
2. **Employee Operations Dashboard** — assigned clients, intake, document checklist, missing-information requests, preparation tasks, estimates from approved pricing, professional assignments, correction requests, messages, completion queue.
3. **Professional Review Center** — assigned queue, return summary, source-document and form checks, prior-year comparison, reviewer notes, uploaded results, correction loop, approve or decline, reviewed-version lock, reviewer identity, timestamp.
4. **Attorney Review Center** — assigned matter, limited relevant documents, questions, analysis, restricted communications, resolution, follow-up.
5. **Client Portal** — secure login, questionnaire, document checklist and upload, estimate and add-on approval, engagement agreement, messages, electronic signature, invoice and payment, status, final return, prior-year records.

## 4. Assignment, acceptance, and status

1. An authorized assigner assigns an engagement to a **named** CPA, EA, or attorney.
2. The professional may **accept, decline, request clarification, propose a different scope or deadline, or request reassignment.** No silent acceptance, no default acceptance, no timeout-to-accepted.
3. Work proceeds only after recorded acceptance.
4. Every proposal, assignment, change, and acknowledgement is time-stamped and auditable.
5. Reassignment is a new assign-and-accept cycle; the prior record is preserved.

**Every assignment record must capture** (Doc §7): client · tax year · work type · assigned employee or professional · assigning user · assignment date · deadline · review level · current version · acceptance or rejection · comments · corrections · final disposition.

**Material changes after approval invalidate the earlier approval and return the matter to review.**

**Recommended status sequence** (Doc §7):

New → Documents Pending → Ready for Preparation → In Preparation → Internal Check → Professional Review → Client Signature → Ready to File → Filed → Completed

## 5. Professional review results and communications (Doc §4)

- Each CPA, EA, or attorney can upload a structured review result, supporting document, opinion, correction request, approval, limitation, and next-step recommendation for an assigned client matter.
- Attributed to the named professional who authored them; versioned and retained in full.
- Never edited away or overwritten. A superseding opinion is **added**; the prior remains retrievable.
- The system records **author, approver, publisher, and timestamps**.
- Every review result and message stays linked to the client, tax year, matter, assignment, and **exact document or return version**. A material change creates a new version and may reopen review.

## 6. Comment visibility tiers (Doc §4)

Every entry must select exactly one visibility level, mandatory at creation:

- **Client-visible** — the client can see it.
- **Company internal** — authorized company users and assigned professionals only; **never appears in the client portal by default**.
- **Restricted professional / legal** — expressly authorized parties only.

Rules:

- Client-visible comments require an **explicit Publish action** and, when configured, owner or authorized-employee approval.
- Default to the most restrictive tier when the correct tier is unclear.
- Never widen a tier without approval; widening is an audit-logged event.
- Tier must be unambiguous in the UI so staff cannot mistake an internal note for a client-visible one.
- Attorney communications support a separately restricted **privileged/confidential** designation. **The label alone does not create legal privilege.**

## 7. Agreements, policies, and electronic signatures (Doc §5)

- Maintain a controlled workspace for engagement agreements, independent-contractor or employment documents, confidentiality terms, company policies, professional standards, amendments, acknowledgements, and related owner-professional records.
- Use a selected **external** e-signature provider for both internal (company/professional) and external (client/third-party) documents.
- Candidate providers may include **eSign, Authentisign, or another approved service**. **Final provider: TBD** until security, legal fit, integrations, cost, signer experience, data handling, retention, and export are compared and approved.
- The integration must support signer identity, consent, signing order, timestamps, reminders, expiration, completed-document sealing, tamper-evident history, retrieval, and export.
- **Do not build a proprietary signature engine**, and do not represent a simple drawn-signature field as a complete electronic-signature system.
- A policy or contract update creates a new version. Preserve the previously signed version and **record which version each person signed or acknowledged**. Never silently replace a signed document.

## 8. Member document vault and records preservation (Doc §6)

- Every member gets a private, role-limited document vault plus access to assigned client and company workspaces.
- Store documents in **approved cloud object storage with database metadata** — **not** on one employee computer, **not** in the public website repository, and **not** through an ordinary public website form.
- Uploads and in-browser edits must autosave safely, display save/sync status, retain recoverable drafts and immutable versions, and remain retrievable by authorized users.
- Files on a member's computer are protected only when uploaded or synchronized through an approved managed client. **The system must not imply that every local-device file is automatically captured.**

### Retention — archive, never delete

- **Members must not be deleted.** No hard delete, no purge, no cascade removal of member records.
- Clients, employees, CPAs, EAs, and attorneys **cannot permanently delete records.** They may archive, hide an item from the active queue, or request correction or retention review. **Archive is not deletion.**
- Archived records stay retrievable, auditable, and intact.
- **Final disposition** is limited to the Company Records Administrator, under an approved written retention schedule, applicable law, contractual duties, privacy obligations, and **dual approval**. The retention schedule does not yet exist and must be approved before any disposition capability is built.
- Use soft deletion, retention locks or write-once controls where appropriate, malware scanning, checksums, version history, backup, point-in-time recovery, disaster-recovery tests, and export portability.
- Define **backup** and **permanent archive** separately. Company retrieval rights must be disclosed in agreements and privacy notices, and must respect attorney-client privilege, professional confidentiality, employee privacy, client rights, and legally required deletion or restriction.

## 9. Audit logs and access history

Logged with actor, action, target, and timestamp:

- authentication and access events;
- record and document reads where confidentiality requires it;
- creation, modification, and archiving of records;
- assignments, acceptances, declines, and reassignment requests;
- comment creation and any tier change, including Publish actions;
- document uploads, new versions, and archiving;
- permission, role, and restricted-access changes;
- legal holds and records-administration actions.

Required event coverage (Work Order) — at minimum:

**upload · access · download · archive · restoration · assignment · review · signature · filing**

Plus secure-link issuance, access, and revocation (§1a).

Audit logs are **append-only**. They must not be editable or deletable from within the application.

## 10. Security and privacy controls (Doc §8)

Multi-factor authentication · least-privilege access · encryption in transit and at rest · no shared accounts · automatic session timeout · periodic access review · prompt deprovisioning · download and export controls.

Complete audit logs · reviewer identity and version history · separation of preparation and final review when required · retention schedules · legal holds · controlled final disposition · backup and recovery · malware scanning · incident response · vendor due diligence.

> **These are implementation requirements, not public marketing claims.** Verify the actual architecture before publishing any claim about encryption strength, bank-grade security, compliance, immutable storage, automatic capture of local files, or **guaranteed professional review**.

## 11. Multilingual operation (Doc §9)

- **English is the default.** The same page structure can switch to Korean, Spanish, Simplified Chinese, Traditional Chinese, or Japanese **through approved locale files**. No locale-file architecture exists yet — it must be built.
- Translate navigation, buttons, forms, validation, confirmations, errors, messages, accessibility labels, and document instructions — **not only marketing text**.
- Use **human-reviewed** translations for tax, legal, security, pricing, credential, consent, privacy, filing-status, and service-scope statements.
- **Do not send confidential customer-entered tax information to an unapproved external translation service.**

## 12. Development sequence and approval gates (Doc §10)

1. **Workflow foundation** — roles, client records, assignments, status, document checklist, internal notes, visibility controls, audit events.
2. **Professional Review Center** — review queues, result uploads, communication visibility, corrections, approvals, versioning, audit history.
3. **Document vault and agreements** — role-limited storage, autosave, archive, retention, legal holds, records administration, policies, contracts, external e-signature integration.
4. **Client Portal** — secure collection, questionnaire, agreements, pricing approval, messages, signatures, invoices, payments.
5. **Business Intelligence** — revenue, profitability, workload, reviewer performance, complexity, acquisition, retention.

**Before implementation**, Seung Park must approve: the exact permission matrix · publishing controls · retention schedule · records-administrator authority · e-signature provider · cloud storage and database architecture · data flow · security providers · actions reserved for each role.

**No production activation, commit, push, merge, or deployment is authorized by the requirements document alone.**

## 13. Google Drive documentation rule (Doc §11)

All myTAXfile and myTAXfilenow decisions, approvals, requirements, corrections, workflows, and material updates are preserved in the designated folder: `https://drive.google.com/drive/folders/1-At9BI6PtD0rroP14TnF_aMsIwcjOAJy`

- For an existing subject, **update the current authoritative Doc**.
- For a materially different subject, **create a separate clearly titled Doc** in the same folder rather than mixing unrelated requirements.
- Each record must identify its subject, current approval status, and relationship to the authoritative project requirements.
- Avoid duplicate sources of truth, preserve prior approved content, keep superseded material recoverable through version history or an approved archive.
- Drive is the required **business-document** destination. It does **not** replace the canonical project Skill or the Git repository source files. Skills and code stay in their approved source systems; user-facing plans, decisions, and requirements are documented in Drive.

## 14. Open items requiring approval before implementation

- E-signature provider selection (candidates: eSign, Authentisign, other).
- Exact permission matrix and publishing controls.
- Retention schedule and legal-hold procedure.
- Records Administrator authority — **and its correct name** (see §2).
- Cloud storage, database architecture, data flow, and security providers.
- Portal hosting, authentication provider, and data-residency decisions.
- Encryption and key-management approach — no specific security claim may be published until verified.
- Notification vendor for email/SMS.
- Locale-file architecture for the six approved languages.
- Approved translation service that may handle confidential customer-entered data.
