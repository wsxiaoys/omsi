# Granite 4.2

IBM's open-weights reasoning family, released **2026-08-25** in three dense sizes — 3B, 8B and
30B — under Apache 2.0
([technical blog](../../sources/huggingface.co/granite-4-2-technical-blog/2026-10-26.md),
[8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md)). IBM calls it
"our first family of dense, decoder-only reasoning LLMs", post-trained from Granite 4.1 base
models. The roster's single row covers a family of three checkpoints; this page keeps them
together because they share one release, one licence, one architecture and one benchmark table,
and separates them wherever a recommendation differs — the 3B in particular is not a small 8B.

The distinctive facts for a reader deciding today: every size ships as ungated Apache-2.0
weights with four quantisation formats plus GGUF and MLX builds, three independent hosts serve
it (including a local runtime), and its independent composite score is low. Artificial Analysis
scores the 8B at **11.1** on its Intelligence Index with an **Agentic Index of 1.3**
([relayed by OpenRouter](../../sources/openrouter.ai/granite-4-2-8b/2026-10-26.md)) — a profile
that does not support the vendor's "competitive with larger, thinking models" framing
([IBM product page](../../sources/ibm.com/granite-4-2-product-page/2026-10-26.md)).

## Identity

- **Canonical name:** Granite 4.2. Vendor-written as "Granite 4.2" in prose and
  `granite-4.2-<size>` in model IDs.
- **Vendor:** IBM, Granite Team. Weights published under the `ibm-granite` organisation on
  Hugging Face.
- **Checkpoints (the whole family):** `ibm-granite/granite-4.2-3b`,
  `ibm-granite/granite-4.2-8b`, `ibm-granite/granite-4.2-30b`
  ([collection](../../sources/huggingface.co/granite-4-2-collection/2026-10-26.md)). All three
  are instruct/reasoning checkpoints; there is **no 4.2 base model** — the pre-trained
  artefacts are the Granite 4.1 bases.
- **Release date:** 2026-08-25, stated identically on all three model cards ("Release Date |
  August 25, 2026") and in the technical blog. The Hugging Face repositories were created
  2026-08-07 and last modified 2026-09-02 to 2026-10-20
  ([8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md),
  [collection](../../sources/huggingface.co/granite-4-2-collection/2026-10-26.md)).
- **Derivatives:** each size also ships as `-fp8`, `-GGUF`, `-nvfp4`, `-mxfp4`,
  `-bf16-mlx`, `-q8-mlx` and `-q4-mlx` repositories, all published 2026-09-02
  ([collection](../../sources/huggingface.co/granite-4-2-collection/2026-10-26.md),
  [blog](../../sources/huggingface.co/granite-4-2-technical-blog/2026-10-26.md)).
- **Host endpoints captured:**
  - **DeepInfra** — all three sizes, `ibm-granite/granite-4.2-{3b,8b,30b}`, 131,072 context
    each ([DeepInfra](../../sources/deepinfra.com/granite-4-2-family-availability/2026-10-26.md)).
  - **OpenRouter** — 8B only, `ibm-granite/granite-4.2-8b`, canonical slug
    `ibm-granite/granite-4.2-8b-20260831`, served by two bf16 endpoints (CoreWeave,
    DeepInfra) ([OpenRouter](../../sources/openrouter.ai/granite-4-2-8b/2026-10-26.md)).
  - **Ollama** — all three sizes plus `:latest` (which is the 8B), 128K context per tag, as
    quantised local weights ([Ollama](../../sources/ollama.com/granite4-2/2026-10-26.md)).
  - IBM's product page additionally names "Hugging Face · Ollama · LM Studio · watsonx.ai ·
    OpenRouter · Replicate · Weights & Biases · Unsloth · AnythingLLM" as routes
    ([IBM product page](../../sources/ibm.com/granite-4-2-product-page/2026-10-26.md)), but
    only the three above were captured. No Replicate or watsonx.ai record exists in this
    repository, and the watsonx documentation returned HTTP 403 to an unauthenticated fetch.
- **Aliases and labels:** roster label "Granite 4.2" is the vendor's own family name, not a
  model ID. The only per-size identifiers are the `granite-4.2-<size>` Hugging Face and host
  IDs above. OpenRouter's dated slug is host-side and undated by the vendor.
- **Siblings / predecessors:** Granite 4.1 (`granite-4.1-3b-base`, `-8b-base`, `-30b-base`)
  are the pre-trained bases the 4.2 checkpoints are post-trained from
  ([blog](../../sources/huggingface.co/granite-4-2-technical-blog/2026-10-26.md)). IBM's
  product page lists separate Granite Speech, Vision, Guardian, Embedding and Time Series
  families, but **no Granite 4.2 vision, speech or guardian sibling exists** in the language
  collection ([collection](../../sources/huggingface.co/granite-4-2-collection/2026-10-26.md)).

### Is Granite 4.2 distinct from 4.0 and 4.1?

**From 4.1: yes, and the relationship is documented in one direction only.** Granite 4.2 is a
post-training generation, not a new pre-training run: the blog states the 4.2 models "are
post-trained from Granite-4.1 base models", and the 4.1 bases "were pre-trained from scratch
on approximately 15 trillion tokens using a five-phase training strategy"
([blog](../../sources/huggingface.co/granite-4-2-technical-blog/2026-10-26.md)). Every 4.2
card's `base_model` field names the matching 4.1 base
([8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md)). What 4.2 adds
on top is the reasoning/agentic post-training ladder: RLVR ×2 (×3 for 30B), skill boosters, an
agentic-RL block for the 8B and 30B only, and a final RLHF stage. The 512K context extension
is inherited from the 4.1 base pre-training, not introduced here.

**From 4.0: unresolved, and this page does not guess.** No captured source mentions Granite
4.0 at all — not the blog, not the cards, not the collection, not IBM's product page. Whether
4.2 supersedes a 4.0 line, or whether "4.0" names an earlier pre-training generation whose
bases were later revised to 4.1, cannot be established from the evidence held here. The IBM
product page's language-model content is the 4.2 table alone, which establishes that 4.2 is
**current** but says nothing about 4.0.

**One page, three checkpoints.** The sizes are not interchangeable and are documented as
divergent tiers: the 3B runs no agentic-RL stage and reports NA on every agentic-coding
benchmark, while the 8B and 30B add SWE, terminal and search agents
([blog](../../sources/huggingface.co/granite-4-2-technical-blog/2026-10-26.md)). If the 3B
recurs as a distinct recommendation, it should be split out; for now the shared release and
shared evidence keep them on one page, with per-size statements labelled.

## Current assessment

**A real generation change, but not a capability leap, and the family's flagship tier is
already being withdrawn by the only host that served it.**

- **Distinct, not a repackaging.** The 4.2 checkpoints add three thinking modes, reasoning-
  augmented tool calling, and an agentic-RL block that the 4.1 bases did not have. The
  architecture is the same family (dense GQA transformer, 131,072 sequence length, RoPE
  θ = 10,000,000), so the delta is post-training, not scale.
- **Positioned as an on-prem/enterprise option, and that is the honest reading.** Apache 2.0,
  no access gate, four quantisation formats, MLX and GGUF builds, and a 3B that fits a laptop.
  IBM's own marketing claims competitiveness "with larger, thinking models … at a fraction of
  the cost" without naming a comparator
  ([IBM product page](../../sources/ibm.com/granite-4-2-product-page/2026-10-26.md)); the
  independent numbers do not support the first half of that claim.
- **The independent composite is low.** Intelligence Index **11.1**, Coding **22.4**, Agentic
  **1.3**, with Terminal-Bench 4.0 at **0.0%** and GDPval-AA at **0.0**
  ([AA figures relayed by OpenRouter](../../sources/openrouter.ai/granite-4-2-8b/2026-10-26.md)).
  Those are 8B figures only — no independent measurement of the 3B or 30B was captured.
- **Host-side support is narrowing.** DeepInfra flagged both the 3B and the 30B as deprecated
  at **2026-10-18T08:49:17Z** and set `replaced_by` to `ibm-granite/granite-4.2-8b`, while
  leaving the 8B live
  ([DeepInfra](../../sources/deepinfra.com/granite-4-2-family-availability/2026-10-26.md)).
  OpenRouter never listed the 3B or 30B, and Ollama's `:latest` alias also points at the 8B
  ([Ollama](../../sources/ollama.com/granite4-2/2026-10-26.md)). The catalogue still prices and
  serves all three, so this is a redirect marker rather than a removal — but a reader who
  wants the 30B's stronger agentic scores should not assume a hosted path stays available.
- **Status:** current. IBM's product page presents Granite 4.2 as the Granite language family
  with no successor listed, and all three cards were touched within the last two months of the
  capture date.

## Documented capabilities

All from vendor pages unless marked; nothing below was independently verified.

**Sizes and architecture** ([blog](../../sources/huggingface.co/granite-4-2-technical-blog/2026-10-26.md),
[8B](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md),
[3B](../../sources/huggingface.co/granite-4-2-3b-model-card/2026-10-26.md),
[30B](../../sources/huggingface.co/granite-4-2-30b-model-card/2026-10-26.md) cards):

| Component | 3B | 8B | 30B |
| --- | --- | --- | --- |
| Embedding size | 2560 | 4096 | 4096 |
| Layers | 40 | 40 | 64 |
| Attention heads / KV heads | 40 / 8 | 32 / 8 | 32 / 8 |
| MLP hidden size (SwiGLU) | 8192 | 12800 | 32768 |
| Sequence length | 131072 | 131072 | 131072 |
| Position embedding | RoPE θ=1e7 | RoPE θ=1e7 | RoPE θ=1e7 |

Decoder-only dense transformer, `GraniteForCausalLM`, GQA, RMSNorm (ε=1e-5), untied
input/output embeddings, bfloat16. The blog's prose says "40 attention heads and 8 KV heads"
for all sizes while its own table gives 40 heads for the 3B and 32 for the 8B/30B — the
per-size table is the specific statement and is what the cards repeat.

**Context.** "Natively Supports 128K (Long-context extension to 512K)" on all three cards,
inherited from the 4.1 base pre-training's fifth phase
([blog](../../sources/huggingface.co/granite-4-2-technical-blog/2026-10-26.md)). See the
limitations section: no host offers more than 131,072.

**Thinking modes.** Three modes on all sizes: full thinking (default,
`enable_thinking=True`), non-thinking (`enable_thinking=False`), and low-effort
(`enable_thinking=True, low_effort=True`)
([8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md)). Reasoning is
emitted inside ` thinking...</think>`. The card mandates `temperature=1.0` and `top_p=0.95`
"across **all tasks and serving backends**", `max_new_tokens=8192` in thinking mode and `2048`
in non-thinking, and strips prior-turn thinking by default
(`truncate_history_thinking=True`).

**Tool calling and serving.** "Reasoning-Augmented Tool Calling", OpenAI-format tools; vLLM is
the recommended backend with the repository's `granite_thinking_parser` (vLLM v0.20+) and the
`qwen3_coder` tool parser; an SGLang recipe is also provided
([8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md)). OpenRouter
declares `tool_choice` support for `none`/`auto`/`required`/`function` on both endpoints
([OpenRouter](../../sources/openrouter.ai/granite-4-2-8b/2026-10-26.md)).

**Languages.** Twelve tested: English, German, Spanish, French, Japanese, Portuguese, Arabic,
Czech, Italian, Korean, Dutch, Chinese; "other languages may work but have not been fully
tested" ([8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md)).

**Training** ([blog](../../sources/huggingface.co/granite-4-2-technical-blog/2026-10-26.md)):

- SFT mixture ~7.2M samples / ~100B tokens (~65B trainable), split 31.6% agentic and 68.4%
  non-agentic. The agentic corpus is 69% software engineering, 12.1% tool calling, 8.0%
  terminal use, 3.5% math, 0.8% search, 0.2% action, generated with OpenHands, OpenCode,
  Terminus-2, SWE-agent, OpenResearcher, MiniSWE, OpenSeeker, EnvScaler, Gemini CLI, Hermes,
  Codex and Goose.
- Final RL uses GRPO, run asynchronously with generation and policy updates on separate GPU
  pools and in-flight weight refresh
  ([8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md)).
- Per-size divergence: RLVR ×2 for 3B and 8B, ×3 for 30B; skill boosters code (3B), IF·GPQA·code
  (8B), IF·code (30B); SWE, terminal and search agents only on 8B and 30B; RLHF on all three.
- RLHF optimises a generative reward model plus a safety reward covering jailbreak resistance
  and refusals, with a reasoning-length penalty.
- Hardware: NVIDIA GB200 NVL72, 72-GPU NVLink domain, NDR 400 Gb/s InfiniBand, hosted by
  CoreWeave.
- LLM judges for data quality: GPT-OSS-120B and Gemma 4.

**Quantisation.** FP8 (dynamic per-channel weights, per-token activations, no calibration),
NVFP4 and MXFP4 (GPTQ calibrated on 2K SFT samples), GGUF via llama.cpp shipping Q8_0 through
Q2_K in 14 formats
([blog](../../sources/huggingface.co/granite-4-2-technical-blog/2026-10-26.md)).

### Benchmarks: vendor

The blog's table and the three model cards agree row for row, with one exception noted below.
Pass@1 unless marked ([blog](../../sources/huggingface.co/granite-4-2-technical-blog/2026-10-26.md)):

| Task | 3B | 8B | 30B |
| --- | --- | --- | --- |
| SWE Bench Multilingual | NA | 30.78 | 41.89 |
| SWE Bench Pro | NA | 19.11 | 33.29 |
| SWE Bench Verified | NA | 47.67 | 57.00 |
| Terminal-Bench 2.1 | NA | 20.56 | 29.24 |
| τ³-bench | 45.78 | 58.06 | 62.00 |
| BFCL (v4) | 52.41 | 50.29 | 61.39 |
| ProfBench | 32.10 | 41.20 | 42.90 |
| BirdBench | NA | 41.07 | 41.85 |
| GDPval | NA | 1189.00 | 1225.00 |
| AIME25 | 78.33 | 86.67 | 89.17 |
| HMMT Feb25 | 66.67 | 78.33 | 89.17 |
| GPQA | 54.80 | 64.14 | 66.41 |
| LiveCodeBench v6 | 69.71 | 73.24 | 75.77 |
| SciCode | 24.11 | 36.09 | 38.76 |
| MMLU-Pro | 67.84 | 74.04 | 77.60 |
| MMLU-ProX lite (IBM) | 27.78 | 61.06 | 66.64 |
| Arena-Hard-V2 | 34.96 | 65.19 | 67.93 |
| IFBench (prompt) | 74.33 | 79.33 | 77.17 |
| RULER 64K | 67.52 | 80.99 | 89.96 |
| RULER 128K | 55.30 | 71.41 | 81.38 |

Read the shape, not the ranking. The 3B's NA pattern is not a data gap — it follows from the
training recipe (no agentic RL, no SWE/terminal/search environments), so the 3B is a
foundational reasoning model, not a cheap substitute for the 8B in agentic work. The 3B also
degrades hard on long context (RULER 128K 55.30 against 67.52 at 64K), and its MMLU-ProX lite
of 27.78 against the 8B's 61.06 is a 33-point gap that no other row approaches.

**Two contradictions with IBM's own product page.** The page's τ³-bench row reads
**66.34 / 68.05 / 68.05** against the blog and cards' **45.78 / 58.06 / 62.00** — a 6–20 point
disagreement on the same models, in IBM's favour
([IBM product page](../../sources/ibm.com/granite-4-2-product-page/2026-10-26.md)). The page's
BFCL (v4) 8B row is 50.29, matching the blog, while the 8B card says **52.39**
([8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md)). No source
explains either; the τ³ version, harness or averaging differ but are not stated. Treat the
τ³ rows as unusable for comparison until that is resolved.

**Methodology is absent.** The cards say only "Evaluations are run with an evaluation framework
based on NeMo Evaluator SDK". No harness, prompt set, sampling configuration, run count or date
accompanies any row, so none of these numbers can be compared with another vendor's without
assuming equivalence — the same caveat that makes cross-vendor agentic scores near-meaningless
elsewhere in this wiki.

### Benchmarks: independent

Artificial Analysis, re-published by OpenRouter for the 8B
([OpenRouter](../../sources/openrouter.ai/granite-4-2-8b/2026-10-26.md)). This is AA's
measurement relayed by a host, not a second measurement:

Intelligence Index 11.1 · Coding Index 22.4 · Agentic Index 1.3 · GPQA Diamond 63.1% · HLE 9.7%
· AA-LCR 45.0% · τ-Bench Banking 7.6% · GDPval-AA 0.0 · CritPt 0.3% · SciCode 31.5% ·
Terminal-Bench 4.0 0.0% · Terminal-Bench 2.1 18.4% · AA-Omniscience accuracy 11.2% /
non-hallucination rate 68.0%.

The pattern is consistent: knowledge and coding tasks land close to the vendor's own rows
(GPQA 63.1 vs 64.14; Terminal-Bench 2.1 18.4 vs 20.56; SciCode 31.5 vs 36.09), while every
long-horizon agentic task collapses to near zero. The 68.0% non-hallucination rate against
11.2% accuracy is the more interesting signal — this model abstains rather than confabulates,
which is a defensible profile for enterprise retrieval work and a bad one for open-ended
research.

OpenRouter also runs its own samples: GPQA Diamond **64.7%** (CoreWeave) / **65.2%**
(DeepInfra) / **65.7%** (auto-routing), and TAU-Bench **64.0%** (DeepInfra) / **58.3%**
(auto). Those GPQA figures sit above both the vendor's 64.14 and AA's 63.1 for the same model,
with no sampling configuration, sample size or date stated. Throughput is reported as 96 tok/s
P50 with 0.26 s P50 latency, "best across providers".

## Limitations and constraints

- **The 512K context is not available anywhere.** Every host captured offers 131,072 —
  DeepInfra, OpenRouter and every Ollama tag
  ([DeepInfra](../../sources/deepinfra.com/granite-4-2-family-availability/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/granite-4-2-8b/2026-10-26.md),
  [Ollama](../../sources/ollama.com/granite4-2/2026-10-26.md)) — and the card's own vLLM recipe
  stops at `--max-model-len 131072`
  ([8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md)). The vendor
  never states what configuration reaches 512K, so the claim is inherited from pre-training
  rather than demonstrated for these checkpoints. Plan on 128K.
- **No independent 3B or 30B measurement.** AA figures cover the 8B only; the 30B's stronger
  agentic rows (SWE Verified 57.00, Terminal-Bench 2.1 29.24) are vendor-reported and
  unverified, and its only captured host has deprecated it.
- **The published model cards are defective.** The raw `README.md` for all three sizes still
  contains three unfilled authoring markers — `<!-- TODO: Add pre-training details here -->`,
  `<!-- TODO: Add SFT details here -->`, `<!-- TODO: Add RL details here -->` — plus
  commented-out drafts of the RL and alignment paragraphs
  ([8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md),
  [3B](../../sources/huggingface.co/granite-4-2-3b-model-card/2026-10-26.md),
  [30B](../../sources/huggingface.co/granite-4-2-30b-model-card/2026-10-26.md)). The rendered
  RL paragraph omits the agentic phases (SWE, terminal, web search, "up to 200 tool-calling
  turns") that the commented draft describes and the blog confirms. Anyone reading only the
  card gets a thinner training description than IBM published elsewhere.
- **Host-side thinking controls diverge from the vendor's.** The card documents
  `enable_thinking` plus a boolean `low_effort`; OpenRouter exposes three efforts
  (`high`/`low`/`none`, default `high`); Ollama exposes `enable_thinking` plus a two-level
  `reasoning_effort` and, when set to `"low"`, appends `{reasoning effort: low}` to the user
  turn ([Ollama](../../sources/ollama.com/granite4-2/2026-10-26.md)). Whether Ollama's
  prompt-text substitution reproduces the vendor's low-effort mode is not documented.
- **Local tags are quantised, and the level is unstated.** Ollama's 2.2 GB / 5.3 GB / 18 GB
  tags imply roughly 4-bit weights rather than bf16, but the format is not stated on the page
  ([Ollama](../../sources/ollama.com/granite4-2/2026-10-26.md)). Benchmark rows should be
  assumed to come from bf16 or FP8, not from these tags.
- **The sampling requirement is a trap for serving stacks.** `temperature=1.0` and
  `top_p=0.95` are mandatory across all backends per the card, yet OpenRouter exposes both as
  settable and states no constraint
  ([OpenRouter](../../sources/openrouter.ai/granite-4-2-8b/2026-10-26.md)). A host or client
  default of `temperature=0.7` will silently produce off-spec output.
- **No EU in-region routing on OpenRouter**, and no regional options were captured on
  DeepInfra or Ollama ([OpenRouter](../../sources/openrouter.ai/granite-4-2-8b/2026-10-26.md)).
  For an IBM product sold on on-prem and data-residency grounds, that gap matters.
- **Licence is Apache 2.0 with a use restriction attached separately.** The weights are
  Apache 2.0 and ungated, but IBM's product page adds: "All IBM Granite model users may not
  use, or allow others to use, IBM Granite models to engage in or facilitate any action to
  generate output that infringes, misappropriates, or otherwise violates any third-party
  copyright rights"
  ([IBM product page](../../sources/ibm.com/granite-4-2-product-page/2026-10-26.md)). That is a
  vendor-stated condition outside the licence text; whether it is contractual or advisory is
  not stated.
- **Vendor marketing is not evidence.** "Competitive with larger, thinking models across a
  range of enterprise tasks—at a fraction of the cost" names no comparator and no measurement
  ([IBM product page](../../sources/ibm.com/granite-4-2-product-page/2026-10-26.md)). The one
  independent composite available (11.1) does not support it.

## Access, pricing, licensing

**Weights.** Apache 2.0, `gated: false` on all three repositories — downloadable without
accepting terms — with bf16, FP8, NVFP4, MXFP4, GGUF (14 formats) and MLX builds
([8B card](../../sources/huggingface.co/granite-4-2-8b-model-card/2026-10-26.md),
[collection](../../sources/huggingface.co/granite-4-2-collection/2026-10-26.md)). IBM states
Granite models have been cryptographically signed since 2026-04-29 and that the Granite AI
Management System is ISO certified
([IBM product page](../../sources/ibm.com/granite-4-2-product-page/2026-10-26.md)); both are
governance claims, not technical capabilities.

**Hosted prices** (USD per 1M tokens). DeepInfra's catalogue is the only captured host pricing
all three sizes
([DeepInfra](../../sources/deepinfra.com/granite-4-2-family-availability/2026-10-26.md)):

| Size | Input | Output | Cached input | Status |
| --- | --- | --- | --- | --- |
| 3B | $0.03 | $0.12 | $0.0075 (25% of input) | deprecated 2026-10-18, `replaced_by` 8B |
| 8B | $0.06 | $0.25 | $0.015 | live |
| 30B | $0.16 | $0.65 | $0.04 | deprecated 2026-10-18, `replaced_by` 8B |

OpenRouter's two 8B endpoints, bf16 both, 131,072 context and 117,964 max completion
([OpenRouter](../../sources/openrouter.ai/granite-4-2-8b/2026-10-26.md)):

| Provider | Prompt /M | Completion /M | Cache read /M | Uptime 1d |
| --- | --- | --- | --- | --- |
| CoreWeave | $0.06 | **$0.15** | $0.015 | 100% |
| DeepInfra | $0.06 | **$0.25** | $0.015 | 100% |

The input price is identical across every host and matches the 8B's per-token economics at
$0.06/$0.15–$0.25. **Completion price depends on routing:** OpenRouter's rendered headline
reads "$0.06 / $0.15 per 1M" while its catalogue `pricing.completion` field is $0.25 — the
CoreWeave and DeepInfra prices respectively. A caller cannot know which applies without
pinning a provider.

**Local.** Ollama serves all three sizes at no per-token cost, quantised, 128K context
([Ollama](../../sources/ollama.com/granite4-2/2026-10-26.md)). Library page download count at
capture: 188.4K; the GGUF repositories show the highest 30-day download counts in the family
(263,225 for the 3B GGUF against 40,020 for the 3B instruct), which is consistent with most
usage being local rather than hosted
([collection](../../sources/huggingface.co/granite-4-2-collection/2026-10-26.md)).

**Gap.** IBM names watsonx.ai and Replicate as distribution routes
([IBM product page](../../sources/ibm.com/granite-4-2-product-page/2026-10-26.md)) but no
captured record prices or documents either. The watsonx documentation pages returned HTTP 403
to an unauthenticated fetch on the capture date.

## Unresolved questions

1. **How does Granite 4.2 relate to Granite 4.0?** No captured source mentions 4.0. Whether
   4.2 replaces it, or whether the 4.1 bases are a revision of it, is unknown. The
   relationship to 4.1 is documented; the relationship to 4.0 is not.
2. **Why did DeepInfra deprecate the 3B and 30B on 2026-10-18?** IBM's product page still
   presents all three as current. A vendor retirement, a host capacity decision, or a
   redirect to the 8B for cost reasons — the catalogue JSON records only the timestamp and the
   `replaced_by` target, not the reason, and does not distinguish hard removal from soft
   redirect.
3. **Which τ³-bench numbers are real?** IBM's product page says 66.34 / 68.05 / 68.05; IBM's
   blog and all three cards say 45.78 / 58.06 / 62.00. Same benchmark name, same models,
   same vendor, 6–20 points apart. Version, harness or averaging must differ; nothing states
   which.
4. **Why does the 8B card's BFCL (v4) read 52.39 when the blog and product page both say
   50.29?** The 3B (52.41) and 30B (61.39) agree everywhere, so this is isolated to the 8B
   card.
5. **What configuration reaches 512K context, and does quality survive it?** The vendor asserts
   the extension; no host offers more than 131,072 and the card's own recipe stops at 128K.
   RULER 128K already drops to 55.30 on the 3B, which suggests the extension is not free even
   if it exists.
6. **Is the release date 2026-08-25 or 2026-08-31?** IBM and all three cards say 2026-08-25;
   OpenRouter states "Released Aug 31, 2026" and dates its slug `-20260831`; DeepInfra created
   its entries 2026-08-24, a day before the vendor date. The 08-31 is most likely a host
   onboarding date, but no source says so, and it leaves open whether the checkpoint hosts
   serve is identical to the one released on 08-25.
7. **Do the 3B and 30B perform as documented?** No independent measurement of either was
   captured. The 30B's vendor rows are the family's strongest and its only host has deprecated
   it.
8. **Does Ollama's `{reasoning effort: low}` prompt injection reproduce the vendor's low-effort
   mode?** Documented as a host simplification, never compared against the reference
   implementation.
9. **What are the watsonx.ai and Replicate model IDs and prices?** Both are named by IBM as
   routes; neither was capturable.

## Evidence status

**Floor met.** First-party: three Hugging Face model cards, the Granite 4.2 technical blog, and
IBM's product page, all captured 2026-10-26. Independent host records: DeepInfra (all three
sizes, prices, deprecation state), OpenRouter (8B, two providers, prices, uptime) and Ollama
(local packaging, tags, host-written mode documentation).

**Strength of the floor is uneven.**

- The independent **host** layer is solid: three unrelated hosts, with per-token prices that
  agree to the cent and one host's deprecation state that no vendor page reflects.
- The independent **measurement** layer is thin. The only independent benchmark data is
  Artificial Analysis's, and it reaches this repository second-hand — re-published on
  OpenRouter's page for the 8B, not captured from AA directly. AA's own leaderboard record in
  `sources/artificialanalysis.ai/leaderboards-models/` does not carry a Granite 4.2 row.
  Nothing independent covers the 3B or 30B.
- The roster's discovery path was the Artificial Analysis leaderboard; that is how the model
  was found, but the AA numbers used here come from the host re-publication.

**No direct tests were run for this page.** No API calls to any host, no local inference, no
reproduction of any benchmark, no long-context or agentic attempt. Every capability statement
is vendor-documented, every benchmark number is either vendor-reported or Artificial
Analysis's (relayed), and both are labelled as such above.

The next useful evidence would be a self-hosted run of the 30B on a named agentic harness to
check whether its vendor rows survive, and a first-party AA capture to replace the relayed
figures.
