# Wan 3.0

Alibaba's Wan 3.0 is a closed-weights, all-in-one video generation model released through Alibaba Cloud
Model Studio as two IDs: `wan3.0-video` (standard) on 2026-08-06 and `wan3.0-video-prime` ("high-speed
version", priced at 2×) on 2026-08-20
([changelog](../../sources/alibabacloud.com/wan3-model-changelog/2026-10-26.md)). One model name covers
text-to-video, image-to-video with first-frame or first-and-last-frame control, multimodal
reference-to-video (up to 10 images, 5 video clips, 5 audio clips, plus one document or public web page),
video editing and video extension. Output is 2–30 seconds at 480P/720P/1080P, 30 fps, MP4/H.264, with
dialogue, music and sound effects generated in the same pass
([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md),
[user guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md)).

Both dates fall inside the roster's one-year window (after 2025-10-26), so this is not a specialist
exception. Wan 3.0 is a new generation line, not a rename of Wan 2.x: the IDs are new and undated, the
duration ceiling doubles from Wan 2.7's 2–15 s, and the reference set gains documents and web pages
([fal FAQ](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md)).

## Identity

- **Canonical names and IDs:** `wan3.0-video` and `wan3.0-video-prime`, as used by Alibaba Cloud Model
  Studio in its API reference, price list and changelog
  ([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md),
  [pricing](../../sources/alibabacloud.com/wan3-model-pricing/2026-10-26.md),
  [changelog](../../sources/alibabacloud.com/wan3-model-changelog/2026-10-26.md)). No dated checkpoint
  suffix (`-2026-xx-xx`) is published for either ID, unlike `wan2.7-t2v-2026-06-12`.
- **Vendor:** Alibaba. fal attributes the family to "Alibaba's Tongyi Lab, the team behind Wan 2.1
  through Wan 2.7" ([fal landing](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md)); the Alibaba
  Cloud pages do not name a team.
- **Aliases:** "Wan 3.0" and "Wan 3" (fal's landing page and catalogue), "Wan 3.0 Prime" (fal, Replicate),
  "Wan3.0-Video" / "Wan3.0-Video-Prime" (Alibaba Cloud changelog prose). The roster label "Wan 3.0"
  matches first-party naming.

| Tier | Alibaba Cloud ID | fal endpoints | Replicate |
| --- | --- | --- | --- |
| Standard | `wan3.0-video` | `alibaba/wan-3.0/{text-to-video,image-to-video,reference-to-video}` | `alibaba/wan-3` |
| Prime | `wan3.0-video-prime` | `alibaba/wan-3.0-prime/{text-to-video,image-to-video,reference-to-video}` | `alibaba/wan-3-prime` |

Sources: [fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md),
[Replicate standard](../../sources/replicate.com/wan-3/2026-10-26.md),
[Replicate prime](../../sources/replicate.com/wan-3-prime/2026-10-26.md).

- **Regions:** Singapore, China (Beijing), US (Virginia), Japan (Tokyo), Germany (Frankfurt) and China
  (Hong Kong), each with its own endpoint host; cross-region calls fail
  ([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)).
  Only Singapore carries a free quota ([pricing](../../sources/alibabacloud.com/wan3-model-pricing/2026-10-26.md)).
- **Siblings:** Wan 2.1, 2.2, 2.5, 2.6 and 2.7 video models, plus the Wan-Animate, Wan-Dancer and
  Wan-VACE derivatives
  ([fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md),
  [GitHub index](../../sources/github.com/wan-video-repo-index/2026-10-26.md)). Wan 3.0 has no image,
  audio or 3D sibling at capture — the only Wan 3.0 IDs in the Model Studio price list are the two video
  models ([pricing](../../sources/alibabacloud.com/wan3-model-pricing/2026-10-26.md)).

### Is Wan 3.0 a family with tiers?

Yes, but a thin one: two tiers that share one capability surface and differ on speed and price.

- Alibaba's definition of prime is speed, not capability: "High-speed version with capabilities aligned
  to the standard version, with significantly improved end-to-end speed"
  ([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)),
  repeated in the changelog as "the high-speed version of the Wan3.0 video generation model, with
  capabilities aligned with the Wan3.0-Video standard version"
  ([changelog](../../sources/alibabacloud.com/wan3-model-changelog/2026-10-26.md)).
- Prime costs exactly 2× standard at every resolution in every region
  ([pricing](../../sources/alibabacloud.com/wan3-model-pricing/2026-10-26.md)), which is the opposite of
  the usual "fast tier is cheaper" pattern — a faster model at a higher price.
- The input schemas are field-for-field identical across tiers on fal, including defaults
  ([fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md)). Nothing in the parameter surface
  distinguishes them.

Two further identity wrinkles, recorded rather than resolved:

1. **fal's prime copy describes capability, not just speed.** Its catalogue descriptions say prime
   "combines reference images, videos, and audio into a unified video with fast generation and strong
   multimodal coherence" and "follows character identity, visual style, movement, and sound cues",
   while the standard tier's description is the generic "latest generation AI video model, delivering
   enhanced motion smoothness…" ([fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md)).
   Read literally, fal markets prime as the better model; Alibaba markets it as the faster one at the
   same capability. The two framings cannot both be the whole story, and no source says which.
2. **fal markets only the standard tier.** Its Wan 3 landing page and FAQ describe three endpoints and
   never mention prime ([fal landing](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md)).

### Preview or released?

The API reference says "Currently in preview"
([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)). No
other captured document repeats that label: the changelog lists both IDs as released with no preview,
beta or limited-availability marker, the price list charges full per-second rates with a free quota, and
both independent hosts serve them as public endpoints
([changelog](../../sources/alibabacloud.com/wan3-model-changelog/2026-10-26.md),
[pricing](../../sources/alibabacloud.com/wan3-model-pricing/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md)). Treat "preview" as the API
reference's own caveat — possibly a stale sentence on a page last updated 2026-10-15 — rather than as a
family-wide status. What it would mean operationally (support window, rate limits, breaking changes) is
not stated anywhere captured.

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-08-03 | fal creates the standard-tier endpoint records | [fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md) |
| 2026-08-06 | `wan3.0-video` listed as released, in both the Singapore and Global changelog tables | [changelog](../../sources/alibabacloud.com/wan3-model-changelog/2026-10-26.md) |
| 2026-08-20 | `wan3.0-video-prime` listed as released | [changelog](../../sources/alibabacloud.com/wan3-model-changelog/2026-10-26.md) |
| 2026-08-24 | fal publishes all six endpoints (`publishedAt`) | [fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md) |
| 2026-08-24 | Replicate's first version of `alibaba/wan-3` | [Replicate standard](../../sources/replicate.com/wan-3/2026-10-26.md) |
| 2026-08-26 | Replicate's first version of `alibaba/wan-3-prime` | [Replicate prime](../../sources/replicate.com/wan-3-prime/2026-10-26.md) |
| 2026-09-15 | Both Replicate models get a later version (contents undocumented) | [Replicate standard](../../sources/replicate.com/wan-3/2026-10-26.md), [prime](../../sources/replicate.com/wan-3-prime/2026-10-26.md) |
| 2026-10-11 / 10-15 | Alibaba guide and API reference last updated | [guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md), [API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md) |

fal's endpoint records predate the vendor's own changelog date by three days, and fal published them
publicly on 2026-08-24, eighteen days after the vendor's release row. A staged rollout is one reading;
the vendor never says.

### Wan 2.x versus Wan 3.0

| | Wan 2.1 / 2.2 | Wan 2.5 / 2.6 / 2.7 | Wan 3.0 |
| --- | --- | --- | --- |
| Weights | Apache-2.0 on Hugging Face and GitHub | none published | none published |
| Duration | not captured here | 2–15 s | 2–30 s |
| Hosting type on fal | `serverless` (fal runs the weights) | `proxy` | `proxy` |

Sources: [Hugging Face index](../../sources/huggingface.co/wan-ai-model-index/2026-10-26.md),
[GitHub index](../../sources/github.com/wan-video-repo-index/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md),
[fal FAQ](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md).

The open-weights line stops at Wan 2.2, and fal states this independently: "Alibaba's published Wan
weights currently stop at Wan 2.2 under Apache 2.0, and the releases since then have been commercial API
models" ([fal FAQ](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md)). Wan 2.7 is a *different*
model with a *shorter* ceiling, not a lesser configuration of 3.0, and it keeps one capability 3.0 drops
(audio-driven first-frame generation; see Limitations).

### Unofficial "Wan 3.0" material

Hugging Face carries repositories named `wan-3-0-video` under accounts such as `wanvideo` and
`calamansi`. None belongs to the `Wan-AI` organisation, none contains weights, and the `wanvideo` README
is launch-style prose that redirects readers to `https://wan30.io/` and advertises a "very-low-cost Draft
Mode" ([Hugging Face index](../../sources/huggingface.co/wan-ai-model-index/2026-10-26.md)). No
first-party document mentions a draft mode for Wan 3.0. These pages are recorded as unverified
third-party claims and are not used as evidence for anything on this page.

## Current assessment

The evidence supports Wan 3.0 as a genuinely new model line rather than a repackaging. Four independent
signals agree: a new undated ID set; a duration ceiling that doubles the previous generation; an input
surface that adds documents and web pages to image/video/audio references; and pricing that is new and
per-second rather than the token-based or per-call billing of earlier Wan lines. The vendor's own
one-line summary — "an all-in-one video generation model that uniformly supports multiple creative
functions including reference, editing, replication, and driving"
([changelog](../../sources/alibabacloud.com/wan3-model-changelog/2026-10-26.md)) — matches what the API
actually routes on.

What the evidence does **not** support is any quality claim. No captured document — vendor, fal, or
Replicate — contains a benchmark, an arena result, a comparison against Wan 2.7 or any competitor, or a
measured latency. The only quantitative material anywhere is price and resolution. Replicate's four-line
limitations list is generic host boilerplate, not a test result
([Replicate prime](../../sources/replicate.com/wan-3-prime/2026-10-26.md)).

Status at capture: current, both tiers public on two independent hosts, no deprecation notice, and still
described as "preview" by one vendor page. It is also the priciest Wan video route on the vendor's own
platform at list price: the standard tier's 1080P rate is $0.20/s against $0.15/s for `wan2.7-t2v`, and
the limited-time 30% discount only brings it to $0.14/s
([pricing](../../sources/alibabacloud.com/wan3-model-pricing/2026-10-26.md)) — so "current" does not mean
"default choice".

The practical obstacle is access shape, not capability. The model's distinguishing features —
reference-to-video with documents or web pages, editing, extension, last-frame control — are reachable
only on the vendor API, and only partially on fal: its `reference-to-video` schema accepts the same
reference arrays and the same `file_url`/`web_url` fields, but fal documents no editing or extension
endpoint of its own ([fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md)). Replicate is
narrower still: prompt, an optional first-frame image, a negative prompt and four scalar controls, with
no reference inputs and no audio switch
([Replicate standard](../../sources/replicate.com/wan-3/2026-10-26.md)).

## Documented capabilities

Everything below is vendor or host documentation, not independent testing.

### Output envelope

| | Standard (`wan3.0-video`) | Prime (`wan3.0-video-prime`) |
| --- | --- | --- |
| Resolutions | 480P, 720P, 1080P (default 1080P) | same |
| Duration | 2–30 s; `-1` = smart duration; with video input, input + output ≤ 30 s | same |
| Frame rate | 30 fps | 30 fps |
| Aspect ratios | adaptive (default), 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | same |
| Audio | on by default, `audio=false` disables; price-neutral | same |
| Container | MP4, H.264 | MP4 |
| Videos per request | 1 (`video_count` "Fixed at 1") | 1 |
| Result URL lifetime | 24 hours | 24 hours |

Sources: [API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md),
[guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md).

**Aspect-ratio contradiction:** the API reference and the guide's prompt-tips line both list 21:9, but
the guide's own "Output video" section lists only 16:9, 4:3, 1:1, 3:4, 9:16 and adaptive, and neither
fal's FAQ nor fal's or Replicate's schemas expose 21:9
([guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md),
[fal landing](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md),
[Replicate standard](../../sources/replicate.com/wan-3/2026-10-26.md)). 21:9 is documented in two places
and absent from four; treat it as available on the vendor API only, if at all.

### Tasks and inputs

One model name covers every task; it "automatically routes based on the `type` field in `input.media` and
the prompt intent" ([guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md)).

- **Text-to-video.** Prompt only, no media array.
- **Image-to-video, first frame.** `first_frame` (max 1). No audio input permitted in this mode.
- **Image-to-video, first and last frame.** `first_frame` + `last_frame` (max 1 each).
- **Multimodal reference.** `reference_image` (max 10, ≤20 MB each), `reference_video` (max 5 clips,
  ≤15 s total, ≥16 fps, ≤100 MB each), `reference_audio` (max 5 clips, ≤15 s total, ≤15 MB each),
  combinable in any mix of the three.
- **File or web page to video.** One `file` (docx, doc, xlsx, xls, pptx, ppt, pdf, txt, key, pages,
  numbers, md; ≤100 MB; ≤50 pages) or one `link` (public pages that need no login), combinable with
  reference media. Requires `prompt_extend`/thinking to be on.
- **Video editing.** `reference_video` plus an editing-intent prompt: "Add/remove/modify elements, style
  conversion, lighting editing, dialogue editing".
- **Video extension.** `reference_video` plus extension-intent wording; forward, backward, or both.

Reference assets are addressed positionally in the prompt as "Image 1", "Video 1", "Audio 1", with the
three types counted separately
([guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md)).

**Mode exclusivity is strict.** Frame-control mode and reference mode cannot be combined: "`first_frame`
/`last_frame` and `reference_image`/`reference_video`/`reference_audio`/`file`/`link` types are mutually
exclusive", and mixing them returns the error "The two modes are mutually exclusive"
([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)).
A request that wants both a fixed first frame and a reference character therefore has to choose.

### Audio

Audio is generated jointly with the picture, not dubbed afterwards: the model "natively outputs dialogue,
BGM, and sound effects", and Wan 3.0 "natively generates voice dialogue, ambient sound effects, and
background music without post-production dubbing"
([guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md)). fal describes the
same behaviour as audio "generated in the same pass as the picture, so dialogue, ambience, and on-screen
action land together" ([fal landing](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md)).

Two things are *not* documented: the delivered channel count (no page says mono or stereo), and whether
`reference_audio` reproduces a voice or only its style. The guide's example asks to "extract the voice
characteristics from Audio 1", which suggests style transfer rather than cloning, but it is a prompt
example, not a specification.

`audio` is price-neutral ("Enabling or disabling audio does not affect pricing"), and the two hosts
differ on whether it can be turned off: fal exposes an `audio` boolean defaulting to `true`
([fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md)), while Replicate's schema has no
audio field at all, so its output's audio cannot be suppressed from the API
([Replicate standard](../../sources/replicate.com/wan-3/2026-10-26.md)).

### Thinking mode

`enable_thinking` (fal) / the document-and-web-page path (Alibaba) is an optional pre-generation
reasoning step, off by default. fal: "Thinking is an optional mode, off by default, that has the model
reason about composition, staging, and motion before it renders a frame … it is required for the document
and web-page reference inputs" ([fal landing](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md)).
Alibaba's version is procedural rather than explanatory: "When a document (`file`) or webpage (`link`) is
provided as input, `prompt_extend` must be set to `true`"
([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)).
Neither source reports what thinking costs in latency or tokens, beyond fal's separate note that turning
off prompt expansion "can save roughly 20-60 seconds of latency".

### Multi-shot

The vendor claims multi-shot narrative within one generation: "Natively supports up to 30-second
multi-shot narratives", and "Supports single-shot and multi-shot storyboard format (4~6 seconds per
shot, with timestamp annotations)"
([guide](../../sources/alibabacloud.com/wan3-video-generation-guide/2026-10-26.md)). No source states a
shot count, whether cuts are controllable, or how reliably they appear. The 4–6 s figure is a prompt
convention the vendor recommends, not an enforced limit.

### Reproducibility

`seed` is accepted, but the vendor qualifies it: "Even with the same seed value, generation results may
not be perfectly identical"
([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)).
fal returns the seed used and the expanded prompt (`actual_prompt`), so a run can be described exactly
even if it cannot be reproduced bit-for-bit.

### Prompt expansion

`prompt_extend` / `enable_prompt_expansion` defaults to on and rewrites the user's prompt with an LLM. It
"significantly improves generation quality for shorter prompts, but increases latency", and fal prices
the alternative at "roughly 20-60 seconds of latency"
([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md)). The prompt a user writes is
therefore not necessarily the prompt the model runs.

## Limitations and constraints

- **No open weights.** Every route is hosted and commercial. Alibaba's Hugging Face organisation
  publishes up to Wan 2.2 under Apache-2.0 and nothing for 2.5, 2.6, 2.7 or 3.0
  ([Hugging Face index](../../sources/huggingface.co/wan-ai-model-index/2026-10-26.md)); the Wan-Video
  GitHub organisation has no Wan 3.0 repository
  ([GitHub index](../../sources/github.com/wan-video-repo-index/2026-10-26.md)); and fal states the same
  independently ([fal FAQ](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md)). fal's
  `licenseType: "commercial"` is fal's statement about use through fal, not an Alibaba licence.
- **Replicate's "Apache 2.0 License" link is wrong.** The `alibaba/wan-3-prime` page links a licence and a
  GitHub repo that both resolve to `Wan-Video/Wan2.1`
  ([Replicate prime](../../sources/replicate.com/wan-3-prime/2026-10-26.md)). Nothing suggests Wan 3.0
  Prime is Apache-2.0; the link is a template artifact.
- **Audio-driven first-frame generation regressed against Wan 2.7.** "Wan2.7's first frame/first-last
  frame mode supports passing in `driving_audio` for audio-driven generation; Wan3.0's first frame/
  first-last frame mode does not"
  ([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)).
  The workaround the vendor suggests — reference mode with `reference_audio` — is a different mode with
  different constraints and no fixed first frame.
- **Frame control and reference conditioning cannot be combined** (mode exclusivity, above).
- **Input video duration is billed on top of output duration.** "billable duration = input video
  duration + output video duration", so a 15 s reference clip plus a 5 s output bills 20 seconds
  ([pricing](../../sources/alibabacloud.com/wan3-model-pricing/2026-10-26.md)). Editing and extension
  requests therefore cost more than their output length suggests.
- **Results expire in 24 hours.** Video URLs and `task_id` values are purged after 24 hours
  ([API reference](../../sources/alibabacloud.com/wan3-video-generation-api-reference/2026-10-26.md)).
- **Preview caveat.** One vendor page calls the model "currently in preview" while every other vendor
  document treats it as released (see *Preview or released?*).
- **Replicate's wrapper hides most of the model.** No reference inputs, no audio toggle, no last frame,
  no thinking switch; only prompt, optional first-frame image, negative prompt, resolution, aspect
  ratio, duration, seed and prompt expansion
  ([Replicate standard](../../sources/replicate.com/wan-3/2026-10-26.md)). Replicate's `negative_prompt`
  is host-side and appears in no Alibaba or fal schema, so its effect on this model is unverified.
- **fal is a proxy, not a host.** All six endpoints report `hostingType: "proxy"`, so fal forwards to
  Alibaba and cannot be assumed to run a pinned checkpoint
  ([fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md)).
- **Document and web-page input has an undocumented security surface.** The vendor supports one public
  URL as generation input; only "pages that do not require login" are read, and nothing captured
  describes prompt-injection handling or what is logged.
- **Moderation is configurable but undocumented.** fal exposes `enable_safety_checker` (default on;
  "Disabling it requires account authorization; unauthorized requests are always checked") and Alibaba
  bills only successful generations. No moderation policy, threshold or refusal taxonomy was captured
  for the vendor API.
- **The 21:9 aspect ratio is inconsistently documented** (see *Output envelope*).
- **No independent quality evidence.** No benchmark, arena or third-party measurement of Wan 3.0 was
  captured.

## Access, pricing, licensing

### Alibaba Cloud Model Studio — per second, USD

| Region | Tier | 480P | 720P | 1080P | Free quota |
| --- | --- | --- | --- | --- | --- |
| Singapore | `wan3.0-video` | $0.05/s (list, 30% off) | $0.10/s (list, 30% off) | $0.20/s (list, 30% off) | 30 s |
| Singapore | `wan3.0-video-prime` | $0.068/s | $0.14/s | $0.28/s | 30 s |
| Beijing, Tokyo, Frankfurt, Virginia, Hong Kong | `wan3.0-video` | $0.041256/s (list, 30% off) | $0.082513/s (list, 30% off) | $0.165025/s (list, 30% off) | none |
| Beijing, Tokyo, Frankfurt, Virginia, Hong Kong | `wan3.0-video-prime` | $0.0636/s | $0.127199/s | $0.254399/s | none |

Source: [pricing](../../sources/alibabacloud.com/wan3-model-pricing/2026-10-26.md). Failed requests are
not billed and do not consume the quota. The free quota is valid for 90 days from activation, release or
approval, whichever is later. The 30% discount applies to the standard tier only and has no stated end
date.

### fal — per second of output video, USD

| Tier | 480p | 720p | 1080p |
| --- | --- | --- | --- |
| Standard | $0.05/s | $0.10/s | $0.20/s |
| Prime | $0.068/s | $0.14/s | $0.28/s |

Source: [fal catalogue](../../sources/fal.ai/wan-3-catalogue/2026-10-26.md). Identical on all three
endpoints within a tier. fal also gives signed-in accounts "five free Wan 3 text-to-video generations
every 24 hours in the fal sandbox, at 720p with audio" on a rolling window
([fal landing](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md)).

### Replicate — per second of output video, USD

| Tier | 480p | 720p | 1080p |
| --- | --- | --- | --- |
| `alibaba/wan-3` billing tiers | $0.025/s | $0.05/s | $0.10/s |
| `alibaba/wan-3` README text | $0.05/s | $0.10/s | $0.20/s |
| `alibaba/wan-3-prime` billing tiers | $0.068/s | $0.14/s | $0.28/s |

Sources: [Replicate standard](../../sources/replicate.com/wan-3/2026-10-26.md),
[Replicate prime](../../sources/replicate.com/wan-3-prime/2026-10-26.md). The standard model's README and
its billing payload disagree by exactly 2×; both are on the same page and neither is reconciled. The
billing payload is the tier definition Replicate charges from, so it is the likelier operational truth,
but a reader should verify against an actual invoice before relying on either.

### Comparing routes

For a 5-second, 720P, text-to-video generation:

| Route | Standard | Prime |
| --- | --- | --- |
| Alibaba Singapore (list) | $0.50 | $0.70 |
| Alibaba Singapore (with 30% discount) | $0.35 | $0.70 |
| Alibaba other regions (list) | $0.41 | $0.64 |
| fal | $0.50 | $0.70 |
| Replicate | $0.25 (billing) / $0.50 (README) | $0.70 |

These are arithmetic from published schedules at one fixed configuration, not quotes. The robust
conclusions: fal charges the vendor's undiscounted list price, the vendor's limited-time discount
undercuts fal but still not Replicate's billing-payload rate, and Replicate is the cheapest
standard-tier route only if that payload is right — its own README says otherwise. A 30-second 1080P
clip costs $6.00 on the standard list price and $8.40 on prime, before any input-video duration is
added.

### Licensing and terms

- **No weights, no open licence.** All access is hosted and commercial; Alibaba's published Wan weights
  stop at Wan 2.2 under Apache-2.0
  ([Hugging Face index](../../sources/huggingface.co/wan-ai-model-index/2026-10-26.md),
  [fal FAQ](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md)).
- **Output ownership and commercial-use terms were not captured** for the vendor API. Neither Alibaba's
  Model Studio service agreement nor its acceptable-use policy was retrieved, so nothing is claimed here
  about who owns generated video or what commercial use the vendor permits.
- **Through fal**, "Content generated through the fal.ai API can be used in commercial projects", subject
  to fal's terms ([fal landing](../../sources/fal.ai/wan-3-landing-page/2026-10-26.md)). That is fal's
  grant, not Alibaba's.
- **Reference-asset rights are the user's problem.** The vendor accepts documents, web pages and audio as
  inputs without any captured statement about rights in those materials.

## Unresolved questions

1. **Is Wan 3.0 in preview or generally available?** One vendor page says preview; the changelog, price
   list and both hosts treat it as released. No source reconciles them.
2. **What does prime actually change?** The vendor says speed only; fal's copy implies better multimodal
   coherence; the price is 2×. No source measures either.
3. **What are the real prices on Replicate's standard tier?** The README and the billing payload differ
   by 2×.
4. **Is 21:9 supported?** Two vendor passages say yes, four documents omit it.
5. **Is the output audio mono or stereo?** No captured page states the channel count.
6. **Does `reference_audio` clone a voice or only transfer its style?** The guide's example asks to
   "extract the voice characteristics", which is ambiguous.
7. **Which checkpoint does each host serve, and from which region?** fal is a proxy and Replicate names
   no checkpoint; the vendor publishes no dated suffix for either ID.
8. **What did the 2026-09-15 Replicate versions change?** Version metadata exists; no changelog.
9. **How many shots can one generation contain, and are cuts controllable?** "Multi-shot" is claimed with
   a 4–6 s-per-shot prompt convention and no control surface.
10. **What does the vendor's own moderation policy refuse, and how does disabling fal's safety checker
    interact with it?** Not documented in any captured source.
11. **How does Wan 3.0 compare with Wan 2.7, Kling, Veo, Seedance or HappyHorse on any measured axis?**
    No independent benchmark was captured for any of them.

## Evidence status

Evidence floor: **met.** First-party: four Alibaba Cloud Model Studio documents — the Wan3.0 API
reference (2026-10-15), the user guide (2026-10-11), the model inference price list and the model
lifecycle changelog — plus two developer-org indexes (Hugging Face `Wan-AI`, GitHub `Wan-Video`) that
establish the absence of published Wan 3.0 weights. Independent hosts: one fal catalogue record
(six endpoint schemas, price strings, hosting metadata), one fal landing-page record (marketing and FAQ),
and two Replicate records (README, input schema, billing tiers, version dates). All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; price statements are published schedules;
the absence of benchmarks is reported as an absence, not filled in.

Two source-quality caveats worth carrying forward: fal's prime-tier marketing copy and Alibaba's
speed-only definition describe different products, and Replicate's standard-tier README contradicts its
own billing payload. Both contradictions are preserved above rather than resolved.

The next useful evidence would be a small reproducible test set run against named endpoints and dates:
the same prompt at 480P/720P/1080P for audio presence and channel count; a first-frame plus last-frame
pair to check adherence; a 10-image + 5-video + 5-audio reference request to find where the combination
breaks; a document-to-video request with thinking on and off; an edit and an extension on the same source
clip to check how input duration is billed; a seed-reuse test to quantify the vendor's non-determinism
caveat; and a timed comparison of standard versus prime on the same prompt to test the "significantly
improved end-to-end speed" claim.
