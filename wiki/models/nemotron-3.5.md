# Nemotron 3.5

NVIDIA's October 2026 open-weights release wave inside the Nemotron 3 family: **Nemotron 3.5
Super VL** (120B/12B-active multimodal flagship), **Nemotron 3.5 Bolt 74B-A9B** (74B/9B, 24GB
local target), **Nemotron 3.5 Bolt E4B 4GB** (8B/4B-effective, a Gemma-4-E4B derivative), and
the earlier **Nemotron 3.5 Lightning** (30B/3B, text-only) released 2026-08-11
([launch post](../../sources/nvidia.com/nemotron-3-5-super-vl-announcement/2026-10-26.md)).

**"Nemotron 3.5" is not one model.** The roster label came from the Artificial Analysis
leaderboard, but AA has no bare "Nemotron 3.5" row — it lists four separate entries
([AA, Super VL](../../sources/artificialanalysis.ai/nemotron-3-5-super-vl/2026-10-26.md),
[Lightning](../../sources/artificialanalysis.ai/nemotron-3-5-lightning/2026-10-26.md),
[Bolt](../../sources/artificialanalysis.ai/nemotron-3-5-bolt/2026-10-26.md)). NVIDIA's own
developer page presents only two of them as product cards and never calls the group the
"Nemotron 3.5 family" ([family page](../../sources/nvidia.com/nemotron-family-page/2026-10-26.md)).
This page therefore covers the generation, with Super VL as the reference entity, and keeps each
checkpoint's evidence separate. **Do not transfer findings between tiers.**

## Identity

| Checkpoint | Canonical ID | Released | Params (total/active) | Modality | Context |
| --- | --- | --- | --- | --- | --- |
| Nemotron 3.5 Super VL | `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`; OpenRouter `nvidia/nemotron-3.5-super-vl` | 2026-10-15 | 120B / 12B | text+image+video → text | 1M |
| Nemotron 3.5 Bolt 74B-A9B | `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16` (24GB build: `…-24GB`) | 2026-10-15 | 74B / 9B | text+image+video → text | 256K |
| Nemotron 3.5 Bolt E4B 4GB | `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16` (Q4 build: `…-E4B-4GB`) | 2026-10-23 | 8B / 4B effective | text → text | 64K |
| Nemotron 3.5 Lightning | `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`; OpenRouter `nvidia/nemotron-3.5-lightning` | 2026-08-11 | 30B / 3B | text → text | 1M nominal, 256K on one H100 |

- **Vendor:** NVIDIA Corporation. Model cards name NVIDIA as developer; the flagship was "built
  in collaboration with the Nemotron Coalition", with Perplexity data and Prime Intellect
  environments credited
  ([technical blog](../../sources/nvidia.com/nemotron-3-5-super-vl-technical-blog/2026-10-26.md)).
- **Weights licence:** OpenMDW-1.1 for all four — a permissive grant with retained-notice and
  patent-retaliation conditions and an explicit statement that **outputs carry no restrictions**
  ([licence text](../../sources/openmdw.ai/openmdw-1-1-license/2026-10-26.md)). NVIDIA states
  all four are "ready for commercial or non-commercial use". Bolt E4B additionally carries
  Google's Apache-2.0 terms for its Gemma-4-E4B-it base.
- **Aliases:** the roster's "Nemotron 3.5"; AA's "Nemotron 3.5 Super VL"; OpenRouter's canonical
  slug `nvidia/nemotron-3.5-super-vl-20261015`; NVIDIA's served model name
  `nemotron-3.5-super-vl`.
- **Siblings outside 3.5:** Nemotron 3 Ultra 550B-A55B (the frontier orchestrator the flagship
  was distilled from), Nemotron 3 Super 120B-A12B (its base), Nemotron 3 Nano, and the
  non-generative 3.5 line — Embed-1B/8B, Rerank-8B, Parse, Content Safety, ASR Streaming
  ([weights listing](../../sources/huggingface.co/nemotron-3-5-weights-listing/2026-10-26.md),
  [DeepInfra catalogue](../../sources/deepinfra.com/nemotron-3-5-family/2026-10-26.md)).

### Identity ambiguity, recorded rather than resolved

Three separate problems, none of which a single page can settle:

1. **The label is a generation, not a checkpoint.** NVIDIA's post names only tier-suffixed
   products; AA lists four entries; OpenRouter lists two. Nothing in the first-party material
   defines "Nemotron 3.5" as an entity.
2. **Bolt E4B is not a Nemotron architecture.** Its card says so directly: "further post-trained
   from [Gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) by NVIDIA", architecture
   line "Gemma-4-E4B", vLLM `--tool-call-parser gemma4`
   ([Bolt cards](../../sources/huggingface.co/nemotron-3-5-bolt-model-cards/2026-10-26.md)). It
   belongs to the 3.5 release wave by branding and licence, not by lineage.
3. **A snapshot tag that matches no stated date.** OpenRouter's canonical Lightning slug is
   `nvidia/nemotron-3.5-lightning-20260807` while OpenRouter's `created` timestamp and the model
   card both say 2026-08-11
   ([OpenRouter](../../sources/openrouter.ai/nemotron-3-5-lightning/2026-10-26.md)). No
   explanation is published; treat 2026-08-11 as the release date.

There is also a naming collision on the flagship's HF ID: OpenRouter's `hugging_face_id` is
`nvidia/NVIDIA-Nemotron-3.5-Super-VL`, which returns 401 — the weights live at
`…-Super-VL-120B-A12B-BF16`.

## Current assessment

**Distinct models, not repackaging.** Each of the four has its own architecture, size, modality
and benchmark evidence. The flagship is a genuine new model: a Mamba-2 + MoE hybrid with 512
routed experts and a C-RADIO vision encoder, distilled from Nemotron 3 Ultra and extended to 1M
context ([model card](../../sources/huggingface.co/nemotron-3-5-super-vl-model-card/2026-10-26.md)).
Bolt 74B-A9B is a different architecture again (LatentMoE with a C-RADIO v4-H encoder). The
only "repackaging" candidate is Bolt E4B, which is a post-train of an existing Gemma model.

**Position: mid-tier, not frontier.** Artificial Analysis puts Super VL at Intelligence Index
**26.49**, Bolt 74B-A9B at **21.41** and Lightning at **12.86**
([AA](../../sources/artificialanalysis.ai/nemotron-3-5-super-vl/2026-10-26.md)). For comparison
in this wiki, [DeepSeek V4.1 Flash 1017](deepseek-v4.1-flash-1017.md) and
[Qwen3.8 Max](qwen3.8-max.md) both sit at 45. NVIDIA's own card
positions the flagship as "comparable with NVIDIA's largest reasoning model at roughly
one-fifth the parameter count" — i.e. comparable to Nemotron 3 Ultra, not to the frontier.

**What it is actually good at** is the intersection of cost, speed and multimodal agentic work.
AA measures 454 tok/s median output at $0.19 per index task, with GDPval-AA 1162 and SciCode
47.8% — a profile that fits high-volume document and tool-use pipelines rather than hard
reasoning. That is also exactly how NVIDIA pitches it.

**Status: current, GA, open weights.** No deprecation is recorded anywhere; AA's `deprecated`
flag is false for all three entries it covers. Bolt E4B shipped eight days after the others and
is the newest.

**Retained specialist caveat.** If a question needs an on-device agent under 24GB, Bolt 74B-A9B
is the only option here — and nobody hosts it (AA `hostModelCount: 0`), so it is a
download-and-run choice, not an API choice.

## Documented capabilities

### Reasoning and tool use

- **Three reasoning levels, not two.** The card: "configurable reasoning levels: off, on
  (medium), and on", selected through the chat template (`enable_thinking=True/False`)
  ([card](../../sources/huggingface.co/nemotron-3-5-super-vl-model-card/2026-10-26.md)).
  OpenRouter exposes `reasoning` as non-mandatory and also `tools`, `tool_choice` and
  `structured_outputs` ([OpenRouter](../../sources/openrouter.ai/nemotron-3-5-super-vl/2026-10-26.md)).
- **Tool calling is a first-class path:** the shipped vLLM recipe sets
  `--enable-auto-tool-choice --tool-call-parser qwen3_coder --reasoning-parser nemotron_v3`.
- Lightning carries the same `reasoning`/`tools` parameter set, so tool use is not a
  flagship-only feature.
- Bolt 74B-A9B inherits the flagship's chat-template contract ("inherited from the Super 3.5 VL
  client"); Bolt E4B adds `conversational_mode` plus a runtime thinking budget.

### Modality

Text, images (jpeg/png RGB), documents as page images, GUI screenshots and **video** (mp4, up to
2 minutes) in; text out. Video is processed as sampled frames — the reference recipe uses
`fps: 2, num_frames: 256` with `--video-pruning-rate 0.5`
([card](../../sources/huggingface.co/nemotron-3-5-super-vl-model-card/2026-10-26.md)).

**Video input is contested.** The card and OpenRouter both say yes; AA's model record sets
`inputModalityVideo: false` ([AA](../../sources/artificialanalysis.ai/nemotron-3-5-super-vl/2026-10-26.md)).
The likeliest reading is that AA never tested video, but neither party says so. Recorded as
open.

### Languages

Post-training covers English plus French, German, Italian, Japanese, Spanish and Chinese. HF
`language:` tags list `en, es, fr, de, it, ja` — Chinese appears in the training data but not
the tag list. Lightning and Bolt 74B-A9B claim English + coding plus the same five. Bolt E4B's
list is much wider (inherited from Gemma 4).

### Context

1M tokens on the flagship and on Lightning, "up to 1M" with per-recipe reductions; 256K on Bolt
74B-A9B; 64K on Bolt E4B. The flagship's 1M covers "the prompt, visual inputs, conversation
history, tool results, and generated response" together.

## Benchmarks

### Vendor (NVIDIA-run, NeMo Gym, vendor baselines)

Selected rows from the flagship's card — full table in the
[model card record](../../sources/huggingface.co/nemotron-3-5-super-vl-model-card/2026-10-26.md):

| Benchmark | N3.5 Super VL | Nemotron 3 Ultra | Qwen3.8-Flash-Next | GLM-5.3-Flash |
| --- | ---: | ---: | ---: | ---: |
| GPQA-Diamond | 89.52 | 87.0 | 92.7 | 91.2 |
| HLE (text-only) | 31.79 | 29.2 | 39.6 | 36.47 |
| LiveCodeBench v6 | 88.22 | 89.2 | 94.1 | 80.6 |
| SWE-bench Verified | 71.10 | 73.9 | 78.7 | 79.10 |
| Terminal-Bench 2.1 | 60.67 | 54.80 | 85.80 | 82.70 |
| Terminal Bench 4 | 1 | 0 | 20.71 | 15.15 |
| GDPval-AA v2 | 1211 | 1148 | 1561 | 1563 |
| AA-LCR v1.1 | 68.62 | 75.2 | 78.4 | 79.5 |
| CharXiv reasoning | 80.82 | — | 85.8 | 81.9 |
| Video-MME v2 | 32.85 | — | 45.1 | 14.8 |

Two vendor-run harness scores not on that table, from the technical blog: Hermes Bench 63.44% vs
Nemotron 3 Ultra's 56.33%, and LangChain Evals 87.05% vs 84.3%
([technical blog](../../sources/nvidia.com/nemotron-3-5-super-vl-technical-blog/2026-10-26.md)).

### Independent (Artificial Analysis)

| Metric | Super VL | Bolt 74B-A9B | Lightning |
| --- | ---: | ---: | ---: |
| Intelligence Index | 26.49 | 21.41 | 12.86 |
| GDPval-AA | 1162.41 | 979.03 | 637.72 |
| SciCode | 0.478 | 0.397 | 0.321 |
| AA-LCR | 0.69 | 0.697 | 0.603 |
| HLE | 0.307 | 0.247 | 0.106 |
| GPQA | not run | not run | 0.743 |
| Terminal-Bench 4.0 | 0 | 0 | 0.005 |
| AA-Omniscience index | −4.22 | −19.17 | −17.72 |
| AA-Omniscience hallucination rate | 0.358 | 0.437 | 0.376 |
| Median output speed | 454 tok/s | — | 308 tok/s |
| Price in / out ($/M) | 0.225 / 0.575 | — | 0.06 / 0.20 |

### Where vendor and independent agree, and where they do not

- **Agree:** Terminal-Bench 4.0 is ~zero. The card says 1, AA says 0. This model cannot do that
  benchmark. On Lightning, NVIDIA's card and AA agree closely on GPQA (75.44 vs 74.3), HLE
  (11.72 vs 10.6) and SciCode (32.6 vs 32.1).
- **Disagree:** the flagship's GPQA-Diamond 89.52 and LiveCodeBench 88.22 have **no** AA
  counterpart — AA never ran them — so the card's strongest reasoning numbers are unverified.
  AA-LCR is 68.62 on the card against AA's 69%, which is agreement, but NVIDIA's own Ultra
  baseline (75.2) scores *higher* than the flagship, contradicting the "beats Ultra" framing.
- **The honest summary:** the flagship's advantage over Nemotron 3 Ultra on NVIDIA-run agentic
  harnesses (Hermes, LangChain, Terminal-Bench 2.1) is real and repeated across two vendor
  sources; its advantage on knowledge and long-context benchmarks is not, and on GDPval it
  loses badly to Qwen3.8-Flash-Next (1211 vs 1561).

## Limitations and constraints

- **Agentic ceiling.** Terminal-Bench 4.0 ≈ 0% and AutomationBench-AA 14.8% on the flagship;
  AutomationBench 0.8% and CritPt 0 on Lightning. These are not tuning artefacts — both vendor
  and independent runs agree.
- **Hallucination.** AA-Omniscience hallucination rates are 35.8% (Super VL), 43.7% (Bolt 74B),
  37.6% (Lightning), and all three AA-Omniscience index scores are negative (−4.22, −19.17,
  −17.72). The flagship's card claims a 30.0% hallucination rate, better than AA measured.
- **Context is capacity, not delivery.** Only 3 of 9 OpenRouter routes honour 1M; DeepInfra caps
  both models at 262,144; no host offers 1M for Lightning at all. Anyone planning a 1M-token
  workflow must check the specific route.
- **Vision is narrow.** The card's own vision numbers are mid-pack: Video-MME v2 32.85, BabyVision
  29.60, OCRBench v2 ZH 59.15 — all below Qwen3.8-Flash-Next. AA does not measure vision here at
  all. Do not assume "VL" implies strong video or Chinese OCR.
- **Video input is capped at 2 minutes** of mp4, sampled to 256 frames at 2fps by the reference
  recipe.
- **Deployment floor.** BF16 flagship needs 4× H100 or 2× GB200; Lightning fits one H100 at 256K
  but needs 8× TP8/EP or Blackwell for 1M. The BF16 cards are explicitly aimed at
  customization, not production serving — NVIDIA points deployers at the NVFP4 checkpoints.
- **NIM pricing is unpublished.** The vendor offers NIM microservices for these models, but no
  public rate card was found and the NIM pages are client-rendered, so no per-token NIM price
  can be stated.
- **Bolt has no host.** AA measured Bolt 74B-A9B with `hostModelCount: 0` and no price, speed or
  latency data. It is obtainable only as weights.

## Access, pricing, licensing

### Billing basis

Per token, input and output, with a discounted cache-read rate. No per-image or per-video-second
charge was found on any route.

### Host prices per million tokens (captured 2026-10-26)

Super VL, nine OpenRouter endpoints plus DeepInfra
([OpenRouter](../../sources/openrouter.ai/nemotron-3-5-super-vl/2026-10-26.md)):

| Provider | Context | In $/M | Out $/M | Cache read $/M | Quantization |
| --- | ---: | ---: | ---: | ---: | --- |
| Darkbloom | 262,144 | 0.06 | 0.35 | 0.01 | nvfp4 |
| Crusoe | 262,144 | 0.10 | 0.40 | 0.08 | bf16 |
| Io Net | 262,144 | 0.15 | 0.50 | 0.02 | nvfp4 |
| Together | 262,144 | 0.15 | 0.50 | 0.02 | unknown |
| DeepInfra | 262,144 | 0.15 | 0.50 | 0.02 | fp4 |
| CoreWeave | 1,048,576 | 0.15 | 0.50 | 0.02 | nvfp4 |
| BaseTen | 1,048,576 | 0.20 | 0.50 | 0.04 | fp4 |
| Venice | 262,144 | 0.25 | 1.25 | 0.125 | fp4 |
| Nebius | 1,048,576 | 0.30 | 0.90 | 0.06 | bf16 |
| AA aggregate | 1,000,000 | 0.225 | 0.575 | 0.05 | — |

Lightning, four OpenRouter endpoints
([OpenRouter](../../sources/openrouter.ai/nemotron-3-5-lightning/2026-10-26.md)):

| Provider | Context | In $/M | Out $/M | Quantization |
| --- | ---: | ---: | ---: | --- |
| Darkbloom | 262,144 | 0.025 | 0.12 | int4 |
| Io Net | 262,144 | 0.0469 | 0.134 | unknown |
| DeepInfra | 262,144 | 0.06 | 0.16 | bf16 |
| CoreWeave | 262,144 | 0.07 | 0.20 | bf16 |

Three things to read off these tables:

1. **A 5x input and 3.6x output spread for identical weights.** Darkbloom at $0.06/$0.35 is a
   fifth of Venice at $0.25/$1.25 on input. The headline "$0.15/$0.50" that OpenRouter and
   DeepInfra both show is the modal tier, not the floor.
2. **Price does not track quantization or context.** The two cheapest routes are a 256K nvfp4
   endpoint and a 256K bf16 endpoint; the most expensive is a 256K fp4 endpoint.
3. **Completion ceilings vary 29x** on the same model — 32,768 at Darkbloom and Venice vs
   943,718 at CoreWeave, BaseTen and Nebius.

AA's $0.225/$0.575 aggregate sits above the modal price and is not explained by any published
rule.

### Weights licence

OpenMDW-1.1, identical for all four checkpoints. Commercial use permitted, modification and
redistribution permitted, **outputs unrestricted**, obligations limited to retaining the licence
and notices and to not asserting patent/copyright infringement against the model materials
([licence text](../../sources/openmdw.ai/openmdw-1-1-license/2026-10-26.md)). Bolt E4B stacks
this on Google's Apache-2.0 Gemma 4 terms, and no captured source explains how the two interact.

In permissiveness this sits with MIT/Apache-licensed open weights such as DeepSeek's and
Qwen's, not with licences that carry acceptable-use or field-of-use terms.

### First-party access routes

Hugging Face (weights, BF16 + NVFP4 + Base + GGUF variants across ~21 `nvidia/*` repositories
— [weights listing](../../sources/huggingface.co/nemotron-3-5-weights-listing/2026-10-26.md)),
OpenRouter, ModelScope, NVIDIA NIM, and `build.nvidia.com`. Bolt 74B-A9B additionally ships
llama.cpp / Ollama / LM Studio / Unsloth recipes; Bolt E4B has a `build.nvidia.com` listing
([launch post](../../sources/nvidia.com/nemotron-3-5-super-vl-announcement/2026-10-26.md),
[Bolt cards](../../sources/huggingface.co/nemotron-3-5-bolt-model-cards/2026-10-26.md)).

## Unresolved questions

- **Is "Nemotron 3.5" a defensible page unit?** This page merges four checkpoints because the
  roster row is the generation and no first-party source defines a single "Nemotron 3.5". Under
  the wiki's split criteria, Bolt E4B (a Gemma derivative with 64K context) and Bolt 74B-A9B
  (256K, LatentMoE, no host) would each justify their own page if questions about them recur.
- **Does the flagship accept video?** Card and OpenRouter say yes; AA says no. Untested here.
- **Why does AA count Lightning at 31.6B/3.6B where the card says 30B/3B?** Unreconciled.
- **Why does AA record 131,072 context for Bolt E4B where the card says 64K?** Unreconciled.
- **What does the technical report say?** Linked from the card
  (`research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Super-and-Lightning-Technical-Report.pdf`,
  HTTP 200, 4.3MB) but not readable here — no PDF text extractor was available.
- **What does NIM cost?** `build.nvidia.com` is client-rendered; no NIM rate card was captured.
- **Is the "SuperGA" label in the card's benchmark header a different checkpoint?** No such repo
  exists; assumed to be a typo for "Super".
- **Does the OpenMDW grant survive Bolt E4B's Apache-2.0 upstream?** Not addressed by any source.

## Evidence status

**Floor met.** First-party: NVIDIA's launch post, technical blog, developer family page, and four
model cards. Independent host records: OpenRouter (two models, thirteen endpoints) and DeepInfra.
Independent measurement: three Artificial Analysis model pages. Licence text captured directly.

**No direct tests were run.** Nothing here is a measurement by this wiki. Every number is
either vendor-run (labelled) or Artificial Analysis's independent run (labelled). No API call was
made to any endpoint, so reasoning quality, tool-calling reliability, video handling and the 1M
context claims are all untested in practice.

**Known weak spots in the evidence:** the flagship's strongest vendor numbers (GPQA 89.52,
LiveCodeBench 88.22, APEX 88.36) have no independent counterpart; AA's aggregation and
modality/context fields are unexplained where they conflict with first-party sources; and Bolt
has no hosting, no price and almost no independent measurement.
