# Wan 3.0 Prime

Wan 3.0 Prime is Alibaba's **speed-optimised serving tier of Wan 3.0**, not a separate model. The
vendor's model ID is `wan3.0-video-prime`, released on Alibaba Cloud Model Studio on 2026-08-20, two
weeks after the standard `wan3.0-video` (2026-08-06)
([release rows](../../sources/alibabacloud.com/wan3-0-release-dates/2026-10-26.md)). It has the same
modalities, the same task set, the same 2–30 second / 30 fps / 480P–1080P envelope, and — on both
independent hosts — an identical request schema to the standard tier (same fields, enums, defaults and
constraints). What differs is that the vendor describes it as faster and prices it **higher** per
second of output.

It is inside the roster's one-year window: 2026-08-20 is after 2025-10-26.

## Identity

- **Canonical name:** Wan 3.0 Prime. Vendor ID `wan3.0-video-prime`; the vendor's own page title is
  the lowercase model ID ([model page](../../sources/alibabacloud.com/wan3-0-video-prime-model-page/2026-10-26.md)).
- **Vendor:** Alibaba, in the Wan video family (the same line as Wan 2.1 through Wan 2.7), served
  first-party through Alibaba Cloud Model Studio.
- **Aliases:** "Wan3.0-Video-Prime" (Model Studio prose), "Wan 3.0 Prime" (fal and WaveSpeedAI
  catalogue titles), "the speed-optimized version" (Model Studio's selection guide).
- **Host endpoints:** fal `alibaba/wan-3.0-prime/{text-to-video,image-to-video,reference-to-video}`
  ([fal catalogue](../../sources/fal.ai/wan-3.0-prime-catalogue/2026-10-26/index.md)); WaveSpeedAI
  `alibaba/wan-3.0-prime/{text-to-video,image-to-video,reference-to-video}`
  ([WaveSpeed catalogue](../../sources/wavespeed.ai/wan-3.0-prime-catalogue/2026-10-26/index.md)).
- **Roster label is a group, not an endpoint.** The row lists `alibaba/wan-3.0-prime`, which is fal's
  path prefix for three separate endpoints; there is no callable endpoint at that string
  ([fal catalogue](../../sources/fal.ai/wan-3.0-prime-catalogue/2026-10-26/index.md)).
- **Siblings:** `wan3.0-video` (the standard tier, roster row 33), the earlier Wan 2.7 / 2.6 / 2.5 /
  2.2 families, and the `-flash` / `-turbo` speed variants inside those families. Replicate carries
  the Wan family only up to Wan 2.7 and does not host Prime
  ([Replicate search](../../sources/replicate.com/wan-3-0-prime-not-listed/2026-10-26.md)).

### Is Prime a tier, a checkpoint, or a host label?

**A tier.** Specifically a *serving-mode* tier, chosen by model ID.

It is not a **host label**. The name originates with the vendor: `wan3.0-video-prime` is an Alibaba
model ID with its own Model Studio documentation page, its own release date, its own price list and
its own row in the model-selection table. Both hosts reproduce the vendor's ID verbatim and keep the
vendor's price ordering.

It is not a **checkpoint**. There is no version suffix, no dated snapshot, and no suggestion that
Prime supersedes the standard tier. The vendor sells both concurrently, prices Prime higher, and
documents them as one product: "wan3.0-video / wan3.0-video-prime is an All-in-One model that covers
all the following task types without switching model names"
([guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md)).

It **is** a documented product concept, not marketing invention. Alibaba's Model Studio has a feature
page whose nav label is "Fast mode (Prime)", which says "Fast mode provides higher TPS for
latency-sensitive scenarios" and lists exactly one video model under it:
`wan3.0-video-prime` ([Fast mode (Prime)](../../sources/alibabacloud.com/prime-mode/2026-10-26.md)).
"Prime" in Alibaba's documentation therefore means *fast serving*, and Wan 3.0 Prime is that mode
applied to Wan 3.0.

Three statements carry the identity, and they agree:

> Wan3.0-Video-Prime is the accelerated version of the Wan video generation model, delivering
> significantly faster generation speed while maintaining high-quality output.
> — [model page](../../sources/alibabacloud.com/wan3-0-video-prime-model-page/2026-10-26.md)

> wan3.0-video-prime: High-speed version with capabilities aligned to the standard version, with
> significantly improved end-to-end speed.
> — [API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)

> All-in-One reference (speed-optimized)
> — [model selection table](../../sources/alibabacloud.com/wan3-0-video-model-selection/2026-10-26.md)

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-08-06 | `wan3.0-video` released on Model Studio | [changelog](../../sources/alibabacloud.com/wan3-0-release-dates/2026-10-26.md) |
| 2026-08-20 | `wan3.0-video-prime` released | [changelog](../../sources/alibabacloud.com/wan3-0-release-dates/2026-10-26.md) |
| 2026-08-24 | fal publishes both, standard at 03:15 UTC and Prime at 06:03 UTC | [fal catalogue](../../sources/fal.ai/wan-3.0-prime-catalogue/2026-10-26/index.md) |
| 2026-09-04 | a Hugging Face model card for Wan 3.0 is created, with no weights attached | [HF record](../../sources/huggingface.co/wan-3-0-weights-and-model-card/2026-10-26.md) |
| 2026-10-15 | API reference still describes Wan3.0 as "Currently in preview" | [API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md) |

### How Prime differs from Wan 3.0 (row 33)

| | Wan 3.0 Prime | Wan 3.0 |
| --- | --- | --- |
| Vendor ID | `wan3.0-video-prime` | `wan3.0-video` |
| Released | 2026-08-20 | 2026-08-06 |
| Vendor description | "the accelerated version" / "high-speed version" | "an All-in-One video generation model" |
| Model Studio, Singapore | $0.068 / $0.14 / $0.28 per s | $0.05 / $0.10 / $0.20 per s (list, "Limited-time 30% off") |
| fal | $0.068 / $0.14 / $0.28 per s | $0.05 / $0.10 / $0.20 per s |
| WaveSpeedAI | $0.075 / $0.15 / $0.30 per s | $0.05 / $0.10 / $0.20 per s |
| Modalities, tasks, limits | identical | identical |
| fal input schema | identical field-for-field | identical field-for-field |

That table is the whole documented difference. The capability matrix on the two Model Studio pages is
character-for-character the same, and the selection guide's `Features` cells are word-for-word the
same apart from "(speed-optimized)". A programmatic property-by-property comparison of fal's six
endpoint schemas found no difference in type, enum, default, constraint, description or `required`
list within any task pair
([fal catalogue](../../sources/fal.ai/wan-3.0-prime-catalogue/2026-10-26/index.md)).

## Current assessment

The evidence supports exactly one claim about Prime: **it is the same model served faster, for more
money.** Everything the vendor says about speed is unquantified — "significantly faster generation
speed", "significantly improved end-to-end speed", "speed-optimized" — and the one number in the
documentation estate, "TPS is increased to 1.5 to 2 times that of the standard API", belongs to the
Fast-mode feature page as a general statement about text generation, not to this video model
([Fast mode (Prime)](../../sources/alibabacloud.com/prime-mode/2026-10-26.md)). No wall-clock latency
figure, benchmark, or quality comparison between the two Wan 3.0 variants was captured from any
publisher.

The price direction is the opposite of what "accelerated" usually implies in this market, where speed
variants (`-flash`, `-turbo`, "Fast") are normally cheaper. Here Prime costs **1.36–1.40× the standard
tier per second on the vendor's Singapore rate and on fal, 1.541× on the vendor's other five regional
rate cards, and a flat 1.5× on WaveSpeedAI**
([Model Studio pricing](../../sources/alibabacloud.com/model-pricing-wan3-0-video/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/wan-3.0-prime-catalogue/2026-10-26/index.md)). A reader should
therefore treat Prime as a **latency purchase**, not a quality or value upgrade: you pay more per
second of video to wait less for it. Whether that trade is worth it depends on a speed delta nobody
has published.

Two status caveats belong in the assessment rather than in a footnote:

1. **The vendor still calls Wan3.0 a preview.** The API reference, last updated 2026-10-15, states
   "Currently in preview" for the family, while the changelog lists both models as released in August
   and the model pages show no preview badge. No page explains what preview restricts or when it ends
   ([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md),
   [changelog](../../sources/alibabacloud.com/wan3-0-release-dates/2026-10-26.md)).
2. **Neither variant is deprecated, and both are on sale on three routes.** There is no retirement
   notice, no successor announced, and Prime is not a transitional name.

Nothing in the corpus measures output quality for either variant. The vendor's own marketing claims
("production-grade character consistency", "immersive audio-visual impact") are labelled as claims in
**Documented capabilities** below, and no independent benchmark, arena, or user measurement of Wan 3.0
was captured.

## Documented capabilities

All of this is vendor or host documentation. No direct tests were run for this page.

### Output envelope

| Spec | Value | Source |
| --- | --- | --- |
| Resolution | 480P, 720P, 1080P (default 1080P) | [API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md) |
| Duration | 2–30 s, default 5 s; `-1` = smart duration | same |
| Frame rate | 30 fps | [selection table](../../sources/alibabacloud.com/wan3-0-video-model-selection/2026-10-26.md) |
| Container | MP4, H.264 | [API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md) |
| Aspect ratios | `adaptive` (default), 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | same |
| Audio | generated by default; `audio: false` removes the track | same |
| Clips per request | 1 (`video_count` "Fixed at 1") | same |
| Prompt | ≤ 20 000 characters, Chinese and English, silently truncated above that | same |
| Watermark | `watermark: false` by default | same |

### Inputs

| Input | Limit | Source |
| --- | --- | --- |
| Text prompt | ≤ 20 000 chars; optional if media is supplied | [API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md) |
| `first_frame` | 1 image, "strictly used as the first frame" | same |
| `last_frame` | 1 image, requires first frame | same |
| `reference_image` | ≤ 10; JPEG/JPG/PNG (no alpha)/BMP/WEBP; 240–8000 px per side; ≤ 20 MB each | same |
| `reference_video` | ≤ 5 clips, ≤ 15 s total, ≥ 16 fps, mp4/mov, ≤ 100 MB each | same |
| `reference_audio` | ≤ 5 clips, ≤ 15 s total, wav/mp3, ≤ 15 MB each | same |
| `file` | 1; docx/doc/xlsx/xls/pptx/ppt/pdf/txt/key/pages/numbers/md; ≤ 100 MB; ≤ 50 pages | same |
| `link` | 1 public web page, no login | same |

Reference media is addressed positionally in the prompt ("the subject in Image 1 walks past Video 1"),
with images, videos and audio numbered independently. The guide's headline count is "up to 20
multi-modal reference materials"
([guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md)).

### Tasks

Text-to-video; first-frame image-to-video; first-and-last-frame; multimodal reference (any combination
of image, video and audio); file-or-web-page to video; video editing (element add/remove/replace, style
conversion, lighting, dialogue); video extension (forward, backward, or both)
([guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md),
[API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)).
The model routes on the `type` values in `input.media` plus prompt intent; there is no task parameter.

### Audio

Audio is generated in the same pass as the picture — "natively generates voice dialogue, ambient sound
effects, and background music without post-production dubbing"
([guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md)). Toggling it does
not change the price. There is no channel count, sample rate or codec statement anywhere captured, so
mono/stereo is unknown for this model.

### Vendor claims (labelled as claims)

From Model Studio's changelog and pages, with no numbers or methodology:

- "production-grade character consistency and realistic audio and visuals" (changelog).
- "delivering significantly faster generation speed while maintaining high-quality output" (model
  page) — the "maintaining" is the only quality statement, and it is unsupported.
- "Supports single-shot and multi-shot storyboard format (4~6 seconds per shot, with timestamp
  annotations)" (guide) — prompt-format guidance, not a controllable shot count.
- The unsigned Hugging Face card adds a self-critical note ("Audio texture and on-screen text accuracy
  remain areas for continued improvement") that appears on no Alibaba page; treat it as an unattributed
  claim ([HF record](../../sources/huggingface.co/wan-3-0-weights-and-model-card/2026-10-26.md)).

## Limitations and constraints

- **The speed advantage is unmeasured.** No latency figure exists for Prime on any captured
  publisher. The 1.5–2× TPS claim is about text generation on the Fast-mode page.
- **Preview status is ambiguous** (see **Current assessment**).
- **No 4K, no frame-rate control, no batch.** Output tops out at 1080P/30 fps and `video_count` is
  fixed at 1 ([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)).
- **First/last-frame mode cannot take audio references.** The vendor's FAQ is explicit: Wan 2.7's
  i2v mode accepts `driving_audio`, Wan 3.0's does not; audio-driven generation must go through
  all-modal reference mode instead (same record). So the two headline features — frame-exact control
  and reference audio — do not combine.
- **Modes are mutually exclusive.** `first_frame`/`last_frame` cannot be mixed with any
  `reference_*`, `file` or `link` type; mixing returns "The two modes are mutually exclusive"
  (same record).
- **Duration budget is shared with input video.** With video input, "the total input video duration +
  output video duration must not exceed 30 seconds", so a 15-second reference video caps output at
  15 seconds (same record).
- **The reference-count arithmetic does not reconcile.** 10 images + 5 videos + 5 audio = 20, which is
  the headline figure, but the same documentation allows a `file` or `link` in addition
  ([guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md)).
- **Operational constraints.** Async-only API, 300 RPM, `task_id` and the returned `video_url` both
  expire after 24 hours, and cross-region calls fail: "make sure that the model, Endpoint URL and API
  Key all belong to the same region" (same record). Long generations must be downloaded and stored.
- **Host parameter drift.** fal drops `21:9` from the aspect-ratio enum, adds `enable_safety_checker`,
  and gates `file_url`/`web_url` on its own `enable_thinking` flag where the vendor gates them on
  `prompt_extend`. WaveSpeedAI defaults `resolution` to `720p` (not 1080p), defaults
  `enable_prompt_expansion` to `false` (not true), and names the audio field `generate_audio`
  ([fal](../../sources/fal.ai/wan-3.0-prime-catalogue/2026-10-26/index.md),
  [WaveSpeed](../../sources/wavespeed.ai/wan-3.0-prime-catalogue/2026-10-26/index.md)). The same
  prompt on different hosts can therefore produce different cost and different output without any
  request error.
- **No open weights.** The official Wan-AI organisation on Hugging Face publishes nothing newer than
  Wan 2.2; the only Wan 3.0 repository is a README-only card with `usedStorage: 0`
  ([HF record](../../sources/huggingface.co/wan-3-0-weights-and-model-card/2026-10-26.md)).
- **Moderation is undocumented.** fal exposes a safety checker that can only be disabled with account
  authorisation ("unauthorized requests are always checked"), and Model Studio's price list notes that
  failed requests are not billed — but no moderation policy, threshold or refusal taxonomy was captured
  on any route.
- **Replicate does not host it**, so there is no third independent price point
  ([Replicate search](../../sources/replicate.com/wan-3-0-prime-not-listed/2026-10-26.md)).

## Access, pricing, licensing

Billing basis on every route is **per second of output video**, not per request or per token. Alibaba
adds input-video duration to the bill:

> billable duration = input video duration + output video duration
> — [Model Studio pricing](../../sources/alibabacloud.com/model-pricing-wan3-0-video/2026-10-26.md)

| Route | 480p | 720p | 1080p | Input-video billing | Notes |
| --- | --- | --- | --- | --- | --- |
| Model Studio, Singapore | $0.068/s | $0.14/s | $0.28/s | yes, input + output | 30 s free quota; 300 RPM |
| Model Studio, other five regions | $0.0636/s | $0.127199/s | $0.254399/s | yes | no free quota outside Singapore |
| fal | $0.068/s | $0.14/s | $0.28/s | yes (r2v: "Input video duration is billed in addition to output duration") | `hostingType: proxy` |
| WaveSpeedAI | $0.075/s | $0.15/s | $0.30/s | yes, normalised to 1–15 s and rounded up | 5% off badge at capture |

Sources: [Model Studio](../../sources/alibabacloud.com/model-pricing-wan3-0-video/2026-10-26.md),
[fal](../../sources/fal.ai/wan-3.0-prime-catalogue/2026-10-26/index.md),
[WaveSpeed](../../sources/wavespeed.ai/wan-3.0-prime-catalogue/2026-10-26/index.md).

Worked examples at the vendor's Singapore rate: a 5-second 720P clip costs $0.70 (the fal price string
uses this exact example); a 30-second 1080P clip costs $8.40; a 5-second 1080P output with 10 seconds
of reference video costs $4.20. fal's figures match the vendor's International rate to the cent, so fal
appears to pass through Alibaba's rate card; WaveSpeed is 7–10% above it.

**Regions.** Model Studio serves Prime in six regions (Singapore, China (Beijing), Japan (Tokyo),
Germany (Frankfurt), US (Virginia), China (Hong Kong)), each with its own endpoint host and its own
price column, and cross-region calls fail
([model page](../../sources/alibabacloud.com/wan3-0-video-prime-model-page/2026-10-26.md)). The
documentation also warns "Supported models vary by region", so a price row is not proof of
availability in a given account.

**Free quota.** 30 seconds of combined input + output duration, Singapore only, valid 90 days from the
later of activation, model release, or approval
([Model Studio pricing](../../sources/alibabacloud.com/model-pricing-wan3-0-video/2026-10-26.md)).

**Promotions are asymmetric.** Every `wan3.0-video` price row reads "List price … (Limited-time 30%
off)"; every `wan3.0-video-prime` row is a bare price with no discount marker. If that promotion is
live, the standard tier's effective price is up to 30% below list, widening the Prime premium beyond
the 1.36–1.54× computed from list prices. No end date for the promotion was captured.

**Licensing.** No weights and no published model licence: all access is hosted and commercial. fal's
`licenseType: "commercial"` is fal's statement about use through fal, not an Alibaba licence. Output
ownership and commercial-use terms were not captured for any route, so no claim is made here about who
owns generated video.

## Unresolved questions

1. **What is the actual speed difference?** No latency, TPS or wall-clock figure exists for Prime. The
   only number, 1.5–2× TPS, is a text-generation feature claim.
2. **Is Prime a distilled checkpoint, a faster sampler, or the same weights on faster hardware?**
   "Accelerated version" and "speed-optimized" are compatible with all three. Nothing captured
   distinguishes them.
3. **Why does faster cost more, and why is the ratio inconsistent?** Vendor and fal charge 1.36× at
   480p but 1.40× at 720p/1080p; the vendor's "Global" regions charge a flat 1.541×; WaveSpeed charges
   a flat 1.5×. No page explains any of these structures.
4. **What does "Currently in preview" restrict**, given that the same family has been sold since
   August 2026?
5. **Is quality actually equal?** "while maintaining high-quality output" is unmeasured, and no
   independent comparison of Prime against standard exists.
6. **Is "deep-thinking" a real vendor parameter?** Both hosts expose a thinking toggle (`enable_thinking`
   on fal, "deep-thinking controls" in WaveSpeed's copy) but Alibaba's request body lists no such
   field; it documents only `prompt_extend`.
7. **Why is the standard tier marked "Limited-time 30% off" and Prime not?** Possibly a launch
   promotion, possibly a stale label.
8. **What is the third-party "Draft Mode"?** The unsigned Hugging Face card says Prime is offered
   alongside a "very-low-cost Draft Mode" on `wan30.io`, a domain that is not Alibaba's and that no
   vendor page links. Model Studio documents exactly two model IDs for Wan 3.0.
9. **Do the three routes serve the same checkpoint?** fal reports `proxy`; WaveSpeed states nothing
   about its hosting; the vendor's ID is unversioned, so no route can be pinned to a snapshot.

## Evidence status

Evidence floor: **met.** First-party: eight Alibaba Cloud Model Studio records (Prime model page,
standard model page, API reference, usage guide, Fast mode (Prime), release changelog rows, model
selection table, model pricing rows). Independent hosts: fal (catalogue metadata, three endpoint
schemas for Prime plus three for the standard tier, price strings) and WaveSpeedAI (catalogue
metadata, README parameter tables and per-second price tables for both variants). Supporting negative
evidence: a Replicate search record showing no Wan 3.0 listing, and a Hugging Face record showing no
Wan 3.0 weights from the official organisation. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; price statements are published
schedules; the speed and quality statements are the vendor's own, unquantified.

The next useful evidence would be a small reproducible test against named endpoints and dates: the
same prompt at the same resolution and duration run on `wan3.0-video` and `wan3.0-video-prime` through
one host, recording wall-clock time to first frame and to completion, then comparing the two outputs
blind for motion, identity consistency and audio sync. A three-way run (Model Studio, fal,
WaveSpeedAI) would also settle whether the hosts serve the same checkpoint and whether WaveSpeed's
different defaults change the result.
