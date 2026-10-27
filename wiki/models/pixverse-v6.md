# PixVerse V6

PixVerse's video generation model launched publicly on **2026-03-30**, replacing the V5 line as the
company's flagship. It generates 1–15 second clips at 360p–1080p from text, an image, a first/last
frame pair, a source video (extension) or a reference set, with optional jointly generated audio and
a multi-shot mode ([launch post](../../sources/pixverse.ai/pixverse-v6-launch/2026-10-26.md),
[capability map](../../sources/pixverse.ai/model-capability-map/2026-10-26.md)). It is the earliest
model in the vendor's price list billed per generated second rather than per fixed-length clip
([pricing](../../sources/pixverse.ai/api-pricing/2026-10-26.md)).

The launch is inside the roster's one-year window (2026-03-29/30, after 2025-10-26). V6 is **no
longer the top tier**: PixVerse V6 Max appeared on 2026-10-22, and the separate C1 model on
2026-04-07 ([changelog](../../sources/pixverse.ai/api-changelog/2026-10-26.md)).

## Identity

- **Canonical name:** PixVerse V6. The vendor uses exactly this form in its launch post, model page
  and docs; the roster label matches first-party naming. Host titles: "PixVerse V6 Text To Video"
  (fal), "PixVerse V6" (Replicate).
- **Vendor:** PixVerse, a video-generation company founded in 2023 with teams "across Asia and the
  US"; the launch post is datelined Singapore
  ([launch post](../../sources/pixverse.ai/pixverse-v6-launch/2026-10-26.md)). No legal entity name
  was captured.
- **Vendor API model string:** `v6`. V6 Max is the separate string `v6-max`; C1 is `c1`
  ([text-to-video API](../../sources/pixverse.ai/text-to-video-api/2026-10-26.md)).
- **Host endpoints:**

| Route | Endpoints |
| --- | --- |
| PixVerse API (first-party) | `POST /openapi/v2/video/text/generate`, `/video/img/generate`, `/video/transition/generate`, `/video/extend/generate`, `/video/fusion/generate` on `https://app-api.pixverse.ai` |
| fal | `fal-ai/pixverse/v6/{text-to-video, image-to-video, transition, extend}` |
| Replicate | `pixverse/pixverse-v6` (one model, transition folded in via `last_frame_image`) |

Sources: [fal catalogue](../../sources/fal.ai/pixverse-v6-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/pixverse-v6/2026-10-26.md),
[quick start](../../sources/pixverse.ai/api-quick-start/2026-10-26.md).

- **Siblings, in vendor order:**

| Model | Vendor API release | Position |
| --- | --- | --- |
| PixVerse V5 | 2025-08-29 | previous generation; 5/8 s only, multi-transition |
| PixVerse V5.5 | 2025-12-02 | 5/8/10 s, multi-shot, audio switch |
| PixVerse V5.6 | 2026-01-26 | 5/8/10 s, "cost-efficient" tier |
| **PixVerse V6** | 2026-03-30 (public launch) | 1–15 s, per-second billing, video references, extend |
| PixVerse C1 | 2026-04-07 | cinematic/VFX sibling, 1–15 s |
| PixVerse V6 Max | 2026-10-22 | quality tier above V6; text/image only |

Dates from the [changelog](../../sources/pixverse.ai/api-changelog/2026-10-26.md); capability
differences from the [capability map](../../sources/pixverse.ai/model-capability-map/2026-10-26.md).

### Is V6 a distinct model or a repackaged V5.x?

Distinct, on three independent grounds:

1. **Different envelope.** V6 runs 1–15 s with eight aspect ratios; V5.6 is fixed at 5/8/10 s with
   five. The vendor's own API field documentation states this per model: "C1/V6: 1-15; V5.5/V5.6: 5,
   8, or 10; older models: 5 or 8"
   ([image-to-video API](../../sources/pixverse.ai/image-to-video-api/2026-10-26.md)).
2. **Different billing basis.** V6 is billed per generated second; V5/V5.5/V5.6 are billed per fixed
   duration tier ([pricing](../../sources/pixverse.ai/api-pricing/2026-10-26.md)). On fal, V5.6 costs
   $0.45 per 5 s at 720p ($0.09/s equivalent) against $0.045/s for V6.
3. **Capabilities the V5 line does not have.** Video references and video extend are V6-only in the
   vendor's capability map, and native audio is scoped to "V5.5, V5.6, V6, or C1", i.e. absent on V5
   ([image-to-video API](../../sources/pixverse.ai/image-to-video-api/2026-10-26.md)).

V6 is *not* a V6 Max checkpoint. V6 Max is a later, narrower tier: same inputs, higher quality, and
explicitly **no** first/last-frame transition
([Replicate V6 Max](../../sources/replicate.com/pixverse-v6-max/2026-10-26.md),
[capability map](../../sources/pixverse.ai/model-capability-map/2026-10-26.md)).

### Release timeline (four different dates for one launch)

| Date | Event | Source |
| --- | --- | --- |
| 2026-03-19 | AA's `introducedAt` for its PixVerse V6 row | [AA I2V](../../sources/artificialanalysis.ai/pixverse-v6-image-to-video/2026-10-26.md) |
| 2026-03-23 | AA's printed `releaseDate` for the row | [AA I2V](../../sources/artificialanalysis.ai/pixverse-v6-image-to-video/2026-10-26.md) |
| 2026-03-29 | fal publishes all four V6 endpoints | [fal catalogue](../../sources/fal.ai/pixverse-v6-catalogue/2026-10-26.md) |
| 2026-03-30 | Vendor launch post, "available today to all PixVerse users" | [launch post](../../sources/pixverse.ai/pixverse-v6-launch/2026-10-26.md) |
| 2026-03-31 | Vendor changelog adds V6 to four endpoints | [changelog](../../sources/pixverse.ai/api-changelog/2026-10-26.md) |
| 2026-04-22 | Replicate's only visible version of `pixverse/pixverse-v6` | [Replicate](../../sources/replicate.com/pixverse-v6/2026-10-26.md) |
| 2026-05-21 | V6 support added to reference-to-video (Fusion) | [changelog](../../sources/pixverse.ai/api-changelog/2026-10-26.md) |
| 2026-10-22 | V6 Max added for text-to-video / image-to-video | [changelog](../../sources/pixverse.ai/api-changelog/2026-10-26.md) |

The vendor's own date is 2026-03-30. fal published one day earlier and the vendor's documentation
followed one day later, which reads as a coordinated launch; AA's earlier dates are unexplained (its
`introducedAt` precedes its own printed `releaseDate` on other rows too). **Use 2026-03-30 as the
launch date; treat 2026-03-23 as an aggregator artifact until a source explains it.**

## Current assessment

V6 is a real generational step, not a relabel, and it remains current — every route captured still
serves it, no deprecation notice exists, fal lists all four endpoints `status: "public"` with
`deprecated: false`, and Replicate shows the model as Public. What has
changed is its position: since 2026-10-22 the quality tier above it is V6 Max, and since 2026-04-07
C1 covers cinematic/VFX work. V6 is now best described as the **widest-capability, mid-price tier** in
the PixVerse line — the only model that can take a video reference or extend an existing clip.

On independent measurement it is mid-pack, not frontier. Artificial Analysis places it **14th
(rank range 13–16) on image-to-video with Elo 1024 ±17** from 3,451 votes, and **20th (range 19–20) on
text-to-video with Elo 983 ±16** from 3,642 votes
([AA I2V](../../sources/artificialanalysis.ai/pixverse-v6-image-to-video/2026-10-26.md),
[AA T2V](../../sources/artificialanalysis.ai/pixverse-v6-text-to-video/2026-10-26.md)). On the
text-to-video board that is statistically level with the board's fixed anchor (Kling 3.0 1080p Pro at
1000) and 190 Elo behind Wan 3.0. The vendor's own comparison material is qualitative and explicitly
disclaims statistics: "not a large-sample statistical pass-rate study"
([vendor review](../../sources/pixverse.ai/pixverse-v6-review/2026-10-26.md)).

The practical case for V6 is therefore capability coverage per dollar, not quality leadership: a
1–15 s range, native audio, multi-shot, first/last frame, video references and extension through one
model ID, at rates well below the frontier on AA's own price column: $6.90/min for V6 against $22.45
for Dreamina Seedance 2.0 and $24.00 for Veo 3.1 on the same board
([AA I2V](../../sources/artificialanalysis.ai/pixverse-v6-image-to-video/2026-10-26.md)).

## Documented capabilities

Everything below is vendor or host documentation. No direct tests were run for this page.

### Output envelope (V6, all routes)

| | Vendor (API `v6`) | fal | Replicate |
| --- | --- | --- | --- |
| Duration | 1–15 s (integer) | 1–15 s, default 5 | enum **5, 8, 10, 15** s |
| Resolution | 360p / 540p / 720p / 1080p | same, default 720p | same, default 540p |
| Aspect ratio | 16:9, 9:16, 4:3, 3:4, 1:1, 2:3, 3:2, 21:9 (+ `auto` on fusion) | same eight (T2V, transition only) | **16:9, 9:16, 1:1** |
| Audio | `generate_audio_switch` | same | same |
| Multi-shot | `generate_multi_clip_switch` (v5.5/v6 only) | same | same (T2V/I2V only) |
| Prompt cap | 5,000 chars (T2V), 2,048 chars (I2V) | 2,048 **bytes** everywhere | not stated |
| Seed | 0–2,147,483,647 | same | same |

Sources: [T2V API](../../sources/pixverse.ai/text-to-video-api/2026-10-26.md),
[I2V API](../../sources/pixverse.ai/image-to-video-api/2026-10-26.md),
[fal schemas](../../sources/fal.ai/pixverse-v6-schemas/2026-10-26.md),
[Replicate](../../sources/replicate.com/pixverse-v6/2026-10-26.md).

### Modes

- **Text-to-video.** Prompt plus aspect ratio; the only V6 mode with the full 5,000-character cap.
- **Image-to-video.** One uploaded image as the first frame; the output ratio follows the image on
  fal (no `aspect_ratio` field), while the vendor exposes the field on the endpoint.
- **First and last frame.** Two uploaded stills plus a prompt
  ([first/last frame API](../../sources/pixverse.ai/first-and-last-frame-api/2026-10-26.md)). Accepted
  models at the vendor are `c1`, `v6`, `v5.6`, `v5` — **`v6-max` is not accepted**.
- **Video references (Fusion).** V6-only. Up to **2 reference videos** with combined duration ≤ 15 s,
  `reference_mode=omni`, `duration=0` so output length follows the longest reference, plus up to **10
  image references** each optionally labelled `subject` or `background`
  ([fusion API](../../sources/pixverse.ai/reference-to-video-fusion-api/2026-10-26.md)). Not exposed on
  fal or Replicate.
- **Video extend.** V6-only. Source ≤ 30 s / 50 MB, extension 1–15 s, cumulative ≤ 40 s; the returned
  file "may include the source plus the extension"
  ([extend API](../../sources/pixverse.ai/video-extend-api/2026-10-26.md)). fal has
  `fal-ai/pixverse/v6/extend`; Replicate does not.
- **Video templates.** Supported "determined by the template" — parameters live in a live template
  API, not in the docs.

### Audio

`generate_audio_switch` covers "BGM, SFX, dialogue" (fal) / "background music, sound effects, and
character dialogue" (Replicate) and is generated alongside the picture, not layered afterwards: the
launch post says "Audio and video are generated simultaneously"
([launch post](../../sources/pixverse.ai/pixverse-v6-launch/2026-10-26.md)). The vendor scopes audio
generation to V5.5, V5.6, V6 and C1
([I2V API](../../sources/pixverse.ai/image-to-video-api/2026-10-26.md)).

Audio costs more everywhere, and all three routes carry the vendor's own uplift ratios unchanged:
**+40 % at 360p, +29 % at 540p, +33 % at 720p, +28 % at 1080p** (vendor credits 5→7, 7→9, 9→12,
18→23; fal $0.025→$0.035 … $0.090→$0.115; Replicate $0.05→$0.07 … $0.18→$0.23). The absolute
premium therefore tracks each route's base price rather than a flat audio fee. No captured source
states the audio sample rate, channel count, or whether output is stereo. Whether dialogue lip-sync is
model-driven or incidental is also undocumented.

### Frame rate

**Not documented anywhere captured.** No vendor page, host schema, or leaderboard capture states an
output frame rate for V6. Do not infer one from the V5 line.

### Vendor claims (labelled as claims, no numbers attached)

From the launch post and model page: better camera execution with "fewer artifacts"; character emotion
holding "across frames more reliably"; "multilingual text generation within frames" in English,
Chinese and others; "multi-shot short films with native audio from a single prompt"; "Native
MultiShot" with "wide, medium, close-up, and transition logic"
([launch post](../../sources/pixverse.ai/pixverse-v6-launch/2026-10-26.md),
[model page](../../sources/pixverse.ai/pixverse-v6-model-page/2026-10-26.md)). fal's schema names the
style presets `anime`, `3d_animation`, `clay`, `comic`, `cyberpunk` and a `thinking_type` prompt
optimiser — neither appears in the vendor's API
([fal schemas](../../sources/fal.ai/pixverse-v6-schemas/2026-10-26.md)).

The vendor's own counter-claims deserve equal weight: "areas that continue to evolve, including
precise directional control in complex scenes and consistency across significant spatial changes"
([launch post](../../sources/pixverse.ai/pixverse-v6-launch/2026-10-26.md)), and its review's verdict
that V6 "is not a magic 'one try solves everything' model"
([vendor review](../../sources/pixverse.ai/pixverse-v6-review/2026-10-26.md)).

## Limitations and constraints

- **No open weights.** Every route is hosted; no checkpoint, model card, or repository was found.
  AA records `openWeightsUrl: null` and `isDerived: false`
  ([AA I2V](../../sources/artificialanalysis.ai/pixverse-v6-image-to-video/2026-10-26.md)). fal's
  `licenseType: "commercial"` is fal's statement about use through fal, not a PixVerse licence.
- **Host parameter surfaces are narrower than the vendor's.** Replicate caps duration at four values
  and aspect ratio at three, and exposes no extend endpoint; fal omits Fusion entirely and drops
  `aspect_ratio` from image-to-video and extend
  ([Replicate](../../sources/replicate.com/pixverse-v6/2026-10-26.md),
  [fal schemas](../../sources/fal.ai/pixverse-v6-schemas/2026-10-26.md)). Twelve-second clips and 21:9
  output are unavailable on Replicate; fal supports both for text-to-video but not for image-to-video
  or extend.
- **fal's prompt cap is bytes, not characters.** 2,048 UTF-8 bytes on every endpoint, against 5,000
  characters for vendor text-to-video; the host warns that emoji and non-Latin text "can push a
  visually short prompt over the cap".
- **V6 Max cannot do first/last frame.** Stated by both the vendor and Replicate. Anyone who needs
  that mode cannot buy the quality tier.
- **Moderation is a distinct terminal state** (`status=7`, "Content moderation failed") with no
  published policy, threshold, or refusal taxonomy; refunds for failed or moderated tasks are
  conditional — "may be refunded" — and only final once the account ledger shows them
  ([quick start](../../sources/pixverse.ai/api-quick-start/2026-10-26.md),
  [FAQ](../../sources/pixverse.ai/api-faq/2026-10-26.md)).
- **Uploaded media is region- and account-scoped.** "Use images, videos, audio, and generated IDs with
  the same API account and region that created them." No list of regions or regional base URLs is
  published ([FAQ](../../sources/pixverse.ai/api-faq/2026-10-26.md),
  [quick start](../../sources/pixverse.ai/api-quick-start/2026-10-26.md)).
- **Concurrency is plan-dependent and unpublished.** The quota "depends on the account plan and
  configuration" and lives in the API console; exceeding it returns `500044`
  ([concurrency rules](../../sources/pixverse.ai/concurrency-rules/2026-10-26.md)).
- **Extend has hard ceilings:** 30 s / 50 MB source, 40 s cumulative after extension, and the result
  "may include the source plus the extension", so billed seconds and delivered seconds can diverge.
- **Fusion doubles the price** with video references, and requires `duration=0`, i.e. you cannot
  choose the output length when a video reference is present
  ([pricing](../../sources/pixverse.ai/api-pricing/2026-10-26.md)).
- **Multi-shot has no shot count, control surface, or reliability data.** The vendor documents the
  switch and a prompt convention ("Shot 1… Shot 2…"); nothing states how many cuts are honoured.
- **No independent quality evidence beyond AA's preference Elo.** No benchmark, arena breakdown, or
  third-party measurement of prompt adherence, audio sync, or physics was captured.
- **The consumer and API products are separate.** API usage is billed in credits; app subscriptions
  are not interchangeable with them
  ([billing page](https://docs.platform.pixverse.ai/billing-and-usage-2394984m0), captured in the
  pricing record).

## Access, pricing, licensing

Three published schedules, all per generated second, plus an aggregator estimate. USD figures are the
publishers' own conversions.

| Route | 360p | 540p | 720p | 1080p | Audio |
| --- | --- | --- | --- | --- | --- |
| PixVerse API (credits → USD) | $0.022 | $0.031 | $0.040 | $0.080 | +28–40 % |
| fal | $0.025 | $0.035 | $0.045 | $0.090 | +28–40 % |
| Replicate | $0.050 | $0.070 | $0.090 | $0.180 | +28–40 % |
| Artificial Analysis (normalised) | — | — | — | — | $6.90/min = $0.115/s |

Sources: [vendor pricing](../../sources/pixverse.ai/api-pricing/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/pixverse-v6-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/pixverse-v6/2026-10-26.md),
[AA I2V](../../sources/artificialanalysis.ai/pixverse-v6-image-to-video/2026-10-26.md).

- **fal is exactly +12.5 % over the vendor** at every tier and audio setting ($0.045 vs $0.040 at
  720p silent; $0.115 vs $0.102 at 1080p with audio).
- **Replicate is exactly 2× fal** and ~2.25× the vendor. The same 5-second 720p clip with audio is
  ≈$0.27 direct, $0.30 on fal, $0.60 on Replicate.
- **Vendor credits:** 225 credits = US$1. A 15-second 1080p clip with audio is 345 credits ≈ $1.53
  ([pricing](../../sources/pixverse.ai/api-pricing/2026-10-26.md)).
- **Fusion with video references** costs exactly 2× the standard V6 rate ($0.160/s at 1080p silent).
- **AA's $6.90/min matches no published rate** and its basis is unstated; treat it as AA's own
  estimate, not a quote.
- **Licensing:** hosted commercial access only, on all three routes. Output ownership, commercial-use
  terms, and watermark policy were **not captured** — no PixVerse platform terms page or host terms
  page was retrieved, so this page makes no statement about who owns generated video.

## Unresolved questions

1. **Why does Artificial Analysis date V6 to 2026-03-23 (and introduce it 2026-03-19)?** fal, the
   vendor post, and the vendor changelog all point to 2026-03-29/31. Either a limited release preceded
   the announcement or AA's date is an artifact. No source reconciles them.
2. **What is the output frame rate?** Undocumented on every captured page.
3. **What do `style` and `thinking_type` actually do?** fal exposes both; the vendor does not document
   either. Are they host-side prompt wrappers or vendor features with no vendor docs?
4. **Does V6 generate stereo audio, and is dialogue lip-synced?** The vendor claims simultaneous
   audio-video generation and Replicate mentions "character dialogue"; no channel count, sample rate,
   or lip-sync mechanism is stated.
5. **How many shots does multi-shot actually produce, and can cuts be controlled?** Only a prompt
   convention is documented.
6. **Is there a V6 checkpoint history?** No model ID carries a date suffix, unlike ByteDance's
   `-260128` pattern; Replicate's visible version is dated 2026-04-22 and fal exposes no revision at
   all, so cross-host comparisons cannot be pinned to a weight set.
7. **How much does quality differ between V6 and V6 Max?** The vendor says "better prompt following,
   more realistic textures and lighting"; there is no measurement, and AA does not list V6 Max.
8. **What are the region set and data-retention terms for the API?** Region-scoped media IDs are
   documented; the region list, residency guarantees, and retention window are not.
9. **Why is there no V6 Max endpoint on fal?** fal hosts four `v6` endpoints and four `c1` endpoints
   but nothing for `v6-max`; no source explains the gap.

## Evidence status

**Floor met.** First-party: the PixVerse launch post (2026-03-30), the consumer model page, the
vendor-authored review (2026-07-08), and eleven Platform Docs pages (capability map, pricing,
changelog, quick start, FAQ, concurrency rules, text-to-video, image-to-video, first/last frame,
reference-to-video fusion, video extend). Independent hosts: two fal records (catalogue metadata and
prices; OpenAPI schemas for all four V6 endpoints) and two Replicate records (`pixverse-v6`, plus
`pixverse-v6-max` for the sibling boundary). Independent measurement: two Artificial Analysis
leaderboard captures (AA-Video-I2V v1.1, AA-Video-T2V v2.1). All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules; quality
statements are either the vendor's own or AA's blind-preference Elo. Where the vendor's marketing and
its documentation disagree (audio scope, multi-shot availability, V6 Max's feature set), the
documentation was preferred and the disagreement recorded.

The next useful evidence would be a small reproducible run set against named endpoints and dates: the
same prompt at 360p/720p/1080p for cost and duration accuracy; a 15-second 1080p multi-shot prompt to
count honoured cuts; a first/last-frame pair on both the vendor API and fal to check frame adherence;
a 2-video + 10-image Fusion request to find where the reference combination breaks; an extend chain to
test the 40-second cumulative cap; a seed-reuse run to confirm reproducibility; and a container probe
on the delivered mp4 to settle the frame-rate and audio-channel questions.
