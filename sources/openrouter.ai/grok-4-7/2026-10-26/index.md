# OpenRouter: `x-ai/grok-4.7` model and endpoint records

- Origin: OpenRouter model API
  - model record <https://openrouter.ai/api/v1/models> (filtered to `x-ai/grok*` in the artifact)
  - endpoint record <https://openrouter.ai/api/v1/models/x-ai/grok-4.7-20260916/endpoints>
  - human page <https://openrouter.ai/x-ai/grok-4.7>
- Evidence kind: independent host record (a router's own catalogue and pricing metadata; OpenRouter
  proxies xAI, so this is a host restatement plus host-side operational data, not a measurement)
- Publication date: none stated; live API
- Capture date: 2026-10-26
- Relevant models: `x-ai/grok-4.7` (roster row 88); sibling rows for `x-ai/grok-4.6`,
  `x-ai/grok-4.5`, `x-ai/grok-4.3`, `x-ai/grok-4.20`, `x-ai/grok-build-0.1`

Artifacts:
- [`models-grok-filtered.json`](models-grok-filtered.json) — the `x-ai/grok*` entries from
  `/api/v1/models` (the unfiltered response is ~786 KB and is not stored)
- [`endpoints-grok-4.7.json`](endpoints-grok-4.7.json) — the full `/endpoints` response for
  `x-ai/grok-4.7`

## Identity fields (verbatim from the model record)

> "id": "x-ai/grok-4.7", "canonical_slug": "x-ai/grok-4.7-20260916",
> "name": "SpaceXAI: Grok 4.7", "created": 1790007541

> "architecture": {"modality": "text+image+file->text", "input_modalities": ["text", "image",
> "file"], "output_modalities": ["text"], "tokenizer": "Grok"}

> "context_length": 500000

> "pricing": {"prompt": "0.000002", "completion": "0.000006", "web_search": "0.005",
> "input_cache_read": "0.0000005", "overrides": [{"min_prompt_tokens": 200000,
> "prompt": "0.000004", "completion": "0.000012", "input_cache_read": "0.000001"}]}

> "top_provider": {"context_length": 500000, "max_completion_tokens": 450000,
> "is_moderated": false}

> "supported_parameters": ["include_reasoning", "logprobs", "max_tokens", "reasoning",
> "reasoning_effort", "response_format", "seed", "structured_outputs", "temperature",
> "tool_choice", "tools", "top_logprobs", "top_p"]

> "default_parameters": {"temperature": 0.7, "top_p": 0.95}

> "reasoning": {"mandatory": true, "default_enabled": true, "supported_efforts": ["xhigh",
> "high", "medium", "low"], "default_effort": "high"}

> "benchmarks": {"artificial_analysis": {"intelligence_index": 46.4, "coding_index": null,
> "agentic_index": null}}

`created` 1790007541 is **2026-09-21T16:19:01Z**, which agrees with the xAI launch date.

## Endpoints (five, all provider "xAI")

| tag | prompt $/1M | completion $/1M | cached input $/1M | note |
| --- | --- | --- | --- | --- |
| `xai` | 0.000002 | 0.000006 | 0.0000005 | standard |
| `xai/zdr` | 0.000002 | 0.000006 | 0.0000005 | zero-data-retention variant, same price |
| `xai/zdr/us` | 0.0000022 | 0.0000066 | 0.00000055 | US endpoint, 1.1x |
| `xai/priority` | 0.000004 | 0.000012 | 0.000001 | priority tier, 2x |
| `xai/zdr/priority` | 0.000004 | 0.000012 | 0.000001 | priority + ZDR, 2x |

Each row also carries the same 200k-prompt override, at the same multiplier as its base row
(e.g. `xai/priority` overrides to $8 / $24 per 1M above 200k prompt tokens).

All five report `context_length` 500,000 and `max_completion_tokens` 450,000. Four of the five
report 100% uptime over the previous day; the `xai/priority` row reports `null`. All five expose
the same `supported_parameters` and all four `tool_choice` modes (`none`, `auto`, `required`,
`function`).

## What this establishes

- **A second, independent catalogue carries the model under a dated canonical slug,
  `x-ai/grok-4.7-20260916`.** OpenRouter's convention is to suffix a release date, so this is
  OpenRouter's snapshot label, not an xAI-published ID: xAI's own model page lists no dated alias
  ([model page](../../../x.ai/grok-4-7-model-page/2026-10-26.md)). The date 2026-09-16 is five
  days before the 2026-09-21 launch, which is consistent with a build that shipped on the 21st.
- **The four-tier pricing structure is corroborated independently**: base $2/$6, 200k-prompt
  override to $4/$12, a 1.1x US-endpoint variant ($2.20/$6.60), and a 2x priority variant
  ($4/$12). OpenRouter's base and override numbers match xAI's table exactly, and its 1.1x and 2x
  multipliers match xAI's published policies.
- **OpenRouter sells the US-endpoint variant as a separate endpoint**, which is the only place
  this capture sees the 1.1x rates as concrete dollar figures.
- **Reasoning is mandatory** — OpenRouter independently reports `"mandatory": true` with the same
  four efforts and the same `high` default, matching xAI's own "Reasoning cannot be disabled".
- **Modality disagreement**: OpenRouter advertises **`file`** as an input modality, while xAI's
  model page lists only text and image. xAI does document file attachments as a server-side tool
  and Files/Collections as storage, so `file` input is plausible via attachments, but no captured
  first-party page says `grok-4.7` accepts a file as a message content part.
- **Output-cap disagreement**: OpenRouter caps `max_completion_tokens` at **450,000** for every
  endpoint, while xAI's overview page claims "No text output limit". Both cannot be literally
  true.
- **OpenRouter advertises `logprobs` and `top_logprobs`**, which xAI's Models page says are "not
  supported by models `grok-4.20` and newer" and "will be silently ignored if set". Either the
  xAI statement does not cover 4.7, or OpenRouter is advertising a parameter that does nothing.
- **`stop` is absent from `supported_parameters`**, which is consistent with xAI's rule that
  `stop` errors on reasoning models. `presencePenalty` and `frequencyPenalty` are absent too. This
  is host metadata agreeing with first-party policy.
- **OpenRouter carries an Artificial Analysis Intelligence Index of 46.4** inside its own model
  record, matching AA's published 46.4465 (i.e. OpenRouter is relaying AA, not measuring).

## What this does not establish

- Nothing about output quality. OpenRouter's "particularly strong at long-running software
  engineering tasks, verifying its own work, and…" is a truncated vendor description, not a host
  finding.
- No latency or throughput figures: every endpoint reports `null` for `latency_last_30m` and
  `throughput_last_30m`, so OpenRouter's operational telemetry was empty at capture.
- No confirmation that OpenRouter serves the same snapshot xAI serves today.

## Gaps

- The human-facing OpenRouter page was not captured; only the JSON APIs.
- No per-endpoint region or data-handling detail beyond the `zdr` / `us` tag names.
