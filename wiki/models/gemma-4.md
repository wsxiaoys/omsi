# Gemma 4

Gemma 4 is Google DeepMind's fourth mainline open-weights generation: **five sizes across dense,
Mixture-of-Experts and one encoder-free "unified" architecture**, shipped in two waves — E2B, E4B,
26B A4B and 31B on **2026-03-31**, then the encoder-free **12B Unified** on **2026-06-03**
([releases](../../sources/gemma.ai/gemma-4-releases/2026-10-26.md)). The single most important
identity fact is that **"Gemma 4" names a family, not a model**: Artificial Analysis scores the
sizes from **8 to 17** on its Intelligence Index, publishing a separate row for each size and a
separate row again for thinking on and off
([AA 31B](../../sources/artificialanalysis.ai/gemma-4-31b/2026-10-26.md),
[AA E2B](../../sources/artificialanalysis.ai/gemma-4-e2b/2026-10-26.md)).

The second identity fact is the licence. Gemma 4 is the first mainline Gemma generation released
under **Apache 2.0** rather than the Gemma Terms of Use — and the change is structural, not just
marketing: the Terms of Use page routes Gemma 4 elsewhere and its Appendix omits Gemma 4
entirely, while the page it points at is unmodified Apache 2.0 text
([licence](../../sources/gemma.ai/gemma-4-license/2026-10-26.md)).

The family is comfortably inside the roster's one-year window (2025-10-26 to 2026-10-26): the
first four sizes shipped 2026-03-31, five months after the window opens. No out-of-window
exception applies.

## Identity

- **Canonical name:** Gemma 4. **Vendor/developer:** Google DeepMind, "Authors: Google DeepMind"
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **Entity scope:** one family page covering five sizes, because the sizes share one model card,
  one licence, one training cutoff and one tokenizer, and differ by tier — not by generation.
  Each size is addressable separately on every surface, so the page carries per-size detail
  rather than pretending the family is one model.
- **Release dates:**

| Event | Date | Source |
| --- | --- | --- |
| Gemma 4 E2B, E4B, 31B, 26B A4B released | **2026-03-31** | [releases](../../sources/gemma.ai/gemma-4-releases/2026-10-26.md) |
| Launch announcement ("Today, we are introducing Gemma 4") | **2026-04-02** | [launch blog](../../sources/blog.google/gemma-4-launch/2026-10-26.md) |
| Multi-Token Prediction drafters for the four sizes | **2026-04-16** | [releases](../../sources/gemma.ai/gemma-4-releases/2026-10-26.md) |
| Gemma 4 12B Unified released | **2026-06-03** | [releases](../../sources/gemma.ai/gemma-4-releases/2026-10-26.md), [12B blog](../../sources/blog.google/gemma-4-12b-launch/2026-10-26.md) |

- **Sizes and architectures** (vendor figures):

| Size | Architecture | Parameters | Context | Input modalities | Encoders |
| --- | --- | --- | --- | --- | --- |
| E2B | dense + per-layer embeddings | 2.3B effective, 5.1B with embeddings | 128K | text, image, audio, video | vision ~150M, audio ~300M |
| E4B | dense + per-layer embeddings | 4.5B effective, 8B with embeddings | 128K | text, image, audio, video | vision ~150M, audio ~300M |
| 12B Unified | dense, encoder-free | 11.95B | 256K | text, image, audio, video | none |
| 26B A4B | Mixture-of-Experts | 25.2B total, 3.8B active | 256K | text, image, video | vision ~550M |
| 31B | dense | 30.7B | 256K | text, image, video | vision ~550M |

  Sources: [model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md),
  [models index](../../sources/gemma.ai/gemma-models-index/2026-10-26.md). The 12B's "Unified"
  label means it has no multimodal encoders: "projecting raw image patches and audio waveforms
  directly into the LLM's embedding space through lightweight linear layers"
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).

- **Host endpoints and IDs:**

| Route | Identifier | Notes |
| --- | --- | --- |
| Gemini API | `gemma-4-31b-it`, `gemma-4-26b-a4b-it` | only the two largest sizes; "The smaller sizes are not hosted" ([Gemma API guide](../../sources/gemma.ai/gemma-4-gemini-api/2026-10-26.md)) |
| Google Cloud (Vertex / Agent Platform) | "Gemma 4 26B" | only the 26B has a price row ([Vertex pricing](../../sources/cloud.google.com/gemma-4-vertex-pricing/2026-10-26.md)) |
| OpenRouter | `google/gemma-4-31b-it` (slug `…-20260402`), `google/gemma-4-26b-a4b-it` (slug `…-20260403`), each with a `:free` alias | 15 and 14 endpoints respectively ([31B](../../sources/openrouter.ai/gemma-4-31b/2026-10-26.md), [26B](../../sources/openrouter.ai/gemma-4-26b-a4b/2026-10-26.md)) |
| Together AI | `google/gemma-4-31B-it` | serverless, FP8 ([Together](../../sources/together.ai/gemma-4-31b/2026-10-26.md)) |
| Fireworks AI | `accounts/fireworks/models/gemma-4-31b-it` | **on-demand only**, serverless "Not Supported" ([Fireworks](../../sources/fireworks.ai/gemma-4-31b-it/2026-10-26.md)) |
| Hugging Face | `google/gemma-4-31B-it`, `-26B-A4B-it`, `-12B-it`, `-E4B-it`, `-E2B-it` | weights, `license: apache-2.0` ([HF](../../sources/huggingface.co/gemma-4-12b-it/2026-10-26.md)) |
| Local | Ollama, llama.cpp, LM Studio, MLX, vLLM, SGLang, LiteRT-LM, Keras | self-hosted, including official QAT and mobile checkpoints ([overview](../../sources/gemma.ai/gemma-4-overview/2026-10-26.md), [launch blog](../../sources/blog.google/gemma-4-launch/2026-10-26.md)) |

- **Siblings and neighbours:**
  - `Gemma 3` — the previous generation (2025-03-10, 270M/1B/4B/12B/27B), text and image only,
    128K context (32K on the 1B and 270M), Gemma Terms of Use. See the distinction section below.
  - `Gemma 3n` E2B / E4B — 2025 on-device models that **reuse the E2B and E4B labels**, already
    audio-capable and already built on effective parameters and PLE
    ([Gemma 3n card](../../sources/gemma.ai/gemma-3n-model-card/2026-10-26.md)).
  - `DiffusionGemma` — an experimental text-diffusion model listed in the family tree after
    Gemma 4; a separate model with its own page, not a Gemma 4 tier
    ([models index](../../sources/gemma.ai/gemma-models-index/2026-10-26.md)).
  - `EmbeddingGemma 2` (2026-10-06), `FunctionGemma`, `ShieldGemma 2`, `TranslateGemma`,
    `MedGemma 1.5` — variants around the family, not Gemma 4 sizes
    ([releases](../../sources/gemma.ai/gemma-4-releases/2026-10-26.md)).

### Gemma 4 versus Gemma 3

The two generations differ on every axis that changes a recommendation, so a claim about one does
not transfer to the other:

| | Gemma 3 | Gemma 4 |
| --- | --- | --- |
| Licence | Gemma Terms of Use, with a Prohibited Use Policy incorporated by reference ([Terms](../../sources/gemma.ai/gemma-4-license/2026-10-26.md)) | Apache 2.0, no use-restriction schedule ([licence](../../sources/gemma.ai/gemma-4-license/2026-10-26.md)) |
| Inputs | text and image only, "Images, normalized to 896 x 896 resolution and encoded to 256 tokens each" ([Gemma 3 card](../../sources/gemma.ai/gemma-3-model-card/2026-10-26.md)) | text, image, video; plus native audio on E2B/E4B/12B ([models index](../../sources/gemma.ai/gemma-models-index/2026-10-26.md)) |
| Context | 128K for 4B/12B/27B, 32K for 1B/270M ([Gemma 3 card](../../sources/gemma.ai/gemma-3-model-card/2026-10-26.md)) | 128K for E2B/E4B, 256K for 12B/26B A4B/31B ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)) |
| Thinking | none; the comparison column is labelled "Gemma 3 27B (no think)" ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)) | configurable via a `<\|think\|>` control token ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)) |
| Sizes | 270M, 1B, 4B, 12B, 27B | E2B, E4B, 12B, 26B A4B, 31B |
| Native system role | not documented in the captured card | "Gemma 4 introduces native support for the system role" ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)) |

Note the two label collisions a reader will hit: **Gemma 3 12B and Gemma 4 12B are different
models**, and **Gemma 3n E2B/E4B and Gemma 4 E2B/E4B are different models** from different years.

### Identity ambiguity

- **Two dates for one launch.** The release history says 2026-03-31; the launch blog says
  2026-04-02; the hosts' catalogue timestamps are 2026-04-02 16:48 UTC (31B) and 2026-04-03
  14:53 UTC (26B A4B); Artificial Analysis says only "Released April 2026". Nothing explains the
  two-day gap, and Hugging Face repository creation dates (2026-03-02 for the E-sizes,
  2026-03-11 for the large ones) are earlier still and therefore uninformative — a repo can be
  created before it is published ([HF](../../sources/huggingface.co/gemma-4-12b-it/2026-10-26.md)).
- **"Gemma 4 12B" vs "Gemma 4 12B Unified".** Google's docs and card say "12B Unified"; the blog
  title, AA and OpenRouter say "12B". Same model.
- **The launch announced four sizes, the docs describe five.** The 2026-04-02 blog says "We are
  releasing Gemma 4 in four versatile sizes" and never mentions a 12B; the docs overview still
  says the family "spans four distinct architectures" while tabulating five sizes
  ([launch blog](../../sources/blog.google/gemma-4-launch/2026-10-26.md),
  [overview](../../sources/gemma.ai/gemma-4-overview/2026-10-26.md)). The 12B is a second,
  separately announced release, not a launch size.
- **Three parameter counts for the 31B.** Google's card says 30.7B; the published Hugging Face
  tensors total 31.27B; Fireworks lists 32.2B
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md),
  [HF](../../sources/huggingface.co/gemma-4-12b-it/2026-10-26.md),
  [Fireworks](../../sources/fireworks.ai/gemma-4-31b-it/2026-10-26.md)). The 26B A4B has the same
  problem at smaller scale (card 25.2B, tensors 25.81B).
- **Reasoning is a leaderboard split, not an ID.** Artificial Analysis publishes separate
  "reasoning" and "non-reasoning" rows with separate comparison classes for the same weights; the
  31B scores 15 with thinking on and 14 with it off, inside AA's own "Estimated" marking
  ([AA reasoning](../../sources/artificialanalysis.ai/gemma-4-31b/2026-10-26.md),
  [AA non-reasoning](../../sources/artificialanalysis.ai/gemma-4-31b-non-reasoning/2026-10-26.md)).

## Current assessment

- **A real generation, not a repackaging.** Gemma 4 changes the licence (Apache 2.0), the
  architecture (an encoder-free 12B, a 26B MoE), the context (128K/256K against Gemma 3's
  128K/32K), the modalities (video everywhere, audio on three sizes) and adds a thinking mode
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **Its position is "best open model per gigabyte", not "frontier".** On AA's composite the
  family spans **8 (E2B) → 9 (E4B) → 14 (12B) → 15 (31B) → 17 (26B A4B)**, against a median of 8
  for comparable open-weight models — and against 58 for Claude Opus 5.5, 56 for Claude Sonnet
  5.5 and 53 for Gemini 4 Argon on the same board
  ([AA 31B](../../sources/artificialanalysis.ai/gemma-4-31b/2026-10-26.md),
  [AA 26B](../../sources/artificialanalysis.ai/gemma-4-26b-a4b/2026-10-26.md),
  [AA 12B](../../sources/artificialanalysis.ai/gemma-4-12b/2026-10-26.md),
  [AA E4B](../../sources/artificialanalysis.ai/gemma-4-e4b/2026-10-26.md),
  [AA E2B](../../sources/artificialanalysis.ai/gemma-4-e2b/2026-10-26.md),
  [shared leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)).
- **The MoE beats the dense on the composite but loses on coding.** AA gives 26B A4B 17 and 31B
  15; OpenRouter's republished AA sub-indices give the 31B the higher coding index (43.4 vs 39.3)
  while the 26B keeps the higher overall index (16.7 vs 14.7)
  ([26B](../../sources/openrouter.ai/gemma-4-26b-a4b/2026-10-26.md),
  [31B](../../sources/openrouter.ai/gemma-4-31b/2026-10-26.md)). Four of the six captured index
  values carry an "Estimated" marker, so a one-to-three-point ordering between sizes is not a
  settled fact.
- **Cost per task is the family's actual selling point.** AA measures the 31B at 49M tokens for a
  full index run (median 82M) and the E4B at 20M (median 82M), giving $0.00 and $0.01 per task
  respectively; on AA's own board the 31B ranks **first of 23** on cost per task
  ([AA 31B](../../sources/artificialanalysis.ai/gemma-4-31b/2026-10-26.md),
  [AA E4B](../../sources/artificialanalysis.ai/gemma-4-e4b/2026-10-26.md)).
- **Status: current and actively extended.** Within seven months of launch Google added MTP
  drafters (April), the 12B (June), official QAT and mobile checkpoints, and a Technical Report
  (arXiv v2 2026-07-24). No deprecation or retirement date exists on any captured page
  ([releases](../../sources/gemma.ai/gemma-4-releases/2026-10-26.md),
  [overview](../../sources/gemma.ai/gemma-4-overview/2026-10-26.md),
  [report](../../sources/arxiv.org/gemma-4-technical-report/2026-10-26.md)).

## Documented capabilities

Vendor and host documentation, not test results.

- **Modalities.** Input: text and image on every size; audio additionally on E2B, E4B and 12B;
  video on every size. Output: text. "The 26B A4B and 31B models accept video as individual frames
  — that is, as images — but do not process audio"
  ([models index](../../sources/gemma.ai/gemma-models-index/2026-10-26.md)). OpenRouter encodes
  this as `text+image+video->text` for both hosted sizes
  ([31B](../../sources/openrouter.ai/gemma-4-31b/2026-10-26.md)); AA lists "text, image, and
  video" for the 31B and "text, image, speech, and video" for the 12B and E-sizes
  ([AA 31B](../../sources/artificialanalysis.ai/gemma-4-31b/2026-10-26.md),
  [AA 12B](../../sources/artificialanalysis.ai/gemma-4-12b/2026-10-26.md),
  [AA E4B](../../sources/artificialanalysis.ai/gemma-4-e4b/2026-10-26.md)).
- **Context.** 128K for E2B/E4B, 256K (262,144 tokens) for 12B/26B A4B/31B. OpenRouter's
  `context_length` is 262144 for both hosted sizes and Fireworks lists 262k
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md),
  [OpenRouter 31B](../../sources/openrouter.ai/gemma-4-31b/2026-10-26.md),
  [Fireworks](../../sources/fireworks.ai/gemma-4-31b-it/2026-10-26.md)).
- **Long-context mechanism.** "a hybrid attention mechanism that interleaves local sliding window
  attention with full global attention, ensuring the final layer is always global ... global
  layers feature unified Keys and Values, and apply Proportional RoPE (p-RoPE)". Sliding window is
  512 tokens on E2B/E4B and 1024 on the rest
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **Reasoning.** Thinking is controlled by a token, not a parameter: "Thinking is enabled by
  including the `<|think|>` token at the start of the system prompt. To disable thinking, remove
  the token", with reasoning emitted between `<|channel>thought` and `<|channel|>`. On the Gemini
  API the same switch appears as `thinking_level` `"high"` or `"minimal"`
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md),
  [Gemini API guide](../../sources/gemma.ai/gemma-4-gemini-api/2026-10-26.md)). At the router,
  `reasoning` is present but not mandatory and off by default
  ([OpenRouter 31B](../../sources/openrouter.ai/gemma-4-31b/2026-10-26.md)).
- **Tool use.** "Native function calling and structured JSON output for agentic workflows";
  every OpenRouter endpoint for both sizes advertises `tools` and `tool_choice`, and Together
  names "native function calling for agentic workflows"
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md),
  [OpenRouter 26B](../../sources/openrouter.ai/gemma-4-26b-a4b/2026-10-26.md),
  [Together](../../sources/together.ai/gemma-4-31b/2026-10-26.md)).
- **Vision.** Variable aspect ratio and resolution via a configurable visual token budget of
  "70, 140, 280, 560, and 1120" tokens per image; documented tasks include OCR, document/PDF
  parsing, screen and UI understanding, chart comprehension, handwriting and pointing
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **Audio and video limits.** "Audio supports a maximum length of 30 seconds. Video supports a
  maximum of 60 seconds assuming the images are processed at one frame per second." Audio covers
  ASR and speech translation
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **Multi-Token Prediction.** Every size ships "a dedicated draft model for speculative decoding";
  the 12B "comes equipped with Multi-Token Prediction (MTP) drafters to reduce latency". MTP
  arrived as a separate release on 2026-04-16
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md),
  [12B blog](../../sources/blog.google/gemma-4-12b-launch/2026-10-26.md),
  [releases](../../sources/gemma.ai/gemma-4-releases/2026-10-26.md)).
- **Quantization.** Official QAT checkpoints in GGUF (`-qat-q4_0-gguf`), compressed-tensors
  (`-qat-w4a16-ct`), mobile (`-qat-mobile-transformers` / `-qat-mobile-ct`) and unquantized
  QAT variants for speculative decoding
  ([overview](../../sources/gemma.ai/gemma-4-overview/2026-10-26.md)).
- **Languages.** "pre-trained on 140+ languages" with "out-of-the-box support for 35+ languages"
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **Knowledge cutoff.** "with a cutoff date of January 2025" — a single cutoff for the family,
  including the 12B released 17 months later
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).

### Vendor benchmark rows

Google's own table, instruction-tuned models, from the model card
([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)):

| Benchmark | 31B | 26B A4B | 12B | E4B | E2B | Gemma 3 27B (no think) |
| --- | --- | --- | --- | --- | --- | --- |
| MMLU Pro | 85.2% | 82.6% | 77.2% | 69.4% | 60.0% | 67.6% |
| AIME 2026 (no tools) | 89.2% | 88.3% | 77.5% | 42.5% | 37.5% | 20.8% |
| LiveCodeBench v6 | 80.0% | 77.1% | 72.0% | 52.0% | 44.0% | 29.1% |
| Codeforces ELO | 2150 | 1718 | 1659 | 940 | 633 | 110 |
| GPQA Diamond | 84.3% | 82.3% | 78.8% | 58.6% | 43.4% | 42.4% |
| Tau2 (avg of 3) | 76.9% | 68.2% | 69.0% | 42.2% | 24.5% | 16.2% |
| HLE (no tools) | 19.5% | 8.7% | 5.2% | – | – | – |
| HLE (with search) | 26.5% | 17.2% | – | – | – | – |
| BigBench Extra Hard | 74.4% | 64.8% | 53.0% | 33.1% | 21.9% | 19.3% |
| MMMLU | 88.4% | 86.3% | 83.4% | 76.6% | 67.4% | 70.7% |
| MMMU Pro | 76.9% | 73.8% | 69.1% | 52.6% | 44.2% | 49.7% |
| OmniDocBench 1.5 (edit distance, lower better) | 0.131 | 0.149 | 0.164 | 0.181 | 0.290 | 0.365 |
| MATH-Vision | 85.6% | 82.4% | 79.7% | 59.5% | 52.4% | 46.0% |
| MedXPertQA MM | 61.3% | 58.1% | 48.7% | 28.7% | 23.5% | – |
| CoVoST | – | – | 38.5 * | 35.54 | 33.47 | – |
| FLEURS (lower better) | – | – | 0.069 * | 0.08 | 0.09 | – |
| MRCR v2 8-needle 128k | 66.4% | 44.1% | 43.4% | 25.4% | 19.1% | 13.5% |

`*` excludes Chinese. These are Google's figures: no harness description, task counts or
confidence intervals are published, and the only competitor column is the previous generation.
Two things the table does establish clearly: the 31B/26B gap is small on text benchmarks and
large on long-context (MRCR 66.4% vs 44.1%), and the E-sizes are not small-model-scale
equivalents of the large ones on maths (AIME 42.5% and 37.5% against 88–89%).

Google's marketing claims about third-party arenas are separate and unverified here: the launch
blog asserts the 31B "currently ranking as the #3 open model in the world on the industry-standard
Arena AI text leaderboard" and the 26B "#6", with the chart captioned "as of 4/1"
([launch blog](../../sources/blog.google/gemma-4-launch/2026-10-26.md)). No Arena capture exists
in this repository to check those ranks.

### Independent measurement

Artificial Analysis, Intelligence Index v4.3.2 (AA-Briefcase v1.1, GDPval-AA v2.1,
AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt,
AA-Omniscience, AA-LCR v1.1):

| Size | Index | AA rank (class) | Output speed | Tokens on index | Cost/task |
| --- | --- | --- | --- | --- | --- |
| 26B A4B (reasoning) | 17 * | #15 / 141 | 94.4 tok/s | N/A | N/A |
| 31B (reasoning) | 15 | #19 / 141 | 35.3 tok/s | 49M | $0.00 |
| 12B (reasoning) | 14 * | #20 / 141 | 111.5 tok/s | N/A | N/A |
| E4B (reasoning) | 9 | #51 / 141 | 46.8 tok/s | 20M | $0.01 |
| E2B (reasoning) | 8 * | #64 / 141 | N/A | N/A | N/A |
| 31B (non-reasoning) | 14 * | #6 / 74 | 54.3 tok/s | N/A | N/A |

`*` = AA marks the value "Estimated". Sources:
[26B](../../sources/artificialanalysis.ai/gemma-4-26b-a4b/2026-10-26.md),
[31B](../../sources/artificialanalysis.ai/gemma-4-31b/2026-10-26.md),
[12B](../../sources/artificialanalysis.ai/gemma-4-12b/2026-10-26.md),
[E4B](../../sources/artificialanalysis.ai/gemma-4-e4b/2026-10-26.md),
[E2B](../../sources/artificialanalysis.ai/gemma-4-e2b/2026-10-26.md),
[31B non-reasoning](../../sources/artificialanalysis.ai/gemma-4-31b-non-reasoning/2026-10-26.md).

The ranks are not comparable across rows: AA compares reasoning models "across both reasoning and
non-reasoning" and non-reasoning models only against other non-reasoning models, and it buckets
open-weight models by size class (Tiny ≤4B, Small 4B–40B, Medium 40B–150B). The captured pages
do not agree on the class either: every Gemma 4 page reports "143 models in this class" while the
rank denominators read "/141", and the non-reasoning page reads "/74". A rank in this family is
class-scoped, not a global position — on the global board the frontier sits at 52–58.

## Limitations and constraints

- **Audio is capped at 30 seconds and video at 60 seconds.** Neither is a streaming or long-form
  capability; video is frames at 1 fps, not native video tokens
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **No audio on the two largest sizes.** 26B A4B and 31B are text/image/video only, so the
  models a hosted API actually serves cannot do the audio tasks the family advertises
  ([models index](../../sources/gemma.ai/gemma-models-index/2026-10-26.md),
  [Gemini API guide](../../sources/gemma.ai/gemma-4-gemini-api/2026-10-26.md)).
- **Small context on the small sizes.** E2B and E4B stop at 128K while the rest reach 256K
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **Knowledge cutoff January 2025** for every size, including the June-2026 12B, so
  recency-sensitive work needs retrieval regardless of size
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **Disabling thinking changes the output shape, and not the same way on every size.** Google's
  rule: "For all models except for the E2B and E4B variants, if thinking is disabled, the model
  will still generate the tags but with an empty thought block: `<|channel>thought\n<channel|>`".
  So on 12B, 26B A4B and 31B a thinking-off response still contains the channel markers, while on
  E2B and E4B it does not — a parser written against one size will mis-handle the other
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **Host limits differ for the same weights.** Output caps on the 31B range from 8,192 to 262,141
  tokens and context from 131,072 to 262,144 across OpenRouter providers; one 26B provider
  advertises half the context of the rest
  ([OpenRouter 31B](../../sources/openrouter.ai/gemma-4-31b/2026-10-26.md),
  [OpenRouter 26B](../../sources/openrouter.ai/gemma-4-26b-a4b/2026-10-26.md)).
- **Fireworks does not serve it serverless.** "Serverless: Not Supported"; the 31B there is
  on-demand GPU deployment only, with LoRA fine-tuning
  ([Fireworks](../../sources/fireworks.ai/gemma-4-31b-it/2026-10-26.md)).
- **The Gemini API free tier is trained on.** Gemma 4's Gemini-API row shows "Used to improve our
  products: Yes" on the free tier and no paid tier at all, so there is no paid option that opts
  out ([Gemini API pricing](../../sources/google.dev/gemma-4-pricing/2026-10-26.md)).
- **No Google list price for the 31B.** Google Cloud prices only "Gemma 4 26B"; the 31B has no
  Google per-token price on either captured Google price page
  ([Vertex pricing](../../sources/cloud.google.com/gemma-4-vertex-pricing/2026-10-26.md),
  [Gemini API pricing](../../sources/google.dev/gemma-4-pricing/2026-10-26.md)).
- **Safety results are qualitative.** The card claims "major improvements in all categories of
  content safety relative to previous Gemma models" with "unjustified refusals low", tested
  "without safety filters", and publishes no rates
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)).
- **Modality metadata disagrees across surfaces.** AA says the E2B "outputs text and image";
  Google says every size generates text output only, and no other source lists image generation
  ([AA E2B](../../sources/artificialanalysis.ai/gemma-4-e2b/2026-10-26.md),
  [model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md)). Together describes the
  31B as "text and image input" while OpenRouter lists video as an input modality
  ([Together](../../sources/together.ai/gemma-4-31b/2026-10-26.md),
  [OpenRouter 31B](../../sources/openrouter.ai/gemma-4-31b/2026-10-26.md)).

## Access, pricing, licensing

Prices are list prices observed on 2026-10-26, USD per 1M tokens. This is an open-weights model,
so the primary access route is self-hosting; hosted prices are secondary.

| Route | Sizes | Input | Output | Basis |
| --- | --- | --- | --- | --- |
| Gemini API | 31B, 26B A4B | **free** | **free** | free tier only; paid tier "Not available" ([pricing](../../sources/google.dev/gemma-4-pricing/2026-10-26.md)) |
| Google Cloud (Vertex) | 26B | $0.15 | $0.60 | per token; cache hit $0.015 ([pricing](../../sources/cloud.google.com/gemma-4-vertex-pricing/2026-10-26.md)) |
| OpenRouter, 31B | 31B | $0.10–$0.75 | $0.34–$1.00 | 15 third-party endpoints, fp4/bf16/fp8; no Google endpoint ([OpenRouter](../../sources/openrouter.ai/gemma-4-31b/2026-10-26.md)) |
| OpenRouter, 26B A4B | 26B A4B | $0.042–$0.15 | $0.22–$0.60 | 14 endpoints; the $0.15/$0.60 endpoint is Google's ([OpenRouter](../../sources/openrouter.ai/gemma-4-26b-a4b/2026-10-26.md)) |
| Together AI | 31B | $0.20 | $0.50 | serverless, FP8 ([Together](../../sources/together.ai/gemma-4-31b/2026-10-26.md)) |
| Fireworks AI | 31B | not published | not published | on-demand GPU only, no serverless tier ([Fireworks](../../sources/fireworks.ai/gemma-4-31b-it/2026-10-26.md)) |
| Local / self-hosted | all five | $0 | $0 | Apache 2.0 weights ([licence](../../sources/gemma.ai/gemma-4-license/2026-10-26.md)) |

- **The cheapest hosted route is free, and it is Google's.** Both the Gemini API and AA's
  provider table put Google at $0.00 cost per task for the 31B, and AA's 11 measured providers
  span $0.00–$0.54 cost per task and 9–501 tokens/s on the same weights
  ([Gemini API pricing](../../sources/google.dev/gemma-4-pricing/2026-10-26.md),
  [AA providers](../../sources/artificialanalysis.ai/gemma-4-31b/2026-10-26.md)).
- **Price spread for identical weights is large.** The 31B runs $0.10–$0.75 input (7.5×) across
  OpenRouter endpoints; the 26B A4B runs $0.042–$0.15 (3.6×). Quantisation does not explain the
  spread on its own: fp8 endpoints appear near both ends of both ranges, so a cheap endpoint is
  not simply a more aggressive quantisation
  ([31B](../../sources/openrouter.ai/gemma-4-31b/2026-10-26.md),
  [26B](../../sources/openrouter.ai/gemma-4-26b-a4b/2026-10-26.md)).
- **Self-hosting is the documented default, and the memory budget is published.** Google gives
  approximate load footprints per size and quantisation: 31B at 69.9 GB BF16 / 17.5 GB Q4_0, 26B
  A4B at 57.7 / 14.4, 12B at 26.7 / 6.7, E4B at 17.9 / 4.5, E2B at 11.4 / 2.9, plus mobile
  variants at 2.5 GB and 1.1 GB
  ([overview](../../sources/gemma.ai/gemma-4-overview/2026-10-26.md)). The launch blog claims
  bfloat16 31B weights "fit efficiently on a single 80GB NVIDIA H100 GPU"
  ([launch blog](../../sources/blog.google/gemma-4-launch/2026-10-26.md)), and the 12B is
  positioned at "16GB of VRAM or unified memory"
  ([12B blog](../../sources/blog.google/gemma-4-12b-launch/2026-10-26.md)).
- **Licence: Apache 2.0, for all five sizes.** Confirmed three ways — the model card header, the
  Hugging Face `license: apache-2.0` tag on every checkpoint, and a bare Apache 2.0 licence page
  with no Gemma-specific use-restriction schedule
  ([licence](../../sources/gemma.ai/gemma-4-license/2026-10-26.md),
  [HF](../../sources/huggingface.co/gemma-4-12b-it/2026-10-26.md)). This is a material change from
  Gemma 1, 1.1, 2, 3 and 3n, which the Terms of Use Appendix still lists and which therefore keep
  the incorporated Prohibited Use Policy.
- **Commercial use is not restricted by the licence**, but the open question in the next section
  means a redistributor should read the Terms page rather than rely on the licence page alone.

## Unresolved questions

- **2026-03-31 or 2026-04-02?** The release history and the launch blog disagree by two days and
  neither acknowledges the other; host timestamps side with the blog
  ([releases](../../sources/gemma.ai/gemma-4-releases/2026-10-26.md),
  [launch blog](../../sources/blog.google/gemma-4-launch/2026-10-26.md)).
- **Does the Gemma Prohibited Use Policy still apply to Gemma 4?** The Terms of Use exclude Gemma 4
  from their scope, but the Prohibited Use Policy remains linked in the same "Legal" navigation
  and the licence page does not mention it. No captured page answers this
  ([licence](../../sources/gemma.ai/gemma-4-license/2026-10-26.md)).
- **How big is the 31B really?** 30.7B (card) vs 31.27B (published tensors) vs 32.2B (Fireworks).
  Whether the card counts non-embedding parameters is not stated
  ([model card](../../sources/gemma.ai/gemma-4-model-card/2026-10-26.md),
  [Fireworks](../../sources/fireworks.ai/gemma-4-31b-it/2026-10-26.md)).
- **Is the E2B's "text and image" output an AA error?** AA's own spec block contradicts every
  first-party page, and no explanation is offered
  ([AA E2B](../../sources/artificialanalysis.ai/gemma-4-e2b/2026-10-26.md)).
- **Is Search grounding available for Gemma 4 on the Gemini API?** The serving guide shows a
  grounding example; the price schedule says "Grounding with Google Search: Not available"
  ([Gemini API guide](../../sources/gemma.ai/gemma-4-gemini-api/2026-10-26.md),
  [pricing](../../sources/google.dev/gemma-4-pricing/2026-10-26.md)).
- **What does AA's "Estimated" marker cover?** Four of the six index values captured are marked
  estimated, with no statement of the estimation method or sample size
  ([AA 26B](../../sources/artificialanalysis.ai/gemma-4-26b-a4b/2026-10-26.md)).
- **Who actually serves the 12B and the E-sizes?** OpenRouter carries only the 31B and 26B A4B,
  Google hosts only those two, and Fireworks and Together carry only the 31B — yet AA quotes
  provider prices for the 12B ($0.10/$0.30) and E4B ($0.02/$0.10) without naming the provider.
  Either an unnamed host serves them or those prices are derived rather than observed; the
  captures do not say which
  ([OpenRouter 31B](../../sources/openrouter.ai/gemma-4-31b/2026-10-26.md),
  [Gemini API guide](../../sources/gemma.ai/gemma-4-gemini-api/2026-10-26.md),
  [AA 12B](../../sources/artificialanalysis.ai/gemma-4-12b/2026-10-26.md),
  [AA E4B](../../sources/artificialanalysis.ai/gemma-4-e4b/2026-10-26.md)).
- **Is 262k or 256k the context?** AA reports 262k for the 12B and 256k for the others; both are
  262,144 and the difference is AA's rounding, not a model difference
  ([AA 12B](../../sources/artificialanalysis.ai/gemma-4-12b/2026-10-26.md)).
- **Do the Arena AI ranks (#3 and #6 open models) hold?** The claim is Google's, dated "as of
  4/1", with no arena capture in this repository to verify it
  ([launch blog](../../sources/blog.google/gemma-4-launch/2026-10-26.md)).

## Evidence status

Floor met, and comfortably. **First-party:** the Gemma 4 model card, the family overview, the
dated release history, the Apache 2.0 licence page and the Gemma Terms of Use, the Gemini-API
serving guide, the family index, and the Gemma 3 and 3n cards (all `gemma.ai`, captured
2026-10-26); the two launch announcements (`blog.google`); the Gemini API and Google Cloud price
schedules (`google.dev`, `cloud.google.com`); the technical report abstract (`arxiv.org`); and the
Hugging Face checkpoints (`huggingface.co`). **Independent host records:** OpenRouter for both
hosted sizes, Together AI and Fireworks AI for the 31B. **Independent measurement:** Artificial
Analysis per-model pages for all five sizes plus the non-reasoning 31B.

No direct tests were run for this page. Every capability statement is documentation; every
benchmark number is either Google's own or Artificial Analysis' published measurement, and the two
are never mixed into a single score. Two limits on the evidence: the model card is an undated
living document that has been edited since launch (it documents a June release), and AA's index is
a composite whose per-benchmark sub-scores were not extractable. All captures are dated
2026-10-26.
