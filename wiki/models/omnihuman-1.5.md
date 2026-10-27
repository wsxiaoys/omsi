# OmniHuman 1.5

ByteDance's second-generation audio-driven avatar model: one still image plus one voice track, with an
optional text prompt, produces a talking, singing or acting clip at 720p or 1080p. ByteDance frames it
as a "dual-system" design — a multimodal LLM plans the performance, a diffusion transformer renders it
— and advertises output "over one minute"
([project page](../../sources/bytedance.com/omnihuman-1-5-project-page/2026-10-26.md),
[paper](../../sources/arxiv.org/omnihuman-1-5-2508-19209/2026-10-26.md)).

**Out of window, retained as a specialist exception.** The earliest first-party artefact is the paper,
submitted **2025-08-26**; fal listed the endpoint on **2025-09-23** and Replicate on **2025-10-23**
([paper](../../sources/arxiv.org/omnihuman-1-5-2508-19209/2026-10-26.md),
[fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)). That is roughly two months
before the roster's 2025-10-26 window opening. No page here claims a later launch date; the only
in-window dates in this corpus are documentation edits (BytePlus "Last updated: January 7, 2026") and
the arrival of the successor, OmniHuman 2.0, on fal on 2026-10-15.

## Identity

- **Canonical name:** OmniHuman 1.5. BytePlus titles the product page "OmniHuman 1.5"; the research
  page and paper style it "OmniHuman-1.5"; fal titles the endpoint "Bytedance Omnihuman V1.5";
  Replicate uses `omni-human-1.5`. The roster label matches the vendor's own product name.
- **Vendor:** ByteDance. The paper credits "ByteDance Intelligent Creation"
  ([paper](../../sources/arxiv.org/omnihuman-1-5-2508-19209/2026-10-26.md)); the commercial route is
  BytePlus **Vision AI**, a separate product surface from BytePlus ModelArk, with its own `req_key`
  namespace, its own AK/SK signing, and a per-service activation step in the Vision AI console
  ([BytePlus overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md),
  [video-generation API](../../sources/byteplus.com/omnihuman-1-5-video-generation-api/2026-10-26.md)).
- **Aliases and IDs:**

| Route | Identifier |
| --- | --- |
| BytePlus Vision AI | `req_key: realman_avatar_picture_omni15_cv` |
| fal | `fal-ai/bytedance/omnihuman/v1.5` |
| Replicate | `bytedance/omni-human-1.5` |

- **Release timeline:**

| Date | Event | Source |
| --- | --- | --- |
| 2025-08-26 | Paper v1 submitted to arXiv (2508.19209) | [arXiv](../../sources/arxiv.org/omnihuman-1-5-2508-19209/2026-10-26.md) |
| 2025-09-23 | fal publishes `fal-ai/bytedance/omnihuman/v1.5` | [fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md) |
| 2025-10-23 | Replicate's first version of `bytedance/omni-human-1.5` | [Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md) |
| 2025-11-14 | Replicate's most recent version observed in the page payload | [Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md) |
| 2026-01-07 | BytePlus documentation "Last updated" stamp | [BytePlus overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md) |
| 2026-10-15 | OmniHuman 2.0 published on fal | [fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md) |

No launch announcement, blog post, or changelog entry was found on `bytedance.com` or
`seed.bytedance.com`. The ByteDance Seed site's model index lists Seed2.1, Seedance 2.5, Seedream 5.0
Pro, SeedRealtime, Seed Audio 1.0 and Seed GR-RL — OmniHuman is not among them
([index contents recorded for Seedance 2.5](../../sources/bytedance.com/seedance-2-5-model-page/2026-10-26.md));
the `seed.bytedance.com/en/omnihuman*` paths returned a client-side 404 at capture (observed, not
separately recorded). The model is documented through BytePlus and the research site only.

### OmniHuman 1.0, 1.5 and 2.0 are three different models

The roster row names 1.5, and the three generations are not interchangeable repackagings:

| | 1.0 | 1.5 | 2.0 |
| --- | --- | --- | --- |
| fal endpoint | `fal-ai/bytedance/omnihuman` | `fal-ai/bytedance/omnihuman/v1.5` | `bytedance/omnihuman/v2` |
| BytePlus `req_key` | not documented (service still activatable as "Omnihuman 1.0") | `realman_avatar_picture_omni15_cv` | `realman_avatar_picture_omni20_cv` |
| Inputs (fal schema) | image + audio only | image + audio + prompt, mask, turbo, resolution | image + audio + prompt |
| Audio ceiling | <30 s (fal) | <60 s (BytePlus); 30 s @1080p, 60 s @720p (fal); <35 s (Replicate) | 4–300 s (BytePlus, fal) |
| Image cap | not stated | <5 MB, <4096×4096 (BytePlus) | <30 MB, 300–6000 px, aspect 0.4–2.5 |
| fal price | $0.14/s | $0.16/s | $0.105/s |
| BytePlus price | not captured | $0.12/s | $0.07/s |

Sources: [fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md),
[BytePlus overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md),
[BytePlus 2.0 API](../../sources/byteplus.com/omnihuman-2-0-video-generation-api/2026-10-26.md),
[Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md).

1.0 is a single-system audio-driven model: the OmniHuman-1 project page describes it as taking "audio
only, video only, or a combination of audio and video" motion signals with no text condition, and says
of itself "Currently, we do not offer services/downloads anywhere"
([project page](../../sources/bytedance.com/omnihuman-1-5-project-page/2026-10-26.md)). 1.5 adds the
text-prompt condition, speaker masks, a resolution switch, a speed switch and a much longer audio
ceiling. 2.0 moves the audio ceiling to 300 s, widens the image envelope and undercuts 1.5 on price.

**This page covers 1.5 only.** Replicate hosts 1.0 and 1.5 but not 2.0; fal hosts all three; BytePlus
documents 1.5 and 2.0 and leaves 1.0 undocumented but still activatable.

### The roster label and the vendor page no longer agree

The BytePlus site navigation still advertises "Omnihuman 1.5 — All-in-one AI digital human model", but
`https://www.byteplus.com/product/OmniHuman` now renders an **OmniHuman 2.0** hero. 1.5 survives on
that page only as an unlabelled price-comparison tile at "$0.12 per second", next to 2.0's
"$0.07 per second" and the claim "30s to 300s Video Output · 40% Lower Cost · Better Motion"
([product page](../../sources/byteplus.com/omnihuman-product-page/2026-10-26.md)). The tile's identity
is inferred from its price matching the 1.5 documentation, not from a label. The same page's "Tech
report" link still points at the **1.5** research site, which is how a reader can end up on 1.5
material while reading a 2.0 sales page.

## Current assessment

OmniHuman 1.5 is a **real, distinct generation** with its own architecture, API identity, price and
input envelope — not a relabelled 1.0. Its distinguishing capability, documented by the vendor and
repeated by Replicate, is that performance is driven by audio *semantics* rather than audio *rhythm*:
the MLLM planner reads emotion and intent out of the track and the renderer acts on it, with text
prompts as a second control channel
([paper](../../sources/arxiv.org/omnihuman-1-5-2508-19209/2026-10-26.md),
[Replicate README](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)).

As of capture it is **superseded but not deprecated**. OmniHuman 2.0 has been on fal since 2026-10-15
at $0.105/s against 1.5's $0.16/s, and on BytePlus at $0.07/s against $0.12/s. No end-of-sale,
sunset, or deprecation notice appears anywhere; fal reports `deprecated: false, removed: false` for all
three endpoints, and BytePlus still documents 1.5 with an in-window "Last updated" stamp
([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md),
[BytePlus overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md)). Read it as a
retained specialist: it is the generation whose research page BytePlus still links, it is the only one
of the three with a speaker-mask workflow documented end to end, and it is the only one hosted on
Replicate.

The honest limit on that assessment is that **no independent quality measurement exists in this
corpus**. ByteDance's own claim is "leading performance across a comprehensive set of metrics,
including lip-sync accuracy, video quality, motion naturalness and semantic consistency with textual
prompts" ([paper](../../sources/arxiv.org/omnihuman-1-5-2508-19209/2026-10-26.md)); BytePlus adds
"SOTA Lip Sync" on the comparison tile
([product page](../../sources/byteplus.com/omnihuman-product-page/2026-10-26.md)). Neither carries a
number that was read for this page, and no third-party benchmark or arena result was found. Treat
quality ranking against Kling, Veo, Wan or Seedance as unestablished.

## Documented capabilities

Everything in this section is vendor or host documentation. No model call was made for this page.

### Inputs

- **One image.** BytePlus: JPG/PNG/JFIF, under 5 MB, resolution under 4096×4096, "any frame size", and
  the subject need not be human — "people or other subjects (pets, animations, etc.)"
  ([overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md)). Replicate's schema
  says "Input image containing a human subject, face or character"
  ([Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)). fal documents no image
  constraints on the 1.5 endpoint at all
  ([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md)).
- **One audio track.** Duration ceiling varies by route — see Limitations.
- **Optional text prompt**, six languages only: Chinese, English, Japanese, Korean, Spanish (Mexican),
  Indonesian ([BytePlus overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md)).
  Replicate lists the same six
  ([Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)).
- **Optional speaker mask.** BytePlus accepts a `mask_url` string so that "only the person in the white
  area of the mask will speak"; fal accepts the same field with the same description. On BytePlus the
  mask is normally produced by two optional helper services (subject recognition, then subject
  detection, which returns one mask PNG per subject ordered largest-first)
  ([video-generation API](../../sources/byteplus.com/omnihuman-1-5-video-generation-api/2026-10-26.md),
  [subject detection](../../sources/byteplus.com/omnihuman-1-5-subject-detection/2026-10-26.md),
  [fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md)). Replicate exposes no mask input.
- **Optional seed.** Documented by BytePlus ("If the random seed is the same positive integer and
  other parameters are consistent, the generated content will have an extremely high probability of
  being identical in effect") and exposed by Replicate, but **not** by fal
  ([video-generation API](../../sources/byteplus.com/omnihuman-1-5-video-generation-api/2026-10-26.md),
  [Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md),
  [fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md)).

### Output

- **MP4**, **720p or 1080p, 1080p by default**, per BytePlus and fal; Replicate exposes no resolution
  control at all ([overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md),
  [fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)).
- **Frame rate is undocumented by the vendor and by both hosts.** Container metadata of host-published
  sample outputs was inspected at capture: fal's 1.5 example is 1440×1440 at 25 fps, and two Replicate
  examples are 1920×1088 at 25 fps, all H.264 High with mono AAC at 44.1 kHz. That is three sample
  files, not a specification, and it is the only frame-rate evidence in the corpus
  ([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)).
- fal reports a `duration` output field described as "Duration of audio input/video output as used for
  billing", i.e. output length tracks input audio length
  ([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md)).

### Control

- **Camera and action choreography via prompt.** Both BytePlus and Replicate document a
  `[Camera movement] + [Emotion] + [Speaking state] + [Specific actions] + [Optional background
  actions]` prompt shape, with sequencing words ("first", "then") for multi-step action and verbs like
  "talks" or "sings" to improve lip-sync
  ([Replicate README](../../sources/replicate.com/omni-human-1-5/2026-10-26.md),
  [BytePlus overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md)).
- **Speaker selection via mask**, as above.
- **Speed/quality trade-off.** `pe_fast_mode` on BytePlus, `turbo_mode` on fal, `fast_mode` on
  Replicate — all three documented as "speed up generation by sacrificing some effects", all default
  off ([video-generation API](../../sources/byteplus.com/omnihuman-1-5-video-generation-api/2026-10-26.md),
  [fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)).

### Vendor claims, labelled as claims

- "videos over one minute with highly dynamic motion, continuous camera movement, and complex
  multi-character interactions"
  ([project page](../../sources/bytedance.com/omnihuman-1-5-project-page/2026-10-26.md)).
- "significantly improved motion naturalness and structural stability" over the previous generation
  ([BytePlus overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md)).
- Replicate's "Unrestricted camera and character motion" and "Audio-aware action generation for logical
  and expressive video behavior"
  ([Replicate README](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)).
- BytePlus's "SOTA Lip Sync" comparison tile
  ([product page](../../sources/byteplus.com/omnihuman-product-page/2026-10-26.md)).

None of these carries a number, a harness, or a baseline.

## Limitations and constraints

- **Audio length ceilings disagree across all three routes.** BytePlus: "The duration must be less than
  60 seconds. If the audio exceeds 60 seconds, an error will be generated and the generation will fail"
  ([overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md)). fal: "Audio must be
  under 30s long for 1080p generation and under 60s long for 720p generation"
  ([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md)). Replicate: "Duration must be
  less than 35 seconds"
  ([Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)). A 50-second track works on
  BytePlus and on fal at 720p, and fails on fal at 1080p and on Replicate. Nothing explains the
  divergence.
- **"Over one minute" is a research-page claim, not a product limit.** The project page says "videos
  over one minute" and also says the demos "were generated by our original research model"
  ([project page](../../sources/bytedance.com/omnihuman-1-5-project-page/2026-10-26.md)); every
  commercial route caps input audio at 60 s or less.
- **Generation is slow.** BytePlus states "The RTF value for 1080P video is 27, and RTF value for 720P
  video is 23" — read literally, roughly 27 seconds of compute per second of 1080p video, so a 60 s
  clip is a ~27-minute job
  ([overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md)). The page does not
  define RTF and no host publishes a latency figure to check it against.
- **Multi-character dialogue is a composition, not a feature.** BytePlus: "OmniHuman 1.5 does not
  support using a single audio clip to drive a conversation between different characters. In a
  multi-character scenario, one audio clip can only be used to drive one character to speak or
  multiple characters to speak simultaneously", and the documented workaround is to call the interface
  once per speaker and stitch the clips
  ([multi-character demo](../../sources/byteplus.com/omnihuman-1-5-multi-character-demo/2026-10-26.md)).
  **This contradicts the research page**, which advertises "routing separate audio tracks to the
  correct characters in a single frame"
  ([project page](../../sources/bytedance.com/omnihuman-1-5-project-page/2026-10-26.md)). Both
  statements stand; the API surface accepts one `audio_url`, so a two-speaker conversation is at
  minimum two billed generations plus an external edit.
- **Subject masks are a BytePlus-and-fal feature only.** Replicate has no mask input, so speaker
  targeting is unreachable there
  ([Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)). fal takes a raw `mask_url`
  but offers neither of the two helper services that produce one
  ([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md)).
- **`seed` is not portable.** Vendor-documented and Replicate-exposed, absent on fal
  ([video-generation API](../../sources/byteplus.com/omnihuman-1-5-video-generation-api/2026-10-26.md),
  [Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md),
  [fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md)).
- **Resolution is not portable either.** fal exposes a 720p/1080p switch; Replicate exposes nothing
  ([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)).
- **Continuity breaks when the subject leaves frame.** BytePlus: "When a character leaves the camera
  frame for a long time and then re-enters, consistency changes are likely to occur"; Replicate repeats
  the advice to "Avoid long absences of the subject from frame"
  ([overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md),
  [Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)).
- **The vendor warns about its own variance.** "The model's generation results have a certain degree of
  randomness, and not every generation effect may meet your expectations"
  ([overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md)).
- **BytePlus concurrency is 1.** "Concurrency Limit: 1" on the pricing block
  ([overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md)). Throughput on that
  route is one generation at a time.
- **Replicate runs cannot be cancelled** (`supports_cancelation: false`), so a bad request costs the
  full generation ([Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md)). BytePlus and
  fal both expose a cancel action.
- **Safety filtering is platform-wide, default-on, and says nothing about likeness.** BytePlus runs a
  "Content Pre-filter" on Vision AI, enabled by default, returning `Algovproxy Risk Error` (code 50510)
  on refusal, and covering "Minor Safety", "Hate Speech and Hateful Content", "Nudity, Sexual, and
  Graphic Content" and "Misinformation". The vendor disclaims warranty and puts liability on the caller
  ([content pre-filter](../../sources/byteplus.com/vision-ai-content-pre-filter/2026-10-26.md)).
  **No captured page states a consent, likeness-authorisation, or identity-verification requirement for
  animating a real person's photograph or voice** — a notable gap for a model whose entire function is
  making a face speak someone else's audio. The referenced "BytePlus GenAI Acceptable Use Policy" could
  not be retrieved.
- **No open weights, no code.** The paper is public; the project page links no repository; no ByteDance
  weights or inference code were found on Hugging Face or GitHub. The OmniHuman-1 page states outright,
  for 1.0, "we do not offer services/downloads anywhere"
  ([project page](../../sources/bytedance.com/omnihuman-1-5-project-page/2026-10-26.md)). fal's
  `licenseType: "commercial"` is fal's statement about use through fal, not a ByteDance licence
  ([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md)).
- **Host documentation is thinner than the vendor's.** fal documents no image constraints for 1.5 at
  all, and no prompt-language list, while documenting both for the 2.0 endpoint on the same host
  ([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md)).

## Access, pricing, licensing

Three routes, two prices.

| Route | Billing basis | Price | Notes |
| --- | --- | --- | --- |
| BytePlus Vision AI | per second of generated video | **$0.12/s** | concurrency 1; async task + callback; `ap-singapore-1` |
| fal | per second of output video | **$0.16/s** | proxied to ByteDance; async queue; cancellable |
| Replicate | per second of output video (`video_output_duration_seconds`) | **$0.16/s** | "around 62 seconds for $10"; official model; not cancellable |

Sources: [BytePlus overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md),
[fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/omni-human-1-5/2026-10-26.md).

All three bill on output duration, which for this model equals input audio duration. fal and Replicate
agree to the cent at $0.16/s; BytePlus is 25% cheaper at $0.12/s but serialises on concurrency 1.

Within the family the ordering is inconsistent between platforms. On fal, 1.5 ($0.16/s) is the most
expensive of the three generations, above 1.0 ($0.14/s) and 2.0 ($0.105/s). On BytePlus, 2.0 ($0.07/s)
undercuts 1.5 ($0.12/s) by the "40% Lower Cost" the product page claims. A reader choosing between
generations gets a different answer depending on the route
([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md),
[product page](../../sources/byteplus.com/omnihuman-product-page/2026-10-26.md)).

### Access mechanics

- **BytePlus** is not a ModelArk model. It is a separate Vision AI service that must be activated per
  generation in the console's Model Plaza ("locate the Omnihuman 1.0/1.5 service ... click [Activate
  Service]"), authenticated with AK/SK HMAC-SHA256 rather than a simple API key, and pinned to
  `Region=ap-singapore-1`
  ([overview](../../sources/byteplus.com/omnihuman-1-5-overview/2026-10-26.md),
  [video-generation API](../../sources/byteplus.com/omnihuman-1-5-video-generation-api/2026-10-26.md)).
- **fal and Replicate** are ordinary public endpoints; fal's catalogue row is `status: public` with no
  access gate, unlike some ByteDance endpoints on the same host
  ([fal](../../sources/fal.ai/omnihuman-1-5-catalogue/2026-10-26.md)).

### Licensing

No weights, no open licence, hosted-only. Output ownership, commercial-use terms and the acceptable-use
policy text were not captured; the only first-party liability statement found puts responsibility for
generated content on the caller
([content pre-filter](../../sources/byteplus.com/vision-ai-content-pre-filter/2026-10-26.md)). Nothing
here should be read as a statement that animating a real person's likeness is permitted.

## Unresolved questions

1. **When was OmniHuman 1.5 actually launched?** The paper is dated 2025-08-26 and fal's endpoint
   2025-09-23, but no announcement, blog post or press release was found. ByteDance Seed's current
   site does not list OmniHuman at all.
2. **Why do the three audio ceilings differ (60 s / 30 s at 1080p / 35 s)?** Vendor, fal and Replicate
   each state a different limit for the same model, with no explanation. Is the 35 s cap on Replicate a
   product decision or a wrapper constraint?
3. **What is the output frame rate?** Undocumented by ByteDance, fal and Replicate. Three sample files
   say 25 fps; that is not a specification, and the fal sample's 1440×1440 geometry does not match
   either documented resolution label.
4. **Does the API support the research model's multi-audio-track routing?** The project page says
   separate tracks are routed to separate characters; the API takes one `audio_url` and the
   multi-character guide says conversation needs multiple calls and stitching. Unreconciled.
5. **Does `mask_url` really accept several semicolon-separated masks?** The parameter description says
   so; the only worked example passes one.
6. **Is `turbo_mode`/`pe_fast_mode`/`fast_mode` the same switch, and what does it cost in quality?** All
   three are described as "sacrificing some effects" with no measurement.
7. **Which checkpoint do the hosts serve?** No route publishes a ByteDance model version, so cross-host
   comparisons cannot be pinned to a checkpoint.
8. **Is 1.5 on a deprecation path?** 2.0 is cheaper, longer and newer on both vendor and fal, yet no
   sunset notice exists and BytePlus still documents 1.5 in full.
9. **What are the likeness and consent rules?** No captured page addresses animating a real person's
   photo or cloning their voice. The Acceptable Use Policy was unreachable.
10. **How good is it, really?** No independent benchmark, arena or third-party measurement was found.
    ByteDance's "leading performance" and BytePlus's "SOTA Lip Sync" are unquantified claims.

## Evidence status

**Evidence floor: met.** First-party: five BytePlus Vision AI documents (product overview, video
generation API, subject recognition, subject detection, multi-character demo), the BytePlus OmniHuman
product page, the BytePlus Vision AI content pre-filter policy, the BytePlus OmniHuman 2.0 API document
(captured only to bound the identity), the ByteDance Intelligent Creation OmniHuman-1.5 project page,
and the arXiv paper. Independent hosts: one fal record (catalogue metadata, schemas, price strings,
sample-output container metadata) and one Replicate record (README, schema, billing config, version
metadata, sample outputs). All captured 2026-10-26.

**No direct tests were run for this page.** No generation was requested from any endpoint. Capability
statements are vendor or host documentation; prices are published schedules; the frame-rate and
container observations come from inspecting host-published sample files, which is not a model test and
says nothing about behaviour on other inputs.

The next useful evidence would be a small reproducible set run against named endpoints and dates: one
image with a 10 s, 35 s and 59 s audio track on each of the three routes to locate the real ceilings; a
1080p vs 720p pair on fal and BytePlus to see whether the resolution switch changes anything beyond
scale; a masked two-character image to test speaker selection and the simultaneous-speech case; a
seed-reuse pair on BytePlus and Replicate to check whether the seed is honoured; and a container probe
of the delivered files to settle frame rate and audio channels.
