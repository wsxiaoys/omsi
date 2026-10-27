# Grok Imagine Video 1.5

xAI's video generation model, served as `grok-imagine-video-1.5` on the xAI API and through
partners. It generates 1–15 second clips with a synchronized audio track and lip-synced speech from
text, a still image, or a reference set of up to 14 images and 3 preset voices, and it can pin the
first frame, the last frame, and up to four mid-clip keyframes. It renders text-to-video and
image-to-video at **native 1080p**; reference-to-video stops at 720p
([video overview](../../sources/x.ai/imagine-video-overview/2026-10-26.md),
[reference-to-video](../../sources/x.ai/imagine-video-reference-to-video/2026-10-26.md)).

It went **generally available on 2026-06-16** after a preview period, at a published **$0.080 per
second** ([announcement](../../sources/x.ai/grok-imagine-video-1-5-announcement/2026-10-26.md),
[model page](../../sources/x.ai/grok-imagine-video-1-5-model-page/2026-10-26.md)) — though a logged
xAI response for a 5-second 720p clip billed **$0.71 (~$0.14/s)**, which is the vendor's own
`cost_in_usd_ticks` figure converted with its documented factor, not an estimate
([cost tracking](../../sources/x.ai/cost-tracking/2026-10-26.md),
[logged run](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md)). That is inside
the roster's one-year window (≥ 2025-10-26), so no out-of-window exception applies. It is API-only:
no weights are published.

## Identity

- **Canonical name:** "Grok Imagine Video 1.5" (xAI's own announcement title) / model ID
  **`grok-imagine-video-1.5`** ([announcement](../../sources/x.ai/grok-imagine-video-1-5-announcement/2026-10-26.md),
  [model page](../../sources/x.ai/grok-imagine-video-1-5-model-page/2026-10-26.md)). Unlike most
  rows in this roster, the roster label is first-party naming rather than a discovery label.
- **Vendor:** xAI (site footer "© 2026 SpaceXAI LLC"; the docs also self-brand as "SpaceXSI" in body
  text while the API host remains `api.x.ai` — captured as observed, not interpreted).
- **Aliases on the model page:** `grok-imagine-video-1.5-preview` and
  `grok-imagine-video-1.5-2026-05-30` ([model page](../../sources/x.ai/grok-imagine-video-1-5-model-page/2026-10-26.md)).
  The dated alias is the only first-party artefact that dates the model itself.
- **First-party endpoint:** `POST https://api.x.ai/v1/videos/generations` with
  `"model": "grok-imagine-video-1.5"`; asynchronous, polled by `request_id`
  ([video generation](../../sources/x.ai/imagine-video-generation/2026-10-26.md),
  [REST reference](../../sources/x.ai/videos-api-reference/2026-10-26.md)).
- **Host endpoints:** fal publishes three, all `hostingType: "proxy"` —
  `xai/grok-imagine-video/v1.5/image-to-video` (2026-05-31),
  `…/v1.5/text-to-video` and `…/v1.5/reference-to-video` (both 2026-07-29)
  ([fal](../../sources/fal.ai/grok-imagine-video-1.5/2026-10-26.md)). Replicate publishes one,
  `xai/grok-imagine-video-1.5`, image-to-video only, labelled "preview"
  ([Replicate](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md)).
  **The roster's discovery label `xai/grok-imagine-video/v1.5` is a family prefix, not an endpoint
  ID** — every real endpoint carries a mode suffix, and the mode is part of the address.

### The three video tiers

| | `grok-imagine-video-1.5` | `grok-imagine-video-1.5-lite` | `grok-imagine-video` (1.0) |
| --- | --- | --- | --- |
| xAI price | $0.080/s | $0.020/s | $0.050/s |
| Modalities | text, image → video | text, image → video | text, image, video → video |
| Text-to-video | 1080p native | 1080p (upscaled from 720p) | 720p |
| Image-to-video | 1080p native | 1080p (upscaled from 720p) | 720p |
| Reference images | 14, 15 s, 720p | not supported | 7, 10 s, 720p |
| Voice references | 3 preset voices | not supported | not supported |
| First/last frame + keyframes | yes | not supported | not supported |
| Video editing / extension | not supported | not supported | yes (source clip ≤ 8.7 s) |
| Regions | us-east-1, us-west-2, us-saltlake-2 | us-east-1, us-west-2 | us-east-1, us-west-2, us-saltlake-2 |

Sources: [capability table](../../sources/x.ai/imagine-video-overview/2026-10-26.md),
[model pages](../../sources/x.ai/grok-imagine-video-1-5-model-page/2026-10-26.md),
[pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md),
[pinned frames](../../sources/x.ai/imagine-video-reference-to-video/2026-10-26.md).

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-05-30 | Date in the snapshot alias `grok-imagine-video-1.5-2026-05-30` | [model page](../../sources/x.ai/grok-imagine-video-1-5-model-page/2026-10-26.md) |
| 2026-05-31 | fal publishes the 1.5 image-to-video endpoint (preview era) | [fal](../../sources/fal.ai/grok-imagine-video-1.5/2026-10-26.md) |
| 2026-06-01 | Earliest Replicate version of `xai/grok-imagine-video-1.5` | [Replicate](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md) |
| **2026-06-16** | **GA: "out of preview and generally available in the xAI API"** | [announcement](../../sources/x.ai/grok-imagine-video-1-5-announcement/2026-10-26.md) |
| 2026-06-18 | Replicate creates its model page | [Replicate](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md) |
| July 2026 | Text-to-video and reference-to-video (with preset voices) and native 1080p announced for the model | [release notes](../../sources/x.ai/release-notes/2026-10-26.md) |
| 2026-07-29 | fal publishes 1.5 text-to-video and reference-to-video | [fal](../../sources/fal.ai/grok-imagine-video-1.5/2026-10-26.md) |

The GA post describes only image-to-video ("Give it a starting image"), and the July 2026 release
note is the first first-party statement that 1.5 also does text-to-video and reference-to-video. So
**GA and full modality coverage are five weeks apart**, and host listing dates track that split:
fal's I2V arrived before GA, its T2V and R2V arrived after the July note.

### Is 1.5 a distinct model or a repackaging?

Distinct, on all three of the skill's checkpoint tests:

1. **Both obtainable.** 1.0 and lite are still listed and priced by xAI, and both remain in fal's
   public catalogue ([pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md),
   [fal](../../sources/fal.ai/grok-imagine-video-1.5/2026-10-26.md)).
2. **The difference changes the recommendation.** 1.5 costs 1.6× 1.0 and 4× lite, and it is the only
   tier with pinned frames, voices, 14 references and native 1080p, while 1.0 is the only tier that
   can edit or extend an existing clip. Picking the wrong one loses either money or a capability.
3. **Variant-specific evidence exists.** xAI documents 1.5's parameters separately and names it in
   every code sample; the capability table has a 1.5 column.

The capability split is complementary rather than generational — **1.5 is not a superset of 1.0**:
editing and extension were left behind on 1.0.

### Identity wrinkles worth stating rather than resolving

- **"Video 1.5 Fast" is a consumer product, not an API model.** The GA post rolls it out "on
  grok.com/imagine and our iOS and Android apps" and gives it the only speed number in the corpus
  ("6-second, 720p videos in about 25 seconds"). It appears in no price table, no model page, and no
  host catalogue ([announcement](../../sources/x.ai/grok-imagine-video-1-5-announcement/2026-10-26.md)).
  Whether it is the same weights served differently is not stated.
- **Replicate's listing is frozen in the preview era.** It is titled "preview", accepts an input
  image only, and offers 480p/720p — four months after xAI's GA post and two months after the T2V
  announcement ([Replicate](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md)). Its
  one embedded run shows the upstream response naming **`grok-imagine-video-1.5-preview`**, so the
  listing proxies the preview alias even though its slug has no `-preview` suffix.
- **fal's display titles are inconsistent**: the image-to-video endpoint is titled "Grok Imagine
  Video 1.5" while text-to-video and reference-to-video are "Grok Imagine Video 1.5 Text to Video"
  and "… Reference to Video", and the two latter entries carry no `landingPageSlug`
  ([fal](../../sources/fal.ai/grok-imagine-video-1.5/2026-10-26.md)). Citing "Grok Imagine Video 1.5
  on fal" without the path is ambiguous across three modes.

## Current assessment

**Current, recommended by the vendor, and the widest-capability video model xAI serves — but it is
not a full replacement for 1.0, and its price is not what the vendor's table implies.**

- xAI recommends it. The Models page's "Which model should I choose?" section points videos at
  "Grok Imagine Video 1.5" ([pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md)), and
  the capability overview describes 1.5 as the model that "generates lip-synced speech, renders
  text-to-video and image-to-video at native 1080p, takes up to 14 reference images and 3 voice
  references, and pins first, last, and mid-video frames", with lite as the tier that does T2V and
  I2V "at the lowest price per second"; the generation guide adds "For simple videos, we recommend
  `grok-imagine-video-1.5-lite`, the lowest price per second"
  ([video overview](../../sources/x.ai/imagine-video-overview/2026-10-26.md),
  [video generation](../../sources/x.ai/imagine-video-generation/2026-10-26.md)). No retirement or
  deprecation notice for any of the three tiers was captured.
- **It is the only xAI video model with frame pinning**, which is the capability that makes it
  usable for storyboarding rather than single-shot generation: first frame, last frame, and up to
  four mid-clip keyframes on a 1/3-second grid
  ([reference-to-video](../../sources/x.ai/imagine-video-reference-to-video/2026-10-26.md)).
- **The quality claims are unmeasured.** xAI says 1.5 is "our best image-to-video models yet" with
  "better motion, better physics, better audio", and its only quantitative claim is a speed figure
  for the consumer "Fast" tier. No benchmark, arena, or third-party evaluation of this model was
  captured — not even an aggregator Elo ([announcement](../../sources/x.ai/grok-imagine-video-1-5-announcement/2026-10-26.md)).
- **Cost per clip is materially higher than the headline.** xAI lists one flat $0.080/s, but a
  logged xAI response for a 5-second **720p** clip billed 7,100,000,000 `cost_in_usd_ticks` =
  **$0.71**, i.e. ~$0.142/s ([cost tracking](../../sources/x.ai/cost-tracking/2026-10-26.md),
  [logged run](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md)). fal prices the same
  model at $0.08/$0.14/$0.25 per second for 480p/720p/1080p plus $0.01 per reference image
  ([fal](../../sources/fal.ai/grok-imagine-video-1.5/2026-10-26.md)). The consistent reading is that
  $0.080 is the **480p** rate and 720p costs ~1.75× that — so a 10-second 720p clip is ~$1.40, not
  the ~$0.80 the vendor table implies, and a 10-second 1080p clip on fal is ~$2.50 plus references.
- **Prefer lite unless you need the extras.** At $0.020/s, lite is a quarter of the price for the
  same 1–15 s envelope and the same T2V/I2V surface; what it lacks is everything 1.5 exists for.

For a reader choosing today: 1.5 for reference-driven work, voice assignment, or pinned-frame
control; lite for cheap single-shot text- or image-to-video; 1.0 only when an existing clip must be
edited or extended, since 1.5 cannot do either.

## Documented capabilities

All of the following is vendor or host documentation, not independent testing.

### Modes

- **Text-to-video.** On 1.5 the pipeline is two-stage: "the model renders a first frame from the
  prompt, then animates it", and "the intermediate image is not returned"
  ([video generation](../../sources/x.ai/imagine-video-generation/2026-10-26.md)). The page's note
  describing this has **empty date slots** ("On  and , …"), so it names neither the model nor the
  date in that sentence.
- **Image-to-video.** The still becomes the first frame; "the output always matches the still's
  aspect ratio; `aspect_ratio` is ignored". Input as public URL, base64 data URI, or Files API
  `file_id` ([image-to-video](../../sources/x.ai/imagine-video-image-to-video/2026-10-26.md)).
- **Reference-to-video.** Up to 14 images, tagged `<IMAGE_0>`… in the prompt; up to 3 preset voices
  via `reference_audios` tagged `<AUDIO_0>`…; 720p ceiling; 15 s ceiling
  ([reference-to-video](../../sources/x.ai/imagine-video-reference-to-video/2026-10-26.md)).
- **Pinned frames.** `image` (first), `last_frame` (last), and up to 4 `keyframes` with
  `timestamp_s`; anchors snap to a 1/3-second grid and two keyframes that round to the same slot are
  rejected. Passing the same image as `image` and `last_frame` loops the clip.
- **No editing, no extension.** Both are 1.0-only; 1.5's modality line is `text, image → video`
  ([model page](../../sources/x.ai/grok-imagine-video-1-5-model-page/2026-10-26.md)).

### Output envelope

| Dimension | Value |
| --- | --- |
| Duration | 1–15 s; default 8 |
| Resolution | 480p (default), 720p, 1080p — 1080p native for T2V/I2V, 720p max for R2V |
| Aspect ratio | `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `21:9`, `5:2`; default `16:9`; I2V follows the input image |
| Audio | generated by default with lip-synced speech; `generate_audio: false` for silent |
| Container | `.mp4` (by URL convention only — no codec or container is documented) |
| Frame rate | **not documented by xAI**; 24 fps in every fal output example |
| Delivery | temporary URL (`vidgen.x.ai/…/video.mp4`) or caller-supplied signed `upload_url` |

Sources: [video generation](../../sources/x.ai/imagine-video-generation/2026-10-26.md),
[REST reference](../../sources/x.ai/videos-api-reference/2026-10-26.md),
[fal](../../sources/fal.ai/grok-imagine-video-1.5/2026-10-26.md).

**Frame rate is an inference, not a spec.** fal's output object carries `fps` and its two 1.5
examples both report 24 with consistent frame counts (145 frames / 6.041667 s; 192 / 8 s). xAI
documents no fps field anywhere, and Replicate's schema has none.

### Audio

Audio is generated in the same pass as the picture: "Sound effects, ambience, and dialogue are
generated in the same pass and land on the action. Speech is clearer and better synced"
([announcement](../../sources/x.ai/grok-imagine-video-1-5-announcement/2026-10-26.md)). Voice
identity is selectable only through **preset** voices drawn from the TTS roster
(`{"voice_id": "eve"}`), case-insensitive, with an unknown ID returning `400` plus the available
list ([reference-to-video](../../sources/x.ai/imagine-video-reference-to-video/2026-10-26.md)).
Replicate's host-written prompt guide adds an optional `AUDIO:` section convention, which is host
prose, not vendor documentation.

**Unresolved contradiction on custom voices:** the reference-to-video guide says user-supplied audio
files "are available to trusted partners on request", while the REST reference documents
`reference_audios` entries that accept "a downloadable audio clip of at most 15 seconds" via `url`
with no gating ([REST reference](../../sources/x.ai/videos-api-reference/2026-10-26.md)). Either the
schema is broader than the policy or the policy is enforced at another layer; no captured page says
which.

### Asynchrony, rate limits, regions

- Submit → poll `request_id` → download. Statuses `pending` / `done` / `failed`. Failures return
  `invalid_argument`, `permission_denied`, `failed_precondition`, `service_unavailable`, or
  `internal_error`; "content blocked by moderation" is folded into `invalid_argument`
  ([video generation](../../sources/x.ai/imagine-video-generation/2026-10-26.md)).
- **10 requests/second** ([model page](../../sources/x.ai/grok-imagine-video-1-5-model-page/2026-10-26.md)).
- **Regions:** `us-east-1`, `us-west-2`, `us-saltlake-2`; **Batch API** supported in the first two
  only (same record).
- "Typically takes up to several minutes"; no SLA, no queue depth, no concurrency cap published.
  The one observed run took **32.6 s wall clock** for a 5-second 720p image-to-video clip (30.7 s
  xAI-side), which is the only latency figure in this corpus
  ([logged run](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md)).

### Vendor and host claims (labelled as claims)

- xAI: "our best image-to-video models yet: better motion, better physics, better audio, at the
  fastest speeds"; "fewer warps, more believable weight and momentum"; the consumer Fast tier does
  "6-second, 720p videos in about 25 seconds, down from 40+ seconds in our previous model"
  ([announcement](../../sources/x.ai/grok-imagine-video-1-5-announcement/2026-10-26.md)). No
  methodology, sample, or named baseline.
- xAI: "Generated media is subject to content policy review and is not used for training"
  ([Imagine overview](../../sources/x.ai/imagine-overview/2026-10-26.md)).
- Replicate: "realistic motion, object interactions, and automatically generated sound"; "Negative
  prompts don't work. The model ignores them"; "5–8 seconds is the sweet spot. 15-second clips work
  but are more likely to have artifacts"
  ([Replicate](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md)). The artefact claim
  is the only quality caveat anywhere in the corpus and it is the host's, not xAI's.
- fal: tags 1.5 with `stylized`, `transform`, `lipsync` — host taxonomy, not vendor copy
  ([fal](../../sources/fal.ai/grok-imagine-video-1.5/2026-10-26.md)).

## Limitations and constraints

- **No video input.** 1.5 cannot edit, extend, or continue an existing clip; those workflows require
  `grok-imagine-video` (1.0) ([capability table](../../sources/x.ai/imagine-video-overview/2026-10-26.md)).
- **Reference-to-video tops out at 720p**, and 14 references are only available there; T2V/I2V get
  1080p but no references ([reference-to-video](../../sources/x.ai/imagine-video-reference-to-video/2026-10-26.md)).
- **15-second ceiling**, and the host most likely to be used for comparison warns that 15 s clips
  "are more likely to have artifacts" ([Replicate](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md)).
- **Custom voice cloning is not self-serve**; only preset voices are public.
- **Not available on the US regional endpoint.** `us.api.x.ai/v1` "currently serves only `grok-4.7`
  and `grok-4.6`, with no image generation, video generation, or voice APIs"
  ([security FAQ](../../sources/x.ai/security-faq/2026-10-26.md)). The model page's region list
  (`us-east-1`, `us-west-2`, `us-saltlake-2`) is therefore a different concept from a
  customer-selectable residency endpoint, and no captured page reconciles the two.
- **Zero Data Retention changes the call shape**: under ZDR there is no xAI-side output storage, no
  `file_id` inputs, and the caller must supply storage ([security FAQ](../../sources/x.ai/security-faq/2026-10-26.md)).
  The video docs only say outputs arrive as temporary URLs.
- **Moderation is a boolean, not a policy.** `respect_moderation` and the `invalid_argument` code are
  the entire first-party description of refusals; no prohibited-category list, pre/post-generation
  timing, or appeal path is published. fal exposes `enable_safety_checker` (default `true`,
  "Authorized callers may set false to request relaxed screening"), a knob xAI's public docs do not
  describe — so refusal behaviour differs by host and by account.
- **Host gaps against the vendor surface.** fal caps references at 7 (vendor: 14), drops 1080p and
  two aspect ratios from reference-to-video, drops `21:9` and `5:2` everywhere, and exposes neither
  `last_frame`, `keyframes`, nor `generate_audio` on any 1.5 endpoint
  ([fal](../../sources/fal.ai/grok-imagine-video-1.5/2026-10-26.md)). Replicate offers I2V only, at
  480p/720p, with a 5-second default and no audio toggle
  ([Replicate](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md)).
- **No weights, no local deployment, no licence to inspect.** fal is `proxy`, Replicate runs on CPU,
  and xAI's Hugging Face organisation publishes only `grok-1` and `grok-2`; a search for
  `grok-imagine` returns nothing
  ([negative search](../../sources/huggingface.co/grok-imagine-video-weights-search/2026-10-26.md)).
- **Undocumented controls.** No seed, negative prompt, guidance, step count, or reproducibility
  parameter appears in any xAI page or host schema for this model.
- **No independent quality evidence.** Nothing measured 1.5 against any other video model.

## Access, pricing, licensing

### xAI first-party — published per second

| Model | xAI price | Billing basis |
| --- | --- | --- |
| `grok-imagine-video-1.5` | **$0.080 / s** | per second of output video |
| `grok-imagine-video-1.5-lite` | $0.020 / s | per second of output video |
| `grok-imagine-video` | $0.050 / s | per second of output video |

Source: [pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md),
[model page](../../sources/x.ai/grok-imagine-video-1-5-model-page/2026-10-26.md). The Imagine
overview states the basis: "Video generation uses per-second pricing where both duration and
resolution affect the total cost"
([Imagine overview](../../sources/x.ai/imagine-overview/2026-10-26.md)) — but the price table shows
a single figure per model, and the video overview says "Per-second prices by resolution are listed
on the Models page" while that page lists none
([video overview](../../sources/x.ai/imagine-video-overview/2026-10-26.md)).

**The flat figure does not hold at 720p.** One logged xAI video response — a 5-second 720p
image-to-video generation run on 2026-06-01 — carried `"usage": {"cost_in_usd_ticks":
7100000000}`, and xAI documents 1 USD = 10^10 ticks, so the request cost **$0.71 ≈ $0.142/s**
([logged run](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md),
[cost tracking](../../sources/x.ai/cost-tracking/2026-10-26.md)). That is fal's 720p rate, not
xAI's table rate. The most economical reading is that **$0.080/s is the 480p entry rate** and the
Models page simply prints one row per model; xAI never says so, and one observation at one
resolution cannot confirm a whole schedule.

### fal — per second, tiered by resolution, plus per reference image

| Mode | 480p | 720p | 1080p | Reference images |
| --- | --- | --- | --- | --- |
| text-to-video | $0.08/s | $0.14/s | $0.25/s | — |
| image-to-video | $0.08/s | $0.14/s | $0.25/s | $0.01 each (1–7) |
| reference-to-video | $0.08/s | $0.14/s | not offered | $0.01 each (1–7) |

Source: [fal](../../sources/fal.ai/grok-imagine-video-1.5/2026-10-26.md). fal's own worked example:
"a 5-second clip costs $0.40 at 480p, $0.70 at 720p, and $1.25 at 1080p". Reference audio is
"included at no extra cost" in fal's price string, although no audio-reference input exists in its
schema.

### Replicate — flat per second

**$0.08 per second of output video**, "or around 12 seconds for $1", with no resolution tiers and no
per-image charge ([Replicate](../../sources/replicate.com/grok-imagine-video-1.5/2026-10-26.md)).
At 720p that makes Replicate roughly half of fal's rate for the same nominal model — and *below the
upstream xAI cost* of the one logged run ($0.40 charged for 5 s against $0.71 billed by xAI), which
no captured page explains.

### Comparing routes

For a 10-second 720p text-to-video clip the published figures are: xAI $0.80 by its table but ~$1.42
by the one observed 720p billing, fal $1.40, Replicate not offered (I2V only, $0.80 by its flat
rate). For a 10-second 1080p clip: xAI ~$0.80 by its table (unverified), fal $2.50, Replicate not
offered. These are arithmetic from published schedules plus one logged request at one
configuration, not quotes. The robust conclusions are that **fal's tiered schedule matches observed
xAI billing at 720p while xAI's own table does not**, and that fal's 1080p premium is the largest
single pricing difference in this family.

### Licensing and weights

- **No weights licence exists to inspect**: the model is API-only, and xAI publishes no video
  checkpoint ([negative search](../../sources/huggingface.co/grok-imagine-video-weights-search/2026-10-26.md)).
- fal's `licenseType: "commercial"` is fal's statement about use through fal, not an xAI licence
  grant.
- **Output-ownership and commercial-use terms were not captured.** `x.ai` serves its news post to a
  browser user-agent but returned HTTP 403 to this fetcher for `/legal`, `/news`, and `/sitemap.xml`
  on the capture date, and the docs pages link out to those terms without restating them.
- xAI states that API inputs and outputs are not used for training and are retained 30 days by
  default for abuse auditing ([security FAQ](../../sources/x.ai/security-faq/2026-10-26.md)).

## Unresolved questions

1. **What does a direct xAI call bill at 480p and 1080p?** One logged 720p request billed ~$0.142/s,
   matching fal, against a published $0.080/s. Only a 480p and a 1080p run would confirm that the
   Models page prints the 480p rate and that 1080p is ~$0.25/s.
2. **What is the output frame rate?** 24 fps appears only in fal's examples; xAI documents none.
3. **Is "Video 1.5 Fast" the same weights as the API model?** It is consumer-only and its speed
   claim has no API counterpart.
4. **What did the `-preview` alias serve, and does the slug now resolve to the same weights?**
   Replicate's embedded run shows the upstream response naming
   `grok-imagine-video-1.5-preview` for its plain `grok-imagine-video-1.5` slug on 2026-06-01; no
   first-party page explains the relationship between the two aliases.
5. **Is caller-supplied reference audio available to ordinary API accounts?** The REST schema says
   yes; the guide says trusted partners only.
6. **How do `us-east-1` / `us-saltlake-2` relate to the `us.api.x.ai` regional endpoint that serves
   no video APIs?** Two first-party statements that appear to describe different systems.
7. **Which xAI snapshot do the hosts proxy,** and will Replicate ever leave the preview-era surface
   (I2V only, 480p/720p)?
8. **How good is 1.5?** No benchmark, arena, or independent measurement was captured. The vendor's
   quality claims and Replicate's artefact warning are the only quality statements, and they are
   unquantified and unsourced respectively.
9. **What are xAI's output-licensing terms?** Not captured; `x.ai` blocked the legal pages.
10. **Does keyframe adherence hold?** xAI says the video "passes through that exact image at that
    time"; nothing measures it.

## Evidence status

**No direct tests were run for this page.** No video was generated, no refusal was provoked, and no
latency, frame rate, or quality figure was reproduced. Everything above is documentation, host
metadata, or arithmetic on published price schedules, all read on 2026-10-26.

Evidence floor: **met.** First-party: twelve xAI records — the 2026-06-16 GA announcement, three
model pages, the video generation guide, the reference-to-video and image-to-video guides, the REST
videos reference and the cost-tracking page, plus the pre-existing Imagine overview, video overview,
pricing, release-notes and security-FAQ captures. Independent hosts: fal (catalogue metadata, three
OpenAPI schemas, host price strings) and Replicate (README, input schema, price, version dates, one
embedded prediction log with the upstream xAI response). Plus one negative weights search on Hugging
Face.

Strengths of this evidence base:

- **A day-precise first-party GA date** (2026-06-16) and a first-party dated snapshot alias
  (2026-05-30), which is unusual for this roster — most rows rest on month-level changelogs.
- **A first-party capability matrix** that separates the three video tiers row by row, and a full
  parameter reference for the model.
- **A logged xAI response**, captured through a host, that converts a published price argument into
  a measured one: 7,100,000,000 `cost_in_usd_ticks` for a 5-second 720p clip.

Weaknesses, stated plainly:

- **The announcement is marketing with one number in it**, and that number describes a consumer
  product tier rather than the API model.
- **No independent evaluation of any kind** — no benchmark, no arena, no third-party review — so
  every quality statement on this page is either xAI's or a host's.
- **The price schedule is still an inference.** One logged request at one resolution supports the
  resolution-tiered reading; it does not establish the 480p or 1080p rates, and xAI's own pages
  remain inconsistent about whether tiers exist.
- **The only latency and billing figures come from a single run of a single prompt**, made by the
  vendor's own account on 2026-06-01 — early in the model's GA life, not a sample.
- **fal's metadata API was rate-limited** throughout the capture, so endpoint `updated_at` and any
  richer per-endpoint documentation were not recorded.
- **Legal terms were unreachable**, so output licensing is unstated rather than "restricted".

The next useful evidence would be: a fixed prompt set run on xAI and on fal at 480p/720p/1080p with
matched durations to settle which price schedule applies and to record the delivered file's frame
rate and audio channels; a first-frame/last-frame/keyframe pair to check pin adherence; a 14-image
plus 3-voice reference request to see whether the vendor ceiling holds in practice; a refusal probe
on both routes with fal's safety checker on and off; and a 15-second generation to test the host's
artefact warning.
