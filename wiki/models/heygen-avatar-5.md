# HeyGen Avatar V

HeyGen's highest-fidelity avatar rendering engine, launched as a product on **2026-04-08** and
reachable through the HeyGen v3 API as `engine: {"type": "avatar_v"}`
([launch post](../../sources/heygen.com/announcing-avatar-v/2026-10-26.md),
[archive corroboration](../../sources/archive.org/heygen-announcing-avatar-v-2026-04-11/2026-10-26.md),
[engine doc](../../sources/heygen.com/avatar-v-engine-doc/2026-10-26.md)). It animates a trained avatar
look — a digital twin, a studio avatar, or an eligible photo avatar — from a text script or an audio
track, and its distinguishing feature over Avatar IV is cross-reference-driven animation: motion is
sampled from a video reference rather than a single frame
([engines comparison](../../sources/heygen.com/avatar-engines-comparison/2026-10-26.md)).

The launch date is inside the roster's one-year window (2026-04-08 is after 2025-10-26). Note that the
blog page's visible byline now reads "Last Updated October 20th, 2026"; that is a revision date. The
page's own JSON-LD gives `datePublished` 2026-04-08, and the earliest Wayback capture is 2026-04-11 with
a byline reading "April 8th, 2026".

## Identity

- **Canonical name:** **Avatar V**. Every first-party surface — the product page, the blog post, the
  developer docs, the `engine` key — uses the Roman numeral. The roster label "HeyGen Avatar 5" and
  fal's path segment `avatar5` are the only Arabic-numeral spellings found.
- **Vendor:** HeyGen. No model weights, no checkpoint ID, and no versioned model identifier exist.
  Identity is an **engine selector**, not a model ID: `POST /v3/videos` with
  `engine.type = "avatar_v"` ([API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md)).
- **Aliases and host IDs:**

| Surface | Identifier | Notes |
| --- | --- | --- |
| HeyGen API | `avatar_v` (engine key) | Opt-in; default engine is `avatar_iv` |
| HeyGen product | "Avatar V" | Page slug `/avatars/avatar-v` |
| fal | `fal-ai/heygen/avatar5/digital-twin` | Display name "Heygen v5 Digital Twin"; `modelFamily: "Avatar V"` |
| Replicate | `heygen/avatar-v` | README title "HeyGen Avatar V" |

Sources: [engine doc](../../sources/heygen.com/avatar-v-engine-doc/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/heygen-avatar5-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/heygen-avatar-v/2026-10-26.md).

- **The roster's endpoint string is not callable.** `fal-ai/heygen/avatar5` returns HTTP 404 from fal's
  queue OpenAPI (`body: null`); only `fal-ai/heygen/avatar5/digital-twin` resolves. fal has exactly one
  Avatar V endpoint and it is the digital-twin path
  ([fal catalogue](../../sources/fal.ai/heygen-avatar5-catalogue/2026-10-26.md)).
- **Siblings:** Avatar IV (`avatar_iv`, the default, broadest coverage, owns `expressiveness` and
  arbitrary-image input), Avatar III (`avatar_iii`, dedicated photo-to-video pipeline, the only engine
  the vendor advertises with 4K output), and a separate *legacy* Avatar III on the v1/v2 endpoints that
  the vendor says is "not the same" as `avatar_iii`
  ([engines comparison](../../sources/heygen.com/avatar-engines-comparison/2026-10-26.md)).
- **Unresolved identity point:** "Avatar V" is a rendering engine applied to a look, so two videos on
  the same engine can differ in reference material (a self-referencing digital twin versus a photo
  avatar borrowing a twin's motion). The page treats Avatar V as one entity because the engine key,
  pricing, and eligibility gate are shared; per-look differences are noted where they matter.

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-04-08 | Launch post published (`datePublished` 15:00Z) | [blog](../../sources/heygen.com/announcing-avatar-v/2026-10-26.md) |
| 2026-04 | Changelog describes "the Avatar IV engine and upcoming Avatar V" | [changelog](../../sources/heygen.com/api-changelog/2026-10-26.md) |
| 2026-04-11 | Earliest Wayback capture of the launch post | [archive](../../sources/archive.org/heygen-announcing-avatar-v-2026-04-11/2026-10-26.md) |
| 2026-05 | Changelog: `engine` field added to `POST /v3/videos`; same month it becomes an object | [changelog](../../sources/heygen.com/api-changelog/2026-10-26.md) |
| 2026-05-17 | fal endpoint `date` | [fal catalogue](../../sources/fal.ai/heygen-avatar5-catalogue/2026-10-26.md) |
| 2026-05-18 | Replicate version `created_at` | [Replicate](../../sources/replicate.com/heygen-avatar-v/2026-10-26.md) |
| 2026-05-20 | fal `publishedAt` | [fal catalogue](../../sources/fal.ai/heygen-avatar5-catalogue/2026-10-26.md) |
| 2026-06 | Changelog: `motion_prompt` extended to video avatars on `avatar_v` | [changelog](../../sources/heygen.com/api-changelog/2026-10-26.md) |
| 2026-08 | Changelog: photo-avatar fallback — renders from the photo when no reference look exists | [changelog](../../sources/heygen.com/api-changelog/2026-10-26.md) |
| 2026-10 | Changelog: `more_blinking` added | [changelog](../../sources/heygen.com/api-changelog/2026-10-26.md) |
| 2026-10-20 | fal `updated_at`; blog page's displayed "Last Updated" | [fal catalogue](../../sources/fal.ai/heygen-avatar5-catalogue/2026-10-26.md), [blog](../../sources/heygen.com/announcing-avatar-v/2026-10-26.md) |

The April product launch and the May API exposure are separate events, and the gap is documented rather
than inferred: the April changelog calls Avatar V "upcoming" while the blog post of the same month
announces it as available. A staged rollout — product first, API a month later — is the natural reading,
but no source says so.

## Current assessment

Avatar V is a **real, distinct engine**, not a repackaging of Avatar IV, and the vendor's own comparison
table is the strongest evidence: exactly two capabilities move in each direction. Avatar V gains
cross-reference animation and `motion_prompt` for video avatars; it loses arbitrary-image input and
`expressiveness`; digital twin, photo avatar, and studio avatar support are shared
([engines comparison](../../sources/heygen.com/avatar-engines-comparison/2026-10-26.md)). That is a
different product surface, not a quality tier of the same surface.

What the evidence supports about *why* it exists is narrower than the marketing. HeyGen's own mechanism
description is that prior systems condition on a single reference frame while Avatar V conditions on a
full video context window, with selective attention over the informative frames
([product page](../../sources/heygen.com/avatar-v-product-page/2026-10-26.md)). The API shape matches:
`engine.reference_look_id` names a digital-twin look as the motion reference, defaulting to
self-reference for video avatars
([API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md)). So the capability
is "borrow motion from footage", and the documented consequence is identity and motion consistency
across looks and long scripts.

What the evidence does **not** support is any quality ranking. No benchmark, arena, or third-party
measurement of Avatar V was captured; the vendor's claims ("indistinguishable", "most realistic in the
world", "no drift") carry no numbers, sample sizes, or methodology
([launch post](../../sources/heygen.com/announcing-avatar-v/2026-10-26.md),
[product page](../../sources/heygen.com/avatar-v-product-page/2026-10-26.md)). Both hosts restate the
same vendor copy ([fal schema](../../sources/fal.ai/heygen-avatar5-digital-twin-schema/2026-10-26.md),
[Replicate](../../sources/replicate.com/heygen-avatar-v/2026-10-26.md)) — a host record, not a
measurement.

Status: **current flagship rendering engine, but not the default.** HeyGen still defaults every
`POST /v3/videos` request to Avatar IV and tells new integrations to default to it, opting into Avatar V
"for the highest-fidelity motion and lip-sync"
([engines comparison](../../sources/heygen.com/avatar-engines-comparison/2026-10-26.md)). Avatar V is
also gated per look and per plan, so "available" overstates it.

The practical verdict for a reader: Avatar V is the engine to pick when you have a video-trained twin
and care about motion and long-form consistency, and the wrong engine when you want to animate an
arbitrary image, need `expressiveness`, or cannot guarantee the look is eligible.

## Documented capabilities

All of the following is vendor or host documentation, not independent testing.

### Inputs

- **A trained look is required.** Avatar V renders `digital_twin`, `studio_avatar`, and `photo_avatar`
  looks whose `supported_api_engines` array contains `"avatar_v"`; requesting an unlisted engine returns
  `invalid_parameter` ([engine doc](../../sources/heygen.com/avatar-v-engine-doc/2026-10-26.md),
  [avatar looks reference](../../sources/heygen.com/avatar-looks-reference/2026-10-26.md)).
- **Digital twin creation** is `POST /v3/avatars` with `type: "digital_twin"` and 15–600 s of footage of
  one person, long edge 640–4096 px, mp4/webm, with clear audible speech; ~2 minutes at 1080p is
  recommended. Training "usually completes within a few minutes". A voice is cloned from the same
  footage automatically and returned as `avatar_item.default_voice_id`
  ([video-to-avatar](../../sources/heygen.com/video-to-avatar/2026-10-26.md)).
- **Script or audio.** Either `script` (≤5,000 characters) with a `voice_id` — or no `voice_id`, falling
  back to the avatar's default voice — or `audio_url` / `audio_asset_id` to lip-sync supplied audio
  (≤10 minutes); the two paths are mutually exclusive
  ([API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md),
  [usage limits](../../sources/heygen.com/usage-limits/2026-10-26.md)).
- **Motion control.** `motion_prompt` is a natural-language instruction for body motion and hand
  gestures, supported on video avatars only when `engine.type` is `avatar_v`. It is rejected for photo
  avatars on Avatar V when the group has no animation reference
  ([API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md),
  [engine doc](../../sources/heygen.com/avatar-v-engine-doc/2026-10-26.md)).
- **Reference selection.** `engine.reference_look_id` must be a `digital_twin` look in the same avatar
  group; `studio_avatar` and `photo_avatar` looks are rejected as references. When omitted, video
  avatars self-reference and photo avatars draw from eligible group candidates, preferring digital
  twins. A non-public reference must also clear its group's consent
  ([API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md)).
- **`more_blinking`** (`true`) requests more natural blinking, with a documented side effect: with
  `motion_prompt` set, "a direct camera gaze the prompt asks for is not held" and the avatar may look
  slightly off-camera ([API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md)).
- **`expressiveness` is rejected** when `engine.type` is `avatar_v`
  ([API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md)).

### Output

| Property | Value | Source |
| --- | --- | --- |
| Resolution | 720p, 1080p, 4k enum; vendor attributes 4K to Avatar III, not V | [API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md) |
| Default resolution | 1080p at HeyGen and Replicate; **720p at fal** | [usage limits](../../sources/heygen.com/usage-limits/2026-10-26.md), [Replicate](../../sources/replicate.com/heygen-avatar-v/2026-10-26.md), [fal schema](../../sources/fal.ai/heygen-avatar5-digital-twin-schema/2026-10-26.md) |
| Frame rate | 25 fps "for videos containing avatars" | [usage limits](../../sources/heygen.com/usage-limits/2026-10-26.md) |
| Aspect ratios | 16:9, 9:16, 4:5, 5:4, 1:1, `auto` (vendor schema); 16:9/9:16 only on Replicate; fal matches vendor | [API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md), [Replicate](../../sources/replicate.com/heygen-avatar-v/2026-10-26.md) |
| Container | mp4, or webm for an alpha-channel transparent render | [API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md) |
| Duration | 30 minutes per scene; an `avatar` request is one scene | [usage limits](../../sources/heygen.com/usage-limits/2026-10-26.md) |
| Captions | sidecar SRT always; burn-in only when a caption `style` is requested | [API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md) |
| Background | solid colour or image; rejected when `output_format` is webm | [API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md), [fal schema](../../sources/fal.ai/heygen-avatar5-digital-twin-schema/2026-10-26.md) |
| Watermark | custom image overlay; vendor says "premium option for select Enterprise customers" | [API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md) |

**The 4K conflict is unresolved and material.** HeyGen's `VideoResolution` description reads "`4k` is
available for Avatar III digital twins and studio avatars"
([API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md)), the models page
labels Avatar III "Photo-to-video pipeline. 4K."
([engines comparison](../../sources/heygen.com/avatar-engines-comparison/2026-10-26.md)), and the
Business plan advertises "4k video export and upscale"
([pricing](../../sources/heygen.com/pricing-plans/2026-10-26.md)) — yet both hosts expose `4k` on their
Avatar V endpoints with no caveat ([fal schema](../../sources/fal.ai/heygen-avatar5-digital-twin-schema/2026-10-26.md),
[Replicate](../../sources/replicate.com/heygen-avatar-v/2026-10-26.md)) and Replicate's README lists it
as an Avatar V resolution. Either the vendor description is stale, or the hosts accept a value the
vendor will reject or silently downgrade. No captured source settles it.

### Real-time vs asynchronous

Avatar V is **asynchronous only**. Every first-party description of it says the request returns a
`video_id` to poll, and the concurrency limits are expressed in "asynchronous generation in progress"
([engine doc](../../sources/heygen.com/avatar-v-engine-doc/2026-10-26.md),
[usage limits](../../sources/heygen.com/usage-limits/2026-10-26.md)).

HeyGen does sell a real-time conversational product, **LiveAvatar**, with its own API, docs site, and
FULL/LITE modes ([Live Avatar doc](../../sources/heygen.com/live-avatar-doc/2026-10-26.md)). No captured
page says LiveAvatar runs Avatar V; neither the HeyGen page nor the LiveAvatar documentation index lists
an engine selector. Treat "Avatar V in real time" as unverified.

### Vendor claims (labelled as claims)

From the launch post and product page, with no measurement attached:

- "the most realistic in the world"; "Finally, an AI avatar indistinguishable from you"
  ([blog](../../sources/heygen.com/announcing-avatar-v/2026-10-26.md),
  [product page](../../sources/heygen.com/avatar-v-product-page/2026-10-26.md)).
- "No cap on video length and quality"; "Unlimited background or setting"; "Stable beyond 30 minutes"
  ([product page](../../sources/heygen.com/avatar-v-product-page/2026-10-26.md)) — the first two are
  contradicted by the documented 30-minute per-scene limit.
- "Phoneme-level accuracy across every supported language … in 175+ languages and dialects", while the
  same page's banner says 177+ ([product page](../../sources/heygen.com/avatar-v-product-page/2026-10-26.md)).
  The April revision of the launch post carried the site-wide banner "140+ languages", so the number has
  changed over time ([archive](../../sources/archive.org/heygen-announcing-avatar-v-2026-04-11/2026-10-26.md)).
- "Trained on 10M+ data points"; "Rated #1 most realistic avatars on G2"
  ([product page](../../sources/heygen.com/avatar-v-product-page/2026-10-26.md)).
- Three named training stages: same-scene video pretraining, cross-scene reference fine-tuning,
  reinforcement learning for identity ([product page](../../sources/heygen.com/avatar-v-product-page/2026-10-26.md)).

## Limitations and constraints

- **Per-look eligibility gate.** Avatar V is opt-in per look, and the caller must read
  `supported_api_engines` before requesting it; an unlisted engine is rejected. Nothing captured says
  how a look becomes eligible, so a customer cannot predict eligibility before training
  ([engine doc](../../sources/heygen.com/avatar-v-engine-doc/2026-10-26.md),
  [avatar looks reference](../../sources/heygen.com/avatar-looks-reference/2026-10-26.md)).
- **No arbitrary-image input.** `type: "image"` animation is Avatar IV only, as is `expressiveness`
  ([engines comparison](../../sources/heygen.com/avatar-engines-comparison/2026-10-26.md)).
- **Plan gating.** The Free plan lists "Access to Avatar IV and Video Agent" only; Avatar V appears on
  Creator as "Avatar V, with limited usage", on Pro unrestricted, and on Business with "5 Custom Video
  Avatars with Avatar V" and 4K export. "Limited usage" is never defined
  ([pricing](../../sources/heygen.com/pricing-plans/2026-10-26.md)).
- **Consent is a hard precondition for digital twins.** Before rendering, the avatar group must clear a
  consent step: a webcam statement collected through a 24-hour HeyGen link for all customers, an
  uploaded consent video (Enterprise, under 35 s), or a waiver under an indemnity agreement (Enterprise)
  ([avatar consent](../../sources/heygen.com/avatar-consent/2026-10-26.md)).
- **Photo and prompt avatars have no consent gate.** HeyGen states it "runs no consent check and keeps
  no consent record for a photo avatar" and that getting the subject's agreement is the customer's
  responsibility — which matters here because Avatar V accepts photo avatars
  ([avatar consent](../../sources/heygen.com/avatar-consent/2026-10-26.md)).
- **Moderation exists but is thin in documentation.** Training can fail with `moderation_failed`
  ([video-to-avatar](../../sources/heygen.com/video-to-avatar/2026-10-26.md)); fal exposes
  `enable_safety_checker` (default `true`) and says only that "Authorized callers may set false to
  request relaxed screening" ([fal schema](../../sources/fal.ai/heygen-avatar5-digital-twin-schema/2026-10-26.md)).
  No refusal taxonomy or threshold is published anywhere captured.
- **Input ceilings:** 5,000 characters of script, 10 minutes of audio input, 100 MB video / 50 MB image
  / 50 MB audio inputs, and inputs under 2K ([usage limits](../../sources/heygen.com/usage-limits/2026-10-26.md)).
- **Throughput:** 10 concurrent renders on pay-as-you-go, 20 on Enterprise plus paid burst; `POST
  /v3/videos` is limited to 10 requests/second
  ([usage limits](../../sources/heygen.com/usage-limits/2026-10-26.md)).
- **Webm/transparency requires a matting-trained avatar**; the request is rejected otherwise
  ([API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md)).
- **Host gaps.** Both hosts expose only a subset of the engine's parameters: neither fal nor Replicate
  offers `motion_prompt`, `reference_look_id`, or `more_blinking`, and fal substitutes a named stock
  avatar (`avatar` default `"Abigail Sofa Front"`) for the ID-based contract, despite its input
  description mentioning `avatar_id` that the schema does not contain
  ([fal schema](../../sources/fal.ai/heygen-avatar5-digital-twin-schema/2026-10-26.md),
  [Replicate](../../sources/replicate.com/heygen-avatar-v/2026-10-26.md)). The hosts therefore expose
  less than half of what makes Avatar V different from Avatar IV.
- **No cancellation on Replicate** (`supports_cancelation: false`), so a bad render bills in full
  ([Replicate](../../sources/replicate.com/heygen-avatar-v/2026-10-26.md)).
- **Internal vendor inconsistencies** to treat as documentation defects, not model behaviour: aspect
  ratios are 16:9/9:16 in the usage-limits page but six values in the request schema; the product page
  says both 175+ and 177+ languages; the product page says "no cap on video length" against a 30-minute
  scene cap.

### Differences from Avatar 4

The vendor's own table is the citable version
([engines comparison](../../sources/heygen.com/avatar-engines-comparison/2026-10-26.md)):

| | Avatar V | Avatar IV |
| --- | --- | --- |
| Default engine | No — explicit opt-in | Yes |
| Arbitrary image input | No | Yes |
| `expressiveness` | No (rejected) | Yes, photo avatars and images |
| `motion_prompt` | Yes, including video avatars | Yes, photo avatars and images only |
| Cross-reference animation | Yes | No |
| Eligibility check | Required | Not required |
| Digital / photo / studio avatars | Yes | Yes |

Marketing adds a second, weaker comparison: reference input "short video clip (15 seconds)" versus
"single photo", "native, single-pass" versus "two-stage pipeline required", and "stable beyond 30
minutes" versus "degrades over time"
([product page](../../sources/heygen.com/avatar-v-product-page/2026-10-26.md)). **That table describes
only Avatar IV's photo path** — HeyGen's own documentation lists `digital_twin` and `studio_avatar` as
Avatar IV look types, both trained from video
([Avatar IV doc](../../sources/heygen.com/avatar-iv-engine-doc/2026-10-26.md)). The marketing contrast
should not be read as "Avatar IV is photo-only".

Replicate's README frames the choice in operational terms and is the clearest short version: Avatar V
"only works with avatars trained for Avatar V", so use Avatar IV "if your avatar isn't Avatar V-eligible,
or if you need `motion_prompt` / `expressiveness` controls"
([Replicate](../../sources/replicate.com/heygen-avatar-v/2026-10-26.md)).

## Access, pricing, licensing

Four routes, and only three of them publish a price.

### HeyGen first-party — credits, plan-gated

Subscription plans bill in **credits**, and "the number of credits a video or asset uses can vary based
on which AI model is used, video duration, and the complexity"
([pricing](../../sources/heygen.com/pricing-plans/2026-10-26.md)). Plan ladder as captured: Free $0
(Avatar IV only), Creator $29/mo ("Avatar V, with limited usage", 600 credits, 1080p export), Pro
$49–$4,300/mo ("Avatar V, and first access to our newest models"), Business $149/mo + $20/member
(Avatar V custom avatars, 4K export).

**No first-party per-second Avatar V price is public.** HeyGen's per-operation API price list sits
behind an authenticated dashboard (`app.heygen.com/developers/api?modal=pricing`), and the developer
documentation says only that self-serve API pricing is "shown in the API dashboard" while enterprise
pricing "is not published" ([pricing](../../sources/heygen.com/pricing-plans/2026-10-26.md)). This page
therefore cannot state HeyGen's own rate.

### fal — per second of output, and internally inconsistent

| Field | Value |
| --- | --- |
| `pricingInfoOverride` / `billingMessage` | "$0.10 per second of generated output video. The charge is based on final output duration in seconds." |
| `x-fal-metadata.about` (docs blurb) | "Billed per second of output video ($0.1500/s)." |

Both captured 2026-10-26 from the same endpoint
([fal catalogue](../../sources/fal.ai/heygen-avatar5-catalogue/2026-10-26.md),
[fal schema](../../sources/fal.ai/heygen-avatar5-digital-twin-schema/2026-10-26.md)). The two fal
surfaces disagree by 50%; the pricing fields are what the model page renders, but neither is dated. fal's
Avatar IV endpoints carry the same "$0.1 per output video second", so fal prices V and IV identically.

### Replicate — per second of output

**$0.075 per second of output video** ("or around 13 seconds for $1"), the cheapest captured rate, with
no cancellation ([Replicate](../../sources/replicate.com/heygen-avatar-v/2026-10-26.md)).

For one minute of output the captured rates are: Replicate $4.50, fal $6.00 (pricing field) or $9.00
(`about` blurb). Both hosts report `hostingType: "proxy"` / CPU hardware, i.e. forwarding to HeyGen, so
these are resale prices over an unpublished upstream cost.

### Licensing and terms

- **No weights, no open licence.** Avatar V is hosted only; every route is a proxy to HeyGen
  ([fal catalogue](../../sources/fal.ai/heygen-avatar5-catalogue/2026-10-26.md)). fal's
  `licenseType: "commercial"` is fal's assertion about use through fal, not a HeyGen licence statement.
- **Output ownership and commercial-use terms were not captured.** Neither HeyGen's Terms of Service
  nor its API terms were retrieved, so nothing is claimed here about who owns generated video.
- **Likeness rights are the user's obligation.** The consent flow protects the avatar subject, and
  HeyGen explicitly assigns responsibility for photo-avatar likeness to the customer
  ([avatar consent](../../sources/heygen.com/avatar-consent/2026-10-26.md)).
- **Custom watermarks are Enterprise-gated upstream** ("premium option for select Enterprise
  customers") while both hosts expose a watermark object; the hosts' relationship to that gate is
  undocumented ([API reference](../../sources/heygen.com/create-video-api-reference/2026-10-26.md)).

## Unresolved questions

1. **Can Avatar V output 4K?** The vendor's resolution field says 4K is an Avatar III capability; both
   hosts offer `4k` on Avatar V; the Business plan sells 4K export. No captured source reconciles them,
   and no test was run.
2. **What makes a look Avatar V-eligible?** `supported_api_engines` is the gate, but nothing states
   whether eligibility depends on footage length, footage quality, creation date, or plan. fal's schema
   mentions the upstream 400 without criteria.
3. **Does LiveAvatar (real-time) run Avatar V?** HeyGen sells a separate real-time product; no captured
   page connects it to the `avatar_v` engine.
4. **What is HeyGen's own per-second Avatar V price?** The API price list is behind a login. Only the
   resale rates ($0.075/s Replicate, $0.10 or $0.15/s fal) are public.
5. **Which fal price is live — $0.10 or $0.1500 per second?** The catalogue pricing fields and the
   schema's `about` string disagree.
6. **Is the "15-second clip" a minimum, a recommendation, or a faster tier?** The launch post treats 15 s
   as *the* input; the docs give 15–600 s with ~2 min recommended.
7. **How much does Avatar V actually improve on Avatar IV?** No benchmark, arena, or third-party
   comparison was captured. Both hosts repeat vendor copy; Replicate's 396 runs are a usage counter, not
   an evaluation.
8. **How does the vendor's `expressiveness` removal affect photo avatars in practice?** The changelog
   shows `motion_prompt` was added for video avatars on `avatar_v` in June 2026 after May 2026 said
   neither `motion_prompt` nor `expressiveness` was supported on that engine; whether the May constraint
   still applies to photo avatars is not stated.
9. **Do the hosts and the vendor run the same configuration?** Both are proxies with different
   parameter surfaces (fal: named stock avatars, 720p default; Replicate: ID-based, 1080p default,
   16:9/9:16 only), so cross-host output comparison cannot be assumed valid.
10. **Is Avatar V's launch date 2026-04-08 or 2026-10-20?** The blog's visible "Last Updated" says
    October; its JSON-LD and the April archive capture say 2026-04-08. This page treats April as the
    publication date and October as a revision, but the vendor has not stated it explicitly.

## Evidence status

Evidence floor: **met.** First-party: thirteen records under `sources/heygen.com/` — the launch post,
the product page, the Avatar V and Avatar IV engine docs, the Models engine comparison, the
`POST /v3/videos` API reference, the Avatar Looks reference, Video to Avatar, Avatar Consent, Usage
Limits, Live Avatar, the API changelog, and the pricing page — plus one Internet Archive record used
only for dating. Independent hosts: one fal catalogue record, one fal schema record, and one Replicate
record. All captured 2026-10-26.

Both hosts are **proxies**, not independent measurement. They establish that a commercial endpoint
exists, what it accepts, and what it charges; they do not corroborate any quality claim.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation, prices are published schedules, and
quality statements are the vendor's own marketing. Where the sources disagree — 4K, the fal price, the
launch date, the language count, Avatar IV's reference input — the disagreement is recorded rather than
resolved.

The next useful evidence would be a small reproducible set against named endpoints and dates: the same
script on `avatar_v` and `avatar_iv` for the same digital twin, judged for identity drift and lip-sync;
a 10-minute script to probe the long-form claim; a `reference_look_id` swap to see how much motion
actually transfers; an explicit `resolution: "4k"` request with `avatar_v` to settle question 1; a
`motion_prompt` call through fal and Replicate to confirm the parameters are genuinely unavailable
there; and an ineligible look to capture the vendor's error code.
