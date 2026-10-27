# GPT-6 Luna

OpenAI's cheapest GPT-6 tier: text-and-image in, text out, **1,050,000-token context**, and
**$0.10 / $0.50 per 1M tokens** — one hundredth of GPT-6 Astra's input price and a
twentieth of GPT-6.1 Sol's ([model page](../../sources/openai.com/gpt-6-luna-model-page/2026-10-26.md),
[pricing](../../sources/openai.com/gpt-6-luna-pricing/2026-10-26.md)). It shipped on
**2026-09-22**, the same day as GPT-6 Sol, and OpenAI positions it as "Fastest and most
cost-effective — Strong performance for focused, high-volume tasks"
([changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md),
[guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md)).

It is one of the GPT-6 models that **can turn reasoning off** (Astra and GPT-6.1 Sol
cannot), and its clearest measured weakness is agentic terminal work: Artificial Analysis
measures 38 index points at `max` effort but only **12.6% on Terminal-Bench 4.0**, and
Anthropic's independent re-run puts the same benchmark at 16.4% ([AA](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md),
[Anthropic](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)).

## Identity

- **Canonical name / model ID:** GPT-6 Luna / `gpt-6-luna` (OpenAI)
  ([model page](../../sources/openai.com/gpt-6-luna-model-page/2026-10-26.md)).
- **Vendor:** OpenAI. Proprietary; no weights, no fine-tuning endpoint.
- **Released 2026-09-22** — inside the 2025-10-26 window. Four parties agree: OpenAI's
  changelog entry "Released GPT-6 Sol (`gpt-6-sol`) and GPT-6 Luna (`gpt-6-luna`)"
  ([changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md)), Azure's
  catalogue row `gpt-6-luna (2026-09-22)`
  ([Azure](../../sources/microsoft.com/gpt-6-astra-foundry-models/2026-10-26.md)),
  OpenRouter's upstream snapshot name `gpt-6-luna-20260922`
  ([host](../../sources/openrouter.ai/gpt-6-luna/2026-10-26/index.md)), and AA's
  `releaseDate: 2026-09-22` ([AA](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md)).
  The model page itself carries no date.
- **Status:** current, generally available, not preview, not deprecated. No `preview` suffix
  and no entry in the [deprecations
  page](../../sources/openai.com/gpt-6-1-sol-deprecations/2026-10-26.md), so the 6-month
  notice floor applies. That page also names `gpt-6-luna` as the **recommended replacement**
  for the GPT-4 series when it shuts down on 2027-01-14 — OpenAI is steering retiring
  workloads *onto* Luna, not off it.
- **Snapshots and aliases:** OpenAI lists exactly one ID, `gpt-6-luna` — no dated snapshot on
  the first-party page. Hosts pin a dated form: Azure's version stamp `(2026-09-22)` and
  OpenRouter's `openai/gpt-6-luna-20260922`
  ([Azure](../../sources/microsoft.com/gpt-6-astra-foundry-models/2026-10-26.md),
  [host](../../sources/openrouter.ai/gpt-6-luna/2026-10-26/index.md)).
- **Host endpoints:** OpenAI API (Responses, Chat Completions, Batch); Microsoft Azure /
  Foundry (`gpt-6-luna (2026-09-22)`); Amazon Bedrock (via OpenRouter's routing table);
  OpenRouter (`openai/gpt-6-luna`, `:batch`, `-pro`).
- **Siblings and predecessor** (Standard price per 1M in / out, short context):

| Model | Released | In / Out | Position per OpenAI |
| --- | --- | ---: | --- |
| GPT-6 Astra | 2026-09-03 | $10.00 / $50.00 | Highest intelligence |
| GPT-6.1 Sol | 2026-09-29 | $2.00 / $10.00 | Balanced speed, cost, intelligence |
| GPT-6 Sol | 2026-09-22 | $2.00 / $10.00 | same-generation mid-tier |
| GPT-6.1 Terra | 2026-10-26 | $1.00 / $5.00 | Fast and efficient |
| **GPT-6 Luna** | **2026-09-22** | **$0.10 / $0.50** | Fastest and most cost-effective |
| GPT-5.6 Luna | not dated in these captures | $0.20 / $1.20 | previous Luna tier |

Prices from the [pricing capture](../../sources/openai.com/gpt-6-luna-pricing/2026-10-26.md);
tier wording from the [guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md).

### Label mapping: "Luna" is a tier name, and the effort level is part of the label

Artificial Analysis lists six Luna variants under one release slug, `gpt-6-luna`:
`max` (default), `xhigh`, `high`, `medium`, `low`, `non-reasoning`
([AA](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md)). Three facts tie
the label to OpenAI's ID: the $0.10/$0.50 price, the 1M context, and the 2026-09-22 release
date.

- **"(max)" is an effort annotation, not a model.** The six rows differ by **19.7 index
  points** (38.1 at `max` to 18.5 non-reasoning). A comparison quoting "GPT-6 Luna" with no
  effort level is under-specified to the same degree as quoting a different model.
- **`GPT-6 Luna Pro`** (`openai/gpt-6-luna-pro`) is the same model with `reasoning.mode:
  "pro"`. OpenAI documents pro mode for "GPT-5.6 and GPT-6 models" and bills it "at the
  selected model's standard token rates"; there is no `gpt-6-luna-pro` page on OpenAI's docs
  (404 on capture) ([reasoning guide](../../sources/openai.com/gpt-6-1-sol-reasoning-mode/2026-10-26.md),
  [host](../../sources/openrouter.ai/gpt-6-luna/2026-10-26/index.md)).
- **`GPT-5.6 Luna`** is a different model at roughly double Luna's price — 2× on input,
  cached input and cache writes, 2.4× on output — the same discount step OpenAI applied
  across the GPT-6 generation, not a rename.
- **"Luna" alone identifies a tier, not a generation:** GPT-5.6 Luna, GPT-6 Luna and the
  pre-GPT-6 IDs all carry it.

### Distinct model or repackaging?

Distinct, on the tests that matter:

1. **Own ID and price.** $0.10/$0.50 is its own row, 20× below the Sol tier and 10× below
   Terra ([pricing](../../sources/openai.com/gpt-6-luna-pricing/2026-10-26.md)).
2. **Own API surface.** Luna is one of three GPT-6 models that accept `reasoning.effort:
   "none"` (with GPT-6 Sol and GPT-6.1 Terra), and the one where Chat Completions function
   calling works *only* with `none`
   ([model page](../../sources/openai.com/gpt-6-luna-model-page/2026-10-26.md)); Astra and
   6.1 Sol reject `none` outright.
3. **Variant-specific evidence.** Six AA effort rows, an Azure catalogue row with its own
   version stamp, and a competitor's re-run of Luna itself
   ([AA](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md),
   [Azure](../../sources/microsoft.com/gpt-6-astra-foundry-models/2026-10-26.md),
   [Anthropic](../../sources/anthropic.com/claude-haiku-5-5-announcement/2026-10-26.md)).

## Current assessment

**The low-cost/high-volume positioning is supported, but it is a token-price claim more than
a latency claim.** OpenAI's own tagline is "Our most efficient model for focused, high-volume
tasks" and "Fastest and most cost-effective"
([model page](../../sources/openai.com/gpt-6-luna-model-page/2026-10-26.md),
[guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md)). Independent evidence
agrees on cost and disagrees on speed:

- **Cost:** AA measures **$0.07 per Intelligence Index task**, the cheapest GPT-6
  cost-per-task figure in these captures (GPT-6.1 Sol: $0.72 at 14 more index points;
  GPT-6 Astra: $3.26)
  ([AA](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md),
  [Sol](../../sources/artificialanalysis.ai/gpt-6-1-sol/2026-10-26/index.md),
  [Astra](../../sources/artificialanalysis.ai/gpt-6-astra/2026-10-26.md)). AA's own
  summary calls it "amongst the leading models in intelligence and well priced when comparing
  to other models of similar price".
- **Speed:** 118.6 output tokens/s is only "faster than average (114)", and the median time
  to first chunk on AA's long prompts is **97.7 s**. The speed rank (#65/149) is middling;
  the "fastest" label is about price and per-token economy, not interactivity.
- **Quality:** 38 index points puts it **below GPT-6.1 Terra at `high` (44)** and far below
  Sol (52) and Astra (53), so it is not a cheap near-frontier model — it is a cheap model
  ([AA](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md),
  [AA Haiku 5.5 board](../../sources/artificialanalysis.ai/claude-haiku-5-5/2026-10-26.md)).

**Current, GA, and structurally central rather than transitional:** it is the designated
landing model for GPT-4 series retirements in January 2027
([deprecations](../../sources/openai.com/gpt-6-1-sol-deprecations/2026-10-26.md)), it has a
named predecessor in GPT-5.6 Luna rather than being a relabelled one, and it is served by
eight providers at capture ([AA](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md)).

**What the evidence does not support:** that Luna is a "small" or distilled model. No
parameter count, no size class and no architecture claim appears in any captured source; AA
records `parameters: null` and "proprietary".

## Documented capabilities

| Property | Value | Source |
| --- | --- | --- |
| Context window | 1,050,000 tokens | [model page](../../sources/openai.com/gpt-6-luna-model-page/2026-10-26.md) |
| Max input | 922,000 tokens | same |
| Max output | 128,000 tokens | same |
| Input modalities | text, image | same |
| Output modalities | text | same |
| Knowledge cutoff | May 18, 2026 | same |
| Reasoning effort | `none`, `low`, `medium` (default), `high`, `xhigh`, `max` | same |
| Reasoning mode | `standard` (default) or `pro`; defaults to `medium` effort | [reasoning guide](../../sources/openai.com/gpt-6-1-sol-reasoning-mode/2026-10-26.md) |
| Chat Completions | supported; **function calling only with `reasoning_effort: "none"`** | [model page](../../sources/openai.com/gpt-6-luna-model-page/2026-10-26.md) |
| Features | streaming, structured outputs, function calling, file search, image input, web search, prompt caching | same |
| Tools (Responses only) | web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search | same |
| Endpoints | Responses, Chat Completions, Batch; **no** fine-tuning, Realtime, Assistants, Live, images, video, audio, embeddings | same |
| Data residency | EU residency with Standard, Fast, Flex and Batch; regional processing adds 10% | same |
| Rate limits | Build 5,000 RPM / 2M TPM; Launch 10,000 / 10M; Grow 30,000 / 180M; batch queue 20M / 1B / 15B | same |
| Cache | reads at 10% of input ($0.01), writes at 1.25× input ($0.125) | same |

**Marketing claims, labelled as such:** "most efficient model for focused, high-volume
tasks"; "Fastest and most cost-effective"; "Strong performance for focused, high-volume
tasks" ([model page](../../sources/openai.com/gpt-6-luna-model-page/2026-10-26.md),
[guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md)). OpenAI publishes **no
benchmark table, no launch post and no system card for Luna** in any record captured here —
`openai.com/index/gpt-6-luna/`, `…/gpt-6-sol/` and `…/gpt-6-sol-and-luna/` all returned HTTP
403. Every quality number on this page therefore comes from a third party.

## Benchmarks

**Artificial Analysis, Intelligence Index v4.3.2, `max` effort** (the default row), from the
embedded record ([AA](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md)):

| Evaluation | GPT-6 Luna (max) |
| --- | ---: |
| AA Intelligence Index | **38** (#11 of 172) |
| Terminal-Bench 4.0 | 12.63% |
| Terminal-Bench-Science 0.1 | 8.57% |
| FrontierCode 1.1 (Main) | 41.93% |
| SciCode | 54.63% |
| Humanity's Last Exam | 38.51% |
| CritPt | 19.43% |
| MMMU-Pro | 79.65% |
| AA-LCR v1.1 | 83.33% |
| GDPval-AA v2.1 (Elo) | 1444.72 |
| AA-Briefcase v1.1 (Elo) | 1336.19 |
| AutomationBench-AA | 53.17% |
| AA-Omniscience accuracy | 43.78% |
| AA-Omniscience hallucination rate | **76.73%** |
| GDP.pdf all-pass | 22.8% |
| AA-AnalystAgent | 43.75% |
| Harvey LAB-AA | 3.33% |

**Effort slope, same source:** 38.12 (`max`) → 34.56 (`xhigh`) → 32.93 (`high`) → 29.93
(`medium`) → 21.53 (`low`) → 18.47 (non-reasoning). Cost per task and speed are published
only for the `max` row in this capture.

**Independent cross-measurement.** Anthropic re-ran GPT-6 Luna "on the same 82 tasks through
OpenAI's API with OpenAI's own context compaction" and printed it as a comparison column in
the Claude Haiku 5.5 launch material
([announcement](../../sources/anthropic.com/claude-haiku-5-5-announcement/2026-10-26.md),
[system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)):

| Evaluation | Anthropic's run | AA's run |
| --- | ---: | ---: |
| Terminal-Bench 4.0 | 16.4% | 12.63% |
| FrontierCode 1.1 (Main) | 42.4% | 41.93% |
| OSWorld 2.1 (offline subset) | 48.9% | – |
| Chartography, no tools | 29.1% | – |
| GDPval-AA v2.1 (Elo) | 1437 | 1444.72 |
| AA-Briefcase v1.1 (Elo) | 1336 | 1336.19 |

The two independent runs **agree closely on FrontierCode, GDPval and AA-Briefcase and
disagree by 3.8 points on Terminal-Bench 4.0** — inside the harness spread for a benchmark
this sensitive to scaffolding, but not reconcilable from the captures. Anthropic's table does
not state Luna's effort level; the system card's configuration line ("adaptive thinking at
max effort") describes its own model's rows, so **Luna's effort basis in the Anthropic run is
unknown** and the 16.4% may not be a `max`-effort number.

Anthropic also reports HLE with tools for Luna as "–" (not run), so the competitor table
gives no reading on the benchmark where AA's own record is mid-pack (38.5% without tools).

## Limitations and constraints

**Effort choice is a 20-point decision.** Running Luna cheap means running it below its own
best: `medium`, OpenAI's default, is 8 points below `max`, and non-reasoning is 19.7 points
below. The default is not the configuration the marketing describes.

**Agentic work is the weak axis.** 12.6% (AA) / 16.4% (Anthropic) on Terminal-Bench 4.0 and
8.6% on Terminal-Bench-Science are roughly a quarter of the frontier rows (Astra: 57.9% on
Terminal-Bench 4.0, OpenAI's own figure). OpenRouter's suggested uses for Luna are "chat,
classification, and lightweight agentic" work; long autonomous terminal sessions are not
where this model's numbers point.

**Calibration is poor on the AA record.** A 76.7% hallucination rate on AA-Omniscience and
43.8% accuracy means it answers incorrectly more often than not on that evaluation; 22.8%
all-pass on GDP.pdf is the same signal on document work.

**Verbosity is high, but the input side dominates the bill.** 140M output tokens on the
index against a 99M median, and 50,012 output tokens per task (38,890 of them reasoning).
Of the $0.0678 per task, however, **$0.0428 is input-side** — $0.0290 cache reads and $0.0117
cache writes — against $0.0250 of output. At Luna's prices, prompt size and cache behaviour
move the bill more than the model's verbosity does
([AA](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md)).

**API constraints**

- **Chat Completions function calling requires `reasoning_effort: "none"`.** Any tool-using
  Chat Completions application must disable reasoning to keep working, which is the
  configuration AA scores at 18.5 ([model page](../../sources/openai.com/gpt-6-luna-model-page/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md)).
- **No Ultrafast tier.** Astra has one; Luna's rows appear only in Standard, Batch, Flex and
  Fast ([pricing](../../sources/openai.com/gpt-6-luna-pricing/2026-10-26.md)).
- **Long-context cliff at 272K input tokens:** input and cache rates double and output is
  1.5× *for the whole request*, so a 273K-token prompt costs 2× a 272K one per token
  ([model page](../../sources/openai.com/gpt-6-luna-model-page/2026-10-26.md)).
- **No fine-tuning, no Realtime, no Assistants, no image/audio/video endpoints.**
- **Regional premium:** +10% where regional processing applies, which is what Azure and
  Bedrock list ($0.11/$0.55 against $0.10/$0.50)
  ([host](../../sources/openrouter.ai/gpt-6-luna/2026-10-26/index.md)).

**Access and policy**

- Azure gates deployment on quota: "Some quota tiers require quota requests for the GPT-6
  family … Tier 5 and Tier 6 subscriptions have quota by default"
  ([Azure](../../sources/microsoft.com/gpt-6-astra-foundry-models/2026-10-26.md)).
- Azure bills GPT-6 in separate short-context and long-context categories, and its dollar
  figures were not recoverable in the captured record, so no Azure premium is asserted from
  Azure's own page — only from OpenRouter's routed prices
  ([Azure pricing](../../sources/microsoft.com/gpt-6-astra-azure-pricing/2026-10-26.md)).
- No safety-specific documentation for Luna was captured: the cyber gating, misalignment
  monitoring and refusal behaviour documented for Astra
  ([Path to Astra](../../sources/openai.com/path-to-astra/2026-10-26.md)) are **not
  established for Luna** either way.

## Access, pricing, licensing

USD per 1M tokens, first-party
([pricing](../../sources/openai.com/gpt-6-luna-pricing/2026-10-26.md)):

| Tier | Short in | Short out | Cached in | 30m write | 12h write | Long in | Long out |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Standard | $0.10 | $0.50 | $0.01 | $0.125 | $0.25 | $0.20 | $0.75 |
| Batch | $0.05 | $0.25 | $0.005 | $0.0625 | $0.125 | $0.10 | $0.375 |
| Flex | $0.05 | $0.25 | $0.005 | $0.0625 | $0.125 | $0.10 | $0.375 |
| Fast | $0.20 | $1.00 | $0.02 | $0.25 | $0.50 | $0.40 | $1.50 |
| Ultrafast | — | — | — | — | — | — | — |

**Billing basis:** per token, with a 272K long-context multiplier, cache-read/write rates and
service-tier multipliers (0.5× Batch/Flex, 2× Fast, +10% regional). Tool calls are billed
separately — OpenRouter lists **$0.01 per web-search request** on its Luna entry, i.e. 100K
input tokens' worth per search at Luna's input price
([host](../../sources/openrouter.ai/gpt-6-luna/2026-10-26/index.md)).

**Host differences**

- **OpenAI** standard $0.10/$0.50; `flex` at $0.05/$0.25; `priority` at $0.20/$1.00; all
  through one slug with the same 272K override.
- **Azure** appears three times in OpenRouter's routing table at $0.10/$0.50 and
  $0.11/$0.55 — the 10% regional premium — with no indication of which region each row is.
- **Amazon Bedrock** serves the same dated snapshot at $0.11/$0.55. This is the only record
  captured here that shows Luna on Bedrock; OpenAI's pages did not confirm Bedrock for Luna.
- **OpenRouter** adds a `:batch` variant and a `-pro` variant, both at the model's own
  prices, plus `openrouter:web_search` and `openrouter:apply_patch` native tools.

**Licensing:** proprietary. No weights, no self-hosting, no fine-tuning; use governed by
OpenAI's API terms. AA records `licenseName: null`, `openSourceCategorization: "proprietary"`.

## Unresolved questions

1. **Where is OpenAI's Luna benchmark table?** No first-party benchmark number exists in any
   capture: the model page is a spec sheet, and the three plausible launch URLs returned 403.
   Every quality claim here is third-party, which is unusual for a flagship-vendor tier.
2. **Is 16.4% Terminal-Bench 4.0 (Anthropic) or 12.63% (AA) the right figure?** Different
   harnesses, different runs, and Anthropic does not state Luna's effort level. Both are
   recorded; neither is adopted.
3. **What is the effort basis of the AA "38"?** AA's page shows the `max` variant by default
   and OpenAI's default is `medium` (29.93). A buyer who never sets effort gets a materially
   weaker model than the one AA headlines.
4. **Is Luna's knowledge cutoff really May 18, 2026?** Only OpenAI says so; AA's
   `knowledgeCutoffDate` is null and Azure's Luna row was not captured with a training-data
   date. It is eighteen days later than Astra's, which is plausible for a later-trained
   model but uncorroborated.
5. **Does Luna accept file input?** OpenRouter declares `"file"` in `input_modalities`;
   OpenAI lists text and image only.
6. **Is `gpt-6-luna-pro` addressable on the OpenAI API?** OpenAI documents pro mode as a
   family capability and prices it at standard rates, but publishes no Luna Pro page (404)
   and no dated snapshot for it. Only OpenRouter's slug attests it.
7. **Why is Luna cheaper than Terra but positioned beside it rather than below it?** OpenAI
   lists the tiers in the order Astra > 6.1 Sol > 6.1 Terra > Luna, which reads as a
   descending ladder, yet Terra is described as the visual-reasoning and computer-use tier
   while Luna is "focused, high-volume". Whether Luna is a general-purpose tier or a
   task-class tier is not stated.
8. **How much does the 10% regional premium cost in practice?** Azure's own price cells did
   not render in the capture; the premium is inferred from OpenRouter's routed rows.
9. **What safety behaviour applies to Luna?** Nothing captured: no system card, no refusal
   documentation, no cyber gating statement.

## Evidence status

**Floor met — first-party plus independent host, with independent measurement on top.**

- **First-party, five records:** the [model page](../../sources/openai.com/gpt-6-luna-model-page/2026-10-26.md)
  (ID, limits, prices, endpoints, tools, rate limits), the
  [pricing page](../../sources/openai.com/gpt-6-luna-pricing/2026-10-26.md) (all four tiers),
  the [API changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md) (release
  date and launch pricing), the [GPT-6 guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md)
  (tier positioning, EU residency, `none` support) and the [reasoning
  guide](../../sources/openai.com/gpt-6-1-sol-reasoning-mode/2026-10-26.md) (pro mode,
  `medium` default).
- **Independent hosts, three records:** [OpenRouter](../../sources/openrouter.ai/gpt-6-luna/2026-10-26/index.md)
  (dated snapshot, seven routes, Azure/Bedrock premium, pro variant), [Azure
  Foundry](../../sources/microsoft.com/gpt-6-astra-foundry-models/2026-10-26.md) (catalogue
  row `gpt-6-luna (2026-09-22)`, quota gating) and [Azure
  pricing](../../sources/microsoft.com/gpt-6-astra-azure-pricing/2026-10-26.md) (billing structure,
  no rates).
- **Independent measurements, three records:**
  [AA's Luna page](../../sources/artificialanalysis.ai/gpt-6-luna/2026-10-26/index.md) (index,
  six effort variants, per-benchmark values, speed, cost), the [AA leaderboard
  capture](../../sources/artificialanalysis.ai/claude-haiku-5-5/2026-10-26.md) (Luna `max` 38,
  $0.07/task, Terra `high` 44 as a neighbour) and Anthropic's
  [announcement](../../sources/anthropic.com/claude-haiku-5-5-announcement/2026-10-26.md) /
  [system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)
  re-run.
- **No direct tests were run for this page.** Every number is quoted from a source record.
  Where a figure appears twice with different values — Terminal-Bench 4.0 (12.63% AA vs 16.4%
  Anthropic) — both are recorded rather than reconciled. AA's rank denominators also differ
  between captures of the same board (#11/172 on the Luna page, #4/173 on the Haiku 5.5
  capture), so ranks are quoted as printed with their denominators attached.
- **Weakest links:** no first-party benchmark or launch post (403s); the vendor's own model
  page is undated, so the release date is established by three hosts rather than by OpenAI;
  Azure's price cells and Luna's training-data date did not extract; Bedrock for Luna is
  attested only by OpenRouter; the AA variant pages carried index values but not per-variant
  cost or speed.
