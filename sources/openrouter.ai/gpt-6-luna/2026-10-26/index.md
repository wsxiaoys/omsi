# OpenRouter: `openai/gpt-6-luna` and `openai/gpt-6-luna-pro`

- **Origin:** OpenRouter model listing and per-model endpoints API —
  <https://openrouter.ai/api/v1/models> and
  <https://openrouter.ai/api/v1/models/openai/gpt-6-luna/endpoints> (and the `…-pro`
  equivalent). Retrieved 2026-10-26.
- **Evidence kind:** independent host record (aggregator catalogue and routed price list;
  restates provider pricing rather than measuring the model).
- **Publication date:** none stated. Each entry carries a `created` timestamp, quoted below.
- **Capture date:** 2026-10-26
- **Relevant models:** `gpt-6-luna` (canonical slug `openai/gpt-6-luna`), the `:batch` and
  `-pro` variants, and the dated upstream snapshot `gpt-6-luna-20260922` that every endpoint
  names.
- **Capture type:** directory capture — `index.md` plus `models-excerpt.json`,
  `endpoints-excerpt.json` and `luna-pro-endpoints-excerpt.json` (verbatim API responses,
  filtered to the Luna entries).

## Catalogue entry, verbatim

`openai/gpt-6-luna`, name "OpenAI: GPT-6 Luna", `created: 1790100786`
(= 2026-09-22T18:13:06Z), `context_length: 1050000`.

> GPT-6 Luna is the fast, cost-efficient model in OpenAI's GPT-6 series, positioned below
> GPT-6 Sol. It is suited for high-volume and latency-sensitive workloads such as chat,
> classification, and lightweight agentic…

(The description is truncated by the list API at that point; the ellipsis is OpenRouter's.)

Architecture, verbatim: `"modality": "text+image+file->text"`, `input_modalities: ["file",
"image", "text"]`, `output_modalities: ["text"]`, `"tokenizer": "GPT"`.

`openai/gpt-6-luna-pro`, `created: 1790100791` (= 2026-09-22T18:13:11Z), same context and
modality. Description, verbatim:

> GPT-6 Luna Pro is the same underlying model as GPT-6 Luna, served with `reasoning.mode` set
> to `pro` for higher-quality responses on complex tasks. **Cost note:** pro mode spends far
> more…

## Routed endpoints, verbatim (7 for `gpt-6-luna`)

| Provider | Endpoint name | Service tier | Prompt $/token | Completion $/token |
| --- | --- | --- | ---: | ---: |
| OpenAI | `openai/gpt-6-luna-20260922` | `flex` | 0.00000005 | 0.00000025 |
| OpenAI | `openai/gpt-6-luna-20260922` | — (standard) | 0.0000001 | 0.0000005 |
| Azure | `openai/gpt-6-luna-20260922` | — | 0.0000001 | 0.0000005 |
| Azure | `openai/gpt-6-luna-20260922` | — | 0.00000011 | 0.00000055 |
| Azure | `openai/gpt-6-luna-20260922` | — | 0.00000011 | 0.00000055 |
| Amazon Bedrock | `openai/gpt-6-luna-20260922` | — | 0.00000011 | 0.00000055 |
| OpenAI | `openai/gpt-6-luna-20260922` | `priority` | 0.0000002 | 0.000001 |

The standard OpenAI endpoint's `pricing` object, verbatim:

```json
{"prompt":"0.0000001","completion":"0.0000005","web_search":"0.01",
 "input_cache_read":"0.00000001","input_cache_write":"0.000000125",
 "overrides":[{"min_prompt_tokens":272000,"prompt":"0.0000001","completion":"0.000000375",
 "input_cache_read":"0.00000001","input_cache_write":"0.000000125"}]}
```

Per-endpoint limits, verbatim: `context_length: 1050000`, `max_prompt_tokens: 922000`,
`max_completion_tokens: 128000`. `supported_parameters`: `reasoning`, `include_reasoning`,
`seed`, `max_tokens`, `response_format`, `structured_outputs`, `tools`, `tool_choice`,
`verbosity`, `reasoning_effort`. Native tools: `openrouter:web_search`,
`openrouter:apply_patch`. Uptime at capture: 96.4% over 1 day, 100% over 30 minutes.

`openai/gpt-6-luna-pro` routes to six endpoints (the same five OpenAI/Azure rows minus the
second Azure row, plus the Bedrock-style 0.00000011 / 0.00000055 Azure row), at identical
prices to the non-pro model.

## What this establishes

- **A dated upstream snapshot exists and is served: `gpt-6-luna-20260922`.** Every OpenRouter
  endpoint names it, which independently dates the model to 2026-09-22 even though OpenAI's
  own model page lists only the undated alias.
- **The model is served by at least four routing paths** (OpenAI standard/flex/priority,
  Azure, Amazon Bedrock) at capture, so it is not OpenAI-API-exclusive. Bedrock is a channel
  OpenAI's own pages did not confirm in the records captured here.
- **Azure and Bedrock list $0.11 / $0.55 per 1M**, a 10% premium over OpenAI's $0.10 / $0.50 —
  exactly the "regional processing adds a 10% premium" line on OpenAI's model page.
- **Price parity on the OpenAI route**: OpenRouter's standard row reproduces OpenAI's list
  price, cache-read rate, cache-write rate and the 272K long-context override.
- **OpenRouter claims a `file` input modality** that OpenAI's model page does not list
  (text, image only). Uncorroborated first-party.
- **A `pro` variant exists as a separate OpenRouter slug at the same price**, described as
  the same model with `reasoning.mode: "pro"`. OpenAI's own `…/models/gpt-6-luna-pro` page
  returned 404 on capture, so pro mode is host-attested, not first-party-documented for
  Luna.

## Gaps

- No measured latency or throughput (`latency_last_30m` and `throughput_last_30m` are null).
- The `created` timestamps are OpenRouter's listing dates, not release dates; they agree with
  the upstream snapshot name but are not independent of it.
- OpenRouter does not say which Azure region or deployment type each Azure row represents;
  three Azure rows differ only in price.
- No reasoning-effort defaults, no rate limits, and no statement of what `reasoning.mode:
  "pro"` changes mechanically.
