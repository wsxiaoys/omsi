# OXR-1.0 (SoMark)

"OXR" is SoMark's **Optical Everything Recognition** model: an open-weights document parser that
turns PDFs and page images into Markdown or JSON with layout coordinates. SoMark announced it on
**2026-10-20** ([launch post](../../sources/somark.ai/oxr-launch-post/2026-10-27.md)); the weights
repository was created on 2026-10-02 and last modified 2026-10-24
([card](../../sources/huggingface.co/somark-oxr-1-0-model-card/2026-10-27.md)). It is in-window
against the 2025-10-26 cutoff.

It is the **open-weights sibling of a closed product, not the product itself**: "SoMark is a
production-grade document parsing engine for AI agents from the same team, powered by a separate
model" ([launch post](../../sources/somark.ai/oxr-launch-post/2026-10-27.md)). Two artefacts ship
together — a 3.07 GB BF16 OXR file and a 79 MB layout checkpoint — and the release is code plus
weights plus a deployment recipe, not an API-only launch
([weights metadata](../../sources/huggingface.co/somark-oxr-1-0-weights-metadata/2026-10-27.md),
[repository](../../sources/github.com/somark-oxr-readme/2026-10-27.md)).

## Identity

- **Canonical name:** OXR-1.0. Aliases: "OXR", "SoMark OXR", "SoMarkAI/OXR-1.0". The expansion is
  "Optical Everything Recognition".
- **Vendor / developer:** SoMark (SoMark Team). Weights on Hugging Face as `SoMarkAI/OXR-1.0` and
  ModelScope as `SoMark/OXR-1.0`; code at `github.com/SoMarkAI/OXR`, homepage `somark.ai/oxr`.
- **One checkpoint, no snapshot suffix.** The GitHub repository has **no releases and no tags**, so
  "OXR-1.0" cannot be pinned to a version marker; the weights repository's commit SHA is the
  practical pin ([repository](../../sources/github.com/somark-oxr-readme/2026-10-27.md)).
- **No technical report.** No arXiv identifier exists at capture; the card's arXiv badge reads
  "Coming Soon" and the citation block points at the GitHub repository
  ([card](../../sources/huggingface.co/somark-oxr-1-0-model-card/2026-10-27.md)).
- **Two models per release.** The OXR recognition model and a layout-analysis model
  (`layout_analysis/last.pth`, 78,791,307 bytes). The layout stage is documented as independently
  replaceable ([card](../../sources/huggingface.co/somark-oxr-1-0-model-card/2026-10-27.md)).

### Dates

| Date | Source | What it marks |
| --- | --- | --- |
| **2026-10-20** | launch post byline; Webdiga citing the vendor's X announcement | public launch |
| 2026-10-02 | HF `createdAt` | weights repository created |
| 2026-10-05 | GitHub `created_at` | code repository created |
| 2026-10-05 | `docs/benchmark.md` | "Accuracy snapshot" the vendor's tables describe |
| 2026-10-19 | weights commit | `.eval_results/olmocrbench.yaml` added |
| 2026-10-21 | MLX repo `createdAt` | first independent conversion, one day after launch |
| 2026-10-24 | HF `lastModified`; Webdiga publication | last vendor update before capture |

The launch post's page metadata reports a 2026-10-26 render timestamp, later than its byline; the
byline is the date to cite ([launch post](../../sources/somark.ai/oxr-launch-post/2026-10-27.md)).

## Current assessment

**A real, deployable open-weights parser whose two headline claims are contradicted by its own
artefacts.** Both contradictions are checkable from the released files rather than from opinion, and
neither is reconciled anywhere in the vendor's material.

**1. "1.3B parameters" against 1,534,378,216 in the weights file.** The card, the README and the
launch post all say 1.3B. The safetensors header reports **1,534,378,216** BF16 parameters, the
weights file is 3,068,857,520 bytes, and total repository storage is 3,159,071,481 bytes
([weights metadata](../../sources/huggingface.co/somark-oxr-1-0-weights-metadata/2026-10-27.md)). The gap is
too large for rounding, and the card gives no breakdown, so it is unclear whether the label excludes
the layout model (only ~0.04B), the vision encoder, or is simply stale. An independent write-up
reading the same repository metadata caught the same gap
([Webdiga](../../sources/webdiga.com/oxr-document-parsing/2026-10-27.md)). The practical reading is that
OXR is a **~1.5B** model, and that the "1.3B" figure should not be used for memory planning.

**2. "Pretrained from scratch" against a Qwen3-0.6B-Base backbone.** The launch post says OXR was
"pretrained from scratch" and the card repeats it, but the same launch post describes visual
embeddings concatenated "into a sequence for Qwen3-0.6B-Base", and `config.json` carries
`llm_config._name_or_path: "Qwen/Qwen3-0.6B-Base"` with `llm_config.architectures:
["Qwen3ForCausalLM"]` and `Qwen3ConversationFormatter`
([weights metadata](../../sources/huggingface.co/somark-oxr-1-0-weights-metadata/2026-10-27.md),
[launch post](../../sources/somark.ai/oxr-launch-post/2026-10-27.md)). A third party converting the
model found the same split — "a Qwen3 decoder" plus a bf16 visual stack
([MLX port](../../sources/huggingface.co/oxr-1-0-mlx-8bit/2026-10-27.md)). The defensible claim is
that the **parsing model as a whole** is newly trained and that the language backbone is initialised
from Qwen3-0.6B-Base; "from scratch" cannot mean every component, and the vendor never says which
reading it intends.

**What is not in doubt.** The weights load and run outside the vendor's stack, on hardware the vendor
does not document: a community MLX conversion reproduces the vendor's olmOCR-bench level within its
own error bar (87.6 ± 1.0 on a 596-page subset against 87.84), and a second third party compiled the
model to WebAssembly for browser CPU inference
([MLX port](../../sources/huggingface.co/oxr-1-0-mlx-8bit/2026-10-27.md),
[WASM port](../../sources/huggingface.co/oxr-wasm-space/2026-10-27.md)). The model is genuinely
open-weights in the sense that matters for a buyer: it can be self-hosted, converted and run without
SoMark's servers.

**The "#1 on three benchmarks" claim is vendor-measured and thin at the top.** All three scores are
SoMark's own runs, and the peer numbers beside them are copied from other publishers' papers, cards
and leaderboards, which the launch post concedes: "not all models were rerun in the same
environment" ([benchmark](../../sources/github.com/somark-oxr-benchmark/2026-10-27.md)). The olmOCR-bench
lead over Infinity-Parser2-Pro is **0.24 points** — inside the range that harness differences alone
can produce. The one independent re-run supports the **level**, not the **rank**.

**Distribution is first-party only, and the licence is the reason.** No third-party host serves OXR:
fal, Replicate and OpenRouter catalogue searches on 2026-10-27 returned no entry, and Hugging Face
lists no inference provider (`inferenceProviderMapping: {}`). Section 3 of the licence forbids a
third-party hosted API whose principal function is document parsing as a substitute for SoMark's, so
the absence is structural rather than an accident of adoption
([licence](../../sources/github.com/somark-oxr-license/2026-10-27.md)). Self-hosting for internal use is the
clearly permitted path.

## Architecture

**Two stages, one recogniser.** Layout analysis returns region types and bounding boxes; OXR then
recognises content in each cropped region *and* predicts reading order from the full-page image plus
the region IDs, types and boundaries, returning reading order as a sequence of IDs. The two results
are merged by ID ([launch post](../../sources/somark.ai/oxr-launch-post/2026-10-27.md)). Reading
order is therefore folded into recognition rather than handled by a third model, which the vendor
presents as the simplification: "any Layout Analysis model can work well with the OXR model"
([card](../../sources/huggingface.co/somark-oxr-1-0-model-card/2026-10-27.md)).

**The recogniser is a small VLM with a non-standard visual path.** The vision encoder is a **NaViT
variant of SigLIP2 SO400M** with variable resolution and aspect ratio, processing full pages within a
pixel budget. Its continuous features are not fed to the language model directly: a **visual head**
computes probabilities over a visual vocabulary, weights a learnable visual embedding table with
them, and those embeddings are concatenated with text-token embeddings into a sequence for
**Qwen3-0.6B-Base**. The design is stated to be "inspired by Ovis2.5"
([launch post](../../sources/somark.ai/oxr-launch-post/2026-10-27.md)). `config.json` corroborates
the backbone and reports `hidden_size: 1024`, `dtype: bfloat16`
([weights metadata](../../sources/huggingface.co/somark-oxr-1-0-weights-metadata/2026-10-27.md)).

**The pipeline is more than the model.** The repository ships `layout.py`, `recognition.py`,
`reading_order.py`, `assembler.py`, `orchestrator.py` and a `postprocess/` package with handlers for
tables, formulas, code, chemical structures, pictures and layout, plus several de-duplication passes.
It also **vendors an XY-cut reading-order implementation**
(`oxr/pipeline/_vendor/xycut_plus_plus.py`, `xycut_order.py`), so reading order is not purely
model-predicted in the shipped code — the model predicts it and the pipeline also has a geometric
fallback ([repository](../../sources/github.com/somark-oxr-readme/2026-10-27.md)). Any comparison of
"model" accuracy against "pipeline" behaviour has to keep those two objects apart.

**Training is described as a recursive self-improvement loop, not a dataset.** A general VLM labels
OXR outputs Correct / Wrong / Uncertain, multiple rollouts on the same page flag disagreement,
perturbations (scaling, blurring, compression) test stability, a second pass clusters attributed
causes into coverage for the next round, and a third generates rendering code whose execution
produces images and labels. The vendor states real documents "do not directly become reliable
training labels; the supervision comes from the data generated afterward", and that the new data
needs no manual labelling ([launch post](../../sources/somark.ai/oxr-launch-post/2026-10-27.md)).
No data size, composition, language list, cutoff, or identity of the judge VLM is published.

## Documented capabilities

**Thirteen element types**, each with a JSON `type` and an output format
([card](../../sources/huggingface.co/somark-oxr-1-0-model-card/2026-10-27.md)):

| Type | Output |
| --- | --- |
| Text, Title, Caption, Footnote, Stamp | plain text |
| Page-header, Page-footer | plain text, filtered out by default |
| Formula | LaTeX |
| Chemical Equation | LaTeX using mhchem `\ce` syntax |
| Chemical Structure | SMILES (or image) |
| Table | HTML or Markdown |
| Code Block | Markdown code block |
| Picture | image |

**Output and coordinates.** Markdown or JSON, with layout coordinates included in the structured
output. The HTTP surface is `POST /v1/parse/sync` with `file`, `api_key` and `output_formats`
(`markdown`, `json`), path- and shape-compatible with the SoMark production API, so an integration
written against OXR can be repointed at the paid product by changing the base URL
([card](../../sources/huggingface.co/somark-oxr-1-0-model-card/2026-10-27.md),
[free API docs](../../sources/docs.somark.ai/oxr-free-api/2026-10-27.md)).

**Task prompts are part of the interface.** The MLX conversion records the prompts the official
pipeline uses, e.g. `Recognize the content of the image.`, `Recognize the formula of the image into
KaTex format.`, `Recognize the table of the image into html format.`, `Recognize the chemical
structure of the image into SMILES.`, `Recognize the whole page content of the image.`
([MLX port](../../sources/huggingface.co/oxr-1-0-mlx-8bit/2026-10-27.md)).

**What is *not* documented.** No language coverage statement beyond example images (Chinese
handwriting, vertical text), no per-element accuracy, no confidence scores, no statement of how the
layout model is trained or what its parameter count is, and no "How to use OXR" page — the README
links one that is absent from the repository tree
([repository](../../sources/github.com/somark-oxr-readme/2026-10-27.md)).

## Benchmark claims (all vendor-measured)

Every OXR figure below is the developer's own run, from `docs/benchmark.md`, "Accuracy snapshot:
5 October 2026" ([benchmark](../../sources/github.com/somark-oxr-benchmark/2026-10-27.md)).

| Benchmark | OXR-1.0 | Runner-up | Margin |
| --- | --- | --- | --- |
| olmOCR-bench (macro, `olmocr 0.4.27`, 8,413 rules, 1,403 pages) | **87.84** | Infinity-Parser2-Pro 87.60 | **0.24** |
| OmniDocBench (1,651 pages) | **97.18** | TeleOCR 96.91 | 0.27 |
| DocParsingBench (3 rounds, 1,342 scored pages) | **87.76** | PaddleOCR-VL-1.6 85.17 | 2.59 |

olmOCR-bench peers in the same table: Chandra-OCR-2 85.80, dots.mocr 83.90, jina-ocr-v1 83.40,
Surya-OCR-2 83.30, DeepSeek-OCR-2 76.30, MinerU2.5-2509-1.2B/GLM-OCR 75.20. OmniDocBench peers:
PaddleOCR-VL-1.6 96.34, Gemini 3 Pro 92.91, Gemini 3 Flash 92.62. OXR's OmniDocBench components are
text edit 0.0251, formula CDM 97.44, table TEDS 96.62, TEDS-S 98.44, reading-order edit 0.1214.

**Speed**, on one RTX PRO 6000 Blackwell 96 GB with a 24-CPU quota and 96 GiB RAM: **557.77 native
tokens/s** serial decode (PaddleOCR-VL-1.6 516.39, +8.0%) and **0.990373 pages/s** end-to-end
(OvisOCR2 0.741960, +33.5%), i.e. 100 frozen pages in 100.972 s. Serial decode excludes the
reading-order stage and each request's first token and prefill; native tokens vary by tokenizer
([benchmark](../../sources/github.com/somark-oxr-benchmark/2026-10-27.md)).

Three caveats the vendor states, which matter more than the table:

- **The ranking is a cross-source collage.** "Peer-model scores are sourced from published papers,
  model cards, and the olmOCR-bench leaderboard", and "not all models were rerun in the same
  environment". A 0.24-point lead cannot be separated from harness differences at that margin.
- **Accuracy and speed are separate configurations.** "Showing them together does not imply joint
  results under one configuration", and equivalent accuracy under the speed configuration is not
  confirmed.
- **Contamination is addressed by assertion only**: "OXR's training data excludes leaderboard
  evaluation pages." No audit is published. The OmniDocBench comparison also mixes a frozen v1.6
  README snapshot (`f133a71`) for peers with OXR's October 5 result.

## Independent evidence

**One independent measurement exists, and it is partial.** A community MLX conversion
(`bxespinozar/OXR-1.0-mlx-8bit`, repository created 2026-10-21) ran the **full OXR pipeline** with an
MLX backend against olmOCR-bench using the official `olmocr==0.4.27` evaluator, on **596 pages /
3,849 tests** in bf16: **87.6 ± 1.0** overall against the vendor's 87.84. Component scores drift in
both directions (Headers/Footers 95.8 vs 94.34, Multi Column 84.1 vs 85.18, ArXiv 91.2 vs 92.76),
consistent with a subset run rather than a systematic bias. The same uploader reports greedy outputs
identical to an fp32 CPU PyTorch reference on 5 of 6 samples, including 1,859- and 3,603-token
outputs, with one handwriting sample differing by a word
([MLX port](../../sources/huggingface.co/oxr-1-0-mlx-8bit/2026-10-27.md)).

That supports the **level**, not the **rank**: no peer model was re-run, so the 0.24-point lead over
Infinity-Parser2-Pro is untouched by it. The ± 1.0 is stated without derivation, the measurement is
self-published on a model card with no methods section, and the uploader's affiliation is unstated.

**The leaderboard "number one" is a republished vendor number, not verification.** QuantID's
Hugging Face benchmark map lists OXR as the top olmOCR-bench entry at 87.84 out of 22 entries — the
same value as the vendor's own `.eval_results/olmocrbench.yaml` — and the aggregator states plainly
that it "is not an independent evaluation" and that most entries are author-submitted
([QuantID](../../sources/quantid.co.kr/hf-official-benchmarks-daily-2026-10-24/2026-10-27.md),
[weights metadata](../../sources/huggingface.co/somark-oxr-1-0-weights-metadata/2026-10-27.md)). The same
snapshot shows OXR leading neither Real5-OmniDocBench (PaddleOCR-VL-1.6, 93.19) nor ParseBench
(KDL-Frontier-Parser-nano, 76.36), so "first place" is benchmark-specific.

**Independent reporting adds checks, not measurements.** Webdiga's write-up dates the launch, catches
the 1.53B parameter count, explains the 24 GB VRAM floor from the Docker configuration
(`VLLM_GPU_MEMORY_UTILIZATION=0.70` plus the layout model on the same card — explicitly their
reading, not a SoMark statement), and summarises the licence clause for clause. The author states
without hedging: "we haven't run OXR ourselves"
([Webdiga](../../sources/webdiga.com/oxr-document-parsing/2026-10-27.md)).

**A second independent runtime exists but measures nothing.** A static Hugging Face Space
(`fusorlabs/oxr-wasm`) compiles the model to WebAssembly and runs it on the user's own CPU in the
browser, with no GPU, no vLLM and no layout service — a real capability difference from the
vendor's 24 GB floor. It publishes no accuracy, speed or memory figures, does not say whether the
layout model is included, and was not run at capture
([WASM port](../../sources/huggingface.co/oxr-wasm-space/2026-10-27.md)).

## Limitations and constraints

- **Stock tooling cannot load it.** Inference needs `modeling_oxr.py` and `configuration_oxr.py` from
  the weights repository plus an **out-of-tree vLLM plugin**; the vendor pins `vllm==0.25.1` and
  `transformers==5.13.1` and says "the official vLLM release does not yet support OXR inference"
  ([card](../../sources/huggingface.co/somark-oxr-1-0-model-card/2026-10-27.md),
  [weights metadata](../../sources/huggingface.co/somark-oxr-1-0-weights-metadata/2026-10-27.md)).
  There is no llama.cpp, Ollama or LM Studio support; even the Mac path needed a community
  conversion and an `mlx-vlm` change ([Webdiga](../../sources/webdiga.com/oxr-document-parsing/2026-10-27.md)).
- **A 3 GB model with a 24 GB floor.** The card gives 24 GB on one GPU for "low-concurrency testing"
  and recommends ≥48 GB "for long documents / higher concurrency", on Linux, NVIDIA, CUDA 13.0,
  Python 3.12. The floor is a property of the serving stack (vLLM's fixed cache reservation plus the
  layout model), not of the weights, and the vendor documents no smaller card
  ([card](../../sources/huggingface.co/somark-oxr-1-0-model-card/2026-10-27.md)).
- **Deployment is a three-service recipe.** From source: OXR model service on 8080, layout analysis
  on 8081, parsing API on 8000, with a 900-second default startup timeout; or one all-in-one Docker
  image. Either way the layout stage runs beside the recogniser
  ([card](../../sources/huggingface.co/somark-oxr-1-0-model-card/2026-10-27.md)).
- **The licence forbids the obvious third-party business.** Offering a hosted parsing API to third
  parties is prohibited regardless of company size unless SoMark licenses it in writing, and breach
  terminates rights automatically. Above USD 2M funding *or* USD 2M revenue, commercial use needs a
  separate licence ([licence](../../sources/github.com/somark-oxr-license/2026-10-27.md)).
- **No version pin.** No GitHub releases or tags; the model ID carries no snapshot suffix. A
  deployment cannot point at "OXR-1.0" and be sure of the bytes
  ([repository](../../sources/github.com/somark-oxr-readme/2026-10-27.md)).
- **No method paper.** The RSI loop is described in prose and diagrams only; the arXiv badge reads
  "Coming Soon". There is no data-composition, cutoff or language-coverage statement, and no
  statement of which VLM served as judge and data generator
  ([launch post](../../sources/somark.ai/oxr-launch-post/2026-10-27.md)).
- **Accuracy has no uncertainty.** No variance or confidence intervals are published, even for
  DocParsingBench, which was averaged over three rounds
  ([benchmark](../../sources/github.com/somark-oxr-benchmark/2026-10-27.md)).
- **The speed claim is narrow.** It is scoped by the README to "open-source document parsing models"
  on one GPU model, and the vendor declines to assert equivalent accuracy under the speed
  configuration ([repository](../../sources/github.com/somark-oxr-readme/2026-10-27.md)).
- **The free tier is a demo, not a service.** 10 MB per file, 20 pages per request, keyless,
  queued, no stability guarantee, "we'll keep the free API online until we can no longer afford to
  run it" ([free API docs](../../sources/docs.somark.ai/oxr-free-api/2026-10-27.md)).
- **The quantised and non-CUDA paths are unmeasured.** The MLX card reports the 8-bit decoder ~35%
  faster on long outputs but ran no benchmark for it, and no GGUF or other quantisation exists in the
  official repository ([MLX port](../../sources/huggingface.co/oxr-1-0-mlx-8bit/2026-10-27.md)).

## Access, pricing, licensing

**Weights are free to download** from Hugging Face (`SoMarkAI/OXR-1.0`, ungated) and ModelScope
(`SoMark/OXR-1.0`), 3.16 GB total. No inference provider is mapped on the Hub
(`inferenceProviderMapping: {}`), and no third-party catalogue listed the model on 2026-10-27
([card](../../sources/huggingface.co/somark-oxr-1-0-model-card/2026-10-27.md)).

**A free first-party API** runs at `https://free-oxr.somark.ai/api/v1` with a `somark.cn` mirror:
no authentication (any `api_key` value works), 10 MB and 20 pages per request, Markdown and JSON
output. It implements "the core parsing capabilities" only — cross-page merging, title-level
recognition, `zip` output and PDF-to-Office are rejected or ignored
([free API docs](../../sources/docs.somark.ai/oxr-free-api/2026-10-27.md)). Self-hosting removes both
limits; the 10 MB / 20-page ceiling is a property of the hosted tier.

**There is no published price for OXR itself.** The paid product is SoMark (200 MB / 300 pages per
request, per the same page), and no pricing page for it was captured. The cost of OXR is therefore
self-hosting: one 24–48 GB NVIDIA GPU and the licence terms.

**The licence is Apache-2.0 plus additional terms that win conflicts**, and GitHub reports it as
`NOASSERTION` — "open source" here is the vendor's label, not an OSI classification
([licence](../../sources/github.com/somark-oxr-license/2026-10-27.md)):

| Section | Term |
| --- | --- |
| 1 | Commercial use without a separate licence only while you and affiliates stay under **USD 2M total funding** (equity *and* debt) **and** USD 2M annual revenue |
| 2 | Online services to third parties must prominently identify SoMark OXR |
| 3 | No hosted API whose principal function is document parsing / OCR / layout analysis / content extraction as a substitute for SoMark's — at any size, including free, resold and white-label |
| 4 | Breach of 1–3 terminates rights automatically, without notice |
| 5 | Redistribution must carry these terms with Apache-2.0; Derivative Works are covered |

Section 3 carves out use "solely within your organization and its Affiliates", which is the
permitted path for a company that wants OXR without a commercial licence. The USD 2M funding
threshold sits below a typical seed round, so most venture-backed users need to talk to SoMark. The
licence does not say what "competing" means for a general-purpose host that also serves other tasks,
and gives no price or process for the commercial licence
([licence](../../sources/github.com/somark-oxr-license/2026-10-27.md)).

## Unresolved questions

1. **What does "1.3B" exclude?** The weights file holds 1,534,378,216 BF16 parameters. The layout
   checkpoint is only ~0.04B, which does not close a 0.23B gap, so either the vision stack is
   excluded from the count or the figure is stale. The card gives no breakdown.
2. **What is "pretrained from scratch" meant to claim?** `config.json` and the launch post both name
   `Qwen3-0.6B-Base` as the language backbone, and a third party's conversion independently found a
   Qwen3 decoder; the marketing line says the model was trained from scratch. Which reading the
   vendor intends is never stated, and the difference matters for anyone assuming OXR inherits
   Qwen3's multilingual behaviour.
3. **Is the 0.24-point olmOCR-bench lead real?** No peer model has been re-run under one harness.
   The vendor's own caveat ("not all models were rerun in the same environment") is exactly the
   size of the margin.
4. **How faithful is the MLX reproduction?** It reports the "full OXR pipeline with an MLX backend"
   but does not say which layout model it used, on what hardware, with what seed, or how the ± 1.0
   was derived. It is the only independent measurement, so its method matters more than most.
5. **Does the browser port run the layout stage?** The Space claims it reads "a whole page", but
   nothing says whether the 79 MB layout model is in the bundle or only per-image recognition is.
6. **Is `mlx-vlm` PR #2560 merged and released?** The port's card says pending; Webdiga reports it
   merged 2026-10-21. Neither was re-checked at capture.
7. **Is the 8-bit decoder good enough?** It is ~35% faster on long outputs with no benchmark run,
   and the uploader itself says to prefer bf16 "when exactness matters".
8. **What happens to documents sent to the free API?** No retention, logging or training-use
   statement exists beyond "requests are queued".
9. **How does it handle non-Latin scripts at scale?** The only evidence is example images; there is
   no language list and no per-language score.
10. **Can a third-party layout model be dropped in without retraining?** The vendor claims "any
    Layout Analysis model can work well with the OXR model" and ships a pluggable stage, but no
    substitution is demonstrated and the interface between the two stages is undocumented.

## Evidence status

**Evidence floor: met.** First-party material: the model card with repository metadata, the weights
file list and `config.json`, `docs/benchmark.md`, the GitHub README and file tree, the launch post,
the licence, and the free-API documentation — all captured 2026-10-27.

The **independent measurement** is the community MLX re-run of olmOCR-bench: 596 pages / 3,849 tests
with the official evaluator, 87.6 ± 1.0 against the vendor's 87.84. It is a **subset re-run**, so it
supports the level and says nothing about the rank; it is also self-published on a model card rather
than a report. QuantID's "#1 on olmOCR-bench" is a republished vendor number and is treated here as
a leaderboard fact, not as verification.

**Distribution is not part of the floor and is absent anyway.** No third-party host serves OXR, and
Section 3 of the licence is a structural reason why none will. The page therefore records
distribution as a fact about the model's terms rather than as a gap in the evidence.

**No direct tests have been run for this page.** Nothing here measures parsing accuracy on this
page's own documents, throughput on any GPU, the real VRAM floor below 24 GB, the 8-bit variant's
quality, or behaviour on non-Latin scripts. Every number is vendor-published, vendor-republished, or
one third party's subset run.

The next useful evidence would be: an independent full-set olmOCR-bench run including at least one
peer model, which is the only way to test the 0.24-point margin; a 12–16 GB card test to find the
real memory floor; the same page through the vendor pipeline, the MLX port and the browser build to
see whether the three agree on layout and reading order; a non-Latin document set to test the
unstated language claim; and a request against the free API with a document containing personal data
to see what the response says about retention.
