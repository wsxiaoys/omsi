# FLUX.2 [max]

Black Forest Labs' top tier of the FLUX.2 image family: the highest-priced, highest-claimed-quality
generation and editing model, and the only FLUX.2 variant with web-grounded generation. Released
**2025-12-16**, three weeks after [pro] and [flex]
([BFL release notes](../../sources/bfl.ai/flux-2-max-release-notes/2026-10-26.md)), and available
only as a hosted endpoint — no weights are published
([Hugging Face check](../../sources/huggingface.co/flux-2-max-weights-search/2026-10-26/index.md)).

## Identity

- Canonical name: **FLUX.2 [max]**. Marketing and host spellings vary: "FLUX.2 Max",
  "Flux 2 Max" (fal, Replicate), "Flux 2 Max (Text to Image)" (fal page title).
- First-party endpoint: `POST /v1/flux-2-max`
  ([API reference](../../sources/bfl.ai/flux-2-max-api-reference/2026-10-26/index.md)).
  There is **no `flux-2-max-preview`** and no pinned-snapshot pair, unlike [pro], which ships as
  `flux-2-pro` (frozen) plus `flux-2-pro-preview` (moving)
  ([family overview](../../sources/bfl.ai/flux-2-max-bfl-model-page/2026-10-26.md)).
- Partner endpoints: `fal-ai/flux-2-max` (text-to-image) and `fal-ai/flux-2-max/edit` (editing)
  on fal ([t2i](../../sources/fal.ai/flux-2-max/2026-10-26/index.md),
  [edit](../../sources/fal.ai/flux-2-max-edit/2026-10-26/index.md));
  `black-forest-labs/flux-2-max` on Replicate, one model covering both
  ([Replicate](../../sources/replicate.com/flux-2-max/2026-10-26.md)).
- Release date: **2025-12-16**, from BFL's changelog. Two host-side dates agree: fal's metadata
  `publishedAt` is `2025-12-16T13:55Z` for the text-to-image endpoint and `2025-12-16T13:47Z` for
  the edit endpoint, and Replicate's page reported "Model created 10 months, 1 week ago" at
  capture. The launch falls inside the one-year window (on or after 2025-10-26).
- Siblings, all separate models: FLUX.2 [pro] and [flex] (2025-11-25), [klein] 4B/9B (2026-01-15),
  [dev] (open weights). See [FLUX.2 [pro]](flux-2-pro.md) for the mid-tier page; findings there do
  not transfer here.

### Is [max] a distinct model, or a serving profile of [pro]?

This was the open identity question for this page. The evidence splits cleanly, and the split is
itself the answer.

**Distinct at the product level.** [max] has its own endpoint ID, its own launch entry three weeks
after [pro], its own price (2.3× the [pro] per-megapixel rate), and the one capability BFL
attributes to it alone — grounding search, which the family table marks "Yes" for [max] and "No"
for every other variant ([overview](../../sources/bfl.ai/flux-2-max-bfl-model-page/2026-10-26.md)).
BFL's own API reference tells readers to "start with FLUX.2 [pro]" for most use cases and reserve
[max] for "the hardest edits and maximum prompt following"
([API reference](../../sources/bfl.ai/flux-2-max-api-reference/2026-10-26/index.md)). A serving
profile of one model does not get its own launch announcement and price tier.

**Indistinguishable from [pro] at the request level.** Both endpoints reference the *same*
OpenAPI request schema, `Flux2Inputs` — same eight `input_image_N` slots, same `disable_pup`, same
`safety_tolerance` range, same output formats. The family table also gives both "Standard"
controls. So nothing a caller sends distinguishes the tiers
([API reference artifact](../../sources/bfl.ai/flux-2-max-api-reference/2026-10-26/index.md)).

**The weight-level relationship is undocumented.** BFL publishes no parameter count, architecture,
or benchmark for either tier, and no weights for either. Replicate's README (BFL copy) asserts
[max] is "improving upon FLUX.2 [pro] across **all** dimensions"
([Replicate](../../sources/replicate.com/flux-2-max/2026-10-26.md)), which implies a different
training run rather than a config change — but that is a vendor claim, not an observation.

**Reading:** treat [max] as a distinct product tier that must be selected deliberately, and treat
the quality gap over [pro] as a vendor claim of unmeasured size. Do not assume shared weights in
either direction: if the weights are different, [pro] findings understate [max]; if they are the
same, [max]'s premium buys routing and grounding, not a better model. Nothing captured settles it.

## Current assessment

[max] is the family's "final asset" tier. Its documented differentiators are grounding search and
stronger editing consistency on multi-reference work; its documented cost is 2.3× [pro] per
megapixel. Everything about its quality advantage is vendor copy — BFL's overview, BFL's
marketing page, and BFL's README as republished by Replicate — with no benchmark, no harness, and
no independent measurement captured. The one concrete, checkable difference in the documentation
is the grounding-search row in the family table.

Practically: reach for [max] when the prompt depends on current real-world facts, or when a
multi-reference edit keeps failing on [pro]; otherwise [pro] is the documented default and
[flex] is the documented typography/control option
([overview](../../sources/bfl.ai/flux-2-max-bfl-model-page/2026-10-26.md)).

## Documented capabilities

All of the following is vendor or host documentation. None of it is a test result.

- **Text-to-image and editing through one first-party endpoint.** `/v1/flux-2-max` accepts a
  prompt with or without input images; the same schema serves both
  ([API reference](../../sources/bfl.ai/flux-2-max-api-reference/2026-10-26/index.md)).
  fal splits the two into separate endpoints, and its text-to-image endpoint accepts no images at
  all ([fal t2i](../../sources/fal.ai/flux-2-max/2026-10-26/index.md)).
- **Up to eight reference images via the API, ten in the playground.** BFL's family table and
  Replicate's schema agree on eight for the API; Replicate states it as a hard limit ("Maximum 8
  images") ([overview](../../sources/bfl.ai/flux-2-max-bfl-model-page/2026-10-26.md),
  [Replicate](../../sources/replicate.com/flux-2-max/2026-10-26.md)). BFL's launch note says "up
  to 10 input images" without naming a surface
  ([release notes](../../sources/bfl.ai/flux-2-max-release-notes/2026-10-26.md)), and the editing
  guide's summary says "up to 10 images" while its body says "8 via API, 10 in the playground"
  ([editing docs](../../sources/bfl.ai/flux-2-max-image-editing-docs/2026-10-26.md)). The
  contradiction is BFL's, and it is unresolved; eight is the figure two independent surfaces
  agree on.
- **Grounding search — [max] only.** BFL describes it as searching the web "when prompted" or
  "when needed" to visualize sports scores, live weather, news, and historical scenes
  ([overview](../../sources/bfl.ai/flux-2-max-bfl-model-page/2026-10-26.md),
  [release notes](../../sources/bfl.ai/flux-2-max-release-notes/2026-10-26.md)). There is **no
  request parameter for it** in BFL's schema, fal's schema, or Replicate's schema, so it cannot
  be turned on, off, or inspected per call; the trigger is undocumented.
- **Output up to 4MP at any aspect ratio**, a family-level figure stated in the overview and on
  the marketing page ([overview](../../sources/bfl.ai/flux-2-max-bfl-model-page/2026-10-26.md),
  [marketing page](../../sources/bfl.ai/flux-2-max-marketing-page/2026-10-26.md)). Host ceilings
  are lower or narrower — see Limitations.
- **Prompt upsampling on by default.** `disable_pup: true` turns it off on BFL's API, and the
  field's own description says the default applies to "[pro] and [max]"
  ([API reference](../../sources/bfl.ai/flux-2-max-api-reference/2026-10-26/index.md)). Neither
  fal nor Replicate exposes an equivalent switch.
- **Seed** for reproducibility, on all three hosts
  ([API reference](../../sources/bfl.ai/flux-2-max-api-reference/2026-10-26/index.md),
  [fal](../../sources/fal.ai/flux-2-max/2026-10-26/index.md),
  [Replicate](../../sources/replicate.com/flux-2-max/2026-10-26.md)).
- **Hex color control and JSON-structured prompting**, documented for the family rather than for
  [max] specifically ([overview](../../sources/bfl.ai/flux-2-max-bfl-model-page/2026-10-26.md),
  [marketing page](../../sources/bfl.ai/flux-2-max-marketing-page/2026-10-26.md)).
- **Async delivery**: submit-and-poll or webhook, with `cost`, `input_mp`, and `output_mp`
  returned on submission ([API reference](../../sources/bfl.ai/flux-2-max-api-reference/2026-10-26/index.md)).

### Marketing claims, kept separate

Recorded as claims, not findings:

- "Top-tier quality image generation and editing. The most capable variant of FLUX.2 for
  professional-grade output" ([marketing page](../../sources/bfl.ai/flux-2-max-marketing-page/2026-10-26.md)).
- "improving upon FLUX.2 [pro] across **all** dimensions … a higher hit/miss ratio for very
  complex edits involving multiple references"
  ([Replicate README](../../sources/replicate.com/flux-2-max/2026-10-26.md)).
- "generates content nearly as fast as FLUX.2 [pro], making it up to **3× faster** than competing
  models of similar quality" (same record). No baseline models, resolutions, or harness are named.
- "32K text input tokens", "Sub-10-second generation speeds", "Reliable from low-res drafts
  (400px²)" — family-level performance bullets with no conditions attached
  ([marketing page](../../sources/bfl.ai/flux-2-max-marketing-page/2026-10-26.md)).

## Limitations and constraints

- **No public weights.** [max] is hosted-only. BFL's overview offers downloads for [klein] and
  [dev] only, and BFL's Hugging Face organization has no [max] or [pro] repository
  ([overview](../../sources/bfl.ai/flux-2-max-bfl-model-page/2026-10-26.md),
  [Hugging Face](../../sources/huggingface.co/flux-2-max-weights-search/2026-10-26/index.md)).
  Self-hosting is not an option at any price.
- **No sampling controls.** Steps and guidance are not exposed — "Standard" controls in the family
  table. [flex] is the family's answer for that
  ([overview](../../sources/bfl.ai/flux-2-max-bfl-model-page/2026-10-26.md)).
- **Moderation ranges differ by host, so a tolerance value is not portable.** BFL accepts an
  integer 0–7 (default 2), gated per route and organization, with unapproved levels returning 422;
  fal and Replicate accept 1–5 (default 2). A value legal on BFL's API (0, 6, or 7) is out of
  range on both hosts ([BFL](../../sources/bfl.ai/flux-2-max-api-reference/2026-10-26/index.md),
  [fal](../../sources/fal.ai/flux-2-max/2026-10-26/index.md),
  [Replicate](../../sources/replicate.com/flux-2-max/2026-10-26.md)). fal also adds a separate
  `enable_safety_checker` switch whose disabling "requires account authorization".
- **The 4MP ceiling is not reachable everywhere.** fal bounds output to `max_area` 4,194,304 px
  with 2560 px per side; Replicate caps output at 2048×2048 and recommends 2MP or below, so its
  4MP setting only lands near 1:1
  ([fal](../../sources/fal.ai/flux-2-max/2026-10-26/index.md),
  [Replicate](../../sources/replicate.com/flux-2-max/2026-10-26.md)).
- **Prompt-length limit is undocumented.** BFL's schema puts no bound on `prompt`; the only
  figure anywhere is the family marketing bullet "32K text input tokens", which is not scoped to
  [max] and carries no tokenizer detail
  ([API reference](../../sources/bfl.ai/flux-2-max-api-reference/2026-10-26/index.md),
  [marketing page](../../sources/bfl.ai/flux-2-max-marketing-page/2026-10-26.md)).
- **No documented input-megapixel cap for [max].** BFL charges for input megapixels but states no
  ceiling; fal declares a bare string array for `image_urls` with no `maxItems`; Replicate caps
  reference images at eight but says nothing about total input megapixels
  ([BFL](../../sources/bfl.ai/flux-2-max-pricing-feed/2026-10-26/index.md),
  [fal edit](../../sources/fal.ai/flux-2-max-edit/2026-10-26/index.md),
  [Replicate](../../sources/replicate.com/flux-2-max/2026-10-26.md)).
- **Host-specific gaps.** fal's text-to-image endpoint takes no images; neither fal nor Replicate
  exposes `disable_pup`; neither host documents grounding search, though Replicate's README lists
  grounded generation as a [max] use case. Which host behaviour applies to a given request is a
  host question, not a model question.
- **Negative prompts are unverified for [max].** Replicate's [pro] page states the family does not
  understand them ([pro record](../../sources/replicate.com/flux-2-pro/2026-10-26.md)); the [max]
  page does not repeat the note, and no [max] source addresses it. Not a documented limitation,
  and not a measured one.

## Access, pricing, licensing

| Route | Generation (1MP) | Each additional output MP | Input | Effective 4MP generation |
| --- | --- | --- | --- | --- |
| BFL `POST /v1/flux-2-max` | $0.07 first MP | $0.03 | $0.03/input MP | $0.16 |
| fal `fal-ai/flux-2-max` | $0.07 first processed MP | $0.03 | billed as processed MP on `/edit` | $0.16 |
| Replicate `black-forest-labs/flux-2-max` | $0.04/run + $0.03/output MP = $0.07 | $0.03 | $0.03/input MP | $0.04 + $0.12 = $0.16 |

Sources: [BFL pricing feed](../../sources/bfl.ai/flux-2-max-pricing-feed/2026-10-26/index.md),
[fal](../../sources/fal.ai/flux-2-max/2026-10-26/index.md),
[fal edit](../../sources/fal.ai/flux-2-max-edit/2026-10-26/index.md),
[Replicate](../../sources/replicate.com/flux-2-max/2026-10-26.md).

- **The three schedules decompose differently and agree numerically.** BFL's "first MP $0.07 +
  $0.03 each additional" and Replicate's "$0.04/run + $0.03/MP" produce the same totals at 1MP,
  2MP, and 4MP; all three land on $0.10 for a 1MP output from a 1MP input. As captured, the
  same model costs the same per image on all three hosts.
- **BFL's printed "Image Editing from $0.10" is not a separate rate.** It is the $0.07 first-MP
  price plus one input megapixel at $0.03 — the same arithmetic reproduces every FLUX.2 row on
  that page. The input-megapixel charge is what makes editing cost more
  ([pricing feed](../../sources/bfl.ai/flux-2-max-pricing-feed/2026-10-26/index.md)).
- **Relative to siblings:** [max]'s $0.07 first megapixel is 2.33× [pro]'s $0.03, 1.4× [flex]'s
  $0.05, and 5× [klein] 4B's $0.014 (same record).
- **Licensing:** fal's model metadata flags the endpoint `licenseType: commercial`, but that is a
  metadata field, not a licence text; BFL's own terms for [max] output were not captured. Check
  BFL's terms before relying on commercial rights. No weights licence exists to check, since no
  weights are published.

## Unresolved questions

1. **Do [max] and [pro] run different weights?** No BFL source states it; the shared request
   schema argues for a common API surface, not common weights. Without this, the size of the
   quality gap cannot be reasoned about, only measured.
2. **What triggers grounding search, and does it work through hosts?** There is no parameter for
   it on any of the three hosts, and neither fal nor Replicate documents it. fal's metadata marks
   the endpoint `hostingType: proxy`, which *may* mean fal forwards to BFL and inherits the
   behaviour — inference, not documentation.
3. **Eight or ten reference images on the API?** BFL's own pages disagree; fal documents no limit
   at all. A per-endpoint test would settle it.
4. **What is the prompt-length limit?** Undocumented in every schema; only the family-level "32K
   text input tokens" marketing bullet exists.
5. **Is "nearly as fast as [pro]" still true?** BFL made [pro] "approximately 2x faster" on
   `flux-2-pro-preview` in March 2026
   ([release notes](../../sources/bfl.ai/flux-2-max-release-notes/2026-10-26.md)); Replicate's
   README, which predates or straddles that change, is the source of the speed comparison. The
   relative latency may have moved against [max].
6. **Which snapshot does each host serve, and how often is it refreshed?** Replicate reported
   "Model updated 7 months, 1 week ago"; fal publishes no snapshot identifier.
7. **How large is the quality and editing-consistency gap in practice?** No independent
   evaluation of [max] was captured — no benchmark table, no leaderboard entry, no third-party
   comparison.

## Evidence status

Everything above comes from vendor and host documentation captured on 2026-10-26. **No direct
tests have been run for this page.** The README that Replicate publishes is BFL's own copy, so it
counts as vendor material restated by a host, not as independent measurement; the same applies to
fal's one-line page description. Claims such as "most capable variant" and "improving upon [pro]
across all dimensions" are recorded as marketing, not findings.

Evidence floor: met. First-party sources: BFL release notes, family overview, API reference,
editing docs, pricing feed, and marketing page (six records under `sources/bfl.ai/`, all captured
under model-specific slugs so the shared records stay untouched). Independent hosts: fal (two
endpoints, with published OpenAPI schemas) and Replicate (page, billing config, input schema). One
registry check (Hugging Face) supplies the weights finding as an absence.

The most useful next evidence would be a small paired test on one date and one endpoint — dense
multi-reference edits and a fact-dependent prompt, [max] against [pro], with the same seeds — plus
a grounding probe to establish whether the capability is reachable at all through a host.
