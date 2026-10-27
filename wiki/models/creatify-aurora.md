# Aurora (Creatify)

**Out of the one-year window.** Aurora 1.0 was announced on **2025-09-03**, roughly seven weeks before the
roster's 2025-10-26 cutoff, and is retained here as a specialist exception with its original date stated.
The current flagship tier, Aurora 2.0, is documented only from October 2026, but no launch date is published
for it, so this page does not claim a current-window launch for the family.

Aurora is Creatify's in-house audio-driven avatar model: one still image plus one audio clip in, a
talking-or-singing video out, where the video's length is the audio's length
([vendor API overview](../../sources/creatify.ai/aurora-api-overview/2026-10-26.md),
[launch post](../../sources/creatify.ai/aurora-launch/2026-10-26.md)). It is not a lip-sync wrapper over a
library avatar — the photo is the identity — and Creatify distinguishes it from its stock-avatar and
custom-avatar products on the same API.

## Identity

- **Canonical name:** Aurora. Creatify titles the docs page "Aurora API: Photo to Avatar Video"; hosts label
  it "Creatify Aurora" (fal) and "Aurora v1 / Aurora v1 Fast" (Runware).
- **Vendor:** Creatify (creatify.ai, branded "Creatify AI" / "Creatify Lab" in site chrome). The launch post
  calls it "Creatify's proprietary image-to-video AI avatar model"
  ([launch post](../../sources/creatify.ai/aurora-launch/2026-10-26.md)).
- **Tiers and model IDs:** one endpoint, `POST /api/aurora/`, serving three `model_version` values
  ([vendor API overview](../../sources/creatify.ai/aurora-api-overview/2026-10-26.md)):

| Tier | `model_version` | Output | Audio cap |
| --- | --- | --- | --- |
| Aurora 1.0 (default) | `aurora_v1` | 720p fixed | 5 min |
| Aurora 1.0 Fast | `aurora_v1_fast` | "below 720p" (one 9:16 example at 448 × 832) | 5 min |
| Aurora 2.0 | `aurora_v2` | 480p / 720p / 1080p / 2k | 59.7 s (14.375 s at 2k) |

- **Host endpoints:**

| Route | Identifier | Hosting | Captured |
| --- | --- | --- | --- |
| Creatify API | `POST https://api.creatify.ai/api/aurora/` | first-party | [overview](../../sources/creatify.ai/aurora-api-overview/2026-10-26.md) |
| fal | `fal-ai/creatify/aurora` | `hostingType: serverless` | [fal record](../../sources/fal.ai/creatify-aurora/2026-10-26.md) |
| Runware | `creatify:aurora@0`, `creatify:aurora@fast` | `hosted: false` | [Runware record](../../sources/runware.ai/creatify-aurora/2026-10-26.md) |
| ElevenLabs | in-product "AI avatar" model | application integration | [ElevenLabs post](../../sources/creatify.ai/aurora-elevenlabs-integration/2026-10-26.md) |
| Replicate | — | **not hosted** (404, absent from search) | checked 2026-10-26 |

- **Release timeline:**

| Date | Event | Source |
| --- | --- | --- |
| 2025-09-03 | Launch announcement; first Wayback capture of `/introducing-aurora` same day | [launch post](../../sources/creatify.ai/aurora-launch/2026-10-26.md) |
| 2025-09 | `aurora_v1` becomes a selectable `model_version` on the AI Avatar endpoints (20 credits / 15 s) | [changelog](../../sources/creatify.ai/api-changelog/2026-10-26.md) |
| 2025-09-10 | Runware `releasedAt` for both v1 and v1 Fast | [Runware](../../sources/runware.ai/creatify-aurora/2026-10-26.md) |
| 2025-10 | `aurora_v1_fast` added (10 credits / 15 s) | [changelog](../../sources/creatify.ai/api-changelog/2026-10-26.md) |
| 2025-12-11 | fal endpoint `publishedAt` | [fal](../../sources/fal.ai/creatify-aurora/2026-10-26.md) |
| 2026-01-23 | Live in ElevenLabs | [ElevenLabs post](../../sources/creatify.ai/aurora-elevenlabs-integration/2026-10-26.md) |
| 2026-02-09 | Creatify announces the fal integration | [fal post](../../sources/creatify.ai/aurora-fal-integration/2026-10-26.md) |
| 2026-02-13 | Creatify announces the Runware integration | [Runware post](../../sources/creatify.ai/aurora-runware-integration/2026-10-26.md) |
| 2026-03-06 | Vendor "best practices" guide | [best practices](../../sources/creatify.ai/aurora-best-practices/2026-10-26.md) |
| 2026-05 | Per-second billing replaces 15-second increments; rates cut to 1 and 0.5 credits/s | [changelog](../../sources/creatify.ai/api-changelog/2026-10-26.md) |
| 2026-10-13 | Docs last modified; Aurora 2.0 documented on the Aurora page | [Aurora 2.0 page](../../sources/creatify.ai/aurora-2-api/2026-10-26.md), [changelog](../../sources/creatify.ai/api-changelog/2026-10-26.md) |

- **Siblings that are not Aurora:**
  - **Boreal / Boreal-H3** — Creatify's general video models (text, start image, optional audio; Boreal-H3
    takes closing frames and reference media), up to 60 s (Boreal) and 5–15 s (Boreal-H3), also on fal as
    `creatify/boreal`. Not avatar models
    ([changelog](../../sources/creatify.ai/api-changelog/2026-10-26.md),
    [fal catalogue](../../sources/fal.ai/creatify-aurora/2026-10-26.md)).
  - **AI Avatar v1/v2** — 1500+ stock personas rendered from text or audio; Aurora is selectable there as a
    `model_version`, so the two products overlap but are not the same endpoint
    ([avatar record](../../sources/creatify.ai/ai-avatar-and-custom-avatar/2026-10-26.md)).
  - **Custom Avatar (BYOA)** — trains a personal avatar from uploaded consent and lip-sync videos; new
    avatars are reviewed by Creatify before they become active. This is the one avatar product with a
    documented consent step.
- **Unresolved identity ambiguity:** fal and Runware expose no `model_version`, so a caller cannot tell which
  tier they are buying. fal's two prices ($0.14 at 720p, $0.07 at 480p) match Runware's v1 and v1 Fast rates
  exactly, which is consistent with fal's `resolution` switch selecting the two 1.0 tiers — but that is
  inference from prices, not a statement by anyone. Aurora 2.0 is not hosted anywhere except Creatify.

## Current assessment

Aurora is a **distinct model with its own identity, not a repackaging**: Creatify built it, prices it per
audio second on its own endpoint, ships three tiers, and is served on four routes (Creatify itself plus
three third-party platforms). The roster's discovery label matches the vendor's own product name.

**Is it current?** Yes, and actively so. The docs were revised on 2026-10-13 and the changelog's newest entry
documents Aurora 2.0 at four resolutions. Aurora 1.0 remains the *default* `model_version`, retained
specifically for audio longer than 59.7 s. Nothing captured marks any tier deprecated.

**What the evidence supports.** The operating envelope is unusually consistent across three publishers: one
still image plus one audio file, video length equal to audio length, per-second-of-audio billing, resolution
selectable only on 2.0, and a hard audio cap that varies by tier. Creatify's docs, fal's schema and Runware's
schema agree on the two required inputs and on the optional visual prompt; the disagreements are about
prices and parameter ranges, not about what the model does.

**What the evidence does not support.** There is no quality evidence at all — no benchmark, no arena, no
third-party comparison, no direct test. Every quality statement on this page traces to Creatify's marketing:
"studio-grade", "state-of-the-art avatar realism", "unparalleled realism". The strongest thing that can be
said is that four platforms chose to carry the model and that Creatify's own prompt guide documents its
failure modes (drift, stiff performance, sync slipping at speed), which is more specific than most vendor
copy.

**The pricing anomaly worth flagging.** In Creatify's own credit schedule, Aurora 2.0 at 720p costs 0.7
credits/s while Aurora 1.0 costs 1 credit/s. The tier the vendor calls "highest quality" is therefore
*cheaper* than the default tier at the same resolution, and the default survives mainly for long audio. A
reader who assumes the default is the cheap option will overpay.

## Documented capabilities

All of the following is vendor or host documentation, not independent testing.

### Inputs

| Input | Aurora 1.0 / 1.0 Fast | Aurora 2.0 |
| --- | --- | --- |
| Image | `png`, `jpg`, `jpeg`, `webp`; no size limits stated | same formats; 256–5760 px per side; aspect 1:4–4:1; ≤ 30 MB |
| Audio | `mp3`, `wav`; up to 5 min | `mp3`, `wav`; 1–59.7 s (14.375 s at 2k) |
| Text prompt | optional, describes "style, scene, expression or motion" | optional, same |
| Guidance | `prompt_guidance_scale` 0.0–10.0, default 1.0 | ignored |
| Resolution | rejected with HTTP 400 | `480p`, `720p` (default), `1080p`, `2k` |
| Callback | `webhook_url` POST on completion | same |

Sources: [overview](../../sources/creatify.ai/aurora-api-overview/2026-10-26.md),
[Aurora 2.0](../../sources/creatify.ai/aurora-2-api/2026-10-26.md),
[Aurora 1.0](../../sources/creatify.ai/aurora-1-api/2026-10-26.md). fal's playground accepts a wider format
set (image `gif`/`avif`/`heic`/`heif`; audio `ogg`/`m4a`/`aac`) with no size limits
([fal](../../sources/fal.ai/creatify-aurora/2026-10-26.md)); Runware takes a URL, UUID, data URI or base64
image and a URL or UUID audio ([Runware](../../sources/runware.ai/creatify-aurora/2026-10-26.md)).

### Output

- **Length equals the audio's length.** Stated three times in the vendor docs and consistent with per-second
  billing: "The video is as long as the audio"
  ([overview](../../sources/creatify.ai/aurora-api-overview/2026-10-26.md)).
- **Container:** mp4 on fal (`content_type: video/mp4`); Creatify and Runware do not state a container.
- **Resolution:** 720p fixed on 1.0; "below 720p" on 1.0 Fast, with the only figure being a 9:16 example at
  448 × 832; four settings on 2.0 with "2k" undefined in pixels.
- **Frame rate:** not documented in any API reference. Creatify's blog FAQ claims "lip sync at 24fps"
  ([launch post](../../sources/creatify.ai/aurora-launch/2026-10-26.md)); fal's output object has an `fps`
  field but no documented value. Treat 24 fps as a vendor claim, not a spec.
- **Aspect ratio:** no parameter anywhere. The two Aurora 2.0 examples render 9:16 and 16:9 from different
  stills, so the frame presumably follows the input image; nobody states the rule.

### Audio and lip-sync

Aurora does not generate audio — it consumes it. "The audio file" is the script: the prompt describes
staging and performance, not speech. Creatify's guide is explicit that prompts "describe the visual context:
lighting, framing, background, presentation style" and that a bad prompt is one that describes talking
([fal post](../../sources/creatify.ai/aurora-fal-integration/2026-10-26.md)).

Speech and song are both supported, and the docs frame the two as the same path ("speech or song"). The
vendor's own troubleshooting says the first fix for poor sync is to slow the audio down, and that "older
voice models produce noticeably worse output" than Creatify's Voice Model V3
([best practices](../../sources/creatify.ai/aurora-best-practices/2026-10-26.md)) — which implies sync
quality is sensitive to speech rate and to the TTS used, not only to the model.

### Expressiveness (vendor claims, labelled)

The differentiator Creatify sells is whole-upper-body performance rather than mouth-only lip-sync:
"facial expressions, head movements, and even upper-body gestures", "breathing", "eye blinks", "emotional
awareness" driven by vocal tone, and identity retention "across minutes of dialogue"
([launch post](../../sources/creatify.ai/aurora-launch/2026-10-26.md),
[feature page](../../sources/creatify.ai/aurora-feature-page/2026-10-26.md)). No numbers, no comparisons, no
methodology. The architecture claim — image, text and audio encoders fused in one latent space, built on a
diffusion transformer — appears only in marketing copy.

## Limitations and constraints

- **Audio length is the binding constraint, and it is tier-dependent.** 5 min on 1.0/1.0 Fast, 59.7 s on 2.0,
  14.375 s at 2k ([overview](../../sources/creatify.ai/aurora-api-overview/2026-10-26.md)). There is no
  documented way to chain or extend clips; nothing on any route offers continuation.
- **`resolution` is rejected on 1.0 and 1.0 Fast** with an HTTP 400, so a caller who wants 1080p or 2k must
  switch tiers *and* accept a 59.7 s audio cap ([Aurora 1.0](../../sources/creatify.ai/aurora-1-api/2026-10-26.md)).
- **No seed parameter.** Neither Creatify's docs, fal's schema nor Runware's schema exposes a seed, so
  reproducibility is unavailable by construction on every route
  ([fal](../../sources/fal.ai/creatify-aurora/2026-10-26.md),
  [Runware](../../sources/runware.ai/creatify-aurora/2026-10-26.md)).
- **Output is retained 7 days** on Creatify's API; "Download any video you want to keep"
  ([overview](../../sources/creatify.ai/aurora-api-overview/2026-10-26.md)). Host retention is not stated.
- **Host coverage is shallow.** Replicate does not host Aurora at all (checked 2026-10-26). fal caps
  at 720p
  with no duration limit documented. No host serves Aurora 2.0, so 1080p/2k is Creatify-only. Runware lists
  only v1 and v1 Fast.
- **Documented specs stop at the interesting boundary.** No frame rate, codec, bitrate, aspect-ratio rule, or
  "2k" pixel definition anywhere in the API references.
- **The guidance control is documented three different ways.** Creatify's reference says
  `prompt_guidance_scale` 0.0–10.0; Creatify's guide says "`prompt_guidance` ranging from 0 to 4"; fal caps
  `guidance_scale` at 5 and adds a second `audio_guidance_scale` (0–5, default 2) that no Creatify page
  documents; Runware's `CFGScale` runs 0–10. Whether these are one control with drifting docs or different
  knobs is unresolved ([best practices](../../sources/creatify.ai/aurora-best-practices/2026-10-26.md),
  [fal](../../sources/fal.ai/creatify-aurora/2026-10-26.md)).
- **`prompt_guidance_scale` is ignored on Aurora 2.0**, and fal's `audio_guidance_scale` has no counterpart in
  the vendor API — so the two routes do not expose the same control surface.
- **Moderation is real but undocumented in detail.** Creatify runs automated screening plus human review with
  an appeal address ([moderation policy](../../sources/creatify.ai/moderation-policy/2026-10-26.md)); fal
  exposes `enable_safety_checker` with "Authorized callers may set false to request relaxed screening"
  without saying who is authorized ([fal](../../sources/fal.ai/creatify-aurora/2026-10-26.md)). No refusal
  taxonomy, threshold, or billing rule for refusals is published.
- **No likeness-consent or verification requirement for the photo input.** The moderation policy prohibits
  "sharing private or confidential information without consent" and "fraudulent, deceptive practices" but
  says nothing about animating a real person's portrait; the Terms put the burden on the user ("Member
  represents, warrants and covenants that Member owns or holds a valid license to any content … that it
  uploads") and indemnify Creatify for rights-of-publicity claims
  ([terms](../../sources/creatify.ai/terms-of-service/2026-10-26.md)). Custom Avatar, by contrast, is
  described as taking consent videos and is manually reviewed before activation
  ([avatar record](../../sources/creatify.ai/ai-avatar-and-custom-avatar/2026-10-26.md)). This asymmetry is a
  policy choice, not a technical limit, and it is not explained anywhere captured.
- **Watermarking is only mentioned for the free app plan**, not for API output
  ([feature page](../../sources/creatify.ai/aurora-feature-page/2026-10-26.md)). No C2PA or provenance
  statement was captured.
- **The vendor's own API docs contradict the vendor's blog on languages.** 29 languages listed in the app FAQ
  versus "all 75+ languages" in the Aurora article
  ([feature page](../../sources/creatify.ai/aurora-feature-page/2026-10-26.md),
  [launch post](../../sources/creatify.ai/aurora-launch/2026-10-26.md)). Lip-sync language coverage is
  therefore unverified.
- **No quality evidence.** See Current assessment.

## Access, pricing, licensing

### Creatify API — credits, subscription-gated

Billing is per second of **audio**, rounded up, and credits come only with a monthly API plan: API Starter
500 credits / $99, API Pro 2,000 credits / $299
([billing](../../sources/creatify.ai/api-billing/2026-10-26.md)). That implies $0.198/credit on Starter and
$0.1495/credit on Pro — derived arithmetic, since no per-credit list price is published.

| Tier | Credits per audio second | USD/s (Starter) | USD/s (Pro) |
| --- | --- | --- | --- |
| Aurora 1.0 (720p) | 1 | $0.198 | $0.150 |
| Aurora 1.0 Fast | 0.5 | $0.099 | $0.075 |
| Aurora 2.0 480p | 0.4 | $0.079 | $0.060 |
| Aurora 2.0 720p | 0.7 | $0.139 | $0.105 |
| Aurora 2.0 1080p | 1.4 | $0.277 | $0.209 |
| Aurora 2.0 2k | 2.8 | $0.554 | $0.419 |

Failed generations are refunded automatically; insufficient balance is refused before billing
([overview](../../sources/creatify.ai/aurora-api-overview/2026-10-26.md)).

**Contradiction with the app's own credit system:** Creatify's app FAQ states "5 credits for every 30 seconds
of video" as its general rate ([feature page](../../sources/creatify.ai/aurora-feature-page/2026-10-26.md)),
which would make Aurora 1.0 a tenth of its documented API price. The two credit systems are not reconciled
by any captured page; read the app FAQ as app-plan credits and the API table as API credits.

### fal — per output second

$0.07/s at 480p, $0.14/s at 720p, seconds rounded up
([fal](../../sources/fal.ai/creatify-aurora/2026-10-26.md)). The endpoint carries a "Commercial use" label and
a "Partner" badge.

**Contradiction:** Creatify's own 2026-02-09 announcement quotes "$0.10 per second at 480p or $0.14 per
second at 720p" for the same endpoint ([fal post](../../sources/creatify.ai/aurora-fal-integration/2026-10-26.md)).
720p agrees; 480p does not, with fal's live catalogue 30% lower. The host's catalogue is the later statement
and is used here, but nothing explains the divergence.

### Runware — per output second

$0.14/s for `creatify:aurora@0`, $0.07/s for `creatify:aurora@fast`
([Runware](../../sources/runware.ai/creatify-aurora/2026-10-26.md)). Catalogue `startingPrice` values ($1.12
and $0.42) are the cheapest published example runs, not unit prices.

### ElevenLabs

No pricing, limit, or terms page was captured. Creatify describes the route as voice-first: pick a voice, get
a talking head ([ElevenLabs post](../../sources/creatify.ai/aurora-elevenlabs-integration/2026-10-26.md)).

### Comparing routes for one clip

A 10.4-second audio at 720p-class quality bills as 11 seconds:

| Route | Cost |
| --- | --- |
| Creatify Aurora 1.0 | 11 credits → $2.18 (Starter) / $1.64 (Pro) |
| Creatify Aurora 2.0 @ 720p | 7.7 credits → $1.52 (Starter) / $1.15 (Pro) |
| Creatify Aurora 2.0 @ 2k (max 14.375 s audio) | 30.8 credits → $6.10 (Starter) / $4.60 (Pro) |
| fal @ 720p | 11 s × $0.14 = $1.54 |
| Runware `creatify:aurora@0` | 11 s × $0.14 = $1.54 |

Arithmetic from published schedules at one fixed configuration, not quotes; it excludes plan minimums and
volume discounts. The robust conclusions are that Aurora 2.0 at 720p undercuts the default 1.0 tier on
Creatify's own schedule, and that the hosts match or beat the Creatify API at 720p while offering no route to
1080p/2k.

### Licensing

- **Proprietary, no weights.** Every route is hosted. No checkpoint, repository, or weights download exists in
  any captured record.
- **Output ownership:** Creatify "hereby assigns to you all copyright rights it may have in your original
  content of the Assets", subject to the terms
  ([terms](../../sources/creatify.ai/terms-of-service/2026-10-26.md)).
- **Restrictions that matter:** outputs may not be used "to train any artificial intelligence model, system or
  network"; reverse engineering is prohibited; the user is responsible for all clearances including rights of
  publicity.
- **Commercial use on hosts:** fal labels the endpoint "Commercial use"; Creatify states Aurora on Runware is
  "available for commercial use" ([Runware post](../../sources/creatify.ai/aurora-runware-integration/2026-10-26.md)).
  Neither is a licence document, and no host-specific terms page for Aurora was captured.
- **Input rights are the user's problem**, per the terms and the indemnity clause. There is no
  identity-verification step.

## Unresolved questions

1. **What is the actual launch date of Aurora 2.0?** The changelog first documents it under "October 2026"
   (month-granular) as a docs addition, not a release. No page dates the model.
2. **Which Aurora tier does each host serve?** fal and Runware expose no version. The price match with
   Runware's v1/v1 Fast is suggestive but unstated; nothing says whether fal's 480p and 720p settings are the
   same pipeline at two resolutions or two different models.
3. **Are the hosts running the same weights as Creatify?** fal marks the endpoint `serverless` (its own
   hosting) rather than `proxy`, which is the opposite of what it does for Seedance. Creatify says "same
   Aurora model" ([fal post](../../sources/creatify.ai/aurora-fal-integration/2026-10-26.md)); no independent
   check exists.
4. **What is the output frame rate, and is it 24 fps?** Only a blog FAQ says so.
5. **What does "2k" mean in pixels?** Undefined on the only page that offers it.
6. **Is the aspect ratio inherited from the input image?** No parameter exists; no page states the rule.
7. **Which guidance control is real?** Three documented ranges (0–4, 0–10, 0–5) plus an undocumented
   `audio_guidance_scale` on fal. Whether Aurora 2.0 has any guidance control at all is unclear — the vendor
   says `prompt_guidance_scale` is ignored.
8. **Why does Creatify's own post quote $0.10/s at 480p when fal charges $0.07?**
9. **What happens beyond 5 minutes?** No chaining, extension, or stitching is documented on any route.
10. **Is there any likeness-consent requirement for the photo input?** None documented, in contrast to Custom
    Avatar's consent video. Whether moderation in practice blocks real-person portraits is unknown.
11. **Does the model handle multiple people, profile views, or non-face images?** The docs accept "real or
    AI-generated" photos and say only that facial landmarks should be discernible, recommending frontal or
    near-frontal framing ([API FAQ](../../sources/creatify.ai/api-faq/2026-10-26.md)); no limits on subject
    count or pose.
12. **How does Aurora compare with HeyGen, OmniHuman, or Kling's avatar modes on any measured axis?** No
    independent benchmark or comparison was captured for any of them.

## Evidence status

**Evidence floor: met.** First-party: fourteen Creatify records — the API overview, the Aurora 1.0 and 2.0
model pages, the changelog, the billing page, the API FAQ, the launch announcement, the best-practices guide,
the app feature page, the moderation policy and the Terms of Service, plus three integration posts (fal,
Runware, ElevenLabs) and one record distinguishing Aurora from the AI Avatar and Custom Avatar products.
Independent hosts: fal (catalogue, metadata, OpenAPI schema, price string, model page) and Runware (two model
pages, request schema, per-second price). One negative host record documents Replicate's absence. All
captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge base.
Capability statements are vendor or host documentation; prices are published schedules; quality statements are
Creatify's own marketing. The absence of independent quality evidence is the largest gap, and the second
largest is that no host serves the current top tier.

The next useful evidence would be a small reproducible set against named endpoints and dates: the same photo
and a 10-second audio through Creatify `aurora_v1`, `aurora_v1_fast` and `aurora_v2` at 480p/720p/1080p/2k;
the same pair through `fal-ai/creatify/aurora` at both resolutions to see whether 480p is visibly the Fast
pipeline; a portrait in profile and a two-person photo to find the pose and subject limits; an audio clip near
each duration cap (14.375 s, 59.7 s, 5 min) to confirm the boundaries; a fast-speech clip to test the vendor's
"slow the audio down" sync claim; and a look at delivered file metadata (fps, dimensions, codec) to settle
questions 4, 5 and 6.
