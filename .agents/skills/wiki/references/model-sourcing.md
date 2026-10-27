# Sourcing new models

Inclusion criteria for deciding whether a newly discovered model deserves a page
in `wiki/models/`. This is a maintenance reference for
[`../SKILL.md`](../SKILL.md), not a knowledge page: nothing here is evidence,
and nothing here should be cited from a model page.

## Discovery feeds

Read at least these, and record the date you read them:

- `fal.ai/models` — media and utility endpoints; note `hostingType`, price, and
  whether weights are published.
- `replicate.com/explore` — a second catalogue and a distribution check. A
  listing is a lead, not significance evidence.
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

Two legs, both about the model rather than about distribution:

1. **First-party.** At least one source from the publisher or model developer.
2. **Independent significance.** At least one measurement the developer did not
   produce, showing the model matters on quality, cost or efficiency: a row on a
   leaderboard the vendor does not operate, an independent re-run of a published
   benchmark, or a third party's price, latency or throughput measurement.

Host availability is not part of the floor. A model can be worth a page with no
third-party host at all, and a catalogue entry says nothing about whether the
model is any good — hosts list whatever sells and restate the vendor's copy.
Record distribution (who serves it, at what price) as a fact on the page, not as
a gate on whether the page exists.

What does **not** count as independent significance:

- the vendor's own benchmark table, however detailed;
- a leaderboard that only republishes vendor-reported numbers — say so in the
  page's evidence status and treat its numbers as claims;
- download counts, likes, stars, or launch coverage;
- a host catalogue entry, including a host that resells the vendor's own API.

If no independent measurement exists, the model stays in `draft/model-list.md`
with the gap recorded. If the only independent material is a re-run on a subset
or a different harness, say that: it supports the level, not the rank.

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
- thin workflow utilities with no independent measurement.

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
3. Check the evidence floor — a first-party source plus one independent
   measurement of quality, cost or efficiency. If unmet, record the gap and stop.
4. Apply the identity and materiality tests.
5. Apply the decision-value test.
6. Create the page and source records; do not cite this file.
