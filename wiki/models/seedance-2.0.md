# Seedance 2.0

ByteDance Seed's audio-video generation model, launched in China on 2026-02-12 as a three-tier family
(Seedance 2.0, 2.0 Fast, 2.0 Mini). It generates 4–15 second clips with native synchronized audio from
text, up to 9 images, 3 video clips and 3 audio clips, and supports video editing and extension in the
same model ([launch post](../../sources/seed.bytedance.com/seedance-2-0-official-launch/2026-10-26.md),
[Volcengine tutorial](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md),
[BytePlus tutorial](../../sources/byteplus.com/seedance-2-0-tutorial/2026-10-26.md)). Output resolution
has grown since launch: the technical report describes 480p and 720p as the *native* resolutions
([publication](../../sources/seed.bytedance.com/seedance-2-0-publication/2026-10-26.md)), while current
vendor documentation lists 1080p and 4K (10-bit H.265/HEVC) for the standard tier.

It is within the roster's one-year window: 2026-02-12 is after 2025-10-26. The predecessor
Seedance 1.0 Pro (fal `date` 2025-06-16) and Seedance 1.5 Pro (2025-12-23 on fal) are separate models
and are not covered here.

## Identity

- **Canonical name:** Seedance 2.0. The vendor page title is exactly "Seedance 2.0"
  ([model page](../../sources/seed.bytedance.com/seedance-2-0-model-page/2026-10-26.md)), so the roster
  label matches first-party naming for once.
- **Vendor:** ByteDance Seed (the research team). Served first-party through Volcengine Ark in China
  and BytePlus ModelArk internationally, and by fal and Replicate.
- **Platform-specific product names:** "Doubao Seedance 2.0" on Volcengine
  ([tutorial](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md)); "Dreamina Seedance
  2.0" on BytePlus ([tutorial](../../sources/byteplus.com/seedance-2-0-tutorial/2026-10-26.md)). Both
  prefixes describe the same family; the ID suffixes are identical across the two platforms.

| Tier | Volcengine (China) ID | BytePlus (international) ID | fal endpoints | Replicate |
| --- | --- | --- | --- | --- |
| Seedance 2.0 | `doubao-seedance-2-0-260128` | `dreamina-seedance-2-0-260128` | `bytedance/seedance-2.0/{text-to-video,image-to-video,reference-to-video}` | `bytedance/seedance-2.0` |
| Seedance 2.0 Fast | `doubao-seedance-2-0-fast-260128` | `dreamina-seedance-2-0-fast-260128` | `bytedance/seedance-2.0/fast/…` | not hosted |
| Seedance 2.0 Mini | `doubao-seedance-2-0-mini-260615` | `dreamina-seedance-2-0-mini-260615` | `bytedance/seedance-2.0/mini/…` | not hosted |
| US-hosted 2.0 | — | — | `bytedance/seedance-2.0/us/…` | — |

Sources: [Volcengine tutorial](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md),
[BytePlus model list](../../sources/byteplus.com/seedance-2-0-model-list/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/seedance-2-0/2026-10-26.md).

- **Model-ID date suffixes:** `260128` = 2026-01-28, `260615` = 2026-06-15. No captured page explains
  what those checkpoints changed; the vendor exposes them as separate model IDs rather than as
  versioned snapshots of one ID.
- **Siblings:** Seedance 1.0 Pro, 1.0 Pro Fast, 1.5 Pro, and Seedance 2.5 (`doubao-seedance-2-5-260628`
  / `dreamina-seedance-2-5-260628`). Seedance 2.5 has 30-second output and up to 50 references, and is
  now the vendor's flagship (blog post 2026-07-31; Volcengine lists its API release in the 2026-06
  section). fal's own FAQ says "Seedance 2.0 remains available and is the faster, shorter-form option"
  ([fal landing](../../sources/fal.ai/seedance-2-0-landing-page/2026-10-26.md),
  [release announcement](../../sources/volcengine.com/seedance-2-0-release-announcement/2026-10-26.md)).

### Is Seedance 2.0 a model, a family, or a tier?

It is a **family of three tiers** that the vendor says "support largely the same features, with the
primary differences being the trade-off between generation quality and cost"
([BytePlus tutorial](../../sources/byteplus.com/seedance-2-0-tutorial/2026-10-26.md)). The one
capability difference the vendor spells out is resolution: 4K output is standard-tier only. This page
treats the family as one entity with per-tier caveats, because every capability claim except 4K and
per-second price applies to all three, and because the tiers are not separately documented enough to
support three pages.

Two further identity wrinkles are worth stating rather than resolving:

1. **fal's standard tier is gated while its other tiers are public.** The family page
   `fal.ai/models/bytedance/seedance-2.0` shows an "Early access — This model is not yet generally
   available. Request access" banner with B2B-only terms, and none of the three standard endpoints
   appear in fal's public catalogue, while the `fast/`, `mini/` and `us/` endpoints are listed
   `status: public`. The standard endpoints' schemas and docs pages are live and do not show the
   banner ([fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md)). fal does not
   date the gate or explain it.
2. **"US-hosted" is a deployment, not a model.** `bytedance/seedance-2.0/us/…` carries the same
   parameter surface as the standard tier plus a US-only access process, and its price list differs
   from the standard tier's. Nothing captured suggests different weights
   ([fal landing](../../sources/fal.ai/seedance-2-0-landing-page/2026-10-26.md)).

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-01-28 | Checkpoint date in the model ID (`…-260128`) | [Volcengine](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md) |
| 2026-02-12 | Official launch, China ("officially released in China in early February 2026") | [launch post](../../sources/seed.bytedance.com/seedance-2-0-official-launch/2026-10-26.md), [publication](../../sources/seed.bytedance.com/seedance-2-0-publication/2026-10-26.md) |
| 2026-04 | Volcengine records "全量发布" (full release) for 2.0 and 2.0 Fast; month only | [release announcement](../../sources/volcengine.com/seedance-2-0-release-announcement/2026-10-26.md) |
| 2026-04-01 | fal publishes the Fast endpoints | [fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md) |
| 2026-04-08 | Replicate's earliest version of `bytedance/seedance-2.0` | [Replicate](../../sources/replicate.com/seedance-2-0/2026-10-26.md) |
| 2026-04-09 | fal says Seedance 2.0 "is available now on fal as of April 9th, 2026" | [fal landing](../../sources/fal.ai/seedance-2-0-landing-page/2026-10-26.md) |
| 2026-04-15 | Technical report submitted (arXiv 2604.14148) | [arXiv](../../sources/arxiv.org/seedance-2-0-2604-14148/2026-10-26.md) |
| 2026-06-15 | Seedance 2.0 Mini checkpoint (`…-260615`); fal Mini endpoints 2026-06-23/24 | [Volcengine](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md), [fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md) |
| 2026-09-15 | fal publishes US-hosted Seedance 2.0 | [fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md) |

The February launch and the April Volcengine "full release" are different events. The changelog has
**no** February or March Seedance 2.0 row, and its April row is marked "更新 / update" rather than
"新发布 / new release". A staged rollout is the natural reading, but the vendor never says so, and the
absence of a row is weak evidence.

## Current assessment

Seedance 2.0's documented selling point is not picture quality but the combination of jointly
generated audio with a mixed-modal reference set, and that is what the documentation actually
supports. ByteDance frames the step from 1.5 to 2.0 as "synchronized audio-visual generation" becoming
"unified multimodal audio-video generation"
([launch post](../../sources/seed.bytedance.com/seedance-2-0-official-launch/2026-10-26.md)), so 1.5
Pro already produced audio; what 2.0 adds is the unified multimodal input path. Vendor and hosts agree
on the same operational envelope: 4–15 s, 480p–4K depending on tier, up to 9 images + 3 videos + 3
audio clips, editing and extension, audio on by default. That agreement across four documents from
three publishers is the strongest evidence on this page.

What the evidence does **not** support is a quality ranking. No independent benchmark capture was made
for this page; the only quantitative material is ByteDance's own `SeedVideoBench-2.0` radar charts,
which are published as images with no numbers, and the launch post's self-assessment
([model page](../../sources/seed.bytedance.com/seedance-2-0-model-page/2026-10-26.md),
[launch post](../../sources/seed.bytedance.com/seedance-2-0-official-launch/2026-10-26.md)). Notably
the launch post volunteers its own weaknesses — "detail stability, hyper-realism, and dynamic
vitality", "occasional audio distortion", "multi-subject consistency, text rendering accuracy, and
complex editing effects" — which is more specific than most launch posts and should be read as the
vendor's own list of known gaps.

Position in the family as of capture: superseded at the top by Seedance 2.5 (30-second output, up to
50 multimodal references) and retained as the shorter, cheaper option. The 2.0 page is no longer
linked from `seed.bytedance.com/en/models`, whose model list now points at Seedance 2.5; the 2.0 page
still resolves by direct URL ([model page](../../sources/seed.bytedance.com/seedance-2-0-model-page/2026-10-26.md)).
That is a de-emphasis, not a deprecation: every platform still serves it and no deprecation notice was
captured.

The practical obstacle is access, not capability. The same configuration costs materially different
amounts on different routes, the vendor platforms require a funding threshold before the model can be
activated at all, and fal's flagship tier is behind an access request with B2B-only terms.

## Documented capabilities

All of the following is vendor or host documentation, not independent testing.

### Output envelope by tier

| | Seedance 2.0 | 2.0 Fast | 2.0 Mini |
| --- | --- | --- | --- |
| Resolutions | 480p, 720p, 1080p, 4K (4K = 10-bit, H.265/HEVC) | 480p, 720p | 480p, 720p |
| Duration | 4–15 s, or model-chosen (`-1` / `auto`) | 4–15 s | 4–15 s |
| Aspect ratios | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (+ `adaptive`) | same | same |
| Audio | generated jointly, on by default (`generate_audio: true`) | same | same |
| Container | mp4 | mp4 | mp4 |
| Default resolution | 720p | 720p | 720p |

Sources: [Volcengine](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md),
[BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md),
[fal schema](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md),
[Replicate schema](../../sources/replicate.com/seedance-2-0/2026-10-26.md).

Replicate is the only captured source with exact pixel dimensions per aspect ratio (480p: 864×496 at
16:9, 992×432 at 21:9; 720p: 1280×720 at 16:9, 1470×630 at 21:9, and so on). Its README table stops at
720p even though its own schema exposes 1080p and 4K.

### Inputs and tasks

- **Text-to-video, first-frame image-to-video, first-and-last-frame image-to-video** — all three tiers,
  on both vendor platforms ([Volcengine](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md),
  [BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md)).
- **Omni reference.** Up to 9 images, 3 videos and 3 audio clips in one request, combinable as
  text+image, text+video, image+audio, image+video, video+audio, or image+video+audio. **"Text +
  audio" and audio-only are not supported** on the 2.0 family: at least one reference image or video
  must be present
  ([Volcengine](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md),
  [BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md)). Reference
  inputs must be labelled by type and index in the prompt (`@Image1`, `[Video1]`, `@Audio1` depending
  on platform).
- **Video editing.** Replace a subject, add/remove/modify objects, repaint or repair regions, guided by
  prompt plus references ([launch post](../../sources/seed.bytedance.com/seedance-2-0-official-launch/2026-10-26.md),
  [BytePlus tutorial](../../sources/byteplus.com/seedance-2-0-tutorial/2026-10-26.md)).
- **Video extension.** Extend forward or backward, and stitch up to 3 clips into one coherent video
  ([BytePlus tutorial](../../sources/byteplus.com/seedance-2-0-tutorial/2026-10-26.md)).
- **Reference-video inputs** are 2–15 s each, max 3 clips, total ≤ 15 s, 24–60 fps in, mp4/mov, ≤ 200 MB
  each ([BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md)).
- **Reference-audio inputs** are 2–15 s each, max 3 clips, total ≤ 15 s, wav/mp3, ≤ 15 MB each (same
  record).
- **Last-frame return.** `return_last_frame` returns the final frame as a JPEG for chaining generations
  ([Volcengine](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md)).
- **Watermark toggle.** `watermark: true` burns an "AI Generated" mark into the lower right corner;
  default off ([BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md)).
- **Web search tool.** Volcengine's capability matrix lists a "联网搜索工具 / web search tool" row as
  supported for all three 2.0 tiers ([Volcengine](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md)).
  No captured page describes what it does to a generation.

### Audio

Audio is generated jointly with the picture rather than layered afterwards: "Audio and video are
generated together, not separately"
([Replicate README](../../sources/replicate.com/seedance-2-0/2026-10-26.md)). Dialogue is cued by
putting spoken words in double quotes; the vendor recommends it for lip-sync
([BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md),
[fal landing](../../sources/fal.ai/seedance-2-0-landing-page/2026-10-26.md)).

**Unresolved contradiction:** the launch post claims "dual-channel audio" and "two-channel stereo
technology" with "multi-track parallel output"
([launch post](../../sources/seed.bytedance.com/seedance-2-0-official-launch/2026-10-26.md)), while
BytePlus's API reference states flatly: "All generated videos with audio are mono, regardless of the
number of channels of the input audio"
([BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md)). The two cannot
both describe the same output. Possible readings are that the launch claim describes the generation
model's internal tracks and the API delivers a mono mixdown, or that the claim was overstated; no
source settles it. Treat "stereo output" as unverified.

### Multi-shot

The launch post claims "15-second high-quality multi-shot audio-video output", and fal's copy repeats
"multi-shot editing" in its endpoint descriptions
([launch post](../../sources/seed.bytedance.com/seedance-2-0-official-launch/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md)). fal's FAQ adds that
"within that duration, the model can produce multiple shots with natural cuts and transitions, so a
single output can feel like an edited sequence"
([fal landing](../../sources/fal.ai/seedance-2-0-landing-page/2026-10-26.md)). No source states a shot
count, whether shot boundaries are controllable, or how reliably cuts appear.

### Frame rate

No first-party page states the output frame rate for Seedance 2.0 outright. Three indirect indicators
all point to **24 fps**: BytePlus's `frames` parameter is defined as `duration × 24` (though that
parameter is documented only for 1.0 models), the retrieve-task duration is computed as "actual total
frames / 24", and both fal and BytePlus token formulas multiply by 24
([BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md),
[Volcengine pricing](../../sources/volcengine.com/seedance-2-0-pricing/2026-10-26.md)). Record it as an
inference from the billing and duration formulas, not as a documented spec.

### Seed and reproducibility

BytePlus's parameter reference lists `seed` as supported by "Seedance 1.5 pro, Seedance 1.0 pro,
Seedance 1.0 pro fast" and **omits the 2.0 family**
([BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md)). Both hosts
expose it anyway: fal has a `seed` input and returns the seed used, and Replicate documents "Random
seed. Set for reproducible generation"
([fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/seedance-2-0/2026-10-26.md)). Whether the seed is honoured by
the model or accepted and ignored by the hosts is not documented anywhere captured.

### Vendor and host claims (labelled as claims)

From the launch post and model page, with no numbers or methodology attached:

- "higher usability rate for complex interaction and motion scenes", "industry-leading SOTA levels in
  generation usability" ([launch post](../../sources/seed.bytedance.com/seedance-2-0-official-launch/2026-10-26.md)).
- "most comprehensive multimodal content reference and editing capabilities in the industry"
  ([model page](../../sources/seed.bytedance.com/seedance-2-0-model-page/2026-10-26.md)).
- Can "directly reference text-based storyboards"; "prompt-driven camera planning, allowing it to
  automatically plan camera language"
  ([launch post](../../sources/seed.bytedance.com/seedance-2-0-official-launch/2026-10-26.md)).
- fal adds "director-level camera control", "real-world physics", and dialogue with "precise lip-sync",
  and says generations complete "in under 2 minutes" with no resolution, duration or queue conditions
  ([fal landing](../../sources/fal.ai/seedance-2-0-landing-page/2026-10-26.md)).

The vendor's own counter-claims, quoted in **Current assessment**, should be given equal weight: they
are the only self-critical statements in the corpus.

## Limitations and constraints

- **No open weights.** Every route is hosted. None of the twelve ByteDance-published documents
  captured here offers a checkpoint or weights download, and neither host serves one. fal's
  `licenseType: "commercial"` is fal's statement about use through fal, not a ByteDance licence
  ([fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md)).
- **Real human faces cannot be uploaded as references.** "Seedance 2.0 series models do not support
  direct uploads of reference images or videos containing real human faces"
  ([BytePlus tutorial](../../sources/byteplus.com/seedance-2-0-tutorial/2026-10-26.md)); the same
  restriction is stated on Volcengine
  ([Volcengine](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md)). The vendor's
  workarounds are trusted model outputs from the same account within 30 days, preset digital
  characters, and authorized real-person assets. The launch post says real-portrait references
  "require identity verification or prior legal authorization"
  ([launch post](../../sources/seed.bytedance.com/seedance-2-0-official-launch/2026-10-26.md)). On
  fal's US tier, "Faces and additional IP permissions are subject to a separate approval process"
  ([fal landing](../../sources/fal.ai/seedance-2-0-landing-page/2026-10-26.md)).
- **fal's standard tier is B2B-only and gated.** Access requires accepting terms that restrict use to
  business end users and require an `end_user_id` per request, plus an access request
  ([fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md)). Individual developers
  are excluded by the terms as written.
- **Vendor platforms require a funding threshold before activation.** Volcengine: balance > 200 CNY, a
  200 CNY+ savings plan, or a resource pack
  ([activation rules](../../sources/volcengine.com/seedance-2-0-activation-and-refund/2026-10-26.md)).
  BytePlus: balance > USD 30, a USD 30+ savings plan, or a resource pack
  ([BytePlus tutorial](../../sources/byteplus.com/seedance-2-0-tutorial/2026-10-26.md)). An API key
  alone is not enough.
- **Fast and Mini stop at 720p.** No 1080p or 4K on either tier, on any platform
  ([Volcengine](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md),
  [BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md)).
- **No offline / flex inference and no draft mode.** Volcengine marks `service_tier: flex` and "sample
  mode" unsupported for the 2.0 family; BytePlus says flex is "not currently supported" for 2.5 and
  2.0 ([Volcengine](../../sources/volcengine.com/seedance-2-0-tutorial/2026-10-26.md),
  [BytePlus API](../../sources/byteplus.com/seedance-2-0-create-task-api/2026-10-26.md)). There is no
  cheap draft-then-render loop for this family, unlike Seedance 2.5 and 1.5 Pro, whose draft modes are
  documented in the same price list
  ([BytePlus pricing](../../sources/byteplus.com/seedance-2-0-pricing/2026-10-26.md)).
- **Video-input requests carry a minimum token charge.** If the estimate falls below the floor the
  request is billed at the floor, so short outputs with long video references cost more than the
  formula suggests ([Volcengine pricing](../../sources/volcengine.com/seedance-2-0-pricing/2026-10-26.md),
  [BytePlus pricing](../../sources/byteplus.com/seedance-2-0-pricing/2026-10-26.md)).
- **Region limits on the international platform.** BytePlus serves the 2.0 family from
  `ap-southeast-1` (Johor) only; the `eu-west-1` region lists one text model and no video model
  ([region availability](../../sources/byteplus.com/seedance-2-0-region-availability/2026-10-26.md)).
  BytePlus also warns that requests "may be routed to inference resources in other regions" under
  resource scheduling, so in-region processing is not guaranteed.
- **4K playback compatibility.** 4K is 10-bit H.265/HEVC and the vendor warns some players and
  browsers cannot play it, with a compatibility table for Windows and macOS
  ([BytePlus tutorial](../../sources/byteplus.com/seedance-2-0-tutorial/2026-10-26.md)).
- **Moderation exists but is undocumented.** Both vendor price pages state that generations which fail
  "due to reasons such as content moderation" are not billed, which implies a moderation step, but no
  moderation policy, threshold, or refusal taxonomy was captured
  ([BytePlus pricing](../../sources/byteplus.com/seedance-2-0-pricing/2026-10-26.md),
  [Volcengine pricing](../../sources/volcengine.com/seedance-2-0-pricing/2026-10-26.md)). A refusal on
  one platform is not evidence about the model's general willingness.
- **Host documentation is internally inconsistent.** fal's landing page says Seedance 2.0 outputs
  "480p and 720p" and that US 1080p is "planned", while the endpoint schemas in the same catalogue
  expose 1080p and 4k for both standard and US tiers and the US price strings quote 1080p and 4K token
  rates. Replicate's README table stops at 720p while its schema offers 4K. Read the schemas as the
  operational truth and the prose as launch-era copy
  ([fal landing](../../sources/fal.ai/seedance-2-0-landing-page/2026-10-26.md),
  [fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/seedance-2-0/2026-10-26.md)).
- **Replicate runs cannot be cancelled** (`supports_cancelation: false`), so a bad prompt costs the
  full generation ([Replicate](../../sources/replicate.com/seedance-2-0/2026-10-26.md)).
- **No independent quality evidence.** No benchmark, arena, or third-party measurement of Seedance 2.0
  was captured for this page.

## Access, pricing, licensing

Four routes, four different pricing bases. The vendor platforms bill per token with published
per-video examples; the hosts bill per second of output video.

### Volcengine Ark (China) — per token, CNY

Token unit prices, 元 per million tokens (online inference; offline not supported for this family):

| Model | 480p/720p | 1080p | 4K |
| --- | --- | --- | --- |
| Seedance 2.0, no video input | 46.00 | 51.00 | 26.00 |
| Seedance 2.0, with video input | 28.00 | 31.00 | 16.00 |
| 2.0 Fast, no video / with video | 37.00 / 22.00 | — | — |
| 2.0 Mini, no video / with video | 23.00 / 14.00 | — | — |

Published examples, 16:9, 5-second output, no video input:

| Output | Seedance 2.0 | 2.0 Fast | 2.0 Mini |
| --- | --- | --- | --- |
| 480p | ¥2.31 (¥0.46/s) | ¥1.86 (¥0.37/s) | ¥1.16 (¥0.23/s) |
| 720p | ¥4.97 (¥0.99/s) | ¥4.00 (¥0.80/s) | ¥2.48 (¥0.50/s) |
| 1080p | ¥12.39 (¥2.48/s) | not supported | not supported |
| 4K | ¥25.27 (¥5.05/s) | not supported | not supported |

Source: [Volcengine pricing](../../sources/volcengine.com/seedance-2-0-pricing/2026-10-26.md). Only
successful generations are billed. The 4K token rate is *lower* than the 1080p rate while the 4K
per-video price is higher; the page does not explain the structure.

### BytePlus ModelArk (international) — per token, USD

Published examples, 16:9, 5-second output, no video input:

| Output | Seedance 2.0 | 2.0 Fast | 2.0 Mini |
| --- | --- | --- | --- |
| 480p | $0.35/video ($0.07/s) | $0.28 ($0.06/s) | $0.18 ($0.04/s) |
| 720p | $0.76/video ($0.15/s) | $0.60 ($0.12/s) | $0.38 ($0.08/s) |
| 1080p | $1.87/video ($0.37/s) | not supported | not supported |
| 4K | $3.89/video ($0.78/s) | not supported | not supported |

With video input the page gives ranges instead of single prices — Seedance 2.0 480p $0.39–$0.86,
720p $0.84–$1.86, 1080p $2.06–$4.57, 4K $4.20–$9.33 — because of the minimum-token floor
([BytePlus pricing](../../sources/byteplus.com/seedance-2-0-pricing/2026-10-26.md)). These figures were
reconstructed from the page's embedded table payload; the record documents the reconstruction and its
cross-checks. The USD and CNY example prices sit at a near-constant ~7.1 ratio, so the two vendor price
lists are consistent with each other.

### fal — per second of output video, USD

| Tier | 480p | 720p | 1080p | 4K | Video-input discount |
| --- | --- | --- | --- | --- | --- |
| Standard | not published (gated tier) | — | — | — | — |
| Fast | not quoted (token-billed) | $0.2419/s | — | — | ×0.6 → $0.14515/s at 720p |
| Mini | $0.0721/s | $0.1547/s | — | — | reference-to-video token rate $0.0042/1k |
| US text/reference-to-video | $0.1731/s | $0.37/s | — | — | ×0.6 → $0.222/s at 720p |
| US image-to-video | — | $0.3034/s | $0.682/s | — | — |

Source: [fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md). fal's per-second
figures are heuristics derived from token billing at a stated token rate and the formula
`(h × w × duration × 24) / 1024`, so actual cost moves with aspect ratio. The standard tier has no
published price because it is not in the public catalogue.

### Replicate — per second of output video, USD

| Resolution | No video input | With video input |
| --- | --- | --- |
| 480p | $0.08/s | $0.10/s |
| 720p | $0.18/s | $0.22/s |
| 1080p | $0.45/s | $0.55/s |
| 4K | $1.00/s | $1.25/s |

Source: [Replicate](../../sources/replicate.com/seedance-2-0/2026-10-26.md).

### Comparing routes

For a 5-second, 720p, no-reference generation the published figures are approximately: BytePlus
$0.76, Replicate $0.90, fal Mini $0.77, fal Fast $1.21, fal US $1.85, Volcengine ¥4.97 (≈$0.70 at the
~7.1 ratio the two vendor lists imply). At 1080p, BytePlus $1.87, Replicate $2.25, fal US
image-to-video $3.41, Volcengine ¥12.39. At 4K, BytePlus $3.89, Replicate $5.00, Volcengine ¥25.27.
These are arithmetic from published schedules at one fixed configuration, not quotes: they exclude the
activation thresholds, the gated standard tier, and any volume discount. The robust conclusion is that
the same output varies by roughly 2–3× across routes and that the cheap tiers (Mini, Fast) are only
available on some of them.

### Licensing and terms

- **No weights, no open licence.** All access is hosted and commercial
  ([fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md)).
- **Output ownership and commercial-use terms were not captured.** Neither ByteDance platform's model
  service agreement nor fal's/Replicate's terms were retrieved, so no statement is made here about who
  owns generated video or what commercial use is permitted. The only related first-party statement is
  the real-portrait condition in the launch post.
- **fal's standard tier adds B2B-only terms** (business end users only, `end_user_id` per request) on
  top of fal's general terms ([fal catalogue](../../sources/fal.ai/seedance-2-0-catalogue/2026-10-26.md)).
- **Reference-asset rights are the user's problem.** The launch post's note that real-portrait
  references require "identity verification or prior legal authorization" is a statement about the
  user's obligations, not a licence grant.

## Unresolved questions

1. **When did 1080p and 4K become available?** The launch paper says 480p/720p are the native
   resolutions; every current vendor and host document offers 1080p and 4K on the standard tier. No
   changelog entry or dated page records the expansion.
2. **Is the output audio mono or stereo?** BytePlus's API reference says mono; the launch post claims
   dual-channel stereo with multi-track output. No source reconciles them.
3. **Is `seed` honoured on Seedance 2.0?** BytePlus's supported-model list omits the 2.0 family; both
   hosts expose the parameter. Reproducibility is therefore unverified.
4. **What does the "web search tool" do?** Volcengine's matrix lists it as supported for all three
   tiers with no description.
5. **Why is fal's standard tier gated while fast/mini/US are public?** No date, reason, or approval
   criteria are published, and the endpoint docs pages do not show the gate.
6. **Which checkpoint do the hosts serve?** fal and Replicate expose endpoint/version dates but not the
   ByteDance checkpoint (`260128`, `260615`), so cross-host comparisons cannot be pinned to a model
   version.
7. **How many shots can one generation contain, and are cuts controllable?** "Multi-shot" is claimed by
   the vendor and repeated by fal, with no shot count or control surface.
8. **What is the output frame rate?** 24 fps is inferred from the billing and duration formulas, not
   documented.
9. **How does Seedance 2.0 compare with 2.5, Kling, Veo or Wan on any measured axis?** No independent
   benchmark was captured for any of them; the vendor's `SeedVideoBench-2.0` charts are images without
   numbers.
10. **Do the vendor platforms and the hosts run the same weights?** fal reports `hostingType: "proxy"`
    for every Seedance 2.0 endpoint; Replicate's page shows a CPU runner and no GPU, which is
    consistent with forwarding but is not stated. Their parameter surfaces differ (Replicate adds
    `9:21`; BytePlus omits `seed` for 2.0), so identical behaviour cannot be assumed.

## Evidence status

Evidence floor: **met.** First-party: the ByteDance Seed launch post (2026-02-12), model page,
publication page and arXiv record; four Volcengine Ark documents (tutorial, pricing, release
announcement, activation rules); five BytePlus ModelArk documents (tutorial, create-task API, pricing,
model list, region availability). Independent hosts: two fal records (catalogue/schemas/prices,
landing page/FAQ) and one Replicate record (README, schema, pricing, version dates). All captured
2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; price statements are published
schedules; quality statements are the vendor's own. The launch post's self-criticism is recorded as the
vendor's claim, not as a verified defect list.

The next useful evidence would be a small reproducible test set run against named endpoints and dates:
the same prompt at 480p/720p/1080p/4K for audio sync and lip-sync accuracy; a first-frame and
first-and-last-frame pair to check frame adherence; a 9-image + 3-video + 3-audio reference request to
find where the combination breaks; an edit and an extension task on the same source clip; a seed-reuse
test to settle question 3; and a mono/stereo check on the delivered file to settle question 2.
