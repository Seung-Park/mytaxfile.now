# myTAXfile — Canonical Price Book

Reference file for `.claude/skills/mytaxfile/SKILL.md` (area 3, Owner pricing authority).

This is **Required Control Register #1** from Workflow §7. It is the single authoritative source for pricing. Website copy, quotes, estimates, invoices, and code must read from this register and nothing else.

| Field | Value |
|---|---|
| Status | **APPROVED** |
| Approved by | Seung Park |
| Approval date | 2026-08-01 |
| Applies to tax year | <span>TBD</span> — not stated on approval; confirm before any figure is used |
| Effective date | <span>TBD</span> — confirm |
| Change authority | Seung Park, sole |
| Supersedes | Workflow §3 pricing table; Website Plan v2 §12 Launch Fees table |
| Drive record | **Not yet written** — connector unavailable at approval time |

## Approved pricing

Model: **low base price plus add-ons** for forms, states, and complexity (register row 8). The bundled-fee model in Website Plan v2 §12 is retired.

### Base services

| SKU | Scope | Fee |
|---|---|---|
| `MTF-1040-BASE` | Individual return, standard deduction, federal e-file | **$199** |
| `MTF-1040-SCHC` | Sole proprietorship / Schedule C | **$399** |
| `MTF-1120S-CORP` | S Corporation, one owner, federal return, clean books | **$795** |
| `MTF-1065-PART` | Partnership, federal return, clean books — **conditional**, offered only when a qualified preparer and reviewer are available | **$795** |
| `MTF-UNK-INTAKE` | Unknown-form review | Quote provided after document review |

### Add-ons

| Code | Trigger | Fee |
|---|---|---|
| `ADD-STATE` | Each state beyond the first | **+$50** |
| `ADD-SCH-A` | Itemized deductions | **+$75** |
| `ADD-SCH-D` | Investments, capital gains, digital assets | **+$100** |
| `ADD-SCH-E` | Per rental unit | **+$120** |
| `ADD-BK-CLEAN` | Bookkeeping remediation | **from +$250** |
| `ADD-EXT` | Extension filing | <span>TBD</span> |

## Conflicts resolved by this approval

1. **Schedule C — $299 vs $399.** Resolved to **$399**. The $299 figure in Website Plan v2 §12 priced a bundle ("1040 + one major Schedule"); under the approved base-plus-add-on model that point is reached arithmetically ($199 + $100 Schedule D). The bundle row is retired to avoid two prices for the same work.
2. **Entity — $795 vs $799.** Resolved to **$795**, matching Website Plan v2 §12 and the 1065 line. The $799 in Workflow §3 is treated as a stray.

This closes register row 9 and Website Plan v2 §14 launch-blocking decision #6.

## Out of scope

Not in this Price Book, because the underlying service is not in the approved Phase 1 catalog:

- C Corporation / Form 1120 — $895 appears in Website Plan v2 §12
- Trust & Estate Income / Form 1041 — $650 appears in Website Plan v2 §12
- Estate, gift, nonprofit, international, representation — Referral or Specialist only (Workflow §10C)

Add a service to this register only after the service itself is approved.

## Still unresolved — required before any figure is published

Workflow §7 requires a complete Price Book to carry all of the following. These are **not** approved:

- **Applicable tax year** and effective date
- **Minimum fee**
- **Discount authority** — who may discount, by how much
- **Refund and cancellation rule**
- **Rush, amended-return, and prior-year fees**
- **Included versus excluded work** per SKU, at the level of detail the Service Catalog requires
- **State-specific pricing variation**, pending the State Eligibility Matrix
- **Gross-margin validation** — Workflow §10 3단계 requires unit-economics review (cost, labour time, rework, software, payment, marketing) before pricing is final

## Publication rules — unchanged by this approval

Approving this register does **not** authorize publishing prices on the website. That is a separate decision.

When prices are published, Website Plan v2 §14 governs:

- Display **"starting at"** or **"estimate"** — never a guaranteed final fee before scope review.
- Never promise a refund amount, tax saving, filing time, acceptance, or audit outcome.
- A fixed quote is issued only after intake and document review (§10.3 Fixed Quote Promise).

The Interactive Fee Calculator approved in Website Plan v2 §10.3 was blocked pending this register. That block is now lifted, but the calculator still requires separate build approval and must display ranges, not fixed fees.

## Change history

- **2026-08-01** — Price Book created and approved by Seung Park. Resolves the $299/$399 Schedule C and $795/$799 entity conflicts carried in Website Plan v2 §12 and Workflow §3. Base-plus-add-on model adopted; bundle model retired. Tax year, effective date, minimum fee, discount authority, and refund rule remain TBD. Not yet recorded to Google Drive — connector unavailable.
