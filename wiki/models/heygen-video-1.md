# HeyGen Video 1

HeyGen's general-purpose video model, released in late 2026 and identified in the API as
**`heygen-video-1`** on `POST /v3/models/videos`
([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md),
[model page](../../sources/heygen.com/heygen-video-1-model-page/2026-10-26.md)). It generates a scene
with its own dialogue, ambience and sound effects from a prompt, a first-frame image, or reference
media. It is **not** an avatar engine: the vendor describes it as "a different tool from the avatar
rendering engines" behind `POST /v3/videos`, which animate a look you already own
([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).

The model is built on **MiniMax H3** and post-trained by HeyGen — the vendor states this in its own
documentation, and Artificial Analysis independently labels the row "Based on MiniMax H3" with
`isDerived: true` ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md),
[AA leaderboard](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md)).
So it is a distinct, vendor-tuned model identity, not a from-scratch base model and not a repackaging
of an avatar engine.

## Identity

- **Canonical name:** **HeyGen Video 1**. The marketing page title is "HeyGen Video 1: Text, Image and
  Reference to Video"; inside the page the product is "HeyGen Video"
  ([model page](../../sources/heygen.com/heygen-video-1-model-page/2026-10-26.md)).
- **Model ID:** `heygen-video-1`. "Only heygen-video-1 is supported"
  ([API reference](../../sources/heygen.com/heygen-video-create-reference/2026-10-26.md)).
- **Vendor:** HeyGen. No weights, no open checkpoint, no licence beyond HeyGen's hosted terms.
- **Base model:** MiniMax H3, post-trained by HeyGen
  ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)); AA's `baseModel` field
  agrees ([AA](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md)).
- **Vendor family:** "The v3 API exposes three model families" — HeyGen Video, HeyGen Avatar (Avatar
  V/IV/III engines), and HeyGen Voice ([models index](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).
  HeyGen Video and HeyGen Voice are addressed by model IDs on `/v3/models/*`; the avatar engines are
  selected per request through `engine` on `/v3/videos`.
- **Aliases and host IDs:**

| Surface | Identifier | Notes |
| --- | --- | --- |
| HeyGen API | `heygen-video-1` | model ID; endpoint `POST /v3/models/videos` |
| HeyGen product | "HeyGen Video 1" / "HeyGen Video" | page slug `/models/heygen-video-1` |
| fal | `heygen/heygen-video/{text-to-video,image-to-video,reference-to-video}` | `modelFamily: "HeyGen Video"`; note the bare `heygen/` namespace, not `fal-ai/` |
| Replicate | — | not listed (404) |
| Artificial Analysis | "HeyGen Video 1" | `releaseDate` 2026-10-13 |

Sources: [API reference](../../sources/heygen.com/heygen-video-create-reference/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/heygen-video-catalogue/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md).

### Distinct from Avatar 5 / Avatar V

The separation is documented on both sides, and it is architectural rather than cosmetic:

| | HeyGen Video 1 | Avatar V |
| --- | --- | --- |
| Endpoint | `POST /v3/models/videos` | `POST /v3/videos` |
| Selector | `model: "heygen-video-1"` | `engine: {"type": "avatar_v"}` |
| Input | prompt / first-frame image / reference media | a trained avatar look plus script or audio |
| Invented content | subject, setting, light and sound | motion and speech for an existing look |
| Audio | generated dialogue, ambience and effects | cloned or supplied voice |
| Consent gate | none; user warrants consent in the Terms | digital-twin consent flow before rendering ([avatar consent](../../sources/heygen.com/avatar-consent/2026-10-26.md)) |

The last row is the sharpest difference: HeyGen's avatar consent machinery applies to looks, not to
HeyGen Video, and no captured source documents a consent step for this endpoint — so the model has **no
per-request consent verification**
([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md),
[terms](../../sources/heygen.com/terms-of-service/2026-10-26.md)). See
[Avatar V](heygen-avatar-5.md) for the engine's own page.

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-09 | Changelog "Added — HeyGen Video API": `heygen-video-1` enters the public API reference at 5–15 s, 480p/768p, ≤5,000-character prompts, ≤12 references | [changelog](../../sources/heygen.com/heygen-video-changelog/2026-10-26.md) |
| 2026-10-13 | AA `releaseDate` | [AA](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md) |
| 2026-10-14 | AA `introducedAt` (both boards, ~2 s apart) | [AA](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md) |
| 2026-10-15 | HeyGen Terms of Service last updated | [terms](../../sources/heygen.com/terms-of-service/2026-10-26.md) |
| 2026-10-20 | fal endpoint `date` for all three modes | [fal catalogue](../../sources/fal.ai/heygen-video-catalogue/2026-10-26.md) |
| 2026-10-21 | fal `publishedAt` for all three modes | [fal catalogue](../../sources/fal.ai/heygen-video-catalogue/2026-10-26.md) |
| 2026-10 | Changelog: 2K, then 1080p at the 2K rate, then `auto` duration, then 30-second T2V/I2V | [changelog](../../sources/heygen.com/heygen-video-changelog/2026-10-26.md) |
| 2026-10-31 | End of the "launch price" window on the model page and of fal's 50 % promo | [model page](../../sources/heygen.com/heygen-video-1-model-page/2026-10-26.md), [fal catalogue](../../sources/fal.ai/heygen-video-catalogue/2026-10-26.md) |

**The exact launch date is unresolved.** The only first-party date is a month ("Added — September
2026" for the API reference), AA says 2026-10-13, and fal's endpoint metadata says 2026-10-20. A
staged rollout — API docs in September, product and leaderboard launch in October — is the natural
reading, but no source states it. Every captured date is well inside the roster's one-year window
(≥ 2025-10-26), so this model is **in-window** on any reading.

## Current assessment

HeyGen Video 1 is a **real, current, general-purpose text/image/reference-to-video model**, not an
avatar product in disguise and not a rebadged MiniMax endpoint. Three things support that:

1. **Vendor documentation gives it its own identity, parameters and pricing**
   ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).
2. **An independent host serves all three modes** under its own endpoints
   ([fal catalogue](../../sources/fal.ai/heygen-video-catalogue/2026-10-26.md)).
3. **An independent evaluator measures it** and places it in the leading group of text-to-video
   models ([AA](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md)).

On AA's **AA-Video-T2V v2.1** board it is **4th of 30** at Elo 1157 ±15 (5,714 votes), statistically
tied with the rows above and below it (MiniMax H3 1158, Dreamina Seedance 2.5 1156). On the
**AA-Video-T2V-Silent v2.1** board it is **1st of 32** at 1143 ±16 (5,389 votes)
([AA](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md)).

That split is the most useful thing in the evidence. The vendor's page claims it is "Ranked first on
Artificial Analysis' video leaderboard"; that is true of the silent board and **not** of the main
board, where it is fourth ([model page](../../sources/heygen.com/heygen-video-1-model-page/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md)). The model's
weakest categories on the main board are `live-action-film` (10th), `architecture-and-real-estate`
(10th), `audio-synchronization` (9th) and `dialogue-and-lip-sync` (9th) — while it is 1st in `physics`,
`animation-and-gaming` and `lighting-and-materials`. Read together: strong at objects, physics and
stylised looks; weaker at photoreal humans, real places, and its own generated audio. That is
consistent with the vendor's own stated weak spots ("soft organic motion … and close hand work like
assembling or operating equipment"), and it explains why the silent board flatters the model more than
the main one.

Caveat on all of that: AA benchmarked it with `prompt_enhancement: "ultraquality"`, the slowest
setting, which also caps duration at 15 s — not the default (`quality`) and not fal's default
(`turbo`) ([AA](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md),
[developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)). The scores describe one
configuration.

**Practical verdict.** Pick it when you want a short, contained shot with matching sound from one
prompt and do not need an avatar, a last frame, or a 30-second clip through fal. Do not pick it for
on-screen text, close hand work, photoreal crowds, or anything where the audio track has to carry the
scene — the vendor concedes the first two and AA's category ranks point at the rest.

## Documented capabilities

Everything in this section is vendor or host documentation. No direct tests were run.

### Modes and inputs

| Mode | You give it | You get | Duration |
| --- | --- | --- | --- |
| `text_to_video` | prompt | a new scene with sound | 5–30 s (`turbo`/`quality`), else 5–15 s |
| `image_to_video` | prompt + one image | clip that opens on the image as first frame | 5–30 s (`turbo`/`quality`), else 5–15 s |
| `reference_to_video` (default) | prompt + images/videos/audio | new scene preserving supplied subjects | 5–15 s |

- **Prompt:** 1–32,000 characters per the guide, 16,000 per the API reference, 5,000 at September
  launch ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md),
  [API reference](../../sources/heygen.com/heygen-video-create-reference/2026-10-26.md),
  [changelog](../../sources/heygen.com/heygen-video-changelog/2026-10-26.md)).
- **First frame only.** `image_to_video` treats the image as the literal first frame and follows its
  proportions and EXIF orientation; there is no last-frame control
  ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).
- **References:** up to 9 images, 3 videos, 3 audio recordings; list order defines the prompt labels
  `<Picture 1>`, `<Video 1>`; the model reads only the first 5 seconds of each reference video; videos
  must be between 1:4 and 4:1
  ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md),
  [API reference](../../sources/heygen.com/heygen-video-create-reference/2026-10-26.md)).
- **Reference media limits:** image by URL 16 MB, video/audio by URL 32 MB, image base64 5 MB,
  video/audio base64 16 MB; URLs are fetched server-side with SSRF checks and redirects are not
  followed ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).
- **Prompt enhancement:** `turbo`, `quality` (default), `ultraquality`, `disabled`; `default` is a
  legacy alias for `turbo` ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).
- **Auto duration:** counts quoted dialogue at 2.5 words/s, adds 1 s lead-in, floors at 8 s and
  respects the mode cap; billing uses the resolved length
  ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).
- **Seeds:** "the same prompt and the same seed, submitted in succession, return an identical file",
  but reproducibility is "within a deployment", not permanent
  ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).
- **No editing or extension API.** The launch films chain shots by feeding each clip's last frame into
  the next `image_to_video` call — a workflow, not an endpoint
  ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).

### Output

| Property | Value | Source |
| --- | --- | --- |
| Container | MP4, H.264 | [developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md) |
| Frame rate | 24 fps, rounded up to whole frames (7 s → 175 frames) | [developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md) |
| Audio | AAC, 32 kHz stereo, generated dialogue and effects | [developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md) |
| Resolution | `480p`, `768p` (default), `1080p`, `2k` | [developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md) |
| Pixel sizes | 16:9 → 832×480 / 1344×768 / 1890×1080 / 2688×1536; 9:16 transposed; 21:9, 4:3, 1:1, 3:4 only at 480p/768p | [developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md) |
| Aspect ratios | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16, plus `adaptive` (Ref2V); I2V follows the first frame | [developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md) |
| Delivery | signed HTTPS URL on the job record | [developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md) |
| Callbacks | one attempt per job, events `avatar_video.success` / `avatar_video.fail`, poll as fallback | [developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md) |
| Idempotency | `Idempotency-Key`, 24 h replay window, `409` on concurrent duplicate | [developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md) |

The callback event names are avatar-namespaced (`avatar_video.*`) even for this non-avatar model — a
documentation artefact worth knowing when wiring webhooks.

### Vendor claims (labelled as claims)

From the developer doc, with no measurements attached: scenes "hold together" (objects keep size,
shape and place, "obey physics"); literal prompt following ("If you did not ask for dialogue, you do
not get dialogue"); picture and sound generated from the same prompt; and `reference_to_video`
preserves "the colour, form and markings" of a supplied object. The same page concedes weak spots:
"long on-screen text, soft organic motion such as petals, paper and hair, and close hand work"
([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).

The marketing page adds "#1 video model" and "Ranked first on Artificial Analysis' video leaderboard"
([model page](../../sources/heygen.com/heygen-video-1-model-page/2026-10-26.md)) — see the assessment
above for what the board actually shows.

## Limitations and constraints

- **Duration ceiling depends on the route.** 30 s is reachable only for text/image with `turbo` or
  `quality`; reference-to-video, `ultraquality`, `disabled`, and MCP are capped at 15 s. **fal caps
  every mode at 15 s**, so the longest clips are vendor-API-only
  ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md),
  [fal schemas](../../sources/fal.ai/heygen-video-endpoint-schemas/2026-10-26.md)).
- **`1080p` and `2k` only render 16:9 or 9:16**; the other ratios exist at 480p/768p only
  ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md)).
- **No image-to-video measurement.** AA lists it only on text-to-video boards; there is no independent
  I2V or reference-to-video score ([AA](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md)).
- **Host gaps at fal:** no `auto` duration, no asset-ID or base64 inputs, no callbacks, no
  `end_user_id`, `prompt_enhancement` defaults to `turbo` instead of `quality`, and the schema does
  not enforce "at least one reference" for reference-to-video
  ([fal schemas](../../sources/fal.ai/heygen-video-endpoint-schemas/2026-10-26.md)).
- **Replicate does not carry it.** Six HeyGen models are listed there; none is HeyGen Video
  (checked 2026-10-26).
- **Consent is contractual, not enforced.** No captured source documents a consent step for reference
  images of people; the Terms prohibit "uploading images of individuals … without their consent" and impersonation
  without authorization, and the moderation policy forbids representing "real individuals, including
  celebrities or public figures, without their explicit consent". Enforcement is HeyGen's automated
  screening plus discretionary human review
  ([terms](../../sources/heygen.com/terms-of-service/2026-10-26.md),
  [moderation policy](../../sources/heygen.com/content-moderation-policy/2026-10-26.md)).
- **Political content is restricted**, which is stricter than most video models: the moderation policy
  lists "content that displays political opinions … or content that promotes political parties or
  candidates, political campaigning or lobbying government officials" as non-permissible
  ([moderation policy](../../sources/heygen.com/content-moderation-policy/2026-10-26.md)).
- **The moderation surface is opaque.** No refusal taxonomy, threshold, or pre- vs post-generation
  distinction is published; `enable_safety_checker` exists only on fal, and whether fal forwards it
  upstream is unstated ([fal schemas](../../sources/fal.ai/heygen-video-endpoint-schemas/2026-10-26.md)).
- **Documentation contradictions** to treat as defects, not behaviour: prompt limit 32,000 vs 16,000
  vs 5,000; reference total "12" vs 9+3+3=15 vs "fifteen"; JSON-LD "5 to 15 second" clips vs the
  documented 30 s; `mode` defaulting to `reference_to_video` while requiring references.
- **Paid API keys only.** "This route runs on paid API keys"; the free playground (2 clips/day, 5 s,
  768p) is a separate consumer surface with no documented parity to the API model
  ([developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md),
  [model page](../../sources/heygen.com/heygen-video-1-model-page/2026-10-26.md)).
- **No regional, residency, or data-retention statement** was captured.

## Access, pricing, licensing

### HeyGen first-party

| Route | Price | Source |
| --- | --- | --- |
| API | **$0.01/s**, "launch price through October" (i.e. to 2026-10-31) | [model page](../../sources/heygen.com/heygen-video-1-model-page/2026-10-26.md) |
| API, 1080p/2K | 3× the 768p rate, "for output seconds and reference-video seconds alike" | [developer doc](../../sources/heygen.com/heygen-video-doc/2026-10-26.md) |
| Playground | free with an account, 2 clips/day, 5 s, 768p, four styles | [model page](../../sources/heygen.com/heygen-video-1-model-page/2026-10-26.md) |
| Creator plan ($29/mo) | lists "HeyGen Video 1: text, image, and reference to video" among plan features | [pricing page](../../sources/heygen.com/pricing-plans/2026-10-26.md) |

The model page quotes the *promo* rate as the headline. The regular rate is inferable from fal, which
states it explicitly: "$0.01 per second at 480p and 768p, and $0.03 per second at 1080p and 2K
(regular price: $0.02 and $0.06 per second)"
([fal catalogue](../../sources/fal.ai/heygen-video-catalogue/2026-10-26.md)). The 3× multiplier
between 768p and 1080p/2K holds on both sides, so the two vendors' schedules are consistent.

Subscription billing is in credits, and "the number of credits a video or asset uses can vary based on
which AI model is used, video duration, and the complexity"
([pricing page](../../sources/heygen.com/pricing-plans/2026-10-26.md)); no credit-per-second figure
for HeyGen Video is published.

### fal — same schedule, promo-dated

$0.01/s at 480p/768p and $0.03/s at 1080p/2K until **2026-10-31**, then $0.02/s and $0.06/s
([fal catalogue](../../sources/fal.ai/heygen-video-catalogue/2026-10-26.md)). All three endpoints are
`hostingType: "proxy"`, `licenseType: "commercial"` — a resale price over an upstream cost, not an
independent implementation.

### Artificial Analysis — unexplained rate

AA records **$2.40/min** (i.e. $0.04/s) for the row, which matches neither the promo nor the regular
schedule at any resolution ([AA](../../sources/artificialanalysis.ai/heygen-video-1-text-to-video/2026-10-26.md)).
AA does not publish its price basis; the discrepancy is left open.

### Licensing and terms

- **Hosted only.** No weights, no open licence, no self-hosting. Every route proxies HeyGen.
- **Output ownership and commercial use are first-party.** The Terms state "you own all rights in your
  User Input or User Output" and do not restrict use "for your own purposes (including for commercial
  purposes)", outside termination; HeyGen reserves the right to remove content at its discretion
  ([terms](../../sources/heygen.com/terms-of-service/2026-10-26.md)).
- **Likeness rights are the user's obligation**, enforced by warranty and moderation rather than by a
  consent gate ([terms](../../sources/heygen.com/terms-of-service/2026-10-26.md),
  [moderation policy](../../sources/heygen.com/content-moderation-policy/2026-10-26.md)).
- **Watermarking is undocumented for the API.** The subscription pricing page marks the Free plan's
  videos "watermarked" and does not repeat the claim for paid plans, and neither the model page nor the
  developer doc says whether API output carries a watermark
  ([pricing page](../../sources/heygen.com/pricing-plans/2026-10-26.md)).

## Unresolved questions

1. **What is the launch date?** First-party evidence is a month ("September 2026" for the API
   reference); AA says 2026-10-13; fal says 2026-10-20. No source reconciles them.
2. **What is the prompt limit — 5,000, 16,000 or 32,000 characters?** Three first-party statements
   disagree, and fal follows the largest.
3. **Is the reference total 12 or 15?** The guide's table says 12 while its own rows sum to 15; the API
   reference says fifteen; the September changelog said twelve.
4. **What happens to pricing after 2026-10-31?** Both HeyGen and fal quote the promo rate with a
   stated regular rate only on fal. Nothing captured shows the November schedule.
5. **Why does AA record $2.40/min?** No published basis; it is 2× the 768p regular rate and 4× the
   promo rate.
6. **Does the free playground run `heygen-video-1`?** The page is titled "HeyGen Video 1" but never
   names the API model, and the free tier's output is 5 s/768p only.
7. **Are the 30-second clips available through any host?** fal caps at 15 s; only the vendor API
   documents 16–30 s.
8. **How are reference images of real people screened?** The moderation policy describes automated
   flagging and human review but names no threshold, and the model doc says nothing about consent.
9. **Is there a successor?** The naming ("Video 1") implies versioning; no "Video 2" appears in the
   changelog, the model index, or fal's catalogue at capture.
10. **How good is image-to-video and reference-to-video?** No independent measurement of either mode
    exists in the captured evidence.

## Evidence status

Evidence floor: **met.** First-party: six records under `sources/heygen.com/` — the model page, the
developer guide, the create-video API reference, the changelog entries, the Terms of Service, and the
Content Moderation Policy. Independent host: fal catalogue metadata plus three endpoint schemas, with
the Replicate absence recorded separately. Independent evaluation: the Artificial Analysis
text-to-video leaderboard, both boards. All captured 2026-10-26.

**No direct tests have been run for this page.** Capability statements are vendor or host
documentation; prices are published schedules; the only measurement is AA's blind pairwise Elo, which
covers text-to-video only and only under `ultraquality` enhancement.

The next useful evidence would be a small reproducible set against named endpoints and dates: the
same prompt and seed on the vendor API and on fal to confirm the enhancement default changes output;
a 20–30 s request on the vendor API against fal's 15 s rejection; an `image_to_video` chain from a
last frame to test continuity; a `reference_to_video` call with a person's photo to see whether any
consent or moderation step appears; a short on-screen-text prompt to reproduce the vendor's admitted
weakness; and a 1080p request to confirm the 3× billing on the invoice.
