# GLM-5.3

Z.ai's open-weights flagship, released **2026-08-18**, and the model that made the GLM line
matter for agentic coding: on the vendor's own table it moves Terminal-Bench 3.0 from 4.6 to
28.3 and DeepSWE v1.1 from 46.2 to 66.9 over GLM-5.2
([model card](../../sources/huggingface.co/glm-5-3-model-card/2026-10-26.md)). It is text-only,
1M context, 128K output, and it cannot be run without reasoning
([docs](../../sources/z.ai/glm-5-3-docs/2026-10-26.md)).

The unusual fact is the identity: **the base model is GLM-5.2's.** "Scaling
post-training is all we did for GLM-5.3 … It uses the same base model as GLM-5.2 — every gain
comes from post-training" ([blog](../../sources/z.ai/glm-5-3-blog/2026-10-26.md)). Price did
not move either: $1.40 / $4.40 per million tokens, identical to GLM-5.2
([Z.AI pricing](../../sources/z.ai/pricing/2026-10-26.md)). The licence did move: GLM-5.2's
weights are MIT, GLM-5.3's are under a new custom licence
([licence](../../sources/huggingface.co/glm-5-3-license/2026-10-26.md)).

Independently, it is **mid-pack, not frontier**: Artificial Analysis scores it 45 on the
Intelligence Index, 13 points below Claude Opus 5.5 and level with DeepSeek V4.1 Flash 1017
([AA](../../sources/artificialanalysis.ai/glm-5-3/2026-10-26.md),
[AA leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)).

## Identity

- **Canonical name:** GLM-5.3. **First-party API ID:** `glm-5.3`
  ([docs](../../sources/z.ai/glm-5-3-docs/2026-10-26.md)).
- **Vendor:** Z.ai (copyright line "Copyright (c) 2026 Z.AI"). **Open weights**, published as
  `zai-org/GLM-5.3` on Hugging Face — fp8, 141 safetensors shards, custom
  ["GLM-5.3 License"](../../sources/huggingface.co/glm-5-3-license/2026-10-26.md).
- **Released:** **2026-08-18** per Z.ai's release notes
  ([release notes](../../sources/z.ai/new-released/2026-10-26.md)), which matches OpenRouter's
  catalogue `created` timestamp (2026-08-18T20:57:35Z). Weights followed on **2026-08-25**
  (Hugging Face repo `createdAt`); the launch post promised them "in two weeks"
  ([blog](../../sources/z.ai/glm-5-3-blog/2026-10-26.md)).
- **Status:** current. No deprecation or retirement statement was captured for any GLM model.
- **Aliases and labels:** Artificial Analysis lists "**GLM-5.3 (max)**"; OpenRouter lists
  `z-ai/glm-5.3` with canonical slug `z-ai/glm-5.3-20260816`; Hugging Face repo
  `zai-org/GLM-5.3`. "(max)" is an effort level, not a variant.
- **Host endpoints:** first-party at `api.z.ai` (OpenAI chat, OpenAI responses, and Anthropic
  message protocols); Amazon Bedrock; and 37 named providers on OpenRouter across 48 routes
  ([OpenRouter](../../sources/openrouter.ai/glm-5-3/2026-10-26.md)). DeepInfra serves it fp4 at
  $0.563 / $2.50 ([DeepInfra](../../sources/deepinfra.com/glm-5-3/2026-10-26.md)). Artificial
  Analysis measured 26 providers
  ([AA providers](../../sources/artificialanalysis.ai/glm-5-3-providers/2026-10-26.md)).
- **Siblings:** GLM-5.2 (same base, released 2026-06-16), GLM-5.1 (2026-04-07), GLM-5
  (2026-02-12); GLM-5.3-Flash (released 2026-08-26) and GLM-5.3-FlashX (dated 2026-09-18 only
  in OpenRouter's slug) are **different models** —
  native multimodal, 320B total / 18B active
  ([release notes](../../sources/z.ai/new-released/2026-10-26.md)). `glm-5.3-prime` and
  `glm-5.3-flashx` appear only on OpenRouter; neither is in Z.ai's own documentation index.

### Identity ambiguity

Three labels do not resolve cleanly:

1. **`20260816`.** OpenRouter's canonical slug carries a date two days before the first-party
   release date. No first-party page prints a dated snapshot ID; the API ID is undated.
   Treat `20260816` as host naming, not a checkpoint identity.
2. **`glm-5.3-prime`.** OpenRouter describes it as "the high-speed variant of Z.ai's GLM-5.3 …
   1.5–2× the output throughput", at exactly 2× list price ($2.80 / $8.80), with a canonical
   slug dated 2026-09-21. Z.ai's documentation does not list a Prime model. Whether it is a
   vendor SKU or a host product is unresolved.
3. **"GLM-5.3" vs "GLM-5.3 (max)".** AA measures one row, at the API default effort. The
   vendor reports a steep effort slope on its in-house benchmark (34.5% at max vs 31.4% at
   high), so a single-effort index score understates what the API returns at `max` and
   overstates what a cost-conscious caller sees at `low`.

### Distinct model or repackaging?

Distinct, on the wiki's dated-checkpoint test — but the case rests on behaviour, not on
architecture:

1. **Both are obtainable.** `zai-org/GLM-5.2` (295 files, MIT) and `zai-org/GLM-5.3` (141
   shards, custom licence) are separate downloadable checkpoints, and GLM-5.2 remains on the
   price list at the same rate
   ([licence record](../../sources/huggingface.co/glm-5-3-license/2026-10-26.md)).
2. **The difference changes the recommendation.** +23.7 points on Terminal-Bench 3.0 and +20.7
   on DeepSWE v1.1 at identical price is a large enough delta that one verdict would mislead a
   reader of the other. These are vendor numbers on vendor harnesses, so the *level* is
   suspect — but a delta of that size survives the usual harness spread.
3. **Variant-specific evidence exists.** The card, blog and docs all describe GLM-5.3 itself.

What is *not* distinct: the pretraining. There is no new base model here, no new
architecture, no new tokenizer. A reader who expects "5.3" to mean a new generation should read
it as **a post-training generation**, which is exactly how Z.ai describes it.

## Current assessment

**Current, open-weights, and the strongest open model for terminal-agent work at release — not
a frontier model.**

The evidence supports a narrow, defensible verdict: GLM-5.3 is a coding-and-agent specialist
whose gains over its own predecessor are large, whose absolute level is mid-pack, and whose
cost per token is high for an open-weights model.

- **Where it leads:** CyberGym 84.5, AutomationBench v1.0.6 48.2, GDPval-AA v2 1769 — the only
  three rows it tops on Z.ai's own 16-benchmark table
  ([model card](../../sources/huggingface.co/glm-5-3-model-card/2026-10-26.md)).
- **Where it does not:** Kimi K3, Fable 5 and GPT-5.6 Sol beat it on most coding rows, and it
  is far behind on ProgramBench (19.0 vs 33.0), FrontierSWE (78.1 vs 88.2) and ExploitGym
  (130 vs 247 tasks at 6h).
- **Independently:** AA 45 on the Intelligence Index, #3 in AA's open-weights >150B
  comparison class (the page prints both "# 3 / 121" and "122 models in this class"), at
  $2.01 per index task and 210M output tokens — "amongst the leading models in
  intelligence, but particularly expensive when comparing to other open weight models of
  similar size … very verbose"
  ([AA](../../sources/artificialanalysis.ai/glm-5-3/2026-10-26.md)).
- **On a public agentic board:** Vals AI ranks it 13th on Terminal-Bench 4.0 at **38.89%**,
  $9.37 per test, against Claude Opus 5.5's 65.15%
  ([Vals AI](../../sources/vals.ai/terminal-bench-4/2026-10-26.md)).

The tension between "#3 open-weights" and "13th on Terminal-Bench 4.0" is not a contradiction:
the index is composite and the board is one harness with one tool. Both are recorded.

## Documented capabilities

From the [docs](../../sources/z.ai/glm-5-3-docs/2026-10-26.md) and
[model card](../../sources/huggingface.co/glm-5-3-model-card/2026-10-26.md) unless noted.

| Property | Value |
| --- | --- |
| Context window | 1M tokens (`max_position_embeddings` 1,048,576) |
| Max output | 128K tokens (vendor); hosts advertise up to 943,718 |
| Input | **Text only** — no image, audio, video or file input |
| Output | Text |
| Reasoning | Mandatory. `thinking.type` fixed to `enabled`; `reasoning_effort` ∈ {`low`, `high`, `max`}, default **`max`** |
| Tool use | Function calling, structured/JSON output, context caching, streaming, web search (a built-in tool at $0.01/use) |
| Protocols | OpenAI chat completions, OpenAI responses, Anthropic messages — all at `api.z.ai` |
| Parameters | 753B total / 40B active (AA); `config.json` shows 78 layers, 256 routed + 1 shared experts, 8 active |
| Architecture | `glm_moe_dsa` — MoE with DeepSeek-style sparse attention; 3 dense + 75 sparse layers |
| Languages | `en`, `zh` (Hugging Face card metadata) |
| Knowledge cutoff | not stated anywhere captured |

**Marketing claims, labelled as such:** "the most capable open-weights model for coding",
"open-source SOTA on Terminal Bench 3.0 and Agents' Last Exam", "the best result on the
benchmark [CyberGym], ahead of Mythos 5 (83.8%) and GPT-5.6 Sol (83.6%)", and "state of the
art on CyberGym". The first two are claims about the open-weights subset, not about the
comparison table, which includes proprietary models. The CyberGym claim is checkable and
checks out *within the vendor's own table* — but every row there is vendor-run except the two
outsourced ones (GDPval-AA, FrontierSWE).

### Benchmarks

Vendor table, abridged to the rows that carry the story
([model card](../../sources/huggingface.co/glm-5-3-model-card/2026-10-26.md)); bold is the best
cell in the row as the card marks it.

| Evaluation | GLM-5.3 | GLM-5.2 | Kimi K3 | Opus 4.8 | Fable 5 | GPT-5.6 Sol |
| --- | --- | --- | --- | --- | --- | --- |
| Terminal Bench 2.1 | 88.2 | 81.0 | 88.3 | 85.0 | 88.0 | **88.8** |
| Terminal Bench 3.0 | 28.3 | 4.6 | 17.4 | 21.1 | 33.7 | **34.6** |
| DeepSWE v1.1 | 66.9 | 46.2 | 67.5 | 58.0 | 69.7 | **72.7** |
| ProgramBench (Almost Solved) | 19.0 | 9.5 | 17.5 | 15.5 | **33.0** | 23.0 |
| FrontierSWE | 78.1 | 67.5 | – | 66.5 | **88.2** | – |
| CyberGym | **84.5** | 77.2 | 80.0 | 78.1 | 83.8 | 83.6 |
| ExploitBench | 54.4 | 24.4 | 32.2 | 40.0 | **78.0** | 76.5 |
| AutomationBench v1.0.6 | **48.2** | 26.2 | 46.7 | 41.0 | 46.2 | 45.8 |
| Agents' Last Exam (ALE-CLI) | 28.5 | 23.8 | 27.6 | 25.7 | 23.8 | **28.6** |
| HLE w/ Tools | 62.5 | 54.7 | 59.8 | 57.9 | 63.9 | **64.5** |
| GDPval-AA v2 (Elo) | **1769** | 1508 | 1682 | 1588 | 1743 | 1730 |

Three caveats belong on those numbers:

- **Harnesses are vendor-chosen and mostly vendor-run.** Terminal-Bench 2.1/3.0, ALE,
  CyberGym, ExploitBench and PostTrainBench use Claude Code 2.1.207 with effort `max` and
  up to 1M context; DeepSWE uses mini-swe-agent; competitor cells are quoted from the
  competitors' own publications, not re-run. Only two rows are attributed elsewhere:
  GDPval-AA v2 ("Models are evaluated by Artificial Analysis") and FrontierSWE ("conducted by
  Proximal").
- **There is no Terminal-Bench 4.0 row**, which is the benchmark the independent boards run.
  So the vendor table and the Vals AI board cannot be compared row to row.
- **CyberGym's protocol is unusually permissive:** "unlimited timeout per task", single-run
  Pass@1 over 1,507 tasks, git metadata stripped and a domain whitelist applied to prevent
  cheating. Single-run scores are noisier than avg@3.

Independent measurements:

| Source | Measurement | Value |
| --- | --- | --- |
| Artificial Analysis | Intelligence Index v4.3.2 | **45**, #3 in the open-weights >150B class |
| Artificial Analysis | Cost per index task | $2.01 |
| Artificial Analysis | Output tokens on the index | 210M (median 140M in class) |
| Artificial Analysis | Output speed | 90.1 t/s |
| OpenRouter (restating AA) | Index / coding / agentic | 44.8 / 74.8 / 53.1 |
| Vals AI | Terminal-Bench 4.0, mini-swe-agent, avg@3 | **38.89%**, rank 13, $9.37/test |

## Limitations and constraints

**Reasoning cannot be turned off**

- `thinking.type` accepts only `enabled`. Sending `disabled` fails the request, so the
  migration from GLM-5.2 is a breaking change, not a drop-in
  ([docs](../../sources/z.ai/glm-5-3-docs/2026-10-26.md)). There is a cost floor per request
  even for trivial work; `reasoning_effort: low` is the cheapest setting, not "no thinking".
- In the chat template, `clear_thinking` defaults to **false**: prior turns' reasoning stays in
  context unless the caller passes `clear_thinking=true`
  ([model card](../../sources/huggingface.co/glm-5-3-model-card/2026-10-26.md)). For
  multi-turn chat this is a silent token multiplier.
- AA measures it as very verbose (210M output tokens on the index). Verbosity and
  mandatory reasoning compound: the token price understates the bill.

**Modality**

- Text only. No image, PDF, audio or video input — and that is a trap, because the *sibling*
  GLM-5.3-Flash is natively multimodal. Anything needing screenshots or documents must go
  elsewhere in the family.

**Output length**

- The vendor caps output at 128K; Z.AI's own OpenRouter endpoint advertises
  `max_completion_tokens` 131,072 (consistent), but third-party endpoints advertise up to
  943,718 ([OpenRouter](../../sources/openrouter.ai/glm-5-3/2026-10-26.md)). A request that
  relies on a host's larger figure is not portable to `api.z.ai`.

**Host and quantization spread**

- Input price varies 40× ($0.0703 to $2.80/M) and output 6.3× ($1.40 to $8.80/M) across
  OpenRouter's routes. The cheapest routes are fp4. Which quantization produced AA's or Vals
  AI's numbers is not stated anywhere captured.
- Speed varies by 1110% across the 26 providers AA measured, from 708.5 t/s (LithosAI FP4
  ULTRA CHAT) to a slowest provider AA does not name
  ([AA providers](../../sources/artificialanalysis.ai/glm-5-3-providers/2026-10-26.md)).

**Safety and dual use**

- Z.ai reports the model "identified 2,436 vulnerabilities across 269 projects, including
  1,097 medium-to-high severity issues", some "dating back roughly 40 years", and describes
  exploitation-chain reasoning as an *emergent* capability it did not plan for
  ([blog](../../sources/z.ai/glm-5-3-blog/2026-10-26.md)). It responds by publishing a
  disclosure ledger rather than by restricting the weights.
- Those weights are downloadable and openly licensed, and OpenRouter reports
  `is_moderated: false` for the model. Anyone can serve an unfiltered GLM-5.3.
- The release notes say GLM-5.3 "matches Mythos 5 in white-box code review", while the blog
  says it is "ahead of Mythos 5 (83.8%)" on CyberGym. The two first-party pages disagree on
  the comparison; the blog's number is the specific one.

**Licensing**

- The "GLM-5.3 License" is MIT-like, but a Model-as-a-Service operator with more than
  **US$10 billion** revenue over any 12 months "must pass Z.AI's security review before using
  the Software or its derivative works for any commercial purpose", with scope and method set
  by Z.AI ([licence](../../sources/huggingface.co/glm-5-3-license/2026-10-26.md)). No
  published procedure, timeline or fee. Hosts that merely relay requests are exempt.
- **The licence is stricter than the predecessor's.** GLM-5.2's weights are MIT; GLM-5.3's
  carry the review clause. A team that could ship GLM-5.2 freely may need a legal read before
  serving GLM-5.3 at scale.

## Access, pricing, licensing

USD per million tokens.

| Route | Input | Cached input | Output | Notes |
| --- | --- | --- | --- | --- |
| Z.AI API (list) | $1.40 | $0.26 | $4.40 | fp8; cache storage "limited-time free" |
| GLM-5.3-Flash (sibling) | $0.15 | $0.03 | $0.50 | different, multimodal model |
| Amazon Bedrock | $1.68 | $0.312 (+$2.10 write) | $5.28 | 20% premium over list |
| Together | $1.40 | $0.26 | $4.40 | list price |
| DeepInfra (fp4) | $0.563 | $0.125 | $2.50 | "38% off" its own $0.90/$4.00 reference; Flex tier $0.45/$2.00 |
| Cheapest on OpenRouter (Wafer fp4) | $0.0769 | $0.0689 | $1.40 | output still at list |

- **Billing basis:** per token, with a cached-input rate at 18.6% of input (an 81.4% discount —
  AA prints the same "Cache Discount 81%"), free cache storage for a limited time, and web
  search at $0.01 per use ([Z.AI pricing](../../sources/z.ai/pricing/2026-10-26.md)).
- **Subscription route:** the GLM Coding Plan uses a points-based quota, with off-peak and
  weekend calls consuming 50% of standard points; the launch post advertises a "1.5x
  limited-time quota boost … through August 31"
  ([docs](../../sources/z.ai/glm-5-3-docs/2026-10-26.md),
  [blog](../../sources/z.ai/glm-5-3-blog/2026-10-26.md)). Plan prices themselves were not
  captured.
- **Weights:** downloadable and free to use, modify, fine-tune and redistribute under the
  GLM-5.3 License, subject to attribution and the >US$10B Model-as-a-Service review clause.

## Unresolved questions

1. **What is the dated snapshot?** OpenRouter says `20260816`, Z.ai says 2026-08-18 and prints
   no dated ID. If a 20260816 checkpoint exists, it is undocumented by the vendor.
2. **Is `glm-5.3-prime` a Z.ai SKU?** It has its own canonical slug (2026-09-21), a 2× price and
   a speed claim, but no first-party documentation. It could be a vendor tier or a host
   product. Not merged into this page.
3. **Which quantization did the independent measurements use?** AA reports 90.1 t/s while
   measuring providers at up to 708.5 t/s; Vals AI reports $9.37 per Terminal-Bench test.
   Neither states the build. With fp4 routes 18× cheaper on input than fp8, the score and the
   price may not belong to the same artefact.
4. **Why do AA's numbers disagree?** AA's page prints 45 and "#3/121"; its own OpenRouter
   restatement prints 44.8. Rounding, or a re-run between captures? Unresolved.
5. **Is the model the same weights as GLM-5.2's base?** "Same base model" could mean the same
   pretrained checkpoint or merely the same architecture and data recipe. The card, docs and
   blog use the phrase without definition, and no parameter-level comparison was captured.
6. **What is the knowledge cutoff?** Not stated in any captured source. AA lists no cutoff
   either.
7. **Do the cyber claims replicate?** CyberGym 84.5 and ExploitBench 54.4 are single-run,
   vendor-harness numbers with unlimited per-task timeouts. No independent reproduction was
   captured, and the Security Disclosure Ledger behind the 2,436-vulnerability claim was not
   captured.
8. **How large is the effort slope really?** The vendor's only slope data is on the private
   Z.ai Code Bench (34.5% at max, 31.4% at high). AA publishes one effort level. A reader
   cannot tell what `low` costs in quality.

## Evidence status

**Floor met: six first-party records and five independent ones.**

- **First-party:** the [model card and weights repo](../../sources/huggingface.co/glm-5-3-model-card/2026-10-26.md),
  the [developer docs](../../sources/z.ai/glm-5-3-docs/2026-10-26.md), the
  [launch post](../../sources/z.ai/glm-5-3-blog/2026-10-26.md), the
  [price list](../../sources/z.ai/pricing/2026-10-26.md), plus the
  [dated release notes](../../sources/z.ai/new-released/2026-10-26.md) and the
  [licence text](../../sources/huggingface.co/glm-5-3-license/2026-10-26.md). Together these
  establish identity, date, weights availability, context, modality, reasoning control, tool
  surface, prices, benchmark claims and licence terms.
- **Independent hosts:** [OpenRouter](../../sources/openrouter.ai/glm-5-3/2026-10-26.md)
  (catalogue, 48 endpoints, per-route prices and quantization) and
  [DeepInfra](../../sources/deepinfra.com/glm-5-3/2026-10-26.md) (own rate card, fp4 serving,
  zero retention).
- **Independent measurement:** Artificial Analysis's
  [model page](../../sources/artificialanalysis.ai/glm-5-3/2026-10-26.md) and
  [provider comparison](../../sources/artificialanalysis.ai/glm-5-3-providers/2026-10-26.md),
  plus Vals AI's [Terminal-Bench 4.0 board](../../sources/vals.ai/terminal-bench-4/2026-10-26.md).
  The existing [AA leaderboard capture](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)
  independently shows the same 45.
- **No direct tests were run for this page.** No request was sent to any endpoint, no weights
  were downloaded, and no benchmark was re-executed. Every number is quoted from a source
  record. Where a figure appears twice — the index (45 on AA, 44.8 on OpenRouter), the release
  date (2026-08-18 vendor, 20260816 in OpenRouter's slug), the oldest disclosed vulnerability
  (~40 years in prose, 45 years in the chart) — both values are recorded rather than
  reconciled.
- **Weakest links:** AA's per-benchmark scores reach this wiki only through OpenRouter's
  restatement, because AA's charts render client-side; the vendor's benchmark table is
  almost entirely self-run; and no independent test of the cyber claims exists in this
  corpus.
