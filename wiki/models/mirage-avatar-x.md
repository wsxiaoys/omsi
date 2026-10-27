# Mirage Avatar X

Mirage's talking-avatar model, announced on 2026-07-28 as the model behind every AI avatar and AI twin in
the Captions app, and exposed as `mirage-avatar-x` on Mirage's own asynchronous video API
([launch post](../../sources/captions.ai/mirage-avatar-x-launch/2026-10-26.md),
[API guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md)). It takes driving audio
plus exactly one visual reference — a portrait or a short reference video — and returns a 720p MP4 in the
reference's aspect ratio.

It is **inside the roster's one-year window**: the announcement date 2026-07-28 is after 2025-10-26. The post
calls it "our newest avatar model", which implies a predecessor it does not name; no earlier Mirage avatar
model of this name was found, and no page documents what it replaced.

## Identity

- **Canonical name:** Mirage Avatar X. The vendor's post title is "Meet Mirage Avatar X"; "Avatar X" is the
  vendor's own shorthand in the same post
  ([launch post](../../sources/captions.ai/mirage-avatar-x-launch/2026-10-26.md)).
- **Vendor / developer:** Mirage. The contracting entity on the legal pages is Mirage US LLC, and the site
  footer reads "© 2026 NOCAP, Inc. d/b/a Mirage" — the company also trades as Captions, and the model is
  announced and documented on `captions.ai`
  ([API Terms](../../sources/mirage.app/mirage-api-terms/2026-10-26.md),
  [Captions Terms](../../sources/mirage.app/captions-terms/2026-10-26.md)).
- **API model ID:** `mirage-avatar-x`, a form field on `POST https://api.mirage.app/v1/videos`
  ([API guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md),
  [Create Video schema](../../sources/captions.ai/mirage-api-create-video/2026-10-26.md)).
- **Roster label:** "Mirage Avatar X" with discovery path fal `mirage-api/avatar-x`. The roster string is a
  discovery label, and in this case it points at a **gated fal application**, not a public endpoint: fal
  recognises the application id but returns an authentication refusal, publishes no catalogue entry, no
  schema, no price and no model page for it
  ([fal record](../../sources/fal.ai/mirage-avatar-x-endpoint/2026-10-26.md)).
- **Hosts:** Mirage's own API only. **Replicate does not host it** — four searches return no Mirage avatar
  model, and the only Replicate owner named `mirage-ai` publishes an unrelated image model
  ([Replicate record](../../sources/replicate.com/mirage-avatar-x/2026-10-26.md)). fal's gated application
  is the only third-party trace found.
- **Surfaces inside the app:** AI avatars, AI Twin (digital twin from ~10 s of source footage) and custom
  avatars from prompts. The launch post says Avatar X "now powers all Captions' AI avatars and AI twins", so
  in-app it is not a separately selectable model
  ([launch post](../../sources/captions.ai/mirage-avatar-x-launch/2026-10-26.md)). The app exposes it through
  AI Creator / Prompt to Video, whose guide documents the app-level limits (script 10–800 characters, 1 minute
  maximum) without naming the model
  ([AI Creator guide](../../sources/captions.ai/captions-ai-creator-guide/2026-10-26.md)).
- **Siblings:** `mirage-video-1-latest` appears as a second accepted `model` value on the same endpoint, with
  no description, price, or announcement anywhere captured
  ([Create Video schema](../../sources/captions.ai/mirage-api-create-video/2026-10-26.md)). No other Mirage
  generation model was found. The app's "AI Skits" and "AI Ads" are product flows, not separate model IDs.

### Dates

| Date | Event | Source |
| --- | --- | --- |
| 2025-09-04 | Effective date of the Captions Terms and the Mirage AUP that govern likeness consent | [Captions Terms](../../sources/mirage.app/captions-terms/2026-10-26.md), [AUP](../../sources/mirage.app/mirage-acceptable-use-policy/2026-10-26.md) |
| 2025-11-10 | Effective date of the Mirage API Terms | [API Terms](../../sources/mirage.app/mirage-api-terms/2026-10-26.md) |
| 2026-07-28 | Launch announcement, "Now available in Captions" | [launch post](../../sources/captions.ai/mirage-avatar-x-launch/2026-10-26.md) |
| 2026-07-29 | Mirage API docs pages for overview and rate limits last modified | [rate limits](../../sources/captions.ai/mirage-api-rate-limits/2026-10-26.md) |
| 2026-08-12 | Avatar catalog page last modified | [avatar catalog](../../sources/captions.ai/mirage-api-avatar-catalog/2026-10-26.md) |
| 2026-08-13 | API pricing and Avatar X guide pages last modified | [pricing](../../sources/captions.ai/mirage-api-pricing/2026-10-26.md), [guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md) |
| 2026-10-16 | Create Video API reference last modified | [schema](../../sources/captions.ai/mirage-api-create-video/2026-10-26.md) |

The API overview and rate-limit pages were last modified one day after the announcement; the guide, catalog
and pricing pages in mid-August; the Create Video reference in mid-October. That sequence is consistent with
the API being announced alongside the model, but no page states an API GA date, a waitlist, or a preview
status. Treat "launched 2026-07-28 in the app, documented publicly from late July 2026" as the supported
reading; treat the API's general availability as undocumented.

## Current assessment

Avatar X is a **distinct first-party model, not a repackaging**, and the evidence for that is identity-level
rather than quality-level: it has its own name, its own announcement, its own model ID on Mirage's own API,
and its own price. Nothing captured suggests it is a wrapper around another vendor's avatar engine. Mirage's
legal page that lists third-party model providers (Black Forest Labs, ElevenLabs, Google, Luma, MiniMax,
OpenAI, Pika, Stability, and others, effective 2025-09-04) does **not** list an avatar vendor for Avatar X
([AI model terms](../../sources/mirage.app/mirage-ai-model-terms/2026-10-26.md)).

What the documentation supports is a specific, narrow product: audio-driven talking-head video from one
still image or one short reference video, at 720p, in the reference's aspect ratio, delivered as an
asynchronous job. What it does not support is any ranking. The vendor's expressiveness claims are
unquantified comparison images, and no benchmark, arena, or third-party measurement was captured
([launch post](../../sources/captions.ai/mirage-avatar-x-launch/2026-10-26.md)).

The most interesting thing about the evidence is what is missing. The roster's fal path resolves to an
application that fal will not serve anonymously and does not catalogue; Replicate has nothing; and the
vendor's own docs disagree with themselves on the maximum audio length (1–60 s in prose, 1–180 s in the
schema) and describe a preset-avatar parameter that the schema does not have. This page therefore describes
Avatar X from **first-party documentation only**, plus host records that establish access reality.

Whether it is current or superseded: current. It is the model the vendor ships in its app as of the
2026-10-26 capture, and the API reference was edited 2026-10-16. No deprecation notice was found.

## Documented capabilities

Everything below is vendor documentation, not independent testing.

### Inputs

- **Image-to-video:** `image_reference` (JPEG or PNG) + `audio_reference` (WAV or MP3).
- **Video-to-video:** `video_reference` (MP4 or MOV, 10–60 s, marked "feature-gated preview") +
  `audio_reference`.
- Image and video references are **mutually exclusive**; "Exactly one visual reference is required"
  ([Create Video schema](../../sources/captions.ai/mirage-api-create-video/2026-10-26.md),
  [API guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md)).
- **Driving audio is the script.** There is no text/script input on the API: the performance is whatever the
  audio says. The app adds the script/voice layer on top.
- **Preset avatars:** a catalogue lists ten people in portrait and the same ten in 16:9, as enum values
  ("`Ayesha`", "`Ayesha (16:9)`", …) to "copy … to use in create-video requests", each with a hosted
  reference video preview
  ([avatar catalog](../../sources/captions.ai/mirage-api-avatar-catalog/2026-10-26.md)). The schema has no
  such field — see Unresolved questions.
- **Asset guidance (vendor):** clear front-facing portrait, good lighting, single subject, mouth open,
  close-to-medium shot; avoid closed mouths and multiple people; use realistic-sounding audio because
  "results tend to look worse if the audio is audibly 'AI'"
  ([API guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md)).

### Output

| Property | Value | Source |
| --- | --- | --- |
| Resolution | 720p (no other resolution offered) | [guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md) |
| Aspect ratio | 9:16 or 16:9, "resolved from the visual reference" — not an input | [schema](../../sources/captions.ai/mirage-api-create-video/2026-10-26.md) |
| Container | MP4 | [guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md) |
| Duration | follows the driving audio — 1–60 s (prose) or 1–180 s (schema); longer videos are built by generating segments and joining them. That output length tracks the audio is an inference: the docs give the audio length per request and bill generated output length | [guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md), [schema](../../sources/captions.ai/mirage-api-create-video/2026-10-26.md) |
| Frame rate / bitrate / codec | not documented | — |
| Audio | whatever is in the driving audio; the API takes audio in, it does not synthesise it | [guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md) |
| Provenance | "Every output includes non-removable provenance metadata" — format not stated | [guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md) |

The 16:9 / 9:16 choice in the app ("horizontal or vertical video specs") matches the API's two aspect
ratios ([launch post](../../sources/captions.ai/mirage-avatar-x-launch/2026-10-26.md)).

### Asynchronous, not real-time

The API is a job queue, not a stream: submit returns a `PROCESSING` job, the client polls
`GET /v1/videos/{id}` until `COMPLETE`, then downloads via `/content`, which "returns an HTTP redirect to the
final video URL". Statuses are `PROCESSING`, `COMPLETE`, `FAILED`, `CANCELLED`. The only latency statement is
"most generations completing in under two minutes"
([API guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md),
[schema](../../sources/captions.ai/mirage-api-create-video/2026-10-26.md)). **No real-time, streaming, or
interactive-latency mode is documented** — no WebSocket, WebRTC, or frame-stream endpoint appears in any
captured page.

### Vendor claims (labelled as claims)

- "the most powerful avatar model we've ever made", "Unmatched realism. Hyper-expressive emotion. Natural
  movements", "the biggest jump in realism we've ever made"
  ([launch post](../../sources/captions.ai/mirage-avatar-x-launch/2026-10-26.md)).
- "generates entire video avatar performances at once, from expressions to voice and motion", which the post
  contrasts with models that "assemble each element separately" — a joint-generation architecture claim
  with no technical detail behind it.
- "Outputs are equally strong for short-form videos and longer content, maintaining high quality throughout
  longer segments" — untested here, and in tension with the 60-second documented request limit unless
  segmenting is used.
- Two comparison figures assert Avatar X is "more expressive than other models" and that "Competitive models
  show less organic emotion", with no metric, sample, or methodology.
- Mirage's research page describes in-house training and inference on "a curated, licensed dataset of the
  highest-quality audio-video data" with attention to "rights, safety, and brand control"
  ([research page](../../sources/mirage.app/mirage-research/2026-10-26.md)) — a dataset-provenance claim, not
  a capability one.

## Limitations and constraints

- **720p is the ceiling.** No 1080p or 4K tier exists on any captured page, unlike most video-generation
  models documented in this wiki.
- **One visual reference, no pose or camera control.** The schema exposes no pose, framing, camera, gesture,
  background, or emotion parameter; control is entirely through the reference image/video and the audio.
- **The reference video path is feature-gated.** MP4/MOV 10–60 s is documented as "feature-gated preview"
  with no eligibility criteria or date
  ([schema](../../sources/captions.ai/mirage-api-create-video/2026-10-26.md)).
- **Throughput is 2 requests per minute per organization**, with HTTP 429 above that; increases go through
  an account manager ([rate limits](../../sources/captions.ai/mirage-api-rate-limits/2026-10-26.md)).
- **Long-form output is a user-assembled pipeline.** The vendor's answer to "longer videos" is to generate
  segments and join them, which moves continuity risk onto the caller, and each segment's 6-second billing
  rounding adds cost.
- **Non-removable provenance metadata** is embedded in every output, and the AUP forbids "misrepresent[ing]
  the provenance of generated content by claiming it was created solely by a human"
  ([guide](../../sources/captions.ai/mirage-api-video-generation/2026-10-26.md),
  [AUP](../../sources/mirage.app/mirage-acceptable-use-policy/2026-10-26.md)).
- **Consent is a user warranty, not a gate.** The Captions Terms require "the written consent of each and
  every identifiable natural person in the Input … to use such person's name, likeness and/or voice", plus a
  release; no captured page describes an identity-verification or consent-check step before generation
  ([Captions Terms](../../sources/mirage.app/captions-terms/2026-10-26.md)). The API guide adds that
  "Reference media is used only for that request and is not retained as a reusable identity" — a retention
  statement, not a consent mechanism.
- **Content policy is broad and discretionary.** No output relating to under-18s ("or appears in our sole
  discretion to relate to"), no impersonation, no sexual content, no NFT or trademark use, no use "beyond
  published parameters"
  ([AUP](../../sources/mirage.app/mirage-acceptable-use-policy/2026-10-26.md)). Moderation is described as
  AI plus human, layered at model/application/platform, with SOC 2 and US-only Google Cloud hosting
  ([safety page](../../sources/mirage.app/mirage-safety-and-security/2026-10-26.md)); no thresholds or
  refusal taxonomy are published.
- **No weights and no self-hosting.** All access is hosted; the API Terms forbid distillation and forbid
  using output to train a competing model
  ([API Terms](../../sources/mirage.app/mirage-api-terms/2026-10-26.md)).
- **US-only infrastructure.** Hosting is stated as "isolated, US-based Google Cloud data centers"; no EU
  region or residency option is described
  ([safety page](../../sources/mirage.app/mirage-safety-and-security/2026-10-26.md)).
- **The third-party route is closed by default.** fal's application id exists but refuses anonymous access
  and is uncatalogued; the Mirage API Terms say non-public Mirage APIs "would be governed by a separate
  agreement" ([fal record](../../sources/fal.ai/mirage-avatar-x-endpoint/2026-10-26.md),
  [API Terms](../../sources/mirage.app/mirage-api-terms/2026-10-26.md)).
- **No independent quality evidence.** No benchmark, arena, or third-party measurement of Avatar X was
  captured.

## Access, pricing, licensing

### Mirage API (direct) — per second of output

| Basis | Price |
| --- | --- |
| Output video, billed in 6-second increments | **$0.15 per second** |

Billing follows the generated output length rounded up to the next 6 seconds — a 10.2 s generation bills as
12 s ($1.80) ([API pricing](../../sources/captions.ai/mirage-api-pricing/2026-10-26.md)). Because the audio
cap is 60 s per request (or 180 s by the schema), a single request costs $9.00–$27.00 depending on which
limit is true. Access needs a Mirage platform account and an `x-api-key`
([API overview](../../sources/captions.ai/mirage-api-overview/2026-10-26.md)); no free tier or volume
discount is published.

### Captions app — credit subscriptions

The consumer route is a credit plan: Max at **$24.99/mo** with 500 credits, and Frontier at $69.99 / $139.99 /
$279.99 per month with 1,400 / 2,800 / 5,600 credits; enterprise is custom with "bulk credit discounts" and
"training data exclusion". The page notes prices "reflect iOS plans only"
([plans](../../sources/captions.ai/captions-plans-pricing/2026-10-26.md)). **No captured page states the
credit cost of one avatar generation**, so the app and API routes cannot be compared on price.

### fal — no published terms

The gated `mirage-api/avatar-x` application has no public price, schema, or documentation, and fal's
catalogue search for "mirage" returns zero results
([fal record](../../sources/fal.ai/mirage-avatar-x-endpoint/2026-10-26.md)). Any fal pricing is therefore
unknown, not merely unpublished.

### Licensing and commercial terms

- **No model weights; commercial hosted use only.** Output ownership sits with the customer: "Licensee …
  owns and … retains all rights in and to Output"
  ([API Terms](../../sources/mirage.app/mirage-api-terms/2026-10-26.md)). The Captions Terms grant Mirage a
  broad licence to use app input and output "to provide the Services, to improve the Services, and to
  develop new services and products", with a carve-out that Mirage "will not commercialize your voice on a
  standalone basis without your written permission"
  ([Captions Terms](../../sources/mirage.app/captions-terms/2026-10-26.md)).
- **API customers must flow terms down** to their end users, may not allow end users under 18, and may not
  use output for distillation ([API Terms](../../sources/mirage.app/mirage-api-terms/2026-10-26.md)).
- **App-level commercial use** of AI Creator output is allowed per the app's FAQ, subject to the same terms
  ([AI Creator guide](../../sources/captions.ai/captions-ai-creator-guide/2026-10-26.md)).
- **No third-party model licence applies.** Mirage's AI-model terms page lists the third-party providers
  behind various app features; no avatar-model provider is listed
  ([AI model terms](../../sources/mirage.app/mirage-ai-model-terms/2026-10-26.md)).

## Unresolved questions

1. **How long can one request's audio be — 60 s or 180 s?** The guide (last modified 2026-08-13) says
   1–60 s; the schema (last modified 2026-10-16) says 1–180 s. The schema is newer, but neither page
   mentions the other, and the pricing example ("generating a 10.2-second video") does not test the limit.
2. **How do the preset avatars work?** The catalog tells developers to use its enum values "in create-video
   requests", but the documented request schema has only `image_reference` / `video_reference`. Either a
   parameter is missing from the published spec or the catalog belongs to a different surface.
3. **What is `mirage-video-1-latest`?** It is an accepted `model` value on the same endpoint, default
   `mirage-avatar-x`, with no documentation, price, or announcement.
4. **What exactly is the fal application, and under what terms?** `mirage-api/avatar-x` exists at fal and is
   authentication-gated, but nothing published describes it. Mirage's API Terms exclude non-public APIs,
   which is consistent with a partner deployment; no source confirms it.
5. **Is there any real-time or streaming variant?** Nothing captured describes one, but Mirage's own
   research page emphasises inference speed and the roster groups this model with real-time avatar systems.
   Absence of documentation is not proof of absence of capability.
6. **What is the provenance metadata?** "Non-removable provenance metadata" is asserted without naming C2PA,
   a watermark, or an inspectable manifest.
7. **Frame rate, bitrate, and codec** are undocumented; "720p MP4" is the entire output spec.
8. **Is there any consent or identity verification at generation time?** The terms impose a written-consent
   warranty on the user; no captured page describes a check, attestation, or challenge.
9. **Do the app and the API run the same weights?** The app's AI Twin is built from ~10 s of recorded
   footage; the API takes a still image or a 10–60 s reference video. The two may be the same model with
   different reference preparation, but no source says so.
10. **Does Avatar X replace or coexist with earlier Mirage avatar models?** The launch post says it "now
    powers all Captions' AI avatars and AI twins" but does not name a predecessor or say whether the
    predecessor remains reachable.

## Evidence status

Evidence floor: **met, with a caveat.** First-party: the 2026-07-28 launch post; the Avatar X API guide,
API overview, pricing, rate-limit, Create Video schema, avatar catalog and app pricing pages on
`captions.ai`; the Mirage API Terms, AUP, Captions Terms, AI-model terms, safety page and research page on
`mirage.app`. Independent host records: a dated capture of fal's gated `mirage-api/avatar-x` application and
of fal's catalogue absence, plus a dated capture showing Replicate does not host the model. **The caveat is
that no independent host publishes any capability, schema, or price for Avatar X** — the host records
establish access reality (gated on fal, absent on Replicate), not behaviour. Every capability and pricing
statement on this page is therefore first-party.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge base.
The vendor's expressiveness and realism claims are recorded as claims; the price is a published schedule; the
duration, resolution and input limits are documentation, with the 60 s / 180 s conflict left open.

The next useful evidence would be: one image-reference request and one video-reference request against
`api.mirage.app` at a fixed audio length, to settle the duration limit, the actual pixel dimensions and frame
rate, and the provenance metadata format; a 10.2 s job to confirm the 6-second billing increment in the
invoice; a likeness-consent probe to see whether any verification step exists; and a request to fal about
`mirage-api/avatar-x` access to determine whether that route is a partner deployment or an unused private
endpoint.
