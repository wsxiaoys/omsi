# LTX-2.5

Lightricks' open-weights audio-video model, released on **2026-08-11** as open weights and as a hosted
API on the same day ([release notes](../../sources/ltx.io/ltx-release-notes/2026-10-26.md)). It is a
22B asymmetric dual-stream diffusion transformer that generates synchronized video and audio in one
pass, and it is the third release in the LTX-2 line, after LTX-2 (January 2026, ~19B) and LTX-2.3
(March 2026, 22B) ([llm-info](../../sources/ltx.io/ltx-llm-info/2026-10-26.md),
[HF model card](../../sources/huggingface.co/ltx-2-5-model-card/2026-10-26.md)).

The hosted surface is deliberately narrow: text-to-video, image-to-video and audio-to-video, in Fast and
Pro variants, at 720p–4K, 24/25/48/50 fps, and 6–20 second durations
([API models doc](../../sources/ltx.io/ltx-2-5-api-models-doc/2026-10-26.md)). It has **no retake, no
extend, no reframe and no HDR endpoint** — those remain LTX-2.3 Pro features — even though the vendor's
own fact sheet lists them as LTX-2.5 workflows.

It is inside the roster's one-year window: 2026-08-11 is after 2025-10-26. The roster label "LTX 2.5"
is a spaced rendering of the vendor's "LTX-2.5"; there is no separate "LTX 2.0" — the January 2026
release is named **LTX-2**.

## Identity

- **Canonical name:** LTX-2.5. The vendor's model page is titled "LTX-2.5: LTX's Latest AI Open-Source
  Foundation Model", the API documentation page is titled "LTX-2.5", and the weights repository is
  `Lightricks/LTX-2.5` ([model page](../../sources/ltx.io/ltx-2-5-model-page/2026-10-26.md),
  [API models doc](../../sources/ltx.io/ltx-2-5-api-models-doc/2026-10-26.md),
  [HF model card](../../sources/huggingface.co/ltx-2-5-model-card/2026-10-26.md)).
- **Vendor:** LTX, the model business unit created when Lightricks split into LTX (models and
  infrastructure) and its consumer-apps business in June 2026. Headquartered in Jerusalem; the weights
  are published under the `Lightricks` organisation on Hugging Face and `Lightricks/LTX-2` on GitHub
  ([llm-info](../../sources/ltx.io/ltx-llm-info/2026-10-26.md)). The roster's vendor column says
  "Lightricks", which is the parent brand and the code-hosting organisation; the product brand is LTX.
- **Aliases and IDs:** "LTX 2.5" (roster, Replicate page title), "Ltx 2.5 …" (fal display names),
  API model IDs `ltx-2-5-fast` and `ltx-2-5-pro`.
- **Siblings, not aliases:** LTX-2 (January 2026), LTX-2.3 (March 2026), LTXV / LTX-Video (2024–2025).
  The vendor says "LTX, LTXV, LTX Model, LTX-2, LTX-2.3 and LTX-2.5 all refer to the same model family"
  but also gives each its own parameter count, checkpoint names and support window, so they are
  versions of one family and separate model entities.

| Route | Identifier | What it serves |
| --- | --- | --- |
| LTX API (vendor) | `POST /v2/{text,image,audio}-to-video` with `model: ltx-2-5-fast` / `ltx-2-5-pro` | T2V, I2V, A2V, 720p–4K |
| fal | `lightricks/ltx-2.5/{text-to-video,image-to-video,audio-to-video}/{fast,pro}` | six endpoints, published 2026-08-11 |
| Replicate | `lightricks/ltx-2.5-fast` | Fast only; no Pro, no `lightricks/ltx-2.5` |
| Open weights | `Lightricks/LTX-2.5` on HF (gated), plus `…-Diffusers` and IC-LoRA repos | split safetensors pack |
| LTX Desktop / LTX Studio | LTX-2.5 as the engine | local editor and web app respectively |

Sources: [API pricing](../../sources/ltx.io/ltx-2-5-api-pricing/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/ltx-2-5-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/ltx-2-5-fast/2026-10-26.md),
[HF model card](../../sources/huggingface.co/ltx-2-5-model-card/2026-10-26.md).

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-01-06 | LTX-2 paper submitted (14B video + 5B audio) | [arXiv](../../sources/arxiv.org/ltx-2-2601-03233/2026-10-26.md) |
| 2026-03-05 | LTX-2.3 ships in the API (`ltx-2-3-fast`, `ltx-2-3-pro`) | [release notes](../../sources/ltx.io/ltx-release-notes/2026-10-26.md) |
| 2026-03-26 | LTX-2.3 open weights: 22B, 4K/50 fps, 20 s, 24 kHz stereo | [release notes](../../sources/ltx.io/ltx-release-notes/2026-10-26.md) |
| 2026-08-10 | Replicate creates `lightricks/ltx-2.5-fast` (version `74e7b8d…`) | [Replicate](../../sources/replicate.com/ltx-2-5-fast/2026-10-26.md) |
| **2026-08-11** | **LTX-2.5 released**: "LTX-2.5" (open source) and "LTX-2.5 API" changelog entries | [release notes](../../sources/ltx.io/ltx-release-notes/2026-10-26.md) |
| 2026-08-11 | fal publishes all six LTX-2.5 endpoints (`date` 14:24–14:40 UTC) | [fal catalogue](../../sources/fal.ai/ltx-2-5-catalogue/2026-10-26.md) |
| 2026-08-18 | LTX-2.5 enters the Artificial Analysis arena (`introducedAt`) | [AA](../../sources/artificialanalysis.ai/ltx-2-5-video-arena/2026-10-26.md) |
| 2026-10-13 | API pricing page last modified (sitemap `lastmod`) | [API pricing](../../sources/ltx.io/ltx-2-5-api-pricing/2026-10-26.md) |
| 2026-10-26 | V1 synchronous API endpoints stop working (23:59 UTC) | [V1 reference](../../sources/ltx.io/ltx-2-5-api-text-to-video-reference/2026-10-26.md) |

The 2026-08-11 date is corroborated three ways: the vendor changelog, fal's endpoint `date` fields, and
Artificial Analysis's `releaseDate`. Replicate's version is dated one day earlier, which is consistent
with pre-launch staging rather than a separate release.

### Identity wrinkles worth recording

1. **The roster's fal identifier is a group, not an endpoint.** `lightricks/ltx-2.5` resolves in fal's
   catalogue API but returns no metadata and no OpenAPI schema
   ([fal catalogue](../../sources/fal.ai/ltx-2-5-catalogue/2026-10-26.md)). The callable endpoints are
   the six task/tier combinations.
2. **fal mislabels its Pro text-to-video endpoint** "Ltx 2.5 Text to Video Fast" while its group label
   reads "Text to Video (Pro)" and its description says "quality-optimized". The endpoint ID is
   correct; the display name is wrong.
3. **The vendor's llm-info page overstates the API surface.** It lists retake, extend, SDR→HDR and
   LipDub as LTX-2.5 workflows ([llm-info](../../sources/ltx.io/ltx-llm-info/2026-10-26.md)); the API
   documentation marks retake and extend unavailable on both 2.5 variants and the price list carries no
   2.5 card for them. Those capabilities are reachable through self-hosted IC-LoRAs and the LTX Trainer,
   not through the hosted API.
4. **"LTX-2" and "LTX-2.0" are the same thing**; nothing in the corpus uses "2.0". "LTX-2.5" is not
   "LTX-2" plus a point release in any mechanical sense — it is a full retrain with a new decoder and a
   new text encoder.

## Current assessment

LTX-2.5 is a **distinct model, not a repackaging of LTX-2.3**. The changelog and model card agree on four
architectural changes: a diffusion-based video decoder replacing plain VAE reconstruction, a custom
Gemma 4 12B text encoder with a prompt enhancer, native multi-shot generation, and an optional duration
predictor ([release notes](../../sources/ltx.io/ltx-release-notes/2026-10-26.md),
[HF model card](../../sources/huggingface.co/ltx-2-5-model-card/2026-10-26.md)). Checkpoint file names
change accordingly (`ltx-2.5-22b-distilled-transformer`, `gemma4-12b-with-proj-ltx-2.5`,
`ltx-2.5-duration-head`), and the vendor says "the large majority of LoRAs and IC-LoRAs trained on
LTX-2.3 run on LTX-2.5 without changes" — an explicit continuity claim that also concedes some
adapters break.

It is **current, not deprecated**. The vendor states plainly that "LTX-2.3 has been superseded by
LTX-2.5 (current release, August 2026)"
([llm-info](../../sources/ltx.io/ltx-llm-info/2026-10-26.md)), and 2.5 is the model behind the flagship
API, LTX Desktop and LTX Studio. No deprecation notice exists for LTX-2 or LTX-2.3 anywhere in the
captured changelog.

It is also, as of capture, a **capability regression on the API relative to its predecessor**. LTX-2.3
Pro offers retake, extend, reframe and SDR→HDR endpoints; LTX-2.5 offers none of them
([API models doc](../../sources/ltx.io/ltx-2-5-api-models-doc/2026-10-26.md),
[API pricing](../../sources/ltx.io/ltx-2-5-api-pricing/2026-10-26.md)). fal reflects this exactly: 30+
LTX-2.3 endpoints including inpaint, outpaint, deblur, colorization and clean-plate, against six
LTX-2.5 endpoints ([fal catalogue](../../sources/fal.ai/ltx-2-5-catalogue/2026-10-26.md)). Anyone who
needs in-model editing still has to call 2.3 Pro.

The independent quality evidence is mid-table and improving. On Artificial Analysis's audio-enabled
boards LTX-2.5 sits 19th (Fast, Elo 984) and 21st (Pro, 958) on image-to-video, and 24th (Fast, 949) and
25th (Pro, 944) on text-to-video — 156–230 Elo below the leaders, and clearly behind MiniMax H3,
which AA names the leading open-weights model on both boards
([AA](../../sources/artificialanalysis.ai/ltx-2-5-video-arena/2026-10-26.md)). Against its own
predecessor the step is real: +81 Elo over LTX-2.3 Pro on image-to-video and +63 on text-to-video, on
samples of 2,300–3,700 votes each. That is the strongest quantitative statement the evidence supports,
and it is a statement about preference ranks, not about resolution, audio quality or multi-shot
consistency.

Two things the evidence does **not** support. First, no source measures the multi-shot claim — no shot
count, no cut control, no continuity metric. Second, no source compares LTX-2.5's 4K or HDR output with
anything; the only independent evaluation ran at 4K generation with a 1080p rendition served to the
arena, per AA's own note.

## Documented capabilities

All of the following is vendor or host documentation. No direct tests were run for this page.

### Output envelope

| | `ltx-2-5-fast` | `ltx-2-5-pro` |
| --- | --- | --- |
| Tasks | T2V, I2V, A2V | T2V, I2V, A2V |
| Resolutions | 720p, 1080p, 1440p, 4K | 720p, 1080p, 1440p, 4K |
| Frame rates | 24, 25, 48, 50 | 24, 25, 48, 50 |
| Durations | 6–20 s at 720p/1080p with 24/25 fps; 6–10 s at 48/50 fps and at 1440p/4K | 6, 8, 10 s only |
| Aspect ratios | 16:9, 9:16, 1:1, 3:2, 2:3 | same |
| Audio | generated jointly, on by default | same |
| Container | MP4 | MP4 |

Source: [API models doc](../../sources/ltx.io/ltx-2-5-api-models-doc/2026-10-26.md). Durations are a
closed ladder — 6, 8, 10, 12, 14, 16, 18, 20 — not an arbitrary range. Replicate's own schema adds 2, 3,
4 and 5 s to that ladder ([Replicate](../../sources/replicate.com/ltx-2-5-fast/2026-10-26.md)), which
the vendor does not offer.

Pixel dimensions are documented per aspect ratio, e.g. 1080p 16:9 = 1920×1080, 1:1 = 1080×1080, 3:2 =
1620×1080; 4K 16:9 = 3840×2160, 2:3 = 2160×3240 (same record).

### Inputs and controls

- **Text-to-video** takes `prompt`, `duration` (required, nullable), `resolution`, `fps`,
  `generate_audio` (default `true`), and `camera_motion`
  ([V1 T2V reference](../../sources/ltx.io/ltx-2-5-api-text-to-video-reference/2026-10-26.md)).
- **Image-to-video** adds `image_uri` and `last_frame_uri`; with both set the model interpolates between
  the frames.
- **Audio-to-video** takes `audio_uri` (2–20 s on Fast at 720p/1080p, 2–10 s otherwise), an optional
  `image_uri` first frame, an optional `last_frame_uri`, an optional `prompt`, and `camera_motion`; the
  output length is set by the audio, and the default model on this endpoint is still `ltx-2-3-pro`, so
  2.5 must be requested explicitly
  ([A2V reference](../../sources/ltx.io/ltx-2-5-api-audio-to-video-reference/2026-10-26.md)).
- **`camera_motion`** is an eight-value enum: `dolly_in`, `dolly_out`, `dolly_left`, `dolly_right`,
  `jib_up`, `jib_down`, `static`, `focus_shift`. No source describes what each does beyond its name.
- **Silent video** is available everywhere via `generate_audio: false`.
- **Automatic duration** is opt-in by sending `"duration": null`, and it is explicitly incompatible with
  `last_frame_uri` on image-to-video: "A last frame fixes where the clip has to end, which requires a
  known length" ([API models doc](../../sources/ltx.io/ltx-2-5-api-models-doc/2026-10-26.md)).

### What is *not* there

- **No reference-image or multi-reference conditioning on any hosted endpoint.** The only image inputs
  are a first frame and a last frame. Character and style consistency through reference sheets is an
  IC-LoRA / LTX Trainer workflow on self-hosted weights, and no captured page documents it as an API
  parameter. This is the sharpest contrast with Seedance 2.5 and Wan 3.0, which accept large mixed-modal
  reference sets.
- **No `seed`.** Not in the vendor request schema, not in any fal schema captured, not in Replicate's
  schema. Reproducibility is undocumented on every route.
- **No `negative_prompt`** on the hosted API (the Diffusers example passes `DEFAULT_NEGATIVE_PROMPT`,
  which is a client-side constant).
- **No retake, extend, reframe, inpaint, or HDR endpoint** for LTX-2.5.

### Audio

Audio is generated jointly with video rather than added afterwards. The vendor's own summary is that the
model "generates synchronized audio and video in a single model pass" and "produces temporally
synchronized 24 kHz stereo audio jointly with video"
([llm-info](../../sources/ltx.io/ltx-llm-info/2026-10-26.md)). The architecture predates 2.5: the release
notes say LTX-2.3 already produced "synchronized audio and video in a single forward pass" with
"stereo audio at 24 kHz" ([release notes](../../sources/ltx.io/ltx-release-notes/2026-10-26.md)), and the
LTX-2 paper describes a dedicated 5B audio stream coupled to the 14B video stream by bidirectional
cross-attention ([arXiv](../../sources/arxiv.org/ltx-2-2601-03233/2026-10-26.md)).

Neither fal nor Replicate documents the audio sample rate, channel count, or codec of the delivered MP4,
and no captured page says whether audio-to-video re-emits the input track alongside generated audio or
replaces it. Treat 24 kHz stereo as a vendor claim about the model, not a measured property of host
output.

### Multi-shot

The headline 2.5 feature. Vendor wording: "generates multiple connected shots while preserving
character, environment, lighting, voice, style, and continuity across cuts"
([release notes](../../sources/ltx.io/ltx-release-notes/2026-10-26.md)), and "previous versions produced
a single continuous shot" ([HF model card](../../sources/huggingface.co/ltx-2-5-model-card/2026-10-26.md)).
The API documentation adds that a "multi-shot sequence runs longer" under automatic duration
([API models doc](../../sources/ltx.io/ltx-2-5-api-models-doc/2026-10-26.md)).

No source states how many shots a generation can contain, whether shot boundaries can be requested, or
how reliably cuts appear. The prompt guide was not captured.

### Marketing claims (labelled as claims)

- "industry-leading pixel quality that holds up frame by frame, even on a cinema screen" — Diffusion
  Fidelity Rendering ([model page](../../sources/ltx.io/ltx-2-5-model-page/2026-10-26.md)).
- "Self-hosted on 2× GB200 GPUs at 720p, LTX-2.5 generates a 10-second video clip in 6.8 seconds" (same
  page) — no baseline, no comparison model, no methodology.
- "up to 50% less cost per second and up to 30× faster at scale" ([API overview](../../sources/ltx.io/ltx-2-5-api-overview/2026-10-26.md))
  — no comparison set named.
- "Ranked Top #3 AI video models globally by Artificial Analysis", "#1 open source video model",
  "roughly one-eighth the cost and one-seventh the render time of comparable closed models, based on
  independent benchmarking" ([llm-info](../../sources/ltx.io/ltx-llm-info/2026-10-26.md)). The captured
  AA boards place LTX-2.5 19th–25th overall and second among open-weights families, so the top-3 and #1
  claims are stale at best; the 1/8-cost claim names no comparison set.

## Limitations and constraints

- **The API is generation-only.** Retake, extend, reframe and HDR are LTX-2.3 Pro features; LTX-2.5's
  hosted surface stops at three generation tasks
  ([API models doc](../../sources/ltx.io/ltx-2-5-api-models-doc/2026-10-26.md)). The vendor's llm-info
  page contradicts this by listing those workflows under 2.5, and that contradiction is unresolved.
- **The synchronous V1 API is being withdrawn on the capture date.** "After October 26, 2026 at 11:59 PM
  UTC, requests to this endpoint will no longer work"; V2 returns `202 Accepted` and a job id to poll
  ([V1 reference](../../sources/ltx.io/ltx-2-5-api-text-to-video-reference/2026-10-26.md),
  [migration guide](../../sources/ltx.io/ltx-api-migrate-v1-to-v2/2026-10-26.md)). Any integration
  written against `/v1/*` stops working on the day this page was captured — 76 days after LTX-2.5
  launched.
- **Automatic duration holds credit against the maximum, not the actual length.** "A request that would
  have produced 6 seconds is still declined if you cannot cover 20 on `ltx-2-5-fast`, or 10 on
  `ltx-2-5-pro`" ([API models doc](../../sources/ltx.io/ltx-2-5-api-models-doc/2026-10-26.md)).
- **Pro is capped at 10 seconds at every resolution**, and Fast only reaches 20 s at 720p/1080p with
  24/25 fps. There is no 20-second 4K option on any tier.
- **Host envelopes are narrower than the vendor's.** fal's Pro endpoints stop at 1080p and 10 s and drop
  the 48 fps option; fal exposes only 16:9 and 9:16, not the 1:1/3:2/2:3 the vendor supports
  ([fal catalogue](../../sources/fal.ai/ltx-2-5-catalogue/2026-10-26.md)). Replicate exposes only Fast,
  with no `camera_motion` and no automatic duration
  ([Replicate](../../sources/replicate.com/ltx-2-5-fast/2026-10-26.md)).
- **Weights are gated on Hugging Face.** The repository is `"gated": "auto"`: download requires an
  authenticated account that has accepted the licence, and `raw/main/LICENSE` returns HTTP 401 to
  anonymous requests ([HF model card](../../sources/huggingface.co/ltx-2-5-model-card/2026-10-26.md)).
- **Hardware guidance contradicts itself.** The model page advertises "Min VRAM: 16GB"; the llm-info
  page says the full dev model needs "80GB+ VRAM", distilled and FP8 variants "support 32GB", and one
  configuration runs "with as little as 12GB VRAM"
  ([model page](../../sources/ltx.io/ltx-2-5-model-page/2026-10-26.md),
  [llm-info](../../sources/ltx.io/ltx-llm-info/2026-10-26.md)). No source reconciles them.
- **Open-weights framing rules.** `num_frames % 8 == 1` and both dimensions divisible by 32; the
  Diffusers example runs 960×544 at 24 fps for 121 frames (about 5 s) and upscales 2× in a second stage
  ([HF model card](../../sources/huggingface.co/ltx-2-5-model-card/2026-10-26.md)).
- **Input limits.** Images PNG/JPEG/WEBP up to 15 MB by URL or 7 MB inline; audio WAV/MP3/M4A/OGG up to
  32 MB; the whole JSON body is capped at 32 MB; HTTPS inputs must be public, redirect-free, with a
  correct `Content-Type`; PCM audio is rejected
  ([input formats](../../sources/ltx.io/ltx-api-input-formats/2026-10-26.md)).
- **Moderation is a status code, not a policy.** The only first-party statement is the `422` response:
  "Content rejected by safety filters"
  ([V1 reference](../../sources/ltx.io/ltx-2-5-api-text-to-video-reference/2026-10-26.md)). No
  acceptable-use policy, threshold, or refusal taxonomy was captured. fal exposes
  `enable_safety_checker` (default `true`) on its audio-to-video Fast endpoint, with "authorized callers
  may set false to request relaxed screening" ([fal catalogue](../../sources/fal.ai/ltx-2-5-catalogue/2026-10-26.md)).
- **No published quality limitation from the vendor beyond boilerplate.** The model card's limitations
  are generic ("not intended or able to provide factual information", "may fail to generate videos that
  match the prompt perfectly", "may generate content that is inappropriate or offensive"). No LTX source
  volunteers a list of known failure modes or a measured weakness.
- **No seed, so no reproducibility**, and Replicate runs "cannot be cancelled"
  ([Replicate](../../sources/replicate.com/ltx-2-5-fast/2026-10-26.md)).

## Access, pricing, licensing

Four routes with materially different prices and envelopes.

### LTX API (vendor) — per second, USD

| | 720p | 1080p | 1440p | 4K |
| --- | --- | --- | --- | --- |
| `ltx-2-5-fast` (T2V, I2V, A2V) | $0.09 | $0.13 | $0.19 | $0.30 |
| `ltx-2-5-pro` (T2V, I2V, A2V) | $0.12 | $0.17 | $0.25 | $0.39 |
| `ltx-2-3-fast` (for contrast) | $0.03 | $0.06 | $0.12 | $0.24 |
| `ltx-2-3-pro` (for contrast) | $0.04 | $0.08 | $0.16 | $0.32 |

Source: [API pricing](../../sources/ltx.io/ltx-2-5-api-pricing/2026-10-26.md). Billing basis: "per second
of generated video" for T2V and I2V, "per second of input audio" for A2V; no request fees; portrait and
landscape priced identically. LTX-2.5 Fast costs **3× the LTX-2.3 Fast rate at 720p, 2.2× at 1080p,
1.6× at 1440p and 1.25× at 4K** — the upgrade premium is real and largest at the cheap end.

### fal — per second, USD (pass-through)

Text-to-video and image-to-video Fast: "**$0.09 at 720p**, **$0.13 at 1080p**, **$0.19 at 1440p**, and
**$0.30 at 4K**. Native audio is included at every resolution. For example, a 10-second video at 1080p
costs $1.30." Pro: "**$0.12** per second for 720p or **$0.17** per second for 1080p." Audio-to-video
Fast: "**$0.13 per second of input audio at 1080p**"
([fal catalogue](../../sources/fal.ai/ltx-2-5-catalogue/2026-10-26.md)).

These are the vendor's own rates, unchanged. fal's value is convenience and schema, not price — and it
withholds Pro above 1080p, so the 1440p and 4K Pro tiers are vendor-API-only.

### Replicate — per second, USD

| 720p | 1080p | 2k | 4k |
| --- | --- | --- | --- |
| $0.03 | $0.06 | $0.12 | $0.24 |

Source: [Replicate](../../sources/replicate.com/ltx-2-5-fast/2026-10-26.md). This is **one third of the
vendor's Fast rate at 720p, rising to four fifths at 4K**, and the whole ladder is numerically identical
to the vendor's **LTX-2.3 Fast** price list. Whether that is a deliberate discount, a stale 2.3 table, or
a different billing basis is not stated anywhere captured. On published numbers, Replicate is by far
the cheapest route to LTX-2.5 output; on evidence, it is also the least explained.

### Comparing routes

For 10 seconds of 1080p output: vendor $1.30 (Fast) or $1.70 (Pro); fal $1.30 (Fast) or $1.70 (Pro);
Replicate $0.60 (Fast only). For 10 seconds of 4K: vendor $3.00 / $3.90; fal $3.00 (Fast only);
Replicate $2.40. These are arithmetic on published schedules at one configuration, not quotes; they
exclude credit-hold requirements, queue limits and any volume terms.

### Weights and licensing

- **Licence: the LTX-2.x Community License Agreement**, tagged as `ltx-2.x-community-license-agreement`
  on the HF repository. The vendor states it is "not Apache 2.0" and that commercial self-hosted use is
  free for organisations "under $10 million in annual revenue", measured across the whole entity, with a
  paid commercial agreement required above that
  ([HF model card](../../sources/huggingface.co/ltx-2-5-model-card/2026-10-26.md),
  [llm-info](../../sources/ltx.io/ltx-llm-info/2026-10-26.md),
  [licensing page](../../sources/ltx.io/ltx-model-license/2026-10-26.md)).
- **No mandatory branding**, per the vendor, and "transfer of fine-tunes may require a paid license".
- **The binding licence text was not captured.** The HF repository is gated and `LICENSE` returned 401
  to anonymous requests, so the terms above are the vendor's summaries, not the licence itself.
- **fal's `license_type: "commercial"`** is fal's statement about use through fal, not an LTX licence
  grant ([fal catalogue](../../sources/fal.ai/ltx-2-5-catalogue/2026-10-26.md)).
- **Output ownership, indemnity, and training-data provenance are undocumented** in every captured
  source.
- **Adoption signal:** 2,117,147 downloads in the last month on the HF repository, 74 Spaces using it,
  and a model tree of 39 adapters, 36 finetunes and 38 quantisations
  ([HF model card](../../sources/huggingface.co/ltx-2-5-model-card/2026-10-26.md)) — a large
  fine-tuning ecosystem for a model released eleven weeks earlier.

## Differences from LTX-2 and LTX-2.3

| | LTX-2 (Jan 2026) | LTX-2.3 (Mar 2026) | LTX-2.5 (Aug 2026) |
| --- | --- | --- | --- |
| Parameters | ~19B (14B video + 5B audio) | 22B | 22B |
| Text encoder | "multilingual text encoder" (paper) | 4× larger text connector than LTX-2 | Gemma 4 12B + prompt enhancer |
| Video decode | VAE | redesigned high-fidelity VAE | diffusion video decoder |
| Max resolution | not stated in captured sources | 4K | 4K |
| Max fps | not stated | 50 (24 and 48 offered as options) | 50 |
| Max duration | not stated | 20 s | 20 s (Fast, 720p/1080p 24–25 fps); 10 s otherwise |
| Audio | joint generation (sample rate not captured) | 24 kHz stereo, HiFi-GAN vocoder | joint, 24 kHz stereo claimed |
| Multi-shot | no — "single continuous shot" | no | **yes (claimed)** |
| Auto duration | no | no | **yes** |
| Hosted editing | none | retake, extend, reframe, HDR (Pro) | **none** |

Sources: [arXiv](../../sources/arxiv.org/ltx-2-2601-03233/2026-10-26.md),
[release notes](../../sources/ltx.io/ltx-release-notes/2026-10-26.md),
[llm-info](../../sources/ltx.io/ltx-llm-info/2026-10-26.md),
[API models doc](../../sources/ltx.io/ltx-2-5-api-models-doc/2026-10-26.md).

The important correction to the marketing narrative: **4K, 50 fps, 20 seconds and 24 kHz stereo audio
are LTX-2.3 features, not LTX-2.5 features.** The March 2026 changelog entry claims all four for 2.3.
What 2.5 adds is the decoder, the text encoder, multi-shot, auto-duration and a better distilled model —
and it removes the hosted editing endpoints.

## Unresolved questions

1. **Why does Fast outscore Pro on both AA boards** (984 vs 958 on i2v, 949 vs 944 on t2v) when the
   vendor positions Pro as the higher-fidelity tier? Intervals overlap, so the honest reading is "no
   measurable difference", but the point estimates are the wrong way round and no source explains it.
2. **Is Replicate's price a discount or a stale table?** Its four rates are exactly the vendor's
   LTX-2.3 Fast rates. A deliberate loss-leader, a copy-paste from 2.3, and a different billing metric
   are all consistent with the evidence.
3. **Which checkpoint does the API serve** — the dev transformer or the distilled one? The vendor
   exposes `ltx-2-5-fast` and `ltx-2-5-pro`, which map naturally onto distilled and dev, but no captured
   source says so.
4. **Are multi-shot cuts controllable?** "Native multishot" is claimed by the vendor and restated by the
   docs, with no shot count, no boundary parameter and no example.
5. **Will retake and extend come to 2.5**, or is the vendor's llm-info list simply wrong? The support
   matrix and price list say no; the fact sheet says yes.
6. **What happens to the input audio in audio-to-video** — is it re-emitted, replaced, or mixed with
   generated audio? Neither the reference nor the hosts say.
7. **Is generation seeded at all?** No route exposes a seed, so reproducibility is unknown rather than
   merely undocumented.
8. **16 GB or 80 GB of VRAM?** The model page's "Min VRAM: 16GB" and the llm-info page's "80GB+ for the
   full model" are both vendor statements.
9. **How much of the AA improvement is the decoder and how much is the text encoder?** The +81/+63 Elo
   step is a package deal; no ablation exists in the public corpus.
10. **Does the delivered MP4 carry 24 kHz stereo audio on every host?** Only the vendor's model-level
    claim was captured; no host documents the audio format.

## Evidence status

Evidence floor: **met.** First-party: eleven LTX documents (model page, API overview, API pricing, API
models doc, T2V reference, A2V reference, input formats, V1→V2 migration guide, release notes, licensing
page, and the llm-info fact sheet), the `Lightricks/LTX-2.5` Hugging Face model card, and the LTX-2
arXiv paper. All captured 2026-10-26. Independent hosts: fal (catalogue metadata for all six endpoints,
OpenAPI schemas for five of them, and each endpoint's published price strings) and Replicate
(`lightricks/ltx-2.5-fast` README, schema, billing tiers, version metadata).
Third-party evaluation: Artificial Analysis AA-Video-I2V v1.1 and AA-Video-T2V v2.1.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; price statements are published schedules;
quality statements are Artificial Analysis's Elo scores or the vendor's own marketing.

Two access notes that shape the evidence: the vendor's API documentation site (`docs.ltx.io`) served
normally and is the best first-party source on this page, while the older `docs.ltx.video` host returned
a Cloudflare challenge; and the Hugging Face repository is gated, so the licence text and the raw card
markdown could not be read.

The next useful evidence would be a small reproducible test set against named endpoints and dates: the
same prompt at 720p/1080p/1440p/4K on Fast and Pro to test the AA inversion in question 1; a
`duration: null` request to see how length tracks prompt complexity; a two-shot prompt to check whether
cuts appear and whether they can be steered; a first-and-last-frame interpolation to check frame
adherence; an audio-to-video run with speech to check lip-sync and whether the input track survives; and
a `ffprobe` of the delivered file to settle the audio sample rate and channel count.
