# P-Video 2 Pro

Pruna AI's text-and-image-to-video model, built on **MiniMax H3** and sold as the top of Pruna's
video line. It generates 5–15 second, 24 fps clips with generated audio at 480p and 768p, and offers
1080p, 2k and 4k as an upscale pass over the 768p render, with three generation recipes (cost, speed,
quality) billed per second of returned video
([model docs](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md),
[product page](../../sources/pruna.ai/p-video-2-pro-model-page/2026-10-26.md)).

The roster row's "draft discovery" path was correct to be cautious: no first-party launch
announcement, model card or technical report exists for this model. What does exist is a full API
documentation page, a product page, a terms appendix that names the base model, and two independent
hosts (WaveSpeedAI and Eden AI). **fal and Replicate do not carry it** — fal's catalogue API returns
zero results for `keywords=pruna` and `replicate.com/pruna/*` returns 404 (both checked
2026-10-26).

## Identity

- **Canonical name:** P-Video-2-Pro (product pages, pricing page, Eden AI's "P Video 2 Pro"). The
  API model string is `p-video-2-pro`. The docs page's own `<title>` and OG description say
  "p-video-pro", dropping the 2 — a typo in the page metadata, not a second model.
- **Vendor:** Pruna AI GmbH, described in Pruna's own blog as "based in Munich and Paris"
  ([partnership post](../../sources/pruna.ai/eden-ai-launch-post/2026-10-26.md)). Pruna's business is
  model optimisation ("performance models" built with its open-source `pruna` framework); P-Video 2
  Pro is therefore best read as an optimised deployment of H3 weights rather than a model trained
  from scratch. That reading is an inference from "built on H3" plus the optimiser framework — the
  tuning recipe itself is not documented anywhere captured.
- **Base model:** MiniMax H3, named on four separate first-party surfaces — the docs overview
  ("built on Minimax H3"), the docs model catalogue, the product page ("Based on MiniMax H3"), and
  the account terms (§7.2, which binds users to the MiniMax H3 Community License)
  ([docs](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md),
  [catalogue](../../sources/pruna.ai/available-models/2026-10-26.md),
  [terms](../../sources/pruna.ai/terms-of-service/2026-10-26.md)). H3 is an open-weights model
  (released 2026-07-28/08-02), so Pruna had downloadable weights to optimise — see
  [MiniMax H3](minimax-h3.md).
- **Host endpoints:**

  | Route | Identifier |
  | --- | --- |
  | Pruna API | `POST https://api.pruna.ai/v1/predictions`, headers `apikey` + `Model: p-video-2-pro`; `Try-Sync: true` for synchronous |
  | WaveSpeedAI | `pruna-ai/p-video-2-pro/{text-to-video,image-to-video,reference-to-video,avatar}` |
  | Eden AI | `video/generation_async/pruna/p-video-2-pro`, plus separately priced `…-cost` and `…-quality` |
  | fal, Replicate | not hosted |

  Sources: [docs](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md),
  [WaveSpeedAI](../../sources/wavespeed.ai/pruna-p-video-2-pro/2026-10-26.md),
  [Eden AI](../../sources/edenai.co/pruna-p-video-2-pro/2026-10-26.md).

- **Siblings (separate model IDs, same vendor):**

  | ID | Base | Envelope | Price/s |
  | --- | --- | --- | --- |
  | **p-video-2-pro** | MiniMax H3 | text + first/last frame, 5–15 s, 480p/768p + upscale to 4k | $0.01–$0.155 |
  | p-video-2-pro-reference | MiniMax H3 | + up to 9 images, 3 videos, 3 audio refs; no `quality` mode | $0.015–$0.115 + reference media |
  | p-video-2-pro-avatar | MiniMax H3 (per catalogue) | portrait + audio or script, 1 s–3 min, TTS in 10 languages | $0.02–$0.12 |
  | p-video-2 | **LTX-2** (Lightricks) | text/image/audio in, 1–20 s, 24 or 48 fps, 720p/1080p, `draft` flag | $0.015–$0.05 |
  | p-video | unnamed | image/video tasks, draft mode | $0.005–$0.04 |

  Sources: [catalogue](../../sources/pruna.ai/available-models/2026-10-26.md),
  [reference docs](../../sources/pruna.ai/p-video-2-pro-reference-docs/2026-10-26.md),
  [avatar docs](../../sources/pruna.ai/p-video-2-pro-avatar-docs/2026-10-26.md),
  [p-video-2 docs](../../sources/pruna.ai/p-video-2-docs/2026-10-26.md).

### "Pro" is not a tier of P-Video-2

This is the identity trap in the row. `p-video-2` is built on **LTX-2**: its docs page's only licence
link is `github.com/Lightricks/LTX-2/blob/main/LICENSE`, and it exposes 48 fps, a 20-second ceiling,
audio-conditioned generation and a `draft` boolean — none of which P-Video-2-Pro has
([p-video-2 docs](../../sources/pruna.ai/p-video-2-docs/2026-10-26.md)). P-Video-2-Pro is a
different base model with a different parameter surface. They share a product name and a price band,
not weights.

### Release date: no first-party date exists

Pruna published no launch post, changelog or release note. The blog index jumps from 2026-07-30 to
2026-10-08 and the docs tree has no changelog. The evidence brackets it instead:

| Date | Event | Source |
| --- | --- | --- |
| 2026-05-14 | docs catalogue lists only `p-video`, `p-video-avatar`, `p-image-upscale` — no P-Video-2 line at all | [catalogue, prior state](../../sources/pruna.ai/available-models/2026-10-26.md) |
| 2026-08-02 | MiniMax H3 Community License dated; H3 weights released | [MiniMax H3](minimax-h3.md) |
| 2026-09-14 | WaveSpeedAI creates its `pruna-ai/p-video-2-pro/image-to-video` endpoint | [WaveSpeedAI](../../sources/wavespeed.ai/pruna-p-video-2-pro/2026-10-26.md) |
| 2026-10-08 | Eden AI partnership post quotes P-Video-2-Pro prices in the present tense | [post](../../sources/pruna.ai/eden-ai-launch-post/2026-10-26.md) |
| 2026-10-10 | WaveSpeedAI creates the text-to-video, reference-to-video and avatar endpoints | [WaveSpeedAI](../../sources/wavespeed.ai/pruna-p-video-2-pro/2026-10-26.md) |
| 2026-10-13 | docs page captured, offering 480p/768p only | [docs, prior state](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md) |
| 2026-10-17 | product page first archived | [product page](../../sources/pruna.ai/p-video-2-pro-model-page/2026-10-26.md) |

So the model existed by **2026-09-14** and cannot predate H3's weights (2026-08-02). Record the
release as "between 2026-08-02 and 2026-09-14, exact date unpublished". Either end is inside the
roster's one-year window, so no specialist-exception flag applies.

One further date signal: the docs still say "until October 13, 2026 the billed rate is 50% off",
which reads as a launch-era promotion. It does not pin the start.

### Resolution tiers were added between 2026-10-13 and 2026-10-26

The 2026-10-13 capture of the docs page offers "480p or 768p" only, with a price table ending at
768p. The live page adds 1080p, 2k and 4k as upscales plus an `enable_safety_filter` parameter
([docs, prior state](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md)). Two weeks is a short
window for a capability change with no announcement; the docs page is the only record of it.

## Current assessment

P-Video-2-Pro is a **real, distinct product, but a derivative one**: an optimised MiniMax H3
deployment with its own model IDs, envelope, price schedule and licence pass-through. It is not a
relabel of `p-video-2` (different base), and it is not simply "H3 through a reseller" either — the
parameter surface differs from MiniMax's own H3 API (no audio input, no video reference on the base
ID, 5 s minimum instead of 4 s, 480p/768p native instead of 768P/2K), and Pruna adds an upscale
chain to 4k that H3 does not document
([docs](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md), [MiniMax H3](minimax-h3.md)).

It is current and not deprecated: Pruna's [catalogue](../../sources/pruna.ai/available-models/2026-10-26.md)
lists it, and WaveSpeedAI carries all four endpoints with `release_stage: "release"`. It sits at the
top of Pruna's video line on price ($0.155/s at 4k quality vs $0.05/s for `p-video-2`) and is the
only Pruna video model with 2k/4k output labels.

What the evidence supports about quality is much weaker than the marketing. The product page claims
"quality on par with SoTA model" and shows an unlabelled scatter plot (Elo axis 955–1045, log price
axis $0.05–$0.20 per second) plotting its three modes against Agnes Video 2.5, Gemini Omni 1.1 Flash,
Grok Imagine Video 1.5, LTX 2.5 Pro, MiniMax H3 Max Turbo, P-Video-2, Seedance 2.5 Turbo and Veo 3.1
Lite. No sample size, harness, date or numeric table accompanies it, and P-Bench is Pruna's own
benchmark ([product page](../../sources/pruna.ai/p-video-2-pro-model-page/2026-10-26.md)). Read the
claim as a vendor claim; there is no independent measurement of this model in the corpus.

The distinctive operational property is **speed at low cost**, not a new capability: Pruna's own
listing gives 1.99 s inference for a 480p text-to-video run against 13.65 s for `p-video-2` and
23.18 s for `p-video-edit`, and the product page calls the launch a milestone "for real-time,
high-quality video generation" ([all-models](../../sources/pruna.ai/all-models-page/2026-10-26.md)).
No page states the clip length or hardware behind those timings, so they cannot be converted into a
throughput or cost-per-finished-video figure.

## Documented capabilities

All of the following is vendor or host documentation. **No direct tests were run for this page.**

### Output envelope

| | Pruna docs | WaveSpeedAI | Eden AI |
| --- | --- | --- | --- |
| Duration | 5–15 s integer, default 5 | 5–15 s, default 5 | "omit to use the model's default" |
| Native resolution | 480p, 768p | 480p, 768p | not stated |
| Upscaled tiers | 1080p, 2k, 4k via `p-video-upscale`, 24 fps kept | not offered | not stated |
| Frame rate | 24 fps | not stated | not stated |
| Aspect ratios | 16:9, 9:16, 4:3, 3:4, 3:2, 2:3, 1:1; reference image sets the canvas | same seven | `dimension` as `WxH` |
| Audio | generated with the video; **audio input not exposed** | "generated audio included" | not stated |
| Modes | `speed` (default), `quality`, `cost` | same enum | mode chosen by model string |
| Prompt upsampler | `turbo` (default), `max`, `off` | same enum | not exposed |
| Seed | integer, random default | integer | 0–2,147,483,646 |
| Safety filter | `enable_safety_filter`, default **false** | not exposed | not exposed |
| Rate limit | 250 requests/min | — | — |

Sources: [docs](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md),
[WaveSpeedAI](../../sources/wavespeed.ai/pruna-p-video-2-pro/2026-10-26.md),
[Eden AI](../../sources/edenai.co/pruna-p-video-2-pro/2026-10-26.md).

### Inputs and modes

- **Text-to-video** — prompt only.
- **First frame** — `image` (URI); on WaveSpeedAI "the reference image determines the output canvas".
- **First and last frame** — `image` + `last_frame_image`. The reference sibling calls these "soft
  keyframes" that need prompt upsampling and count as reference images
  ([reference docs](../../sources/pruna.ai/p-video-2-pro-reference-docs/2026-10-26.md)).
- **No video, audio or multi-image reference on this ID.** Those live in `p-video-2-pro-reference`,
  which takes up to 9 images (20 MiB, 4096 px), 3 videos (100 MiB, 1080p, 60 fps, 2–15 s each, 15 s
  combined) and 3 audio files (50 MiB, 15 s combined), and has no `quality` mode.
- **Three recipes.** `speed` is the default and the reference point; `cost` is the cheapest and
  "lower-cost, high-quality"; `quality` costs most. Nothing documents what changes technically.
- **Prompt upsampling is independent of mode** and free: `off`, `turbo` (default, "the fast
  upsampler"), `max`.
- **Synchronous mode** exists (`Try-Sync: true`) but Pruna's own FAQ says long sync requests "can hit
  timeouts" and recommends async for video.

### Audio

Output carries generated audio; there is no audio input on this model. Pruna never states the
sample rate, channel count, or whether speech is generated with lip-sync. MiniMax H3's own card
claims native stereo dialogue in 11 languages — that is a claim about H3, not about this deployment,
and Pruna's documentation does not repeat it ([MiniMax H3](minimax-h3.md)).

### Upscaling instead of generating at 4k

1080p, 2k and 4k are "the 768p rate plus the p-video-upscale rate for that target (+$0.02, +$0.04 and
+$0.08 per second)", with 24 fps kept. So the model itself renders at most 768p; everything above is
a second pass. `p-video-upscale` is referenced by name in three model pages but is **not** a row in
Pruna's own model catalogue and has no documentation page of its own
([docs](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md),
[catalogue](../../sources/pruna.ai/available-models/2026-10-26.md)).

### Vendor claims (labelled as claims)

- "Based on MiniMax H3. The best quality. The best speed."
  ([product page](../../sources/pruna.ai/p-video-2-pro-model-page/2026-10-26.md)).
- "P-Video-2-Pro delivers quality on par with SoTA model" — supported only by the unlabelled
  P-Bench scatter described above.
- "a milestone for real-time, high-quality video generation" — "real-time" is undefined.
- "cost for lower-cost generation with the same output quality as speed" (host schema restating
  Pruna's mode description) — an equality claim between two price points with no evidence attached
  ([WaveSpeedAI](../../sources/wavespeed.ai/pruna-p-video-2-pro/2026-10-26.md)).

## Limitations and constraints

- **No weights, no self-hosting.** Appendix 2 of Pruna's terms: "Use of Pruna Models is restricted to
  API access. Self-hosting or local deployment is not permitted, except where explicitly pre-approved
  in writing"; self-hosting eligibility only arrives at a revenue threshold in an Order Form
  ([terms](../../sources/pruna.ai/terms-of-service/2026-10-26.md)). The H3 base weights are
  downloadable from MiniMax, but Pruna's tuned version is not.
- **The MiniMax H3 Community License travels with the output.** Pruna's §7.2 binds users to the H3
  licence's Acceptable Use Policy (Exhibit A), waives only its territory clause for use through the
  service, and forbids using the model, its outputs or results "to train or otherwise improve any
  other artificial intelligence model". Anyone exposing the model to their own users must bind them to
  the same terms. `p-video-2-pro-avatar` is **not** named in §7.2 despite being described as
  H3-based in the catalogue — an unexplained gap in coverage.
- **Native resolution stops at 768p.** 1080p/2k/4k are upscales billed at the 768p rate plus an
  upscale rate; nothing documents what the upscaler adds.
- **No audio input and no video input on this ID.** Audio-conditioned generation and video references
  are only available through `p-video-2-pro-reference`, which has no `quality` mode — so the highest
  quality tier and the reference modes are mutually exclusive.
- **Billing rounds down.** Output seconds are `int(num_frames / 24)`; a 15-second request is 345
  frames and bills as 14 seconds
  ([reference docs](../../sources/pruna.ai/p-video-2-pro-reference-docs/2026-10-26.md)). The same
  wrapper is used for this model.
- **Safety filtering is off by default.** `enable_safety_filter: false` means only "sexual content
  involving minors, self-harm intent or instructions" are still blocked
  ([docs](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md)). No refusal taxonomy, threshold
  or moderation policy is published. A refusal on one host is not evidence about the model.
- **The AUP presumes a provenance signal that no product page mentions.** Clause (m) forbids
  removing "any content-provenance or watermarking signal embedded in Outputs", but nothing states
  whether output video carries one
  ([terms](../../sources/pruna.ai/terms-of-service/2026-10-26.md)).
- **Host surfaces are narrower and drift from the vendor.** WaveSpeedAI caps resolution at
  480p/768p, exposes no safety-filter toggle, and its image-to-video description advertises "draft
  mode" — a parameter that does not exist in its own schema or in Pruna's docs
  ([WaveSpeedAI](../../sources/wavespeed.ai/pruna-p-video-2-pro/2026-10-26.md)). Eden AI lists "Video
  input" on the model page, but that badge comes from a generic task-level parameter list
  ("for models that edit a video"), not from this model
  ([Eden AI](../../sources/edenai.co/pruna-p-video-2-pro/2026-10-26.md)).
- **No independent quality evidence.** No benchmark, arena, or third-party measurement of
  P-Video-2-Pro was captured; P-Bench is Pruna's own.
- **No published region set.** Eden AI says "Regions: Global"; Pruna's FAQ only advises running calls
  from a US-based server for lower latency, which implies a US inference region without stating one.

## Access, pricing, licensing

Three routes, one price schedule. Pruna bills per second of returned video, measured from the
finished file rather than the request.

### Pruna list price (USD per second)

| Resolution | `mode=cost` | `mode=speed` (default) | `mode=quality` |
| --- | --- | --- | --- |
| 480p | $0.01 | $0.02 | $0.04 |
| 768p | $0.025 | $0.035 | $0.075 |
| 1080p | $0.045 | $0.055 | $0.095 |
| 2k | $0.065 | $0.075 | $0.115 |
| 4k | $0.105 | $0.115 | $0.155 |

Source: [docs](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md). The cheapest possible
request is therefore 5 s × $0.01 = **$0.05**; the most expensive listed is 15 s × $0.155 = $2.33.

### Host prices reproduce the vendor schedule exactly

- **WaveSpeedAI** attaches a formula to the endpoint — `(base_price * 4/7) * min(15, duration) *
  mode/resolution factor` with `base_price = 35000` micro-USD — which evaluates to $0.01 / $0.02 /
  $0.04 at 480p and $0.025 / $0.035 / $0.075 at 768p. Same numbers, no markup, and no term for the
  upscaled tiers ([WaveSpeedAI](../../sources/wavespeed.ai/pruna-p-video-2-pro/2026-10-26.md)).
- **Eden AI** prices the default entry at $0.035/s and exposes `-cost` at $0.025/s and `-quality` at
  $0.075/s — Pruna's 768p row, split into three model strings
  ([Eden AI](../../sources/edenai.co/pruna-p-video-2-pro/2026-10-26.md)).
- **Reference media is billed separately** on `p-video-2-pro-reference`: images $0.005 (cost) or
  $0.01 (speed) each, audio $0.0015/$0.0025 per second, reference video $0.03–$0.06 per second, with
  each reference clip counting only up to the output length plus 0.5 s.

### Price ambiguity: the discount sentence is stale

The docs page still says "The table shows list prices; until October 13, 2026 the billed rate is 50%
off" — thirteen days after that date, and on a page whose terms were last updated 2026-10-13. Either
the sentence is stale copy or a discount silently continues. Nothing captured resolves it, and the
hosts charge list price, which suggests the promotion has ended
([docs](../../sources/pruna.ai/p-video-2-pro-docs/2026-10-26.md),
[terms](../../sources/pruna.ai/terms-of-service/2026-10-26.md)).

### Licensing

- **Hosted, commercial, API-only.** Pruna retains all rights in the service and models; the customer
  keeps "all rights in Customer Data" and may use outputs "subject to any third-party Model license
  terms disclosed for that Model" (terms §6.1, §11).
- **The H3 Community License applies to outputs.** Use restrictions, AUP, and the no-training clause
  are passed through from MiniMax; the territory restriction is waived for use through Pruna's
  service (§7.2).
- **No open-weights release of the tuned model**, and self-hosting is contractually excluded without a
  written order form.
- **No watermark statement** on any product page, despite AUP clause (m).

## Unresolved questions

1. **When was it released?** Bracketed to 2026-08-02 – 2026-09-14; no first-party date exists.
2. **Is the 50%-off promotion still in effect?** The docs page names an end date that has passed while
   still presenting the discount as current; hosts bill list price.
3. **What does `mode` change?** Cost/speed/quality are three prices for the same parameter surface
   with no technical description. Is `cost` a different checkpoint, fewer steps, or a different
   sampler?
4. **What is `p-video-upscale`?** Referenced in three model pages, absent from the catalogue, no docs
   page.
5. **What is the audio spec?** No sample rate, channel count, or lip-sync mechanism is documented for
   this deployment, although the H3 base card claims stereo dialogue.
6. **Do the hosts run Pruna's weights?** WaveSpeedAI and Eden AI expose overlapping but not identical
   parameter surfaces, and neither says whether it proxies Pruna or re-hosts.
7. **Why is "Pro" a different base model?** `p-video-2` is LTX-2 and `p-video-2-pro` is MiniMax H3;
   no page explains the naming or whether the LTX-based model is being retired.
8. **Why does the terms appendix name only two of the three H3-based models?** `p-video-2-pro-avatar`
   is outside §7.2.
9. **Does Eden AI actually accept video input for this model?** Its page says so; Pruna's docs and
   WaveSpeedAI's schema do not.
10. **What did the model look like before 2026-10-13?** The only pre-change record is one Wayback
    capture; whether the upscaled tiers are new capability or newly documented is unknown.

## Evidence status

**Evidence floor met.** First-party: nine Pruna records — the `p-video-2-pro` docs page, the product
page, the docs model catalogue, the "All Our Models" listing, the sibling docs pages for
`p-video-2-pro-reference`, `p-video-2-pro-avatar` and `p-video-2`, the terms plus Appendix 2, and the
2026-10-08 partnership post. Independent hosts: WaveSpeedAI (catalogue metadata, price formula,
request schemas for two endpoints) and Eden AI (model page, price, parameter mapping). Both hosts'
prices reproduce Pruna's schedule exactly, which is the strongest cross-check on this page. Wayback
captures of the docs page (2026-10-13) and the docs catalogue (2026-05-14) supply the only dated
history. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules; the
quality claim rests on the vendor's own unlabelled chart. Two absences are worth stating plainly:
there is no independent quality measurement, and there is no published release date.

The next useful evidence would be a small reproducible run set against named endpoints and dates: the
same prompt at 480p/768p across `cost`/`speed`/`quality` to test the "cost has the same quality as
speed" claim and to see what the modes change; a 768p render compared against its own 4k upscale to
separate generation from upscaling; a first-frame and a first/last-frame pair to check frame
adherence; a container probe on the delivered file for frame rate, audio channels and any provenance
signal; a 15-second request to confirm the billed-seconds rounding; and the same prompt run through
`p-video-2-pro` and MiniMax H3 directly to establish what Pruna's tuning actually buys.
