/**
 * Verification and review lifecycle for every tax parameter.
 *
 * The ladder is strictly ordered. A parameter set may only be shown to a
 * customer at the top rung. Nothing below it may produce a published result —
 * this is the mechanical gate that replaces "we promise to check".
 */

export const STATUS = Object.freeze({
  UNVERIFIED: 'unverified',
  SOURCE_VERIFIED: 'source_verified',
  PROFESSIONAL_REVIEW_PENDING: 'professional_review_pending',
  PROFESSIONALLY_REVIEWED: 'professionally_reviewed',
  APPROVED_FOR_PUBLICATION: 'approved_for_publication',
});

const ORDER = [
  STATUS.UNVERIFIED,
  STATUS.SOURCE_VERIFIED,
  STATUS.PROFESSIONAL_REVIEW_PENDING,
  STATUS.PROFESSIONALLY_REVIEWED,
  STATUS.APPROVED_FOR_PUBLICATION,
];

export function rank(status) {
  const i = ORDER.indexOf(status);
  if (i === -1) throw new Error(`Unknown status "${status}"`);
  return i;
}

export function atLeast(status, minimum) {
  return rank(status) >= rank(minimum);
}

/** True only when this parameter set may be shown to a customer. */
export function isPublishable(set) {
  return set?.status === STATUS.APPROVED_FOR_PUBLICATION;
}

export class NotPublishableError extends Error {
  constructor(set) {
    super(
      `Parameter set "${set?.id ?? 'unknown'}" has status "${set?.status ?? 'none'}" and ` +
      `may not produce a customer-facing result. Required: ${STATUS.APPROVED_FOR_PUBLICATION}.`
    );
    this.name = 'NotPublishableError';
    this.parameterSetId = set?.id;
    this.status = set?.status;
  }
}

/**
 * A reviewer is only real if a human recorded it. Never synthesise one.
 * Returns the set's own claim, having checked it is internally consistent.
 */
export function assertReviewConsistent(set) {
  const s = set.status;
  const needsReviewer = s === STATUS.PROFESSIONALLY_REVIEWED || s === STATUS.APPROVED_FOR_PUBLICATION;
  if (needsReviewer && !set.review?.reviewer) {
    throw new Error(`"${set.id}" claims status "${s}" but records no reviewer.`);
  }
  if (atLeast(s, STATUS.SOURCE_VERIFIED) && !set.source?.url) {
    throw new Error(`"${set.id}" claims status "${s}" but records no source URL.`);
  }
  if (atLeast(s, STATUS.SOURCE_VERIFIED) && !set.source?.verified_on) {
    throw new Error(`"${set.id}" claims status "${s}" but records no verification date.`);
  }
  return true;
}
