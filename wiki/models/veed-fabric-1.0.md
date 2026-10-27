# VEED Fabric 1.0

VEED's own image-plus-audio lip-sync model: one still image and one speech track in, one MP4 of that
image talking back. VEED calls it "our proprietary model for creating affordable, AI lip sync videos"
([model page](../../sources/veed.io/fabric-1-0-model-page/2026-10-26.md)) and sells it four ways — in the
VEED editor on AI credits, through VEED's own API at `api.veed.io` billed per output second, through fal
(hosting it since 2025-09-19), and through Replicate at the same per-second price
([fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md)).

**It is outside the roster's one-year window.** The earliest evidence of a public surface is fal's
`veed/fabric-1.0` endpoint published **2025-09-19**, and VEED's own product page was live as a waitlist
by **2025-09-09** ([archive record](../../sources/archive.org/veed-io-fabric-1-0-pages/2026-10-26.md)).
That is five to seven weeks before the 2025-10-26 cutoff. No later re-launch, new checkpoint, or version
bump was found, so this page treats Fabric 1.0 as a retained specialist that predates the window rather
than as an in-window launch. The "1.0" in the name is the version VEED has shipped since then; it has not
advanced.

## Identity

- **Canonical name:** "Fabric 1.0", written "VEED Fabric 1.0" when the vendor brand is needed. VEED's
  own OpenAPI document gives the internal slug `veed/fabric-one-lipsync`
  ([api.veed.io](../../sources/veed.io/api-fabric-1-0-endpoint/2026-10-26.md)).
- **Vendor:** VEED Limited, trading as VEED (`veed.io`). The API terms name "VEED Limited" as the
  contracting party ([API terms](../../sources/veed.io/api-terms-of-use/2026-10-26.md)).
- **Aliases:** fal titles the base endpoint "Fabric 1.0" with `modelFamily: "Fabric 1"`; the roster's
  "VEED Fabric 1.0" matches the vendor's own marketing string. Replicate writes it "Fabric 1.0 by VEED".
  None of these is a different model.
- **Not to be confused with:** VEED **Lipsync 2.0** (`/v1/lipsync-2.0`, fal `veed/lipsync/v2`), which
  re-syncs existing footage to new audio at a flat $0.07/s, and VEED **Avatars / Talking Characters**,
  the preset library product. VEED's own guide draws the first distinction explicitly
  ([lipsync API guide](../../sources/veed.io/lipsync-apis-fabric-1-0-and-lipsync-2-0/2026-10-26.md)).

| Route | Identifier | Notes |
| --- | --- | --- |
| VEED API | `POST /v1/fabric-1.0` | Direct, prepaid API credits, business use only |
| fal | `veed/fabric-1.0` | Base image-to-video; `public`, `licenseType: commercial`, "Partner" badge |
| fal | `veed/fabric-1.0/fast` | Same schema, higher price ($0.10/$0.20 per second); no vendor counterpart |
| fal | `veed/fabric-1.0/text` | Adds `text` (≤2,000 chars) + optional `voice_description`; no vendor counterpart |
| Replicate | `veed/fabric-1.0` | Same $0.08/$0.15 per-second schedule, `hardware: CPU` |
| VEED editor | "Fabric 1.0" under Video → Generate → Talking Video | 240 AI credits per generation |

Sources: [fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md),
[api.veed.io](../../sources/veed.io/api-fabric-1-0-endpoint/2026-10-26.md),
[Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md),
[editor how-to](../../sources/veed.io/how-to-use-fabric-1-0/2026-10-26.md).

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| ≤2025-09-09 | `veed.io/ai/fabric-1-0` live as "Fabric 1.0 **Waitlist**" | [archive](../../sources/archive.org/veed-io-fabric-1-0-pages/2026-10-26.md) |
| 2025-09-19 | fal publishes `veed/fabric-1.0` (`date` and `publishedAt` both 22:01:20Z) | [fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md) |
| 2025-09-28 | `veed.io/ai/fabric-1-0-api` first archived | [archive](../../sources/archive.org/veed-io-fabric-1-0-pages/2026-10-26.md) |
| 2025-10-01 | fal publishes `veed/fabric-1.0/fast` | [fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md) |
| 2025-10-08 | Editor product page carries the credit/length FAQ (3×10 s free, 30 s paid, 240 credits) | [archive](../../sources/archive.org/veed-io-fabric-1-0-pages/2026-10-26.md) |
| 2025-10-09 | `veed.io/ai-models/video/fabric-1.0` first archived; states a 30-second ceiling and "longer durations coming soon" | [archive](../../sources/archive.org/veed-io-fabric-1-0-pages/2026-10-26.md) |
| 2025-12-10 | Replicate version created | [Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md) |
| 2025-12-12 | fal publishes `veed/fabric-1.0/text` | [fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md) |
| 2026-06-25 | Replicate version last updated | [Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md) |
| 2026-08-19 | Help-centre how-to (30 s per clip) written | [how-to](../../sources/veed.io/how-to-use-fabric-1-0/2026-10-26.md) |

The waitlist date is a marketing-page date, not a launch date. fal's 2025-09-19 publication is the
earliest evidence that the model could actually be called.

## Current assessment

Fabric 1.0 is a **distinct, vendor-owned specialist**, not a repackaging of someone else's lip-sync
model in the way fal's "Partner" badge might suggest. Three things support that: VEED sells it under its
own API at a rate identical to fal's, VEED's own documentation describes the same input contract on both
routes, and the vendor calls it proprietary
([API article](../../sources/veed.io/fabric-1-0-api-help-article/2026-10-26.md)). "Proprietary" is a
vendor claim about ownership, not an architecture disclosure — no model card, technical report, or
weights exist for it, and the mechanism description in the corpus ("analyzes audio waveforms to extract
phoneme timing and intensity, then maps these features to facial keypoints") is fal's explanation, not
VEED's ([fal landing](../../sources/fal.ai/veed-fabric-1-0-landing/2026-10-26.md)).

**What Fabric adds over VEED's other avatar tools** is input freedom, and it is the one differentiator
VEED states on both its product page and its API documentation. The library product requires choosing
one of VEED's preset characters and typing a script (up to 20,000 characters); its appearance "cannot be
changed, even if they are regenerated, or instructions are included in the prompt"
([avatar how-to](../../sources/veed.io/ai-avatars-talking-characters/2026-10-26.md)). Fabric takes any
image the user owns — "no avatar library or avatar selection required" — and drives it from real audio
rather than text. On fal the same contrast is visible in the schemas: `veed/avatars/*` requires an
`avatar_id` from a closed 28-entry enum, while `veed/fabric-1.0` takes a URL
([fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md)). Fabric also survives the
library churn: VEED is retiring a set of legacy avatars during 2026 and will silently swap "a newer and
closely matched avatar" into existing projects
([sunset notice](../../sources/veed.io/legacy-avatar-sunset/2026-10-26.md)).

It remains **current but capped**. Nothing captured is deprecated: fal marks the endpoint `public`,
`deprecated: false`; Replicate's copy was updated as recently as 2026-06-25; the vendor's API platform
lists Fabric 1.0 among its five model entries, one of which is still "coming soon". But the editor path
is limited to 30-second clips and VEED's own API to 1 minute, which puts it at the short end of the
talking-head market and makes long-form output a stitching job.

## Documented capabilities

All of the following is vendor or host documentation. No direct tests were run.

### Inputs

- **Image + audio, both required, both by URL.** `image_url` and `audio_url` must be `http(s)` URLs of at
  most 8,192 characters; `resolution` must be `480p` or `720p`
  ([api.veed.io schema](../../sources/veed.io/api-fabric-1-0-endpoint/2026-10-26.md)). fal and Replicate
  mirror this with a 2,083-character URL cap and no defaults except Replicate's `720p`
  ([fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md)).
- **The image must contain a face.** VEED: "Public URL of the image. Must contain a face"; fal: "a clear,
  front-facing face"; Replicate: no such note
  ([lipsync API guide](../../sources/veed.io/lipsync-apis-fabric-1-0-and-lipsync-2-0/2026-10-26.md),
  [fal landing](../../sources/fal.ai/veed-fabric-1-0-landing/2026-10-26.md)).
- **The audio must be speech you already have.** The VEED API "takes audio, not text: to make the image
  say a script, generate the audio with a text-to-speech tool first"
  ([api.veed.io](../../sources/veed.io/api-fabric-1-0-endpoint/2026-10-26.md)). In the editor, VEED's own
  TTS is one of three audio sources
  ([how-to](../../sources/veed.io/how-to-use-fabric-1-0/2026-10-26.md)).
- **Accepted file types differ by route.** fal's playground lists images `jpg, jpeg, png, webp, gif, avif,
  heic, heif` and audio `mp3, ogg, wav, m4a, aac`; Replicate's README lists images `jpg, jpeg, png` and
  audio `mp3, wav, m4a, aac` ([fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md)). The vendor's own API documents
  no codec list at all.
- **Text input exists on one host only.** `veed/fabric-1.0/text` takes `text` (≤2,000 characters) plus an
  optional `voice_description`, and says "The primary voice description is auto-generated from the
  image" ([fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md)). No VEED
  document describes a text-in Fabric endpoint; the vendor API rejects that shape outright.

### Output envelope

| Property | Value | Source |
| --- | --- | --- |
| Resolution | 480p or 720p only | [api.veed.io](../../sources/veed.io/api-fabric-1-0-endpoint/2026-10-26.md) |
| Container | MP4 (fal example `video/mp4`) | [lipsync API guide](../../sources/veed.io/lipsync-apis-fabric-1-0-and-lipsync-2-0/2026-10-26.md) |
| Duration | follows the audio; ceiling stated five ways (see below) | — |
| Frame rate | not documented on any page | — |
| Aspect ratio | not documented; no parameter | — |
| Audio in output | not documented | — |
| Seed | no `seed` parameter on any route | [fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md) |
| Latency | "usually a minute or two" per job | [lipsync API guide](../../sources/veed.io/lipsync-apis-fabric-1-0-and-lipsync-2-0/2026-10-26.md) |

There is **no duration parameter**. Output length is whatever the input audio is, so the ceiling is a
rejection threshold, not a control: over-long audio fails with `audio_too_long`
([api.veed.io](../../sources/veed.io/api-fabric-1-0-endpoint/2026-10-26.md)).

**The ceiling is contradictory across five surfaces, and the contradiction is preserved here rather than
resolved:**

| Surface | Stated ceiling | Source |
| --- | --- | --- |
| Editor, free plan | 10 s per generation, 3 free generations | [landing page](../../sources/veed.io/fabric-1-0-product-landing/2026-10-26.md) |
| Editor, paid plan | **30 s per clip**; audio also capped at 30 s | [how-to](../../sources/veed.io/how-to-use-fabric-1-0/2026-10-26.md), [landing page](../../sources/veed.io/fabric-1-0-product-landing/2026-10-26.md) |
| VEED API | **1 minute per API call**; longer content requires multiple calls | [API article](../../sources/veed.io/fabric-1-0-api-help-article/2026-10-26.md) |
| Replicate | "up to **60 seconds**" | [Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md) |
| Vendor model page | "up to **5 minutes** in duration" | [model page](../../sources/veed.io/fabric-1-0-model-page/2026-10-26.md) |

The 5-minute figure is the outlier and the newest. The 2025-10-09 snapshot of the same model page said
"generate up to 30 seconds using AI credits" and "Currently, videos generate up to 30 seconds, with
longer durations coming soon"; the current page says 5 minutes and the editor landing page still says 30
seconds ([archive](../../sources/archive.org/veed-io-fabric-1-0-pages/2026-10-26.md)). Read the 1-minute
API limit as the operative per-call ceiling, 30 seconds as the current editor limit, and 5 minutes as an
announced-but-unconfirmed expansion that both the landing page and the 2026-08-19 help article fail to
reflect. The model page's own FAQ also resolves long output as stitching — "For longer content, create
multiple camera angles and stitch them together across separate generations".

### Claimed capabilities (vendor marketing, unverified)

- **Style transfer.** "realistic, clay animation, and anime styles through text prompts or image uploads"
  ([model page](../../sources/veed.io/fabric-1-0-model-page/2026-10-26.md)). The API has no style
  parameter; the claim must mean the style comes from the source image or the prompt text, which the API
  does not accept. Nothing captured tests it.
- **"Fabric Emotions".** "Add pauses, laughter, even sound effects by adding tags [excited!] to your
  script" ([landing page](../../sources/veed.io/fabric-1-0-product-landing/2026-10-26.md)). This appears on
  one marketing page only; no help-centre, API, or host document mentions tag syntax.
- **Camera and framing control via prompt.** "Specify camera directions in your prompts like 'wide shot'
  or 'close up'" ([model page](../../sources/veed.io/fabric-1-0-model-page/2026-10-26.md)). Again no API
  parameter; there is no prompt field on any API route.
- **Positioning claims.** "faster and more cost-effective compared to more generalist text-to-video
  models" ([Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md)); "Trading broad
  animation capabilities for specialized lip-sync precision"
  ([fal landing](../../sources/fal.ai/veed-fabric-1-0-landing/2026-10-26.md)).

## Limitations and constraints

- **Short clips only, and the published limits disagree.** See the table above. Anyone planning a
  long-form workflow should assume 30 s (editor) or 60 s (API) per generation and budget for stitching.
- **Speech in, not text.** On both VEED routes the caller must supply synthesised audio; a text-only
  request is not a valid Fabric input
  ([lipsync API guide](../../sources/veed.io/lipsync-apis-fabric-1-0-and-lipsync-2-0/2026-10-26.md)).
  fal's `text` endpoint is the exception, and it is host-specific and undocumented by the vendor.
- **A clear, front-facing face is a hard input requirement.** Both the vendor and fal say so; there is no
  documented behaviour for profile, occluded, or multi-face images, and no failure code specific to face
  detection ([fal landing](../../sources/fal.ai/veed-fabric-1-0-landing/2026-10-26.md),
  [lipsync API guide](../../sources/veed.io/lipsync-apis-fabric-1-0-and-lipsync-2-0/2026-10-26.md)).
- **Multi-speaker behaviour is undocumented for Fabric.** VEED states "one speaker per video" for Lipsync
  2.0 only ([api.veed.io](../../sources/veed.io/api-fabric-1-0-endpoint/2026-10-26.md)).
- **No frame rate, aspect ratio, or output-audio specification anywhere.** A 480p/720p label without a
  frame rate or aspect ratio is not enough to predict delivered files.
- **No seed and no determinism controls**, so a re-run cannot be reproduced
  ([fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md)).
- **Regional restriction on free generations.** "Customers in India, Pakistan, and Bangladesh will not be
  able to get the free generations on Fabric, but they can use it w/ credits"
  ([model page](../../sources/veed.io/fabric-1-0-model-page/2026-10-26.md)).
- **The direct API route excludes consumers.** "The API is not available to consumers"; end users must be
  18+ and must have consented to their input being processed
  ([API terms](../../sources/veed.io/api-terms-of-use/2026-10-26.md)). fal's route has no equivalent
  published audience restriction in captured material.
- **Consent and impersonation rules are user warranties, not platform checks.** The Code of Conduct
  forbids content using "a person's name, image, voice or other information" without consent and forbids
  impersonation and removing provenance markings
  ([Code of Conduct](../../sources/veed.io/veed-code-of-conduct/2026-10-26.md)). No likeness-verification
  or liveness step is documented; enforcement is a `content_moderation` job failure
  ([API FAQ](../../sources/veed.io/veed-api-faq/2026-10-26.md)).
- **No open weights, no model card, no architecture disclosure.** All four routes are hosted, and the
  API terms prohibit reverse engineering or deriving the weights
  ([API terms](../../sources/veed.io/api-terms-of-use/2026-10-26.md)).
- **Host and vendor surfaces are not identical.** fal sells a `fast` variant that costs 25–33 % *more*
  per second and a `text` variant the vendor does not document; Replicate narrows the accepted image
  formats and restates the ceiling as 60 seconds. fal's catalogue marks the base endpoint
  `hostingType: serverless` rather than `proxy`, which does not settle whether fal runs the weights
  ([fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md)).
- **Replicate's runner is a private forwarding model** (`replicate/veed-fabric-1.0-internal-model`,
  `hardware: CPU`), so Replicate latency and behaviour are not independent evidence about the model
  ([Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md)).
- **No independent quality evidence.** No benchmark, arena, or third-party measurement of Fabric 1.0 was
  captured. The "4.6 / 2,100+ reviews" badge on the vendor page is an unlabelled site-wide widget
  ([model page](../../sources/veed.io/fabric-1-0-model-page/2026-10-26.md)).

## Access, pricing, licensing

### Per-second pricing (hosted routes, USD)

| Resolution | Fabric 1.0 (VEED API, fal, Replicate) | fal `fast` |
| --- | --- | --- |
| 480p | $0.08/s | $0.10/s |
| 720p | $0.15/s | $0.20/s |

Sources: [api.veed.io pricing block](../../sources/veed.io/api-fabric-1-0-endpoint/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md). All three routes agree on the
base rate, which is unusual in this corpus and suggests one published schedule rather than three
independent price settings.

Worked examples at the base rate: 10 s at 720p = **$1.50** (VEED's own example); 30 s at 720p =
**$4.50**; 30 s at 480p = **$2.40**; 60 s at 720p = **$9.00**. On fal's `fast` endpoint the same 60 s at
720p costs **$12.00**.

Billing mechanics:

- **Per second of generated video, no stated minimum** on either documented route
  ([API article](../../sources/veed.io/fabric-1-0-api-help-article/2026-10-26.md)); fal states "no
  minimums" outright ([fal landing](../../sources/fal.ai/veed-fabric-1-0-landing/2026-10-26.md)). The
  OpenAPI price block says `rounding: exact` with a one-second unit
  ([api.veed.io](../../sources/veed.io/api-fabric-1-0-endpoint/2026-10-26.md)).
- **Prepaid, non-refundable credits that expire two years after purchase**, prices excluding tax; VEED
  subscriptions and editor AI credits cannot be used for API calls
  ([API FAQ](../../sources/veed.io/veed-api-faq/2026-10-26.md),
  [API terms](../../sources/veed.io/api-terms-of-use/2026-10-26.md)).
- **The VEED API and fal are separate wallets** — "Credits or spend on one don't carry over to the
  other" ([API article](../../sources/veed.io/fabric-1-0-api-help-article/2026-10-26.md)).
- **Editor pricing is in AI credits, not dollars:** 240 credits per generation, with 3 free generations of
  up to 10 s each ([landing page](../../sources/veed.io/fabric-1-0-product-landing/2026-10-26.md)). The
  vendor's 2025-10-09 model page priced the same thing as "480 credits per 60-second clip"
  ([archive](../../sources/archive.org/veed-io-fabric-1-0-pages/2026-10-26.md)), so credits scale at
  roughly 8 per second of output — arithmetic from two vendor statements, not a published rate. The
  dollar value of a credit was not captured, so editor and API costs cannot be compared here.
- **Output URLs expire.** Default 24 hours after job completion, extendable per request to 30 days
  (2,592,000 s) via `X-Veed-Media-Expiration-Seconds`; an expired URL returns 410 and cannot be renewed
  ([API FAQ](../../sources/veed.io/veed-api-faq/2026-10-26.md)).
- **Enterprise escalation** at "more than 1,000 minutes of generation"
  ([landing page](../../sources/veed.io/fabric-1-0-product-landing/2026-10-26.md)).

### Licensing and commercial terms

- **No weights, no open licence.** Every route is hosted; fal and Replicate both flag commercial use
  permitted through their platforms, which is the host's statement about its own service, not a VEED
  licence grant ([fal catalogue](../../sources/fal.ai/veed-fabric-1-0-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/veed-fabric-1-0/2026-10-26.md)).
- **The customer owns input and output** on the VEED API: "you are the owner of your Input and Output,
  subject to any third party rights therein", with commercial use permitted
  ([API terms](../../sources/veed.io/api-terms-of-use/2026-10-26.md),
  [API FAQ](../../sources/veed.io/veed-api-faq/2026-10-26.md)).
- **No training on API content**: "We will not use your Input or Output to train our Models"; request and
  response bodies are kept 7 days unless `X-Veed-Store-IO: 0`
  ([API terms](../../sources/veed.io/api-terms-of-use/2026-10-26.md),
  [API FAQ](../../sources/veed.io/veed-api-faq/2026-10-26.md)).
- **Use restrictions:** no reverse engineering or weight derivation, no using output to train a competing
  model, no bypassing moderation or provenance markings, no removing watermarks
  ([API terms](../../sources/veed.io/api-terms-of-use/2026-10-26.md)).
- **Rights in the source image and voice are the user's responsibility**, warranted explicitly and backed
  by the Code of Conduct's consent clause
  ([API terms](../../sources/veed.io/api-terms-of-use/2026-10-26.md),
  [Code of Conduct](../../sources/veed.io/veed-code-of-conduct/2026-10-26.md)).
- **fal's and Replicate's own terms were not captured**, so the fal-route commercial terms beyond the
  `commercial` licence flag and Replicate's public listing are unverified.

## Unresolved questions

1. **What is the real per-generation ceiling?** Vendor pages say 5 minutes, 1 minute, and 30 seconds in
   different places. Only a direct test would settle whether a 90-second audio file succeeds on
   `POST /v1/fabric-1.0` or fails with `audio_too_long`.
2. **Did the model change since 2025-09?** fal and Replicate expose endpoint dates, not a VEED checkpoint
   ID. Replicate's version was updated 2026-06-25 and nothing says what changed.
3. **Is fal running the weights or forwarding?** `hostingType: serverless` says one thing, the identical
   price schedule and VEED's "hosted on fal.ai" framing say another. No page states it.
4. **What is `veed/fabric-1.0/fast`?** It costs more per second, has no vendor documentation, and fal
   claims equal quality at higher speed. It may be a different VEED tier, a different serving
   configuration, or a mispriced duplicate.
5. **What is the output frame rate and aspect ratio?** Not documented on any surface.
6. **Does Fabric handle more than one face or speaker?** Undocumented; the sibling Lipsync 2.0 explicitly
   does not.
7. **Do "style transfer" and "Fabric Emotions" exist on the API routes?** Both are described only on
   marketing pages, and the API has neither a style nor a prompt parameter.
8. **Was there ever a Fabric 1.1 or a successor?** VEED's model directory lists "Fabric 1.0" with no
   later version; nothing captured suggests a replacement, and the roster row is a retained specialist.
9. **How does Fabric 1.0 compare with HeyGen Avatar IV/V, OmniHuman, or sync-3 on any measured axis?** No
   independent measurement of any of them was captured for this page.

## Evidence status

Evidence floor: **met.** First-party: six VEED documents — the model page, the product landing page, the
editor how-to, the API article, the Fabric/Lipsync API guide, and the API FAQ — plus VEED's OpenAPI
document and endpoint reference, its API Terms of Use, its Code of Conduct, the library-avatar how-to and
the legacy-avatar sunset notice. Independent hosts: one fal record (catalogue metadata, three endpoint
schemas, pricing strings), one fal landing-page record, and one Replicate record (README, schema,
pricing, version dates). Dating is supported by an Internet Archive CDX record. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules; quality
claims are the vendor's or the host's. Where the vendor contradicts itself on duration, both statements
are recorded rather than reconciled.

The next useful evidence would be a small reproducible test set against named endpoints and dates: a
10 s, 30 s, 61 s and 5-minute audio against `POST /v1/fabric-1.0` and `veed/fabric-1.0` to find the real
`audio_too_long` threshold; the same image and audio at 480p and 720p to check whether the resolution
label changes delivered pixels or only price; a profile and a two-face image to test the "must contain a
face" rule; and a `fast`-vs-base comparison at identical inputs to test fal's "same quality" claim.
