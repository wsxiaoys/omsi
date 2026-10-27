# Sourcing new models

Inclusion criteria for deciding whether a newly discovered model deserves a page
in `wiki/models/`. This is a maintenance reference for
[`../SKILL.md`](../SKILL.md), not a knowledge page: nothing here is evidence,
and nothing here should be cited from a model page.

## Discovery feeds

Read at least these, and record the date you read them:

- `fal.ai/models` — media and utility endpoints; note `hostingType`, price, and
  whether weights are published.
- `replicate.com/explore` — an independent host record and a second catalogue.
- `artificialanalysis.ai/leaderboards/models` — text, image, video, TTS and STT.
- `openrouter.ai/api/v1/models` — text/multimodal IDs and dated snapshots.
- Vendor changelogs and model cards — launch dates and canonical IDs.

A host catalogue path is a lead, not a citation. Hosts split entries for billing
and merge them for convenience, so catalogue structure does not decide identity.

## Criteria

A model earns a page only when all of these hold.

### 1. In-window

Launched on or after the one-year cutoff (currently 2025-10-26). The discovery
feeds do not publish launch dates, so check a first-party changelog or release
note per model. An older model is excluded unless it is retained as a
specialist/utility exception with its original date recorded on the page.

### 2. Evidence floor

At least one first-party source (publisher or model developer) **and** at least
one independent host record. Two host pages alone do not satisfy the floor,
because hosts restate each other and vendor marketing. If only host material
exists, say so in the page's evidence status.

### 3. Identity

One canonical page per distinct model entity. Split a family tier or dated
checkpoint only when all three hold:

1. **Both are obtainable.** If the older snapshot is delisted and its weights
   are withdrawn, keep one page with a checkpoint history. Published weights
   count — an open-weights checkpoint no API serves is still a real option.
2. **The difference changes the recommendation.** Quality, price, context,
   latency or policy must diverge enough that one verdict would mislead a
   reader of the other.
3. **Variant-specific evidence exists.** Some source must describe the
   checkpoint itself. If every source covers both, a split yields two pages
   that drift.

Addressability is a caveat, not a test. Any host can pin a snapshot under a
stable slug; what matters is whether the vendor gives it its own identity,
pricing and support window, and whether both stay obtainable. Leaderboard
granularity is not identity; aggregator labels are leads, not canonical IDs.

### 4. Materiality

Raw points are the wrong unit. Judge a delta against, best first: an
independent re-measurement of the delta; the benchmark's own equivalence band;
the harness spread for the same model. A vendor's "minor update" is a claim
about the training change, not the effect size.

### 5. Decision value

A model earns a page only if it changes a recommendation. Exclude:

- aliases, billing suffixes, reasoning-effort rows and task-split endpoints that
  belong inside an existing page;
- intermediate generations superseded by the same vendor's current tier;
- leaderboard-only previews with no public API or weights;
- near-identically priced sizes inside a vendor whose flash or mid tier already
  occupies that slot;
- thin workflow utilities with no independent host.

For a low-priced tier, keep only the newest member of its own efficiency line,
and only where it is a real production default. Drop a predecessor that a
same-line successor serves.

### 6. Stopping rule

Stop adding models when curation quality degrades: identity-rule collapse, heavy
in-window self-supersession, evidence-floor failures in the long tail, and
diminishing decision value. Coverage is a means, not a target.

## Workflow

1. Record the discovery feed, path, date, host, hosting type, price, and weights
   availability.
2. Check the launch date first-party.
3. Check the evidence floor; if unmet, record the gap and stop.
4. Apply the identity and materiality tests.
5. Apply the decision-value test.
6. Create the page and source records; do not cite this file.
