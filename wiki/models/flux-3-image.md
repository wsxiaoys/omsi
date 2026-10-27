# FLUX 3 Image

Black Forest Labs' image tier of FLUX 3, launched through the BFL API on **2026-10-01**
([release notes](../../sources/bfl.ai/flux3-image-release-notes/2026-10-26.md)). It generates and
edits images from one endpoint, accepts up to ten reference images, takes layout instructions as
bounding boxes embedded in the prompt, and by default researches the prompt on the web before
drawing. It has no public weights: BFL sells a commercial weights licence, and the open-weights
member of the family is the smaller [FLUX 3 Image Klein](../../sources/bfl.ai/flux3-image-klein/2026-10-26.md).

FLUX 3 itself is not an image family. BFL describes it as "our new multimodal foundation model"
trained jointly across image, video and audio on a Self-Flow architecture
([announcement, 2026-07-23](../../sources/bfl.ai/flux3-announcement/2026-10-26.md)), and its own FAQ
says "FLUX 3 Image is the part that generates and edits images"
([product page](../../sources/bfl.ai/flux3-image-model-page/2026-10-26.md)). Video shipped first
(2026-08-04), image second (2026-10-01), the open-weights Klein model third (2026-10-15).

## Identity

- Canonical name: **FLUX 3 Image**. Marketing spellings in use: "FLUX 3 Image", "Flux 3 Image"
  (fal titles), "FLUX 3 Image Edit" (fal's edit endpoint title). The slug form is `flux-3-image`.
- First-party endpoint: `POST https://api.bfl.ai/v1/flux-3-image`, authenticated with an `x-key`
  header, asynchronous via `polling_url`
  ([API reference](../../sources/bfl.ai/flux3-image-api-reference/2026-10-26.md),
  [quickstart](../../sources/bfl.ai/flux3-image-text-to-image/2026-10-26.md)). There is no separate
  edit endpoint first-party — the prompt decides generate vs edit.
- Host endpoints: fal `blackforestlabs/flux-3/text-to-image` and
  `blackforestlabs/flux-3/edit-image`, group key `flux-3-image`, proxied partner API
  ([fal](../../sources/fal.ai/flux-3-image/2026-10-26.md)); Replicate
  `black-forest-labs/flux-3-image`, created 2026-10-01T15:45Z
  ([Replicate](../../sources/replicate.com/flux-3-image/2026-10-26.md)).
- Release: 2026-10-01 first-party and on both captured hosts the same day. Inside the one-year
  window.
- Siblings: FLUX 3 Video (2026-08-04, `POST /v1/flux-3-video`), FLUX 3 Action (open weights on
  Hugging Face from 2026-09-22), FLUX 3 Image, FLUX 3 Image Klein (2026-10-15, open weights, 5.6B),
  and the planned open-weight "FLUX 3 Dev" multimodal backbone named in the launch plan but not
  found as a shipped page or weights repository at capture
  ([HF search](../../sources/huggingface.co/flux3-image-weights-search/2026-10-26.md)). The FLUX.2
  family is the prior generation; FLUX.2 [pro] has its own page at [flux-2-pro.md](./flux-2-pro.md).

### Roster label vs canonical identity

The roster row reads "FLUX 3 Image" with discovery path fal `blackforestlabs/flux-3`. That label
turns out to be BFL's own tier name, so it is canonical rather than a family placeholder — but the
discovery path is misleading in two ways:

1. `fal.ai/models/blackforestlabs/flux-3` is not a callable image endpoint. The path returns HTTP
   200 and a playground, but it is absent from fal's catalogue query and its queue OpenAPI resolves
   to `null`. The callable image endpoints are `/text-to-image` and `/edit-image`
   ([fal](../../sources/fal.ai/flux-3-image/2026-10-26.md)).
2. fal's FLUX 3 catalogue is mostly **video** (`text-to-video`, `image-to-video`, `extend-video`,
   `draft-enhance`), and its landing banner advertises "FLUX 3 Max, post-trained by fal".

### FLUX 3 Max is a video tier, not an image sibling

"FLUX 3 Max" appears in BFL's site footer and in a banner on the FLUX 3 Video page — "10-second
video in 12 seconds. 22× faster than Seedance 2.5 at the same quality. Try FLUX 3 Max on fal" — and
fal publishes `blackforestlabs/flux-3-max/text-to-video`, `/image-to-video` and
`/keyframes-to-video` (2026-10-19) with no `flux-3-max` image endpoint. `bfl.ai/models/flux-3-max`
returns 404 and the term does not appear in BFL's release notes
([product page](../../sources/bfl.ai/flux3-image-model-page/2026-10-26.md),
[fal](../../sources/fal.ai/flux-3-image/2026-10-26.md)). **Recorded ambiguity:** the roster groups
Image / Max / [klein] as if they were three image tiers. On captured evidence, Max is a video tier
and [klein] is the open-weights image sibling; no FLUX 3 Max image model was found. If one exists
behind a partner not captured here, this page's scope needs revisiting.

## Current assessment

FLUX 3 Image is a **distinct tier with its own endpoint, price ladder and capability surface**, not
a repackaging of FLUX.2 [pro]. Four things separate it:

- **Native high resolution.** Output to ~16.8 MP (`4k` tier) and explicit `width`/`height` up to
  6256 px per side, against FLUX.2's ~4 MP ceiling
  ([API reference](../../sources/bfl.ai/flux3-image-api-reference/2026-10-26.md),
  [FLUX.2 [pro]](./flux-2-pro.md)).
- **Grounded generation on by default.** `grounding: true` is the default and runs "web search and
  image search" before generation; FLUX.2 [pro] has no grounding at all — it is a [max] feature.
- **Layout as a first-class input.** A JSON element table appended to the prompt places each
  element in a `[top, left, bottom, right]` box on a 0–1000 grid, and the same boxes target edits.
  BFL states the upsampler passes boxes through "verbatim, with the same id and the same
  coordinates" ([overview](../../sources/bfl.ai/flux3-image-overview/2026-10-26.md),
  [product page](../../sources/bfl.ai/flux3-image-model-page/2026-10-26.md)).
- **Price.** $0.048 per 1K image first-party vs FLUX.2 [pro]'s $0.03, and $0.607 at 4K.

It is also **less controllable in the ordinary sense**: no `seed`, no steps, no guidance, no
negative prompt, and unknown fields are rejected with 422. Reproducibility is a regression against
FLUX.2 [pro], which at least exposes a seed. The intended control surface is spatial, not sampling.

Relative to FLUX.2, BFL has not declared a succession. Its FLUX.2 guide still calls FLUX.2 "the
recommended model for text-to-image generation" as of 2026-10-26, 25 days after FLUX 3 Image
shipped, and the whole FLUX.2 family is still priced and served
([FLUX.2 text-to-image](../../sources/bfl.ai/flux2-text-to-image/2026-10-26.md),
[FLUX.2 pricing](../../sources/bfl.ai/flux2-pricing/2026-10-26.md)). The evidence supports "FLUX 3
Image sits above [pro] on price and resolution and adds grounding", not "[pro] is superseded". No
source captured here compares their output quality.

## Documented capabilities

All of the following is vendor or host documentation. **No direct tests were run.**

- **One endpoint, no mode field.** "There is no `mode` field"; adding `images` switches to editing,
  and 2–10 references make it a multi-reference composition
  ([quickstart](../../sources/bfl.ai/flux3-image-text-to-image/2026-10-26.md)).
- **Reference images: 1–10.** First-party: each ≥256×256, ≤16 MP; larger inputs rejected with 400.
  fal instead downscales inputs to 4 MP; Replicate documents the same 16 MP ceiling as BFL.
- **Resolution tiers:** `768sq`, `1k` (default), `1.5k`, `2k`, `4k`, plus `match_input` for edits.
  Tiers are equal-pixel-area, so exact dimensions vary with the aspect ratio; `4k` is "about 16
  megapixels".
- **15 aspect ratios** (`21:9` … `9:21`) plus `auto`, which prefers a ratio the prompt asks for,
  then the first reference's framing, then 1:1. fal omits `9:21`.
- **Bounding-box layout and box-targeted edits**, including per-element re-description,
  replacement, move, resize and removal, several in one request
  ([overview](../../sources/bfl.ai/flux3-image-overview/2026-10-26.md)).
- **Grounding on by default** — web and image search, disabled with `grounding: false`
  ([overview](../../sources/bfl.ai/flux3-image-overview/2026-10-26.md),
  [API reference](../../sources/bfl.ai/flux3-image-api-reference/2026-10-26.md)). The polling
  contract includes a `Reasoning` state between `Pending` and `Generating`, consistent with a
  research step before rendering.
- **Prompt upsampling, always on first-party.** `result.prompt` returns "the expanded prompt the
  model used". fal exposes `enable_prompt_expansion` instead, default `false`.
- **Hex colours and quoted text**, with fal's guidance to pair a hex code with a colour name.
- **Output format:** fal `jpeg`/`png`; Replicate `webp`/`jpg`/`png` plus `output_quality`. BFL's
  schema documents no format field.
- **Architecture:** Self-Flow multimodal flow matching, one model trained across image, video and
  audio ([announcement](../../sources/bfl.ai/flux3-announcement/2026-10-26.md)). BFL publishes no
  parameter count for FLUX 3 Image; the open sibling Klein is 5.6B.

### Vendor and host claims, kept separate

These are marketing or host copy, not findings:

- BFL: "maximum control over every pixel"; "Text-to-image with strong prompt following and a
  native understanding of composition"; "Designed for agents"
  ([product page](../../sources/bfl.ai/flux3-image-model-page/2026-10-26.md)).
- BFL, pre-release: "a significant improvement over earlier versions of FLUX: its ability to
  handle complex prompts and text generation has improved significantly", from "preliminary
  evaluations conducted during midtraining" — no numbers, no benchmark, and explicitly not the
  shipped model ([announcement](../../sources/bfl.ai/flux3-announcement/2026-10-26.md)).
- fal: "Black Forest Labs' newest image model"; "native 2K and 4K with precise layout control and
  improved text rendering" ([fal](../../sources/fal.ai/flux-3-image/2026-10-26.md)).
- Replicate: 116.6K runs at capture — a usage count, not a quality signal.

## Limitations and constraints

- **No reproducibility control.** No `seed` in the first-party schema, and unknown fields are
  rejected (`additionalProperties: false`), so a request cannot be replayed bit-for-bit. Klein, by
  contrast, documents steps and CFG.
- **No sampling controls.** No steps, guidance, or negative-prompt field anywhere in the captured
  schemas. fal's guidance is to write what you want, not what you don't.
- **Hard size limits.** Output `width × height` ≤ 16,822,272 px, and ≤ 4,194,304 px whenever
  reference images are present; each side ≤ 6256 px. Reference images must be ≥256×256 and (on the
  BFL API) ≤16 MP.
- **No dated snapshot.** `version` is the constant `latest`; BFL says "dated pinnable release tags
  are added here as they are published", so at capture there is no frozen revision to pin. All
  three captured routes serve a moving target.
- **Moderation is gated by account.** `safety_tolerance` is 0–7 first-party with "the route and
  organization determine the approved maximum"; unapproved levels return 422. fal and Replicate
  both cap it at 4. A refusal on one platform is therefore not evidence about another.
- **Two-stage moderation outcomes** are observable first-party: `Request Moderated` (prompt or
  input image blocked) and `Content Moderated` (generated image blocked). Retrying unchanged fails
  again.
- **Output URLs expire.** `result.sample` is a signed URL valid for 1 hour.
- **No public weights.** Hosted-only unless a commercial weights licence is negotiated
  ([product page](../../sources/bfl.ai/flux3-image-model-page/2026-10-26.md),
  [HF search](../../sources/huggingface.co/flux3-image-weights-search/2026-10-26.md)).
- **Host gaps.** fal exposes neither `grounding` nor `width`/`height` nor `match_input`, omits the
  `9:21` ratio, and downscales reference images to 4 MP. A workflow that depends on any of those
  cannot be moved to fal unchanged.
- **Documentation contradiction.** BFL's quickstart says `seed`, `width` and `input_image` "don't
  work here", while its own API reference schema lists `width` and `height` as accepted fields.
  Unresolved; the schema is the more specific document but no request was made to settle it.

## Access, pricing, licensing

Per-image pricing, by `resolution`:

| tier | BFL first-party | fal | Replicate |
| --- | --- | --- | --- |
| `768sq` | $0.041 | not itemised | $0.0205 |
| `1k` | $0.048 | $0.048 (stated as "1K (1 MP)") | $0.024 |
| `1.5k` | $0.07 | not itemised | $0.035 |
| `2k` | $0.100 | not itemised | $0.05 |
| `4k` | $0.607 | not itemised | $0.3035 |

Sources: [pricing page](../../sources/bfl.ai/flux3-image-pricing/2026-10-26.md) (BFL ladder,
including the 1.5K tier the release notes omit), [fal](../../sources/fal.ai/flux-3-image/2026-10-26.md),
[Replicate](../../sources/replicate.com/flux-3-image/2026-10-26.md).

- **BFL bills credits** (1 credit = $0.01) and returns the settled `cost` on each submission; the
  same price applies to API and Playground, and a 4K image is 60.7 credits
  ([pricing page](../../sources/bfl.ai/flux3-image-pricing/2026-10-26.md)).
- **The ladder is not linear.** 4K costs 12.6× the 1K price for ~16× the pixels, while the 1.5K and
  2K tiers cost 1.5× and 2.1× the 1K price for 2× and 4× the pixels. The 2K → 4K step is by far the
  most expensive per added megapixel.
- **Host prices disagree, and the gap is unexplained.** Replicate is almost exactly half BFL's
  price at every tier. fal states a billing unit of *megapixels* at $0.048 while also promising
  "one flat price per image, set by resolution"; if the unit is linear a fal 4K image would cost
  ~$0.77, against BFL's $0.607. Treat all cross-host comparisons as unverified — see Unresolved
  questions.
- **Reference images and grounding are not documented as price inputs.** BFL's response reports
  `input_mp` and `output_mp`, which implies metering, but no page states whether extra references or
  a grounded search change the per-image price. fal's edit page claims "one flat price per image,
  whatever the number of references".
- **Licensing.** Output use through a host is the host's claim (fal marks the endpoints
  "Commercial use"); it is not a statement about weights. FLUX 3 Image weights are available "under
  a commercial weights license for companies running image generation at scale" by contacting BFL.
  The open weights are Klein's, under the FLUX Kommunity License, which does **not** cover FLUX 3
  Image.

## Unresolved questions

1. **What does fal actually charge at each tier?** Its page gives one figure ($0.048 at 1K) with a
   megapixel billing unit and no table, and BFL's own ladder is non-linear. The two readings differ
   by ~$0.16 on a 4K image.
2. **Why is Replicate ~50% cheaper than the developer's list price**, and which revision does it
   serve? Cheaper could mean a different quality tier, a subsidy, or a reseller arrangement. No
   output comparison was run.
3. **Which model revision is behind `latest`?** No dated tags existed at capture, so claims about
   "FLUX 3 Image" behaviour are only valid for the capture date.
4. **What does grounding actually do?** No captured document says which sources it searches,
   whether results are cited in the output, how it affects latency or `cost`, or what happens when
   the prompt references something unsearchable. The only illustration is a vendor before/after pair
   of Oktoberfest posters.
5. **How reliable are bounding boxes in practice?** "Every box reaches the model verbatim" is a
   claim about the upsampler, not about pixel-accurate adherence. No measurement exists here.
6. **How does it compare with FLUX.2 [max] and [flex] on quality, typography and edit consistency?**
   BFL positions [flex] as the typography specialist and [max] as highest quality; FLUX 3 Image is
   newer and more expensive than both at 1K. No captured source ranks them.
7. **Does a FLUX 3 Max image model exist?** See the identity section: no first-party page, no
   release note, no fal image endpoint. Recorded as unresolved rather than assumed either way.
8. **Is FLUX 3 Image superseding FLUX.2, or sold alongside it?** BFL's docs still recommend FLUX.2
   for text-to-image while marketing FLUX 3 Image as newest and most controllable.

## Evidence status

Evidence floor: **met.** One first-party publisher (BFL: release notes, overview, quickstart, API
reference, product page, pricing page, announcement, Klein docs — eight FLUX 3 records, plus one
FLUX.2 record used only for the supersession check) and two independent host records (fal,
Replicate), plus one weights-index check (Hugging Face).

**No direct tests were run for this page.** Every capability claim above is documentation; every
price is a published list price captured on 2026-10-26 and not a billed invoice. The two host pages
restate vendor copy and add their own parameter surfaces and prices — they are host records, not
measurements.

The next useful evidence would be a small reproducible set run against a named endpoint and date:
bounding-box adherence against a fixed layout, 4K text legibility, multi-reference identity
retention across ten images, box-targeted edit bleed, and grounding accuracy on a prompt whose
answer changes over time. A pricing reconciliation against a real fal and Replicate invoice would
settle question 1 and 2 cheaply.
