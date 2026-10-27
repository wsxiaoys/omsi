# BiRefNet v2

**Out-of-window exception.** BiRefNet is a 2024 research model, not a 2025-10-26 launch. The paper
was submitted to arXiv on **2024-01-07**, the code and weights were released on **2024-03-07**, the
journal version appeared on **2024-08-23**, and the fal endpoint the roster discovered
(`fal-ai/birefnet/v2`) was first published on **2024-10-28**
([paper record](../../sources/arxiv.org/birefnet-paper/2026-10-26.md),
[README record](../../sources/github.com/birefnet-readme/2026-10-26.md),
[fal record](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)). No upstream weight file is newer
than a 2025-04-22 upload, and the README's news list ends at 2025-09-23. The roster retains the row
as a **specialist/utility exception** — an open-weights segmentation and matting model still in
active third-party use — and this page states the original dates rather than implying a recent
release.

**"v2" is a host label, not a model generation.** The upstream project (GitHub `ZhengPeng7/BiRefNet`,
Hugging Face `ZhengPeng7/BiRefNet*`) has no version 2: its only release tag is `v1`, its README never
uses the name "BiRefNet v2", and its news list stops at 2025-09-23
([releases](../../sources/github.com/birefnet-releases/2026-10-26.md)). fal's endpoint for the model
is versioned internally as **"Remove Background Http V2"**, and it serves the same published
checkpoints as the earlier `fal-ai/birefnet` endpoint with a wider model selector
([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)).

## Identity

- Canonical name: **BiRefNet** — *Bilateral Reference for High-Resolution Dichotomous Image
  Segmentation*. Published in *CAAI Artificial Intelligence Research* vol. 3, 9150038 (2024);
  arXiv:2401.03407.
- Developer: an academic team led by **Peng Zheng**, with Dehong Gao, Deng-Ping Fan (corresponding
  author, Nankai University), Li Liu, Jorma Laaksonen, Wanli Ouyang, and Nicu Sebe
  ([paper](../../sources/arxiv.org/birefnet-paper/2026-10-26.md)). The roster's vendor label
  "open source" is a distribution model, **not a company**; there is no BiRefNet vendor entity.
  Hosting is by third parties (fal; Replicate community packagers), with integrations such as
  ComfyUI.
- Canonical IDs:
  - GitHub repository `ZhengPeng7/BiRefNet` (MIT, created 2022-08-17, last push 2026-10-25)
    ([README record](../../sources/github.com/birefnet-readme/2026-10-26.md)).
  - Hugging Face checkpoints: `ZhengPeng7/BiRefNet` (default general use),
    `BiRefNet_lite`, `BiRefNet_lite-2K`, `BiRefNet_lite-matting`, `BiRefNet_HR`,
    `BiRefNet_HR-matting`, `BiRefNet-matting`, `BiRefNet-portrait`, `BiRefNet_dynamic`,
    `BiRefNet_dynamic-matting`, `BiRefNet_512x512`, `BiRefNet-legacy`, plus the paper's
    `BiRefNet-DIS5K`, `BiRefNet-DIS5K-TR_TEs`, `BiRefNet-COD`, `BiRefNet-HRSOD`
    ([HF record](../../sources/huggingface.co/birefnet-weights/2026-10-26.md)).
- Host endpoints:
  - fal `fal-ai/birefnet` (published 2024-02-27), `fal-ai/birefnet/v2` (published 2024-10-28),
    `fal-ai/birefnet/v2/video` (published 2025-10-26T18:13Z)
    ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)).
  - Replicate community endpoints `men1scus/birefnet` and `sprited/birefnet` (plus
    `sprited/birefnet-toonout`); neither is author-operated
    ([Replicate record](../../sources/replicate.com/birefnet/2026-10-26.md)).
- Aliases and labels: "Birefnet Background Removal V2" is fal's endpoint title; "BiRefNet-general",
  "BiRefNet_lite", "BiRefNet_HR", "BiRefNet_dynamic" are checkpoint names, not separate models.
  **BRIA RMBG-2.0 is not an alias** — it is a separate model that BRIA trained from BiRefNet with
  private data and shipped under a non-commercial licence
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)). "ToonOut" is a community anime
  fine-tune.
- Release timeline (all upstream): paper 2024-01-07; code + weights 2024-03-07; fal deployment
  credited to fal on 2024-04-09; model zoo 2024-05-28; HF deployment 2024-07-15; journal publication
  2024-08-23; `BiRefNet_lite-2K` 2024-09-24; `BiRefNet-matting` 2024-10-06; fal `/v2` endpoint
  2024-10-28; `BiRefNet_HR` 2025-02-01; `BiRefNet_HR-matting` 2025-02-12; `BiRefNet_dynamic`
  2025-03-31; last weight asset 2025-04-22; last README news 2025-09-23.
- Siblings/descendants: the checkpoints above; `RMBG-2.0` (BRIA, non-commercial, DIS-trained,
  binary masks only); ToonOut (community fine-tune); GGUF/TensorRT/ONNX/Burn conversions listed in
  the README.

### What "v2" adds, concretely

Both fal endpoints take one image and return a cutout and/or mask. The v2 endpoint's differences are
host-level ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)):

| | `fal-ai/birefnet` (v1) | `fal-ai/birefnet/v2` |
| --- | --- | --- |
| Model selector | 3 values (`General Use (Light)`, `General Use (Heavy)`, `Portrait`) | 6 values (adds `General Use (Light 2K)`, `Matting`, `General Use (Dynamic)`) |
| Operating resolution | `1024x1024`, `2048x2048` | same plus `2304x2304` (dynamic model only) |
| `mask_only` input | absent | present |
| Default "Light" checkpoint | `BiRefNet-DIS_ep580` (DIS5K-only training) | `BiRefNet` (general-use weights) |
| Published | 2024-02-27 | 2024-10-28 |

So a reader who needs "BiRefNet v2" is really choosing **a fal endpoint version plus a checkpoint**.
The fal default is `General Use (Light)` = the general-use `BiRefNet` weights at a 1024×1024
operating resolution.

## Current assessment

The evidence supports a narrow, useful claim: BiRefNet is a **prompt-free, single-foreground
segmentation and matting model with permissively licensed weights**, whose published accuracy is
strong on the benchmarks its authors chose, and which is cheap enough to run per image on a single
GPU. It is a **retained specialist**, not a current frontier release: no weight file has been
published since 2025-04-22 (GitHub release assets), and repository activity since then is
documentation, compatibility work, and third-party links. Hugging Face repo metadata was touched as
late as 2026-08-29, but the cards do not say whether weights changed
([HF](../../sources/huggingface.co/birefnet-weights/2026-10-26.md)).

- **Accuracy.** Author-reported only. On DIS5K with the Swin-L model, the paper reports DIS-VD
  `S_m` .898, `Fβ^ω` .854, MAE .038, `HCE_γ` 989, and DIS-TE(1-4) `S_m` .901, `Fβ^ω` .858, MAE .035
  ([paper Table 4](../../sources/arxiv.org/birefnet-paper/2026-10-26.md)). The released general-use
  Swin-L checkpoint scores `S` 0.911, `wF` 0.875, `HCE` 1069 on DIS-VD in the author's model zoo,
  and the Swin-T (`lite`) general checkpoint scores 0.882 / 0.830 / 1175
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)). Those are different
  checkpoints and different training sets, so the two tables must not be mixed.
- **Speed and memory.** Paper: 83.3 ms per 1024×1024 image, 215 MB of parameters, 1143 G MACs on one
  A100; "the FPS of the largest BiRefNet can be more than 10"
  ([paper Table 7](../../sources/arxiv.org/birefnet-paper/2026-10-26.md)). README: 86.8 ms FP32 /
  69.4 ms FP16 on an A100, 95.8 / 57.7 ms on a 4090, inference memory 4.8 GB FP32 or 3.5 GB FP16,
  and a 2025-01-06 note claiming "17 FPS" with 3.45 GB at 1024×1024 on an RTX 4090
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)).
- **Cost.** Self-hosting is free under MIT. Hosted, the only per-run figures captured are Replicate's
  own estimates for community packagings: ≈ $0.0015 per run on an A100 80 GB and ≈ $0.0023 on an
  L40S ([Replicate](../../sources/replicate.com/birefnet/2026-10-26.md)). fal's page publishes
  "$ 0 per compute second" at capture, which does not yield a per-image price
  ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)).
- **Currency.** Upstream is in maintenance. fal added a video wrapper on 2025-10-26, which is the
  only BiRefNet artefact captured inside the roster window, and it reuses the same checkpoints.

What the evidence does **not** support: any claim that BiRefNet beats a named competitor on a
measured comparison. No independent evaluation, no head-to-head against BRIA RMBG-2.0, SAM, Pixelcut,
or any hosted remover, and no user-report corpus were captured. The "state-of-the-art" language on
the project page and in the paper is the authors' own, and the Papers-with-Code badges the README
once used are now dead links (the README itself says the site "has been shut down").

## Documented capabilities

All of the following is vendor or host documentation, not a test.

- **Prompt-free single-foreground segmentation.** One image in, one binary/alpha foreground map out.
  Nothing in the paper, the model cards, or either host's schema takes points, boxes, classes, or
  text ([paper](../../sources/arxiv.org/birefnet-paper/2026-10-26.md),
  [fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)).
- **Checkpoint specialisations.** General use (1024×1024, or 2048×2048 for `HR`), `lite` Swin-T for
  speed, `lite-2K` for 2560×1440 inputs, `dynamic` for arbitrary shapes 256×256 to 2304×2304,
  `matting` and `matting-hr` for soft/trimap-free alpha, `portrait` for human portraits, and
  `lite-matting`/`dynamic-matting` combinations
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md),
  [HF](../../sources/huggingface.co/birefnet-weights/2026-10-26.md)).
- **Host controls on fal.** `model` (6 checkpoints), `operating_resolution` (1024/2048/2304),
  `output_mask`, `mask_only` (mask without foreground refinement), `refine_foreground` (default
  true), `output_format` (`png`/`webp`/`gif`), `sync_mode`
  ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)).
- **Host controls on Replicate (community).** `variant` (11 values including ToonOut), `resolution`
  (0 = variant native), `output_format` (`cutout` RGBA or raw `mask`), `mask_blur`, `mask_offset`,
  `refine_fg`, and multi-frame GIF/WebP input returned as animated WebP
  ([Replicate](../../sources/replicate.com/birefnet/2026-10-26.md)).
- **Video background removal on fal.** `fal-ai/birefnet/v2/video` takes a video, the same six
  checkpoints and the same operating resolutions, plus `video_quality`, `video_output_type`
  (`X264`/`VP9`/`PRORES4444`/`GIF`), and `video_write_mode`; it returns a video and an optional
  `mask_video`. The schema's example output is 1920×1080 at 24 fps for 8 s
  ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)).
- **Local training and fine-tuning.** Full training/test/eval scripts, switchable backbones
  (Swin v1, PVT v2, ConvNets, DINOv3 options added 2025-10-06), multi-GPU, and a documented
  fine-tuning recipe on custom data
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)).
- **Deployment formats.** ONNX exports of every released weight, plus community TensorRT, GGUF, and
  Burn ports; an official ComfyUI integration
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)).
- **Box-guided inference** exists as a Colab notebook in the repository
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)). Neither host exposes it.

### Marketing and vendor claims (recorded as claims)

- Project page: "High-precision Segmentation — Achieve highly accurate image segmentation with our
  state-of-the-art technology", plus application claims for medical imaging, autonomous vehicles,
  precision agriculture, and industrial quality control, under a "© BiRefNet Team 2024" footer
  ([project page](../../sources/birefnet.cv/birefnet-project-page/2026-10-26.md)). None of these is
  accompanied by a measurement.
- README: "you can **use it for any binary image segmentation tasks**, such as DIS/COD/SOD, medical
  image segmentation, anomaly segmentation"
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)). The paper only evaluates DIS,
  HRSOD, COD, and SOD, so "any" is a generalisation.
- `BiRefNet_dynamic` card: "greater than BiRefNet-general and BiRefNet_HR-general on the reserved
  validation sets (DIS-VD and TE-P3M-500-NP)"
  ([HF](../../sources/huggingface.co/birefnet-weights/2026-10-26.md)). The card shows images, not
  numbers.
- fal: tag "high-res", description "bilateral reference framework (BiRefNet) for high-resolution
  dichotomous image segmentation (DIS)" — a restatement of the paper title
  ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)).
- fal's "The 'General Use (Heavy)' model is a slower but more accurate model" is contradicted by the
  checkpoint it maps to; see **Limitations**.

## Limitations and constraints

- **One foreground, no prompts.** BiRefNet predicts a single foreground map; it cannot be asked for
  "the left shoe" or for all instances in a scene. SAM's prompt and all-object interfaces are a
  different capability, not a quality tier (see below).
- **fal's Light/Heavy labels are inverted against the checkpoint sizes.** fal maps "General Use
  (Heavy)" to `BiRefNet_lite` (~44.4 M parameters, Swin-T) and "General Use (Light)" to `BiRefNet`
  (~220.7 M, Swin-L), while describing Heavy as "slower but more accurate"; upstream reports the
  Swin-T general checkpoint as *less* accurate on DIS-VD (0.882 vs 0.911 `S`)
  ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md),
  [HF](../../sources/huggingface.co/birefnet-weights/2026-10-26.md),
  [README](../../sources/github.com/birefnet-readme/2026-10-26.md)). Map by checkpoint name, not by
  adjective. Which weights "Heavy" actually loads is unresolved.
- **Resolution is a resize, not native detail.** The paper resizes every input to 1024×1024 for both
  training and testing ([paper](../../sources/arxiv.org/birefnet-paper/2026-10-26.md)); higher
  fidelity needs the `HR` (2048²), `lite-2K` (2560×1440), or `dynamic` (256–2304) checkpoints. fal
  allows `2304x2304` only with the dynamic model and does not document whether aspect ratio is
  preserved when it resizes.
- **Binary masks by default; soft alpha needs the matting checkpoints.** The README notes of BRIA's
  RMBG-2.0, which "trained BiRefNet with their high-quality private data" in "the DIS task setting,
  which focuses only on predicting binary masks", that it is "not aware of transparency"
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)). The caveat describes the DIS
  training objective, which the general checkpoints share; soft alpha needs the `matting`
  checkpoints, and the paper does not benchmark them (matting numbers exist only in the model zoo:
  `S` 0.979 / `wF` 0.988 on TE-P3M-500-NP, `S` 0.983 / `wF` 0.989 on P3M-500-P for portrait).
- **Memory figures conflict.** 4.8 GB FP32 / 3.5 GB FP16 in the efficiency table versus "5.5G GPU
  memory is needed for inference in 1024x1024" in the weights section, same README
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)).
- **ONNX is slower, not faster.** README: Swin-L ONNX inference is "~90%" slower than PyTorch
  (~165 ms vs ~83 ms on an A100), Swin-T "~75%" slower (~93.8 ms)
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md),
  [paper](../../sources/arxiv.org/birefnet-paper/2026-10-26.md)).
- **fal's published price is unusable.** Billing is "compute seconds" and the endpoint page prints
  "$ 0 per compute second"; there is no A100 rate on fal's public pricing page and no authenticated
  pricing API. A per-image cost cannot be derived from fal's own material
  ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)).
- **Quality evidence is author-reported and partly unreachable.** Papers-with-Code is shut down, so
  the README's SOTA badges cannot be checked; no independent benchmark of BiRefNet was captured
  ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)).
- **Stale links.** `birefnet.top` (linked from the HF cards) returns HTTP 401 behind a parked-domain
  redirect, and `replicate.com/kndlt/birefnet` (added to the README on 2026-06-15) returns 404
  ([project page](../../sources/birefnet.cv/birefnet-project-page/2026-10-26.md),
  [Replicate](../../sources/replicate.com/birefnet/2026-10-26.md)).
- **Video output has no documented temporal handling.** fal documents per-video inputs and outputs
  but no temporal smoothing, frame-rate cap, or flicker control; the repository's own video support
  is a tutorial notebook. Whether the output is a per-frame matting pass, and whether it flickers on
  hard edges, is untested here
  ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md),
  [README](../../sources/github.com/birefnet-readme/2026-10-26.md)).
- **No moderation documentation.** Neither fal's schema nor the repository describes a safety filter
  or content policy ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)).

### Differences from BiRefNet v1

There is no upstream v1/v2 model pair. The only documented "v1 → v2" step is fal's endpoint revision:
three checkpoints to six, an extra 2304 operating resolution for the dynamic model, a `mask_only`
switch, and a default checkpoint change from the DIS5K-only `BiRefNet-DIS_ep580` to the general-use
`BiRefNet` ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)). Anyone treating "v2"
as a quality upgrade over "v1" is comparing two host configurations of the same weights.

### Differences from SAM

These are interface and scope differences, not measured quality differences. No source captured here
compares the two on a shared benchmark, and the BiRefNet paper never mentions SAM
([paper](../../sources/arxiv.org/birefnet-paper/2026-10-26.md)).

| | BiRefNet | SAM (v1) |
| --- | --- | --- |
| Input | image only, no prompts | prompts: points, boxes, masks; or automatic "all objects" mode |
| Output | one foreground map (binary, or alpha with matting checkpoints) | a set of object masks, or one mask per prompt |
| Task framing | dichotomous image segmentation, salient foreground | promptable, class-agnostic object segmentation |
| Backbones | Swin-L, Swin-T (paper also PVTv2 b0/b1/b2) | ViT-H, ViT-L, ViT-B |
| Weights licence | MIT | Apache-2.0 code; SA-1B dataset under a separate research licence |
| Documented training data | DIS5K, HRSOD/UHRSD/DUTS, COD, plus mixed "general use" sets | 11 M images, 1.1 B masks (SA-1B) |

Sources: [BiRefNet paper](../../sources/arxiv.org/birefnet-paper/2026-10-26.md),
[SAM README](../../sources/github.com/segment-anything-readme/2026-10-26.md). SAM 2 and SAM 3 are out
of scope for this comparison.

## Access, pricing, licensing

### Hosted

| Route | Basis | Documented price | Notes |
| --- | --- | --- | --- |
| fal `fal-ai/birefnet/v2` | compute seconds | "$ 0 per compute second" at capture | GPU-A100; 10 free sandbox requests; `authSkippable: true` |
| fal `fal-ai/birefnet` (v1) | compute seconds | not captured | 3 checkpoints |
| fal `fal-ai/birefnet/v2/video` | compute seconds | not captured | published 2025-10-26 |
| Replicate `men1scus/birefnet` | per run (estimated) | ≈ $0.0015/run | A100 80 GB, "typically … within 2 seconds", legacy general weights |
| Replicate `sprited/birefnet` | per run (estimated) | ≈ $0.0023/run | L40S, "within 3 seconds", 11 variants incl. ToonOut |

Sources: [fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md),
[Replicate](../../sources/replicate.com/birefnet/2026-10-26.md). The Replicate figures are the
host's own run-cost estimates, not a published rate card, and both Replicate endpoints are community
packagings rather than author-operated services.

### Self-hosted

Free under MIT. One A100 runs the Swin-L model at ~83 ms per 1024×1024 image in the paper's setup
and ~70 ms in FP16 per the README; a 4090 is quoted at 57.7 ms FP16 and "17 FPS" in the README's
2025-01-06 note, which implies ~59 ms per image
([paper](../../sources/arxiv.org/birefnet-paper/2026-10-26.md),
[README](../../sources/github.com/birefnet-readme/2026-10-26.md)).

### Licensing

- **MIT** for the repository and for the Hugging Face weights: the GitHub API reports
  `license.spdx_id: MIT`, the README badge links `LICENSE`, and 15 of the 16 HF repos declare
  `license: mit` in card metadata; `BiRefNet-DIS5K-TR_TEs` declares no licence field
  ([README record](../../sources/github.com/birefnet-readme/2026-10-26.md),
  [HF record](../../sources/huggingface.co/birefnet-weights/2026-10-26.md)).
- MIT permits commercial use and modification. No acceptable-use policy, gating, or field-of-use
  restriction was found on any first-party page.
- fal's `licenseType: "commercial"` is fal's statement about use through fal, not a BiRefNet licence
  statement ([fal](../../sources/fal.ai/birefnet-v2-endpoints/2026-10-26.md)). The Replicate
  packager's "MIT-licensed — free for commercial use" is a third party's reading of the same MIT
  terms ([Replicate](../../sources/replicate.com/birefnet/2026-10-26.md)).
- Do not transfer these terms to derivatives: BRIA's RMBG-2.0 is BiRefNet-derived and its weights are
  "for only non-commercial use" ([README](../../sources/github.com/birefnet-readme/2026-10-26.md)).
- The journal's own terms (CAAI AIR) were not captured; they govern the paper, not the weights.

## Unresolved questions

1. **Which checkpoint does fal's "General Use (Heavy)" actually load?** The documented mapping
   (`BiRefNet_lite`, ~44.4 M parameters) contradicts fal's own description ("slower but more
   accurate") and upstream's accuracy ordering.
2. **What does fal charge per image?** Billing is compute-second with a published unit price of $0;
   no per-request compute time or A100 rate is published.
3. **Which upstream build does `fal-ai/birefnet/v2` serve, and when was it last rebuilt?** fal
   exposes only `updated_at` 2026-07-10 and no weight hash; the upstream `BiRefNet` card's
   `lastModified` is 2026-02-04 with no statement that weights changed.
4. **Is there any independent quality measurement?** None captured. A comparison against BRIA
   RMBG-2.0, SAM/SAM 2, Pixelcut, or a hosted remover on the same images would be the first
   non-author evidence.
5. **Does the `dynamic` checkpoint really beat `general` and `HR`?** The card asserts it with images
   only; the author has not published the numbers in the card.
6. **Does fal preserve aspect ratio when it resizes to the operating resolution,** and does
   `2304x2304` mean a square canvas?
7. **Does the video endpoint smooth across frames?** No temporal handling is documented, so whether
   it is a per-frame matting pass and whether the result flickers on hard edges are both untested
   here.
8. **Which figure is the real inference memory, 4.8 GB FP32 or "5.5G"?** Both appear in the same
   README.
9. **How much do `refine_foreground`/`refine_fg` change edge quality?** Both hosts expose the switch
   (fal default true) and neither publishes a comparison with it off; Replicate describes its
   equivalent as "FB blur-fusion to strip background bleed on soft edges".
10. **What is the current recommended checkpoint for general use?** fal recommends "General Use
    (Light)"; the `dynamic` card claims better results; the upstream README recommends nothing
    explicit.

## Evidence status

Evidence floor: **met**. First-party records: the GitHub README and repository metadata, the GitHub
releases/tags/commit history, the Hugging Face weight repositories and cards, the arXiv paper (v7),
and the project page. Independent host records: fal's catalogue, metadata API, endpoint page, and
three published input/output schemas; two Replicate community endpoints with run-cost estimates. One
supporting record (Meta's SAM README) exists only for the SAM comparison. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this
knowledge base. Accuracy and efficiency figures are the authors' (paper Tables 4 and 7, README model
zoo and efficiency tables) or the hosts' (run-time estimates); the "state-of-the-art" and
"high-precision" language is the authors' marketing. The next useful evidence would be a small
reproducible image set — product cutouts, hair/translucency, thin structures, cluttered scenes,
portraits — run through `fal-ai/birefnet/v2` with each of its six checkpoints at 1024 and 2048, plus
the same images through BRIA RMBG-2.0 and a hosted remover, scoring edge accuracy and alpha quality
against hand-made mattes, with wall-clock timing per checkpoint.
