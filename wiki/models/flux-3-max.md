# FLUX 3 Max

A **video** model: Black Forest Labs' FLUX 3, post-trained by fal Research and served only on fal
as `blackforestlabs/flux-3-max/*`. It is not an image model, and it is not a serving tier of
FLUX 3 Image. The curation roster filed it under image models on the strength of a host catalogue
path; that label was wrong, and this page records the correction rather than the label.

It is a distinct checkpoint rather than a price tier of one model: fal states it "kept training
FLUX 3" ([fal landing page](../../sources/fal.ai/flux-3-max-landing/2026-10-26.md)), and
Artificial Analysis lists it separately as `isDerived: true` with base model "FLUX 3", credited to
"Fal" ([AA image-to-video](../../sources/artificialanalysis.ai/flux-3-max-image-to-video/2026-10-26.md)).
No weights are published and BFL's own API does not serve it.

## Identity

- Canonical name: FLUX 3 Max. BFL's site nav writes "FLUX 3 Max"; fal writes "FLUX 3 Max" and
  titles the page "FLUX 3 Max: Text and Image to Video, Post-Trained by fal".
- **Model IDs** (fal, all three callable):
  `blackforestlabs/flux-3-max/text-to-video`,
  `blackforestlabs/flux-3-max/image-to-video`,
  `blackforestlabs/flux-3-max/keyframes-to-video`
  ([catalogue](../../sources/fal.ai/flux-3-max-endpoints/2026-10-26.md)).
  The bare `blackforestlabs/flux-3-max` — the roster's discovery path — is a **landing-page slug**,
  not an endpoint.
- **Vendor attribution is split, and the sources disagree about how to describe it.** fal:
  "fal Research made FLUX 3 Max in collaboration with Black Forest Labs, who built the base model,
  FLUX 3" ([fal landing page](../../sources/fal.ai/flux-3-max-landing/2026-10-26.md)). BFL lists
  "FLUX 3 Max" first in its own model navigation and gives it a marketing section on the FLUX 3
  Video page, but that section's only link is "Try FLUX 3 Max on fal"
  ([BFL video page](../../sources/bfl.ai/flux-3-max-video-page/2026-10-26.md)). fal's catalogue
  metadata sets `modelLab: "Fal"` and `discovery.lab: "fal"`; AA's creator field says "Fal". No
  source captured states that BFL trained, hosts, or supports the checkpoint.
- **Release:** endpoints created 2026-10-16, published 2026-10-19
  ([catalogue](../../sources/fal.ai/flux-3-max-endpoints/2026-10-26.md)); AA prints
  `releaseDate: 2026-10-19` ([AA i2v](../../sources/artificialanalysis.ai/flux-3-max-image-to-video/2026-10-26.md)).
  Treat **2026-10-19** as the public launch. A launch promotion runs "October 15" to "November 7",
  which starts a day before the endpoints were created — unexplained.
- **Base model:** FLUX 3, announced 2026-07-23 as early access
  ([BFL announcement](../../sources/bfl.ai/flux-3-max-family-announcement/2026-10-26.md)); its
  video capability went generally available 2026-08-04
  ([release notes](../../sources/bfl.ai/flux-3-max-release-notes/2026-10-26.md)).
- **Siblings / name collisions:**
  - FLUX 3 Video — the base, served first-party by BFL. Same family, different checkpoint.
  - FLUX 3 Image, FLUX 3 Image Klein, FLUX 3 Action, FLUX 3 Dev — the other FLUX 3 products.
    BFL's launch plan names exactly those four and **not** Max
    ([announcement](../../sources/bfl.ai/flux-3-max-family-announcement/2026-10-26.md)).
  - **FLUX.2 \[max]** — an unrelated 2025 image model, and the only "max" row in BFL's price list
    ([pricing docs](../../sources/bfl.ai/flux-3-max-pricing-docs/2026-10-26.md)). Anyone searching
    BFL for "max" finds the wrong model.

### The identity question, stated plainly

Three readings were possible from the roster: Max is a distinct model, Max is a serving tier of
FLUX 3 Image, or Max is a repackaging. The evidence supports a fourth: **Max is a post-trained
video derivative of FLUX 3, authored by fal and co-branded with BFL.** Supporting points:

1. fal describes retraining, not configuration ("kept training FLUX 3 to improve visual fidelity,
   motion coherence, prompt adherence and image-to-video quality").
2. AA independently classifies it as derived, with FLUX 3 as the base model.
3. It has its own endpoints, its own price, and its own Elo rows — the practical test of whether a
   reader must choose between it and its parent.
4. It is **not obtainable first-party**: no BFL endpoint, no BFL docs page (absent from
   `docs.bfl.ml/llms.txt`), no BFL pricing row, and no entry in BFL's release notes as of capture.

Point 4 is the weak link in the identity, not in the capability: because the vendor of record for
the checkpoint is a host, "FLUX 3 Max" is closer to a co-branded fal product than to a BFL model
release. The name is BFL's; the checkpoint is fal's.

## Current assessment

Within its constraints — 720p/1080p, 5–20 s, no weights, one host — FLUX 3 Max buys quality
cheaply. On Artificial Analysis's image-to-video board it is the least expensive model in the top
ten at `$2.55`/min, scoring level with Dreamina Seedance 2.5 (1138 vs 1138) at `$34.12`/min
([AA i2v](../../sources/artificialanalysis.ai/flux-3-max-image-to-video/2026-10-26.md)). On
text-to-video it scores 1155 against Gemini Omni Flash 1.1's 1128 for a quarter of that model's
`$9.12`/min, though HeyGen Video 1 is cheaper still at `$2.40`/min and scores 1157
([AA t2v](../../sources/artificialanalysis.ai/flux-3-max-text-to-video/2026-10-26.md)). Its
image-to-video Elo is also statistically above base FLUX 3. Those facts are the whole case, and
they are contingent on the launch promotion: at list price the cost argument disappears.

What it is not: a full FLUX 3 Video replacement. It drops the base model's 2K/4K output, its
draft-and-enhance workflow, its video continuation, and its first-party `safety_tolerance` control.
A workflow that needs any of those stays on FLUX 3 Video at BFL.

## Documented capabilities

Host and API documentation, not tests.

- **Text to video, image to video, keyframes to video** — three endpoints; image-to-video takes a
  first frame plus an optional last frame, keyframes takes a list of `image_url` + `frame_index`
  ([schema](../../sources/fal.ai/flux-3-max-api-schema/2026-10-26.md)).
- **Native audio, on by default.** `generate_audio` defaults to `true`; fal's copy says "Output:
  720p video with native audio"
  ([catalogue](../../sources/fal.ai/flux-3-max-endpoints/2026-10-26.md)). fal's landing page does
  not break out dialogue or multilingual speech for Max the way BFL does for FLUX 3 Video.
- **Duration 5–20 s** in whole seconds, default 5 — the same ceiling as base FLUX 3 Video.
- **Resolution `720p` or `1080p`, default `720p`**
  ([schema](../../sources/fal.ai/flux-3-max-api-schema/2026-10-26.md)). The landing page and the
  catalogue descriptions mention 720p only — see Unresolved questions 2.
- **Aspect ratios:** `auto`, `21:9`, `2:1`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16`; `auto` is 16:9 for
  text prompts and follows the first image otherwise.
- **`reasoning_level`: `low` or `high`, default `high`** — "How much effort the harness spends
  reasoning about the given prompt. Higher reasoning effort means slower generation time." Not
  offered by BFL's first-party FLUX 3 Video API.
- **`seed`** for reproducibility. Output is an mp4-style `VideoFile`; the schema example is
  1280 × 704, 24 fps, 121 frames, 5.04 s, and the response also reports `timings.inference`
  ("seconds the model spent denoising the video. Excludes prompt expansion, decoding and upload").

### Marketing claims, kept separate

These are fal's and BFL's own statements, with no shared methodology:

- BFL: "Fastest in the west. 10-second video in 12 seconds. 22× faster than Seedance 2.5 at the
  same quality" ([BFL video page](../../sources/bfl.ai/flux-3-max-video-page/2026-10-26.md)).
- fal: "12.45 seconds against 277.80" for a 10-second clip against Seedance 2.5; "about 10x faster"
  than FLUX 3 (126.44 s → 12.45 s); "Tied for #1 in image-to-video quality"; "Post-training lifted
  FLUX 3 by 50 Elo points, from 1,089 to 1,139"
  ([fal landing page](../../sources/fal.ai/flux-3-max-landing/2026-10-26.md)).
- fal's own footnote concedes the ranking is interval-dependent: "FLUX 3 Max is tied for #1: its
  confidence interval overlaps the leaders, with MiniMax H3 listed first on that board at 1,141."
- Prose claims with no numbers behind them: "Faces that hold up in close-up", "Motion that stays
  true to life", "You no longer need a fast model for drafts and a slow one for finals".

The latency figures are fal's measurements on fal's infrastructure. No prompt set, hardware,
batching, or concurrency is published, so the 22× ratio is not reproducible from the evidence.

## Independent measurement

Artificial Analysis runs blind pairwise human-preference Elo on its video boards, and lists FLUX 3
Max as its own row measured "using the fal API with `reasoning_level: \"high\"`".

| Board | FLUX 3 Max (720p) | FLUX 3 | Verdict |
| --- | --- | --- | --- |
| AA-Video-I2V v1.1 | 1138 ±15 (1123–1153), rank 2 of range 1–6, 5,054 samples | 1086 ±16 (1070–1102), rank 8 | **+51.7, intervals do not overlap** — the gain survives |
| AA-Video-T2V v2.1 | 1155 ±15 (1140–1170), rank 6 of range 2–8, 5,650 samples | 1142 ±14 (1128–1156), rank 8 | **+13.0, intervals overlap** — not distinguishable |

Sources: [AA image-to-video](../../sources/artificialanalysis.ai/flux-3-max-image-to-video/2026-10-26.md),
[AA text-to-video](../../sources/artificialanalysis.ai/flux-3-max-text-to-video/2026-10-26.md).

Read this as two separate findings, because they are. fal's "+50 Elo" claim is an image-to-video
result and AA reproduces it (+51.7). fal does not publish a text-to-video delta; AA's board shows
one that is inside the noise. Anyone quoting "FLUX 3 Max is +50 Elo better" without naming the
board is overstating the text-to-video case.

On absolute level, AA puts Max at 1138 (i2v) / 1155 (t2v) — second and sixth respectively, not
first on either board. fal's "tied for #1" is defensible only through the printed rank range and
overlapping intervals.

## Limitations and constraints

- **One host, no first-party access.** fal only. BFL has no endpoint, no docs page, no pricing row
  and no changelog entry for it ([release notes](../../sources/bfl.ai/flux-3-max-release-notes/2026-10-26.md),
  [pricing docs](../../sources/bfl.ai/flux-3-max-pricing-docs/2026-10-26.md)). Replicate does not
  list it and `/black-forest-labs/flux-3-max` returns 404
  ([Replicate check](../../sources/replicate.com/flux-3-max-not-listed/2026-10-26.md)). A fal
  outage or a delisting removes the model entirely.
- **Lower resolution ceiling than its own base model.** Max offers 720p/1080p; FLUX 3 Video offers
  `hd`/`fhd`/`qhd`/`uhd`, i.e. up to 3840 × 2176 at 16:9. If you need 2K/4K, Max cannot deliver.
- **No draft workflow.** FLUX 3 Video's `draft` → `draft_enhance` cycle has no Max equivalent; the
  speed is the pitch, but the cheap-preview step is gone.
- **No video continuation (v2v) and no extend** on the Max endpoints — the three endpoints cover
  t2v, i2v and keyframes only.
- **No `safety_tolerance` parameter.** BFL exposes 0–7 moderation tolerance; fal's Max schema does
  not. Refusal behaviour therefore cannot be tuned per request, and nothing captured documents
  Max's moderation stack.
- **No weights, no version pinning.** fal says it "is continuing to post-train the model", and the
  endpoints carry no dated version tag, so behaviour can change under the same model ID.
- **The Elo is configuration-specific** — measured at `reasoning_level: "high"`; a `low` run is not
  covered by any captured source.
- **Name collision with FLUX.2 \[max]**, an unrelated 2025 image model.
- **Aspect-ratio gap:** BFL's first-party FLUX 3 Video accepts `9:21`; Max's enum does not.

## Access, pricing, licensing

- **fal, per second of output video**, text-to-video and image-to-video at the same rate:
  `$0.0425`/s at 720p and `$0.0725`/s at 1080p as a **75% launch promotion running October 15 –
  November 7**; list `$0.17`/s (720p) and `$0.29`/s (1080p) after that
  ([catalogue](../../sources/fal.ai/flux-3-max-endpoints/2026-10-26.md)). The landing page quotes
  the 720p numbers only
  ([fal landing page](../../sources/fal.ai/flux-3-max-landing/2026-10-26.md)). "No minimums and no
  subscription."
- **The list price is the same as base FLUX 3 Video.** BFL's first-party rates are `$0.17`/s for
  standard HD and `$0.29`/s for FHD
  ([BFL video page](../../sources/bfl.ai/flux-3-max-video-page/2026-10-26.md)). So outside the
  promotion, Max costs what the base model costs and the speed is the only differentiator; during
  the promotion it is a quarter of the price.
- **AA's normalisation:** `$2.55 /min` for Max against `$17.40 /min` for FLUX 3
  ([AA i2v](../../sources/artificialanalysis.ai/flux-3-max-image-to-video/2026-10-26.md)) — a
  snapshot of the promotional rate, and it will be stale after 2026-11-07.
- **Licensing:** fal marks all three endpoints `licenseType: "commercial"`. No licence text, weight
  terms, or output-use terms were captured for this checkpoint, and BFL's terms pages were not
  checked for a clause covering partner post-trained variants. Whether commercial use of Max
  output is covered by BFL's terms, fal's terms, or both is **unresolved**.

## Unresolved questions

1. **Who is the vendor of record?** BFL markets and names it; fal trained and serves it; AA credits
   Fal. Which party supports it, and which party's terms govern output? No captured source says.
2. **Is 1080p real, and how?** The schema accepts `resolution: "1080p"` and the catalogue prices it;
   the landing page and every endpoint description say 720p. Native render or upscale? Unresolved.
3. **Did BFL decline to announce Max, or is the changelog simply stale?** BFL's release notes stop
   at 2026-10-15, one day before fal created the endpoints, so the absence proves little.
4. **What does `reasoning_level` change** — prompt expansion, extra sampling, or both — and how
   large is the quality/latency trade?
5. **How stable is the checkpoint?** With no version tag and continued post-training, two runs a
   month apart may not be the same model.
6. **Does Max inherit FLUX 3's audio/dialogue capability?** `generate_audio` exists; multilingual
   dialogue, lipsync and audio-reference support are documented for FLUX 3 Video, not for Max.
7. **What is the promotion's real end state?** If list price equals base FLUX 3 Video, the model's
   value proposition after 2026-11-07 rests entirely on latency, which is fal's own unverified
   measurement.

## Evidence status

**No direct tests were run for this page.** Nothing here is a measured output from this KB: no
generation was requested, no latency was timed, no prompt was rendered.

Evidence floor: **met, with a caveat worth stating.** One first-party source (BFL: a marketing
section, the release notes, the price list and the FLUX 3 announcement — four records) and one
host record (fal: landing page, catalogue, API schema — three records). The caveat is that fal is
a **party to the model**, not an independent host, so its record cannot corroborate fal's own
claims. The independent material is Artificial Analysis's two leaderboards (measurement) and
Replicate's catalogue (absence). A host that merely restates fal's copy would add nothing here;
none was found — Replicate does not carry the checkpoint, and no other host was checked.

What would change the page: a browser-rendered BFL price table (the numeric cells did not render
in this capture), a BFL statement on partner post-trained variants, a second host serving Max, or
any independent latency measurement of the 12.45 s figure.
