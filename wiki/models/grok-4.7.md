# Grok 4.7

xAI's frontier text model, launched **2026-09-21** at **$2.00 / $0.50 / $6.00 per million
input / cached-input / output tokens** below 200k prompt tokens, with a **500,000-token** context
window and reasoning that cannot be turned off
([announcement](../../sources/x.ai/grok-4-7-announcement/2026-10-26/index.md),
[model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md),
[reasoning](../../sources/x.ai/text-reasoning/2026-10-26.md)). xAI names it the default for both
code and chat and "the most capable model we've built"
([models page](../../sources/x.ai/models-page/2026-10-26.md)). On the only independent
measurement captured it scores **46 on the Artificial Analysis Intelligence Index** — rank 32 of
221, level with MiMo-V2.6-Pro and 12 points below Claude Opus 5.5
([AA](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md)).

Its defining oddity is documentary. **xAI's model card for `grok-4.7` is identical to the
`grok-4.6` card except for the heading and the model name** — same modalities, context, reasoning
efforts, price table, rate limits, regions, and Batch support
([4.7 page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md),
[4.6 page](../../sources/x.ai/grok-4-6-model-page/2026-10-26.md)). The evidence that 4.7 is a
distinct model is the launch post's prose and a table of vendor-run benchmarks, not the API
contract.

## Identity

- **Canonical ID:** `grok-4.7`, the only slug xAI documents for this model
  ([model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md)).
- **Vendor:** xAI. The documentation self-brands as "SpaceXSI" throughout while the API host
  remains `api.x.ai`; the branding difference is recorded as observed and not interpreted
  ([model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md),
  [security FAQ](../../sources/x.ai/security-faq/2026-10-26.md)).
- **Released:** **2026-09-21**, day-precise and first-party: the launch post carries "Sep 21,
  2026", and Artificial Analysis independently records the same release date
  ([announcement](../../sources/x.ai/grok-4-7-announcement/2026-10-26/index.md),
  [AA](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md)). OpenRouter's `created`
  timestamp for the model is 2026-09-21T16:19:01Z
  ([OpenRouter](../../sources/openrouter.ai/grok-4-7/2026-10-26/index.md)). This is comfortably
  inside the one-year window.
- **Status:** current. No deprecation or retirement notice appears on any first-party page
  captured. Artificial Analysis marks the release `"deprecated": false`
  ([AA](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md)).
- **Modalities:** text and image input, text output only. No audio, video, or document modality is
  claimed by xAI ([model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md)).
- **Siblings** (separate IDs, not aliases): `grok-4.6` (2026-08-12, same price, still served),
  `grok-4.5` (2026-07-08, cheaper cache at $0.30/$0.60), `grok-4.3` and the `grok-4.20` line (1M
  context at $1.25/$2.50), `grok-build-0.1` (256k context at $1.00/$2.00). Dates from
  [AA's release payload](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md), prices from
  [xAI's models page](../../sources/x.ai/models-page/2026-10-26.md).
- **No aliases.** The `grok-4.5` page lists `grok-4.5-latest` and `grok-build-latest`; the 4.7 and
  4.6 pages list none
  ([4.5 page](../../sources/x.ai/grok-4-5-model-page/2026-10-26.md)). xAI does document a generic
  `<modelname>-<date>` convention for pinning snapshots, and **no dated `grok-4.7-<date>` slug
  appears anywhere in first-party docs**
  ([models page](../../sources/x.ai/models-page/2026-10-26.md)). A family-wide `grok-latest` alias
  exists — the regional-endpoints page notes it 404s on the US endpoint, implying it exists
  globally — but it is not in the model table
  ([regional endpoints](../../sources/x.ai/regional-endpoints/2026-10-26.md)).
- **First-party endpoints:** `https://api.x.ai/v1` (global, Responses API and Chat Completions)
  and `https://us.api.x.ai/v1` (US processing, 10% premium)
  ([overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md),
  [regional endpoints](../../sources/x.ai/regional-endpoints/2026-10-26.md)).
- **Host endpoints:** OpenRouter serves it as `x-ai/grok-4.7` across five xAI-backed endpoints
  (`xai`, `xai/zdr`, `xai/zdr/us`, `xai/priority`, `xai/zdr/priority`), all proxying xAI rather
  than running their own deployment
  ([OpenRouter](../../sources/openrouter.ai/grok-4-7/2026-10-26/index.md)). xAI also names Vercel
  and Cloudflare as gateways; neither was independently confirmed in this capture
  ([overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md)).
- **Distribution beyond the API:** Grok Build, where it is "the default model of the coding
  agent", and Cursor on all plans
  ([overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md)).
- **`Grok 4.7 Fast` is a service tier, not a model.** "The same model served on faster
  infrastructure", at 2x standard token rates (1.5x for long-context requests), available only in
  Cursor and Grok Build and **not** on the public API
  ([overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md)).

### Leaderboard label versus canonical ID

The roster label "Grok 4.7" comes from an Artificial Analysis leaderboard, which does not publish a
plain "Grok 4.7" row. It splits the model into three effort variants, each a separate page and a
separate board row:

| AA row | Intelligence Index | Cost / task | Output speed | TTFT |
| --- | --- | --- | --- | --- |
| Grok 4.7 (xhigh) | 46 | $3.24 | 96 t/s | 75.96 s |
| Grok 4.7 (high) | 46 | $2.36 | 92 t/s | 45.69 s |
| Grok 4.7 (low) | 42 | $1.03 | 81 t/s | 5.43 s |

Source: [AA](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md). All three map to the
single canonical ID `grok-4.7`; the suffix is a `reasoning_effort` setting, not a model. This page
treats them as one entity and states which effort a number was measured at.

### Is it a distinct model or a repackaging of 4.6?

xAI says distinct: "Grok 4.7 uses a new, larger base model compared to Grok 4.6. It was trained
with a longer reinforcement learning run on a harder mix of tasks… The model is better at verifying
its own work and managing longer context"
([announcement](../../sources/x.ai/grok-4-7-announcement/2026-10-26/index.md)). The four checks that
would settle it split: two pass, one fails, one cannot be run.

1. **Distinct identity — yes, but only by name.** `grok-4.7` and `grok-4.6` are separate IDs with
   separate pages, and both are served. A byte diff of the two `.md` captures shows exactly two
   changed lines ([4.7](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md),
   [4.6](../../sources/x.ai/grok-4-6-model-page/2026-10-26.md)).
2. **A difference that changes the recommendation — no.** Same price line for line, same 500k
   context, same rate limits, same regions, same reasoning efforts, same Batch discount. On every
   vendor-run benchmark 4.7 beats 4.6, and it costs the same, so **4.6 has no remaining niche** —
   which is the practical conclusion a buyer needs, and it does not depend on how large the gain
   is.
3. **Variant-specific evidence — yes.** The launch post describes 4.7's training and reports seven
   benchmark rows for it against 4.6, and Artificial Analysis measures 4.7 directly. No source
   describes what changed inside 4.6.
4. **The delta itself is unverified.** The one benchmark both parties ran, Terminal-Bench 4.0,
   disagrees badly on level: xAI reports 37.6% for 4.7, Artificial Analysis measures **25.76%**.
   xAI's 4.6 row (20.3%) is vendor-only, so the +17.3-point generation-over-generation claim has no
   independent check at all.

Read together: 4.7 is probably a real retrain, and it is certainly a real ID, but **the case for
it over 4.6 rests entirely on vendor numbers** because the API contract is indistinguishable and
the independent measurement covers only one side of the comparison.

### Version ambiguity

- The undated slug is the only slug. Under xAI's own alias convention `<modelname>` "is aliased to
  the latest stable version", so `grok-4.7` may float to a newer snapshot without notice
  ([models page](../../sources/x.ai/models-page/2026-10-26.md)). No dated pin exists to fall back
  on.
- OpenRouter's `canonical_slug` is **`x-ai/grok-4.7-20260916`** — a 2026-09-16 date, five days
  before launch ([OpenRouter](../../sources/openrouter.ai/grok-4-7/2026-10-26/index.md)).
  OpenRouter's convention is to suffix a date, so this is the router's snapshot label, not an
  xAI-published ID; whether 2026-09-16 is the build date of the launch snapshot is unknown.
- Nothing states whether the model served on 2026-10-26 is the launch build.

## Current assessment

**Current, generally available, and the vendor's flagship — but mid-frontier on independent
measurement, and expensive to run in practice because it is verbose.**

- **Position.** 46 on Artificial Analysis Intelligence Index v4.3.2, rank 32 of 221. On the
  rendered board 23 of 205 rows score higher: Claude Opus 5.5 (max with fallback) 58, Claude Sonnet
  5.5 (max with fallback) 56, Claude Opus 5.5 (xhigh with fallback) 56, Claude Fable 5.1 (max with
  fallback) 53, GPT-6 Astra (max) 53, GPT-6.1 Sol (max) 52. It is level with MiMo-V2.6-Pro (46)
  and ahead of GLM-5.3 (45) and DeepSeek V4.1 Flash 1017 (45)
  ([AA](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md)).
- **The effort dial is the real product decision.** `xhigh` and `high` score **identically** on the
  Index (46), but `high` costs 27% less per task ($2.36 vs $3.24) and returns its first token 30
  seconds sooner (45.69 s vs 75.96 s). `low` costs a third as much ($1.03) and is 14x faster to
  first token, for 4 points. Nothing in this capture justifies paying for `xhigh` except the
  vendor's own CursorBench and DeepSWE rows, which were run at xHigh.
- **Cost per token understates cost per task.** At 240.4M output tokens across the Index against a
  81M median, Grok 4.7 is "very verbose" by Artificial Analysis's own assessment, and it lands
  **105th of 121** on cost per Intelligence Index task at $3.24 — a worse ranking than its $2/$6
  token price would imply ([AA](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md)).
- **Latency is bimodal.** Median TTFT of 75.96 s at `xhigh` with a p95 of 267.8 s; the `low`
  variant's 5.43 s shows the spread is reasoning time, not network
  ([AA](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md)).
- **It is the compliance-tier flagship.** `grok-4.7` is one of exactly two models xAI serves on its
  US-processing endpoint, alongside `grok-4.6`
  ([regional endpoints](../../sources/x.ai/regional-endpoints/2026-10-26.md)). For a buyer who
  needs US-only inference, that narrows the field to these two and makes the price premium moot.
- **Not a retained specialist and not a preview.** xAI recommends it over every other text model
  and has retired nothing in its favour.

## Documented capabilities

All of the following is vendor or host documentation, not independent testing.

- **500,000-token context, May 2026 knowledge cutoff**, no stated text output limit
  ([overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md)). Context is *not* the family
  maximum: `grok-4.3` and the `grok-4.20` line carry 1M
  ([models page](../../sources/x.ai/models-page/2026-10-26.md)).
- **Reasoning is mandatory and four-way adjustable**: `low`, `medium`, `high` (default), `xhigh`.
  "Reasoning cannot be disabled"
  ([reasoning](../../sources/x.ai/text-reasoning/2026-10-26.md)). OpenRouter independently reports
  `"mandatory": true` with the same four efforts and the same default
  ([OpenRouter](../../sources/openrouter.ai/grok-4-7/2026-10-26/index.md)).
- **`xhigh` is 4.6-and-later only**, which makes 4.7 the second model in the family to have it
  ([reasoning](../../sources/x.ai/text-reasoning/2026-10-26.md)).
- **Encrypted reasoning is always returned on the Responses API**, whether or not `include` lists
  it, and reasoning summaries are exposed. Chat Completions has no field for the ciphertext
  ([reasoning](../../sources/x.ai/text-reasoning/2026-10-26.md)).
- **Function calling and structured outputs** are both supported, as are five server-side tools:
  web search, X search, code execution, image generation, and collections search, plus remote MCP
  ([model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md),
  [overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md),
  [pricing page](../../sources/x.ai/pricing-page/2026-10-26.md)).
- **Tool invocations bill separately from tokens**: $5 per 1k web searches, $5 per 1k X posts and
  $10 per 1k X profiles, $5 per 1k code-execution calls, $2.50 per 1k collections searches, and
  $5 per 1k file-attachment searches. X Search is billed per item fetched, not per call
  ([pricing page](../../sources/x.ai/pricing-page/2026-10-26.md)).
- **Prompt caching** with a 75% cache discount ($0.50 vs $2.00). xAI "highly recommends" a
  `prompt_cache_key` (`x-grok-conv-id` on Chat Completions) because "without it you often pay full
  input price on a cache-cold server"
  ([overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md)).
- **Context compaction** is recommended for long agent loops
  ([overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md)).
- **Image inputs**: 20 MiB maximum, `jpg/jpeg`/`png` only, no limit on the number of images, and
  free ordering of text and image parts
  ([models page](../../sources/x.ai/models-page/2026-10-26.md)).
- **Rate limits:** 150 requests/second, 50M tokens/minute — the same limits as 4.5 and 4.6
  ([model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md)).
- **Regions:** `us-east-1`, `us-west-2`, `us-central-1` for interactive traffic; Batch API only in
  `us-east-1` and `us-west-2` ([model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md)).
- **Both text APIs:** the overview lists only the Responses API, but Priority Processing is
  documented for "Chat Completions and Responses", and the reasoning guide treats Chat Completions
  as a supported surface ([overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md),
  [reasoning](../../sources/x.ai/text-reasoning/2026-10-26.md)).

### Vendor benchmark claims (marketing, kept separate from findings)

xAI's launch table, column order read from the HTML header cells and not inferred from rendered
text ([announcement](../../sources/x.ai/grok-4-7-announcement/2026-10-26/index.md)):

| Benchmark | Grok 4.7 (xHigh) | Grok 4.6 (High) | GPT-5.6 Sol (Max) | Fable 5.1 (Max) |
| --- | --- | --- | --- | --- |
| CursorBench 4.0 | 46.3% | 40.4% | 41.7% | 51.8% |
| DeepSWE v1.1 | 71.0%\* | 65.2% | 72.7% | 70.0% |
| EEBench | 64.0% | 53.0% | 39.4% | 56.4% |
| AA Briefcase v1.1 | 1,657 | 1,546 | 1,487 | 1,678 |
| Terminal-Bench 4.0 | 37.6% | 20.3% | 37.3% | 57.9% |
| Harvey Legal Agent | 19.6% | 15.8% | 2.5% | 6.7% |
| HealthBench Professional | 56.7% | 48.5% | 60.5% | 62.1% |
| GDPval (Elo) | 1,695 | 1,605 | — | 1,735 |

\* xAI's own footnote marks this cell "high effort" while the column is headed **xHigh**, so at
least one cell in the column was not measured at the advertised effort.

No prompt sets, sample sizes, scaffolds, repeats, or pass criteria are given for any row, and none
of these numbers has been reproduced. Three of the eight have an Artificial Analysis counterpart —
Terminal-Bench 4.0, AA Briefcase, and GDPval — and all three disagree. Note also that the post's
own table places 4.7 **behind** Fable 5.1 on five of eight rows (CursorBench, AA Briefcase,
Terminal-Bench 4.0, HealthBench, GDPval) and behind GPT-5.6 Sol on two (DeepSWE, HealthBench).

### Vendor safety claims

"An entirely new safeguard stack… the strongest model we've tested on refusals and jailbreak
resistance", "topping LatchBio's biosafety benchmark at 62.4%", and on HackerBench v0.3 "allowing
only 3.3% of risky dual-use prompts through"
([announcement](../../sources/x.ai/grok-4-7-announcement/2026-10-26/index.md)). No external
auditor, baseline set, or method is named. These are marketing until reproduced; no independent
safety evaluation was found in this capture.

## Limitations and constraints

- **Reasoning cannot be disabled**, so every request pays reasoning tokens at the output rate and
  there is no non-reasoning mode to fall back to for cheap classification or extraction
  ([reasoning](../../sources/x.ai/text-reasoning/2026-10-26.md)).
- **Three sampling parameters are rejected outright**: `presencePenalty`, `frequencyPenalty`, and
  `stop` "cannot be used with reasoning models. Requests that include them return an error"
  ([reasoning](../../sources/x.ai/text-reasoning/2026-10-26.md)). OpenRouter's parameter list
  agrees by omission ([OpenRouter](../../sources/openrouter.ai/grok-4-7/2026-10-26/index.md)).
  Code ported from a non-reasoning model that sets `stop` will fail, not degrade.
- **The long-context price cliff is a cliff.** Reaching 200k prompt tokens re-prices *every* token
  in the request at double, so a 200k-token prompt costs 2x a 199k-token one
  ([model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md)).
- **Output limit is contradictory.** xAI states "No text output limit"; OpenRouter caps
  `max_completion_tokens` at 450,000 on all five of its endpoints. Both cannot be literally true
  ([overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/grok-4-7/2026-10-26/index.md)).
- **`logprobs` support is contradictory.** xAI says `logprobs`/`top_logprobs` "are not supported by
  models `grok-4.20` and newer" and are silently ignored; `grok-4.7` is newer than `grok-4.20`,
  yet OpenRouter advertises both parameters as supported for its `x-ai/grok-4.7` endpoint
  ([models page](../../sources/x.ai/models-page/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/grok-4-7/2026-10-26/index.md)).
- **Input modality is wider on the host than in the vendor card.** OpenRouter advertises `file` as
  an input modality (`text+image+file->text`) while xAI's model page lists only text and image
  ([OpenRouter](../../sources/openrouter.ai/grok-4-7/2026-10-26/index.md),
  [model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md)).
- **The US processing guarantee does not cover the tools an agent needs.** Server-side tools (web
  search, X search, code execution), Files, and Collections all work on the US endpoint but are
  explicitly **outside** the guarantee and may process data outside the United States. A
  research-agent workload therefore loses the residency property that motivated the endpoint
  ([regional endpoints](../../sources/x.ai/regional-endpoints/2026-10-26.md)).
- **`grok-latest` 404s on the US endpoint**, so a client that works globally can break when
  repointed at the US route ([regional endpoints](../../sources/x.ai/regional-endpoints/2026-10-26.md)).
- **Cache hits do not survive an endpoint change**, and cache hits are not guaranteed even within
  one endpoint without a `prompt_cache_key`
  ([regional endpoints](../../sources/x.ai/regional-endpoints/2026-10-26.md),
  [overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md)).
- **A usage-guideline violation is still billed.** xAI charges for generation on requests it deems
  in violation, plus a $0.05 violation fee per request caught before generation on the Responses
  API ([pricing page](../../sources/x.ai/pricing-page/2026-10-26.md)).
- **The default setting is slow**: 45.69 s median TTFT at `high` and 75.96 s at `xhigh`, with a
  p95 of 267.8 s at `xhigh`
  ([AA](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md)). Not an interactive model at
  its default effort; the 5.43 s median of the `low` variant shows the cost is reasoning time, not
  the network.
- **No published parameter count, architecture, or weights**, and no licence text was captured
  (see below).

## Access, pricing, licensing

### xAI first-party

- **$2.00 input / $0.50 cached input / $6.00 output per 1M tokens** below 200k prompt tokens;
  **$4.00 / $1.00 / $12.00** at or above 200k, applied to all tokens in the request
  ([model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md)).
- **Batch API: 20% off** standard rates, `us-east-1` and `us-west-2` only
  ([model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md)).
- **Priority Processing: 2x** standard rates on every token type, billed only when the response
  confirms `"service_tier": "priority"`, Chat Completions and Responses only, not with Batch
  ([pricing page](../../sources/x.ai/pricing-page/2026-10-26.md)).
- **Reasoning tokens bill as output tokens**, so the reasoning depth is a direct cost multiplier
  ([pricing page](../../sources/x.ai/pricing-page/2026-10-26.md)).
- **Prompt caching** discounts cached input by 75% to $0.50
  ([model page](../../sources/x.ai/grok-4-7-model-page/2026-10-26.md)); Artificial Analysis
  records the same 75% discount
  ([AA](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md)).

### US regional endpoint

10% premium on input, output, and cached input, including long-context rates, published per-model
in dollars as **$2.20 / $0.55 / $6.60** per 1M below 200k prompt tokens and **$4.40 / $1.10 /
$13.20** above ([pricing page](../../sources/x.ai/pricing-page/2026-10-26.md)). OpenRouter prices
the same route at exactly $2.20/$6.60 ([OpenRouter](../../sources/openrouter.ai/grok-4-7/2026-10-26/index.md)).

### Grok 4.7 Fast

2x standard token rates, or 1.5x for long-context requests, published as **$4.00 / $1.00 / $12.00**
per 1M below 200k prompt tokens and **$6.00 / $1.50 / $18.00** above; Cursor and Grok Build only,
billed through the plan there, not available on the public API
([pricing page](../../sources/x.ai/pricing-page/2026-10-26.md),
[overview](../../sources/x.ai/grok-4-7-overview/2026-10-26.md)).

### OpenRouter

Five endpoints, all provider "xAI", all at 500k context and 450k `max_completion_tokens`: base and
ZDR at $2/$6 with a $4/$12 long-context override; US at $2.20/$6.60 with $4.40/$13.20; priority and
priority+ZDR at $4/$12 with $8/$24. Cached input is $0.50 base and $1.00 above 200k. No markup over
xAI's own rates is visible on any tier
([OpenRouter](../../sources/openrouter.ai/grok-4-7/2026-10-26/index.md)).

### Licensing and weights

- **Proprietary, API-only.** No weights are published: a Hugging Face query for the `xai-org`
  organisation returns exactly two repositories, `grok-1` (2024-03-17) and `grok-2` (2025-08-22),
  and a site-wide `grok` search surfaced no `grok-4.x` checkpoint
  ([HF search](../../sources/huggingface.co/grok-4.7-weights-search/2026-10-26/index.md)).
  Artificial Analysis independently classifies the model as proprietary with no weights
  ([AA](../../sources/artificialanalysis.ai/grok-4-7/2026-10-26.md)).
- **Output licensing terms were not captured.** `x.ai`'s news page links to `/legal`, `/terms`, and
  `/enterprise-terms`, but those pages were not retrieved, and no first-party page captured here
  states what a customer may do with outputs. The absence is a gap in this evidence base, not
  evidence of a restrictive licence.

## Unresolved questions

1. **What is the actual output-token cap?** "No text output limit" versus OpenRouter's 450,000
   `max_completion_tokens`. A direct request would settle it.
2. **Does `logprobs` work on `grok-4.7`?** xAI's blanket "grok-4.20 and newer" statement and
   OpenRouter's parameter list cannot both be right.
3. **Is 4.7 a real capability step over 4.6, or a vendor-labelled retrain?** The only benchmark
   both parties ran disagrees by 11.8 points on level, and 4.6 has no independent row. A matched
   harness run of both would answer it.
4. **Which snapshot is served?** No dated alias exists; OpenRouter's `20260916` is the router's own
   label. Whether the undated slug floats, and whether the launch build still runs, are unknown.
5. **What did xAI's Terminal-Bench 4.0 harness do differently** to reach 37.6% where Artificial
   Analysis measured 25.76%? Scaffold, retry policy, and pass criteria are all unpublished.
6. **Do the safety claims hold?** LatchBio 62.4% and HackerBench 3.3% are single-sentence vendor
   claims with no baseline set or auditor.
7. **What are xAI's output-licensing and AUP terms** for API customers? Not captured.
8. **Does "twice the output speed" hold in practice?** The fast tier's dollar rates are published
   ($4 / $1 / $12 below 200k, $6 / $1.50 / $18 above), but no speed figure appears on the launch
   post and no measurement of the fast tier was found.
9. **Why does Artificial Analysis mark `grok-4.6` and `grok-4.5` deprecated** while xAI still
   serves both, including 4.6 on the US endpoint? The flag is the aggregator's editorial call and
   no vendor retirement notice was found.
10. **How does `xhigh` behave on long agent loops** relative to `high`, given identical Index
    scores but 3.1x the cost per task and 1.7x the TTFT?

## Evidence status

**No direct tests were run for this page.** Nothing here was generated, timed, or reproduced:
no API call was made, no benchmark was re-run, and no refusal was provoked. Every number is a
vendor claim, a host catalogue field, or an aggregator measurement read on 2026-10-26.

Evidence floor: **met.** Nine first-party records from `x.ai`/`docs.x.ai` — the model detail page,
the overview page, the launch announcement, the Models page, the Pricing page, the Reasoning guide,
the Regional Endpoints guide, and the sibling model pages for `grok-4.6` and `grok-4.5` — plus two
independent records: OpenRouter (host catalogue and pricing, five endpoints) and Artificial
Analysis (independent Index, per-evaluation scores, latency, and verbosity), plus one negative
weights search on Hugging Face.

Weaknesses of this evidence base, stated plainly:

- **The first-party set is documentation, not evaluation.** xAI publishes no model card in the
  system-card sense: no parameter count, no architecture, no data description, no eval methodology.
  The launch post is the only first-party document that makes a capability claim, and it is
  marketing.
- **One independent measurement, one harness.** Artificial Analysis is the only independent
  evaluator found, so every "independent" number on this page comes from a single lab's scaffold.
  Where its Terminal-Bench 4.0 result disagrees with xAI's by 11.8 points, this page cannot say
  which is closer to a neutral harness — only that the vendor figure is the optimistic one.
- **No independent delta.** Artificial Analysis has no Grok 4.6 row in this capture, so the
  generation-over-generation improvement is entirely vendor-sourced.
- **The 4.7-versus-4.6 distinction is under-determined by design.** Identical model cards mean a
  reader cannot verify from documentation that anything changed.
- **Two first-party pricing documents are captured as separate records** —
  [`pricing-page`](../../sources/x.ai/pricing-page/2026-10-26.md) and
  [`models-page`](../../sources/x.ai/models-page/2026-10-26.md) — because an earlier Imagine-focused
  capture (`imagine-models-pricing`) names both pages as origins while recording only their Imagine
  price rows. Both new records state this explicitly in their headers. Every price on this page
  therefore has a dated citation.
- **No licence text.** Output terms and the acceptable-use policy were not retrieved.

The next useful evidence would be: a matched Terminal-Bench 4.0 and CursorBench run of 4.6 and 4.7
on one scaffold at `high` and `xhigh`; a `logprobs` and `stop` probe against the xAI API; a
max-output-length probe to settle the 450k-versus-unlimited question; a latency distribution at
`high` under streaming; and capture of xAI's `/legal` and acceptable-use pages.
