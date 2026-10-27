# Krea 3

Krea's own instruction-following image model, released 2026-10-15 and made the default image model
in Krea's app. It generates from text and edits from plain-language instructions at native 2K, with a
three-level `thinking_mode` control that trades planning and candidate selection for latency and
price ([launch post](../../sources/krea.ai/krea-3-launch/2026-10-26.md),
[API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md),
[user guide](../../sources/krea.ai/krea-3-user-guide/2026-10-26.md)). Krea serves it through its own
API, and partners including fal and Replicate host it; no public weights, architecture details,
parameter counts, or technical report were found at capture
([AA record](../../sources/artificialanalysis.ai/krea-3/2026-10-26.md)).

## Identity

- Canonical name: **Krea 3**.
- First-party endpoint: `POST https://api.krea.ai/generate/image/krea/krea-3`; SDK/MCP model ID
  `image/krea/krea-3` ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)).
- Host endpoints: `krea/v3/edit`, `krea/v3/text-to-image`, and `krea/v3/realtime` on fal
  ([fal record](../../sources/fal.ai/krea-3/2026-10-26.md)); `krea/krea-3` on Replicate
  ([Replicate record](../../sources/replicate.com/krea-3/2026-10-26.md)).
- Aliases and labels: "Krea 3 Edit" is fal's endpoint title. "Krea 3 (Ultra)" and "Krea 3 (Fast)"
  are Artificial Analysis's row labels; "Krea 3 (Ultra Thinking)" is Design Arena's label. All are
  **mode** labels, not separate models. "Berry" and "Jam" are host-exposed variants (see below).
- Release date: **2026-10-15**. Krea's launch post is dated that day and says "Today we're releasing
  Krea 3" ([launch](../../sources/krea.ai/krea-3-launch/2026-10-26.md)); Replicate's model
  `created_at` is 2026-10-15T18:15:17Z ([Replicate](../../sources/replicate.com/krea-3/2026-10-26.md));
  fal's first `publishedAt` is 2026-10-15T15:51Z ([fal](../../sources/fal.ai/krea-3/2026-10-26.md));
  Artificial Analysis records `releaseDate: 2026-10-15`
  ([AA](../../sources/artificialanalysis.ai/krea-3/2026-10-26.md)). The API itself was a gated beta
  on launch day and came out of beta on 2026-10-20
  ([changelog](../../sources/krea.ai/krea-3-changelog/2026-10-26.md)).
- Siblings: Krea 2 (Medium, Large, Turbo) and Krea 1
  ([user guide](../../sources/krea.ai/krea-3-user-guide/2026-10-26.md)). FLUX.1 Krea [dev] is a
  separate Black Forest Labs model family co-branded with Krea, dated 2025-07-30 in fal's catalogue,
  not a Krea 3 checkpoint ([fal](../../sources/fal.ai/krea-3/2026-10-26.md)). Krea 3 does not
  inherit Krea 2's weighted style references, moodboards, LoRAs, or Generative Sliders.
- Ownership: Krea's docs put Krea 3 in the "Krea models are developed and maintained by Krea" table
  and list Google, ByteDance, and Recraft models in a separate third-party table
  ([user guide](../../sources/krea.ai/krea-3-user-guide/2026-10-26.md)). Krea's app also resells
  third-party models, so "available on Krea" alone would not establish ownership; the docs
  classification and the launch post's "our new image editing model" do. fal's catalogue records
  `modelLab: "Krea"` and `hostingType: "serverless"`, meaning fal runs the model rather than
  forwarding to Krea's API ([fal](../../sources/fal.ai/krea-3/2026-10-26.md)). Krea 3 is therefore a
  first-party Krea model that third parties host, not a third-party model Krea resells.

### Variant and version ambiguity

- **Berry vs Jam.** fal's schema exposes `model: "berry" | "jam"`, default `berry`, described as
  "berry favors quality, jam favors speed" ([fal](../../sources/fal.ai/krea-3/2026-10-26.md)).
  Replicate says "This is the Berry version of Krea 3, which is tuned for image quality. A faster
  version called Jam is coming from Krea"
  ([Replicate](../../sources/replicate.com/krea-3/2026-10-26.md)). Krea's own docs never use either
  name. Whether Berry and Jam are separate checkpoints, whether Krea's first-party endpoint serves
  Berry by default, and whether Jam is generally available are all unresolved.
- **Thinking-mode names changed.** The modes were originally `instant`/`medium`/`max` and were
  renamed to `fast`/`high`/`ultra` around launch; the legacy values sunset on 2026-10-30
  ([changelog](../../sources/krea.ai/krea-3-changelog/2026-10-26.md)). Records written before that
  change may use the old names.
- **API status changed.** Launch-day docs say the API was "open to workspaces in the Krea 3 beta";
  the 2026-10-20 changelog says "Krea 3 out of beta"; current docs say it "is available to every
  workspace" ([changelog](../../sources/krea.ai/krea-3-changelog/2026-10-26.md),
  [API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)). The page treats this as a
  transition rather than a contradiction.
- **"Krea 3 Realtime"** is a fal endpoint dated 2026-10-14, while Krea's launch post says "Krea 3
  isn't real time yet" ([fal](../../sources/fal.ai/krea-3/2026-10-26.md),
  [launch](../../sources/krea.ai/krea-3-launch/2026-10-26.md)). Whether it is the same model in a
  session wrapper or a different build is not documented.

## Current assessment

Independent blind-vote leaderboards put Krea 3 Ultra in the top group, not at the top. On
Artificial Analysis's AA-Image-Editing v2.1, read 2026-10-26, Ultra displays **#4** (rank range 3–6)
at 1151 Elo on 5,505 samples, statistically tied with MAI-Image-2.6 and Nano Banana 2.1; it trails
GPT Image 2.5 Sunburst (max) by about 48 Elo and Flare (max) by about 31. The Fast mode displays
**#11** at 1126 Elo on 5,203 samples
([AA](../../sources/artificialanalysis.ai/krea-3/2026-10-26.md)). Krea's own 2026-10-20 summary of
the Arena and Design Arena boards puts Ultra at #4 on Arena's Multi-Image Edit board (preliminary,
2,991 votes), #8 on Arena's single-image board, and #4 of 51 on Design Arena; those figures are
Krea's transcription of the third-party boards, not directly captured here
([benchmark post](../../sources/krea.ai/krea-3-benchmarks/2026-10-26.md)).

The same summary gives a useful split by task. On AA's categories, Ultra is strongest in Animation &
Gaming (#2), Frontier (#2), Composition & Framing (#3), and Reasoning-Based Edit (#4), and weakest in
Scene & Style Edit (#18), Live-Action Film (#10), and Enhancement & Restoration (#8). Krea itself
concludes that "if the job is a cinematic relight of a photograph, this board does not put Ultra at
the front" ([benchmark post](../../sources/krea.ai/krea-3-benchmarks/2026-10-26.md)).

Read together, the evidence supports a narrow claim: Krea 3 is a fast editor that is competitive on
reference-driven composition, product and character consistency, and instructions that require an
inference about the scene. It is not the board leader on relighting or restyling, and the launch
post's broader quality and style language is vendor framing. The "<8 seconds at 2K" latency and the
"photoreal, editorial, on-brand" positioning are Krea's own statements; no independent latency
measurement was captured ([launch](../../sources/krea.ai/krea-3-launch/2026-10-26.md),
[model page](../../sources/krea.ai/krea-3-model-page/2026-10-26.md)).

Price is the other half of the pitch. Krea's own API charges $0.06 for a 2K fast image and adds
$0.20 for ultra, so a 2K ultra edit starts at $0.26 before its required reference
([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)).
That is low against the frontier editors in Krea's comparison table, but "Krea 3 costs $0.06" is only
true first-party, at 2K, in fast mode, with no references. Host schedules and defaults differ; see
**Access, pricing, licensing** below.

## Documented capabilities

All of the following are vendor or host documentation, not independent tests.

- **Text-to-image and instruction editing in one endpoint.** The same
  `POST /generate/image/krea/krea-3` accepts a prompt with or without input images; omit
  `image_urls` for text-to-image ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)).
- **Multi-reference input.** Up to 8 references via the API, and "up to 8" on both hosts
  ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md),
  [fal](../../sources/fal.ai/krea-3/2026-10-26.md),
  [Replicate](../../sources/replicate.com/krea-3/2026-10-26.md)). **Conflicting figure:** the launch
  post and its FAQ say "up to 6 reference images per edit"
  ([launch](../../sources/krea.ai/krea-3-launch/2026-10-26.md)). The 8 figure also appears in Krea's
  own 2026-10-15 changelog and in both host schemas, so 8 is probably the current cap, but Krea has
  not published a correction.
- **1K or 2K output.** `resolution` is `1K` or `2K`, default 1K; ten aspect ratios from 1:1 to 21:9;
  `width`/`height` up to 4096 each, with output rounded to the nearest supported aspect ratio and
  canvas ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)). fal caps output
  at 4,220,160 pixels (1680×2512) and describes `auto` as "about 2048×2048"
  ([fal](../../sources/fal.ai/krea-3/2026-10-26.md)). The exact pixel dimensions of Krea's own
  1K/2K canvases are not published.
- **Thinking modes.** A three-level `thinking_mode` control, described below.
- **Regional edits and bounding boxes.** `regional_edit: true` regenerates only the changed region;
  `regions` accepts up to 24 bounding boxes with optional per-box notes, referenced as `@label`
  ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)). Bounding boxes
  originally required `high`, then were allowed with `ultra` as of 2026-10-24
  ([changelog](../../sources/krea.ai/krea-3-changelog/2026-10-26.md)).
- **Negative prompt.** Up to 1,024 characters on the first-party API; fal says it is "used by berry
  only"; Replicate exposes it without a variant caveat
  ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md),
  [fal](../../sources/fal.ai/krea-3/2026-10-26.md),
  [Replicate](../../sources/replicate.com/krea-3/2026-10-26.md)).
- **Seed.** Available, but not a reproducibility guarantee: "Reusing a seed does not guarantee
  identical results, because the prompt expansion step can vary between runs"
  ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)).
- **Priority.** `low`/`normal`/`high`; `high` currently queues the same as `normal`
  ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)).
- **Zero Data Retention.** Enterprise workspaces can send `X-Api-Zero-Data-Retention: 1`; references
  must be base64 data URIs, `ultra` with images returns 422, and up to 8 references are allowed
  ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)). The launch-day
  changelog said 4 references under ZDR, so the cap changed or the entry was wrong
  ([changelog](../../sources/krea.ai/krea-3-changelog/2026-10-26.md)).

### Thinking modes

Krea's developer docs are the substantive documentation. "Before it generates, Krea 3 interprets your
prompt. `thinking_mode` sets how much planning it does"
([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)).

| Mode | What changes | Price on top of base | Availability |
| --- | --- | --- | --- |
| `fast` (default) | "Krea quickly expands the prompt, then generates. Fastest." | none | Every workspace |
| `high` | "Krea uses a stronger reasoning engine to plan more complex edits from the prompt and the reference images, then generates. Slower." | +$0.02 per generation | Every workspace |
| `ultra` | "Krea generates several candidates, reviews them against your prompt and references, and returns the best one. Always 2K. Slowest: a job can take several minutes." | +$0.20 per generation at 2K | Max plan or above; requires at least one image; no `negative_prompt`, `loras`, `style_urls`, or ZDR; up to ~10 minutes (~16 with `priority: "low"`) |

The docs also say a text-only `ultra` request "runs as `fast` and is billed as `fast`", which sits
oddly with the "include at least one image" requirement; the practical reading is that `ultra`
silently downgrades rather than erroring.

So the mode changes two different things: `fast` is prompt expansion only, `high` adds a planning
pass by a "stronger reasoning engine", and `ultra` adds best-of-N candidate generation plus a review
step. That is documented beyond marketing: the docs give the mechanism, the price increment, the
access tier, and the parameter restrictions. What is **not** documented is the reasoning engine
itself. No model card names it, no technical report describes it, and no first-party measurement
isolates the quality delta between modes. The only independent mode comparison captured is
Artificial Analysis's Ultra vs Fast rows, which put Ultra about 25 Elo and seven ranks above Fast;
`high` is not rated on that board
([AA](../../sources/artificialanalysis.ai/krea-3/2026-10-26.md)).

Two further cautions. The mode names changed from `instant`/`medium`/`max` and the old values stop
working on 2026-10-30
([changelog](../../sources/krea.ai/krea-3-changelog/2026-10-26.md)). And the hosts do not expose the
same set: Replicate has only `fast` and `high`; fal's edit endpoint has `low`/`medium`/`high`/`ultra`
with its own descriptions and prices, while fal's text-to-image endpoint has only `low` and `medium`
([Replicate](../../sources/replicate.com/krea-3/2026-10-26.md),
[fal](../../sources/fal.ai/krea-3/2026-10-26.md)). fal's mapping from its four `reasoning_level`
values to Krea's three `thinking_mode` values is undocumented, and fal's `high` description claims
segmentation, web search, reference photos, and text correction that Krea's docs do not mention.

### Consistency and style claims (vendor)

Krea claims product, character, logo, and text consistency under editing, and illustrates it with
product swaps, a four-character reference set, and a line-drawing-to-render example
([launch](../../sources/krea.ai/krea-3-launch/2026-10-26.md),
[user guide](../../sources/krea.ai/krea-3-user-guide/2026-10-26.md)). The model page adds
"photoreal, editorial, on-brand" and "commercial-ready quality"
([model page](../../sources/krea.ai/krea-3-model-page/2026-10-26.md)).

The style claim is specifically that Krea 3 "has Krea 2's eye for style, so it works on paintings,
vector art and ink drawings and keeps them in their own medium"
([launch](../../sources/krea.ai/krea-3-launch/2026-10-26.md)). Treat this as a vendor claim. The
closest independent signal is AA's category table, where Animation & Gaming (game assets, concept
art, character design, comics) is Ultra's strongest use case at #2, but Scene & Style Edit
(relighting, restyling, background/treatment) is its weakest at #18
([benchmark post](../../sources/krea.ai/krea-3-benchmarks/2026-10-26.md)). Those are editing
categories, not a from-scratch illustration test, so they neither confirm nor refute the claim; they
do show that "style" in the independent data is not uniformly strong.

## Limitations and constraints

- **No style references or LoRAs.** Krea 3 "does not yet support the Krea 2 API's style-reference or
  LoRA controls"; the API returns "Style references are coming soon" and "LoRAs are coming soon"
  ([user guide](../../sources/krea.ai/krea-3-user-guide/2026-10-26.md),
  [API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)). **Contradiction:** the
  model page advertises "image references, weighted styles, and precise edits", and the launch post
  says "you can also add style references"
  ([model page](../../sources/krea.ai/krea-3-model-page/2026-10-26.md),
  [launch](../../sources/krea.ai/krea-3-launch/2026-10-26.md)). The developer docs are the more
  specific and operational source, but Krea has not reconciled the marketing copy.
- **Reference resolution caps.** A reference larger than 4 MP is resized to 4 MP; with five or more
  references, each is resized to at most 1536 px on its longest side
  ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)). Replicate repeats the
  4 MP resize and advises around 1 MP per input
  ([Replicate](../../sources/replicate.com/krea-3/2026-10-26.md)).
- **Ultra is expensive and constrained.** It requires an image, is Max-plan-only, always 2K, forbids
  `negative_prompt`/`loras`/`style_urls`, is unavailable under ZDR with images, and can take ~10
  minutes (~16 at low priority) ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md)).
- **Seeds are not reproducible** because prompt expansion varies between runs
  ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md),
  [Replicate](../../sources/replicate.com/krea-3/2026-10-26.md)).
- **Regional edits are described inconsistently.** Krea says the rest of the image "stays exactly as
  it was" and that chained edits have no quality loss; Replicate calls the feature "experimental"
  and warns "quality may be lower and generation slower than a regular edit"
  ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md),
  [Replicate](../../sources/replicate.com/krea-3/2026-10-26.md)). Krea's launch-day changelog
  markets it as the safe way to chain edits
  ([changelog](../../sources/krea.ai/krea-3-changelog/2026-10-26.md)).
- **Endpoint defaults differ.** Krea's API defaults to 1K; Replicate defaults to 2K; fal's `auto` is
  "about 2048×2048" ([API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md),
  [Replicate](../../sources/replicate.com/krea-3/2026-10-26.md),
  [fal](../../sources/fal.ai/krea-3/2026-10-26.md)). A request that does not set resolution can
  therefore cost different amounts on different routes.
- **No public weights, architecture, or technical report.** AA records `openWeightsUrl: null`
  ([AA](../../sources/artificialanalysis.ai/krea-3/2026-10-26.md)), and no architecture, parameter
  count, or Krea 3 technical report appears in the captured documentation.
- **No first-party moderation documentation** was captured. fal exposes a safety checker that can be
  disabled only with account authorization; Replicate does not state its filter behavior
  ([fal](../../sources/fal.ai/krea-3/2026-10-26.md),
  [Replicate](../../sources/replicate.com/krea-3/2026-10-26.md)). A refusal on one route is not
  evidence about the model's general willingness.
- **The latency and competitor comparisons are not controlled benchmarks.** The "<8 s" and the
  33 s/90 s competitor figures are medians from edit jobs on Krea's own platform between 2026-09-24
  and 2026-10-01, queue included; the prices are list prices without references
  ([launch](../../sources/krea.ai/krea-3-launch/2026-10-26.md)). They measure Krea's serving stack,
  not each model on its native provider.

## Access, pricing, licensing

### First-party (Krea API)

| Pricing component | 1K output | 2K output |
| --- | --- | --- |
| Base price | $0.03 | $0.06 |
| Each 1K reference image | +$0.02 | +$0.02 |
| Each 2K reference image | +$0.07 | +$0.07 |
| `high` thinking mode | +$0.02 per generation | +$0.02 per generation |
| `ultra` thinking mode | Not available | +$0.20 per generation |

Source: [API overview](../../sources/krea.ai/krea-3-api-overview/2026-10-26.md). This is a per-output-
tier schedule plus a per-reference charge based on the reference's 1K/2K class, not a per-input-
megapixel rate.

### fal

$0.025 per megapixel, "counting the output image plus each reference image as the model processes it
(references larger than the output are counted at the output's size). 1 MP = 1024×1024 pixels"
([fal](../../sources/fal.ai/krea-3/2026-10-26.md)). fal's edit endpoint adds a flat $0.125 (5 MP) for
`high`, and prices `ultra` by reference count: $0.27 for 1, $0.30 for 2, $0.32 for 3, $0.35 for 4,
plus $0.0275 per reference past 4.

### Replicate

| Output | Fast thinking | High thinking |
| --- | --- | --- |
| 1K | $0.03 | $0.05 |
| 2K | $0.06 | $0.08 |

Plus "$0.02 per megapixel" for input images
([Replicate](../../sources/replicate.com/krea-3/2026-10-26.md)). Replicate defaults to 2K and has no
`ultra`.

### Cost comparison needs a resolution assumption

The schedules are not directly comparable because Krea charges by output tier and reference class,
while fal and Replicate charge by megapixel. At the assumption that Krea's "2K" is a **2048×2048
canvas (4,194,304 px ≈ 4.19 MP)**, which is how fal describes its `auto` output:

| Scenario | Krea direct | fal ($0.025/MP) | Replicate |
| --- | --- | --- | --- |
| 2K output, no references, fast | $0.06 | ≈ $0.105 | $0.06 |
| 2K output + one 2K reference, fast | $0.13 | ≈ $0.21 | ≈ $0.144 |
| 2K output, no references, high | $0.08 | ≈ $0.23 | $0.08 |
| 2K output + one 2K reference, ultra | $0.33 | $0.27 flat | not offered |

These are arithmetic from published schedules, not quotes, and they move with the canvas. The fal
`ultra` row uses fal's flat one-reference price, which appears to replace the per-megapixel charge;
that makes fal cheaper than Krea's $0.33 arithmetic for an ultra request with a 2K reference, even
though fal's per-megapixel fast rate is higher. If "2K" instead means a 2048-pixel long side at 16:9
(2048×1152 ≈ 2.36 MP), fal's no-reference 2K fast cost falls to ≈ $0.059, close to Krea's $0.06.
**The exact pixel dimensions of Krea's 1K/2K canvases are not published**, so a host-vs-first-party
cost comparison cannot be settled from the captured evidence. The robust statements are that at a
4.19 MP 2K canvas, Krea's first-party fast price ($0.06) ties Replicate for the cheapest documented
no-reference 2K fast image, and that reference-heavy or ultra work changes the ranking.

Krea's launch comparison ($0.06 vs $0.135 for Nano Banana Pro and $0.22 for GPT Image 2) is "list
price per image, without image references" and does not state the competitors' resolution settings
([launch](../../sources/krea.ai/krea-3-launch/2026-10-26.md)). Artificial Analysis's price column
shows $0.27/image for Ultra and $0.07 for Fast, which does not match Krea's published 2K base prices
($0.06 fast; $0.26 ultra before the required reference); do not use AA's price column as a cost
source without checking
([AA](../../sources/artificialanalysis.ai/krea-3/2026-10-26.md)).

### Licensing

- Krea's model-page FAQ says: "On Krea paid plans, generated images include commercial licensing for
  campaigns, products, and client deliverables", and the plan cards list "Commercial license" from
  the Basic tier upward ([model page](../../sources/krea.ai/krea-3-model-page/2026-10-26.md)). This
  is marketing FAQ text, not a licence document; the API terms were not captured.
- There are no public Krea 3 weights or checkpoints
  ([AA](../../sources/artificialanalysis.ai/krea-3/2026-10-26.md)); no checkpoint download or
  open-weights licence for Krea 3 was found in the captured documentation.
- fal's "Commercial use" badge and `licenseType: "commercial"` are fal's statements about use through
  fal, not a Krea licence statement ([fal](../../sources/fal.ai/krea-3/2026-10-26.md)). The same
  caution applies to Replicate.

## Unresolved questions

1. **Berry vs Jam.** Are these official Krea 3 checkpoints or host labels? Does the first-party API
   serve Berry by default? Replicate says Jam is "coming", fal already exposes it, and Krea's docs
   never name either.
2. **What is the "stronger reasoning engine" in `high`?** Same weights with a planning loop, a
   separate model, or a tool-using pass? No technical report or model card was found.
3. **Does `high` improve output quality?** Artificial Analysis rates Ultra and Fast only; `high` is
   unmeasured, and no first-party quality delta is published.
4. **Is the reference cap 6 or 8?** The launch post says 6; the API docs and both hosts say 8. No
   correction was published.
5. **Are style references supported?** The model page and launch post say yes; the developer docs say
   "coming soon" and "does not yet support".
6. **What are the actual 1K/2K pixel dimensions,** and how do they map to fal's per-megapixel price?
7. **Which Krea 3 build do fal and Replicate serve,** and how often is it refreshed? fal's catalogue
   has an `updated_at` but no revision field; Replicate exposes no update date.
8. **Is fal's "Krea 3 Realtime" the same model?** Krea says Krea 3 is not real time yet; fal sells a
   session endpoint that resizes frames to 768×768.
9. **Does the <8 s latency hold outside Krea's platform?** No independent latency measurement was
   captured; the launch figures are Krea-platform medians with queue time included.
10. **What moderation applies first-party?** The API docs do not describe a safety filter; fal
    exposes one, Replicate does not state its behavior.
11. **Arena and Design Arena ranks are second-hand.** Their pages could not be captured (arena.ai
    returned 403; the Design Arena board path was not found), so those ranks rest on Krea's
    transcription and on the third-party posts Krea quotes.

## Evidence status

Evidence floor: **met.** Six first-party records from krea.ai (launch post, benchmark post, API
overview, user guide, model page, changelog), two independent host records (fal catalogue and
schemas; Replicate model page), and one independent benchmark capture (Artificial Analysis
AA-Image-Editing v2.1). All were captured on 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this
knowledge base. The capability and consistency claims are Krea's or its hosts'; the quality ranks are
third-party blind-vote leaderboards, with the Arena and Design Arena figures mediated by Krea's
write-up. The vendor's "<8 seconds", "photoreal, editorial, on-brand", and "Krea 2's eye for style"
claims are recorded as claims, not findings. The next useful evidence would be a small reproducible
test set run against named endpoints: 2K no-reference and reference edits at each thinking mode,
product-label and character-identity preservation, regional-edit chaining, relight/restyle prompts
(the weakest AA category), and measured wall-clock latency with and without queueing.
