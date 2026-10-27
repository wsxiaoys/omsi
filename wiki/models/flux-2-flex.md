# FLUX.2 [flex]

Black Forest Labs' controllability-focused FLUX.2 image model, released 2025-11-25 alongside
FLUX.2 [pro] ([release notes](../../sources/bfl.ai/flux2-flex-release-notes/2026-10-26.md),
[launch post](../../sources/bfl.ai/flux2-flex-launch-blog/2026-10-26.md)). What [flex] adds to
the family is a knobs-on inference surface: it is the only FLUX.2 endpoint that accepts
`steps` and `guidance`, and the only endpoint in BFL's FLUX.2/FLUX 3 range that accepts a
guidance scale at all ([API reference](../../sources/bfl.ai/flux2-flex-api-reference/2026-10-26.md)).
BFL positions it for typography and small-detail preservation rather than for maximum fidelity,
and — like [pro] and [max] — it has no public weights.

## Identity

- Canonical name: FLUX.2 [flex]. Host spellings: "Flux 2 Flex" (fal display name, Replicate
  README), `flux-2-flex`.
- First-party endpoint: `POST /v1/flux-2-flex`, serving both text-to-image and editing from one
  endpoint ([API reference](../../sources/bfl.ai/flux2-flex-api-reference/2026-10-26.md)).
- Partner endpoints: `fal-ai/flux-2-flex` (text-to-image) and `fal-ai/flux-2-flex/edit`
  (image-to-image) on fal ([catalogue](../../sources/fal.ai/flux-2-flex-catalogue/2026-10-26.md));
  `black-forest-labs/flux-2-flex` on Replicate
  ([Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md)).
- Also reachable as `flux2_flex` on BFL's MCP `generate_image` tool, described there as "best for
  typography" ([MCP reference](../../sources/bfl.ai/flux2-flex-mcp-reference/2026-10-26.md)).
- Release: **2025-11-25**, same day as [pro]. fal's catalogue timestamps for both [flex]
  endpoints are also 2025-11-25 ([catalogue](../../sources/fal.ai/flux-2-flex-catalogue/2026-10-26.md)).
- Siblings: FLUX.2 [pro], [max], [klein] 4B/9B, [dev]. These are separate models with separate
  behavior; findings here should not be transferred without evidence.
- Status: BFL's site-level guide calls the whole FLUX.2 family, [flex] included, "the previous
  generation and is still served", with FLUX 3 Image as the current image line
  ([generation status](../../sources/bfl.ai/flux2-flex-generation-status/2026-10-26.md)).

### No pinned snapshot

Unlike [pro] and [klein] 9B, [flex] has **no fixed and no preview endpoint**. BFL's overview
table names `flux-2-pro-preview`/`flux-2-pro` and `flux-2-klein-9b-preview`/`flux-2-klein-9b` and
nothing for [flex] ([overview](../../sources/bfl.ai/flux2-flex-overview/2026-10-26.md)). That
matters because the single `flux-2-flex` endpoint was changed in place: on 2026-01-29 BFL
announced it "is now up to **3x faster** while maintaining the same quality", with no new
endpoint and no pinned alternative
([release notes](../../sources/bfl.ai/flux2-flex-release-notes/2026-10-26.md)). So "FLUX.2
[flex]" is not one immutable behavior, and a reader cannot select a pre-2026-01-29 version
first-party. Which side of that update fal and Replicate serve is undocumented; fal's and
Replicate's timestamps are catalogue/version metadata, not model revisions
([fal catalogue](../../sources/fal.ai/flux-2-flex-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md)).

### Distinct model, or a tier with knobs?

BFL treats [flex] as its own model throughout: a separate price-list row, a separate request
schema, a separate "Best for" column, a separate entry in the playground and the MCP tool, and a
sentence of its own in the launch post ("This model excels at rendering text and fine details")
([overview](../../sources/bfl.ai/flux2-flex-overview/2026-10-26.md),
[launch post](../../sources/bfl.ai/flux2-flex-launch-blog/2026-10-26.md)). The launch post also
plots [pro], [flex], [dev] and [klein] on one performance-versus-control graph, which is how a
family of separately-trained models is usually presented.

What BFL never states is whether [flex] is a distinct checkpoint or [pro]'s weights behind a
different sampler configuration. No captured first-party page mentions shared weights, a
fine-tune, or a distillation relation for [flex]; architecture is described only at family level
("couples the Mistral-3 24B parameter vision-language model with a rectified flow transformer")
([launch post](../../sources/bfl.ai/flux2-flex-launch-blog/2026-10-26.md)). The evidence
supports "distinct addressable model with its own price and control surface" and does not settle
"separately trained checkpoint". Recorded as an open question rather than resolved.

## Current assessment

[flex] is the family's answer to "I need to trade compute for quality per image." Steps run
1–50 and guidance 1.5–10 on BFL's API, and BFL's own figure captions tie the steps parameter to
**typography accuracy** and to image detail — 6, 20 and 50 steps side by side
([launch post](../../sources/bfl.ai/flux2-flex-launch-blog/2026-10-26.md)). Its documented
specialisation is the same axis: "Specialized for typography. Best for text rendering and
preserving small details" ([overview](../../sources/bfl.ai/flux2-flex-overview/2026-10-26.md)).

Two costs come with that control. First, **price**: [flex] has a flat $0.05/MP output rate with
no first-megapixel discount, so a 4 MP image costs $0.20 against $0.075 for [pro] — about 2.7× —
while at 1 MP the gap is $0.05 vs $0.03
([pricing](../../sources/bfl.ai/flux2-flex-pricing/2026-10-26.md)). Second, **reproducibility**:
there is no pinned [flex] endpoint, and the one endpoint changed speed in January 2026.

Read against [pro]: choose [pro] for production defaults and price, [flex] when you specifically
want to spend steps on text-heavy layouts or to cut steps for cheap iteration, and [max] when you
need grounding search or maximum editing consistency. BFL's own API page says the same in one
line: "For most use cases, start with FLUX.2 [pro]"
([API reference](../../sources/bfl.ai/flux2-flex-api-reference/2026-10-26.md)). Note also that
FLUX 3 Image, the successor generation, does not expose guidance at all and exposes steps only in
its Klein variant, so [flex]'s control surface has no direct replacement in the current line
([API reference](../../sources/bfl.ai/flux2-flex-api-reference/2026-10-26.md)).

## Documented capabilities

All of the following is vendor or host documentation, not independent measurement.

### The control surface, and how much it varies by host

| | BFL API | fal (text-to-image, edit) | Replicate |
| --- | --- | --- | --- |
| `steps` | integer 1–50, default **50** | integer 2–50, default **28** | integer 1–50, default **30** |
| `guidance` | number 1.5–10, default **5** | number 1.5–10, default **3.5** | number 1.5–10, default **4.5** |
| prompt upsampling | `prompt_upsampling`, default `true` | not exposed | `prompt_upsampling`, default `true` |
| seed | yes | yes | yes |
| safety tolerance | integer 0–7, default 2 | string enum "1"–"5", default "2", plus `enable_safety_checker` | integer 1–5, default 2 |
| output formats | `jpeg`, `png`, `webp` | `jpeg`, `png` | `webp`, `jpg`, `png`, plus `output_quality` 0–100 |
| references | `input_image`…`input_image_8` (8) | `image_urls` array, prose says up to 10 | `input_images`, max 10 |

Sources for the table:
[BFL API reference](../../sources/bfl.ai/flux2-flex-api-reference/2026-10-26.md),
[fal text-to-image](../../sources/fal.ai/flux-2-flex/2026-10-26.md),
[fal edit](../../sources/fal.ai/flux-2-flex-edit/2026-10-26.md),
[Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md).

The defaults are the practically important part: **the same request produces different images on
each host**, and a "50-step flex image" means the BFL default but 1.8× fal's default. fal's
guidance default (3.5) matches the value Replicate's README recommends ("Start around 3.5") but
not Replicate's own default (4.5).

Guidance semantics, per BFL's field description: "High guidance scales improve prompt adherence
at the cost of reduced realism"
([API reference](../../sources/bfl.ai/flux2-flex-api-reference/2026-10-26.md)). fal and
Replicate describe the same trade in their own words — higher values follow instructions more
literally, lower values allow creative interpretation
([fal](../../sources/fal.ai/flux-2-flex/2026-10-26.md),
[Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md)).

### Shared FLUX.2 capabilities

- **Text-to-image and instruction-based editing in one model.** On BFL, one endpoint accepts a
  prompt with or without input images; fal splits the two modes into two endpoints.
- **Multi-reference input.** 8 slots via BFL's API and 10 in the playground for [flex], per the
  overview table and the prompt reference's per-model table
  ([overview](../../sources/bfl.ai/flux2-flex-overview/2026-10-26.md),
  [prompt reference](../../sources/bfl.ai/flux2-flex-prompt-reference/2026-10-26.md)). Hosts
  restate the ceiling differently: fal's edit page says "up to 10 reference images (14 MP total
  input)", Replicate's says "up to ten reference photos (14 MB total)"
  ([fal edit](../../sources/fal.ai/flux-2-flex-edit/2026-10-26.md),
  [Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md)).
- **Output up to 4MP.** Stated for the family at launch ("Up to 4MP output — High-resolution
  generation at any aspect ratio") and repeated for [flex] by Replicate ("editing at resolutions
  up to 4 megapixels") ([release notes](../../sources/bfl.ai/flux2-flex-release-notes/2026-10-26.md),
  [Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md)).
- **Prompt upsampling on by default** on BFL and Replicate; fal's [flex] endpoints expose no
  upsampling flag.
- **Hex color control, JSON/structured prompting, `@image` referencing.** Documented for the
  family by BFL and reproduced on both host pages
  ([launch post](../../sources/bfl.ai/flux2-flex-launch-blog/2026-10-26.md),
  [fal](../../sources/fal.ai/flux-2-flex/2026-10-26.md),
  [Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md)).
- **Seed** for reproducibility, on all three hosts.
- **No grounding search.** Web-grounded generation is [max]-only
  ([overview](../../sources/bfl.ai/flux2-flex-overview/2026-10-26.md)).

### Marketing claims (recorded as claims, not findings)

- "Maximum precision. Text that reads. Complete creative control."
  ([product page](../../sources/bfl.ai/flux2-flex-models-page/2026-10-26.md)).
- "Specialized models for typography and keeping small details" (same page, "At a glance").
- "Best-in-class text rendering" (BFL release notes); "Best-in-class text rendering accuracy for
  logos, headlines, signage" (fal); "Text rendering is where Flex really shines" (Replicate).
- Family-level figures on the product page that are not attributed to [flex] alone and carry no
  methodology: "32K text input tokens", "Sub-10-second generation speeds", "Reference up to 10
  images", "up to 4MP"
  ([product page](../../sources/bfl.ai/flux2-flex-models-page/2026-10-26.md)). "Sub-10-second" in
  particular cannot be applied to [flex] without a step count, since steps are the latency dial.
- No benchmark numbers, Elo scores, or third-party evaluations of [flex] were found on any
  captured page.

## Limitations and constraints

- **No public weights.** BFL's Hugging Face organisation publishes FLUX.2 [dev] and [klein]
  repositories and nothing named flex
  ([Hugging Face listing](../../sources/huggingface.co/flux-2-flex-weights-search/2026-10-26.md));
  the price list marks only [dev] as "Open weights" and [klein] as Apache 2.0 / FLUX
  Non-Commercial ([pricing](../../sources/bfl.ai/flux2-flex-pricing/2026-10-26.md)). [flex] is
  hosted-only, like [pro] and [max].
- **No pinned snapshot.** See Identity above: one endpoint, changed in place on 2026-01-29.
- **Input budget unclear.** BFL documents a **9 MP input+output cap for [pro] only** and gives no
  equivalent figure for [flex] ([prompt reference](../../sources/bfl.ai/flux2-flex-prompt-reference/2026-10-26.md)).
  fal's edit page states 14 MP total input; Replicate states 14 MB. Whether [flex] inherits
  [pro]'s 9 MP cap is unresolved.
- **No negative prompts (host claim).** Replicate states flatly that "Negative prompts don't work
  here" for [flex] and advises describing what you want instead
  ([Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md)). BFL's prompt reference
  says "No negative prompts supported" under a "[pro] & [max]" heading and has no [flex] block,
  so this is host documentation for [flex], not a vendor statement
  ([prompt reference](../../sources/bfl.ai/flux2-flex-prompt-reference/2026-10-26.md)).
- **Resolution ceiling is host-mediated.** Replicate's schema caps width/height at 2048 and says
  "Up to 4 MP is possible, but 2 MP or below is recommended"; its README separately claims
  "Output resolution is 1024 × 1024 pixels in PNG format", which contradicts both its own schema
  defaults (`resolution: 1 MP`, `output_format: webp`) and BFL's 4 MP figure
  ([Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md)). Treat Replicate's
  README sentence as stale copy, but do not assume 4 MP is honoured at every aspect ratio.
- **Moderation is gated and differs by host.** BFL's `safety_tolerance` is 0–7 with the approved
  maximum set by route and organization, and unapproved levels return 422; fal and Replicate
  expose 1–5 only ([API reference](../../sources/bfl.ai/flux2-flex-api-reference/2026-10-26.md),
  [fal](../../sources/fal.ai/flux-2-flex/2026-10-26.md),
  [Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md)). A refusal or a clamped
  level on one platform is not evidence about the model's general willingness.
- **No dedicated BFL product page.** [flex] is sold only on the shared FLUX.2 family page;
  BFL's sitemap lists product pages for `flux-2`, `flux-2-max` and `flux-2-klein` and none for
  `flux-2-flex` ([product page](../../sources/bfl.ai/flux2-flex-models-page/2026-10-26.md)).

## Access, pricing, licensing

- **BFL first-party:** from **$0.05** per text-to-image and from **$0.10** per image edit, on a
  megapixel basis ([pricing](../../sources/bfl.ai/flux2-flex-pricing/2026-10-26.md)). The
  underlying rate card is $0.05 for the first output MP, $0.05 for each additional output MP and
  $0.05 per input MP — a flat rate, unlike [pro]'s $0.03 + $0.015/MP. Worked figures: 1 MP image
  $0.05, 4 MP image $0.20; a 1 MP edit against one 1 MP reference $0.10; a 4 MP edit against one
  1 MP reference $0.25. These are arithmetic on BFL's published rates, not quotes from the page.
- **fal:** "$0.05 per megapixel on both input and output side, rounded up to the nearest
  megapixel" — 1024×1024 = $0.05, 1920×1080 = $0.10, and a 512×512 output still costs $0.05
  ([fal text-to-image](../../sources/fal.ai/flux-2-flex/2026-10-26.md),
  [fal edit](../../sources/fal.ai/flux-2-flex-edit/2026-10-26.md)).
- **Replicate:** **$0.06 per input image megapixel and $0.06 per output image megapixel**
  ([Replicate](../../sources/replicate.com/flux-2-flex/2026-10-26.md)) — 20% above the other two
  hosts, on both meters.
- **Licensing:** fal badges the endpoints "Commercial use" and its catalogue records
  `license_type: "commercial"`; that is fal's statement about its own service, not BFL's terms
  ([fal catalogue](../../sources/fal.ai/flux-2-flex-catalogue/2026-10-26.md)). The BFL service
  terms that would govern first-party use were not captured for this page, and with no public
  weights there is no weights licence to check. Replicate marks the model official
  (`is_official: true`), which is a hosting relationship, not a licence statement.
- **Batch pricing:** "Batch requests multiply the base cost by the number of images" applies to
  the FLUX.2 rows on BFL's price list; no [flex]-specific batch discount is documented
  ([pricing](../../sources/bfl.ai/flux2-flex-pricing/2026-10-26.md)).

## Unresolved questions

1. Is [flex] a separately trained checkpoint, or [pro]'s weights with a different sampler? No
   first-party page says.
2. Which side of the 2026-01-29 "up to 3x faster" update do fal and Replicate serve, and did
   either host pin the pre-update behavior?
3. Does [flex] inherit [pro]'s 9 MP input+output cap, or does it have a different budget? fal says
   14 MP of input alone is allowed; BFL documents no cap for [flex].
4. Is Replicate's "14 MB total" reference budget a typo for fal's "14 MP total input", or a
   genuinely different limit?
5. Do BFL's typography-prompting tips (which the prompt reference files under "[pro] & [max]")
   apply to [flex], the model BFL markets as the typography specialist?
6. How much of [flex]'s typography advantage survives at low step counts? BFL's figure captions
   assert a trade-off between steps and typographic accuracy but publish no measurement, and no
   third-party comparison with [pro] at matched settings was captured.
7. Does [flex] understand negative prompts? Only Replicate addresses it, and only for [flex].
8. With FLUX.2 declared "previous generation", is there a retirement window for `flux-2-flex`?

## Evidence status

Everything above comes from vendor and host documentation captured on 2026-10-26. **No direct
tests have been run for this page.** Nothing here measures [flex]'s typography, step/quality
curve, identity consistency, or latency; every quality statement is either BFL's positioning or a
host's copy. The pricing arithmetic in "Access, pricing, licensing" is derived from published
per-megapixel rates and is labelled as such.

Evidence floor: met. Nine first-party records from `bfl.ai` (API reference, pricing, family
overview, release notes, launch post, prompt reference, product page, MCP reference, generation
status) plus independent host records from fal (three), Replicate (one) and Hugging Face (one).
fal and Replicate are host records, not measurements: both restate BFL's positioning, and neither
publishes a benchmark.

The next useful evidence would be a reproducible step/guidance sweep on a named endpoint and
date: the same typography-heavy prompt at 6/20/28/50 steps and guidance 3.5/5, on BFL and on one
host, scored for text accuracy and compared against [pro] at its fixed configuration.
