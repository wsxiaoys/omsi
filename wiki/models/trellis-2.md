# TRELLIS 2

Microsoft Research's open-weights, 4B-parameter **image-to-3D** generator: one input image becomes a
PBR-textured mesh at a 512³–1536³ voxel grid, released under the MIT licence in December 2025 and hosted on
fal as `fal-ai/trellis-2` with a retexture endpoint and a LoRA train/serve pair
([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md),
[model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md),
[fal](../../sources/fal.ai/trellis-2/2026-10-26.md)). It is inside the one-year window on every date that
matters: code release 2025-12-09, demo Space 2025-12-10, paper and project page 2025-12-16, fal endpoint
2025-12-17 ([Space](../../sources/huggingface.co/trellis-2-space/2026-10-26.md),
[arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md)).

## Identity

- **Canonical name:** **TRELLIS.2**, styled with a period by the developer. The checkpoint — and the only
  released weights — is **TRELLIS.2-4B** ("**Model Name:** TRELLIS.2-4B",
  [model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md)). The roster's "TRELLIS 2"
  is a normalisation of the vendor's styling, not a vendor string.
- **Vendor:** Microsoft Research. The project page credits authors split across Microsoft Research,
  Microsoft AI, Tsinghua University and USTC, with "© 2025 Microsoft" in the footer and "purely a research
  project" in its Responsible AI note
  ([project page](../../sources/microsoft.github.io/trellis-2-project-page/2026-10-26.md)).
- **Aliases in use:** fal "Trellis 2" and "TRELLIS.2 LoRA Inference" / "TRELLIS.2 Trainer"; Replicate
  `fishwowater/trellis2`; Hugging Face repo id `microsoft/TRELLIS.2-4B`; paper title "Native and Compact
  Structured Latents for 3D Generation"
  ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md),
  [Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md)).
- **Host endpoints:**

| Host | Endpoint | Input | Output | Since |
| --- | --- | --- | --- | --- |
| fal | `fal-ai/trellis-2` | one image | GLB | 2025-12-17 |
| fal | `fal-ai/trellis-2/retexture` | one image + one mesh (GLB/OBJ/PLY/STL) | GLB | 2026-03-02 |
| fal | `fal-ai/trellis-2-lora` | one image + up to three LoRA adapters | GLB | 2026-06-23 |
| fal | `fal-ai/trellis-2-lora-trainer` | dataset zip | adapters + preprocessed dataset | 2026-06-23 |
| Replicate | `fishwowater/trellis2` (**community, `is_official: false`**) | one image | GLB + preview video | 2025-12-28 |
| self-host | `microsoft/TRELLIS.2` (MIT) | one image | GLB via `o_voxel.postprocess.to_glb` | 2025-12-09 |

  There is **no Microsoft-published model on Replicate**: searches for `trellis`, `trellis2` and
  `microsoft trellis` return only community ports, `fishwowater/trellis2` (4,643 runs) for TRELLIS 2 and
  `firtoz/trellis` (933.3K runs) / `fire/trellis` (393 runs) for TRELLIS 1
  ([Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md)).
- **Release timeline:**

| Date | Event | Source |
| --- | --- | --- |
| 2025-11-26 | Repository created (empty initial commit) | [repo](../../sources/github.com/trellis-2-repo/2026-10-26.md) |
| 2025-12-01 | Weights repository created on Hugging Face | [model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md) |
| **2025-12-09** | **`Init Release` commit — inference code public** | [repo](../../sources/github.com/trellis-2-repo/2026-10-26.md) |
| 2025-12-10 | Hugging Face Space demo created | [Space](../../sources/huggingface.co/trellis-2-space/2026-10-26.md) |
| **2025-12-16** | **arXiv 2512.14692 v1 submitted; project page live** | [arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md) |
| **2025-12-17** | **fal publishes `fal-ai/trellis-2`** | [fal](../../sources/fal.ai/trellis-2/2026-10-26.md) |
| 2025-12-23 | `update texturing pipeline` commit | [repo](../../sources/github.com/trellis-2-repo/2026-10-26.md) |
| 2025-12-27 | Weights repository last modified | [model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md) |
| 2025-12-28 | Replicate community port version | [Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md) |
| 2026-01-10 | Training code released | [repo](../../sources/github.com/trellis-2-repo/2026-10-26.md) |
| 2026-03-02 | fal retexture endpoint | [fal](../../sources/fal.ai/trellis-2/2026-10-26.md) |
| 2026-06-05 | Last repository commit (CI workflow only) | [repo](../../sources/github.com/trellis-2-repo/2026-10-26.md) |
| 2026-06-23 | fal LoRA inference + trainer endpoints | [fal](../../sources/fal.ai/trellis-2/2026-10-26.md) |

- **Siblings that are different models, not aliases:** **TRELLIS 1** (`microsoft/TRELLIS`, arXiv 2412.01506,
  CVPR'25 Spotlight, created 2024-12-02, "up to 2 billion parameters", text *or* image input, decoding to
  "Radiance Fields, 3D Gaussians, and meshes") — see below; `TRELLIS-text-base/large/xlarge` (342M/1.1B/2.0B,
  the 2025-03-25 text-conditioned models of the *first* generation); `TRELLIS-image-large`. Community
  re-packs such as `Comfy-Org/TRELLIS.2` (created 2026-05-15) are conversions of the same weights, not new
  models ([TRELLIS 1 repo](../../sources/github.com/trellis-1-repo/2026-10-26.md),
  [HF repository search](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md)).
- **Identity ambiguity:** low. Microsoft uses one string, one checkpoint and one repository, and the hosts
  name the same family. The one unresolved naming gap is that fal's TRELLIS 2 endpoints carry an empty
  `githubUrl`, so the host never asserts that its weights are Microsoft's
  ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md)).

## Current assessment

**A distinct second-generation model, not a repackaging of TRELLIS 1.** The architecture is different in kind:
a new "field-free" sparse voxel representation (**O-Voxel**) replaces the iso-surface/SLAT pipeline, a new
Sparse Compression VAE compresses it 16×, and the generator grows from "up to 2 billion" to 4B parameters on
~800K assets instead of 500K ([arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md),
[TRELLIS 1 repo](../../sources/github.com/trellis-1-repo/2026-10-26.md)). Capabilities move in both
directions: TRELLIS 2 gains PBR material output (base colour, roughness, metallic, opacity) and arbitrary
topology (open surfaces, non-manifold, enclosed interiors), and **loses** text conditioning, multi-image
conditioning and the radiance-field / 3D-Gaussian decoders that TRELLIS 1 documented
([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md),
[model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md)).

**Status: current, open-weights, and documented in unusual depth.** All four fal endpoints are
`status: active` with `updated_at` 2026-10-20 (trainer 2026-10-12); the weights repository is
unmodified since 2025-12-27 and the repository's last commit is a CI change. Nothing is deprecated or
delisted, and the MIT licence means self-hosting is a real option rather than a theoretical one — 2.5M
downloads on the weights repo at capture
([fal](../../sources/fal.ai/trellis-2/2026-10-26.md),
[model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md)).

**Practical position.** This is the only open-weights 3D generator in this knowledge base — Meshy 7.1,
Hyper3D Rodin 2.5 and Hunyuan3D 3.1 are all metered closed services — and on documentation it is the best
specified of them: image-only input, PBR output, arbitrary topology, a polygon and texture budget, a
shape-conditioned retexture route, and a LoRA training path on fal. Its documented weaknesses are equally
concrete — no rigging, no animation, no quad/retopo control, no text prompting, no input-image constraints,
and no independent quality measurement.
The quality claims are Microsoft's own: a vendor-run user study where TRELLIS 2 was preferred over five
baselines in 66.5% of overall votes, and a CLIP score of 0.894 against TRELLIS 1's 0.876
([arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md)). Vendor harness, vendor choice of
prompts, single run.

## Documented capabilities

Everything below is vendor, paper or host documentation. **No direct tests were run for this page.**

### Inputs

- **One image, and nothing else.** The model card says "**Input:** Single Image"; the README's pipeline call
  is `pipeline.run(image)`; fal's input schema is titled `SingleImageInputModel` with `image_url` as the only
  required field ([model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md),
  [fal](../../sources/fal.ai/trellis-2/2026-10-26.md)).
- **No text input.** There is no prompt field on any route: not in fal's schemas, not in Replicate's, not in
  the repository examples. TRELLIS 1's `TRELLIS-text-*` models have no TRELLIS 2 counterpart, and the README
  lists no text-to-3D roadmap item ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md),
  [Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md),
  [TRELLIS 1 repo](../../sources/github.com/trellis-1-repo/2026-10-26.md)).
- **No multi-image input.** TRELLIS 1 shipped multi-image conditioning on 2024-12-18 and fal still serves
  `fal-ai/trellis/multi`; TRELLIS 2 has no multi-image endpoint or field
  ([TRELLIS 1 repo](../../sources/github.com/trellis-1-repo/2026-10-26.md),
  [fal](../../sources/fal.ai/trellis-2/2026-10-26.md)).
- **Input-image constraints are undocumented** on the model card, the README and both hosts. The only
  hard facts come from Microsoft's own code: the conditioner is DINOv3 ViT-L/16
  (`facebook/dinov3-vitl16-pretrain-lvd1689m`) and every input image is resized to a **512×512 square** before
  conditioning, so aspect ratio is not preserved
  ([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md)). Replicate's port defaults
  `preprocess_image: true`, "Preprocess image (remove background and crop)"; the port's readme names
  BRIA-AI (REMBG-2.0) among the licences its preprocessing is bound by
  ([Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md)).
- **Resolution.** `resolution` ∈ {512, 1024, 1536} on fal, default 1024, billed per tier. Replicate exposes
  the same ladder as `pipeline_type` ∈ {`512`, `1024`, `1024_cascade`, `1536_cascade`}, default
  `1024_cascade`. The released checkpoint files stop at `512` and `1024`; 1536 is the paper's cascade — "a
  cascaded application of the second-stage generator, allowing for the synthesis of shapes at resolutions
  exceeding the training scale" ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md),
  [Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md),
  [arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md)).

### Output formats

- **GLB only, on every route.** fal returns a single `model_glb` ("Generated 3D GLB file"); Replicate returns
  `model_file` (GLB per the input description), `video` and `no_background_image`; the repository exports via
  `o_voxel.postprocess.to_glb(...).export("sample.glb")`
  ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md),
  [Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md),
  [repo](../../sources/github.com/trellis-2-repo/2026-10-26.md)).
- **No FBX, OBJ, USDZ, STL, USD or separate-map output** is documented anywhere for generation. The one
  non-GLB path is the *input* side of fal's retexture endpoint, which accepts "GLB, OBJ, PLY, and STL"
  ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md)).
- **Texture embedding.** GLB export takes `texture_size` (fal: 1024/2048/4096, default 2048; Replicate:
  1024–8192 continuous, default 4096) and `extension_webp=True` in the README example.
- No up-axis, unit scale, or glTF extension list is documented for the exported file.

### Topology

- **O-Voxel handles topology that iso-surface methods cannot.** Verbatim: "The **O-Voxel** representation
  breaks the limits of iso-surface fields. It robustly handles complex structures without lossy conversion:
  ✅ Open Surfaces (e.g., clothing, leaves) ✅ Non-manifold Geometry ✅ Internal Enclosed Structures"
  ([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md),
  [model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md)).
- **Remeshing is a host-side post-process, on by default.** fal's `remesh` ("Rebuild the mesh topology for
  cleaner triangles… usually produces better results for downstream use (animation, 3D printing, etc)"),
  `remesh_band` and `remesh_project` are exposed alongside four UV-unwrap tunables
  (`uv_unwrap_angle_threshold_deg`, `uv_unwrap_global_iterations`, `uv_unwrap_refine_iterations`,
  `uv_unwrap_smooth_strength`). None of these appear in the vendor README or model card
  ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md)).
- **No quad topology and no retopology control.** Nothing documents a quad output or a target-topology mode;
  the only polygon control is decimation. Contrast Hunyuan3D 3.1, which sells quad retopology as a separate
  billed API ([hunyuan3d-3.1.md](hunyuan3d-3.1.md)).
- **Known topology defects.** The card warns of "small holes or minor topological discontinuities" and
  recommends "hole-filling algorithms" for watertight work; the paper adds voxel-resolution aliasing where
  "two parallel surfaces that are very close to each other intersect the same voxel"
  ([model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md),
  [arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md)).

### Textures and PBR

- **Full PBR attribute set including opacity.** "Beyond basic colors, TRELLIS.2 models arbitrary surface
  attributes including **Base Color, Roughness, Metallic, and Opacity**, enabling photorealistic rendering
  and transparency support"; the paper describes the same four channels and reports material reconstruction
  at "38.89 dB / 0.033 on PBR attributes and 38.69 dB / 0.026 on shaded images" with no baseline
  ([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md),
  [arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md)).
- **Alpha is present but inert by default.** "The `.glb` file is exported in `OPAQUE` mode by default.
  Although the alpha channel is preserved within the texture map, it is not active initially" — the user must
  rewire the alpha channel in a DCC tool ([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md)).
- **Texture resolution is a host parameter**, not a vendor one: fal 1024/2048/4096, Replicate 1024–8192.
  The vendor's own example uses 4096.
- **Shape-conditioned retexturing is a first-class mode.** The third pipeline stage "can be independently used
  as a 3D PBR texture synthesis model given 3D mesh and reference image"; Microsoft ships
  `example_texturing.py` / `app_texturing.py`, and fal exposes it as `fal-ai/trellis-2/retexture` (mesh +
  reference image → GLB) ([arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md),
  [repo](../../sources/github.com/trellis-2-repo/2026-10-26.md),
  [fal](../../sources/fal.ai/trellis-2/2026-10-26.md)).

### Polycount

- **No native polycount is documented.** The only control is `decimation_target`: fal "Target number of
  vertices in the final mesh", default 500,000, range 5,000–2,000,000; Replicate "Target number of faces for
  decimation", default 1,000,000, range 100,000–2,000,000. **The two hosts disagree on the unit and on the
  range**, and no captured source resolves it ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md),
  [Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md)).
- The README's `mesh.simplify(16777216) # nvdiffrast limit` caps the mesh at 16,777,216 (2²⁴) elements only
  because the *renderer* cannot go higher; it is not a model limit
  ([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md)).
- The paper reports latent token counts, not mesh sizes: "9.6K (306K)" tokens/dimensions at 1024³ versus
  TRELLIS 1's "9.6K (77K)" ([arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md)).

### Rigging and animation

**TRELLIS 2 does not rig.** No skeleton, skin weights, joint hierarchy, pose or animation field appears in
the README, the model card, the paper, or any host schema; the paper's own limitation section names
part-level segmentation and topological structure as *future* work
([arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md)). fal's `remesh` description mentions
"downstream use (animation, 3D printing, etc)" as a reason to rebuild topology — a statement about the mesh
being *suitable* for later rigging, not about rigging
([fal](../../sources/fal.ai/trellis-2/2026-10-26.md)). No rigging API exists in this family on either host,
unlike Hunyuan3D 3.1's separately billed Auto Rigging job ([hunyuan3d-3.1.md](hunyuan3d-3.1.md)).

### Fine-tuning

fal added a LoRA train/serve pair on 2026-06-23: `fal-ai/trellis-2-lora-trainer` trains "1-3 unique values
out of sparse_structure, geometry, and texture" in parallel from one preprocessed dataset, at rank 16/32/64
and resolution 512/1024; `fal-ai/trellis-2-lora` then runs with up to three adapter URLs, and its
`resolution` "must match the resolution the provided LoRA adapters were trained at". Microsoft's own
repository also ships full training code ("train **TRELLIS.2** from scratch or fine-tune it on custom
datasets", released 2026-01-10) ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md),
[repo](../../sources/github.com/trellis-2-repo/2026-10-26.md)).

## Limitations and constraints

- **Image-only.** No text prompt, no multi-view input, no sketch input, no local 3D editing — all of which
  TRELLIS 1 documented ([TRELLIS 1 repo](../../sources/github.com/trellis-1-repo/2026-10-26.md)).
- **No rigging, animation, scene, camera or part decomposition.** One object per call; the paper's
  limitation section explicitly leaves semantic/part structure to future work
  ([arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md)).
- **Not watertight.** "the generated raw meshes may occasionally contain small holes or minor topological
  discontinuities"; hole filling is the user's job
  ([model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md)).
- **Voxel-resolution bound.** "O-Voxel's representation power is bounded by its spatial resolution"; features
  smaller than the voxel produce aliasing, and two surfaces inside one voxel average their material
  attributes into "blurred appearance"
  ([arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md)).
- **Unaligned base model.** "It has **not** been aligned with human preferences (e.g., via RLHF) or
  fine-tuned for specific aesthetic standards", so style varies with the input image
  ([model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md)).
- **Self-hosting needs a 24GB NVIDIA GPU on Linux**, CUDA 12.4, and a compile step for `flash-attn`,
  `cumesh`, `o-voxel`, `flexgemm`, `nvdiffrast` and `nvdiffrec`; "The code is currently tested only on
  **Linux**" ([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md)).
- **Alpha is off in the exported GLB** until the user rewires the texture's alpha channel
  ([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md)).
- **Host gaps.** fal's 1536 tier is not mapped to the vendor's cascade or to a checkpoint; fal documents no
  input-image limits; Replicate's port is unofficial, and its own readme warns the setup alone costs
  "4-8mins" ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md),
  [Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md)).
- **Moderation is barely documented.** fal's base endpoint has no safety-checker field at all; only
  `fal-ai/trellis-2-lora` exposes `enable_safety_checker` ("Authorized callers may set false to request
  relaxed screening"). Microsoft's only safety statement is the project page's Responsible AI note
  ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md),
  [project page](../../sources/microsoft.github.io/trellis-2-project-page/2026-10-26.md)).
- **No independent quality evidence.** No arena, benchmark or third-party measurement of TRELLIS 2 was found.
  Every quality number on this page is Microsoft's own.

## Access, pricing, licensing

### fal (per generation, resolution-tiered)

| Endpoint | 512 | 1024 | 1536 | Notes |
| --- | --- | --- | --- | --- |
| `fal-ai/trellis-2` | $0.25 | $0.30 | $0.35 | "Your request will cost **$0.25** for 512p resolution, **$0.30** for 1024p resolution and **$0.35** for 1536p resolution." |
| `fal-ai/trellis-2/retexture` | $0.20 | $0.24 | $0.24 ("and above") | mesh + reference image |
| `fal-ai/trellis-2-lora` | $0.25 | $0.30 | — | up to three adapters |

Source: [fal](../../sources/fal.ai/trellis-2/2026-10-26.md). The machine-readable `endpointBilling` blocks
confirm the billing axis: $0.05 per unit for generation and LoRA inference, $0.04 per unit for retexture, and
the headline prices are exact multiples (5/6/7 units). **Only resolution appears in the published prices** —
no page mentions a surcharge for texture size, step count, decimation target or adapter count.

LoRA training is metered differently: "a one-time dataset-preparation charge of **$0.10023** per input object
(*10-object minimum*, waived when you reuse a prepared dataset) plus a per-denoiser training charge of
**$8.34** / **$3.25** / **$3.38** per *1,000 steps* for *sparse_structure* / *geometry* / *texture*, scaled by
your rank (×0.5 / ×1 / ×2 for 16 / 32 / 64) and resolution (×1 / ×2 for 512 / 1024)"
([fal](../../sources/fal.ai/trellis-2/2026-10-26.md)).

### Replicate (community port)

"This model costs approximately $0.85 to run on Replicate, or 1 runs per $1, but this varies depending on
your inputs", on "Nvidia A100 (80GB) GPU hardware", with predictions "typically complete within 11 minutes".
No billing metric is published, so the $0.85 is an estimate, not a rate; the port defaults to generating both
the GLB and a preview video, and its readme suggests "disable the video rendering or use the non-cascade
inference mode to reduce the cost"
([Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md)). 4,643 runs at capture.

### Self-hosting

Free under MIT, at the cost of a 24GB+ NVIDIA GPU: the paper's timings are "∼3s for 512³, ∼17s for 1024³,
∼60s for 1536³" on an H100, with "each DiT … approximately 1.3B parameters" and three DiTs per generation
([arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md),
[repo](../../sources/github.com/trellis-2-repo/2026-10-26.md)). fal's $0.25–$0.35 per call is the price of
not owning that GPU; the two are not comparable units.

### Weights licence

**MIT**, for "This model and code", with nvdiffrast and nvdiffrec carved out as separate licences
([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md),
[model card](../../sources/huggingface.co/trellis-2-4b-model-card/2026-10-26.md)). Three caveats:

1. **A gated DINOv3 dependency.** The released pipeline's image conditioner is
   `facebook/dinov3-vitl16-pretrain-lvd1689m`, whose Hugging Face metadata is `license: other` with
   restricted (gated) access at capture. MIT on TRELLIS.2's own weights does not relicense DINOv3
   ([repo](../../sources/github.com/trellis-2-repo/2026-10-26.md)). Replicate's port states the same
   obligation explicitly: "Usage of this service should also follow the license of DINOv3 and BRIA-AI
   (REMBG-2.0)" ([Replicate](../../sources/replicate.com/trellis-2/2026-10-26.md)).
2. **A research-only disclaimer that contradicts MIT.** The project page says "These materials are not
   intended for commercial exploitation or use" and "TRELLIS.2 is purely a research project", while the
   repository and model card say MIT. The disclaimer is scoped to "the materials made available on this
   page", which plausibly means the videos and demos rather than the weights, but no Microsoft page says so
   ([project page](../../sources/microsoft.github.io/trellis-2-project-page/2026-10-26.md)).
3. **`license_type: "commercial"` on fal** is fal's statement about use through fal, not a Microsoft grant
   ([fal](../../sources/fal.ai/trellis-2/2026-10-26.md)).

## Distinguishing TRELLIS 1

| | TRELLIS 1 (`microsoft/TRELLIS`) | TRELLIS 2 (`microsoft/TRELLIS.2`) |
| --- | --- | --- |
| First public | 2024-12-02 (repository) | 2025-12-09 (code), 2025-12-16 (paper) |
| Paper | arXiv 2412.01506, "CVPR'25 Spotlight" | arXiv 2512.14692, "Tech report" |
| Parameters | "up to 2 billion" | 4 billion |
| Representation | SLAT with Rectified Flow Transformers | O-Voxel; field-free, arbitrary topology |
| Input | "text or image prompts"; multi-image from 2024-12-18 | single image only |
| Output | "Radiance Fields, 3D Gaussians, and meshes" | mesh (GLB) with PBR materials |
| Materials | colour texture only; the TRELLIS.2 paper counts TRELLIS among baselines "not present in" for PBR materials | base colour + roughness + metallic + opacity |
| Editing | variants and local 3D editing | shape-conditioned retexture only |
| Training data | 500K objects | ~800K assets |
| Hosts | fal `fal-ai/trellis`, `fal-ai/trellis/multi` ($0.02/generation); Replicate community only | fal `fal-ai/trellis-2` family; Replicate community only |
| Licence | MIT + submodule carve-outs | MIT + gated DINOv3 conditioner |

Sources: [TRELLIS 1 repo](../../sources/github.com/trellis-1-repo/2026-10-26.md),
[repo](../../sources/github.com/trellis-2-repo/2026-10-26.md),
[arXiv](../../sources/arxiv.org/trellis-2-2512-14692/2026-10-26.md),
[fal](../../sources/fal.ai/trellis-2/2026-10-26.md). The two are **not** interchangeable: a pipeline that
prompts with text or feeds several views must stay on TRELLIS 1, and a pipeline that wants PBR maps or
transparency must move to TRELLIS 2.

## Unresolved questions

1. **What is the native polygon count?** No source states triangles or vertices for a raw generation. fal says
   `decimation_target` counts vertices (5,000–2,000,000), Replicate says faces (100,000–2,000,000). Which is
   right changes what a "500k" asset is by roughly a factor of two, and neither host explains the range.
2. **Is fal's 1536 tier the paper's cascade?** The released checkpoint files stop at 512 and 1024, the paper
   describes 1536 as test-time cascade scaling, and fal offers 1536 as a plain `resolution` value with no
   statement of the mechanism. Replicate, by contrast, names the cascade explicitly in `pipeline_type`.
3. **What are the input-image limits?** No page states resolution, aspect ratio, file size or background
   requirements. Microsoft's code resizes to 512×512 square, which suggests that detail beyond 512px is
   discarded and that non-square framing is cropped or squashed — but no document says how.
4. **What does the DINOv3 licence require of a TRELLIS 2 user?** The conditioner is a gated `license: other`
   model named in Microsoft's config and in Replicate's readme, and no captured page states its terms or
   whether the MIT grant is meant to cover it.
5. **Is commercial use permitted?** MIT says yes; the project page says the materials are "not intended for
   commercial exploitation or use". The scope of "materials" is not defined.
6. **Which weights does fal serve?** fal's TRELLIS 2 endpoints have an empty `githubUrl` and name no
   checkpoint or revision, so host-to-vendor equivalence is an assumption.
7. **What does `enable_safety_checker` screen, and why is it only on the LoRA endpoint?** No fal page
   describes the check, and the base endpoint has no equivalent field.
8. **How do the vendor benchmarks hold up independently?** The 66.5% preference and the CLIP/ULIP-2/Uni3D
   deltas are Microsoft's own harness with 100 AI-generated prompts and ~40 participants. No third-party
   reproduction exists in this corpus.
9. **Does the retexture route accept meshes TRELLIS 2 did not generate?** fal accepts "GLB, OBJ, PLY, and
   STL" input, but nothing states whether the reference-image conditioning expects the same object as the
   mesh, or how it behaves on an unrelated mesh.

## Evidence status

**Evidence floor: met.** First-party: Microsoft's repository (README, commit history, conditioner code and
configs), the Hugging Face model card and weights metadata, the Hugging Face Space metadata, the arXiv
technical report (abstract, Tables 1–2, §4.3–4.5, Appendix F), and the project page (claims, affiliations,
disclaimers) — plus the TRELLIS 1 repository for the version contrast. Independent hosts: fal (catalogue
metadata, four endpoint schemas, price strings and `endpointBilling` blocks, plus the TRELLIS 1 endpoints)
and Replicate (a **community** port: page metadata, full Cog schema, cost estimate, run count).

**No direct tests were run for this page.** Nothing here is a measurement by this knowledge base: capability
statements are vendor or host documentation, prices are published strings or arithmetic on published units,
and every quality claim is Microsoft's own benchmark or marketing. The load-bearing gap is that **no
independent quality evidence exists** — the model is open-weights and 2.5M-downloads popular, yet nothing
captured measures it outside Redmond.

The next useful evidence would be: one input image through fal at 512/1024/1536 with `decimation_target`
held fixed, comparing vertex and face counts and texture sizes to settle question 1 and question 2; the same
image through the Replicate port in `1024` and `1024_cascade` to see whether the cascade changes the mesh or
only the cost; a non-square input to test the 512×512 resize; a retexture run on a third-party mesh; and a
DCC-side check of the exported GLB's UV layout, alpha wiring and up-axis, none of which any page documents.
