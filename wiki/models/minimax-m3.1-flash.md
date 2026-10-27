# MiniMax M3.1 Flash

MiniMax's low-cost agentic workhorse: a ~428B-parameter native-multimodal MoE with a 1M-token
context, released **2026-10-19** at **$0.15 / $0.60 per million input / output tokens**, with
public weights under a restricted community licence
([launch post](../../sources/minimax.io/minimax-m3.1-flash-launch/2026-10-26.md),
[model card](../../sources/huggingface.co/minimax-m3.1-flash-model-card/2026-10-26.md)). It is a
derivative of the [MiniMax M3](#minimax-m3-vs-m31-flash) backbone — same total and active
parameter counts — with sparse attention extended to the whole model, quantization-aware
training, and a new speculative-decoding head
([card](../../sources/huggingface.co/minimax-m3.1-flash-model-card/2026-10-26.md)).

Its independent position is strong and narrow: **43 on the Artificial Analysis Intelligence
Index, rank 5 of 173**, at $0.22 per index task and 117.9 output tokens per second
([AA](../../sources/artificialanalysis.ai/minimax-m3.1-flash/2026-10-26.md)). The caveat that
comes with that score is verbosity — 180M index tokens against a 100M median — and a documented
inability to turn thinking off, which sets a cost floor per request.

## Identity

- **Canonical name:** `MiniMax-M3.1-Flash` (the hyphenated form used in every first-party
  reference: API model ID, model card, price list). Product and roster label: "MiniMax M3.1
  Flash". Artificial Analysis prints "MiniMax-M3.1-Flash"; OpenRouter prints "MiniMax: MiniMax
  M3.1 Flash".
- **Vendor:** MiniMax. **Status:** current; one of only two LLMs on the vendor's available-model
  list, alongside MiniMax-M3
  ([model list](../../sources/minimax.io/minimax-m3.1-flash-model-list/2026-10-26.md)). No
  deprecation date, no preview or beta label anywhere in the captured docs.
- **Released:** **2026-10-19**. Confirmed three ways: the launch post is dated 2026-10-19
  ([launch post](../../sources/minimax.io/minimax-m3.1-flash-launch/2026-10-26.md)); the vendor
  changelog carries an "Oct. 19, 2026" entry for it
  ([release notes](../../sources/minimax.io/minimax-h3-release-notes/2026-10-26.md)); OpenRouter
  says "Released Oct 19, 2026", its `canonical_slug` is `minimax/minimax-m3.1-flash-20261019`,
  and its `created` timestamp is 2026-10-19T03:12:49Z
  ([OpenRouter](../../sources/openrouter.ai/minimax-m3.1-flash/2026-10-26.md)). Artificial
  Analysis gives only "Released October 2026"
  ([AA](../../sources/artificialanalysis.ai/minimax-m3.1-flash/2026-10-26.md)).
- **Weights:** public and ungated in `MiniMaxAI/MiniMax-M3.1-Flash` on Hugging Face — 48
  safetensors shards plus a `dspark/` draft head, 8,782 downloads and 389 likes at capture,
  licence `minimax-community`
  ([card](../../sources/huggingface.co/minimax-m3.1-flash-model-card/2026-10-26.md),
  [licence](../../sources/huggingface.co/minimax-m3.1-flash-license/2026-10-26.md)).
- **Endpoints:** MiniMax's own API, Anthropic-compatible at `https://api.minimax.io/anthropic`
  (recommended) and OpenAI-compatible at `https://api.minimax.io/v1`, model ID
  `MiniMax-M3.1-Flash`
  ([API guide](../../sources/minimax.io/minimax-m3.1-flash-text-generation/2026-10-26.md)).
  Also on M Plan, MiniMax Code, and third-party serving: **10 providers on OpenRouter** at list
  price ([OpenRouter](../../sources/openrouter.ai/minimax-m3.1-flash/2026-10-26.md)) and **13
  providers measured by Artificial Analysis**, with blended prices from $0.10/M and speeds from
  59 to 764 t/s ([AA providers](../../sources/artificialanalysis.ai/minimax-m3.1-flash-providers/2026-10-26.md)).
- **Roster label mapping:** row 93's label "MiniMax M3.1 Flash" came from the Artificial
  Analysis leaderboard, whose neighbouring row prints "MiniMax-M3.1-Flash 43"
  ([leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md),
  [neighbour capture](../../sources/artificialanalysis.ai/claude-haiku-5-5/2026-10-26.md)). It
  resolves to `MiniMax-M3.1-Flash` on four independent matches: the AA model page carries the
  same name and the same score of 43
  ([AA](../../sources/artificialanalysis.ai/minimax-m3.1-flash/2026-10-26.md)); the vendor's
  docs list exactly that ID; the model card exists under it; and OpenRouter's `hugging_face_id`
  points at the same repository. There is no unresolved identity ambiguity.

### MiniMax M3 vs M3.1 Flash

M3.1 Flash is a **distinct model**, not a relabel of M3, and the two diverge in ways a reader
must choose between at request time:

| | MiniMax-M3 | MiniMax-M3.1-Flash |
| --- | --- | --- |
| Released | 2026-06-01 ([launch post](../../sources/minimax.io/minimax-m3-launch/2026-10-26.md)) | 2026-10-19 |
| Scale | ~428B total / ~23B active ([card](../../sources/huggingface.co/minimax-m3-model-card/2026-10-26.md)) | ~428B total / ~23B active |
| Context | 1,000,000 | 1,000,000 |
| Attention | MSA, "first three layers" full attention (M3.1 Flash card's own description of the change) | MSA "throughout the model" |
| Reasoning control | `thinking`: `enabled` / `adaptive` / `disabled` | always on; `effort` `low`–`max`, default `max`; `disabled` returns 400 |
| Input price / M | $0.30 (≤512k), $0.60 (>512k); Priority $0.45 / $0.90 | $0.15 flat |
| Output price / M | $1.20 / $2.40; Priority $1.80 / $3.60 | $0.60 flat |
| Cache read / M | $0.06 / $0.12 | $0.015 |

Sources for the table: [M3 launch post](../../sources/minimax.io/minimax-m3-launch/2026-10-26.md),
[M3 card](../../sources/huggingface.co/minimax-m3-model-card/2026-10-26.md), [M3.1 Flash
guide](../../sources/minimax.io/minimax-m3.1-flash-text-generation/2026-10-26.md), [pricing
page](../../sources/minimax.io/minimax-m3.1-flash-pricing/2026-10-26.md).

The three identity tests from the wiki skill all point to a split, and the roster row covers
only M3.1 Flash:

1. **Both obtainable.** M3 is on the vendor's available list and its weights are public; M3.1
   Flash is on the same list with its own weights.
2. **The difference changes the recommendation.** M3.1 Flash is half the price with no
   input-length tiers, but cannot run without reasoning; M3 can be run in `disabled` mode, which
   is the only documented way to remove the thinking floor.
3. **Variant-specific evidence exists.** Each model has its own launch post, its own benchmark
   slate and its own model card.

**No MiniMax M3 page exists in this wiki.** M3 is not on the roster; it is the comparison
baseline here, and its evidence is captured only to the depth needed to separate the two.

## Current assessment

**Current, independently corroborated, and genuinely open-weight.** This is the unusual case in
the roster where the vendor's "open-weight" description is a present property rather than a
commitment: the repository is ungated and complete at capture, and the licence text is
published.

Three claims the evidence supports:

- **Top-five on the independent composite index, at a low price.** AA scores it **43**, #5 of
  173, with a median of 13 across comparable models; cost per index task **$0.22** against a
  $0.15/$0.60 token price, and AA calls it "amongst the leading models in intelligence and well
  priced when comparing to other models of similar price"
  ([AA](../../sources/artificialanalysis.ai/minimax-m3.1-flash/2026-10-26.md)). Its neighbours on
  the leaderboard are Step 5 Preview and GPT-6.1 Terra (44 each) and Claude Haiku 5.5 (43)
  ([leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md),
  [neighbour capture](../../sources/artificialanalysis.ai/claude-haiku-5-5/2026-10-26.md)).
- **Strong agentic and legal/finance results from two independent evaluators.** Vals AI publishes
  ten evaluations for the model, including a Vals Index of 53.8%, Vibe Code Bench v1.1 at 73.9%
  and Terminal-Bench 4.0 at 25.3%
  ([OpenRouter restatement](../../sources/openrouter.ai/minimax-m3.1-flash/2026-10-26.md)).
  AA's HLE row reads 48.0% and AA-LCR 79.7%; the HLE figure is **above** the vendor card's 43.4
  for the text-only subset, which is the opposite of the usual vendor-optimism direction.
- **Cheap to serve, expensive to run.** The 90% cache discount and the flat $0.15/$0.60 rate
  make input-heavy agent loops cheap; the always-on thinking and 180M-token verbosity make the
  bill larger than the token price implies. AA's $0.22/task is the honest unit.

Two claims the evidence undercuts or complicates:

- **The speed story is measured three different ways.** MiniMax claims "output speeds can reach
  200+ TPS […] with median (P50) speeds consistently reaching 170+ TPS"
  ([launch post](../../sources/minimax.io/minimax-m3.1-flash-launch/2026-10-26.md)); AA measures
  **117.9 tok/s** on its default configuration; Artificial Analysis's provider page measures
  **764 t/s** at Inco, and OpenRouter's slowest listed provider (SambaNova) sits at 59 t/s. All
  of these can be true of different configurations, and none states its workload precisely
  enough to be compared.
- **"Open weight" is a vendor and host claim that Artificial Analysis contradicts by
  classification.** AA's header reads "MiniMax • **Proprietary** model • Released October 2026"
  ([AA](../../sources/artificialanalysis.ai/minimax-m3.1-flash/2026-10-26.md)), while the
  Hugging Face repository is public and ungated. AA's page does not explain the label; the
  repository and the licence text are the stronger evidence, and the disagreement is recorded
  rather than resolved.

**Is it a repackaging?** No. Same scale, but three stated training changes (sparse attention
throughout, quantization-aware training, DSpark speculative decoding), a new API ID, a new price
structure (flat, no input-length tiers, no Priority tier), and a new behavioural constraint
(thinking cannot be disabled)
([card](../../sources/huggingface.co/minimax-m3.1-flash-model-card/2026-10-26.md),
[pricing](../../sources/minimax.io/minimax-m3.1-flash-pricing/2026-10-26.md)).

**Ecosystem position.** From 2026-10-19, M Plan and Token Plan requests to the retiring M2.5 and
M2.7 families are routed to "M3.1 Flash" automatically, with old model names kept working
([model list](../../sources/minimax.io/minimax-m3.1-flash-model-list/2026-10-26.md)). MiniMax is
therefore using it as the mass-market replacement, not only as a cheap tier. The vendor also
says a "Pro" model "will arrive later" ([launch post](../../sources/minimax.io/minimax-m3.1-flash-launch/2026-10-26.md)).

## Documented capabilities

From the [API guide](../../sources/minimax.io/minimax-m3.1-flash-text-generation/2026-10-26.md),
[chat API reference](../../sources/minimax.io/minimax-m3.1-flash-chat-api/2026-10-26.md),
[model card](../../sources/huggingface.co/minimax-m3.1-flash-model-card/2026-10-26.md) and
[tool-use guide](../../sources/minimax.io/minimax-m3.1-flash-tool-use/2026-10-26.md) unless noted.

| Property | Value |
| --- | --- |
| Context window | 1,000,000 tokens (vendor); OpenRouter reports 1,048,576 |
| Max output | 524,288 tokens; vendor recommends 131,072 |
| Input | Text, images, video. Images: JPEG/PNG/GIF/WEBP, ≤10 MB each, URL or base64, `detail` low/default/high with a rough token heuristic (low ~hundreds, default ~1k–3k, high ~15k+) |
| Video input | MP4/AVI/MOV/MKV; URL or base64 up to 50 MB, Files API reference up to 512 MB; frame sampling `fps` 0.2–5, default 1 |
| Output | Text only |
| Reasoning | Always on, no opt-out. `effort` = `low` / `medium` / `high` / `xhigh` / `max`, default `max` |
| Tool use | Function tools with interleaved thinking; full assistant message (including thinking) must be replayed each turn |
| Structured output | JSON schema via `response_format` (OpenRouter's parameter list); `tools` and `tool_choice` confirmed there too |
| Sampling | `temperature=1.0`, `top_p=0.95` recommended |
| Caching | Automatic, requests ≥512 input tokens, cache read billed at 10% of input |
| Architecture | Native multimodal MoE, ~428B total / 23B active, MSA sparse attention throughout, QAT, DSpark draft head |
| Deployment | SGLang, vLLM, TokenSpeed recipes; Transformers/KTransformers/unsloth/ATOM "in progress"; FlagOS multi-chip |

**Marketing claims, labelled as such:** "Frontier multimodal coding model with 1M context window
and tunable thinking depth" (vendor's own model description), "an ultra-efficient open-weight
model for everyday work", "a generational leap in agentic tasks, coding, Computer Use and
cybersecurity", "nearly three times faster" inference and "70% lower" usage cost than its
predecessor, "ranks first among Chinese models" on OSWorld V2 and Agents' Last Exam, and the
"Space Bunny" provenance claim that an anonymous 200-trillion-token deployment "was an early
version of MiniMax M3.1 Flash"
([launch post](../../sources/minimax.io/minimax-m3.1-flash-launch/2026-10-26.md)). The "70%"
figure is not defined, and the published prices alone imply 50% (M3's $0.30/$1.20 to M3.1
Flash's $0.15/$0.60), so the remaining gap must come from token counts at a fixed task set — a
claim no captured source measures.

### Benchmarks

Vendor-reported, from the model card's table
([card](../../sources/huggingface.co/minimax-m3.1-flash-model-card/2026-10-26.md)); the
comparator columns are quoted from the competitors' publications or from AA, not re-run by
MiniMax:

| Evaluation | M3.1 Flash | Strongest comparator on the same row |
| --- | --- | --- |
| Automation-Bench v1.0.6 | 62.8 | DeepSeek V4.1 Flash-1017 60.5 |
| BankerToolBench | 76.2 | Opus 5 76.2 (tie) |
| GDP.pdf AA | 20.8 | GPT-5.6 Sol 27.2 |
| Terminal Bench 4.0 | 38.1 | Opus 5 51.8 |
| LOCA-Bench 256K | 60.3 | GPT-5.6 Sol 60.0 |
| Agents' Last Exam | 29.6 | Opus 5 32.2 |
| OSWorld 2.0 | 61.7 | Opus 5 70.6 |
| PostTrain Bench v1.1 | 39.3 | Opus 5 40.4 |
| DeepSWE v1.1 | 73.7 | DeepSeek V4.1 Flash-1017 77.0 |
| NL2Repo-Bench | 61.2 | Opus 5 75.3 |
| SWE Refactor Bench | 23.0 | Opus 5 31.0 |
| CyberGym | 82.2 | GLM-5.3 84.5 |
| BabyVision (with tools) | 91.0 | Opus 5 94.1 |
| HLE (without tools) | 43.4 | Opus 5 55.6 |
| CharXiv RQ | 82.5 | GPT-5.6 Sol 85.2 |

The card discloses the harness per row (OpenCode 1.17.18 for BankerToolBench, Codex 0.149.1 for
Terminal Bench 4.0, mini-SWE-agent 2.4.5 at 512K for DeepSWE, Claude Code 2.1.263 at 1M for
CyberGym, text-only 2,158-question subset for HLE) and notes "Results are for the official
weights; third-party quantizations may differ."

Independently measured:

| Source | Measurement | Value |
| --- | --- | --- |
| Artificial Analysis | Intelligence Index v4.3.2 | **43**, #5 of 173 (median 13) |
| Artificial Analysis | cost per index task / speed / verbosity | $0.22 / 117.9 tok/s / 180M tokens |
| Artificial Analysis | HLE / AA-LCR / GDPval-AA / CritPt / SciCode | 48.0% / 79.7% / 48.3% / 22.3% / 53.4% |
| Artificial Analysis | Terminal-Bench 4.0 / AA-Omniscience accuracy / non-hallucination | 25.8% / 56.2% / 7.2% |
| Vals AI (via OpenRouter) | Terminal-Bench 4.0 / Vals Index / Vibe Code Bench v1.1 | 25.3% / 53.8% / 73.9% |

The AA sub-scores reach this wiki through OpenRouter's restatement, because AA's own charts are
client-rendered ([OpenRouter](../../sources/openrouter.ai/minimax-m3.1-flash/2026-10-26.md));
the composite **43** is confirmed twice, on the AA model page and on the AA leaderboard.

**The disagreement that matters is Terminal-Bench 4.0:** vendor **38.1**, AA **25.8%**, Vals
**25.3%**. Two independent harnesses land within half a point of each other and 12–13 points
below the vendor's Codex-harness figure. That is the usual vendor-optimism direction and a large
enough gap that the vendor row should not be used for cross-model comparison. HLE shows the
opposite: AA measures 48.0% against the card's 43.4 (text-only subset), which is probably a
different subset or tool setting rather than a better model.

## Limitations and constraints

**Reasoning and cost shape**

- **Thinking cannot be disabled.** `thinking: {"type": "disabled"}` and `effort: "none"` both
  return 400 with `model "MiniMax-M3.1-Flash" requires adaptive thinking`
  ([guide](../../sources/minimax.io/minimax-m3.1-flash-text-generation/2026-10-26.md)). Every
  request pays a reasoning floor; the lever is `effort`, not off.
- **Verbose.** 180M index tokens against a 100M median, which is why the $0.22 cost per task is
  higher than the token price suggests
  ([AA](../../sources/artificialanalysis.ai/minimax-m3.1-flash/2026-10-26.md)).
- **Low non-hallucination rate on AA-Omniscience: 7.2%.** Whatever that composite measures, a
  single-digit non-hallucination figure is a warning for factual work, and it is the weakest
  number in the model's independent profile.

**API and integration**

- Multi-turn tool use requires replaying the complete assistant message including thinking; the
  vendor states the reasoning chain breaks otherwise
  ([tool use](../../sources/minimax.io/minimax-m3.1-flash-tool-use/2026-10-26.md)).
- Thinking is documented as "on demand" for tool turns, so a response may or may not contain a
  thinking block; code must check before reading.
- Images are capped at 10 MB each; video at 50 MB via URL/base64 or 512 MB via the Files API,
  with frame sampling limited to 0.2–5 fps. Long video is a file-upload workflow, not a
  paste-a-URL workflow.
- Caching only applies at ≥512 input tokens and is automatic — there is no cache-control
  surface, no TTL, and no published cache-write price
  ([caching](../../sources/minimax.io/minimax-m3.1-flash-prompt-caching/2026-10-26.md)).
- OpenRouter states the model is "not currently available through EU in-region routing"
  ([OpenRouter](../../sources/openrouter.ai/minimax-m3.1-flash/2026-10-26.md)) — a deployment
  constraint for EU-resident workloads.

**Licensing**

- Weights are public but **not permissively licensed**. The "MINIMAX COMMUNITY LICENSE" grants
  use "for non-commercial purposes" and makes commercial use conditional on prominent "Built
  with MiniMax M3.1-Flash" attribution plus a one-time notice to `api@minimax.io`, escalating to
  separate prior written authorisation above **$20M yearly revenue**
  ([licence](../../sources/huggingface.co/minimax-m3.1-flash-license/2026-10-26.md)). The
  Commercial Use definition explicitly reaches hosted API resale and post-trained derivatives, so
  it binds inference providers and fine-tuners. A prohibited-use list covers illegal content,
  military use, harm to minors, disinformation and discrimination.

**Documentation and measurement gaps**

- Modality coverage disagrees: vendor and OpenRouter say text + image + video; AA says "text and
  image". No captured source demonstrates video input working.
- Context is 1,000,000 in vendor docs and 1,048,576 on OpenRouter. The round vendor figure looks
  like a marketing rounding of 2^20, but nothing says so.
- No published training-data description, knowledge cutoff, or safety evaluation.
- No rate-limit, throughput-quota, or per-request cap documentation was captured.

## Access, pricing, licensing

USD per million tokens
([pricing](../../sources/minimax.io/minimax-m3.1-flash-pricing/2026-10-26.md)):

| Item | MiniMax-M3.1-Flash | MiniMax-M3 (≤512k / >512k) |
| --- | --- | --- |
| Input | $0.15 | $0.30 / $0.60 |
| Output | $0.60 | $1.20 / $2.40 |
| Cache read | $0.015 | $0.06 / $0.12 |
| Priority tier | none listed | 1.5× standard ($0.45/$1.80 and $0.90/$3.60) |
| Context | 1,000,000 | 1,000,000 |

**Billing basis:** per token, flat across the whole window, with automatic prefix caching billed
at 10% of the input rate for hits. No subscription required; the vendor also sells M Plan and
includes the model in MiniMax Code. AA independently reports "In $0.15 / Out $0.60 / Cache
Discount 90%", and every OpenRouter provider lists the same list price except two promotional
discounts (GMICloud 5%, SambaNova 50%), so the price is triple-confirmed
([AA](../../sources/artificialanalysis.ai/minimax-m3.1-flash/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/minimax-m3.1-flash/2026-10-26.md)).

**Host differences that matter:** third-party blended prices range from **$0.10/M** (GMI,
DigitalOcean, Nebius, Parasail, Together) to about 2.3× that, and output speed from 59 to
**764 t/s** — a 755% spread across 13 providers
([AA providers](../../sources/artificialanalysis.ai/minimax-m3.1-flash-providers/2026-10-26.md)).
At the same list price, provider selection is worth more than model selection here.

**Licence:** `minimax-community`, commercial use conditional as described above. The weights
themselves are ungated, so the licence, not an access gate, is the constraint.

## Unresolved questions

1. **When exactly did the weights become public?** The repository was created 2026-10-17, the
   launch post (2026-10-19) says "Model weights will be released later", and the repository is
   complete and ungated at capture. The release clearly happened after the announcement, but no
   captured source dates it.
2. **1,000,000 or 1,048,576 context?** Vendor docs and card say 1M; OpenRouter says 1,048,576
   and caps output at 524,288. No source states the effective usable window, and the card warns
   that "usable context length and throughput depend on GPU memory and the serving
   configuration".
3. **Does video input actually work end to end?** Vendor docs, the card and OpenRouter say yes;
   AA says text and image only. No captured source tests it.
4. **Why does Artificial Analysis label an openly downloadable model "Proprietary"?** The
   repository is ungated and the licence is published. AA's legend distinguishes open-weight,
   commercial-use-restricted and proprietary classes, so the label looks deliberate; its basis
   is not stated.
5. **What explains the Terminal-Bench 4.0 gap** (38.1 vendor vs 25.8 AA vs 25.3 Vals)? Three
   harnesses, one of them (AA) matching Vals almost exactly. Either the vendor's Codex scaffold
   is much stronger than the others or the vendor row is measured differently; the card does not
   say enough to tell.
6. **What is "70% lower usage cost"?** Per token the cut is 50%. The remaining 20 points must be
   token-count effects at a fixed task set, which no captured source quantifies.
7. **Does the Priority service tier apply?** The pricing page lists Standard/Priority only for
   M3 and the FAQ answers the tier question for M3 alone; M3.1 Flash appears once, in a flat
   table. Whether `service_tier: priority` is accepted for this model is untested here.
8. **What is "Pro"?** The launch post says a Pro model "will arrive later" without a name, date,
   or relationship to M3.1 Flash.
9. **Is M3.1 Flash the permanent successor to M3, or a parallel tier?** Both are on the available
   list, M3 has no retirement notice, and M3.1 Flash is being used as the automatic replacement
   for M2.5/M2.7 on subscriptions.

## Evidence status

**Floor met, comfortably.** Nine first-party records, two M3 sibling records, and four
independent records.

- **First-party:** the [launch post](../../sources/minimax.io/minimax-m3.1-flash-launch/2026-10-26.md)
  (date, price, benchmark claims, weights statement), the [API guide](../../sources/minimax.io/minimax-m3.1-flash-text-generation/2026-10-26.md)
  (identity, context, modalities, effort semantics, thinking limitation), the [chat API
  reference](../../sources/minimax.io/minimax-m3.1-flash-chat-api/2026-10-26.md) (output ceiling,
  image and video limits), the [tool-use
  guide](../../sources/minimax.io/minimax-m3.1-flash-tool-use/2026-10-26.md) (interleaved
  thinking contract), the [pricing page](../../sources/minimax.io/minimax-m3.1-flash-pricing/2026-10-26.md)
  (all rates and tiers), the [model list](../../sources/minimax.io/minimax-m3.1-flash-model-list/2026-10-26.md)
  (availability, retirement routing), the [prompt-caching page](../../sources/minimax.io/minimax-m3.1-flash-prompt-caching/2026-10-26.md)
  (cache mechanics), plus the [Hugging Face card](../../sources/huggingface.co/minimax-m3.1-flash-model-card/2026-10-26.md)
  (scale, architecture, benchmark table, harness notes) and the [licence](../../sources/huggingface.co/minimax-m3.1-flash-license/2026-10-26.md).
- **Independent host:** [OpenRouter](../../sources/openrouter.ai/minimax-m3.1-flash/2026-10-26.md)
  (catalogue metadata, modalities, context and output caps, ten providers, restated AA/Vals
  scores, EU-routing status).
- **Independent benchmarks:** [Artificial Analysis model page](../../sources/artificialanalysis.ai/minimax-m3.1-flash/2026-10-26.md)
  (index 43, speed, cost, verbosity) and [AA provider benchmarking](../../sources/artificialanalysis.ai/minimax-m3.1-flash-providers/2026-10-26.md)
  (13 providers, price and speed spread). The existing [AA leaderboard
  capture](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md) independently
  shows the same 43.
- **Shared vendor records reused, not edited:** the [Models page
  capture](../../sources/minimax.io/minimax-h3-models-intro/2026-10-26.md) (the Language section
  listing `MiniMax-M3.1-Flash` and `MiniMax-M3`) and the [release-notes
  capture](../../sources/minimax.io/minimax-h3-release-notes/2026-10-26.md) (the "Oct. 19, 2026"
  entry). Both were created for the H3 curation; their M3.1 Flash lines are used here rather
  than duplicated into new directories.
- **Sibling records, captured for the M3 distinction:** the [M3 launch
  post](../../sources/minimax.io/minimax-m3-launch/2026-10-26.md) and [M3 model
  card](../../sources/huggingface.co/minimax-m3-model-card/2026-10-26.md).
- **No direct tests were run for this page.** No request was sent to any endpoint, no weights
  were downloaded, and no benchmark was re-run. Every number is quoted from a source record.
  Where sources disagree — context (1,000,000 vs 1,048,576), modalities (with vs without video),
  Terminal-Bench 4.0 (38.1 / 25.8 / 25.3), HLE (43.4 / 48.0), speed (200+ TPS / 117.9 t/s / 764
  t/s), provider count (10 vs 13), AA's "Proprietary" label against an ungated repository — all
  values are recorded rather than reconciled.
- **Weakest links:** AA's per-benchmark sub-scores are second-hand through OpenRouter; the
  vendor's launch-post charts are images and were not transcribed, so the card is the only
  source for comparator columns; and no captured Vals AI page lists this model, so its ten
  scores are known only as OpenRouter restatements.
