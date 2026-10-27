# Leffa

Leffa is a research model for **controllable person image generation**: given a person photo and a
second reference image, it produces a new photo of that person wearing a supplied garment (virtual
try-on) or adopting the pose in the reference (pose transfer). It is not a text-to-image model and
accepts no prompt. It comes from a Meta AI author group with King's College London and Tongji
University co-authors, released as MIT-licensed code and weights in December 2024, and is served
commercially by fal at a flat price per generation
([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md),
[code](../../sources/github.com/leffa/2026-10-26.md),
[weights](../../sources/huggingface.co/leffa-model-card/2026-10-26.md),
[fal](../../sources/fal.ai/leffa/2026-10-26.md)).

**Out of window.** Leffa's first public release is **2024-12-11** (arXiv v1), with weights on
2024-12-12 and 2024-12-16 — roughly ten and a half months *before* the roster's 2025-10-26 cutoff. No
later checkpoint was found: the code repository's last push is 2025-09-12, the weights repository's
last commit is 2025-09-11, and the only post-cutoff commit found in the project's repositories is a
2025-12-02 Hugging Face Space migration to ZeroGPU, which is hosting infrastructure rather than a
model release
([code](../../sources/github.com/leffa/2026-10-26.md),
[weights](../../sources/huggingface.co/leffa-model-card/2026-10-26.md),
[Space](../../sources/huggingface.co/leffa-demo-space/2026-10-26.md)). The roster keeps this row as a
**specialist/utility exception** — virtual try-on and pose transfer are different tasks from the
prompt-driven generators elsewhere in this roster — not as a model that launched inside the window.

## Identity

- Canonical name: **Leffa**, a backronym for "**le**arning **f**low **f**ields in **a**ttention". The
  paper title is longer: "Learning Flow Fields in Attention for Controllable Person Image Generation"
  ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md)).
- Authors: Zijian Zhou (Meta AI and King's College London, "Work done at Meta"), Shikun Liu, Xiao Han,
  Haozhe Liu, Kam Woh Ng, Tian Xie, Yuren Cong, Hang Li, Mengmeng Xu, Juan-Manuel Pérez-Rúa, Aditya
  Patel, Tao Xiang, Sen He (all Meta AI), and Miaojing Shi (Tongji University)
  ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md)).
- Canonical artefacts: GitHub `franciszzj/Leffa`; Hugging Face weights `franciszzj/Leffa`; Hugging
  Face demo `franciszzj/Leffa` ([code](../../sources/github.com/leffa/2026-10-26.md),
  [weights](../../sources/huggingface.co/leffa-model-card/2026-10-26.md),
  [Space](../../sources/huggingface.co/leffa-demo-space/2026-10-26.md)).
- Host endpoints: `fal-ai/leffa/virtual-tryon` and `fal-ai/leffa/pose-transfer` on fal, grouped under
  `fal-ai/leffa` ([fal](../../sources/fal.ai/leffa/2026-10-26.md)). No Replicate listing was found
  ([Replicate search](../../sources/replicate.com/leffa-not-listed/2026-10-26.md)).
- Aliases: "Leffa Virtual TryOn" and "Leffa Pose Transfer" are fal's endpoint titles; "Leffa Predict
  Vt" and "Leffa Predict Pt" are fal's internal `about` strings for the same two endpoints. Neither is
  a separate model ([fal](../../sources/fal.ai/leffa/2026-10-26.md)).
- Release dates: arXiv v1 2024-12-11, v2 2024-12-12; Hugging Face Space and model repo created
  2024-12-10; VITON-HD virtual try-on and DeepFashion pose transfer weights 2024-12-12; DressCode
  virtual try-on weights 2024-12-16; CVPR 2025 proceedings June 2025, pages 2491–2501; fal endpoints
  published 2024-12-17 ([code](../../sources/github.com/leffa/2026-10-26.md),
  [CVF](../../sources/thecvf.com/leffa-cvpr2025/2026-10-26.md),
  [fal](../../sources/fal.ai/leffa/2026-10-26.md)).

### Where the roster label and the first-party identity differ

- **"Meta research" is about authorship, not ownership.** Thirteen of fourteen authors list a Meta AI
  affiliation, but the paper's own Statement says "All experiments, data collection, and processing
  activities were conducted at King's College London. Meta was involved solely in an advisory role and
  NO experiments, data collection or processing activities were conducted on Meta infrastructure"
  ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md)). No Meta-hosted endpoint, Meta product
  page, or Meta-org repository was found in the captured record; the code lives under a personal
  GitHub account, and the `facebookresearch/Leffa` repository does not exist
  ([code](../../sources/github.com/leffa/2026-10-26.md)).
- **The roster's GitHub lead is wrong.** `facebookresearch/Leffa` returned HTTP 404 on 2026-10-26
  (both the page and the GitHub API); the canonical repository is `franciszzj/Leffa`
  ([code](../../sources/github.com/leffa/2026-10-26.md)).
- **The roster's `fal-ai/leffa` path is a group, not an endpoint.** fal exposes two endpoints under it
  and no single `fal-ai/leffa` model ID; calls go to `/virtual-tryon` or `/pose-transfer`
  ([fal](../../sources/fal.ai/leffa/2026-10-26.md)).
- **Three checkpoints, not one model.** The releases are `virtual_tryon.pth` (VITON-HD),
  `virtual_tryon_dc.pth` (DressCode) and `pose_transfer.pth` (DeepFashion). The first two run on a
  Stable Diffusion 1.5 inpainting backbone and the third on Stable Diffusion XL inpainting, according
  to the repository's own wiring ([code](../../sources/github.com/leffa/2026-10-26.md),
  [weights](../../sources/huggingface.co/leffa-model-card/2026-10-26.md)). The paper describes only an
  SD1.5 baseline, so the SDXL pose-transfer checkpoint is a release the paper does not document
  ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md)). They share one page because they are
  one framework with one method, one paper, and one licence; the checkpoint differences are recorded
  here rather than split out.

## Current assessment

Leffa is a **retained specialist**, not a current general-purpose model. Within its two tasks the
evidence is the authors' own benchmark work: state-of-the-art claims backed by FID/KID/SSIM/LPIPS
comparisons against IDM-VTON, CatVTON, OOTDiffusion and others on VITON-HD, DressCode and DeepFashion,
evaluated with the authors' own harness (`franciszzj/VtonEval`)
([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md),
[code](../../sources/github.com/leffa/2026-10-26.md)). Those are single-harness, single-paper numbers;
**no independent re-measurement and no third-party leaderboard for virtual try-on were captured**, so
the correct reading is "the authors report the best published numbers on three research benchmarks",
not "the best try-on model available".

What the evidence does support is availability and price: fal still lists both endpoints as active,
non-deprecated, serverless, on A100 hardware at a flat $0.10 per generation, and the author-run
Hugging Face Space is publicly accessible on ZeroGPU hardware
([fal](../../sources/fal.ai/leffa/2026-10-26.md),
[Space](../../sources/huggingface.co/leffa-demo-space/2026-10-26.md)). Nothing in the captured record
shows a capability or checkpoint update since January 2025, and the model predates the current
generation of try-on systems; its practical status in this knowledge base is "cheap, open-weight,
research-lineage try-on baseline", not "current best".

## Documented capabilities

All of the following is vendor or host documentation; nothing here was executed.

- **Virtual try-on.** Inputs are a person image, a garment image and a declared `garment_type`
  (`upper_body`, `lower_body` or `dresses`); output is the person wearing the garment. The pipeline
  builds a garment-agnostic mask from human parsing plus pose keypoints and conditions on DensePose
  ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md),
  [code](../../sources/github.com/leffa/2026-10-26.md),
  [fal](../../sources/fal.ai/leffa/2026-10-26.md)).
- **Pose transfer.** The source image supplies the pose (DensePose is extracted from it) and the
  reference image supplies the person's appearance: "in pose transfer, I_tgt represents the person in
  I_ref adopting the pose from I_src" ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md)).
  The reference app repaints the whole canvas for this task rather than a masked region
  ([code](../../sources/github.com/leffa/2026-10-26.md)).
- **Two training variants for try-on.** A VITON-HD checkpoint for the standard try-on setting and a
  DressCode checkpoint for the multi-category (upper body / lower body / dresses) setting; the local
  app exposes the choice as `viton_hd` / `dress_code`
  ([code](../../sources/github.com/leffa/2026-10-26.md)).
- **Sampler and guidance controls.** Steps (default 50, capped at 50 on fal), CFG guidance (default
  2.5), seed, output format (PNG or JPEG), plus a "reference UNet acceleration" toggle and a
  garment-image preprocessing option for PNGs ([fal](../../sources/fal.ai/leffa/2026-10-26.md),
  [code](../../sources/github.com/leffa/2026-10-26.md)).
- **Single image output at a fixed size.** The reference app resizes and centre-crops to 768×1024;
  fal's schema example output is 768×1024 for try-on and 1024×768 for pose transfer. There is no
  width, height, or aspect-ratio input on either host endpoint
  ([code](../../sources/github.com/leffa/2026-10-26.md),
  [fal](../../sources/fal.ai/leffa/2026-10-26.md)).
- **Reproducibility.** fal documents the seed as deterministic: "The same seed and the same input
  given to the same version of the model will output the same image every time"
  ([fal](../../sources/fal.ai/leffa/2026-10-26.md)).

### Claims (vendor and author statements, not findings)

- The paper claims Leffa "achieves state-of-the-art performance in controlling appearance (virtual
  try-on) and pose (pose transfer), significantly reducing fine-grained detail distortion"
  ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md)). Its supporting numbers, all from the
  authors' harness: VITON-HD paired FID 4.54 / KID 0.05 / SSIM 0.899 / LPIPS 0.048 and unpaired FID
  8.52 / KID 0.32 (next-best paired FID 5.42); DressCode paired FID 2.06 / KID 0.07 / SSIM 0.924 /
  LPIPS 0.031 and unpaired FID 4.48 / KID 0.62 (next-best paired FID 3.99); DeepFashion pose transfer
  FID 5.71 at 256×176 and 4.23 at 512×352
  ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md)).
- The authors claim the Leffa loss is model-agnostic and improves other diffusion models when added to
  them ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md)).
- The repository claims "generating an image in 6 seconds (on A100)" after switching to float16 and a
  "30% faster" prediction after the reference-UNet acceleration change, with no batch size, step
  count, or harness given ([code](../../sources/github.com/leffa/2026-10-26.md)).
- fal describes it as "a high quality image based Try-On endpoint which can be used for commercial try
  on" ([fal](../../sources/fal.ai/leffa/2026-10-26.md)).

## Limitations and constraints

- **The authors' own stated limitations.** "it requires multi-stage training with the Leffa loss
  applied only in the final stage"; "appearance control relies on garment segmentation, which impacts
  performance when segmentation is inaccurate"; and "our method struggles to preserve extremely
  fine-grained details, such as small text, due to the 8 × 8 resolution compression brought by the
  latent encoder" ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md)).
- **A garment region must be declared, not inferred.** `garment_type` is a required enum on fal, and
  the mask is built from SCHP parsing plus OpenPose keypoints, so an inaccurate parse or keypoint set
  propagates into the mask ([fal](../../sources/fal.ai/leffa/2026-10-26.md),
  [code](../../sources/github.com/leffa/2026-10-26.md)).
- **No prompt, no instruction, no text control.** Neither the paper, the code, nor the host schemas
  expose a text prompt; the only control is which reference image and which garment region is supplied
  ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md),
  [fal](../../sources/fal.ai/leffa/2026-10-26.md)).
- **Fixed output geometry.** No resolution or aspect-ratio control on fal, and the reference app
  centre-crops to 768×1024 before inference, so a tall or wide source is cropped rather than
  letterboxed ([code](../../sources/github.com/leffa/2026-10-26.md),
  [fal](../../sources/fal.ai/leffa/2026-10-26.md)).
- **Pose-transfer resolution is ambiguous.** The paper trains the pose model up to 512×352, while the
  released app runs the pose checkpoint at 768×1024. Whether the released checkpoint was retrained at
  a higher resolution is not stated anywhere captured; the discrepancy is recorded rather than
  explained ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md),
  [code](../../sources/github.com/leffa/2026-10-26.md)).
- **fal's pose-transfer documentation contradicts itself.** `pose_image_url` is described as "Url for
  the human image" and exemplified with `person_image.jpg`, while `person_image_url` is described as
  "Url to the garment image" and exemplified with `pose_image.jpg` — descriptions copied from the
  try-on schema and example URLs crossed
  ([fal](../../sources/fal.ai/leffa/2026-10-26.md)). A caller has to guess which field is the pose
  donor.
- **Host moderation is a black-image filter.** fal's safety checker is on by default; "unauthorized
  requests are always checked, and images flagged as unsafe are returned as black images", and the
  output carries a `has_nsfw_concepts` flag ([fal](../../sources/fal.ai/leffa/2026-10-26.md)). No
  first-party moderation documentation from the authors was captured, so a refusal on one route is not
  evidence about the model's general behaviour.
- **Dated stack.** SD1.5 and SDXL inpainting backbones from the 2022–2023 generation, with no
  checkpoint update since December 2024 ([weights](../../sources/huggingface.co/leffa-model-card/2026-10-26.md)).
- **No independent quality comparison against current try-on systems** (for example FASHN or Decart's
  VTON models) was captured, so relative quality in 2026 is unknown.

## Access, pricing, licensing

### fal (the only host found)

- `fal-ai/leffa/virtual-tryon` and `fal-ai/leffa/pose-transfer`, both `serverless` on `GPU-A100`,
  both published 2024-12-17, both active and not deprecated
  ([fal](../../sources/fal.ai/leffa/2026-10-26.md)).
- Price: **"Your request will cost $0.1 per generation"** on both endpoints — a flat per-call charge
  with no per-megapixel, per-step, or input-count component
  ([fal](../../sources/fal.ai/leffa/2026-10-26.md)). That is the only published price for this model;
  with no second host, there is no price comparison to make.
- fal carries a "Commercial use" badge and `licenseType: "commercial"`; those are fal's statements
  about use through fal, not the authors' terms ([fal](../../sources/fal.ai/leffa/2026-10-26.md)).

### Weights and code (self-hosted)

- GitHub code is MIT ("Copyright (c) 2024 Zijian Zhou"); the Hugging Face model card declares
  `license: mit` ([code](../../sources/github.com/leffa/2026-10-26.md),
  [weights](../../sources/huggingface.co/leffa-model-card/2026-10-26.md)).
- Weight files: `virtual_tryon.pth` 7.21 GB, `virtual_tryon_dc.pth` 7.21 GB, `pose_transfer.pth`
  20.88 GB, plus SCHP parsing, OpenPose and DensePose checkpoints in the same repository
  ([weights](../../sources/huggingface.co/leffa-model-card/2026-10-26.md)). Self-hosting also requires
  the base Stable Diffusion inpainting weights, which are not in the repo.
- Free demo: the author-run Hugging Face Space, running on ZeroGPU at capture
  ([Space](../../sources/huggingface.co/leffa-demo-space/2026-10-26.md)). No first-party API or paid
  endpoint from the authors was found.

### The licensing tension

The MIT declaration covers the code and the released weights, but all three checkpoints are trained on
datasets whose own terms are non-commercial: VITON-HD is CC BY-NC 4.0, licensed for use, redistribution
and adaptation "for **non-commercial purposes**"; DressCode is "for the purposes of research,
teaching and publication (which must in each case be academic and non-commercial)"; and DeepFashion
"is available for non-commercial research purposes only"
([VITON-HD](../../sources/github.com/viton-hd-terms/2026-10-26.md),
[DressCode](../../sources/github.com/dress-code-licence/2026-10-26.md),
[DeepFashion](../../sources/cuhk.edu.hk/deepfashion-terms/2026-10-26.md),
[code](../../sources/github.com/leffa/2026-10-26.md)). None of the captured documents says whether a
model trained on those datasets inherits any restriction, and the authors do not address the question.
The honest statement is that "MIT weights, sold as commercial try-on" and "trained on
non-commercial-only datasets" sit side by side in the record, and that the reconciliation is
unresolved here. Anyone deploying Leffa commercially on the strength of the MIT file alone is relying
on an argument these documents do not make.

## Unresolved questions

1. **Which checkpoint does fal run?** fal never names the upstream checkpoint, and its `updated_at`
   of 2026-04-21 has no changelog, so whether fal re-hosted, converted, or retrained the weights is
   unknown ([fal](../../sources/fal.ai/leffa/2026-10-26.md)).
2. **Which pose-transfer field is which?** fal's descriptions and example URLs contradict each other,
   and the upstream code extracts DensePose from the *source* image, so a caller following fal's
   examples may be swapping pose donor and identity donor
   ([fal](../../sources/fal.ai/leffa/2026-10-26.md),
   [code](../../sources/github.com/leffa/2026-10-26.md)).
3. **Does the MIT declaration survive the non-commercial training data?** Not answered by any captured
   document ([VITON-HD](../../sources/github.com/viton-hd-terms/2026-10-26.md),
   [DressCode](../../sources/github.com/dress-code-licence/2026-10-26.md),
   [DeepFashion](../../sources/cuhk.edu.hk/deepfashion-terms/2026-10-26.md)).
4. **Was the released pose checkpoint trained above 512×352?** The paper stops at 512×352; the app
   infers at 768×1024 ([paper](../../sources/arxiv.org/leffa-paper/2026-10-26.md),
   [code](../../sources/github.com/leffa/2026-10-26.md)).
5. **Is there any later checkpoint or variant?** None found: no tags, no releases, no README news
   after 2025-02-26, and no weight file added or replaced since the 2024-12 releases
   ([code](../../sources/github.com/leffa/2026-10-26.md),
   [weights](../../sources/huggingface.co/leffa-model-card/2026-10-26.md)). The 2025-12-02 Space commit
   is a ZeroGPU migration ([Space](../../sources/huggingface.co/leffa-demo-space/2026-10-26.md)).
6. **How does it compare with 2026 try-on systems?** No comparable measurement was captured; the
   paper's baselines are 2023–2024 methods, and no independent benchmark covering Leffa and current
   hosts' try-on models was found.
7. **What does the Space run?** Its `app.py` was not diffed against the GitHub revision, so the free
   demo may pin different pipeline code ([Space](../../sources/huggingface.co/leffa-demo-space/2026-10-26.md)).

## Evidence status

Evidence floor: **met.** First-party records: the arXiv paper with its own limitations and statement
sections, the GitHub repository (README news, licence, and the code that maps checkpoints to
backbones), the Hugging Face model card and weight listing, and the Hugging Face demo Space. Independent
host record: fal's catalogue, metadata API, OpenAPI schemas and pricing pages. Supporting records: the
CVF CVPR 2025 proceedings entry and the three training-dataset licence documents. A Replicate search
that found nothing is recorded as a negative result. All captures are dated 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base: the try-on and pose-transfer quality figures are the authors' numbers on the authors' harness,
the latency figures are the authors' README claims, and the price is fal's published rate. The next
useful evidence would be a small reproducible test on a named endpoint — the same person and garment
through fal and the Space, `upper_body`/`lower_body`/`dresses` cases, a known-hard text/logo garment,
a pose transfer with an unambiguous pose donor, and wall-clock latency with and without queueing — plus
a quality comparison against a current try-on model on the same inputs.
