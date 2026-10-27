# Kling 3.0

Kuaishou's Kling AI video generation from the 3.0 generation, first visible in public endpoints in
February 2026 and sold as a three-surface family: **Kling 3.0** (prompt-led), **Kling 3.0 Turbo**
(cheaper, 720p/1080p only) and **Kling 3.0 Omni** (reference- and edit-driven). It generates 3–15
second clips with native audio, multi-shot storyboards, start/end frames and element references, at
720p, 1080p or native 4K
([vendor 3.0-vs-4.0 comparison](../../sources/kling.ai/kling-3-0-vs-4-0-comparison/2026-10-26.md),
[vendor feature page](../../sources/kling.ai/kling-video-3-0-feature-page/2026-10-26.md)).

It is inside the roster's one-year window, but the exact launch date is not established: the earliest
dated evidence captured is fal's endpoint publication on **2026-02-04**
([fal catalogue](../../sources/fal.ai/kling-video-v3/2026-10-26.md)), and the vendor publishes no
launch date on any captured page. The ordering is not in doubt — fal's catalogue dates Kling 2.6 to
2025-12-02 and Kling 4.0 to 2026-10-16, so 3.0 falls between them — but 2026-02-04 is a *host
onboarding* date and should not be quoted as a vendor release date.

## Identity

- **Canonical name:** Kling 3.0. The vendor writes "Kling VIDEO 3.0" in blog copy and "Kling Video
  3.0" on the feature page; the developer price list writes "Kling 3.0", "Kling 3.0 Turbo" and
  "Kling 3.0 Omni". The roster label "Kling 3.0" matches first-party naming.
- **Vendor:** Kuaishou, operating the product as Kling AI. The contracting entity in the terms of
  service is **Kling AI Pte. Ltd.**; the captured first-party pages name only "Kling AI", never
  Kuaishou, so the Kuaishou attribution rests on the roster and on public attribution rather than on
  a document captured here
  ([terms](../../sources/kling.ai/kling-ai-terms-of-service/2026-10-26.md)). The product is served on
  two domains — `kling.ai` (global; its homepage footer links 19 localized variants) and
  `klingai.com` (China) — and the captures here are from the global domain.
- **Siblings:** Kling 2.5 Turbo, 2.6, O1, and the successor Kling 4.0 (plus 4.0 Flash). Kling Image
  3.0 / 3.0-omni is the image-generation counterpart of the same generation, priced on the same page
  ([vendor pricing](../../sources/kling.ai/kling-video-3-0-api-pricing/2026-10-26.md)).

### Surfaces and host endpoints

| Vendor surface | fal | Replicate |
| --- | --- | --- |
| Kling 3.0 | `fal-ai/kling-video/v3/{standard,pro}/{text-to-video,image-to-video}`, `…/v3/4k/{text-to-video,image-to-video}`, `…/v3/{standard,pro}/motion-control` | `kwaivgi/kling-v3-video`, `kwaivgi/kling-v3-motion-control` |
| Kling 3.0 Turbo | `fal-ai/kling-video/v3/turbo/{standard,pro}/{text-to-video,image-to-video}` | not hosted |
| Kling 3.0 Omni | `fal-ai/kling-video/o3/{standard,pro}/{text-to-video,image-to-video,reference-to-video}`, `…/o3/*/video-to-video/{edit,reference}`, `…/o3/4k/*` | `kwaivgi/kling-v3-omni-video` |

Sources: [fal catalogue](../../sources/fal.ai/kling-video-v3/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-video-3-0/2026-10-26.md),
[Replicate Omni](../../sources/replicate.com/kling-video-3-0-omni/2026-10-26.md).

Three identity wrinkles are worth stating rather than resolving:

1. **The roster's endpoint ID is a family prefix.** `fal-ai/kling-video/v3` is not callable: its
   OpenAPI schema returns HTTP 404, as does `…/v3/pro`. Only leaf endpoints like
   `…/v3/pro/text-to-video` resolve. The roster row names a family, not a model
   ([fal catalogue](../../sources/fal.ai/kling-video-v3/2026-10-26.md)).
2. **fal's own "Kling 3.0" nav link points at the Omni family.** The site menu item labelled "Kling
   3.0" links to `/models/fal-ai/kling-video/o3/standard/image-to-video`, whose `modelFamily` is
   "Kling O3" but whose `landingPageSlug` is `kling-3`. A reader following fal's navigation for
   "Kling 3.0" lands on Omni, not on `v3` (same record).
3. **No vendor API model-ID string was captured.** The vendor's API reference renders client-side and
   its content endpoint requires document IDs that were not obtainable. What is visible is the
   reference's own route table, which registers `api/video/3-0-turbo/*`, `api/video/3-0-omni/*` and
   `api/video/4-0/*` but **no bare `api/video/3-0/*` group** — so whether a plain `kling-v3` model ID
   exists on the vendor API is unresolved
   ([vendor pricing record, notes](../../sources/kling.ai/kling-video-3-0-api-pricing/2026-10-26.md)).

### Is it distinct from 2.x and from 4.0?

**Yes to both, on first-party evidence.**

- Against 2.x, the vendor's own FAQ: "Video 3.0 introduces multi-shot generation, improved character
  consistency, native audio with precise lip-sync, and support for longer video durations"
  ([feature page](../../sources/kling.ai/kling-video-3-0-feature-page/2026-10-26.md)). fal prices 2.6
  and 3.0 as different families with different endpoints, and Replicate lists `kling-v2.6` and
  `kling-v3-video` separately.
- Against 4.0, the vendor's comparison table gives different duration (3–15 s vs 3–30 s), keyframes
  (none vs up to 10), dynamic range (8-bit SDR vs 10-bit HDR), audio (single-channel vs two-channel
  stereo), language list, reference budget and editing integration
  ([3.0-vs-4.0 comparison](../../sources/kling.ai/kling-3-0-vs-4-0-comparison/2026-10-26.md)). The
  hosts agree: fal uses a different namespace (`kling/v4`), family, landing page and price basis, and
  Replicate lists `kwaivgi/kling-v4.0` as a fourth model. This settles the roster's open question
  "Kling 3.0 vs 4.0": they are separate generations, not two labels for one model.

The genuinely open identity question is not 3.0-vs-4.0 but **3.0-vs-3.0-Omni**. The vendor calls them
"two closely related paths" of one "3.0 series" with the same 15-second ceiling and the same audio
and multi-shot features, differing in reference machinery
([3.0 vs Omni](../../sources/kling.ai/kling-video-3-0-vs-3-0-omni/2026-10-26.md)). This page treats
the series as one entity with per-surface caveats, because the two share a price list, a landing page
on fal and a generation, and differ only in input surface.

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-02-04 | fal publishes the v3 pro/standard and o3 endpoints — earliest dated evidence | [fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md) |
| 2026-03-05 | fal publishes v3 motion control (standard and pro) | [fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md) |
| 2026-04-23 | fal publishes the v3 4K endpoints | [fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md) |
| 2026-06-17 | fal publishes the v3 Turbo endpoints | [fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md) |
| 2026-07-03 | Vendor publishes the 3.0 vs 3.0 Omni comparison | [vendor blog](../../sources/kling.ai/kling-video-3-0-vs-3-0-omni/2026-10-26.md) |
| 2026-07-28 | Vendor publishes the 3.0 credit-cost guide | [vendor blog](../../sources/kling.ai/kling-video-3-0-credit-cost-guide/2026-10-26.md) |
| 2026-09-30 | Vendor says "Kling 4.0 will officially launch in October"; 4.0 Flash early access 2026-09-28 | [vendor blog](../../sources/kling.ai/kling-3-0-vs-4-0-comparison/2026-10-26.md) |
| 2026-10-21 | fal publishes `kling/v4` | [fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md) |

## Current assessment

As of 2026-10-26 Kling 3.0 is **current but no longer the flagship**. The vendor's homepage leads
with "All-New Kling 4.0"; 3.0 appears only as a footer feature link
([homepage](../../sources/kling.ai/kling-ai-homepage/2026-10-26.md)). No captured page deprecates it,
`deprecated: false` on every v3 endpoint, and the vendor's developer price list still carries all
three 3.0 surfaces.

The strongest evidence on this page is the agreement between the vendor's spec table and the two
hosts on the operational envelope: 3–15 s, 720p/1080p/4K, native audio, multi-shot with per-shot
prompts, start/end frames, and reference limits of 7 images/subjects (4 with a video) or 1 video up
to 15 s. Four documents from three publishers state the same numbers, which is more than most pages
in this knowledge base can claim.

What the evidence does **not** support is any quality ranking. No benchmark, arena result or
third-party measurement of Kling 3.0 was captured. The vendor's own claims ("cinematic", "top-tier",
"industry-leading") carry no numbers, and neither host adds a measurement — fal reports
`hostingType: "proxy"`, meaning it forwards to Kling rather than running weights it could evaluate.
The only quantitative quality-adjacent signal in the corpus is a third-party preference test cited by
a competitor: Black Forest Labs reports FLUX 3 preferring its own output over "Kling v3 Pro" in 60%
of comparisons ([BFL announcement](../../sources/bfl.ai/flux-3-max-family-announcement/2026-10-26.md))
— a vendor-run study about a competitor's model, which is the weakest kind of evidence and should not
be read as a score.

Position in the family: superseded at the top by Kling 4.0 on duration (30 s), keyframes (10), HDR,
stereo audio, reference budget (15 assets) and integrated editing; retained as the only Kling
generation that appears both on the vendor's developer price list and on both hosts.

## Documented capabilities

Everything below is vendor or host documentation. No direct tests were run.

### Output envelope by surface

| | Kling 3.0 | Kling 3.0 Turbo | Kling 3.0 Omni |
| --- | --- | --- | --- |
| Duration | 3–15 s | 3–15 s | 3–15 s (ignored when editing) |
| Resolution | 720p, 1080p, 4K | 720p, 1080p | 720p, 1080p, 4K |
| Dynamic range | 8-bit SDR (stated for the whole 3.0 series) | not stated | not stated |
| Audio | native, on by default; single-channel | native, included in price | native; mutually exclusive with a reference video (Replicate) |
| Aspect ratios | 16:9, 9:16, 1:1 | 16:9, 9:16, 1:1 | 16:9, 9:16, 1:1 |
| Multi-shot | `multi_prompt`, up to 6 shots, min 1 s each, total ≤ 15 s | 1–6 shots | up to 6 shots |
| References | 7 images/subjects, or 1 video + 4 images/subjects; 1 video ≤ 15 s | same surface, fewer documented | up to 7 reference images (4 with a video), 1 video 3–10 s |

Sources: [vendor 3.0-vs-4.0 table](../../sources/kling.ai/kling-3-0-vs-4-0-comparison/2026-10-26.md),
[fal schemas](../../sources/fal.ai/kling-video-v3/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-video-3-0/2026-10-26.md),
[Replicate Omni](../../sources/replicate.com/kling-video-3-0-omni/2026-10-26.md).

Contradiction worth flagging: the vendor's table says the 3.0 series reference budget is "up to 7
without video; up to 4 with video" *and* "1 video, max. 15 sec", while Replicate's Omni parameter
list caps the reference video at "3-10s, max 200MB". The vendor's limit is an upper bound the host
does not offer; the host's is the one a Replicate caller actually gets.

### Inputs and tasks

- **Text-to-video** and **image-to-video** on all three surfaces
  ([vendor](../../sources/kling.ai/kling-video-3-0-vs-3-0-omni/2026-10-26.md),
  [fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)).
- **Start and end frames.** fal exposes `start_image_url` and `end_image_url` with 50 MB, 300×300
  minimum and 0.4–2.5 aspect limits; Replicate documents a `start_image` with an optional `end_image`
  ([fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md),
  [Replicate](../../sources/replicate.com/kling-video-3-0/2026-10-26.md)).
- **Element references.** fal's `elements` array takes either an image set (`frontal_image_url` plus
  1–3 `reference_image_urls`) or one video per element, referenced in the prompt as `@Element1`,
  with an optional `voice_id` "binded to the element" so that references to it use that voice
  ([fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)). The vendor's name for the same idea is
  "Start Frame + Element Reference" and "Multi-Character Coreference" for scenes with three or more
  characters ([vendor](../../sources/kling.ai/kling-video-3-0-vs-3-0-omni/2026-10-26.md)).
- **Multi-image and video references (Omni).** Up to 7 reference images, plus one reference video
  used either as style/camera guidance (`video_reference_type: feature`) or as the thing being
  edited (`base`), with `keep_original_sound` to retain the source audio
  ([Replicate Omni](../../sources/replicate.com/kling-video-3-0-omni/2026-10-26.md)).
- **Motion control** is a separate endpoint pair in the same family: "Transfer movements from a
  reference video to any character image" ([fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)).
- **Video editing** exists only through Omni workflows in the 3.0 generation; the vendor explicitly
  contrasts this with 4.0, where editing is "integrated into the Kling 4.0 multimodal workflow"
  ([vendor](../../sources/kling.ai/kling-3-0-vs-4-0-comparison/2026-10-26.md)).
- **Sampling controls.** `negative_prompt` (max 2500 chars), `cfg_scale` 0–1 default 0.5,
  `shot_type` `customize`/`intelligent`, and `enable_safety_checker`
  ([fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)). No `seed` field appears in the four v3
  schemas captured, so reproducibility is unaddressed by the hosts.

### Multi-shot

The vendor sells "Multi-Shot and Custom Multi-Shot for scene coverage, shot planning, camera angles,
composition, duration, framing, viewpoint, narrative content, and camera movement"
([vendor](../../sources/kling.ai/kling-video-3-0-vs-3-0-omni/2026-10-26.md)). The hosts turn that into
a concrete surface: `multi_prompt` is an array of `{prompt, duration}` where each shot is 1–15 s,
there are at most 6 shots, and "the total duration of all shots must equal the `duration` parameter"
([Replicate](../../sources/replicate.com/kling-video-3-0/2026-10-26.md),
[fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)). `shot_type: intelligent` lets the model
decide the shot structure instead.

### Audio

Audio is generated in the same pass as the picture and is **on by default** in fal's schema. The
vendor lists the 3.0 series as producing **single-channel** audio, and reserves two-channel stereo
for Kling 4.0 ([vendor](../../sources/kling.ai/kling-3-0-vs-4-0-comparison/2026-10-26.md)). The
feature page claims multi-character dialogue with matched voices and lip movement
([vendor](../../sources/kling.ai/kling-video-3-0-feature-page/2026-10-26.md)).

**Unresolved contradiction on languages.** The vendor says the 3.0 series supports "Chinese, English,
Japanese, Korean, and Spanish, plus dialects and accents"
([vendor](../../sources/kling.ai/kling-video-3-0-vs-3-0-omni/2026-10-26.md)); fal's `generate_audio`
description says it "Supports Chinese and English voice output. Other languages are automatically
translated to English"
([fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)); Replicate's limitation list says "Audio
works best in English and Chinese"
([Replicate](../../sources/replicate.com/kling-video-3-0/2026-10-26.md)). Three publishers, three
scopes. The most defensible reading is that the model accepts more languages than the hosts
advertise, and that only English and Chinese are claimed to work *well* — but no captured source
reconciles them, so "Japanese, Korean and Spanish dialogue works" is unverified.

### Frame rate

**Undocumented.** No vendor page, host schema or README captured for this page states an output
frame rate. The only fps numbers anywhere in the evidence are *input* constraints on fal's element
video (min 24, max 60 fps) ([fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)). Any fps figure
quoted for Kling 3.0 output would be an invention.

### Vendor and host claims, labelled

- "Professional Cinematic Short Films", "perfect character consistency and object stability across
  frames", "clear, readable native text rendering", "precise character-level lip-sync"
  ([feature page](../../sources/kling.ai/kling-video-3-0-feature-page/2026-10-26.md)).
- "Kling 3.0 marked a major step forward … Multi-Shot storytelling, Native Audio, stronger subject
  consistency, multilingual dialogue" ([3.0-vs-4.0](../../sources/kling.ai/kling-3-0-vs-4-0-comparison/2026-10-26.md)).
- fal: "Top-tier text-to-video with cinematic visuals, fluid motion, and native audio generation,
  with multi-shot support" ([fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)).
- Replicate's own counter-claims are the only self-critical lines in the corpus: character
  appearance "can vary across separate generations" and "complex physics interactions may not look
  fully natural" ([Replicate](../../sources/replicate.com/kling-video-3-0/2026-10-26.md)).

## Limitations and constraints

- **15 seconds is a hard ceiling.** Both hosts and the vendor agree, and Replicate adds the practical
  advice to "generate multiple clips and stitch them together"
  ([Replicate](../../sources/replicate.com/kling-video-3-0/2026-10-26.md)). Kling 4.0 doubles this.
- **Multi-shot is capped at 6 shots** with a 1 s minimum per shot
  ([Replicate](../../sources/replicate.com/kling-video-3-0/2026-10-26.md)). The vendor advertises
  "custom multi-shot" without a count.
- **No open weights.** Every route is hosted and every captured endpoint reports
  `licenseType: "commercial"` and `hostingType: "proxy"`. No checkpoint, repository or weights
  download exists in the evidence.
- **Turbo stops at 1080p.** The vendor price table shows "-" in the 4K column for Kling 3.0 Turbo, and
  fal has no Turbo 4K endpoint ([vendor pricing](../../sources/kling.ai/kling-video-3-0-api-pricing/2026-10-26.md),
  [fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)).
- **Replicate does not host 4K or Turbo.** Its 3.0 catalogue is `kling-v3-video`,
  `kling-v3-omni-video` and `kling-v3-motion-control`, all "up to 1080p"
  ([Replicate](../../sources/replicate.com/kling-video-3-0/2026-10-26.md)). fal is the only captured
  route to 4K.
- **Audio is mutually exclusive with a reference video** on Replicate's Omni endpoint, which
  contradicts the vendor's description of Omni as reference-driven *with* native audio
  ([Replicate Omni](../../sources/replicate.com/kling-video-3-0-omni/2026-10-26.md),
  [vendor](../../sources/kling.ai/kling-video-3-0-vs-3-0-omni/2026-10-26.md)).
- **Safety checking exists but is undocumented.** fal exposes `enable_safety_checker` (default true)
  and warns that "disabling safety checks requires account authorization"
  ([fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)); the vendor's moderation policy,
  thresholds and refusal taxonomy were not captured. A refusal on one host is not evidence about the
  model's willingness.
- **Attribution obligation.** The vendor's terms require outputs to be labelled with Kling branding
  or to state that they were generated by Kling AI
  ([terms](../../sources/kling.ai/kling-ai-terms-of-service/2026-10-26.md)).
- **No independent quality evidence.** See Current assessment.
- **The vendor's API reference was not readable.** Its content endpoint returns HTTP 500 without
  internal document IDs, so per-model parameter documentation exists but is uncaptured; every
  capability statement here therefore comes from a marketing page, a host schema, or a host README.

## Access, pricing, licensing

### Vendor API — per second of output, USD

| Surface | 720p | 1080p | 4K |
| --- | --- | --- | --- |
| Kling 3.0, no audio | $0.084 | $0.112 | $0.42 |
| Kling 3.0, audio, no voice control | $0.126 | $0.168 | $0.42 |
| Kling 3.0 Turbo, audio | $0.112 | $0.14 | not offered |
| Kling 3.0 Omni, no video in, no audio | $0.084 | $0.112 | $0.42 |
| Kling 3.0 Omni, no video in, audio | $0.112 | $0.14 | $0.42 |
| Kling 3.0 Omni, video in, no audio | $0.126 | $0.168 | $0.42 |

Source: [vendor pricing](../../sources/kling.ai/kling-video-3-0-api-pricing/2026-10-26.md). The list
price unit is $0.14 and every row is billed `Per second`. 4K is flat regardless of audio; audio adds
50% at 720p/1080p. A 5-second 1080p clip with audio costs $0.84; the same clip at 4K costs $2.10.

### fal — per second, USD

| Endpoint | Audio off | Audio on | With voice control |
| --- | --- | --- | --- |
| `v3/standard/*` (720p) | $0.084 | $0.126 | $0.154 |
| `v3/pro/*` (1080p) | $0.112 | $0.168 | $0.196 |
| `v3/4k/*` | $0.42 | $0.42 | $0.42 |
| `v3/turbo/standard/*` | $0.112 | $0.112 | — |
| `v3/turbo/pro/*` | $0.14 | $0.14 | — |

Source: [fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md). fal's standard/pro figures reproduce
the vendor's 720p/1080p list prices to the cent. fal adds a **voice-control surcharge** ($0.154 /
$0.196) that the vendor's own table does not list, and Turbo is audio-inclusive at a flat rate rather
than following the vendor's per-second audio tiers.

Two 3.0-adjacent surfaces are priced outside that table. The vendor bills motion control at
$0.126/s (720p) and $0.168/s (1080p), and avatar at $0.056/s (720p) and $0.112/s (1080p), under an
"Other Models" tab ([vendor pricing](../../sources/kling.ai/kling-video-3-0-api-pricing/2026-10-26.md)).
fal publishes no price string for its two `v3/*/motion-control` endpoints at all
([fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)).

### Consumer credits

Subscription tiers run from $6.99 to $127.99/month with 660–26,000 credits; the free tier explicitly
excludes commercial use and 1080p generation is a paid-plan benefit. 660 credits is quoted as
"33 720p videos", i.e. roughly 20 credits per 720p clip, but no per-second credit rate is published
([credit guide](../../sources/kling.ai/kling-video-3-0-credit-cost-guide/2026-10-26.md)). Credits and
API dollars are not reconcilable from the captured pages.

### Replicate

Replicate's captured pages show no per-second price (the price block is client-rendered and was not
retrievable). Its 629.5K runs (`kling-v3-video`) and 883K runs (`kling-v3-omni-video`) are usage
counters, not quality signals ([Replicate](../../sources/replicate.com/kling-video-3-0/2026-10-26.md),
[Replicate Omni](../../sources/replicate.com/kling-video-3-0-omni/2026-10-26.md)).

### Licensing

- **No weights, no open licence.** Hosted-only, commercial, proxy-forwarded
  ([fal](../../sources/fal.ai/kling-video-v3/2026-10-26.md)).
- **Output ownership:** "You own all intellectual property rights … We do not claim ownership of the
  Content" ([terms](../../sources/kling.ai/kling-ai-terms-of-service/2026-10-26.md)).
- **Commercial use is conditional.** The same agreement says "without our written permission, you may
  not use … the Output for any commercial purposes", while the consumer price guide lists commercial
  use as a paid-plan benefit. The two documents do not reconcile themselves.
- **Training on outputs is prohibited**, as is using the service to build competing models (clause
  2(w), same record).
- **The vendor takes a broad licence over inputs and outputs** for hosting, display, derivatives and
  distribution during its business operations (clause 4.7.1, same record).

## Unresolved questions

1. **When was Kling 3.0 actually released?** No vendor page states it; fal's 2026-02-04 publish date is
   the earliest dated evidence and is a host onboarding date. The vendor's release-history page
   renders client-side and its data API was not retrievable.
2. **What is the output frame rate?** Undocumented by vendor and both hosts.
3. **How many languages does the audio actually support?** Vendor says five plus dialects; fal says
   Chinese and English with automatic translation of the rest; Replicate says audio "works best in
   English and Chinese".
4. **Is the audio mono or stereo?** The vendor's 4.0 comparison table says the 3.0 series is
   "single-channel", but the feature page advertises multi-character dialogue and no page states the
   channel count of a delivered file.
5. **Does a plain `kling-v3` model ID exist on the vendor API?** The reference's route table has only
   `3-0-turbo` and `3-0-omni` groups.
6. **Is Kling 3.0 Omni part of the same model or a separate one?** The vendor calls it a "closely
   related path" in one "3.0 series"; fal and Replicate expose it as a separate family.
7. **Why does the vendor's developer price list have no Kling 4.0 row** when 4.0 has documentation
   routes and is hosted by fal and Replicate?
8. **Is native audio really incompatible with a reference video?** Replicate says so; the vendor's Omni
   description implies the combination works.
9. **How does Kling 3.0 compare with Seedance 2.x/2.5, Veo 3.1, Wan 3.0 or MiniMax H3 on any measured
   axis?** No independent benchmark was captured for any of them.
10. **What does `shot_type: intelligent` do in practice,** and does it interact with the 6-shot cap?

## Evidence status

Evidence floor: **met.** First-party: seven Kling AI captures — the 3.0 feature page, the
3.0-vs-4.0 comparison, the 3.0-vs-3.0-Omni comparison, the developer price list (reconstructed from
the page's embedded JSON config), the consumer credit guide, the terms of service, and the homepage.
Independent hosts: one fal record covering catalogue metadata, four OpenAPI schemas and the price
strings, and two Replicate records (3.0 and 3.0 Omni READMEs and parameter lists). All captured
2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules; the
"cinematic"/"top-tier" language is the vendor's own. The launch date is a host-side floor, not a
vendor date, and is flagged as such throughout.

The vendor's own API reference — the document that would settle the model-ID, parameter and language
questions — could not be captured because its content API requires internal document IDs. That is the
single largest gap, and it is a retrieval limitation, not an absence of documentation.

The next useful evidence would be: a reproducible test set against named endpoints and dates (same
prompt at 720p/1080p/4K, audio on and off, to check lip-sync and language handling); a multi-shot
request at the 6-shot limit to see whether cuts land where the per-shot prompts ask; a first-frame /
first-and-last-frame pair to check frame adherence; an Omni edit and a style-reference run on the same
source clip; a probe of the delivered file for frame rate, channel count and bit depth; and one
capture of the vendor API reference for `kling-v3` if a route to it can be found.
