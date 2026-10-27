# GPT-6.1 Sol on OpenRouter (host record)

- **Origin:** "OpenAI: GPT-6.1 Sol", OpenRouter, <https://openrouter.ai/openai/gpt-6.1-sol>;
  structured metadata from <https://openrouter.ai/api/v1/models> and
  <https://openrouter.ai/api/v1/models/openai/gpt-6.1-sol-20260929/endpoints>. Retrieved
  2026-10-26.
- **Evidence kind:** independent host record (third-party aggregator: catalogue metadata,
  per-provider prices, re-published Artificial Analysis score).
- **Publication date:** none stated; live catalogue data.
- **Capture date:** 2026-10-26
- **Relevant models:** `openai/gpt-6.1-sol`, `openai/gpt-6.1-sol:batch`,
  `openai/gpt-6.1-sol-pro`, `openai/gpt-6.1-sol-pro:batch`.
- **Capture type:** verbatim excerpts of the public models JSON and the endpoints JSON, saved
  as artifacts beside this record (`models-excerpt.json`, `endpoints-excerpt.json`). The
  full 464-model JSON (786 KB) was not stored.

## Catalogue entries

| OpenRouter ID | Canonical slug | Created | Context | Max completion |
| --- | --- | --- | --- | ---: |
| `openai/gpt-6.1-sol` | `openai/gpt-6.1-sol-20260929` | 2026-09-29 17:28 UTC | 1,050,000 | 128,000 |
| `openai/gpt-6.1-sol:batch` | `openai/gpt-6.1-sol-20260929` | same | 1,050,000 | 128,000 |
| `openai/gpt-6.1-sol-pro` | `openai/gpt-6.1-sol-pro-20260929` | same | 1,050,000 | 128,000 |
| `openai/gpt-6.1-sol-pro:batch` | `openai/gpt-6.1-sol-pro-20260929` | same | 1,050,000 | 128,000 |

`created` is the epoch 1790702882 → 2026-09-29, matching OpenAI's changelog release date.

Description, verbatim (truncated at the same point OpenRouter truncates it):

> GPT-6.1 Sol is an upgrade to GPT-6 Sol from OpenAI, positioned below the flagship GPT-6
> Astra in the GPT-6 series. It is suited for agentic coding, computer use, document-heavy
> professional...

Pro variant description, verbatim (truncated):

> GPT-6.1 Sol Pro is the same underlying model as GPT-6.1 Sol, served with `reasoning.mode`
> set to `pro` for higher-quality responses on complex tasks. **Cost note:** pro mode spends
> far more...

**"Pro" is a mode, not a model.** OpenRouter says so itself, and OpenAI documents
`reasoning.mode: "pro"` on `gpt-6.1-sol` with standard token rates and no separate model ID
([reasoning guide](../../../openai.com/gpt-6-1-sol-reasoning-mode/2026-10-26.md)). OpenRouter's
`-pro` slug and `-20260929` canonical suffix are host-side constructs.

Architecture: `text+image+file->text`; input modalities `file`, `image`, `text`; output
`text`; tokenizer `GPT`.

Reasoning block, identical on all four IDs: `mandatory: true`, `default_enabled: true`,
efforts `max`, `xhigh`, `high`, `medium`, `low`, default `medium`. That matches the vendor's
"does not support `none` or `minimal`" rule and its five-effort list.

## Per-provider endpoints and prices

Verbatim from the endpoints JSON (USD per token; ×1e6 shown for readability):

| Provider | Input | Output | Cached in | Cache write | >272K input | >272K output |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| OpenAI (Standard) | $2.00 | $10.00 | $0.10 | $2.50 | $4.00 | $15.00 |
| Azure | $2.00 | $10.00 | $0.10 | $2.50 | $4.00 | $15.00 |
| Azure (regional/uplift rows) | $2.20 | $11.00 | $0.11 | $2.75 | $4.40 | $16.50 |
| Amazon Bedrock | $2.20 | $11.00 | $0.11 | $2.75 | $4.40 | $16.50 |
| OpenAI (Batch) | $1.00 | $5.00 | $0.05 | $1.25 | $2.00 | $7.50 |
| OpenAI (Fast) | $4.00 | $20.00 | $0.20 | $5.00 | $8.00 | $30.00 |
| OpenAI (Ultrafast) | $12.00 | $60.00 | $0.60 | $15.00 | $24.00 | $90.00 |

The endpoint list contains 8 rows in total: OpenAI appears four times (Standard, Batch,
Fast, Ultrafast) and Azure three times, all at 1,050,000 context / 128,000 max completion.
The $2.20/$11.00 rows are exactly 1.10× the $2.00/$10.00 rows, which matches OpenAI's
"regional processing adds a 10% premium" rule
([pricing](../../../openai.com/gpt-6-1-sol-pricing/2026-10-26.md)). OpenRouter's own
`web_search` price is $0.01 per call on every row.

## Re-published benchmark

`benchmarks.artificial_analysis.intelligence_index` = **51.8** for `openai/gpt-6.1-sol`
(coding and agentic indexes null). For comparison on the same feed: `openai/gpt-6-astra`
52.7 (coding 76.9, agentic 51), `openai/gpt-6-sol` 47.6.

`benchmarks.design_arena` for `openai/gpt-6.1-sol` lists 10 Elo rows, e.g. models/3d 1436
(rank 4), models/gamedev 1408 (rank 3), models/codecategories 1358 (rank 4),
agents/blender3d 1362 (rank 2, win rate 71.7%), models/dataviz 1292 (rank 15). These are
OpenRouter-run arena scores, not vendor claims.

## Summary

An independent host serves the same model ID, at the vendor's list prices, through OpenAI,
Azure, and Amazon Bedrock — including the Batch/Fast/Ultrafast tier multipliers and the 10%
regional uplift. OpenRouter independently dates the model to 2026-09-29, confirms
1,050,000 context and 128,000 max output, and re-publishes an AA Intelligence Index of 51.8
that agrees with Artificial Analysis's own 51.83.

## Gaps

- Host descriptions are truncated mid-sentence, so the full vendor-style copy is not
  available here.
- OpenRouter lists `file` as an input modality where OpenAI's model page lists only text and
  image. Which is authoritative for the request schema is unresolved.
- The `-pro` rows are metadata-identical to the base rows — same context, same max
  completion, same reasoning block, and the **same per-token prices** — differing only in
  slug and the `reasoning.mode` setting named in their description. OpenRouter therefore
  does not price pro mode as a premium tier; the extra cost appears as more tokens
  consumed, which is how OpenAI describes it too.
- No latency or throughput data for any endpoint, and one OpenAI Standard row carried a
  non-zero status flag (66.7% 30-minute uptime) while a duplicate OpenAI Standard row
  showed 100%; the status field's meaning is not documented in the capture.
