# Kling O3

**Kling O3 is fal's label for Kuaishou's Kling 3.0 Omni** — the reference- and edit-driven surface of
the Kling 3.0 generation. The vendor, Replicate and Artificial Analysis all call the model "Kling 3.0
Omni"; "O3" appears in no vendor API reference
([vendor API reference](../../sources/kling.ai/kling-video-3-0-omni-api-reference/2026-10-26.md)).
fal applies the label to seventeen endpoints — fifteen video, two image — and the one this page is
anchored on,
`fal-ai/kling-video/o3/pro/video-to-video/edit`, is the **video-editing** surface: source clip in,
edited clip out, at $0.168 per second
([fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md)).

It is inside the roster's one-year window. The earliest dated evidence is fal's endpoint publication on
**2026-02-04**, which Artificial Analysis independently records as the model's release date and the
vendor's own user guide corroborates two days later on 2026-02-06
([fal](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/kling-3-0-omni-video-editing/2026-10-26.md),
[vendor guide](../../sources/kling.ai/kling-video-3-omni-user-guide/2026-10-26.md)).

Generation-side capabilities of the same model (text-, image- and reference-to-video, native audio,
multi-shot, 3–15 s, 720p/1080p/4K) are documented on [Kling 3.0](kling-3.0.md) and are not repeated
here. This page covers the alias, the lineage, and the editing surface.

## Identity

- **Canonical name:** Kling 3.0 Omni. The vendor's API reference documents it as part of the group
  "Kling 3.0 & 3.0 Omni" under the path segment `3-0-omni`, and the model card reads "Kling 3.0 & 3.0
  Omni — Synchronized audio-video generation, intelligent storyboarding and element reference"
  ([vendor API reference](../../sources/kling.ai/kling-video-3-0-omni-api-reference/2026-10-26.md)).
- **Roster label:** "Kling O3" is a **host label, not a model name**. fal's catalogue carries
  `modelFamily: "Kling O3"` and `group.key: "kling-o3"` on every Omni row, and its endpoint titles read
  "Kling O3 Edit Video [Pro]" and "Kling O3 Text to Video [Standard]". The `api.fal.ai` record
  describes the edit endpoint as "Edit videos using Kling O3 from Kling Team!"
  ([fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md)).
- **Vendor:** Kuaishou, operated as Kling AI. The contracting entity in the terms of service is Kling
  AI Pte. Ltd. ([terms](../../sources/kling.ai/kling-ai-terms-of-service/2026-10-26.md)).
- **Aliases in circulation:** "Kling VIDEO 3.0 Omni" (vendor blog and guide copy), "Kling 3.0 Omni"
  (vendor API reference, Replicate, Artificial Analysis), "O3" / "Kling O3" (fal), "Kling Omni 3" (fal's
  description for the sibling image endpoints), "3.0 Omni" (vendor shorthand in guide prose). One
  vendor URL also uses the shorthand: the 3.0-vs-Omni comparison is served at
  `kling.ai/blog/kling-v3-vs-o3-comparison-guide` even though the page text says "VIDEO 3.0 Omni"
  ([vendor blog](../../sources/kling.ai/kling-video-3-0-vs-3-0-omni/2026-10-26.md)).
- **Siblings:** Kling 3.0 (prompt-led, same generation), Kling 3.0 Turbo, Kling VIDEO O1 (predecessor),
  Kling 4.0 (successor, with its own edit endpoint), plus the Kling Image 3.0 / 3.0 Omni image models.

### Why "O3" means "Omni 3"

The vendor's Omni user guide states the lineage directly:

> Based on the next-generation unified multimodal large model, the Kling VIDEO 2.6 model has been
> upgraded to VIDEO 3.0, and the Kling VIDEO O1 model has been upgraded to VIDEO 3.0 Omni, bringing a
> comprehensive evolution in control and narrative power.
> — [vendor guide](../../sources/kling.ai/kling-video-3-omni-user-guide/2026-10-26.md)

fal's earlier Omni endpoints are filed as `fal-ai/kling-video/o1/…` with `modelFamily: "Pro O1 Omni"` /
`"Standard O1 Omni"`, and its Omni image endpoints are described as "Kling Omni 3"
([fal v3 record](../../sources/fal.ai/kling-video-v3/2026-10-26.md),
[fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md)). Read together, fal's
O-prefix tracks the vendor's Omni generation number: O1 = Omni 1 (Dec 2025), O3 = Omni 3 (Feb 2026).
**That reading is an inference** — no captured fal page spells out the mapping — but it is the only
consistent explanation of three independent labels.

### Host endpoints

| Surface | fal | Replicate |
| --- | --- | --- |
| Video edit (this page's anchor) | `fal-ai/kling-video/o3/{standard,pro}/video-to-video/edit`, `…/o3/4k/video-to-video/edit` | no dedicated edit endpoint; editing is `kwaivgi/kling-v3-omni-video` with `video_reference_type: "base"` |
| Video reference | `fal-ai/kling-video/o3/{standard,pro,4k}/video-to-video/reference` | same model, `video_reference_type: "feature"` |
| Generation | `fal-ai/kling-video/o3/{standard,pro}/{text-to-video,image-to-video,reference-to-video}`, `…/o3/4k/*` | `kwaivgi/kling-v3-omni-video` |
| Image | `fal-ai/kling-image/o3/{text-to-image,image-to-image}` | not captured |

Sources: [fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-video-3-0-omni/2026-10-26.md).

The vendor API exposes the same surface through one group with a tab labelled "Omni Video Generation",
but that tab's body did not render through the text proxy, so **no vendor edit endpoint path or model
ID was captured** ([vendor API reference](../../sources/kling.ai/kling-video-3-0-omni-api-reference/2026-10-26.md)).

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2025-12-15 | KLING VIDEO O1 user guide published — the O-line's first version, 3–10 s | [O1 guide](../../sources/kling.ai/kling-video-o1-user-guide/2026-10-26.md) |
| 2026-02-04 | fal publishes the `o3` endpoints (t2v, i2v, r2v, edit, reference, standard and pro) | [fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md) |
| 2026-02-04 | Artificial Analysis release date for both the 1080p and 720p Omni rows | [AA](../../sources/artificialanalysis.ai/kling-3-0-omni-video-editing/2026-10-26.md) |
| 2026-02-06 | Vendor publishes the VIDEO 3.0 Omni user guide | [vendor guide](../../sources/kling.ai/kling-video-3-omni-user-guide/2026-10-26.md) |
| 2026-04-23 | fal publishes the `o3/4k/*` generation endpoints | [fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md) |
| 2026-05-08 | AA introduces the Kling O1 Pro row to its editing board | [AA](../../sources/artificialanalysis.ai/kling-3-0-omni-video-editing/2026-10-26.md) |
| 2026-06-05 | AA introduces the Kling 3.0 Omni row to its editing board | [AA](../../sources/artificialanalysis.ai/kling-3-0-omni-video-editing/2026-10-26.md) |
| 2026-08-31 | fal publishes `o3/4k/video-to-video/edit` and `…/reference` — the 4K edit surface | [fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md) |
| 2026-10-21 | fal publishes `kling/v4/video-to-video/edit` — the successor edit endpoint | [fal v4 catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md) |

### Is "Kling O3" a distinct model?

**No.** The evidence supports one model, Kling 3.0 Omni, with a host-side label. Every capability and
price attached to "O3" on fal is a capability or price of the Omni surface of the 3.0 generation, and
the vendor's own API files Omni and plain 3.0 in a single documentation group.

What *is* distinct is the **editing surface**, and it is distinct enough to track separately: it has its
own input schema (no duration field, a source video instead of a prompt-only request), its own billing
row ("with video input"), its own later 4K endpoints, and its own independent evaluation on
Artificial Analysis's video-editing board. Per this knowledge base's split rule, the edit surface is
where behaviour and evidence diverge; the generation surface stays on [Kling 3.0](kling-3.0.md).

## Current assessment

As of 2026-10-26 the O3 edit line is **current and still served, and superseded at the top of the line by
Kling 4.0's edit endpoint** — though not on every axis, since O3's billing basis is narrower.
`deprecated: false` on all three edit endpoints, `status: "public"`, and fal keeps
`landingPageSlug: "kling-3"`
([fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md)). Kling 4.0's edit endpoint has
been public since 2026-10-21 with a longer source window, an explicit output duration and more reference
slots ([fal v4 catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md)).

The one independent measurement available is unflattering. On **AA-Video-Editing v1.1**, Kling 3.0 Omni
1080p (Pro) is the board's fixed anchor at Elo 1000 — and all nine other ranked models score above it,
from Aleph 2.0 at 1012 to Wan 3.0 at 1198. Its own predecessor, Kling O1 Pro (the January checkpoint
AA tracks), sits at 989.72, statistically
indistinguishable (O1's 95 % interval 973.72–1005.72 brackets 1000)
([AA](../../sources/artificialanalysis.ai/kling-3-0-omni-video-editing/2026-10-26.md)). On the
image-to-video board the same model sits at 1004, rank 17 — one place above that board's own anchor,
Kling 3.0 1080p (Pro) at 1000
([AA i2v](../../sources/artificialanalysis.ai/pixverse-v6-image-to-video/2026-10-26.md)).

Two readings are consistent with that, and the evidence cannot separate them: the edit surface is
weaker than its competitors, or AA's voters were scoring an older snapshot of it. The board data does
not say which endpoint, snapshot or host produced the samples. The comparison that *is* clean is
within Kling's own line — O1 at 989.72 and 3.0 Omni at 1000 — which suggests the O1→3.0 Omni edit step
was small on AA's metric even though the generation step was large.

What the evidence supports positively is the operational envelope, which is documented consistently
across three publishers: a 3–15 s source clip (3–10 s per the vendor), a text instruction, up to four
images/elements as references, source audio retained by default, output at 720p, 1080p or 4K by
endpoint tier, priced per second.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run for this page.**

### The edit request

fal's three edit endpoints — standard (720p), pro (1080p), 4K — share one schema; only the price and
the output tier differ
([fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md)).

| Field | Required | Notes |
| --- | --- | --- |
| `prompt` | yes | max 2 500 characters; "Reference video as @Video1" |
| `video_url` | yes | .mp4/.mov, 3–15.05 s, 720–3840 px, 23–60 fps, ≤ 200 MB |
| `image_urls` | no | "Reference images for style/appearance. Reference in prompt as @Image1, @Image2"; "Maximum 4 total (elements + reference images) when using video" |
| `elements` | no | character/object elements, each a frontal image plus 1–3 angle references |
| `keep_audio` | no | **default true** — "Whether to keep the original audio from the reference video" |
| `shot_type` | no | const `"customize"` — the only value the edit endpoints accept |
| `enable_safety_checker` | no | default true |

Absences matter more than presences here: there is **no `duration`, no `aspect_ratio`, no
`negative_prompt`, no `cfg_scale` and no `generate_audio`**. The sibling reference-video endpoint does
expose `duration` (3–15) and `aspect_ratio`, so the omission is specific to editing, not a fal
simplification. The consequence, unstated in prose anywhere: **an edit's length follows its source
clip**, and audio is carried over rather than generated.

### What the vendor says editing does

The 3.0 Omni guide disposes of the subject in one sentence — "The video editing, prompt transformation,
and other features in 3.0 Omni function the same as in O1"
([vendor guide](../../sources/kling.ai/kling-video-3-omni-user-guide/2026-10-26.md)) — so the operative
description is the O1 guide's, which lists these instructions
([O1 guide](../../sources/kling.ai/kling-video-o1-user-guide/2026-10-26.md)):

- add content from an image, an element, or text alone; remove content; change angle or composition;
- modify a subject (optionally replacing it with an image or an element); modify the background;
- localized edits of "specified content"; restyle the whole clip (named styles include American cartoon,
  Japanese anime, cyberpunk, pixel art, ink wash, oil painting, watercolour, clay, felt, Monet-inspired,
  or "the style of @Image1");
- recolor an item; change weather or environment; key the background to green screen;
- combine several of these in one prompt — "adding a subject while modifying the background in the video",
  "changing the style while using elements".

The vendor frames this as replacing "manual masking or keyframing" with conversation, and claims the
model "will automatically complete pixel-level semantic reconstruction". That is marketing language
with no measurement attached; the AA ranking above is the only counterweight in the corpus.

### Audio

Audio on the edit surface is **source audio, not generated audio**. fal's `keep_audio` defaults to true
and there is no `generate_audio` field; the vendor's credit table lists "With Video Input × Native Audio
On" as **"Not Supported Yet"** at both 1080p and 720p, and its developer price list has no such row at
all ([vendor guide](../../sources/kling.ai/kling-video-3-omni-user-guide/2026-10-26.md),
[vendor pricing](../../sources/kling.ai/kling-video-3-0-api-pricing/2026-10-26.md)). Replicate states the
same constraint from the other side: `generate_audio` is "mutually exclusive with reference video", with
a separate `keep_original_sound` toggle
([Replicate](../../sources/replicate.com/kling-video-3-0-omni/2026-10-26.md)).

So an edit can preserve a performance and cannot replace it with synthesised speech. Whether the source
audio survives when `keep_audio` is false, and what replaces it, is undocumented.

### Duration and resolution

| | fal | Vendor guide | Replicate |
| --- | --- | --- | --- |
| Source clip | 3–15.05 s | 3–10 s | 3–10 s |
| Source resolution | 720–3840 px | ≤ 2K | not stated (≤ 200 MB) |
| Output length | follows source (no field) | not stated | "duration … (ignored for video editing)" |
| Output resolution | 720p / 1080p / 4K by endpoint | 720p, 1080p (credit table); 4K in the API enum | up to 1080p |

Sources: [fal](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md),
[vendor guide](../../sources/kling.ai/kling-video-3-omni-user-guide/2026-10-26.md),
[vendor API reference](../../sources/kling.ai/kling-video-3-0-omni-api-reference/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-video-3-0-omni/2026-10-26.md).

**The source-video limit is a live contradiction.** fal accepts up to 15.05 s and 3840 px; the vendor
guide and Replicate both cap at 10 s and 2K. Either fal forwards a longer clip that the model then
handles differently, or fal trims, or one of the three is out of date. No captured page resolves it, and
the safe reading for a caller is the vendor's 10 s / 2K bound.

### Frame rate

**Undocumented.** No vendor page, host schema or README captured states the frame rate of an edited
output. The only fps numbers in the evidence are *input* constraints (fal: 23–60 fps in). Any fps figure
quoted for Kling O3 output would be an invention.

## Limitations and constraints

- **No duration control.** An edit cannot be longer or shorter than its source; there is no field for it.
  Kling 4.0's edit endpoint has one (`duration` 3–30, "Defaults to the source video's length")
  ([fal v4 catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md)).
- **Reference budget collapses with a video present.** Supplying a source clip drops the combined
  image/element budget from seven to four, on every route
  ([vendor guide](../../sources/kling.ai/kling-video-3-omni-user-guide/2026-10-26.md),
  [fal](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md)).
- **No generated audio with a video input**, at any resolution, on any captured route.
- **No 4K on Replicate.** Its Omni model is "up to 1080p"; fal is the only captured route to 4K edit, and
  fal only added it on 2026-08-31
  ([Replicate](../../sources/replicate.com/kling-video-3-0-omni/2026-10-26.md),
  [fal](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md)).
- **Replicate has no separate edit endpoint**, so its editing parameters are entangled with generation
  (`mode`, `duration`, `aspect_ratio`, `generate_audio`) in a way fal's do not.
- **`shot_type` is a dead control** on the edit endpoints: a single-value const that the generation
  endpoints use to choose between "customize" and "intelligent". fal does not explain its presence.
- **No open weights.** Every captured route is hosted, `licenseType: "commercial"`, and
  `hostingType: "proxy"` — fal forwards to Kling rather than running weights it could evaluate
  ([fal](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md)).
- **Attribution obligation.** The vendor's terms require outputs to be labelled with Kling branding or
  to state that they were generated by Kling AI
  ([terms](../../sources/kling.ai/kling-ai-terms-of-service/2026-10-26.md)).
- **Safety checking exists but is undocumented.** fal exposes `enable_safety_checker` (default true) and
  warns that disabling it "requires account authorization"; the vendor's moderation policy, thresholds
  and refusal taxonomy were not captured. A refusal on one host is not evidence about the model's
  willingness ([fal](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md)).
- **The vendor's edit endpoint is uncaptured.** The "Omni Video Generation" tab of the vendor API
  reference did not render, so the first-party request schema for editing is unknown; every schema
  statement on this page is a host schema
  ([vendor API reference](../../sources/kling.ai/kling-video-3-0-omni-api-reference/2026-10-26.md)).
- **No test evidence.** No independent measurement of editing quality beyond AA's preference votes, and
  no measurement at all of instruction adherence, identity preservation, or artifact rate.

## Access, pricing, licensing

The edit surface is billed per second at three rates, and the vendor and fal price lists agree to the
cent.

### fal — per second, USD

| Endpoint | Resolution | Price | 5 s example |
| --- | --- | --- | --- |
| `o3/standard/video-to-video/edit` | 720p | $0.126 | $0.63 |
| `o3/pro/video-to-video/edit` | 1080p | $0.168 | $0.84 |
| `o3/4k/video-to-video/edit` | 4K | $0.42 | $2.10 |

Source: [fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md). These are the family's
"with video input" rate: 50 % above the audio-off generation rate at the same resolution ($0.084 /
$0.112), and identical to the `video-to-video/reference` price.

### Vendor API — per second, USD

The developer price list's row "Kling 3.0 Omni — With Video Input × No Native Audio" reads 0.9 Units
($0.126)/s at 720p, 1.2 Units ($0.168)/s at 1080p and 3.0 Units ($0.42)/s at 4K
([vendor pricing](../../sources/kling.ai/kling-video-3-0-api-pricing/2026-10-26.md)). fal reproduces
these to the cent, which is the strongest agreement in this corpus and the reason the edit price can be
quoted with confidence.

### Vendor product credits

The user guide's credit table prices "With Video Input × Native Audio Off" at 16 credits/s (1080p) and
12 credits/s (720p) — double the no-video audio-off rate
([vendor guide](../../sources/kling.ai/kling-video-3-omni-user-guide/2026-10-26.md)). Credits and API
dollars are not reconcilable from the captured pages; the credit table is a product-side price and
should not be converted.

### Replicate

Replicate's captured page shows no per-second price (the price block is client-rendered and was not
retrievable). Its 883K runs are a usage counter, not a quality signal
([Replicate](../../sources/replicate.com/kling-video-3-0-omni/2026-10-26.md)).

### Artificial Analysis' quoted price

AA quotes **$10.91/min** for 1080p on the editing board, i.e. $0.1818/s. Neither the vendor's $0.168/s
($10.08/min) nor its audio-on generation rate $0.14/s ($8.40/min) produces that figure. On the
image-to-video board the same model is quoted at $8.40/min, which is exactly the $0.14/s audio-on rate,
so AA's prices do land on vendor rows there
([AA](../../sources/artificialanalysis.ai/kling-3-0-omni-video-editing/2026-10-26.md)). The mismatch on
the editing board is unexplained; treat AA's price as a third-party reconstruction rather than a rate
card.

### Licensing

- **No weights, no open licence.** Hosted-only, commercial, proxy-forwarded.
- **Output ownership:** "You own all intellectual property rights … We do not claim ownership of the
  Content" ([terms](../../sources/kling.ai/kling-ai-terms-of-service/2026-10-26.md)).
- **Commercial use is conditional.** The same agreement says "without our written permission, you may
  not use … the Output for any commercial purposes", while the consumer price guide lists commercial use
  as a paid-plan benefit. The two documents do not reconcile themselves.
- **Training on outputs is prohibited**, as is using the service to build competing models (clause 2(w)).
- **The vendor takes a broad licence over inputs and outputs** for hosting, display, derivatives and
  distribution during its business operations (clause 4.7.1). On an edit endpoint this matters more than
  on a generation endpoint: the input is the user's own footage.

## Differences from Kling 3.0 and Kling 4.0

### Versus Kling 3.0 (same generation, different surface)

| | Kling 3.0 (`v3`) | Kling O3 / 3.0 Omni (`o3`) |
| --- | --- | --- |
| Lineage | successor of VIDEO 2.6 | successor of VIDEO O1 |
| Video-to-video endpoints | **none** | edit + reference, at 720p/1080p/4K |
| Video input | not offered | the defining feature; costs +50 % and drops the reference budget to 4 |
| Element voice binding | element references with an optional `voice_id` | "Added Element Voice Control" plus video elements (vendor claim — see note) |
| 4K | 2026-04-23 | 2026-04-23 (generation), 2026-08-31 (edit) |
| Price basis | audio on/off per second | video input on/off per second |

Sources: [vendor guide](../../sources/kling.ai/kling-video-3-omni-user-guide/2026-10-26.md),
[3.0 vs 3.0 Omni](../../sources/kling.ai/kling-video-3-0-vs-3-0-omni/2026-10-26.md),
[fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md),
[fal v3 record](../../sources/fal.ai/kling-video-v3/2026-10-26.md).

The vendor describes the two as "two closely related paths" of one series with the same 15-second
ceiling, differing in reference machinery — the basis for keeping generation on the
[Kling 3.0](kling-3.0.md) page and editing here rather than treating them as separate models.

**Contradiction on voice control.** The vendor presents element voice binding as new in 3.0 Omni
("Added Element Voice Control"), but fal's `v3` element schema already exposes a `voice_id` — "The voice
ID for this element. The voice will be binded to the element and references to this element will use the
binded voice" ([fal v3 record](../../sources/fal.ai/kling-video-v3/2026-10-26.md)). Either the vendor's
delta describes the product UI rather than the API, or fal exposes an Omni-only field on its `v3`
endpoints. No captured page reconciles them.

### Versus Kling 4.0 (successor edit surface)

| | Kling O3 (3.0 Omni) edit | Kling 4.0 edit |
| --- | --- | --- |
| Public since | 2026-02-04 (4K: 2026-08-31) | 2026-10-21 |
| Source clip | 3–15 s (vendor: 3–10 s), ≤ 200 MB | 3–30 s, ≤ 300 MB |
| Output duration | follows source; no field | `duration` 3–30, defaults to source length |
| Resolution | 720p / 1080p / 4K | 720p / 1080p |
| References | 4 images+elements total with a video; one video | up to 4 reference videos, 7 elements, 3 voices |
| Price | $0.126 / $0.168 / $0.42 per second | $0.094 (720p) / $0.141 (1080p) per second, "billed on the input plus output length (minimum 2× the output)" |

Sources: [fal O3 record](../../sources/fal.ai/kling-o3-video-edit/2026-10-26.md),
[fal v4 catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md).

The 4.0 table is not a straight win. Its per-second rate is lower but its **billing basis is wider**:
an edit is charged on input *plus* output with a 2× floor, so a 10-second source edited to 10 seconds
costs 20 seconds of billing — $2.82 at 1080p — against $1.68 on O3's output-only basis. fal's O3 price
string says "every second of video you generated", which reads as output-only. A caller comparing
headline rates would get this backwards.

The vendor's own framing is that editing is "integrated into the Kling 4.0 multimodal workflow" while in
3.0 it lives in the Omni surface
([3.0 vs 4.0](../../sources/kling.ai/kling-3-0-vs-4-0-comparison/2026-10-26.md)).

## Unresolved questions

1. **Why does fal accept a 15 s / 4K source when the vendor and Replicate cap at 10 s / 2K?** No page
   explains whether fal forwards, trims or transcodes.
2. **Is an edit billed on output length only, or on input plus output?** fal's wording implies output
   only; the vendor's price list does not state a basis. Since output ≈ input length for edits, the
   difference is invisible in the examples and material in principle.
3. **What does the vendor's own edit endpoint look like?** The "Omni Video Generation" tab is
   unrendered, so the model ID, parameter names and limits are known only through hosts.
4. **Is "Omni Video Generation" the same thing as the separate "Multi-element Video Editing" API
   product** listed in the vendor's sidebar? No captured page relates them.
5. **Does `keep_audio: false` silence the output, or let the model generate new audio?** The vendor says
   native audio with a video input is "Not Supported Yet"; fal offers only a keep-or-not toggle.
6. **What is the output frame rate and channel count?** Undocumented on every route.
7. **How good is the edit, really?** AA ranks it last on its editing board as the fixed anchor; no other
   independent measurement was captured, and AA does not disclose the prompt set or the endpoint used.
8. **Does the "O3" label ever appear in a vendor artefact?** Only in one blog URL slug among the
   captured pages. The vendor API reference, both user guides and the developer price list all say
   "3.0 Omni". The vendor's release-notes pages are client-rendered and could not be read, so they are
   unexamined rather than negative.
9. **Why is AA's quoted price $10.91/min** when no published configuration produces it?
10. **Does the 4K edit endpoint change the source constraints?** Its schema is byte-identical to the
    720p and 1080p versions, including the 720 px minimum width, which cannot be right for a 4K target.

## Evidence status

Evidence floor: **met.** First-party: three Kling AI captures — the VIDEO 3.0 Omni user guide
(2026-02-06), the VIDEO O1 user guide (2025-12-15) and the "Kling 3.0 & 3.0 Omni" API reference group —
plus the existing developer price list, the 3.0-vs-3.0-Omni blog and the terms of service. Independent
hosts: a new fal record covering catalogue metadata, four OpenAPI schemas and the price strings, the
existing fal v3 and v4 catalogue records, and the existing Replicate Omni record. Independent
evaluation: one Artificial Analysis record of the video-editing board, plus the existing i2v board
record. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules; the
AA Elo figures are transcribed from a third-party preference board and are not our own runs.

Two limits should be kept in view. The vendor's edit endpoint is uncaptured, so the first-party schema
is missing and every parameter statement is a host statement. And the identity is an alias: "Kling O3"
is fal's name, the vendor calls the model Kling 3.0 Omni, and a reader who searches for "Kling O3" on
kling.ai will find nothing.

The next useful evidence would be: a reproducible edit set against `o3/pro/video-to-video/edit` and
`kling/v4/video-to-video/edit` with the same source clip and instruction, to test instruction
adherence, identity preservation, audio retention and length behaviour; a 12-second source to settle
the fal-versus-vendor duration conflict; a `keep_audio: false` run to settle question 5; a probe of the
delivered file for frame rate and channel count; and one successful render of the vendor's "Omni Video
Generation" documentation tab.
