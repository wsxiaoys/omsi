# InclusionAI Ling 3.1 Flash

Ant Group's 560B-parameter sparse MoE (25B active) text model, announced **2026-09-30**, open
weights under **MIT** from 2026-10-15, with a 1M-token architectural context that the vendor
serves at **256K** ([launch post](../../sources/ant-ling.com/ling-3-1-flash-release/2026-10-26.md),
[open-source post](../../sources/ant-ling.com/ling-3-1-flash-open-source/2026-10-26.md),
[docs](../../sources/ant-ling.com/ling-model-docs/2026-10-26.md)).

Independently measured at **41 on the Artificial Analysis Intelligence Index (rank 8 of 122),
218 output tokens/s, and $1.01 per index task**, against a **$0.30 / $0.90** per-million list
price that OpenRouter and DeepInfra currently discount to **$0.075 / $0.225**
([AA](../../sources/artificialanalysis.ai/ling-3.1-flash/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/ling-3.1-flash/2026-10-26.md),
[DeepInfra](../../sources/deepinfra.com/ling-3.1-flash/2026-10-26.md),
[pricing](../../sources/ant-ling.com/pricing/2026-10-26.md)).

The character is unusually clear from the evidence: **fast and capable, paid for in output
tokens**. It sits in the top five of 78 models on speed and last-quartile on cost per task,
because it burns 220M index tokens against a 140M median
([AA](../../sources/artificialanalysis.ai/ling-3.1-flash/2026-10-26.md)).

**No direct tests were run for this page.** Everything below is documentary or third-party
measurement.

## Identity

- **Canonical ID:** `Ling-3.1-flash` — the hyphenated lowercase form used by the vendor's model
  docs, pricing page, deprecation page and API migration snippets
  ([deprecation](../../sources/ant-ling.com/model-deprecation/2026-10-26.md)). Printed as "Ling
  3.1 Flash" (roster, Artificial Analysis), "inclusionAI: Ling 3.1 Flash" (OpenRouter), and
  `inclusionAI/Ling-3.1-flash` (Hugging Face, DeepInfra).
- **Vendor:** InclusionAI, the model team of Ant Group ("蚂蚁百灵" / Ant Ling). The docs describe
  Ling as "蚂蚁集团自主研发并开源的通用大语言模型系列" — Ant Group's self-developed,
  open-sourced LLM series
  ([docs](../../sources/ant-ling.com/ling-model-docs/2026-10-26.md)).
- **Status:** current and in "stable support"; the vendor's designated replacement for
  Ling-1T/2.5-1T/2.6-1T/2.6-flash and for Ring-1T/2.5-1T/2.6-1T
  ([deprecation](../../sources/ant-ling.com/model-deprecation/2026-10-26.md)). No retirement date
  is published for it.
- **Release dates — four different ones, all defensible:**

  | Date | What it marks | Source |
  | --- | --- | --- |
  | **2026-09-30** | vendor announcement + two-week free trial at 256K | [launch post](../../sources/ant-ling.com/ling-3-1-flash-release/2026-10-26.md) |
  | **2026-10-01** | Artificial Analysis's `releaseDate` | [AA](../../sources/artificialanalysis.ai/ling-3.1-flash/2026-10-26.md) |
  | **2026-10-02** | OpenRouter listing: `created` 2026-10-02T14:07:04Z, `canonical_slug` `…-20261002`, page prints "Released Oct 2, 2026" | [OpenRouter](../../sources/openrouter.ai/ling-3.1-flash/2026-10-26.md) |
  | **2026-10-15** | open weights (blog); repository created 2026-10-13 | [open-source post](../../sources/ant-ling.com/ling-3-1-flash-open-source/2026-10-26.md), [card](../../sources/huggingface.co/ling-3.1-flash-model-card/2026-10-26.md) |

  The model is **in the one-year window** (≥ 2025-10-26) on every reading, so no specialist
  exception is needed. Use 2026-09-30 as the launch date and 2026-10-15 as the open-weights date.
- **Weights:** `inclusionAI/Ling-3.1-flash`, MIT, ungated, **fp8** (`quantization_config.quant_method
  = fp8`, 75 modules excluded), 54 safetensors shards
  ([card](../../sources/huggingface.co/ling-3.1-flash-model-card/2026-10-26.md)). A **BF16 base
  checkpoint** was published 2026-10-25 under the same licence
  ([base card](../../sources/huggingface.co/ling-3.1-flash-base-model-card/2026-10-26.md)).
- **Endpoints:** the vendor's own API, Ling Studio, and hosts OpenRouter, DeepInfra and Novita;
  the vendor's pricing page also lists ZenMux at identical USD prices, which was not captured
  ([pricing](../../sources/ant-ling.com/pricing/2026-10-26.md)). The platform's other Ling models
  are documented as OpenAI- and Anthropic-protocol compatible; Ling-3.1-flash never got its own
  changelog entry, so its protocol support is the platform convention rather than a documented
  per-model fact ([changelog](../../sources/ant-ling.com/docs-changelog/2026-10-26.md)).
- **Siblings:** Ling-3.0-flash (124B / 5.1B), Ling-3.0-flash-VL (124B / 5.5B, the multimodal
  member), Ling-3.0-tiny (7.9B / 1.3B), Ling-3.0-flash-Fin, Ling-3.1-flash-base, and the `1019`
  checkpoint discussed below. Predecessors: Ling-2.6-flash, Ling-2.6-1T.
- **Roster mapping:** row 128's label "InclusionAI Ling 3.1 Flash" comes from the OpenRouter ID
  `inclusionai/ling-3.1-flash` and the AA entry "Ling 3.1 Flash". Both resolve to
  `Ling-3.1-flash`; there is no identity ambiguity about the *model*, only about which
  **checkpoint** a given endpoint serves (below).

## The `1019` checkpoint: why this page is not split

A second checkpoint exists, `Ling-3.1-flash-1019`, with its own MIT weights and its own model
card ([1019 card](../../sources/huggingface.co/ling-3.1-flash-1019-model-card/2026-10-26.md)).
Artificial Analysis carries it as a **separate, non-deprecated entry** ("Ling 3.1 Flash 1019",
`releaseDate` 2026-10-22, internal release slug `ling-3-1-flash-rc5`) and has measured both
checkpoints ([AA 1019](../../sources/artificialanalysis.ai/ling-3.1-flash-1019/2026-10-26.md)).

Against the wiki's three-part split test:

1. **Both obtainable — yes.** Both are MIT repositories; the older one is not delisted.
2. **Difference changes the recommendation — partly yes.** Briefcase +124 Elo with
   non-overlapping confidence intervals, CritPt 18% → 26%, AutomationBench 61.7% → 67.5%, HLE
   39.4% → 43.5%, index 41.09 → 43.90 (#8 → #4 of 122); but Terminal-Bench 4.0 and AA-LCR move
   slightly *down*, AA-Omniscience drops from +2.2 to −0.3, and cost per index task rises 48%
   ($1.01 → $1.49) on 59% more output tokens.
3. **Variant-specific evidence — yes.** Separate AA measurements and a separate model card.

The material therefore *is* per-checkpoint, and this page carries it per checkpoint rather than
folding it into one verdict. **But the page is not split, because a standalone `1019` page would
fail the evidence floor:** no independent host record exists for it. OpenRouter pins the earlier
checkpoint (`canonical_slug …-20261002`), DeepInfra's listing predates it, Novita's entry predates
the model's own announcement, and the vendor's docs, pricing page, changelog and deprecation page
name only `Ling-3.1-flash` — one SKU, one price, no `1019` line item
([OpenRouter](../../sources/openrouter.ai/ling-3.1-flash/2026-10-26.md),
[DeepInfra](../../sources/deepinfra.com/ling-3.1-flash/2026-10-26.md),
[Novita](../../sources/novita.ai/ling-3.1-flash/2026-10-26.md),
[pricing](../../sources/ant-ling.com/pricing/2026-10-26.md)). AA's `1019` figures come from
`performanceDataSource: firstParty / InclusionAI` with `hostModelCount: 1` — that is the vendor's
own endpoint, not a host.

**What would flip it:** a host listing a `1019` SKU, or the vendor giving the checkpoint its own
model ID, price or support window. Either would make a second page defensible; today it would be
one page citing one evaluator.

**Practical consequence for a reader:** if you call `inclusionai/ling-3.1-flash` on OpenRouter you
are getting the **`20261002`** checkpoint and the 41-level scores, not the 44-level ones. If you
run the vendor API or the `1019` weights, expect the higher scores and ~50% more tokens.

## Current assessment

Ling-3.1-flash is a **distinct model, not a repackaging**. It is over four times the scale of
Ling-3.0-flash (560B/25B against 124B/5.1B), raises the linear-attention ratio to 63 KDA layers
per 9 Gated MLA layers, and doubles the routed-expert count to 512 — the `1019` card and the
parent card share the identical architecture table, so the scale step is the version boundary,
not the checkpoint ([docs](../../sources/ant-ling.com/ling-model-docs/2026-10-26.md),
[card](../../sources/huggingface.co/ling-3.1-flash-model-card/2026-10-26.md)).

Where it is strong, per Artificial Analysis: agentic knowledge work (AA-Briefcase 1397 Elo),
real-world work tasks (GDPval-AA 1617 Elo), long-context recall (AA-LCR 83%), general reasoning
(HLE 39.4%). Where it is weak: terminal-based agentic coding (Terminal-Bench 4.0 **33.3%**) and
knowledge reliability (AA-Omniscience **+2.2**, i.e. about as many right as wrong once
hallucinations are penalised) — despite a launch post that leads with software engineering and
terminal tool use ([AA](../../sources/artificialanalysis.ai/ling-3.1-flash/2026-10-26.md),
[launch post](../../sources/ant-ling.com/ling-3-1-flash-release/2026-10-26.md)).

The commercial position is the interesting part. At the promotional $0.075/$0.225 it is one of
the cheapest routes to index-41-class intelligence; at the $0.30/$0.90 list price, AA's $1.01 per
task ranks it 40th of 47 models on cost-efficiency
([AA](../../sources/artificialanalysis.ai/ling-3.1-flash/2026-10-26.md)). Both statements are true
and they describe the same model on different days.

## Documented capabilities

From the vendor docs, both model cards and the host catalogues:

- **Architecture:** hybrid-linear MoE, 63 KDA + 9 Gated MLA layers (7:1), 4 dense layers, 512
  routed experts, 8 routed + 1 shared expert active per token, 64 attention heads, hidden size
  4096, expert intermediate size 1280, dense intermediate size 10240, vocabulary 157184
  ([card](../../sources/huggingface.co/ling-3.1-flash-model-card/2026-10-26.md)).
- **Modalities:** text in, text out. No image, video or audio input on any source; the multimodal
  member of the family is Ling-3.0-flash-VL
  ([docs](../../sources/ant-ling.com/ling-model-docs/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/ling-3.1-flash/2026-10-26.md)).
- **Reasoning control:** hybrid reasoning with a request-time `enable_thinking` switch in the chat
  template; the vendor recommends leaving it on and sampling at `temperature=1.0, top_p=0.95,
  top_k=20` ([card](../../sources/huggingface.co/ling-3.1-flash-model-card/2026-10-26.md)).
  OpenRouter reports `reasoning: {mandatory: false, default_enabled: true}` — thinking is on by
  default and can be turned off
  ([OpenRouter](../../sources/openrouter.ai/ling-3.1-flash/2026-10-26.md)). AA tested the reasoning
  variant and notes a non-reasoning variant "may also exist"; none is documented.
- **Tool use:** vendor-side `ling3` tool-call and reasoning parsers in vLLM, strengthened JSON
  Schema support, and an Anthropic-protocol endpoint on Novita
  ([card](../../sources/huggingface.co/ling-3.1-flash-model-card/2026-10-26.md),
  [open-source post](../../sources/ant-ling.com/ling-3-1-flash-open-source/2026-10-26.md),
  [Novita](../../sources/novita.ai/ling-3.1-flash/2026-10-26.md)). OpenRouter exposes `tools`,
  `tool_choice`, `structured_outputs` and `response_format`; DeepInfra badges "JSON" and
  "Function"; Novita lists `function-calling`.
- **Serving:** day-0 SGLang image (`lmsysorg/sglang:dev-ling-3.1-flash`), MTP/NEXTN speculative
  decoding, PCP/DCP long-context parallelism, and a private-endpoint option on DeepInfra.
- **Agent harnesses (vendor claim):** "strong user experience" in Claude Code, Kilo Code, Qwen
  Code, Hermes Agent and OpenClaw; DeepInfra tags the model `cc-native`
  ([card](../../sources/huggingface.co/ling-3.1-flash-model-card/2026-10-26.md),
  [DeepInfra](../../sources/deepinfra.com/ling-3.1-flash/2026-10-26.md)).
- **Vendor long-horizon anecdotes (unverified, vendor-run):** a from-scratch Lua→x86-64 compiler
  in ~17 hours passing 178 of 182 tests (97.8%, against vendor-quoted Claude Fable 5 at 99.0% and
  GLM-5.3-Flash at 95.9%); a Pyright optimisation reaching 1.432× after ~10 hours; a Rust
  reimplementation of a C image library at 8.015× after ~20 hours (against a vendor-quoted Fable 5
  at 27.310×); and discovery of a stack-buffer-overflow in OceanBase's open-source parser
  ([launch post](../../sources/ant-ling.com/ling-3-1-flash-release/2026-10-26.md)).
- **Design Arena (vendor-restated):** third among open-weights models in data visualisation,
  React Native mobile app, 3D design and game development; fourth in SVG; fifth in website
  ([open-source post](../../sources/ant-ling.com/ling-3-1-flash-open-source/2026-10-26.md)).

## Independent measurement

Artificial Analysis is the only independent evaluator captured, and it measured **both**
checkpoints on the same index (v4.3.2, ten evaluations) through InclusionAI's first-party API.

| Evaluation | Ling 3.1 Flash (`20261002`) | Ling 3.1 Flash `1019` | Δ |
| --- | --- | --- | --- |
| Intelligence Index | 41.09 | **43.90** | +2.81 |
| AA-Briefcase v1.1 | 1397.34 Elo | **1520.99 Elo** | +124 |
| GDPval-AA v2.1 | 1617.32 Elo | **1653.33 Elo** | +36 |
| AutomationBench-AA | 61.74% | **67.55%** | +5.8 |
| Humanity's Last Exam | 39.43% | **43.47%** | +4.0 |
| CritPt | 18.0% | **26.0%** | +8.0 |
| SciCode | 54.05% | **56.83%** | +2.8 |
| Terminal-Bench 4.0 | **33.33%** | 32.83% | −0.5 |
| AA-LCR v1.1 | **83.0%** | 82.33% | −0.7 |
| AA-Omniscience index | **+2.22** | −0.32 | −2.5 |
| Output tokens (index) | **220M** | 350M | +59% |
| Cost per index task | **$1.01** | $1.49 | +48% |
| Output speed | **218.4 t/s** | not measured | — |

Sources: [AA, Ling 3.1 Flash](../../sources/artificialanalysis.ai/ling-3.1-flash/2026-10-26.md),
[AA, Ling 3.1 Flash 1019](../../sources/artificialanalysis.ai/ling-3.1-flash-1019/2026-10-26.md).

Reading it honestly: the `1019` update is a **real but narrow** gain concentrated in knowledge
work and scientific reasoning, bought with a 48% higher cost per task and a slightly worse
hallucination score. On terminal-agent work — the axis the vendor markets hardest — the two
checkpoints are indistinguishable.

The parent checkpoint's AA profile at list price: **rank 8 of 122 on intelligence, 5 of 78 on
speed, 40 of 47 on cost per task, 41 of 48 on verbosity**
([AA](../../sources/artificialanalysis.ai/ling-3.1-flash/2026-10-26.md)). OpenRouter re-publishes
the same numbers, so the catalogue view is AA's view, not a second opinion
([OpenRouter](../../sources/openrouter.ai/ling-3.1-flash/2026-10-26.md)).

## Limitations and constraints

- **The 1M context is not what you get.** The model card claims a 1M-token window; the vendor's
  own docs say "模型上下文上限 1M，当前官方服务开放 256K" — ceiling 1M, **service currently
  opens 256K** — and the launch post says the free trial ran at 256K with 1M "planned" after the
  move to paid service
  ([docs](../../sources/ant-ling.com/ling-model-docs/2026-10-26.md),
  [launch post](../../sources/ant-ling.com/ling-3-1-flash-release/2026-10-26.md)). Every captured
  host caps at **262,144** tokens (OpenRouter 262,144 in / 235,929 out; DeepInfra 262,144; Novita
  262,144 in and out). Treat 1M as an architectural claim, 256K as the served figure.
- **Verbosity is the cost driver.** 220M index tokens against a 140M median; AA's verdict is
  "notably fast, however very verbose". At a fixed unit price the model's real cost is set by how
  much it writes, and `1019` writes 59% more again.
- **Terminal-Bench 4.0 is a weak spot** (33.3%, 32.8% on `1019`) — the opposite of what the
  marketing emphasises.
- **Knowledge reliability is mediocre**: AA-Omniscience +2.22 with ~29% accuracy, and it *falls*
  to −0.32 on `1019`. Do not use it as a factual authority.
- **Hosted precision is not published precision.** The weights are fp8; DeepInfra and OpenRouter's
  DeepInfra route serve **fp4**
  ([DeepInfra](../../sources/deepinfra.com/ling-3.1-flash/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/ling-3.1-flash/2026-10-26.md)). No source measures the
  quality cost of that quantization.
- **The vendor's MXFP4 build is not in the repository.** The open-source post describes MXFP4
  routed experts with block-FP8 dense layers at 292GB and 4 Hopper cards; the Hugging Face
  repository carries one fp8 build in 54 shards and lists no MXFP4 files
  ([open-source post](../../sources/ant-ling.com/ling-3-1-flash-open-source/2026-10-26.md),
  [card](../../sources/huggingface.co/ling-3.1-flash-model-card/2026-10-26.md)). Self-hosting
  from the published weights is heavier than the blog implies.
- **First-party API is rate-limited and China-billing-bound:** 2 QPS globally, 90-second
  synchronous timeout, streaming recommended, Alipay personal accounts only — no enterprise
  billing ([rate limits](../../sources/ant-ling.com/api-rate-limits/2026-10-26.md),
  [pricing](../../sources/ant-ling.com/pricing/2026-10-26.md)). For a model sold on multi-hour
  agent runs, 2 QPS is a real ceiling.
- **The discount is temporary and undated.** No end date on the vendor page, DeepInfra's
  `discount_ends_at` is null, and OpenRouter carries a bare `discount: 0.75`. Novita's catalogue
  shows only the list price. Budget at $0.30/$0.90.
- **No multimodal input at all**, so image/video/screenshot workflows need Ling-3.0-flash-VL.
- **Vendor benchmark claims are AA restatements.** The `1019` card's headline figures (Briefcase
  ~1400 → 1524, AutomationBench 62% → 68%, CritPt 18% → 26%, SciCode 54% → 57%, index 41 → 44)
  match AA's measurements to the rounding, so they are not an independent confirmation
  ([1019 card](../../sources/huggingface.co/ling-3.1-flash-1019-model-card/2026-10-26.md)). The
  parent card and both blog posts print **no numeric benchmark table at all**; their charts are
  images.
- **The vendor's own medical caveat:** HealthBench Professional "不等同于临床安全认证" — not a
  clinical safety certification ([launch post](../../sources/ant-ling.com/ling-3-1-flash-release/2026-10-26.md)).
- **Documentation gaps:** the docs changelog has no entry for Ling-3.1-flash's launch, or for
  `1019`, while it logs much smaller releases
  ([changelog](../../sources/ant-ling.com/docs-changelog/2026-10-26.md)); and the DeepInfra model
  page 404s on its lowercase URL path and only resolves with the repository's casing
  ([DeepInfra](../../sources/deepinfra.com/ling-3.1-flash/2026-10-26.md)).

## Access, pricing and licensing

### Price per million tokens

| Route | Input | Output | Cache read | Note |
| --- | --- | --- | --- | --- |
| Vendor list (Ling Studio, RMB) | ¥2.00 | ¥6.00 | ¥0.40 | promotional ¥0.50 / ¥1.50 / ¥0.10 |
| Vendor-published USD (OpenRouter, ZenMux) | $0.30 | $0.90 | $0.06 | promotional $0.075 / $0.225 / $0.015 |
| OpenRouter (DeepInfra fp4, Novita) | $0.30 → **$0.075** | $0.90 → **$0.225** | $0.06 → **$0.015** | 75% off |
| DeepInfra direct | $0.30 → **$0.075** | $0.90 → **$0.225** | $0.06 → **$0.015** | "75% off", no end date |
| Novita direct catalogue | $0.30 | $0.90 | $0.06 | promotion not shown |
| Artificial Analysis | $0.30 | $0.90 | $0.06 (80% cache discount) | undiscounted, cost/task $1.01 |

Sources: [pricing](../../sources/ant-ling.com/pricing/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/ling-3.1-flash/2026-10-26.md),
[DeepInfra](../../sources/deepinfra.com/ling-3.1-flash/2026-10-26.md),
[Novita](../../sources/novita.ai/ling-3.1-flash/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/ling-3.1-flash/2026-10-26.md).

The vendor states the promotion applies in step on OpenRouter and ZenMux, and that the platform's
own price governs. The vendor's own blended estimate is "≈$0.19 per million tokens"
([open-source post](../../sources/ant-ling.com/ling-3-1-flash-open-source/2026-10-26.md)).

**Billing basis:** per token, daily settlement, no minimum spend; Chinese-character tokenisation
is estimated at ~2 tokens per character. Onboarding requires an Alipay account
([pricing](../../sources/ant-ling.com/pricing/2026-10-26.md)).

### Host differences that matter

- **DeepInfra:** fp4, zero retention, private-endpoint option, JSON + function calling, 262,144
  context.
- **Novita:** list price only in the catalogue, an Anthropic-protocol endpoint, serverless, 262,144
  in *and* out.
- **OpenRouter:** two providers at identical promotional prices, implicit caching on both, no
  EU in-region routing.
- **Vendor API:** the only route where AA's measurements were taken; 2 QPS and a 90-second
  synchronous timeout.

### Licensing

Weights are **MIT** for the instruct model, the `1019` checkpoint and the BF16 base checkpoint,
ungated on Hugging Face
([card](../../sources/huggingface.co/ling-3.1-flash-model-card/2026-10-26.md),
[1019 card](../../sources/huggingface.co/ling-3.1-flash-1019-model-card/2026-10-26.md),
[base card](../../sources/huggingface.co/ling-3.1-flash-base-model-card/2026-10-26.md)). A
training-content summary is published separately and is explicitly not a licence
([card](../../sources/huggingface.co/ling-3.1-flash-model-card/2026-10-26.md)). The wiki has not
reviewed the training-content disclosure itself.

## Unresolved questions

1. **Which checkpoint does each route serve?** OpenRouter is pinned to `20261002`; the vendor's
   docs, pricing and changelog name one undifferentiated `Ling-3.1-flash`; AA measured both
   through the vendor's first-party API. The most economical reading — that the vendor's single
   SKU now serves `1019` while hosts still serve the earlier build — is inference, not
   documentation.
2. **When was `1019` released?** AA says 2026-10-22; the suffix reads 19 October; the weights
   repository was created later than the nominal capture date of this batch. No first-party source
   states a date.
3. **Will the vendor open the 1M context it advertises?** The launch post planned 1M "after the
   free trial ends and the model moves to paid service"; the docs still say 256K.
4. **When does the 75% promotion end?** No date anywhere.
5. **Is the 292GB MXFP4 build published?** Not in the Hugging Face repository listing.
6. **Does any measurement independent of Artificial Analysis exist?** None captured. Both the
   vendor's headline claims and OpenRouter's benchmark panel trace back to AA.
7. **Is there a non-reasoning variant?** AA says one "may also exist"; no source documents it.
8. **Why does the `1019` improvement not show up on Terminal-Bench 4.0?** The card claims
   "significant improvements in reasoning and real-world agentic capabilities"; the one benchmark
   aimed squarely at terminal agents is flat.
9. **Does ZenMux actually serve this model?** The vendor's pricing page lists it at the same USD
   prices; no ZenMux capture was taken.

## Evidence status

**Floor met, with margin.**

- **First-party (ten records):** the 2026-09-30 launch post, the 2026-10-15 open-source post, the
  model-family docs, the pricing page, the deprecation page, the changelog, the call-limits page,
  and three model cards (instruct, `1019`, base). Together they establish identity, dates,
  architecture, context, reasoning and tool-use controls, prices, licence and support status.
- **Independent hosts (three records):** OpenRouter (catalogue + endpoints, which is what pins the
  `20261002` checkpoint), DeepInfra (fp4 serving, retention, promo pricing), Novita (list price,
  Anthropic endpoint).
- **Independent evaluation (two records):** Artificial Analysis measured both checkpoints
  separately, with the per-evaluation values extracted from the pages' embedded model records
  rather than read off charts.

**What is thin:** the `1019` checkpoint rests on a single evaluator plus a model card that
restates that evaluator; there is no second measurement and no host. The vendor's benchmark story
is image-only, so no vendor table could be checked against AA. And nothing here was executed: no
prompt was sent to any endpoint, no weight was downloaded, no quantization effect was measured.

**Contradictions preserved rather than resolved:** 1M model window versus 256K served versus
262,144 host cap; MXFP4/292GB in the blog versus fp8/572GB in the repository; AA calling it
"Open weights" with a low Openness sub-score because pre- and post-training data are undisclosed;
Novita's list price against everyone else's 75%-off price; and four different release dates.
