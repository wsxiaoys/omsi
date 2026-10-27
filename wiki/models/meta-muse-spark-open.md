# Meta Muse Spark Open

Meta's open-weight release of Muse Spark: an **816B-total / 42B-active sparse mixture-of-experts**
model with perception encoders, text/image/video/audio input and text output, a **1,048,576-token
context**, and mandatory reasoning
([docs overview](../../sources/meta.com/muse-spark-open-docs-overview/2026-10-26.md)). Released
**2026-10-15** under the bespoke **Muse Model License**, not an OSI licence
([blog](../../sources/meta.com/build-with-muse-spark-open-blog/2026-10-26.md),
[HF licence text](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)). Meta does
not serve it: there is no first-party endpoint, only self-hosting and third-party providers
([models list](../../sources/meta.com/muse-spark-open-models-list/2026-10-26.md)).

Its significance at capture is that a US lab shipped a checkpoint competitive with the best
open-weight models of its size, downloadable by anyone: Artificial Analysis scores it **39 on
Intelligence Index v4.3.2 (#12 of 122 open-weight large models)**, at 189 tok/s and $0.84 per Index
task ([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md)). The catch is price
and weight: every host charges the same $1.25/$4.25 per million tokens, and BF16 serving needs
roughly 2 TB of VRAM across 8 × B300
([settings](../../sources/meta.com/muse-spark-open-recommended-settings/2026-10-26.md)).

## Identity

- **Canonical name:** Muse Spark Open. Meta never gives it a version number — unlike the hosted Muse
  Spark line, which the same site lists as 1.3, 1.2 and 1.1
  ([docs overview](../../sources/meta.com/muse-spark-open-docs-overview/2026-10-26.md),
  [Muse Spark 1.3](../../sources/meta.com/muse-spark-1-3-product-page/2026-10-26.md)).
- **Weights repository:** `meta-models/Muse-Spark-Open-816B-A42B` (BF16) and
  `meta-models/Muse-Spark-Open-816B-A42B-NVFP4`
  ([get the model](../../sources/meta.com/muse-spark-open-get-the-model/2026-10-26.md),
  [HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)).
- **Host model strings:** `meta-models/muse-spark-open` (Together, Baseten, Groq, Nebius),
  `accounts/fireworks/models/muse-spark-open` (Fireworks), `meta/muse-spark-open` (OpenRouter)
  ([deploy](../../sources/meta.com/muse-spark-open-deploy/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md)).
- **Dated snapshot:** OpenRouter's endpoints are all named `meta/muse-spark-open-20261015`, i.e. the
  release date; no other snapshot exists in this evidence set
  ([OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md)).
- **Vendor:** Meta, credited to **Meta Superintelligence Labs** in the launch blog
  ([blog](../../sources/meta.com/build-with-muse-spark-open-blog/2026-10-26.md)).
- **Release date 2026-10-15.** Four witnesses agree: the blog byline "Oct 15, 2026"; the licence
  text's "Release date: October 15, 2026"; OpenRouter's `created` = 2026-10-15T17:57:49Z; and
  Artificial Analysis's FAQ "released on October 15, 2026"
  ([blog](../../sources/meta.com/build-with-muse-spark-open-blog/2026-10-26.md),
  [HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md)). The Hugging Face
  repositories were created 2026-09-15, a month earlier, and last modified on release day
  ([HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)). Fireworks lists
  "Created on 14 OCT, 2026", one day before the announcement
  ([Fireworks](../../sources/fireworks.ai/muse-spark-open/2026-10-26.md)).
- **Lineage, stated by Meta:** "Muse Spark Open is derived from the Muse Spark model we released in
  August, with additional safety post-training to make it more robust against misuse as a standalone
  model without system guardrails"
  ([product page](../../sources/meta.com/muse-spark-open-product-page/2026-10-26.md)). *Which* Muse
  Spark version is not stated, and it is not the current closed checkpoint: Muse Spark 1.3 (max)
  scores higher on every shared benchmark row (Terminal-Bench 2.1 88.8 vs 76.4; GDPval-AA v2 1754 vs
  1401; JobBench 64.9 vs 61.8; DeepSWE 1.1 75.4 vs 60)
  ([Muse Spark 1.3](../../sources/meta.com/muse-spark-1-3-product-page/2026-10-26.md),
  [product page](../../sources/meta.com/muse-spark-open-product-page/2026-10-26.md)).
- **Siblings:** closed **Muse Spark 1.3 / 1.2 / 1.1** and **Muse Wonder** on Meta Model API; open
  **Muse Glimmer** (the other open-weight line); **Muse Image**, **Muse Voice Transcribe**, **SAM 3.1**
  as separate model lines
  ([models list](../../sources/meta.com/muse-spark-open-models-list/2026-10-26.md)). Muse Image's own
  cookbook is explicit that the image model "is a separate model family from Muse Spark"
  ([cookbook](../../sources/github.com/meta-model-cookbook-muse-image/2026-10-26.md)).
- **Roster label:** "Meta Muse Spark Open" matches the vendor name. The OpenRouter label
  `meta/muse-spark-open` and AA's "Muse Spark Open (Xhigh)" are the same model — the `(Xhigh)` is a
  reasoning-effort setting, and `xhigh` is the model's default
  ([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md),
  [prompting](../../sources/meta.com/muse-spark-open-prompting-guide/2026-10-26.md)). No identity
  ambiguity to resolve.

## Current assessment

**A distinct model, not a repackaging.** It has its own weights repository, its own licence, a
parameter shape (816B/42B) that matches the closed line, and its own vendor benchmark table
([HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md),
[product page](../../sources/meta.com/muse-spark-open-product-page/2026-10-26.md)). Meta's own
framing is that it is the August Muse Spark checkpoint plus extra safety post-training, not a
distillation or a quantised copy of 1.3.

**Status at capture: current and live, not deprecated.** Meta's inventory carries no preview
designation for it; the model is served by seven hosts and downloadable from two repositories
([deploy](../../sources/meta.com/muse-spark-open-deploy/2026-10-26.md),
[blog](../../sources/meta.com/build-with-muse-spark-open-blog/2026-10-26.md)). Groq's instance is the
exception: "limited preview", enterprise access only
([Groq](../../sources/groq.com/muse-spark-open/2026-10-26.md)).

**What the evidence supports.** Two claims hold up across sources. First, it ranks among the
strongest open-weight models of its size class: AA's independent Index puts it at 39, against a
median of 19 for open-weight large models, at #12 of 122
([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md)). Second, it is expensive
for an open-weight model — AA ranks it #38 of 47 on cost, calls it "particularly expensive when
comparing to other open weight models of similar size", and reports $0.84 per Index task
([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md)). Speed is the favourable
half of the serving profile: 189 tok/s median and 0.74 s TTFT, well above the 79 t/s and 1.71 s
medians for its class ([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md)).

**What it is not.** It is not cheap to self-host: BF16 weights are ~1.65 TB and Meta budgets roughly
2 TB of VRAM for KV cache, activations and overhead; the NVFP4 checkpoint is ~537 GB and still needs
4 × B300 ([docs overview](../../sources/meta.com/muse-spark-open-docs-overview/2026-10-26.md),
[settings](../../sources/meta.com/muse-spark-open-recommended-settings/2026-10-26.md)).

## Documented capabilities

**Architecture and size.** Sparse MoE transformer with built-in perception encoders; 816B total, 42B
active; 62 decoder layers, of which 46 use sliding-window attention over the most recent 2,048 tokens
and 16 use full attention, so the KV cache only grows on those 16 layers
([docs overview](../../sources/meta.com/muse-spark-open-docs-overview/2026-10-26.md),
[settings](../../sources/meta.com/muse-spark-open-recommended-settings/2026-10-26.md)). Fireworks
adds host-side detail: routing sends each token to **8 of 256 experts**, with three sliding-window
layers per full-attention layer
([Fireworks](../../sources/fireworks.ai/muse-spark-open/2026-10-26.md)).

**Modalities.** Meta documents text, image, audio and video input with text output
([docs overview](../../sources/meta.com/muse-spark-open-docs-overview/2026-10-26.md)); the prompting
guide shows `image_url`, `video_url` and `audio_url` content parts and warns that video needs "clips
longer than a few seconds at 448 px or more on the short side", or the model "can reply that it can't
view the video" ([prompting](../../sources/meta.com/muse-spark-open-prompting-guide/2026-10-26.md)).
AA independently records text/image/speech/video input
([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md)). Two hosts document only
text and images: Fireworks ("Inputs: text and images") and Groq ("INPUT Text, images")
([Fireworks](../../sources/fireworks.ai/muse-spark-open/2026-10-26.md),
[Groq](../../sources/groq.com/muse-spark-open/2026-10-26.md)).

**Reasoning is mandatory and priced in tokens.** `reasoning_effort` maps to a numeric strength —
`low` 8, `medium` 32, `high` 256, `xhigh` 512 (default) — and "Reasoning can't be turned off. Any
value other than these four, such as `none` or `max`, is rejected"
([prompting](../../sources/meta.com/muse-spark-open-prompting-guide/2026-10-26.md)). The docs call
reasoning strength "the single biggest lever on both answer quality and token spend" and recommend
streaming because higher strengths produce long traces
([settings](../../sources/meta.com/muse-spark-open-recommended-settings/2026-10-26.md)). Knowledge
cutoff baked into the chat template: **2026-01-04**
([prompting](../../sources/meta.com/muse-spark-open-prompting-guide/2026-10-26.md),
[HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)).

**Agentic surface.** OpenAI-format function calling with parallel calls, rendered in ATEM format and
wrapped as `<tool_output>`; a separate `commentary` recipient for progress messages and `self` for
reasoning; structured outputs and JSON-schema mode advertised by hosts
([prompting](../../sources/meta.com/muse-spark-open-prompting-guide/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md),
[Groq](../../sources/groq.com/muse-spark-open/2026-10-26.md)).

**Benchmarks — vendor-run, `xhigh`, no harness stated.** From Meta's product page
([product page](../../sources/meta.com/muse-spark-open-product-page/2026-10-26.md)): JobBench 61.8,
MCP-Atlas 89.2, GDPval-AA v2 1401, HLE-Diamond (no tools) 26.1, SciCode 58.5, AA-Omniscience 25,
Terminal-Bench 2.1 (Terminus 2 agent) 76.4, DeepSWE 1.1 60 (page caveat: "best available /
self-reported harness"), ZeroBench 50.0, BabyVision 80.2, SimpleVQA 73.6. The same table compares
Inkling (xhigh), Nemotron 3 Ultra (thinking), Beam, Mistral Large 4, Qwen3.8-2.4T-A95B (xhigh), GLM
5.3 (max) and Kimi K3 (max). Muse Spark Open is the top row on 6 of the 11 benchmarks (JobBench 61.8
vs 61.4 for GLM 5.3, MCP-Atlas, HLE-Diamond, AA-Omniscience, ZeroBench, SimpleVQA) and trails on
GDPval-AA v2, SciCode, Terminal-Bench 2.1, DeepSWE 1.1 and BabyVision. No sample size, run date, or
harness is given per row, and the "Inkling" and "Beam" columns carry no vendor attribution.

**Independent evaluation.** AA's Index v4.3.2 (AA-Briefcase v1.1, GDPval-AA v2.1,
AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt,
AA-Omniscience, AA-LCR v1.1) scores 39, with 110M output tokens across the Index against a 140M
median ([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md)). AA exposes no
per-benchmark rows in the captured page, so none of Meta's numbers has an independent counterpart
here. OpenRouter's page relays third-party scores instead: Design Arena Elo 1270–1338 across
categories, and Vals AI results including Terminal-Bench 4.0 **6.6 %**, Vals Index 48.6 %, Vibe Code
Bench v1.1 76.2 %, Code Migration v1.1 26.9 %
([OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md)).

## Limitations and constraints

- **Context is 1,048,576 on paper, far less in practice on some hosts.** Groq serves **131,072** with
  a 131,072 output cap and **at most 5 input images**; Fireworks lists "1040k"; Modal caps context at
  1,000,000 and max output at 262,144; Makora caps max output at 131,072 while others allow 943,718
  ([Groq](../../sources/groq.com/muse-spark-open/2026-10-26.md),
  [Fireworks](../../sources/fireworks.ai/muse-spark-open/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md)).
- **No media accounting.** Meta documents no per-image/video-second/audio-minute token cost, no cap
  on media parts, and no resolution ceilings beyond the 448 px video floor
  ([prompting](../../sources/meta.com/muse-spark-open-prompting-guide/2026-10-26.md)).
- **Mandatory reasoning inflates cost and latency.** Every request pays reasoning tokens, and
  `xhigh` is the default — a caller that does nothing gets the most expensive setting
  ([prompting](../../sources/meta.com/muse-spark-open-prompting-guide/2026-10-26.md)).
- **Stop-token footgun.** `<|eom|>` (id 200007) ends a message mid-turn and must not be in a
  caller-supplied stop set; only `<|eot|>` (200008) and end-of-text (200001) should stop generation
  ([settings](../../sources/meta.com/muse-spark-open-recommended-settings/2026-10-26.md)).
- **Hardware floor.** BF16 ~1.65 TB of weights and ~2 TB of VRAM budget on 8 × B300; NVFP4 ~537 GB on
  4 × B300. TensorRT-LLM support was on a feature branch at capture — "no pre-built release container
  or wheel includes Muse Spark Open support"
  ([docs overview](../../sources/meta.com/muse-spark-open-docs-overview/2026-10-26.md),
  [deploy](../../sources/meta.com/muse-spark-open-deploy/2026-10-26.md)).
- **Access is gated and personal-data-hungry.** Both Hub repositories are `gated: manual`; the form
  collects legal name, date of birth, country, affiliation, job title and IP geolocation
  ([HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)). Meta's own download
  path requires accepting the licence in a signed-in session
  ([get the model](../../sources/meta.com/muse-spark-open-get-the-model/2026-10-26.md)).
- **Groq access is not self-serve.** "Limited preview […] Contact us to discuss access for your
  organization" ([Groq](../../sources/groq.com/muse-spark-open/2026-10-26.md)).
- **No EU in-region routing** on OpenRouter
  ([OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md)).
- **Language coverage is contested.** Meta says the model "was trained on data from more than 100
  languages"; the Hub metadata declares `language: ["en"]`
  ([docs overview](../../sources/meta.com/muse-spark-open-docs-overview/2026-10-26.md),
  [HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)). No per-language
  evaluation is captured.
- **Age restriction and use policy.** The usage policy states the model "is not intended for
  individuals under the age of 18" and prohibits, among other things, military/ITAR, weapons, illegal
  drugs, critical-infrastructure and self-harm uses
  ([HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)).

## Access, pricing, licensing

**Weights and licence.** Muse Model License, version "Muse Spark Open", dated 2026-10-15: commercial
use, fine-tuning, distillation, merging, redistribution and sublicensing are permitted, subject to
three conditions — carry the licence and usage policy; display **"Built with Muse Spark Open"**
prominently in any product using the software or a derivative; and, if offering "Model as a Service"
with aggregate gross revenue above **US$20M** in any 12-month period, notify Meta and sign a separate
agreement. Meta claims no ownership of outputs
([HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)). AA classifies it as
open weights with "Commercial use is allowed with restrictions"
([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md)). This is an open-weights
release, not an OSI-approved open-source licence.

**Checkpoints.** BF16 `meta-models/Muse-Spark-Open-816B-A42B` (~1.65 TB, 65 shards) and NVFP4
`meta-models/Muse-Spark-Open-816B-A42B-NVFP4` (~537 GB, 127 shards)
([get the model](../../sources/meta.com/muse-spark-open-get-the-model/2026-10-26.md)). The Hub's
safetensors index reports **822,036,529,664 total parameters** for the BF16 repository against the
816B in every Meta document
([HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)). Third parties publish
further formats: AMD FP8 and MXFP4, Intel INT4 and MXFP4 (Crescent Island), Unsloth and ggml-org
GGUFs, MLX 3/4-bit conversions, and DFlash2/DSpark draft models for speculative decoding
([blog](../../sources/meta.com/build-with-muse-spark-open-blog/2026-10-26.md),
[HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)).

**No first-party price.** Meta does not sell inference for this model — "None (self-host or a hosted
provider)" — and the Model API pricing page carries no `muse-spark-open` row
([models list](../../sources/meta.com/muse-spark-open-models-list/2026-10-26.md)).

**Host pricing at capture** (USD per 1M tokens; the price is identical on all six OpenRouter
endpoints and on Fireworks' own page):

| Host | In | Cached in | Out | Context | Max out |
| --- | ---: | ---: | ---: | ---: | ---: |
| Baseten | 1.25 | 0.15 | 4.25 | 1,048,576 | 943,718 |
| Makora | 1.25 | 0.15 | 4.25 | 1,048,576 | 131,072 |
| Modal | 1.25 | 0.15 | 4.25 | 1,000,000 | 262,144 |
| Together | 1.25 | 0.15 | 4.25 | 1,048,576 | 943,718 |
| Nebius | 1.25 | 0.15 | 4.25 | 1,048,576 | 943,718 |
| Fireworks | 1.25 | 0.15 | 4.25 | 1,048,576 | 943,718 |
| Groq | not published | — | — | 131,072 | 131,072 |

Sources: [OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md),
[Fireworks](../../sources/fireworks.ai/muse-spark-open/2026-10-26.md),
[Groq](../../sources/groq.com/muse-spark-open/2026-10-26.md). AA's $1.25/$4.25, 88 % cache discount,
$0.78 blended rate (7:2:1 cache/input/output) and $0.84 per Index task are medians across providers
([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md)).

**The open model is priced like the closed one.** Meta's hosted Muse Spark 1.3 — a stronger model —
is $1.25 input / $0.15 cached / $4.25 output per 1M, exactly the open model's provider price, with a
$0.10/$0.002/$0.20 "contributor" tier for customers who allow their data to improve Meta's products
([Muse Spark 1.3](../../sources/meta.com/muse-spark-1-3-product-page/2026-10-26.md)). The open
release buys control and self-hosting, not a discount.

**Observed serving.** OpenRouter's per-provider table spans 51–294 tps and 0.30–1.97 s latency at
identical prices, with 3-day uptime 99.83–100 % and availability 99.86 %
([OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md)). Groq advertises ~350+ tps
([Groq](../../sources/groq.com/muse-spark-open/2026-10-26.md)). AA's provider medians are 189 t/s and
0.74 s TTFT ([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md)).

## Unresolved questions

1. **Which Muse Spark checkpoint are the open weights derived from?** Meta says only "the Muse Spark
   model we released in August" plus safety post-training
   ([product page](../../sources/meta.com/muse-spark-open-product-page/2026-10-26.md)). No source
   ties it to 1.1, 1.2 or 1.3, and the benchmark gap to 1.3 shows it is not the current closed model.
2. **816B or 822B?** Every Meta document says 816B total; the Hub's safetensors count is
   822,036,529,664. Nothing captured explains the ~6B difference (perception encoders, embeddings, or
   an FP32 copy of some tensors are all unverified guesses)
   ([HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)).
3. **Can the model actually take video and audio through a host?** Meta, AA and OpenRouter say yes;
   Fireworks and Groq document text and images only. No captured host schema confirms video/audio
   request parts ([Fireworks](../../sources/fireworks.ai/muse-spark-open/2026-10-26.md),
   [Groq](../../sources/groq.com/muse-spark-open/2026-10-26.md)).
4. **Does the vendor benchmark table survive independent re-measurement?** Not answerable from this
   evidence set: AA reports a composite only, and Vals AI's Terminal-Bench **4.0** figure (6.6 %) is a
   different benchmark from Meta's Terminal-Bench **2.1** (76.4 %), so neither confirms nor
   contradicts the other ([AA](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md),
   [OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md)).
5. **Is the Hugging Face model card readable at all?** It returns HTTP 401 behind the gate, so the
   card's own eval panel (the repo carries an `eval-results` tag) and any safety section are
   uncaptured ([HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)).
6. **Why is Fireworks' creation date a day earlier than Meta's announcement?** 14 Oct 2026 vs
   15 Oct 2026, unexplained by either party
   ([Fireworks](../../sources/fireworks.ai/muse-spark-open/2026-10-26.md)).
7. **Which evaluations ran the GPQA Diamond / TAU-Bench numbers on OpenRouter's page?** The table is
   labelled "AutoExacto benchmarks" with no methodology; the figures (GPQA Diamond ~90 %) are
   unattributed ([OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md)).

## Evidence status

**Floor met.** First-party: Meta's open-weight docs (overview, get-the-model, prompting, settings,
deploy), the models-list inventory, the product page with the vendor benchmark table, the dated
launch blog, and the gated Hugging Face repositories with their licence text
([docs overview](../../sources/meta.com/muse-spark-open-docs-overview/2026-10-26.md),
[models list](../../sources/meta.com/muse-spark-open-models-list/2026-10-26.md),
[product page](../../sources/meta.com/muse-spark-open-product-page/2026-10-26.md),
[blog](../../sources/meta.com/build-with-muse-spark-open-blog/2026-10-26.md),
[HF](../../sources/huggingface.co/muse-spark-open-model-card/2026-10-26.md)). Independent hosts:
[OpenRouter](../../sources/openrouter.ai/muse-spark-open/2026-10-26.md) (six endpoints, prices,
contexts, latency), [Fireworks](../../sources/fireworks.ai/muse-spark-open/2026-10-26.md) (price,
expert routing, limits), [Groq](../../sources/groq.com/muse-spark-open/2026-10-26.md) (preview tier,
131K limit). Independent evaluation:
[Artificial Analysis](../../sources/artificialanalysis.ai/muse-spark-open/2026-10-26.md).

**Release date 2026-10-15 is inside the roster's one-year window** (window start 2025-10-26); this
model is not a specialist exception and needs no out-of-window flag.

**All benchmark numbers on this page are vendor-run or relayed by an aggregator**, except AA's
composite Index and serving medians. **No direct tests were run for this page.** No model was
downloaded, no endpoint was called, and no image, video or audio request was made; every capability
claim above is documentation, host metadata, or third-party measurement.
