# GPT-6.1 Terra on OpenRouter (host record)

- **Origin:** "OpenAI: GPT-6.1 Terra", OpenRouter, <https://openrouter.ai/openai/gpt-6.1-terra>;
  structured metadata from <https://openrouter.ai/api/v1/models> and
  <https://openrouter.ai/api/v1/models/openai/gpt-6.1-terra-20261026/endpoints>. Retrieved
  2026-10-26.
- **Evidence kind:** independent host record (third-party aggregator: catalogue metadata,
  per-provider prices, re-published Artificial Analysis score).
- **Publication date:** none stated; live catalogue data.
- **Capture date:** 2026-10-26
- **Relevant models:** `openai/gpt-6.1-terra`, `openai/gpt-6.1-terra:batch`,
  `openai/gpt-6.1-terra-pro`, `openai/gpt-6.1-terra-pro:batch`, `~openai/gpt-terra-latest`,
  with `openai/gpt-5.6-terra` rows for comparison.
- **Capture type:** verbatim excerpts of the public models JSON and the endpoints JSON, saved
  as artifacts beside this record (`models-excerpt.json`, `endpoints.json`). The full
  464-model JSON (786 KB) was not stored.

## Catalogue entries

| OpenRouter ID | Canonical slug | Created (UTC) | Context | Max completion |
| --- | --- | --- | ---: | ---: |
| `openai/gpt-6.1-terra` | `openai/gpt-6.1-terra-20261026` | 2026-10-26 18:13 | 1,050,000 | 128,000 |
| `openai/gpt-6.1-terra:batch` | `openai/gpt-6.1-terra-20261026` | same | 1,050,000 | 128,000 |
| `openai/gpt-6.1-terra-pro` | `openai/gpt-6.1-terra-pro-20261026` | 2026-10-26 18:15 | 1,050,000 | 128,000 |
| `openai/gpt-6.1-terra-pro:batch` | `openai/gpt-6.1-terra-pro-20261026` | same | 1,050,000 | 128,000 |

`created` epoch 1793038409 → 2026-10-26, matching OpenAI's changelog release date
([changelog](../../../openai.com/gpt-6-1-terra-release-changelog/2026-10-26.md)). The
`-20261026` canonical suffix is a host-side pin of the release date, not an OpenAI snapshot ID;
OpenAI lists exactly one snapshot, `gpt-6.1-terra`
([model page](../../../openai.com/gpt-6-1-terra-model-page/2026-10-26.md)).

Description, verbatim (truncated at the same point OpenRouter truncates it):

> GPT-6.1 Terra is the mid-tier model in OpenAI's GPT-6.1 series, priced below GPT-6.1 Sol.
> It is suited for everyday agentic, coding, and writing work, is particularly strong at
> understanding screenshots...

Pro variant description, verbatim (truncated):

> GPT-6.1 Terra Pro is the same underlying model as GPT-6.1 Terra, served with
> `reasoning.mode` set to `pro` for higher-quality responses on complex tasks. **Cost note:**
> pro mode spends far more...

**"Pro" is a mode, not a model.** OpenRouter says so itself, and OpenAI documents
`reasoning.mode: "pro"` as a family feature billed at standard token rates with no separate
model ID ([reasoning guide](../../../openai.com/gpt-6-1-terra-reasoning-guide/2026-10-26.md)).

## Architecture and reasoning metadata

Architecture: `text+image+file->text`; input modalities `file`, `image`, `text`; output
`text`; tokenizer `GPT`. **OpenRouter adds `file`, which OpenAI's model page does not list**
([model page](../../../openai.com/gpt-6-1-terra-model-page/2026-10-26.md)).

Reasoning block, identical on `gpt-6.1-terra` and `:batch`: `mandatory: false`,
`default_enabled: true`, efforts `max`, `xhigh`, `high`, `medium`, `low`, `none`, default
`medium`. That matches OpenAI's six-value list and its `medium` default.

Reasoning block on the `-pro` slugs: `mandatory: true`, efforts `max`…`low` with **no `none`**
and default `medium` — i.e. pro mode is treated as always-reasoning.

Re-published score: `benchmarks.artificial_analysis.intelligence_index` = **48.1** for
`openai/gpt-6.1-terra`, with `coding_index` and `agentic_index` null. The same feed reports
**42.1** for `openai/gpt-5.6-terra` (coding 76.7, agentic 43.2). These are OpenRouter echoing
Artificial Analysis, not an independent measurement
([AA record](../../../artificialanalysis.ai/gpt-6-1-terra/2026-10-26/index.md)).

## The `~openai/gpt-terra-latest` alias

| OpenRouter ID | Alias target | Created (UTC) |
| --- | --- | --- |
| `~openai/gpt-terra-latest` | `openai/gpt-6.1-terra` | 2026-09-11 12:48 |

Verbatim description: "This model always redirects to the latest model in the GPT Terra
family." The alias predates GPT-6.1 Terra by six weeks, so it pointed at `gpt-5.6-terra`
until 2026-10-26 and now resolves to Terra 6.1. It is a host construct: **OpenAI publishes no
`gpt-terra-latest` alias** ([model page](../../../openai.com/gpt-6-1-terra-model-page/2026-10-26.md)).

## Per-provider endpoints and prices

Verbatim from the endpoints JSON (USD per token × 1e6 for readability). Four endpoints, all
at 1,050,000 context / 128,000 max completion:

| Provider | Tag / service tier | Input | Output | Cached in | Cache write | >272K input | >272K output |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| OpenAI | `openai` (standard) | $1.00 | $5.00 | $0.05 | $1.25 | $2.00 | $7.50 |
| OpenAI | `openai/flex` | $0.50 | $2.50 | $0.025 | $0.625 | $1.00 | $3.75 |
| OpenAI | `openai/fast` (`service_tier: priority`) | $2.00 | $10.00 | $0.10 | $2.50 | $4.00 | $15.00 |
| Azure | `azure/eu` | $1.20 | $6.00 | $0.06 | $1.50 | $2.40 | $9.00 |

Three of the four rows match OpenAI's own sheet exactly — $1/$5 standard, $0.50/$2.50 for
Flex (Batch is the same price and is served under `:batch` slugs), and $2/$10 for Fast
([pricing](../../../openai.com/gpt-6-1-terra-pricing/2026-10-26.md)). **The Azure row is a
1.20× multiple, not the 1.10× "regional processing" premium OpenAI's page describes** — the
same discrepancy the wiki records for GPT-6.1 Sol's Azure rows.

Every endpoint advertises `max_prompt_tokens: 922000` except the Azure one, which is null.
Native tools exposed through OpenRouter: `openrouter:web_search` and `openrouter:apply_patch`,
priced at $0.01 per web-search call. `supports_implicit_caching: false` on all four. All four
report 100% uptime over 1 day at capture.

## Summary

OpenRouter independently confirms the model ID, the 2026-10-26 release, the context and
output limits, the effort set including `none`, and three of OpenAI's four price points. It
adds two host-side constructs the vendor does not publish (`-pro` as a mode slug,
`-terra-latest` as a rolling alias), an Azure price at 1.2× list, and a `file` input modality
that the vendor does not advertise.

## Gaps

- Only four endpoints in this feed; no Bedrock, Vertex, or Together endpoint appears there at
  capture. AWS's own supported-models page returned a stub with no model names to a direct
  fetch, so **Terra on Bedrock is unresolved, not confirmed absent** — unlike Sol, which the
  wiki records on Azure and Bedrock.
- No latency or throughput figures populated (`latency_last_30m` and `throughput_last_30m`
  are null on every row).
- No absolute benchmark scores of OpenRouter's own.
