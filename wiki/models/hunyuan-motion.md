# Hunyuan Motion (HY-Motion 1.0)

Tencent Hunyuan's text-to-3D human motion generator, published 2025-12-30 as an open-weights family in
two sizes: HY-Motion-1.0 (1.0B parameters) and HY-Motion-1.0 Lite (0.46B). It takes an English action
description plus a requested duration and returns skeleton animation data — FBX or raw JSON on fal —
not video, not a rigged mesh
([README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md),
[fal schema](../../sources/fal.ai/hunyuan-motion/2026-10-26.md)).

The roster files this row under "Video: specialists" and labels it "Hunyuan Motion". Both are
discovery labels: fal's own catalogue category is `text-to-3d`, its page title is "Hunyuan Motion [1B]
(Text to 3D) API on fal", and the vendor calls the model "text-to-3D human motion generation"
([fal catalogue](../../sources/fal.ai/hunyuan-motion/2026-10-26.md),
[README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md)). **This is a 3D animation
specialist, not a video generator.** Nothing in the corpus produces pixels.

It is inside the one-year window: the technical report was submitted 2025-12-29 and the weights and
inference code were released 2025-12-30, both after 2025-10-26
([arXiv](../../sources/arxiv.org/hy-motion-1-0-2512-23464/2026-10-26.md),
[licence](../../sources/huggingface.co/hy-motion-1-0-license/2026-10-26.md)).

## Identity

- **Canonical name:** HY-Motion 1.0. That is the vendor's own name in the repository title, the Hugging
  Face repository ID (`tencent/HY-Motion-1.0`), the model card and the arXiv title
  ("HY-Motion 1.0: Scaling Flow Matching Models for Text-To-Motion Generation")
  ([README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md),
  [model card](../../sources/huggingface.co/hy-motion-1-0-model-card/2026-10-26.md),
  [arXiv](../../sources/arxiv.org/hy-motion-1-0-2512-23464/2026-10-26.md)).
- **Aliases:** "Hunyuan Motion" (roster label, fal display name, fal gallery group `hunyuan-motion`);
  "HY-Motion-1.0" / "HY-Motion-1.0-Lite" for the checkpoints; "DiT-1B" / "DiT-0.46B" in the paper's
  scaling study. Tencent's licence calls the works "Tencent HY-MOTION 1.0".
- **Vendor:** Tencent Hunyuan, credited as the "Tencent Hunyuan 3D Digital Human Team". Weights, code
  and a Hugging Face Space are published by Tencent itself.
- **Host endpoints:** fal only — `fal-ai/hunyuan-motion` (labelled 1B, $0.08 per generation) and
  `fal-ai/hunyuan-motion/fast` (labelled 0.46B, $0.06 per generation)
  ([fal catalogue](../../sources/fal.ai/hunyuan-motion/2026-10-26.md)). Replicate hosts Tencent's
  Hunyuan video, image and 3D families but has no HY-Motion endpoint (checked 2026-10-26).
- **Release timeline:**

| Date | Event | Source |
| --- | --- | --- |
| 2025-12-29 | Technical report v1 on arXiv (2512.23464); GitHub and Hugging Face repositories created | [arXiv](../../sources/arxiv.org/hy-motion-1-0-2512-23464/2026-10-26.md), [README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md) |
| 2025-12-30 | Weights + inference code released; licence dated "December 30, 2025" | [README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md), [licence](../../sources/huggingface.co/hy-motion-1-0-license/2026-10-26.md) |
| 2025-12-30 | fal publishes both endpoints (12:54Z and 12:58Z) | [fal catalogue](../../sources/fal.ai/hunyuan-motion/2026-10-26.md) |
| 2026-01-29 | SSAE (VLM-based semantic-alignment metric) prompts and code added to the same repo | [README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md) |
| 2026-04-21 | fal endpoints' `updated_at` (no changelog captured) | [fal catalogue](../../sources/fal.ai/hunyuan-motion/2026-10-26.md) |

- **Siblings:** HY-Motion-1.0-Lite is the only sibling — a 0.46B variant of the same architecture,
  released the same day. Tencent's other Hunyuan media models (HunyuanVideo, Hunyuan3D, HunyuanImage,
  HunyuanVideo-Foley) share a brand and some components but are different tasks; Hunyuan3D 3.1 has its
  own page in this wiki. The paper credits HunyuanVideo's bidirectional-attention text conditioning as
  an architectural ancestor, which makes HY-Motion a derivative of that design rather than a
  repackaging of the video model
  ([arXiv](../../sources/arxiv.org/hy-motion-1-0-2512-23464/2026-10-26.md)).
- **Identity ambiguity:** the page filename follows the roster label (`hunyuan-motion`) rather than the
  canonical ID (`hy-motion-1.0`), because the roster row was assigned under that name. Within this
  knowledge base, "Hunyuan Motion" means exactly this model; no other Tencent product carrying that
  name was found.

## Current assessment

HY-Motion 1.0 is a distinct, genuinely new model rather than a tier or a reskin: the vendor's claim is a
first — scaling a DiT/flow-matching text-to-motion model to a billion parameters — and the two released
checkpoints are the artefacts of that scaling study, in which motion quality "reaches a saturation
point beyond the 0.46B parameter size" while instruction-following keeps improving
([arXiv](../../sources/arxiv.org/hy-motion-1-0-2512-23464/2026-10-26.md)). That is an unusually candid
reason for releasing two sizes: the paper says outright that the 1B model is the primary one and the
0.46B is the cheaper tier.

What the evidence supports is a narrow, well-specified tool: one text prompt in, one human-motion clip
out, 0.5–12 seconds, on a SMPL-H skeleton, as FBX or JSON. What it does not support is any quality
ranking. The only evaluation is the vendor's own human-preference study, reported as tables that were
not captured, and the only independent artefact is a host schema
([arXiv](../../sources/arxiv.org/hy-motion-1-0-2512-23464/2026-10-26.md),
[fal](../../sources/fal.ai/hunyuan-motion/2026-10-26.md)).

As of capture the model is current, not deprecated: both fal endpoints are `status: active`, the
weights are still downloadable, and the repository was last pushed 2026-07-18
([fal catalogue](../../sources/fal.ai/hunyuan-motion/2026-10-26.md),
[README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md)). Its practical niche is
animation blocking — producing motion data for a 3D character pipeline — and its value is that the
weights are open, so it can be run locally without a host at all.

## Documented capabilities

All of the following is vendor documentation or host schema, not independent testing.

### Inputs

- **Text prompt, required.** The only semantic input on either route. There is no image, video,
  skeleton, or reference-motion input on fal's schema, and the repository's CLI consumes text files or
  JSON prompt lists only
  ([fal schema](../../sources/fal.ai/hunyuan-motion/2026-10-26.md),
  [README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md)). Text-only is therefore a
  structural limit, not a missing feature flag.
- **Duration.** fal exposes `duration`, 0.5–12.0 s, default 5. The vendor model also takes an
  "expected duration of the motion" as an input
  ([arXiv](../../sources/arxiv.org/hy-motion-1-0-2512-23464/2026-10-26.md)). Locally, Tencent ships an
  optional Qwen3-30B-A3B-based module that predicts duration and rewrites the prompt; fal exposes no
  such control, so the host route requires an explicit duration.
- **Guidance.** `guidance_scale`, 1–10, default 5, "Higher = more faithful to prompt"
  ([fal schema](../../sources/fal.ai/hunyuan-motion/2026-10-26.md)). No vendor page states the
  equivalent default, so the host default is a host choice.
- **Seed.** `seed` is optional on fal and echoed back in the response; the released code generates
  multiple seeds per prompt (`--num_seeds`). Reproducibility is therefore documented at the parameter
  level, though no source states whether the seed fixes the whole sampling trajectory
  ([fal schema](../../sources/fal.ai/hunyuan-motion/2026-10-26.md),
  [README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md)).

### Output

- **Formats.** `output_format: fbx | dict` — "fbx" for animation files, "dict" for raw JSON. The
  response carries `fbx_file`, `motion_json` and `seed`; no mesh, texture, rig or preview render is
  returned ([fal schema](../../sources/fal.ai/hunyuan-motion/2026-10-26.md)).
- **Skeleton and representation.** The model operates on a neutral SMPL-H skeleton, with each frame a
  201-dimension vector: root translation (3), global body orientation (6, continuous 6D rotation), 21
  local joint rotations (126) and 22 local joint positions (66). The paper notes this representation is
  "compatible with typical animation workflows", unlike the HumanML3D convention
  ([arXiv](../../sources/arxiv.org/hy-motion-1-0-2512-23464/2026-10-26.md)).
- **FBX export path.** The repository converts SMPL-H output to FBX against a bundled rigged mannequin
  (`assets/wooden_models/boy_Rigging_smplx_tex.fbx`, `hymotion/utils/smplh2woodfbx.py`), so the local
  FBX is a mannequin carrying the motion. fal does not document which rig its FBX uses
  ([README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md),
  [fal](../../sources/fal.ai/hunyuan-motion/2026-10-26.md)).
- **Frame rate.** 30 fps. The paper resamples all training motion to 30 fps; the released pipeline
  defaults `output_mesh_fps` to 30, and `hymotion/utils/t2m_runtime.py` comments "30fps output, 20fps
  internal". This is code-and-paper evidence, not a documented host guarantee
  ([arXiv](../../sources/arxiv.org/hy-motion-1-0-2512-23464/2026-10-26.md),
  [README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md)).
- **Length cap.** 12 seconds. Three independent figures agree: the paper segments training clips longer
  than 12 s, the released code clamps generation to `train_frames = 360` (12 s at 30 fps), and fal caps
  `duration` at 12.0. No captured page states that 12 s is the model's architectural limit rather than
  a training/data choice.

### Coverage claims (vendor, unquantified)

- "Over 200 motion categories across 6 major classes" of motion coverage
  ([arXiv](../../sources/arxiv.org/hy-motion-1-0-2512-23464/2026-10-26.md)).
- "State-of-the-art performance in both instruction-following capability and generated motion quality",
  "significantly outperform current open-source benchmarks" — supported by a human-preference study and
  comparison images, with no automatic metric quoted in the prose (same record).
- Training recipe: 3,000+ hours of pretraining motion, 400 hours of curated fine-tuning data,
  reinforcement learning from human feedback and reward models
  ([README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md)).

### SSAE

The repository also ships SSAE (Structured Semantic Alignment Evaluation), "a VLM-based metric designed
to assess the semantic alignment of generated videos", added 2026-01-29. It is an evaluation harness
that happens to live in the same repository — it scores generated video, and is not a capability of the
motion model ([README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md)).

## Limitations and constraints

- **No video, no render, no mesh.** The model emits motion parameters. Anything visual requires a
  separate renderer and a character.
- **Documented "NOT supported" list** (vendor's own, verbatim categories): non-humanoid characters
  (animals, non-human creatures); subjective/visual attributes such as complex emotions, clothing or
  appearance; environment, objects and camera angles; multi-person interactions; and "seamless loop or
  in-place animations"
  ([README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md),
  [model card](../../sources/huggingface.co/hy-motion-1-0-model-card/2026-10-26.md)). This is a
  precise, unusually explicit scope statement: locomotion and body action, one person, no props.
- **English-first prompting.** "Please use English… keep your prompt under 60 words"; other languages
  are expected to go through the vendor's rewrite module first
  ([README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md)). Whether the model itself
  handles Chinese is not documented, despite the card declaring `language: [en, zh]`.
- **12-second ceiling** and a 0.5-second floor on fal; see above.
- **Local VRAM is substantial.** 26 GB minimum for the 1.0B model and 24 GB for the 0.46B — the Lite
  model is only 2 GB cheaper, so it is not a low-VRAM escape hatch. The README's own reduction advice
  is `--num_seeds=1`, prompts under 30 words and clips under 5 s
  ([README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md)).
- **No rig retargeting on the host.** fal returns FBX/JSON animation; retargeting to a specific
  character rig is not documented on either route, and the repository's own FBX path targets a bundled
  mannequin.
- **Weights licence is territorially restricted.** Use, distribution and display of the weights and
  their outputs are licensed only inside the Territory, which excludes the European Union, the United
  Kingdom and South Korea. Commercial users above 1 million monthly active users need a separate
  Tencent licence, and outputs may not be used to improve any other AI model
  ([licence](../../sources/huggingface.co/hy-motion-1-0-license/2026-10-26.md)).
- **One host only.** fal is the sole independent host found; Replicate has no endpoint, so there is no
  second price point or independent parameter surface to cross-check (Replicate searched 2026-10-26).
- **No independent quality evidence.** No benchmark, arena or third-party measurement of HY-Motion 1.0
  was captured. The paper's human-evaluation tables were not transcribed, so even the vendor's
  comparison is unquantified on this page.

## Access, pricing, licensing

### fal (hosted, per generation)

| Endpoint | Label | Price | Input surface |
| --- | --- | --- | --- |
| `fal-ai/hunyuan-motion` | 1B | $0.08 per generation | prompt, duration 0.5–12 s, guidance 1–10, seed, `fbx`/`dict` |
| `fal-ai/hunyuan-motion/fast` | 0.46B | $0.06 per generation | identical |

Source: [fal catalogue and schemas](../../sources/fal.ai/hunyuan-motion/2026-10-26.md). Both endpoints
are billed **per generation, not per second**, so a 12-second clip costs the same as a 0.5-second one —
which makes longer clips the better value per second of animation. That is arithmetic from fal's stated
billing basis, not a published comparison. fal also marks both endpoints `license_type: "commercial"`,
which is fal's statement about use through fal, not Tencent's weights licence.

### Self-hosted (open weights)

Weights for both checkpoints are published on Hugging Face under one repository, and the API reports
`"gated": false` — no access request was required at capture. Running locally costs only GPU time: 26 GB
of VRAM for the 1.0B model, 24 GB for Lite
([model card](../../sources/huggingface.co/hy-motion-1-0-model-card/2026-10-26.md),
[README](../../sources/github.com/hy-motion-1-0-readme/2026-10-26.md)).

### Weights licence

The **Tencent HY-MOTION 1.0 Community License Agreement** (release date 2025-12-30) is a community
licence with field-of-use limits, not an OSI open-source licence:

- Territory = worldwide **excluding the EU, UK and South Korea**; use outside it is "unlicensed and
  unauthorized".
- Free use, modification, derivative models and distribution inside the Territory, with notice
  obligations (agreement copy, change notices, "Powered by Tencent HY" encouraged).
- **1 million MAU threshold**: above it, a separate discretionary Tencent licence is required.
- **No use of outputs to improve other AI models**; military use and a 20-item acceptable-use list are
  prohibited, including a duty to label machine-generated content placed in public contexts.
- **Tencent claims no rights in outputs**; the user owns and is responsible for them.

Source: [licence capture](../../sources/huggingface.co/hy-motion-1-0-license/2026-10-26.md). The model
card also carries `extra_gated_eu_disallowed: true` even though the repository is not gated, so the EU
restriction shows up in both metadata and licence text
([model card](../../sources/huggingface.co/hy-motion-1-0-model-card/2026-10-26.md)).

## Unresolved questions

1. **Which exact checkpoint does fal serve?** The labels (1B, 0.46B) match the released checkpoints, but
   fal names no checkpoint hash and the vendor publishes no per-host mapping.
2. **Which rig does fal's FBX use, and is retargeting supported?** The repository's FBX export targets a
   bundled mannequin; fal's output field is described only as "Generated FBX animation file".
3. **What are the hosted-service terms for EU, UK and South Korean users?** The weights licence excludes
   the Territory; fal's terms were not captured, so whether the hosted route is permitted there is
   unknown.
4. **Does the vendor's official site add anything?** `hunyuan.tencent.com/motion` is a client-rendered
   SPA and returned only a shell on 2026-10-26, so any official-site capability or demo claims are
   uncaptured.
5. **Is the model's quality actually SOTA?** The vendor's human-evaluation tables were not transcribed
   and no third party has measured it; the "significantly outperform" claim is unverified.
6. **Does the model accept Chinese prompts directly?** The card declares `en` and `zh`, while the README
   instructs English and routes other languages through a rewrite module.
7. **Is the 12-second cap architectural?** Three sources agree on 12 s but none calls it a hard model
   limit; the paper's rope/context constraint in code is 5,000 frames, far above the clamp.
8. **Is `guidance_scale`'s default of 5 a host choice or the vendor's?** Only fal documents the
   parameter.

## Evidence status

Evidence floor: **met.** First-party: the Tencent repository README (with model zoo, prompting guide and
stated limitations), the Hugging Face model card and repository metadata, the licence text, and the
arXiv technical report — all Tencent-published, all captured 2026-10-26. Independent host: one fal
record covering catalogue metadata, both endpoint schemas and both published price strings. No second
host exists to corroborate: Replicate's catalogue was searched on 2026-10-26 and has no HY-Motion
endpoint.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; the frame rate and length cap are read
from released code and the paper rather than from host documentation; price statements are fal's
published per-generation strings. Quality statements are the vendor's own and remain unquantified.

The next useful evidence would be a small reproducible test set: the same prompt at 0.5 s, 5 s and 12 s
to check whether quality degrades with length; a prompt per documented category to find where the
"NOT supported" boundaries actually sit; the same prompt with two seeds to test reproducibility; an FBX
import into a standard DCC tool to identify the rig and check up-axis and scale; and a comparison of
fal's FBX against a local run of the published weights to see whether the host serves the same
checkpoint.
