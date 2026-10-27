# Mistral Large 4 on OpenRouter — catalogue and endpoint metadata

- **Origin:** OpenRouter model catalogue API, `https://openrouter.ai/api/v1/models` (record
  `mistralai/mistral-large-4-0`) and
  `https://openrouter.ai/api/v1/models/mistralai/mistral-large-4-0/endpoints`. Retrieved
  2026-10-26.
- **Evidence kind:** independent host record (third-party router catalogue metadata).
- **Publication date:** listing `created` timestamp 2026-10-06T13:42:02Z.
- **Capture date:** 2026-10-26
- **Relevant models:** Mistral Large 4.
- **Capture type:** JSON API responses, saved verbatim beside this record as
  [`models-excerpt.json`](models-excerpt.json) and
  [`endpoints-excerpt.json`](endpoints-excerpt.json).

## Catalogue entry, verbatim fields

| Field | Value |
| --- | --- |
| `id` | `mistralai/mistral-large-4-0` |
| `canonical_slug` | `mistralai/mistral-large-4-0-20261006` |
| `name` | "Mistral: Mistral Large 4" |
| `created` | 1791294122 = 2026-10-06 13:42:02 UTC |
| `hugging_face_id` | `null` |
| `context_length` | 1048576 |
| `architecture.modality` | `text+image->text` |
| `architecture.input_modalities` | `["text","image"]` |
| `architecture.output_modalities` | `["text"]` |
| `top_provider.max_completion_tokens` | 262144 |
| `pricing.prompt` / `completion` / `input_cache_read` | $1.36 / $4.18 / $0.14 per M tokens |
| `is_moderated` | false |
| `expiration_date` | `null` |

`supported_parameters`: frequency_penalty, include_reasoning, logprobs, max_tokens,
presence_penalty, reasoning, reasoning_effort, response_format, seed, stop, structured_outputs,
temperature, tool_choice, tools, top_logprobs, top_p.

`reasoning` block, verbatim:

```json
{"mandatory": false, "default_enabled": true, "supported_efforts": ["high", "none"], "default_effort": "high"}
```

`benchmarks.artificial_analysis`: `{"intelligence_index": 38.4, "coding_index": null,
"agentic_index": null}` — OpenRouter re-publishes the AA index; it matches the value on AA's own
page (38).

## Endpoints

| Provider | Tag | Context | Max completion | Input / cached / output (per M) |
| --- | --- | --- | --- | --- |
| Mistral | `mistral/zdr` | 1,048,576 | 262,144 | $1.36 / $0.14 / $4.18 |
| Mistral | `mistral` | 1,048,576 | 262,144 | $1.36 / $0.14 / $4.18 |
| Mistral | `mistral/eu` | 524,288 | 262,144 | $1.496 / $0.154 / $4.598 |

All three are served by "Mistral"; there is no third-party inference provider on the listing.
`supports_implicit_caching` is true on every endpoint; `supports_tool_choice` is
`{none, auto, required, function}` all true; `quantization` is reported as `unknown`.

## Reading

- **Single-source serving.** Every route terminates at Mistral's own API. OpenRouter adds routing,
  logging and ZDR (zero-data-retention) variants, not independent capacity.
- **The EU endpoint is the 1.1× regional product**, matching Mistral's documented regional
  upcharge, and it halves the advertised context to 524,288.
- **`max_completion_tokens` 262,144** is a host figure; the vendor model card gives no output
  ceiling, only "1M" for input plus output combined.

## Gaps

- The catalogue description is truncated in the API response ("with up…"), so no full vendor copy
  is captured here.
- No `knowledge_cutoff` and no release notes; `hugging_face_id` is null even though Mistral's docs
  link an HF repository for the pending weights.
