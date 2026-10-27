# Xiaomi MiMo-V2.6-Pro

Xiaomi's flagship foundation model, released **2026-09-21** with weights published under **MIT**:
a sparse Mixture-of-Experts at **1.02T total / 42B active parameters**, **1M-token** context,
text + image + video + audio in and text out, priced at **$0.435 / $0.87 per million input /
output tokens** with a $0.0036 cache-hit rate
([launch post](../../sources/xiaomi.com/mimo-v2-6-launch/2026-10-26.md),
[model card](../../sources/huggingface.co/mimo-v2-6-pro-model-card/2026-10-26.md),
[pricing](../../sources/xiaomi.com/mimo-api-pricing/2026-10-26.md)).

Artificial Analysis scores it **46.32** on Intelligence Index v4.3.2 at **$0.13 per index task**
([AA](../../sources/artificialanalysis.ai/mimo-v2-6-pro/2026-10-26/index.md)) — the roster's
"Index 46 at $0.13/task" label, confirmed. Xiaomi reads that as "the strongest open-source model
to date", ahead of Kimi K3 and Qwen3.8 Max
([launch post](../../sources/xiaomi.com/mimo-v2-6-launch/2026-10-26.md),
[platform release note](../../sources/xiaomi.com/mimo-api-release-note-v2-6/2026-10-26.md)); the claim is true only
under a qualifier the post does not state. Kimi K3.1 Pro scores **55** on the same index but its
weights were still a promise at capture ([Kimi K3.1 Pro](kimi-k3.1-pro.md)), so Pro is plausibly
the highest-scoring model whose weights are actually downloadable — not the highest-scoring
open-weight model in AA's field.

The more useful tension is between the price and the throughput. Pro is **among the cheapest
models at its intelligence level on a per-task basis** — $0.13 per index task against $2.11 for
Kimi K3.1 Pro — and simultaneously **slow (54 tok/s) and verbose (143.7M output tokens on the
index)**, with output tokens at roughly a tenth of Kimi's price. Most of that $0.13 is cache write
($0.054) at AA's input rate, a line the vendor currently waives, so the effective bill depends on
how much of a workload hits the prompt cache. It is a model to run in batch and agent loops, not to
wait on interactively.

## Identity

- **Canonical name:** MiMo-V2.6-Pro. **API IDs:** `mimo-v2.6-pro` on the Xiaomi MiMo Open Platform
  and `xiaomi/mimo-v2.6-pro` on OpenRouter, canonical slug `xiaomi/mimo-v2.6-pro-20260921`
  ([platform catalogue](../../sources/xiaomi.com/mimo-api-models-and-limits/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/mimo-v2-6-pro/2026-10-26/index.md)).
- **Vendor:** Xiaomi (MiMo team, "LLM-Core Xiaomi"), China. **Status:** current flagship, GA, no
  preview label and no announced retirement date anywhere in the captured docs.
- **Released:** **2026-09-21**. Four machine-readable timestamps agree — Hugging Face repository
  creation 15:39:33Z, OpenRouter `created` 20:07:39Z, the platform catalogue's `created`
  1790006400 (2026-09-21T16:00:00Z, i.e. 2026-09-22 00:00 Beijing time), and Artificial Analysis `releaseDate: "2026-09-21"` — while the launch
  post is dated **2026-09-22** and the technical report PDF was generated that same day. Treat
  2026-09-21 as the artefact date and 2026-09-22 as the announcement date. **Inside** the
  one-year window.
- **Weights:** `XiaomiMiMo/MiMo-V2.6-Pro-RL`, ungated, `license: mit`, fp8, 1,024.2B parameters in
  the safetensors index ([weights registry](../../sources/huggingface.co/mimo-v2-6-weights-registry/2026-10-26.md)).
- **Aliases and labels:** "MiMo-V2.6-Pro" (vendor, AA, OpenRouter); "Xiaomi MiMo:mimo-v2.6-pro"
  (platform catalogue display name); `MiMoV2ForCausalLM` / `mimo_v2` (architecture identifiers).
- **Siblings — all on this page, none given its own identity by the vendor:**
  - **MiMo-V2.6-Flash** — 309B total / 15B active, $0.14 / $0.28, AA index 37.88.
  - **MiMo-V2.6-Pro-UltraSpeed** — "the fast speed edition … Built from the same 1T MiMo-V2.6-Pro
    checkpoint", $4.35 / $8.70 (10× Pro), Xiaomi-only hosting.
  - **`-RL` and `-MOPD` checkpoints** — two post-trained variants per size; `-RL` published
    2026-09-21, `-MOPD` 2026-09-27, same layout and licence.
  - **MiMo-V2.6-Distill-Qwen-9B** — a Qwen3.5-9B finetune released alongside, a different base
    model and not a MiMo identity.
- **Predecessors:** MiMo-V2.5-Pro and MiMo-V2.5 were **deprecated on 2026-10-21**
  ([pricing page](../../sources/xiaomi.com/mimo-api-pricing/2026-10-26.md)), four weeks after V2.6
  shipped. V2.6 launched "at the same price" as V2.5.
- **Host endpoints:** Xiaomi's own platform (`api.xiaomimimo.com`, OpenAI- and Anthropic-compatible,
  data centres in **SG and NL**) plus OpenRouter, which routes to five providers: Xiaomi, Novita,
  DeepInfra, GMICloud and StreamLake.

### Is Flash a tier or a second model?

Xiaomi frames the two as one series with two sizes: "The MiMo-V2.6 series includes two natively
omnimodal models: MiMo-V2.6-Pro is our most capable model to date, while MiMo-V2.6-Flash strikes
the best balance between intelligence, efficiency, and cost"
([launch post](../../sources/xiaomi.com/mimo-v2-6-launch/2026-10-26.md)). They share release date,
architecture family, modality set, context window, licence, tokenizer and training pipeline, and
the launch post describes them as one six-day RL run ("30 steps each", $2.62M for Pro and $0.85M
for Flash). On the wiki's own test for a split, the picture is mixed:

| Test | Verdict |
| --- | --- |
| Both obtainable | Yes — both are ungated MIT repositories and both are served |
| Difference changes the recommendation | Yes — 8.4 index points, 3.1× price, opposite sign on one AA benchmark |
| Variant-specific evidence exists | Yes — separate model cards, separate AA records, separate host routings |

That is a defensible case for splitting, and the honest reading is that Flash is a **size tier
inside one model family, not a relabel of Pro**: same recipe, one third of the parameters, its own
numbers. This page keeps them together because the roster assigns one row to the series and the
vendor gives them one identity, one launch, one report and one price list; a future split should
carry the Flash material across rather than re-derive it. UltraSpeed, by contrast, is the *same*
checkpoint at a different service level, so it has no claim to separate identity at all.

## Current assessment

**Current, generally available, genuinely open, and the best value-per-task model in its class —
with a slow, verbose serving profile and vendor benchmarks that need reading carefully.**

What the evidence supports:

- **A real capability step for an open-weights model, at a fraction of the price of its nearest
  rivals.** AA index 46.32 against 55 for Kimi K3.1 Pro (weights withheld) and 45 for Qwen3.8 Max,
  at $0.435 / $0.87 versus $2 / $10 ([AA](../../sources/artificialanalysis.ai/mimo-v2-6-pro/2026-10-26/index.md),
  [Qwen3.8 Max](qwen3.8-max.md), [Kimi K3.1 Pro](kimi-k3.1-pro.md)). AA's own framing is scoped: "amongst the leading models in
  intelligence and well priced when comparing to other open weight models of similar size".
- **Agentic capability is the design target and it shows.** AA-Briefcase 1,510.7 Elo, GDPval-AA
  1,691.3, SciCode 60.9%, HLE 49.4%, AA-LCR 86.3% — the long-context row is the strongest number
  on the page and is absent from the vendor's own table.
- **The licence claim is a fact, not a promise.** MIT, ungated, on Hugging Face, with the
  checkpoint downloadable today; AA independently records `licenseName: "MIT"` and the same
  weights URL. This is the clearest contrast with Mistral Large 4 and Kimi K3.1 Pro, whose
  "open-weight" positions were promises with dates.
- **Host competition exists.** Five OpenRouter routes, two of them 10–15% under Xiaomi's list
  price, and ten for Flash.

What the evidence undercuts:

- **"Strongest open-source model to date."** True only for models whose weights are downloadable
  at capture. AA scores Kimi K3.1 Pro at 55, and Xiaomi's own launch post concedes "there is still
  a gap when compared with the strongest closed-source models Claude Fable 5.1 and GPT-6 Astra"
  ([release note](../../sources/xiaomi.com/mimo-api-release-note-v2-6/2026-10-26.md)).
- **Throughput and verbosity.** 54.4 tok/s median, 40.3 s to first answer token, 64k output tokens
  per index task — AA calls it "slower than average" and "somewhat verbose".
- **Calibration.** AA-Omniscience: 34.85% accuracy against a 40.6% hallucination rate. The vendor
  publishes no hallucination or refusal measurement at all.
- **The vendor's cyber rows are not the stock benchmarks.** See the benchmark section: the
  CyberGym figures come from a modified environment that hands the agent the compiled harness
  binary.
- **The "Vibe World" demos are unmeasured.** Game development, Blender modelling, robotic-arm
  control and music composition are described with videos, not scores; AA's only quantitative
  look at that claim is a 3D Elo of **983.1** (95% CI 952–1014), mid-field.

## Documented capabilities

From the [model card](../../sources/huggingface.co/mimo-v2-6-pro-model-card/2026-10-26.md), the
[technical report](../../sources/xiaomi.com/mimo-v2-6-technical-report/2026-10-26.md) and the
[API docs](../../sources/xiaomi.com/mimo-api-models-and-limits/2026-10-26.md).

| Property | Value |
| --- | --- |
| Architecture | Sparse MoE, hybrid SWA/GA Transformer; 70 layers (60 SWA / 10 GA), hidden 6144, 384 routed experts with 8 active, sliding window 128 |
| Parameters | 1.02T total, 42B active (safetensors index: 1,024.2B) |
| Context window | 1M (platform 1,048,576; AA 1,000,000; OpenRouter catalogue 1,050,000) |
| Max output | 131,072 (128K) on the platform; hosts advertise up to 945,000 |
| Input | Text, image (JPEG/PNG/GIF/WebP/BMP, ≤50 MB), video (MP4/MOV/AVI/WMV, ≤300 MB by URL, `fps` 0.1–10, `media_resolution` default/max), audio (≤100 MB, 6.25 tokens per second) |
| Output | Text only |
| Reasoning | `thinking.type: enabled|disabled`, **enabled by default**; no effort scale; `reasoning_content` stream; reasoning tokens billed as output |
| Tool use | Function calling, `tool_choice`, structured output, built-in web search (billed $5 / 1,000 calls overseas) |
| Speculative decoding | 5-layer SWA MTP drafter predicting 7 tokens per pass |
| Pre-training | 30T tokens (27T text stage + 3T omni stage); Flash was trained on 48T |
| Languages | `en`, `zh` declared on the model card; nothing else claimed |
| Knowledge cutoff | **not published** anywhere in vendor or host material |
| Rate limits | 100 RPM, 10M TPM per account; UltraSpeed is "reserved quota", contact sales |
| Data residency | SG and NL data centres |

**Marketing claims, labelled as claims:** "the strongest open-source model to date"; "at the same
intelligence level, its price is only **1/20 to 1/60** that of overseas models"
([release note](../../sources/xiaomi.com/mimo-api-release-note-v2-6/2026-10-26.md)); UltraSpeed
delivers "up to 20x faster output speed at the same quality"; "Vibe World" framing for
natural-language world-building; the case studies (MOF/PFAS materials screen, a >6,000-line Lean 4
formalization of the Li–Yorke theorem, orchestral MIDI composition, Franka Panda arm control).

### Benchmarks, vendor-reported

Identical tables in the [model card](../../sources/huggingface.co/mimo-v2-6-pro-model-card/2026-10-26.md)
and [technical report Table 3](../../sources/xiaomi.com/mimo-v2-6-technical-report/2026-10-26.md),
with Claude Opus 5, GPT-5.6 Sol, Claude Fable 5 and MiMo-V2.5-Pro as comparators:

| Benchmark | V2.6 Pro | V2.6 Flash | V2.5 Pro | Claude Opus 5 | GPT-5.6 Sol | Claude Fable 5 |
| --- | --- | --- | --- | --- | --- | --- |
| DeepSWE v1.1 | 71.9 | 67.9 | 19.0 | 74.0 | 73.0 | 70.0 |
| ProgramBench | 26.5 | 26.0 | 12.5 | 37.0 | 25.0 | 33.0 |
| MiMo Code Bench *(internal)* | 63.2 | 61.2 | 40.4 | 68.6 | 59.3 | – |
| AutomationBench v1.0.6 | 53.1 | 52.3 | 16.0 | 50.3 | 45.8 | 46.2 |
| Toolathlon-Verified | 76.9 | 73.6 | 49.1 | 80.6 | 74.9 | 77.9 |
| GDPval-AA 2.1 | 1673 | – | 1107 | 1708 | 1588 | 1595 |
| Agents' Last Exam | 31.6 | 27.6 | 13.2 | 31.6 | 30.8 | 25.7 |
| Terminal Bench 4.0 | 34.9 | 28.8 | 1.5 | 49.0 | 39.9 | 42.4 |
| Terminal Bench 2.1 | 89.9 | 87.6 | 65.2 | 89.1 | 88.8 | 84.3 |
| OSWorld-Verified | 82.0 | 80.8 | – | 83.4 | 83.0 | 86.0 |
| JobBench | 62.0 | 61.2 | 25.0 | 65.7 | 45.4 | 57.4 |
| CyberGym *(modified harness)* | 94.0 | 95.1 | 40.0 | – | – | – |
| MiMo Cyber Bench *(internal)* | 80.2 | 77.2 | 0.0 | – | – | – |
| ExploitGym | 17.8 | 6.0 | 0.2 | 22.1 | 30.3 | 28.4 |
| ExploitBench | 47.9 | 25.3 | 16.6 | 70.0 | 78.5 | 78.0 |
| SEC Bench Pro | 66.3 | 47.5 | 17.7 | – | 79.1 | – |
| MiMo Visual Coding *(internal)* | 72.3 | 71.5 | – | 70.0 | 73.4 | 69.1 |

Two of these rows are not what their labels suggest:

1. **CyberGym 94.0 / 95.1 is a modified environment.** The report's footnote says "We corrected
   the flawed evaluation environments based on the method described in Section 4.2.4", and that
   section says the vendor replaces CyberGym's fix-binary differential testing with sanitizer-report
   matching and gives the agent "the complete runtime environment: full source plus the compiled
   harness binary", whereas "CyberGym withholds the binary, restricting agents to source-only
   analysis". The score is not comparable to published CyberGym numbers.
2. **Three rows are in-house** — MiMo Code Bench, MiMo Cyber Bench, MiMo Visual Coding — with no
   public harness, no item count and no third-party replication.

No benchmark settings (temperature, harness version, attempts, pass@k) are published for any row.

### Benchmarks, independently measured

Artificial Analysis, Intelligence Index v4.3.2
([AA](../../sources/artificialanalysis.ai/mimo-v2-6-pro/2026-10-26/index.md)):

| Measurement | Value |
| --- | --- |
| Intelligence Index | **46.32** (median for its open-weight peer class: 19) |
| AA-Briefcase v1.1 | 1,510.67 Elo (CI 1,501–1,522) |
| GDPval-AA v2.1 | 1,691.26 Elo (CI 1,670–1,712) |
| AutomationBench-AA | 58.6% |
| Terminal-Bench 4.0 | 34.85% |
| Terminal-Bench-Science 0.1 | 5.7% |
| FrontierCode 1.1 | 45.4% |
| SciCode | 60.9% |
| Humanity's Last Exam | 49.4% |
| CritPt | 26.6% |
| AA-LCR v1.1 (long context) | 86.3% |
| GDP.pdf (all-pass) | 19.2% |
| AA-Omniscience accuracy / hallucination | 34.85% / 40.6% (index 8.38) |
| AnalystAgent | 37.5% |
| Capability indexes | Finance 46.1, Strategy 47.8, Legal 44.8, Healthcare 41.0, Engineering 46.9, Economics 53.2 |
| 3D Elo / code-to-video Elo | 983.1 / 1,051.5 |
| Speed / cost / verbosity | 54.4 tok/s / **$0.1332 per index task** / 143.7M index output tokens |
| Openness index | 52.78 (`opennessIndex`) |

Agreements worth naming: Terminal-Bench 4.0 is 34.9 (vendor) against 34.85 (AA); GDPval-AA 1673
sits inside AA's 1,670–1,712 interval; price, parameter count, context and licence match exactly.
Disagreements worth naming: AA's AutomationBench-AA is 58.6% against the vendor's 53.1% on v1.0.6;
AA-LCR and the hallucination row have no vendor counterpart; and AA's own summary text for Pro
calls it "somewhat verbose … in comparison to the median of 140M" while printing the same 140M for
both sides of that comparison.

## Limitations and constraints

**Throughput and cost shape**

- 54.4 tok/s median, 40.3 s to first answer token, 1,076 s per index task. Long reasoning runs
  dominate latency; the model is not interactive-grade for hard prompts.
- Verbose by design of its RL reward: 37,520 reasoning tokens plus 26,756 answer tokens per index
  task. Token price understates the bill for one-shot use.
- Cache writes are "free for a limited time" — a promotional term, not a rate card. AA's cost
  model still bills them at the input rate (cache write is $0.0536 of the $0.1332 per task), so the
  two figures bracket the real bill: cache-heavy workloads should cost less than AA's estimate
  while the waiver holds, and more once it ends.

**Serving constraints**

- Thinking mode **forces** temperature 1.0 and top_p 0.95; harnesses that need other sampling must
  disable thinking ([deep thinking doc](../../sources/xiaomi.com/mimo-api-deep-thinking/2026-10-26.md)).
- Multi-turn tool use with thinking requires echoing `reasoning_content` verbatim or the API
  returns **400**. Hosts and proxies that strip reasoning from history break agents.
- `max_completion_tokens` covers thinking plus answer; a long think can truncate the answer.
- 100 RPM / 10M TPM per account on the first-party API — modest for agentic loops; UltraSpeed is
  quota-by-negotiation.

**Access constraints**

- UltraSpeed is Xiaomi-only, 10× the price, no batch tier and no second provider.
- Third-party hosts quantize differently — Flash is served at fp8, fp4, mxfp4 and bf16 at similar
  prices, so "the model" is not one artifact across hosts. Pro is fp8/bf16 only.
- `tool_choice` support differs per host: DeepInfra supports all four modes, Xiaomi only
  `auto`/`required`, GMICloud/Novita/StreamLake only `auto`.
- Moderation is contradictory: Xiaomi's catalogue marks both models `is_moderated: true`;
  OpenRouter's record says `is_moderated: false`.

**Documentation gaps**

- **No knowledge cutoff** on any surface, including the technical report.
- No safety or alignment evaluation, no refusal benchmark, no acceptable-use page captured.
- Two post-trained variants (`-RL`, `-MOPD`) exist per size and no source says which one the API
  serves or which one the benchmark table describes.
- Vision and audio input are documented in detail but **not independently scored** — AA's
  MMMU-Pro and other vision rows are null.

## Access, pricing, licensing

USD per million tokens ([vendor pricing](../../sources/xiaomi.com/mimo-api-pricing/2026-10-26.md),
identical on [OpenRouter's Xiaomi route](../../sources/openrouter.ai/mimo-v2-6-pro/2026-10-26/index.md)):

| Item | Pro | Flash | Pro-UltraSpeed |
| --- | --- | --- | --- |
| Input (cache miss) | $0.435 | $0.14 | $4.35 |
| Input (cache hit) | $0.0036 | $0.0028 | $0.036 |
| Output | $0.87 | $0.28 | $8.70 |
| Batch API | $0.2175 / $0.435 | $0.07 / $0.14 | **not supported** |
| China list (RMB/M) | ¥3.00 / ¥6.00 | ¥1.00 / ¥2.00 | ¥30.00 / ¥60.00 |

**Billing basis:** per token, with media metered as input tokens (audio 6.25 tokens/s; images and
video by the published scaling calculators) and web search billed separately at $5 / 1,000 calls
overseas. Batch halves the price on Pro and Flash. UltraSpeed is exactly 10× Pro at every line,
which is the honest way to read it: a 10× service-level multiplier on one checkpoint, priced for
latency-sensitive production, not a different model.

**Host spread:** DeepInfra at −10% and GMICloud at −15% undercut Xiaomi's list; StreamLake charges
+20%; Novita matches. Host context varies from 1,000,000 to 1,050,000, and max completion from
128,000 to 945,000 depending on provider configuration.

**Licence: MIT, for real.** `cardData.license: mit`, `license:mit` tag, ungated, no acceptable-use
rider captured; Artificial Analysis independently records MIT and points at the same repository
([weights registry](../../sources/huggingface.co/mimo-v2-6-weights-registry/2026-10-26.md)). The
report, the RL environments (7k+ tasks, published as `XiaomiMiMo/MiMo-V2.6-RL-oss`) and the RL
framework are released alongside.

**Self-hosting:** possible but heavy. The card's own recipe is two nodes of SGLang at
`--tp 16 --dp 2 --ep 16` (or vLLM at TP8) on an fp8 checkpoint of ~1.02T parameters; there is no
smaller Pro variant, and no base checkpoint exists to fine-tune from. Flash is the tractable
self-host at `--tp 8` / TP4.

## Unresolved questions

1. **Which checkpoint is `mimo-v2.6-pro`?** `-RL` (2026-09-21) and `-MOPD` (2026-09-27) are
   different post-trained variants with the same size and licence. No source says which one is
   served or which one produced the published benchmark rows.
2. **Is UltraSpeed 10× or 20×?** The launch post says "up to 20x"; the platform catalogue and
   OpenRouter both say "roughly 10x". Neither states the baseline (tokens/s? end-to-end?), and no
   independent speed measurement of the UltraSpeed route exists.
3. **What is the real context window?** 1M from the vendor, 1,048,576 in the platform JSON,
   1,000,000 in AA's record, 1,050,000 in OpenRouter's catalogue. AA's 86.3% AA-LCR result does
   not say at what length it was run, and no captured source tests a 1M-token request.
4. **Why does AA find Flash better on AutomationBench while the vendor finds Pro better?** Vendor
   AutomationBench v1.0.6: 53.1 Pro / 52.3 Flash. AA's AutomationBench-AA: 58.6 Pro / 64.1 Flash.
   Different harness versions, and the sign flips — the one benchmark favouring the cheap tier is
   also the least stable across harnesses.
5. **How good is the multimodal understanding, really?** The architecture allocates a 681M MiMo
   ViT plus 308M + 127M audio encoders, and the API bills per image/video/audio token, but no
   independent vision or audio benchmark row exists for either size.
6. **What is the knowledge cutoff, and what safety posture applies?** Neither is published. Xiaomi's
   catalogue says the models are moderated; OpenRouter's says they are not.
7. **Is the "strongest open-source model" claim time-limited by Kimi K3.1 Pro?** Moonshot promised
   K3.1 Pro weights "by Nov 4" 2026; if they ship at 55 on the index, Pro's claim expires.

## Evidence status

**Floor met and exceeded.** Seven first-party records, one first-party weights registry, one
independent host record and two independent benchmark records.

- **First-party, seven:** the [launch post](../../sources/xiaomi.com/mimo-v2-6-launch/2026-10-26.md)
  (date, series framing, pricing table, UltraSpeed, availability, demos), the
  [technical report](../../sources/xiaomi.com/mimo-v2-6-technical-report/2026-10-26.md)
  (architecture, 30T/48T pre-training, RL setup, Table 3, the CyberGym caveat), the
  [model card](../../sources/huggingface.co/mimo-v2-6-pro-model-card/2026-10-26.md) (MIT, layout,
  serving recipes), the [Flash card](../../sources/huggingface.co/mimo-v2-6-flash-model-card/2026-10-26.md),
  the [API pricing page](../../sources/xiaomi.com/mimo-api-pricing/2026-10-26.md) (USD, RMB, batch,
  search, V2.5 deprecation), and the [API models/limits/hyperparameters set](../../sources/xiaomi.com/mimo-api-models-and-limits/2026-10-26.md)
  (1M/128K, RPM/TPM, thinking-mode sampling lock, moderation flag, data centres), the
  [platform release note](../../sources/xiaomi.com/mimo-api-release-note-v2-6/2026-10-26.md)
  (the closed-source concession and the 1/20–1/60 price claim). Two further first-party records
  cover [deep thinking](../../sources/xiaomi.com/mimo-api-deep-thinking/2026-10-26.md) and
  [multimodal input limits](../../sources/xiaomi.com/mimo-api-multimodal-inputs/2026-10-26.md).
- **Weights registry:** [Hugging Face API records](../../sources/huggingface.co/mimo-v2-6-weights-registry/2026-10-26.md)
  for all five V2.6 repositories plus the collection, with the JSON saved beside the record.
- **Independent host:** [OpenRouter](../../sources/openrouter.ai/mimo-v2-6-pro/2026-10-26/index.md),
  with the catalogue excerpt and all three endpoint payloads saved as artifacts.
- **Independent benchmarks, two:** [AA Pro](../../sources/artificialanalysis.ai/mimo-v2-6-pro/2026-10-26/index.md)
  and [AA Flash](../../sources/artificialanalysis.ai/mimo-v2-6-flash/2026-10-26/index.md), each with
  the page's serialized model record saved so the per-benchmark numbers are reproducible.
- **No direct tests were run for this page.** No request was sent to any endpoint; every number is
  quoted from a source record. Where sources disagree — release date (09-21 vs 09-22), Flash
  parameters (309B vs 310B vs 310.8B), UltraSpeed speedup (10× vs 20×), context (1M vs 1,048,576
  vs 1,050,000), AutomationBench direction, moderation flag — all values are recorded with their
  sources rather than reconciled.
- **Weakest links:** the launch post's benchmark appendix and all chart series are images and were
  not read (the same rows were recovered from the model card); the two `-MOPD` cards were not read
  in full; no AA vision, audio or Cyber Index measurement exists, so the multimodal and cyber
  claims rest on vendor material only; and no captured source reports a 1M-token request.
