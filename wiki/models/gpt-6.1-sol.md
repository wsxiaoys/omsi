# GPT-6.1 Sol

OpenAI's middle tier in the GPT-6 family: text-and-image in, text out, 1.05M-token context,
reasoning at five effort levels, priced at $2/$10 per 1M tokens — one fifth of flagship
GPT-6 Astra and the same input/output price as its own predecessor GPT-6 Sol.

## Identity

- **Canonical name / model ID:** GPT-6.1 Sol / `gpt-6.1-sol` (OpenAI)
  ([model page](../../sources/openai.com/gpt-6-1-sol-model-page/2026-10-26.md)).
- **Release date: 2026-09-29** — the API changelog entry reads "Released GPT-6.1 Sol
  (`gpt-6.1-sol`) for complex coding and professional work at a lower cost than GPT-6 Astra"
  ([changelog](../../sources/openai.com/gpt-6-1-sol-release-changelog/2026-10-26.md)).
  Inside the 2025-10-26 window.
- **"Sol" is a tier name, not a codename.** OpenAI's guide lists four GPT-6 tiers with
  `gpt-6.*` IDs: GPT-6 Astra ("Highest intelligence"), **GPT-6.1 Sol ("Balanced speed, cost,
  and intelligence")**, GPT-6.1 Terra ("Fast and efficient"), GPT-6 Luna ("Fastest and most
  cost-effective")
  ([family guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md)). The same
  `Sol` tier label appears in GPT-5.6 Sol and GPT-6 Sol, so a "Sol" label alone does not
  identify a model; the `6.1` prefix does.
- **Aliases and snapshots:** exactly one — `gpt-6.1-sol`. There is no dated snapshot and no
  second alias on the model page's snapshot list
  ([model page](../../sources/openai.com/gpt-6-1-sol-model-page/2026-10-26.md)). OpenRouter's
  canonical slug `openai/gpt-6.1-sol-20260929` is a host-side pin of the release date, not
  an OpenAI snapshot ID
  ([host record](../../sources/openrouter.ai/gpt-6-1-sol/2026-10-26/index.md)).
- **Siblings:** GPT-6 Astra (`gpt-6-astra`, released 2026-09-03, $10/$50), GPT-6 Sol
  (`gpt-6-sol`, 2026-09-22, $2/$10), GPT-6 Luna (`gpt-6-luna`, 2026-09-22, $0.10/$0.50),
  GPT-6.1 Terra (`gpt-6.1-terra`, 2026-10-26, $1/$5) — dates from the
  [changelog](../../sources/openai.com/gpt-6-1-sol-release-changelog/2026-10-26.md), prices
  from [pricing](../../sources/openai.com/gpt-6-1-sol-pricing/2026-10-26.md).
- **"Sol Pro" is not a model.** OpenAI documents `reasoning.mode: "pro"` as a mode of
  `gpt-6.1-sol` billed at standard token rates
  ([reasoning guide](../../sources/openai.com/gpt-6-1-sol-reasoning-mode/2026-10-26.md));
  OpenRouter's `openai/gpt-6.1-sol-pro` is that mode under a separate slug, described by
  OpenRouter as "the same underlying model … served with `reasoning.mode` set to `pro`"
  ([host record](../../sources/openrouter.ai/gpt-6-1-sol/2026-10-26/index.md)). No separate
  pro model ID exists on OpenAI's side.
- **Hosts:** OpenAI (Responses, Chat Completions, Batch), Azure OpenAI, and Amazon Bedrock,
  all routed under one OpenRouter slug at 1,050,000 context / 128,000 max completion
  ([host record](../../sources/openrouter.ai/gpt-6-1-sol/2026-10-26/index.md)).
- **Leaderboard label verified.** Artificial Analysis lists it as "GPT-6.1 Sol (max)" —
  release slug `gpt-6-1-sol`, release date 2026-09-29, five effort variants with `max`
  selected by default
  ([AA model page](../../sources/artificialanalysis.ai/gpt-6-1-sol/2026-10-26/index.md)).
  The `(max)` is an effort annotation, not a different model.

## Current assessment

**A distinct model, not a repackaging.** It has its own model ID, its own price sheet row,
its own effort set, and its own measured scores. Three things distinguish it from GPT-6 Sol,
released seven days earlier:

1. **Cached input halves** — $0.10 vs $0.20 per 1M tokens, everything else identical
   ([pricing](../../sources/openai.com/gpt-6-1-sol-pricing/2026-10-26.md)).
2. **It measures higher.** Artificial Analysis's embedded record scores GPT-6.1 Sol (max)
   at 51.83 on Intelligence Index v4.3.2; the same feed reports GPT-6 Sol (max) at 47.6 and
   GPT-6 Astra (max) at 52.67
   ([AA model page](../../sources/artificialanalysis.ai/gpt-6-1-sol/2026-10-26/index.md),
   [host record](../../sources/openrouter.ai/gpt-6-1-sol/2026-10-26/index.md)). That is a
   4.2-point step for the same input/output price, and it lands within one point of Astra.
3. **OpenAI treats it as the migration target.** The guide's opening tells existing
   `gpt-6-sol` users to "review the migration guidance … before switching to GPT-6.1 Sol"
   ([family guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md)).

**Status: current, generally available, not preview, not deprecated.** No `preview` in the
ID, no entry in any deprecation table, so OpenAI's 6-month notice floor applies
([deprecations](../../sources/openai.com/gpt-6-1-sol-deprecations/2026-10-26.md)).
GPT-6 Sol remains live and is itself the recommended replacement for older models retiring
in 2027, so the two Sol tiers currently coexist rather than one displacing the other.

**Where it sits:** the cost-conscious frontier-adjacent choice. On AA it ranks 13th of 221
on intelligence at $0.72 per index task, one point behind Astra — but at 73.5 output
tokens/s it is *slower* than the median model (89), so the cheapness buys thinking, not
speed.

## Documented capabilities

From the [model page](../../sources/openai.com/gpt-6-1-sol-model-page/2026-10-26.md) unless
noted:

| Property | Value |
| --- | --- |
| Context window | 1,050,000 tokens |
| Maximum input | 922,000 tokens |
| Maximum output | 128,000 tokens |
| Input modalities | text, image |
| Output modalities | text |
| Unsupported modalities | audio, video |
| Knowledge cutoff | 2026-04-30 |
| Reasoning efforts | `low`, `medium` (default), `high`, `xhigh`, `max` |
| Reasoning modes | `standard` (default), `pro` |
| Endpoints | Responses, Chat Completions, Batch |
| Rate limits (Standard) | Build 5,000 RPM / 1M TPM; Launch 10,000 / 4M; Grow 15,000 / 40M |

- **Tools** (Responses API): `web_search`, `file_search`, `image_generation`,
  `code_interpreter`, `hosted_shell`, `apply_patch`, `skills`, `computer_use`, `mcp`,
  `tool_search`.
- **Features:** streaming, structured outputs, function calling, file search, image input,
  web search, prompt caching. Explicitly unsupported: fine-tuning, predicted outputs.
- **GPT-6 family behaviours** (documented for the family on the guide; its examples use
  Astra): async tool calling, mid-turn steering, changing reasoning effort mid-conversation
  via `configuration_update`, multi-agent orchestration (beta, per the changelog),
  compaction, persisted reasoning
  ([family guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md),
  [changelog](../../sources/openai.com/gpt-6-1-sol-release-changelog/2026-10-26.md)).
- **Persisted reasoning:** Sol supports `reasoning.context: "all_turns"`, a value the guide
  documents only for the GPT-5.6 family and for Sol; its own default is not stated
  ([reasoning guide](../../sources/openai.com/gpt-6-1-sol-reasoning-mode/2026-10-26.md)).
- **Ultrafast mode:** added 2026-10-08, available to all API users with US and EU data
  residency and global processing — broader residency than Astra's Ultrafast
  ([Ultrafast guide](../../sources/openai.com/gpt-6-1-sol-ultrafast-mode/2026-10-26.md)).

### Vendor claims, labelled as claims

- "Near-Astra performance for complex work at a lower cost" (model page one-liner). **Not
  quantified anywhere in first-party material captured** — no launch post, benchmark table,
  or system card was retrieved, so "near-Astra" cannot be checked against a vendor number.
  AA's independent index happens to support the direction of the claim (51.83 vs 52.67), but
  that is AA's measurement, not OpenAI's.
- "Balanced speed, cost, and intelligence"
  ([family guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md)) — the "speed"
  half is the weakest part of the claim on independent data: AA measures 73.5 tokens/s,
  below the 89 median.

## Limitations and constraints

- **No audio or video, and no image output.** Text out only
  ([model page](../../sources/openai.com/gpt-6-1-sol-model-page/2026-10-26.md)).
- **Tool calling is Responses-only.** Chat Completions works for plain generation, but
  function calling is not supported there for Sol or Astra
  ([family guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md)).
- **`none` and `minimal` effort are unsupported.** The guide states that Sol "does not
  support `none` or `minimal` and defaults to `medium`", and that `none` returns HTTP 400 on
  Astra; `low` is the floor
  ([reasoning guide](../../sources/openai.com/gpt-6-1-sol-reasoning-mode/2026-10-26.md)).
  OpenRouter's metadata agrees: reasoning is `mandatory: true` with efforts `max`…`low`.
- **No sampling controls.** "When reasoning effort is not `none`, remove `temperature`,
  `top_p`, and `top_logprobs`" — and `logprobs` in Chat Completions. Sol has no `none`, so
  this applies to every request
  ([family guide](../../sources/openai.com/gpt-6-family-guide/2026-10-26.md)).
- **Long context is not the same price.** Prompts over 272K input tokens bill the whole
  request at 2× input and 1.5× output. With a 922K maximum input, a full-context request
  costs $4/$15 per 1M.
- **Pro mode costs more without a price premium.** It "performs more model work than
  standard mode, increasing token usage and cost", billed at standard rates
  ([reasoning guide](../../sources/openai.com/gpt-6-1-sol-reasoning-mode/2026-10-26.md)).
  OpenRouter lists identical per-token prices for its `-pro` slug, consistent with that.
- **Ultrafast is 6× Standard** and Fast is 2×; neither comes with a documented latency SLA
  for Sol.
- **Closed weights, proprietary, no fine-tuning.** Model page marks fine-tuning unsupported;
  AA records `isOpenWeights: false`, licence null.
- **Slower than average.** AA: 73.5 output tokens/s, 126th of 192.
- **Verbose on agentic work.** AA records 108,185 output tokens per Terminal-Bench 4.0 task
  and 114,994 per AA-Briefcase task, at $1.82 and $2.31 cost per task respectively — the
  cheap per-token price does not make agentic runs cheap.
- **Safety/system-card evidence is missing.** No GPT-6.1 Sol system card was found; the
  family guide describes misalignment monitoring only for GPT-6 Astra. Nothing captured
  states Sol-specific refusal behaviour or safeguard routing. The `openai.com/index/…`
  announcement pages returned HTTP 403 to this capture.

## Access, pricing, licensing

All first-party prices are USD per 1M tokens
([pricing](../../sources/openai.com/gpt-6-1-sol-pricing/2026-10-26.md)).

### OpenAI, by service tier

| Tier | Short context in / out | Cached in | >272K in / out | vs Standard |
| --- | ---: | ---: | ---: | ---: |
| Standard | $2.00 / $10.00 | $0.10 | $4.00 / $15.00 | 1× |
| Batch | $1.00 / $5.00 | $0.05 | $2.00 / $7.50 | 0.5× |
| Flex | $1.00 / $5.00 | $0.05 | $2.00 / $7.50 | 0.5× |
| Fast | $4.00 / $20.00 | $0.20 | $8.00 / $30.00 | 2× |
| Ultrafast | $12.00 / $60.00 | $0.60 | $24.00 / $90.00 | 6× |

Cache writes: $2.50 (30-minute TTL) or $5.00 (12-hour TTL) on Standard, scaled by tier.
Regional processing and FedRAMP endpoints add 10%.

### Tool and container fees

- Web search: $10.00 per 1k calls, plus retrieved content tokens at model rates.
- File search: $2.50 per 1k calls.
- Hosted Shell / Code Interpreter containers: $0.03 (1 GB) to $1.92 (64 GB) per 20-minute
  session.

### Host prices, as re-published by OpenRouter

| Provider | In / out per 1M | Note |
| --- | ---: | --- |
| OpenAI (Standard) | $2.00 / $10.00 | matches list price |
| Azure | $2.00 / $10.00, and $2.20 / $11.00 rows | the 1.10× rows match the regional uplift |
| Amazon Bedrock | $2.20 / $11.00 | 1.10× list |
| OpenAI (Batch) | $1.00 / $5.00 | |
| OpenAI (Fast) | $4.00 / $20.00 | |
| OpenAI (Ultrafast) | $12.00 / $60.00 | |

([host record](../../sources/openrouter.ai/gpt-6-1-sol/2026-10-26/index.md))

**Licensing:** proprietary, closed weights, no fine-tuning; access is API-only through
OpenAI or the hosts above. Nothing in the captured material grants redistribution or weight
access.

## Benchmarks

### Independent (Artificial Analysis, Intelligence Index v4.3.2)

| Metric | GPT-6.1 Sol (max) |
| --- | --- |
| Intelligence Index | **51.83** (prose: 52; rank 13/221) |
| Terminal-Bench 4.0 | 56.1% |
| Terminal-Bench-Science 0.1 | 58.1% |
| FrontierCode 1.1 | 49.1% |
| SciCode | 54.2% |
| Humanity's Last Exam | 52.9% |
| CritPt | 31.7% |
| AA-Omniscience | 41.5 (accuracy 62.1%, hallucination 54.3%) |
| GDP.pdf all-pass | 31.0% |
| GDPval-AA (Elo) | 1607.61 |
| AA-Briefcase (Elo) | 1555.1 |
| AutomationBench-AA | 64.9% |
| AA-LCR v1.1 | 83.0% |
| MMMU-Pro | 86.0% |
| Cost / time per index task | $0.72 / 527 s |

([AA model page](../../sources/artificialanalysis.ai/gpt-6-1-sol/2026-10-26/index.md))

Peer context, from the wiki's leaderboard capture and the two records above: Claude Opus 5.5
58, Claude Sonnet 5.5 56, Kimi K3.1 Pro 55, GPT-6 Astra 52.67 (board: 53), Gemini 4 Argon
53, **GPT-6.1 Sol 51.83 (board: 52)**, GPT-6 Sol 47.6, DeepSeek V4.1 Flash 1017 45
([leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md),
[AA model page](../../sources/artificialanalysis.ai/gpt-6-1-sol/2026-10-26/index.md),
[host record](../../sources/openrouter.ai/gpt-6-1-sol/2026-10-26/index.md)). The board's
integers are rounded; the decimals are from the embedded records.

### OpenRouter arena (host-run, not vendor)

`openai/gpt-6.1-sol` holds 10 Elo rows: models/3d 1436 (rank 4), models/gamedev 1408 (rank
3), models/codecategories 1358 (rank 4), models/website 1315 (rank 8), models/uicomponent
1339 (rank 7), models/dataviz 1292 (rank 15), agents/blender3d 1362 (rank 2, 71.7% win
rate), agents/webapps 1305 (rank 4), agents/spreadsheet 1284 (rank 5), agents/mobileapps
1237 (rank 7)
([host record](../../sources/openrouter.ai/gpt-6-1-sol/2026-10-26/index.md)).

### Vendor benchmarks

**None captured.** No OpenAI benchmark table, system card, or launch post for GPT-6.1 Sol
was retrievable; the changelog entry and model page carry no scores. Any "near-Astra" figure
quoted elsewhere should be treated as unsourced until a first-party table is captured.

**No direct tests were run for this page.** Every number above is quoted from a captured
record.

## Unresolved questions

1. **Does GPT-6.1 Sol replace GPT-6 Sol?** OpenAI frames it as a migration target but lists
   no retirement for `gpt-6-sol`, which is itself the designated replacement for 2027
   retirements. Both are live at the same input/output price.
2. **What does "near-Astra" mean numerically?** No first-party benchmark table exists in the
   capture. AA's index puts it 0.84 points below Astra; whether that generalises beyond AA's
   ten evaluations is untested.
3. **Where does the 4.2-point gain over GPT-6 Sol come from?** The two releases are seven
   days apart, share a price, and the only documented change is the cached-input rate. The
   AA figures for both come from the same host feed, so they are comparable to each other
   but not independently confirmed for GPT-6 Sol on this wiki.
4. **Is `file` an input modality?** OpenAI's model page lists text and image only; OpenRouter
   lists `file`, `image`, `text`. Which describes the actual request schema is unresolved.
5. **Why does AA list 1M context when OpenAI says 1,050,000?** AA's `contextWindowTokens` is
   1,000,000; the vendor's maximum *input* is 922,000. Three different numbers for
   overlapping concepts, none reconciled.
6. **Does Sol default to `all_turns` persisted reasoning?** The guide says the GPT-5.6 family
   defaults to it and that Sol supports it, without stating Sol's default.
7. **What are the lower-effort scores?** AA names `xhigh`, `high`, `medium`, `low` variants
   but the capture contains scores only for `max`, so the cost/quality curve inside the
   model is unmeasured here.
8. **Safety behaviour is undocumented in this capture.** No system card, no refusal
   evidence, no safeguard-routing note for Sol specifically.

## Evidence status

**Floor met, with an unusually clean first-party set.**

- **First-party (7 records):** model page, release changelog, pricing page, family guide,
  reasoning guide, Ultrafast guide, deprecations page. Together they establish identity,
  release date, context and output limits, modalities, effort and mode set, tool and
  endpoint support, all five service tiers, tool fees, residency rules, and the absence of a
  deprecation.
- **Independent host:** OpenRouter serves the model through OpenAI, Azure, and Amazon
  Bedrock, corroborating the tier prices, the 10% regional uplift, the context/output
  limits, and the 2026-09-29 date.
- **Independent measurement:** Artificial Analysis scores it at 51.83 on Intelligence Index
  v4.3.2 with ten per-evaluation scores, cost, and timing. The wiki's existing leaderboard
  capture independently rounds the same figure to 52.
- **Not available:** vendor benchmark table, system card, launch post (HTTP 403), any
  third-party Terminal-Bench or coding-benchmark run outside AA's harness, and any direct
  test of our own.

The identity question the roster raised — whether "Sol" is a codename — is **resolved**: it
is the family's middle-tier name, and `gpt-6.1-sol` is a normal, non-preview model ID with
one snapshot. The open questions are about performance claims and the coexistence of two
Sol tiers, not about what the model is.
