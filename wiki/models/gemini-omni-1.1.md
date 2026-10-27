# Gemini Omni 1.1

Google DeepMind's conversational video generation and editing model, served as **Gemini Omni Flash**
under the model ID `gemini-omni-1.1-flash`. It takes text, images and video (plus first/last frames and
reference media), returns a 3–10 second clip **with generated audio**, and supports multi-turn
natural-language editing and extension to a 40-second total
([Gemini API model page](../../sources/google.dev/gemini-omni-flash-model-page/2026-10-26.md),
[guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md)).

**In-window, no exception claimed.** The earliest date in the evidence is the model card's "Initially
Published: May 2026"; the API preview shipped 2026-06-30 and general availability 2026-08-27, all inside
this roster's 2025-10-26 cutoff
([model card](../../sources/deepmind.google/gemini-omni-flash-model-card/2026-10-26.md),
[release notes](../../sources/google.dev/gemini-omni-release-notes/2026-10-26.md)). No launch post was
found: `blog.google/search/?q=omni` redirects to the blog home, and the two plausible post URLs tried
returned 404 on 2026-10-26. The May 2026 date is the model card's own and is not corroborated.

## Identity

- **Canonical name:** "Gemini Omni 1.1" is the version label; the vendor's model name is **Gemini Omni
  Flash** and its API ID is `gemini-omni-1.1-flash`. The roster label is a shortened family+version
  form, not a leaderboard label and not a different product: the DeepMind product page links "Try in
  Google AI Studio" with `model=gemini-omni-1.1-flash`, and the model card says in one sentence that it
  "describes Gemini Omni Flash and Gemini Omni 1.1 Flash"
  ([product page](../../sources/deepmind.google/gemini-omni/2026-10-26.md),
  [model card](../../sources/deepmind.google/gemini-omni-flash-model-card/2026-10-26.md)).
- **Vendor:** Google DeepMind (product and model card), sold by Google through the Gemini API and
  through Google Cloud's Gemini Enterprise Agent Platform, and proxied by fal
  ([pricing](../../sources/google.dev/gemini-omni-1.1-pricing/2026-10-26.md),
  [Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md),
  [fal endpoints](../../sources/fal.ai/gemini-omni-flash-1-1-endpoints/2026-10-26.md)).
- **No non-Flash tier exists.** Nothing in the captured corpus offers "Gemini Omni 1.1" without the
  Flash suffix, so the roster's omission of "Flash" does not hide a second model.

| Surface | Name | ID / slug | Launch stage |
| --- | --- | --- | --- |
| Gemini API | Gemini Omni Flash | `gemini-omni-1.1-flash` | Stable ("generally available") |
| Google Cloud Agent Platform | Gemini Omni 1.1 Flash | `gemini-omni-1.1-flash-preview` | Preview |
| fal | Gemini Omni Flash 1.1 | `google/gemini-omni-flash/v1.1/{text-to-video,image-to-video,reference-to-video,edit}` | active |
| Gemini app / Flow / YouTube / Vids / AI Studio | Gemini Omni / Gemini Omni Flash | — | shipped |

Sources: [model page](../../sources/google.dev/gemini-omni-flash-model-page/2026-10-26.md),
[pricing](../../sources/google.dev/gemini-omni-1.1-pricing/2026-10-26.md),
[Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md),
[fal endpoints](../../sources/fal.ai/gemini-omni-flash-1-1-endpoints/2026-10-26.md),
[model card](../../sources/deepmind.google/gemini-omni-flash-model-card/2026-10-26.md).

- **Aliases:** "Gemini Omni", "Gemini Omni Flash", "Gemini Omni 1.1 Flash", "Omni", "Omni Flash".
  The predecessor is **`gemini-omni-flash-preview`** ("Gemini Omni Flash", Google Cloud slug
  `omni-flash-preview`), a distinct ID that lacks extension, interpolation and resolution control.
- **Discovery-path correction.** fal has **no** `fal-ai/gemini-omni` endpoint: the metadata API returns
  `{"error":{"type":"not_found","message":"Endpoint(s) not found"}}` for it, and
  `https://fal.ai/models/fal-ai/gemini-omni` answers HTTP 200 with a client-rendered shell that only
  prints "Loading model". The real endpoints are under the `google/` namespace, as listed in fal's
  sitemap ([fal endpoints](../../sources/fal.ai/gemini-omni-flash-1-1-endpoints/2026-10-26.md)).
  Replicate does not host the model: `replicate.com/google/gemini-omni-flash` and
  `…/google/gemini-omni-1.1-flash` both return 404 on 2026-10-26 (same record).
- **Siblings:** `gemini-omni-flash-preview` (v1.0), Veo 3.1 (Google's text/image-to-video line, no
  prompt-driven editing), and Nano Banana (the image family the product page uses as its analogy). On
  Google Cloud, prompt-driven video editing is documented for the two `gemini-omni-*` IDs and for no Veo
  model ([edit guide](../../sources/cloud.google.com/video-edit-models/2026-10-26.md)).

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-05 | Model card "Initially Published: May 2026" — unexplained by any other captured source | [model card](../../sources/deepmind.google/gemini-omni-flash-model-card/2026-10-26.md) |
| 2026-06-30 | Gemini API public preview: `gemini-omni-flash-preview`, 3–10 s at 720p, text-to-video and image-to-video, conversational editing | [release notes](../../sources/google.dev/gemini-omni-release-notes/2026-10-26.md) |
| 2026-06-30 | fal publishes the unversioned `google/gemini-omni-flash/{edit,image-to-video}` endpoints | [fal endpoints](../../sources/fal.ai/gemini-omni-flash-1-1-endpoints/2026-10-26.md) |
| 2026-08-25 | fal creates the four `…/v1.1/*` endpoints | [fal endpoints](../../sources/fal.ai/gemini-omni-flash-1-1-endpoints/2026-10-26.md) |
| 2026-08-27 | **GA** as `gemini-omni-1.1-flash`, adding extension, first+last-frame interpolation and 360p/720p/1080p/4K resolution control; preview endpoint to be deprecated 2026-09-30 | [release notes](../../sources/google.dev/gemini-omni-release-notes/2026-10-26.md) |
| 2026-08-27 | Google Cloud releases `gemini-omni-1.1-flash-preview` as **Preview**; fal publishes `v1.1` endpoints | [Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md), [fal endpoints](../../sources/fal.ai/gemini-omni-flash-1-1-endpoints/2026-10-26.md) |
| 2026-09-30 | Planned retirement of `gemini-omni-flash-preview` on the Gemini API; the model page now lists it as "Shut down" | [release notes](../../sources/google.dev/gemini-omni-release-notes/2026-10-26.md), [model page](../../sources/google.dev/gemini-omni-flash-model-page/2026-10-26.md) |

### One page, one model — with a documented predecessor

The three tiers named above are one model on one page: Google's model card covers "Gemini Omni Flash and
Gemini Omni 1.1 Flash" in a single document, publishes no per-version evaluation, and gives no separate
support window. The predecessor is nevertheless a real boundary: `gemini-omni-flash-preview` has no
extension, no interpolation and no resolution control (720p only), and it is shut down on the Gemini API
while still listed as a preview on Google Cloud and still served by fal under the unversioned slug
([release notes](../../sources/google.dev/gemini-omni-release-notes/2026-10-26.md),
[model page](../../sources/google.dev/gemini-omni-flash-model-page/2026-10-26.md),
[Agent Platform index](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md),
[fal endpoints](../../sources/fal.ai/gemini-omni-flash-1-1-endpoints/2026-10-26.md)). Under this
knowledge base's split test the predecessor passes all three conditions — obtainable, materially
different capability set, and variant-specific host evidence — so a separate `gemini-omni-flash` page is
the natural next step. It is not created here because the roster has no row for it and this page's job
is the 1.1 version.

## Current assessment

Gemini Omni 1.1 is a **current, actively served model with a genuine capability niche**, and the evidence
supports calling it a distinct model rather than a repackaging of Veo. What distinguishes it, per the
vendor's own documentation, is *editing*: stateful multi-turn edits keyed on `previous_interaction_id`,
extension of uploaded or generated video, first/last-frame interpolation, reference images and videos,
and resolution control up to 4K — none of which appears in the documented Veo 3.1 API surface, while
Google Cloud's editing guide names only the `gemini-omni-*` IDs
([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md),
[edit guide](../../sources/cloud.google.com/video-edit-models/2026-10-26.md)).

Its launch stage is **contradictory across first-party surfaces**, and the contradiction is not cosmetic:
the Gemini API sells `gemini-omni-1.1-flash` as Stable and "generally available to developers on the paid
tier", while Google Cloud's Agent Platform sells the same 2026-08-27 release as **Preview** under a
different ID, `gemini-omni-1.1-flash-preview`
([pricing](../../sources/google.dev/gemini-omni-1.1-pricing/2026-10-26.md),
[model page](../../sources/google.dev/gemini-omni-flash-model-page/2026-10-26.md),
[Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md)).
No retirement date or support window is published for either ID, so "GA" here means "not preview on this
surface", not "committed for a stated period".

The weaknesses are the vendor's own: "maintaining complete consistency throughout edits, generating
scenes with complex motion, or rendering perfectly accurate text remains a challenge"
([model card](../../sources/deepmind.google/gemini-omni-flash-model-card/2026-10-26.md)). Every quality
claim on the DeepMind page is an internal human-preference study with no values, margins or opponent
scores ([product page](../../sources/deepmind.google/gemini-omni/2026-10-26.md)); no independent
measurement of this model was found. What the evidence supports is therefore a **feature and price
position**, not a quality ranking.

## Documented capabilities

All of the following is vendor or host documentation. Nothing on this page was tested.

### Output envelope

| | Gemini API | Google Cloud (Agent Platform) | fal |
| --- | --- | --- | --- |
| Duration | 3–10 s per generation | output duration not stated; input video max 10 s | integer 3–10 s, default 8 |
| Extension | +10 s per step, 40 s total | "Extend videos — Supported" | no extend endpoint; four endpoints only |
| Resolution | 360p, 720p (default), 1080p, 4K — 1080p/4K "upscaled" | 360p, 720p, 1080p, 4k | `360p, 720p, 1080p, 4k`, default 720p |
| Frame rate | 24 FPS | not stated | not stated |
| Aspect ratio | 16:9 default, 9:16 | 16:9, 9:16 | 16:9 default, 9:16 |
| Audio | generated with the video | "Sound generation — Supported" | "synchronized native audio" |
| Container | not stated (mp4 implied by samples) | not stated | file URL |
| Region | not stated | "Global: global" only | `valid_regions: []` |

Sources: [model page](../../sources/google.dev/gemini-omni-flash-model-page/2026-10-26.md),
[guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md),
[Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md),
[fal schema](../../sources/fal.ai/gemini-omni-flash-1-1-api-schema/2026-10-26.md).

**1080p and 4K are upscaled, not native.** Google says so twice — "1080p output (upscaled)", "4K output
(upscaled)" in the resolution table, and "1080p and 4K outputs are generated using upscaling" in the
release notes. The 360p tier is offered explicitly as a cheap draft mode ("Draft videos in 360p
resolution more efficiently compared to standard 720p"). No source states what the native render
resolution is.

### Inputs and tasks

- **Text-to-video** with generated audio; the vendor's guide warns the model defaults to a multi-shot
  narrative and must be prompted ("In a single unbroken scene", "No scene cuts") to hold one shot
  ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md)).
- **Image-to-video**, and **first + last frame interpolation**: "Generate a video transitioning between
  two images using the `image_to_video` task with up to 2 images"
  ([release notes](../../sources/google.dev/gemini-omni-release-notes/2026-10-26.md)). fal exposes the
  same thing as `image_url` plus optional `end_image_url`
  ([fal schema](../../sources/fal.ai/gemini-omni-flash-1-1-api-schema/2026-10-26.md)).
- **Reference-to-video**: reference images and video clips combined with text. Google Cloud allows "up to
  10" images per prompt and 3 videos; fal's schema caps `image_urls` at 10 and
  `reference_video_urls` at 3 ([Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md),
  [fal schema](../../sources/fal.ai/gemini-omni-flash-1-1-api-schema/2026-10-26.md)).
- **Editing**: upload a video through the Files API or continue from a generated one; each turn returns
  a new video and the model keeps context through `previous_interaction_id`. Google's own advice is to
  keep edit prompts short and append "Keep everything else the same"
  ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md)).
- **Extension**: "You can extend videos by 10s, up to a total length of 40s"; the model uses "the last
  10s of your original video as context"; extension is append-only
  ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md)).
- **Explicit task selection**: `text_to_video`, `image_to_video`, `reference_to_video`, `edit`,
  `extend` via `video_config.task` — documented as a fallback, not the primary control ("We recommend
  relying primarily on prompting … as using the `task` field adds some constraints").
- **Large outputs** require `delivery="uri"`: "Use the `delivery="uri"` parameter … to retrieve generated
  videos that are larger than 4MB", and the URI must be polled until the file is `ACTIVE`.

### Audio

Audio is generated by default — speech, music and sound effects — and the prompt is the only control
("Include calm background music", "At 5s the chorus starts in the background audio"). Google Cloud lists
"Sound generation: Speech, music, sound effects — Supported". There is **no audio input path**: "Uploading
audio references is unsupported in the current version of the API", and audio inside a video reference
"is ignored". Speech-changing edits exist but are restricted: "As part of editing videos, Gemini Omni
Flash is capable of changing people's speech. For now, we are restricting this capability", matching the
guide's "Voice editing is not supported"
([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md),
[model card](../../sources/deepmind.google/gemini-omni-flash-model-card/2026-10-26.md),
[Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md)).

Audio codec, sample rate, channel count and whether 1080p/4K upscaling re-renders the track are
documented nowhere in the corpus.

### Vendor performance claims (labelled as claims)

The DeepMind product page claims leading results on five internal studies: video editing (504
side-by-side human comparisons), text-to-video on 1,003 MovieGenBench prompts (a Meta benchmark) and on a
500-prompt "Fast Motion" set, image-to-video on 355 VBench I2V pairs where "outputs across Gemini Omni
Flash, Grok-Imagine-Video, and Kling tied", and reference-to-video (468 comparisons). No metric values,
margins or per-model scores are published, and every study is Google-run
([product page](../../sources/deepmind.google/gemini-omni/2026-10-26.md)). The one concrete comparative
statement is a three-way **tie** on VBench I2V, which the page still frames as "leading over other
models".

fal restates the capability claims without numbers and adds that characters retain "their face, clothing,
and voice throughout" reference-to-video
([fal endpoints](../../sources/fal.ai/gemini-omni-flash-1-1-endpoints/2026-10-26.md)) — a claim about
voice retention in a model whose vendor says audio references are unsupported and voice editing is
blocked. Treat it as host marketing.

### Watermarking and provenance

Every output carries SynthID and C2PA Content Credentials: "All generated videos include SynthID
watermarking, which is invisible to viewers but can be detected programmatically", and Google Cloud lists
"Content Credentials (C2PA) — Supported"
([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md),
[Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md)).
The product page says the watermark applies to content "created or edited with Omni in the Gemini app,
Google Flow or YouTube" without saying whether the Gemini API and fal outputs are included
([product page](../../sources/deepmind.google/gemini-omni/2026-10-26.md)); the API guide's "all generated
videos" closes that gap for the API, not for fal.

## Limitations and constraints

- **Ten seconds per generation, forty seconds per chain.** Extension is append-only, "you cannot prepend
  content or extend the middle of a clip", and uploaded inputs for extension must be "10 seconds or less"
  ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md)).
- **No audio input path, despite the model card.** The guide states uploading audio references is
  unsupported, while the card and product page list audio as an input modality
  ([model card](../../sources/deepmind.google/gemini-omni-flash-model-card/2026-10-26.md),
  [product page](../../sources/deepmind.google/gemini-omni/2026-10-26.md),
  [guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md)).
- **No sampling controls and no negative-prompt field**: "System instructions, temperature, `top_p`, stop
  sequences, and negative prompts are not supported"; negatives go in the prompt text. fal's schema
  matches — no `negative_prompt`, no `seed`, no `safety_tolerance`
  ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md),
  [fal schema](../../sources/fal.ai/gemini-omni-flash-1-1-api-schema/2026-10-26.md)).
- **Region restrictions on editing.** "Editing or extending uploaded videos is not currently available for
  users in the EEA, Switzerland, and the United Kingdom"; uploading or editing images containing minors
  is also blocked there, as is content with "certain recognizable people"
  ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md)). fal publishes no such
  restriction (`valid_regions: []`), which is a host gap rather than a permission.
- **Multiple reference videos are accepted but not jointly reasoned over — per the same page.** The
  guide permits 3 reference clips, then says "Referencing or reasoning across multiple videos is not
  supported. Attempting multi-video prompting may result in degraded model performance or unexpected
  outputs." The two statements are hard to reconcile; treat multi-reference prompting as documented but
  unreliable ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md)).
- **No YouTube URLs** as media source; **no batch inference** on Google Cloud; **no pay-as-you-go** on
  Google Cloud ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md),
  [Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md)).
- **English only, in practice.** "English (EN) is fully supported, but other languages have not been
  evaluated, so they may work but results can vary"
  ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md)).
- **Content safety filters run on both prompts and output**, vary by region, and block policy-violating
  prompts. The model card adds that production filters and SynthID are the post-training mitigations
  ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md),
  [model card](../../sources/deepmind.google/gemini-omni-flash-model-card/2026-10-26.md)).
- **No open weights.** Every route is hosted; no checkpoint or licence download appears in any captured
  source.
- **No latency figures anywhere**, and the only performance statement is "Video generation times vary
  based on duration, resolution, and current API load"
  ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md)).

## Access, pricing, licensing

Three routes, three different billing bases.

### Gemini API — per token, no free tier

| Item | Paid tier, per 1M tokens |
| --- | --- |
| Input (text / image / video / audio) | $1.50 |
| Output, text | $9.00 |
| Output, video | $17.50 |

Billing basis, verbatim: "Billing is based on total output token consumption, calculated at a rate of
5,792 tokens per second of 720p video. Under Standard pricing, this equates to an effective price of
approximately $0.10 per second." Free tier: "Not available"
([pricing](../../sources/google.dev/gemini-omni-1.1-pricing/2026-10-26.md)).

The $0.10/s figure is a 720p conversion of a token price, not a per-second SKU, and Google publishes no
token-per-second rate for 360p, 1080p or 4K. Since 1080p/4K are upscaled, the actual cost at those
resolutions is not derivable from any captured Google page.

### Google Cloud (Agent Platform) — preview, no self-serve pay-as-you-go

The listing supports "Provisioned Throughput" and "Fixed quota", and marks **"Pay-as-you-go — Not
supported"**. No price appears on the model page. The same page's capability matrix is the narrowest of
the three routes: 131,072 input / 57,920 output tokens, audio "Not supported", no batch inference
([Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md)).

### fal — per second of output video

| Resolution | Price per second |
| --- | --- |
| 360p | $0.03 |
| 720p | $0.10 |
| 1080p | $0.15 |
| 4K | $0.30 |

fal's own worked example: "A 10-second 1080p clip costs $1.50, while the same clip at 360p costs $0.30"
([fal endpoints](../../sources/fal.ai/gemini-omni-flash-1-1-endpoints/2026-10-26.md)). fal records
`hostingType: "proxy"` and an upstream application name of `gemini-omni-1.1-flash`, so this is a
pass-through of Google's billing rather than a separate rate card; its 720p rate equals Google's
published effective rate, which is consistent with that reading, but fal does not state the upstream
token accounting for 1080p/4K.

For scale against Google's own video line: Veo 3.1 standard is $0.40/s with audio and Veo 3.1 Fast
$0.15/s at 720p/1080p
([Veo 3.1](veo-3.1.md)). Gemini Omni 1.1 at $0.10/s (720p) is therefore cheaper than standard Veo 3.1
on a per-second basis, but the two are not substitutes: Omni is the editing/conversation model, Veo is
the text/image-to-video line with no documented editing surface.

### Licensing and terms

- **Commercial, hosted only.** fal labels the endpoint "Commercial use" / `license_type: commercial`;
  no weights are distributed on any route
  ([fal endpoints](../../sources/fal.ai/gemini-omni-flash-1-1-endpoints/2026-10-26.md)).
- **Output ownership and commercial-use terms were not captured.** No Gemini API terms page, Google Cloud
  service terms or fal terms page was retrieved for this page, so no statement is made here about who
  owns generated video. Google's model card defers to the Generative AI Prohibited Use Policy and the
  Gemini API Additional Terms of Service without quoting them
  ([model card](../../sources/deepmind.google/gemini-omni-flash-model-card/2026-10-26.md)).
- **Provenance is not optional:** SynthID is embedded in all generated videos and C2PA Content
  Credentials are supported on Google Cloud
  ([guide](../../sources/google.dev/gemini-omni-video-guide/2026-10-26.md),
  [Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md)).
- **Google Cloud's route is a pre-GA offering** under the Pre-GA terms, which the page quotes as allowing
  production and commercial use at the customer's election — while the Gemini API route is described as
  GA ([Agent Platform](../../sources/cloud.google.com/gemini-omni-1-1-flash-agent-platform/2026-10-26.md),
  [pricing](../../sources/google.dev/gemini-omni-1.1-pricing/2026-10-26.md)).

## Unresolved questions

1. **Is `gemini-omni-1.1-flash` GA or preview?** The Gemini API says Stable/GA with ID
   `gemini-omni-1.1-flash`; Google Cloud says Preview with ID `gemini-omni-1.1-flash-preview`, both
   released 2026-08-27. A reader picking a route is picking a different stability commitment, and neither
   page mentions the other's stage.
2. **Which context window applies?** 1,048,576 tokens on the Gemini API versus 131,072 input / 57,920
   output on Google Cloud for the same release. No source reconciles them.
3. **Does audio input work at all?** Model card and product page say audio is an input modality; the API
   guide says uploading audio references is unsupported and that audio in a video reference is ignored;
   Google Cloud says Audio "Not supported". Only output audio is documented as working.
4. **Is Provisioned Throughput supported?** Google Cloud: "Supported". Gemini API guide: "Provisioned
   throughput is not supported". Possibly route-specific, but neither says so.
5. **How long may a reference video be — 3 s or 10 s?** Google: "3 clips, up to 3 seconds each". fal:
   "Each video must be at most ten seconds long".
6. **What is native resolution, and what does upscaling cost?** 1080p/4K are upscaled; Google publishes
   no token rates for them and fal's per-second table is fal's own presentation.
7. **What is the support window?** No retirement date is published for `gemini-omni-1.1-flash` on either
   surface. The only dated deprecation is the predecessor's 2026-09-30 shutdown.
8. **What did "Initially Published: May 2026" on the model card correspond to?** No launch post, blog
   entry or release note in the corpus covers a May 2026 event.
9. **Should `gemini-omni-flash-preview` have its own page?** It is still served by fal and still listed as
   a Google Cloud preview while shut down on the Gemini API, and it lacks three capabilities the 1.1
   version has. The split test favours a separate page; the roster has no row for it.
10. **How good is it, independently?** No third-party measurement, arena entry or user report was found.
    The vendor's five studies publish no numbers, and the one comparative statement is a three-way tie.
11. **What does the delivered file contain?** No captured source gives codec, container, bitrate, audio
    sample rate, or whether 4K upscaling re-renders audio.

## Evidence status

Evidence floor: **met.** First-party: the DeepMind product page and Gemini Omni Flash model card, the
Gemini API model page, video guide, pricing block and release-note entries, and Google Cloud's Agent
Platform model page. Independent host: two fal records — the endpoint metadata/price record and the
four-endpoint OpenAPI schema record. All captured 2026-10-26. Replicate was checked and does not list the
model, and Artificial Analysis's video arena page, checked the same day, listed no Gemini Omni entry.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation, prices are published schedules, and quality
statements are Google's own internal preference studies or fal's marketing. The 2026-08-27 GA date rests
on a dated release-note entry, the model card's publication date and Google Cloud's "Release date" field,
corroborated independently by fal's endpoint creation (2026-08-25) and publish (2026-08-27) timestamps.

The next useful evidence would be: the same prompt run at 360p/720p/1080p/4K on the Gemini API and on fal
to see whether the bill and the picture match the upscaling claim; a 10-second edit chain past the 40-second
extension cap; an audio-reference attempt to confirm the input is rejected rather than silently ignored;
a reference-video request at 5 s to test the 3 s versus 10 s contradiction; and an `ffprobe` pass on a
delivered file to settle codec, frame rate and audio parameters.
