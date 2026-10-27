# SAM 3

Meta's third Segment Anything model, released 2025-11-19 and built for **promptable concept
segmentation**: given a short noun phrase or image exemplars, it finds and masks *every* instance of
that concept in an image or a short video, and keeps per-object identities across frames. It keeps
the older point/box/mask prompting of SAM 1 and SAM 2 as well, so it is not only a click-and-box
segmenter — but its text vocabulary is deliberately narrow (simple noun phrases, not sentences)
([publication page](../../sources/meta.com/sam3-paper-publication/2026-10-26.md),
[paper](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
[blog](../../sources/meta.com/sam3-blog/2026-10-26.md)). The open weights are gated on Hugging Face
and licensed under Meta's custom SAM License, and the only documented hosted API is through partners
such as fal — Meta publishes no first-party inference endpoint
([weights repo](../../sources/huggingface.co/sam3-weights/2026-10-26.md),
[SAM License](../../sources/github.com/sam3-license/2026-10-26.md),
[fal](../../sources/fal.ai/sam-3/2026-10-26.md)).

## Identity

- Canonical name: **SAM 3**, expanded "Meta Segment Anything Model 3" (repository description) and
  "Segment Anything Model 3" (fal's display name). The paper and blog title the work **"SAM 3:
  Segment Anything with Concepts"**
  ([repo](../../sources/github.com/sam3-repo/2026-10-26.md),
  [fal](../../sources/fal.ai/sam-3/2026-10-26.md),
  [paper](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).
- Developer: Meta. The repository credits **Meta Superintelligence Labs**; the in-paper model card
  says "Organization: Meta SAM Team"; the blog is Meta AI's
  ([repo](../../sources/github.com/sam3-repo/2026-10-26.md),
  [paper](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).
- Weights: `facebook/sam3` on Hugging Face, **manual-gated** (`license: other`, architecture
  `Sam3VideoModel`); the successor checkpoint set is `facebook/sam3.1`
  ([sam3 weights](../../sources/huggingface.co/sam3-weights/2026-10-26.md),
  [sam3.1 weights](../../sources/huggingface.co/sam3.1-weights/2026-10-26.md)).
- Host endpoints (fal): `fal-ai/sam-3/image`, `fal-ai/sam-3/video`, `fal-ai/sam-3/image-rle`,
  `fal-ai/sam-3/video-rle`, `fal-ai/sam-3/image/embed`, all published 2025-11-20; the SAM 3.1
  equivalents `fal-ai/sam-3-1/{image,image-rle,video,video-rle}` were published 2026-03-30
  ([fal](../../sources/fal.ai/sam-3/2026-10-26.md)).
- Roster label vs first-party name: the roster row reads "SAM 3" with discovery path `fal-ai/sam-3`.
  That bare ID resolves in fal's metadata API but returns no metadata; the documented endpoints are
  the `/image` and `/video` paths above
  ([fal](../../sources/fal.ai/sam-3/2026-10-26.md)).
- Release date: **2025-11-19**, which is inside the roster's 2025-10-26 window. Meta's dated
  publication page says "November 19, 2025"; the SAM License is "Last Updated: November 19, 2025";
  Hugging Face Transformers records "This model was contributed to Hugging Face Transformers on
  2025-11-19"; arXiv v1 is dated 2025-11-20; the Hugging Face repo was last modified 2025-11-20; fal
  published its endpoints 2025-11-20
  ([publication](../../sources/meta.com/sam3-paper-publication/2026-10-26.md),
  [licence](../../sources/github.com/sam3-license/2026-10-26.md),
  [transformers docs](../../sources/huggingface.co/sam3-transformers-docs/2026-10-26.md),
  [paper](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
  [weights](../../sources/huggingface.co/sam3-weights/2026-10-26.md),
  [fal](../../sources/fal.ai/sam-3/2026-10-26.md)). The blog page itself no longer shows the original
  announcement date — it now opens with a dated SAM 3.1 update and carries no date for the text below
  it — so the date rests on the dated anchors above, not on the blog
  ([blog](../../sources/meta.com/sam3-blog/2026-10-26.md)).
- Siblings, in order: **SAM 1** (2023, image-only, three ViT sizes, Apache 2.0), **SAM 2 / SAM 2.1**
  (2024, video, four Hiera sizes, Apache 2.0), **SAM 3** (2025-11, one 848M checkpoint, SAM License),
  **SAM 3.1** (2026-03-27, replacement checkpoints), and **SAM 3D** (a *separate* Meta release for 3D
  object and human reconstruction)
  ([SAM 1 repo](../../sources/github.com/sam1-repo/2026-10-26.md),
  [SAM 2 repo](../../sources/github.com/sam2-repo/2026-10-26.md),
  [release notes](../../sources/github.com/sam3-release-notes/2026-10-26.md),
  [blog](../../sources/meta.com/sam3-blog/2026-10-26.md)).

### SAM 3 is not SAM 2 or SAM 1

The distinction is a task change, not only a quality bump. SAM 1 and SAM 2 solve **promptable visual
segmentation** (PVS): one prompt — a point, box or mask — selects one object, and SAM 2 adds video
tracking of that object through a streaming memory
([paper §1](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
[SAM 2 repo](../../sources/github.com/sam2-repo/2026-10-26.md),
[SAM 1 repo](../../sources/github.com/sam1-repo/2026-10-26.md)). SAM 3 adds **promptable concept
segmentation** (PCS): the prompt names a concept ("yellow school bus", an exemplar crop, or both) and
the model returns masks and unique identities for *all* matching instances, exhaustively, in images
and in video
([paper §2](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
[blog](../../sources/meta.com/sam3-blog/2026-10-26.md)).

| | SAM 1 (2023) | SAM 2 / 2.1 (2024) | SAM 3 (2025-11) |
| --- | --- | --- | --- |
| Prompts | points, boxes, masks | points, boxes, masks | text noun phrases, image exemplars, points, boxes, masks |
| Text-conditioned | no | no | yes (concept prompts) |
| Inputs | images | images and video | images and video |
| Output | one mask per prompt | masklets across frames | all instances of a concept, with identities |
| Size tiers | `vit_b`/`vit_l`/`vit_h` | tiny / small / base+ / large (Hiera) | one checkpoint, 848M |
| Weights licence | Apache 2.0 | Apache 2.0 | SAM License (custom, not OSI) |
| First-party repo | `segment-anything` | `sam2` | `sam3` |

Sources for the table: [SAM 1](../../sources/github.com/sam1-repo/2026-10-26.md),
[SAM 2](../../sources/github.com/sam2-repo/2026-10-26.md),
[repo](../../sources/github.com/sam3-repo/2026-10-26.md),
[paper](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
[licence](../../sources/github.com/sam3-license/2026-10-26.md). SAM 3 did not retire its
predecessors: fal still lists `fal-ai/sam2/image`, `fal-ai/sam2/video` and
`fal-ai/sam2/auto-segment` as public endpoints with their own IDs
([fal](../../sources/fal.ai/sam-3/2026-10-26.md)).

The two generations are not interchangeable on throughput either: in Meta's own interactive image
segmentation table (SA-37, average mIoU), SAM 3 beats SAM 2.1 L at 3 clicks (81.3 vs 80.3) and 5
clicks (85.1 vs 84.3), is fractionally worse at 1 click (66.1 vs 66.4), and runs at **43.5 FPS
against SAM 2.1 L's 93.0** ([paper Table 7](../../sources/arxiv.org/sam3-paper/2026-10-26.md)). A
click-driven masking pipeline that already works on SAM 2 has no accuracy reason to move and a
throughput reason not to.

### SAM 3.1: replacement checkpoints, kept on this page

Meta shipped **SAM 3.1** on 2026-03-27 as "a drop-in replacement for SAM 3" whose change is
efficiency in the video path ("Object Multiplex"), not a new task
([blog](../../sources/meta.com/sam3-blog/2026-10-26.md),
[release notes](../../sources/github.com/sam3-release-notes/2026-10-26.md)). It has its own weight
repo, its own fal endpoints at double the SAM 3 price, and its own benchmark rows — so it is a real
choice at request time, not just a provenance difference. This page keeps both under one identity
because (a) Meta presents 3.1 as a replacement for the same model, (b) the paper reports no image-side
change and calls the accuracy impact "mixed", and (c) the roster assigns one row to SAM 3. The split
question is recorded under **Unresolved questions** rather than decided here.

## Current assessment

SAM 3 is a **distinct new model with a new capability**, not a repackaging of SAM 2. The evidence for
that is first-party and specific: a new task formulation (PCS), a new architecture (Perception
Encoder image/text encoders, a DETR-based detector with a presence head, and a SAM 2-derived tracker
sharing one backbone), a new 848M single checkpoint, a new dataset and benchmark (SA-Co), and a new
licence ([paper §1, §C.1](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
[repo](../../sources/github.com/sam3-repo/2026-10-26.md),
[licence](../../sources/github.com/sam3-license/2026-10-26.md)).

It is also a **retained specialist**, not a general image model. It does not generate or edit pixels;
it returns masks, boxes, scores and identities, and it is used as a component — Meta's own examples
are a playground for face/licence-plate pixelation, a Marketplace "View in Room" feature, and
"SAM 3 Agent", an MLLM that calls SAM 3 with noun phrases it invents
([blog](../../sources/meta.com/sam3-blog/2026-10-26.md),
[paper §6](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).

The quality claim that survives scrutiny is narrow. Meta reports SAM 3 at 37.2 cgF1 on LVIS against
OWLv2's 29.3, 54.1 cgF1 on SA-Co/Gold against OWLv2's 24.6, and "75-80% of human performance" on
SA-Co ([repo tables](../../sources/github.com/sam3-repo/2026-10-26.md),
[blog](../../sources/meta.com/sam3-blog/2026-10-26.md)). Those are the vendor's numbers on the
vendor's benchmark, with baselines re-run by the vendor; **no independent measurement of SAM 3 was
captured for this page**. The only non-Meta number found is an unverified Hugging Face community-eval
entry (PBench average 44.4, `verified: false`), which measures a different task and cannot be compared
to SA-Co or LVIS ([weights repo](../../sources/huggingface.co/sam3-weights/2026-10-26.md)).

For a buyer, the practical shape is: very cheap per call on fal ($0.005 per image request, $0.005 per
16 video frames), with billed cost that grows with video length, while the model's compute — and so
its latency — grows linearly with the number of tracked objects on SAM 3
([fal](../../sources/fal.ai/sam-3/2026-10-26.md),
[paper §B](../../sources/arxiv.org/sam3-paper/2026-10-26.md)). SAM 3.1 exists specifically to flatten
that object-count cost, at twice fal's per-request price
([release notes](../../sources/github.com/sam3-release-notes/2026-10-26.md),
[fal](../../sources/fal.ai/sam-3/2026-10-26.md)).

## Documented capabilities

All of the following is vendor or host documentation. Nothing on this page is a measurement made by
this knowledge base.

- **Concept prompts in text.** Open-vocabulary short noun phrases, "yellow school bus", "a player in
  white" vs "a player in red". The text encoder is causal with a **maximum context length of 32**
  tokens, and the paper constrains PCS to "simple noun phrase prompts" — no multi-attribute queries
  beyond one or two attributes, no referring expressions
  ([paper §2, §B, §C.2](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
  [blog](../../sources/meta.com/sam3-blog/2026-10-26.md)).
- **Exemplar prompts.** Image exemplars, positive or negative, optionally combined with text
  ([paper §1](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
  [blog](../../sources/meta.com/sam3-blog/2026-10-26.md)).
- **Visual prompts.** Points, boxes and masks, "which were introduced in SAM 1 and SAM 2", and
  interactive refinement on top of a concept result
  ([blog](../../sources/meta.com/sam3-blog/2026-10-26.md),
  [repo](../../sources/github.com/sam3-repo/2026-10-26.md)).
- **Images.** One image in, masks + boxes + scores out; the reference code returns
  `masks, boxes, scores` from a text prompt
  ([repo](../../sources/github.com/sam3-repo/2026-10-26.md)).
- **Video and tracking.** A session-based video predictor accepts a JPEG folder or an MP4, takes a
  prompt on any frame index, and returns per-frame masks with stable object identities
  ([repo](../../sources/github.com/sam3-repo/2026-10-26.md)). The paper's task definition bounds this
  to "an image or short video (**≤30 secs**)"
  ([paper §2](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).
- **One size.** 848M parameters in the README, "~850M" in the paper (≈450M vision encoder, ≈300M text
  encoder, ≈100M detector + tracker). There is no small/medium/large tier
  ([repo](../../sources/github.com/sam3-repo/2026-10-26.md),
  [paper §C.1](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).
- **SAM 3.1 Object Multiplex.** Groups tracked objects into fixed-capacity buckets and processes them
  jointly, "allows the model to track up to 16 objects in a single forward pass", with the release
  notes reporting "~7x speedup at 128 objects on a single H100 GPU compared to the SAM 3 November 2025
  release" ([blog](../../sources/meta.com/sam3-blog/2026-10-26.md),
  [release notes](../../sources/github.com/sam3-release-notes/2026-10-26.md)).
- **SAM 3 Agent.** SAM 3 as a tool for an MLLM: the MLLM proposes noun-phrase queries, inspects masks,
  and iterates, which lets it answer prompts SAM 3 alone cannot ("What object in the picture is used
  for controlling and guiding a horse?") ([blog](../../sources/meta.com/sam3-blog/2026-10-26.md),
  [paper §6](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).

### Host-exposed surface (fal)

fal is the only host found serving SAM 3 under a documented, first-party-labelled endpoint, and its
schema is narrower than Meta's model:

- **Image**: `image_url` plus `prompt` (text), `point_prompts`, `box_prompts`; `apply_mask`,
  `return_multiple_masks` with `max_masks` 1–32 (default 3), `include_scores`, `include_boxes`,
  `output_format` (png/jpeg/webp), `sync_mode`. Output: `masks`, optional `image` preview, `scores`,
  `boxes` (normalized `cxcywh`), `metadata`
  ([fal](../../sources/fal.ai/sam-3/2026-10-26.md)).
- **Video**: `video_url`, `prompt` ("Use commas to track multiple objects (e.g., 'person, cloth')"),
  `point_prompts`, `box_prompts`, `detection_threshold` (0.1–1.0, default 0.5), `apply_mask`,
  `video_output_type` (`X264 (.mp4)` / `VP9 (.webm)`). Output: the segmented `video` plus an optional
  `boundingbox_frames_zip` of per-frame bounding boxes
  ([fal](../../sources/fal.ai/sam-3/2026-10-26.md)).
- **Variants**: `-rle` endpoints return run-length-encoded masks instead of visual overlays;
  `fal-ai/sam-3/image/embed` exposes the image embedding as a "vision" endpoint
  ([fal](../../sources/fal.ai/sam-3/2026-10-26.md)).
- **No mask-prompt input.** Neither schema has a mask-image field, even though fal's page copy lists
  "mask" as a prompt type (see **Limitations**).

### Vendor performance claims (labelled as claims)

- "SAM 3 doubles the accuracy of existing systems in both image and video PCS" and reaches
  "75-80% of human performance" on SA-Co
  ([paper abstract](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
  [repo](../../sources/github.com/sam3-repo/2026-10-26.md)).
- "SAM 3 runs in 30 milliseconds for a single image with more than 100 detected objects on an H200
  GPU"; in video, "near real-time performance for approximately five concurrent objects"
  ([blog](../../sources/meta.com/sam3-blog/2026-10-26.md)). To reach 30 FPS in video the paper needs
  multiple GPUs: "up to 10 objects on 2 H200s, up to 28 objects on 4 H200s, and up to 64 objects on 8
  H200s" ([paper §B](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).
- SAM 3.1: "~7x speedup at 128 objects on a single H100"
  ([release notes](../../sources/github.com/sam3-release-notes/2026-10-26.md)); "16 to 32 frames per
  second on a single H100 GPU" for medium object counts
  ([blog](../../sources/meta.com/sam3-blog/2026-10-26.md)); the paper itself measures "a 5.2× speedup
  at 128 objects" for SAM 3 Multiplex and plots 2.2 → 11.5 FPS
  ([paper §H](../../sources/arxiv.org/sam3-paper/2026-10-26.md)). The three figures disagree; see
  **Unresolved questions**.
- fal's own marketing adds claims Meta does not make: "Output Resolution 1024×1024 — Native output
  dimensions for mask generation", "200 segmentations per dollar", and "SAM 3 Video trades per-frame
  segmentation precision for temporal object tracking at 2.5x the per-frame cost ($0.005 per 16 frames
  vs. $0.002 per static image)" ([fal](../../sources/fal.ai/sam-3/2026-10-26.md)). The last one is
  arithmetically wrong — it compares a per-16-frames price with a per-image price, and it contradicts
  fal's own $0.005-per-request image price on the same product family.

## Limitations and constraints

- **Text is noun phrases only.** No referring expressions, no long compositional queries, and a 32-token
  text encoder. Complex prompts require wrapping SAM 3 in an MLLM (SAM 3 Agent) or fine-tuning
  ([paper §B](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
  [blog](../../sources/meta.com/sam3-blog/2026-10-26.md)).
- **Video scope is short clips.** The PCS definition is "an image or short video (≤30 secs)"; the blog
  says "images and short videos with simple text phrases", and presents pairing SAM 3 with an MLLM as
  the route to longer, more complex descriptions
  ([paper §2](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
  [blog](../../sources/meta.com/sam3-blog/2026-10-26.md)). No host documents a maximum duration: fal's
  video schema has no length, resolution or FPS limit
  ([fal](../../sources/fal.ai/sam-3/2026-10-26.md)). One Replicate wrapper caps input at **2000
  frames**, but that is the wrapper author's limit, not Meta's or Replicate's
  ([Replicate](../../sources/replicate.com/sam-3-community/2026-10-26.md)).
- **Video cost scales with object count** on SAM 3: each object is tracked with its own SAM 2-style
  masklet, "utilizing only shared per-frame embeddings, without inter-object communication", so
  inference cost grows linearly with objects and there is no shared object-level context to resolve
  ambiguity in crowded scenes ([blog](../../sources/meta.com/sam3-blog/2026-10-26.md),
  [paper §B](../../sources/arxiv.org/sam3-paper/2026-10-26.md)). SAM 3.1 changes both: Object
  Multiplex adds a "shared spatial memory" alongside per-object embeddings, which is the remedy §B
  points at, while the measured accuracy effect is "mixed"
  ([paper §H](../../sources/arxiv.org/sam3-paper/2026-10-26.md),
  [release notes](../../sources/github.com/sam3-release-notes/2026-10-26.md)).
- **Out-of-domain concepts need fine-tuning.** "SAM 3 struggles to generalize to fine-grained
  out-of-domain concepts (e.g., aircraft types, medical terms) … especially in niche visual domains
  (e.g., thermal imagery)" ([paper §B](../../sources/arxiv.org/sam3-paper/2026-10-26.md)). Meta ships
  fine-tuning code and points at Roboflow for annotation and deployment
  ([repo](../../sources/github.com/sam3-repo/2026-10-26.md),
  [blog](../../sources/meta.com/sam3-blog/2026-10-26.md)).
- **Concept and instance prompting do not blend.** The model enforces "a hard 'mode-switch' … from
  concept to instance mode", so refining one instance without touching the rest of the concept is a
  deliberate mode change ([paper §B](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).
- **Interactive image throughput is not better than SAM 2's.** 43.5 FPS vs SAM 2.1 L's 93.0 on the
  SA-37 benchmark ([paper Table 7](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).
- **Weights are gated.** Both `facebook/sam3` and `facebook/sam3.1` are `gated: manual`, requiring
  name, date of birth, country, affiliation, job title and geo-IP, plus licence acceptance; the model
  cards themselves are not readable without access
  ([sam3 weights](../../sources/huggingface.co/sam3-weights/2026-10-26.md),
  [sam3.1 weights](../../sources/huggingface.co/sam3.1-weights/2026-10-26.md)).
- **The licence is not open source.** The SAM License is royalty-free and permits commercial use, but
  forbids reverse engineering, restricts ITAR/military and trade-control end uses, requires
  redistribution under the same terms, and terminates on patent litigation against Meta
  ([licence](../../sources/github.com/sam3-license/2026-10-26.md)). SAM 1 and SAM 2 were Apache 2.0
  ([SAM 1](../../sources/github.com/sam1-repo/2026-10-26.md),
  [SAM 2](../../sources/github.com/sam2-repo/2026-10-26.md)).
- **No first-party inference API.** Meta offers the Segment Anything Playground and a Roboflow
  partnership; there is no documented Meta-hosted endpoint, so every API path is a partner's
  ([blog](../../sources/meta.com/sam3-blog/2026-10-26.md)).
- **Host surface is narrower than the model.** fal documents text, point and box prompts but no mask
  prompt, despite its page copy claiming "mask overlays"
  ([fal](../../sources/fal.ai/sam-3/2026-10-26.md)). fal also does not document which checkpoint
  revision backs which endpoint.
- **No official Replicate model.** Replicate's Meta organisation lists `meta/sam-2` and
  `meta/sam-2-video` but no SAM 3 (`replicate.com/meta/sam-3` is a 404). SAM 3 exists there only as
  community uploads: `vufinder/sam3` (images, ~$0.0013/run, L40S) and `8digit/gener8-sam3` (video
  wrapper, 2000-frame cap), both `is_official: false`
  ([Replicate](../../sources/replicate.com/sam-3-community/2026-10-26.md)).
- **SAM 3D is not SAM 3.** fal files `sam-3/3d-objects`, `sam-3/3d-body` and `sam-3/3d-align` under a
  `sam3` group, but these run Meta's separate SAM 3D release for 3D reconstruction
  ([fal](../../sources/fal.ai/sam-3/2026-10-26.md),
  [blog](../../sources/meta.com/sam3-blog/2026-10-26.md)).

## Access, pricing, licensing

### fal (the documented host)

| Endpoint | Basis | Price (fal's own wording) |
| --- | --- | --- |
| `fal-ai/sam-3/image` | per request | "**$0.005** per request" |
| `fal-ai/sam-3/image/embed` | per request | "**$0.005** per request" |
| `fal-ai/sam-3/video` | per 16 frames | "**$0.005** per 16 frames of video input" |
| `fal-ai/sam-3/video-rle` | per 16 frames | "**$0.005** per 16 frames of video" |
| `fal-ai/sam-3/image-rle` | not stated | no `pricingInfoOverride` in the catalogue row |
| `fal-ai/sam-3-1/image`, `/image-rle` | per request | "**$0.01** per request" |
| `fal-ai/sam-3-1/video`, `/video-rle` | per 16 frames | "**$0.01** per 16 frames of video input" |

Source: [fal catalogue and schemas](../../sources/fal.ai/sam-3/2026-10-26.md). `hostingType` is
`serverless` for every row, which fal uses to mean it runs the model on its own infrastructure rather
than proxying another API. At $0.005 per 16 frames, 1,000 frames cost ≈$0.31 (fal quotes the same
figure), so a minute of 30 fps video is ≈1,800 frames ≈ **$0.56**; SAM 3.1 doubles that. fal's
`licenseType: "commercial"` and "Commercial use permitted" badges are fal's statements about use
*through fal*, not a Meta licence grant.

### Replicate (community only)

`vufinder/sam3` advertises "approximately $0.0013 to run … 769 runs per $1" on an Nvidia L40S, with
predictions "typically within 2 seconds"; `8digit/gener8-sam3` reports measured GPU time for a 24-second
crowded clip — "720×1280, 29 people, with preview: 212 s tracking + 66 s preview — 291 s of GPU, about
$0.28" ([Replicate](../../sources/replicate.com/sam-3-community/2026-10-26.md)). Neither is an official
Meta model, and the second is a wrapper that adds its own label-map and `objects.json` outputs.

### Weights

`facebook/sam3` and `facebook/sam3.1` are gated downloads under the SAM License
([sam3 weights](../../sources/huggingface.co/sam3-weights/2026-10-26.md),
[licence](../../sources/github.com/sam3-license/2026-10-26.md)). Self-hosting requires Python 3.12+,
PyTorch 2.7+ (the install snippet pins `torch==2.10.0` with cu128) and a CUDA 12.6+ GPU; optional
`flash-attn-3` and `cc_torch` accelerate inference
([repo](../../sources/github.com/sam3-repo/2026-10-26.md)). The licence grants use, modification and
redistribution and permits commercial use; it does not grant output ownership and says nothing about
the licence of generated masks or annotations
([licence](../../sources/github.com/sam3-license/2026-10-26.md)).

### Cost comparison caveats

The fal numbers are per request and per 16 frames, not per object or per megapixel, so they do not
scale with what actually costs the GPU — object count and frame count. A 10-minute clip with 30
tracked objects is billed the same per 16 frames as a 10-minute clip with one object, while Meta's own
measurements show inference cost rising linearly with objects on SAM 3
([paper §B](../../sources/arxiv.org/sam3-paper/2026-10-26.md)). fal's marketing copy also states two
different image prices for the same endpoint family ($0.005/request in the pricing block, "$0.002 per
static image" in the video page's comparison), so a cost estimate should use the schema's
`pricingInfoOverride`, not the marketing page
([fal](../../sources/fal.ai/sam-3/2026-10-26.md)).

## Unresolved questions

1. **Should SAM 3.1 get its own page?** It has separate weights, separate fal endpoints at double the
   price, and its own benchmark rows — two of the three split tests in the knowledge-base skill. The
   counter-argument is Meta's "drop-in replacement" framing and the absence of any image-side change.
   This page merges them and labels every 3.1-specific claim; a split is a reasonable future edit once
   an independent measurement shows the video efficiency gap matters in practice.
2. **Which checkpoint does each fal endpoint run?** fal exposes no revision field for these endpoints
   and never names the Hugging Face repo it serves. `sam-3/*` published 2025-11-20 presumably serves
   the November 2025 checkpoint and `sam-3-1/*` the March 2026 one, but that is inference from dates.
3. **Are mask prompts supported through the API?** Meta documents masks as a prompt modality; fal's
   page copy says "mask overlays"; fal's schema has no mask input on either endpoint. Model capability
   and host exposure disagree, and no first-party API exists to test.
4. **How long a video will fal accept?** Meta's PCS definition stops at 30 seconds; fal documents no
   limit; a Replicate wrapper caps at 2000 frames. The real ceiling is undocumented.
5. **What is the true SAM 3.1 speed-up?** 7x (release notes), 5.2x (paper §H, measured on SAM 3
   Multiplex with the same detector), and "16 to 32 FPS" (blog, medium object counts) are three
   different claims about one change.
6. **SA-Co size: 270K or 207K concepts?** The README says 270K; the paper says 207K unique
   phrases/concepts. Both say "over 50 times" existing benchmarks
   ([repo](../../sources/github.com/sam3-repo/2026-10-26.md),
   [paper](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).
7. **LVIS mask AP: 48.5 or 48.8?** README table vs paper text, with no statement of which checkpoint
   each used ([repo](../../sources/github.com/sam3-repo/2026-10-26.md),
   [paper](../../sources/arxiv.org/sam3-paper/2026-10-26.md)).
8. **Are the November 2025 checkpoints still supported?** The release notes say the 3.1 checkpoints
   need the latest repo code but do not say the 2025 checkpoints are deprecated; both HF repos remain
   up, and fal keeps both endpoint families public.
9. **Did SAM 3.1 change image behaviour at all?** No image benchmark is published for 3.1, and the
   paper's v2 image tables carry no 3.1 rows.
10. **What is `SAM3-LiteText`?** Transformers lists a third SAM3 model page by that name; its relation
    to the 848M checkpoint (a smaller text encoder, presumably) is not described in the pages captured
    ([transformers docs](../../sources/huggingface.co/sam3-transformers-docs/2026-10-26.md)).
11. **What does the Meta Playground allow, and is it free?** The blog promotes Segment Anything
    Playground as the no-code path; its terms, limits and pricing were not captured.

## Evidence status

Evidence floor: **met.** First-party records: Meta's dated publication page, the vendor blog (with the
2026-03-27 SAM 3.1 update), the `facebookresearch/sam3` repository and README, the SAM 3.1 release
notes, the SAM License text, the arXiv paper (v2, including its model card), and both Hugging Face
weight repos. Independent host record: fal's catalogue, metadata API, OpenAPI schemas and model pages,
plus Replicate's organisation listing and two community model pages. Supporting predecessor context:
the SAM 1 and SAM 2 repositories, and Hugging Face's Transformers SAM3 documentation. All captures are
dated 2026-10-26.

**No direct tests have been run for this page.** Every capability, benchmark and latency figure is
Meta's or a host's. Meta's SA-Co and LVIS numbers are vendor-run on a vendor-built benchmark; the only
non-vendor run-time figures captured come from a community Replicate wrapper and are not comparable to
Meta's H100/H200 measurements. The next useful evidence would be: a reproducible mask-quality test on a
fixed image set (text prompt, point prompt, exemplar prompt) against `fal-ai/sam-3/image` and
`fal-ai/sam-3-1/image`; a video test measuring identity switches and wall-clock time at 1, 10 and 100
objects on one endpoint; and an independent comparison against SAM 2.1 on the same click protocol.
