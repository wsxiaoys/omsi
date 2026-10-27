# OpenRouter catalogue — xiaomi/mimo-v2.6-pro, -flash, -pro-ultraspeed

- **Origin:** OpenRouter public model API —
  `GET https://openrouter.ai/api/v1/models` (catalogue) and
  `GET https://openrouter.ai/api/v1/models/xiaomi/mimo-v2.6-{pro,flash,pro-ultraspeed}-20260921/endpoints`
  (per-provider routing). Retrieved 2026-10-26.
- **Evidence kind:** independent host record (host catalogue metadata and per-endpoint routing).
- **Publication date:** none; each record carries a `created` timestamp.
- **Capture date:** 2026-10-26
- **Relevant models:** `xiaomi/mimo-v2.6-pro` (canonical slug `xiaomi/mimo-v2.6-pro-20260921`),
  `xiaomi/mimo-v2.6-flash` (`…-20260921`), `xiaomi/mimo-v2.6-pro-ultraspeed`
  (`…-20260921`); `xiaomi/mimo-v2.5` and `xiaomi/mimo-v2.5-pro` appear in the excerpt as the
  previous generation.
- **Capture type:** catalogue excerpt and three endpoint payloads saved verbatim as
  [`models-excerpt.json`](models-excerpt.json), [`endpoints-pro.json`](endpoints-pro.json),
  [`endpoints-flash.json`](endpoints-flash.json),
  [`endpoints-ultraspeed.json`](endpoints-ultraspeed.json).

## Catalogue records, verbatim fields

| Field | mimo-v2.6-pro | mimo-v2.6-flash | mimo-v2.6-pro-ultraspeed |
| --- | --- | --- | --- |
| `name` | "Xiaomi: MiMo-V2.6-Pro" | "Xiaomi: MiMo-V2.6-Flash" | "Xiaomi: MiMo-V2.6-Pro-UltraSpeed" |
| `created` | 1790021259 (2026-09-21T20:07:39Z) | 1790021264 (20:07:44Z) | 1790021267 (20:07:47Z) |
| `hugging_face_id` | `XiaomiMiMo/MiMo-V2.6-Pro-RL` | `XiaomiMiMo/MiMo-V2.6-Flash-RL` | `null` |
| `context_length` | 1050000 | 1050000 | 1048576 |
| `architecture.modality` | "text+image+audio+video->text" | same | same |
| `pricing.prompt` / `completion` | $0.435 / $0.87 | $0.14 / $0.28 | $4.35 / $8.70 |
| `pricing.input_cache_read` | $0.0036 | $0.0028 | $0.036 |
| `max_completion_tokens` | 131072 | 131072 | 131072 |
| `supported_parameters` | reasoning, include_reasoning, tools, tool_choice, structured_outputs, response_format, seed, stop, temperature, top_p, min_p, top_k, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, max_tokens | same plus `logprobs`, `top_logprobs`, `parallel_tool_calls` | same as Pro |
| `reasoning.mandatory` | false | false | false |
| `top_provider.is_moderated` | false | false | false |
| `benchmarks.artificial_analysis.intelligence_index` | 46.3 | 37.9 | – |

Descriptions, verbatim (truncated by OpenRouter itself at ~160 characters): Pro is "the flagship
foundation model developed by Xiaomi. Built at a scale of over 1T parameters, it is designed to
push the ceiling of capability for the most demanding…"; Flash is "an open-source foundation
model … Mixture-of-Experts architecture with 309B total parameters and 15B activated per token, it
employs a hybrid attention mechanism for…"; UltraSpeed is "the fast speed edition … Built from the
same 1T MiMo-V2.6-Pro checkpoint, it matches the original model in quality while delivering
roughly 10x…".

## Provider routing — Pro (5 endpoints)

| Provider | Tag | Context | Max completion | Prompt / completion per M | Cache read | Uptime 1d |
| --- | --- | --- | --- | --- | --- | --- |
| Xiaomi | `xiaomi/fp8` | 1,048,576 | 131,072 | $0.435 / $0.87 | $0.0036 | 100% |
| Novita | `novita/fp8` | 1,048,576 | 131,072 | $0.435 / $0.87 | $0.0036 | 100% |
| DeepInfra | `deepinfra/fp8` | 1,048,576 | 943,718 | $0.387 / $0.783 (−10%) | $0.00324 | 99.72% |
| GMICloud | `gmicloud/bf16` | 1,050,000 | 945,000 | $0.36975 / $0.7395 (−15%) | $0.0034 | 100% |
| StreamLake | `streamlake` | 1,000,000 | 128,000 | $0.522 / $1.044 (+20%) | $0.00432 | 93.27% |

`tool_choice` support differs by provider: DeepInfra supports all four modes
(`none`/`auto`/`required`/`function`); Xiaomi supports `auto` and `required` only; GMICloud,
Novita and StreamLake support `auto` only.

## Provider routing — Flash (10 endpoints)

Io Net (fp8, 1,048,320 ctx, $0.10/$0.28), Darkbloom (fp4, $0.10/$0.28, cache read $0.05),
GMICloud (bf16, 1,050,000 ctx, 945,000 max completion, $0.119/$0.238), Makora (fp8,
$0.13/$0.28), Relace (mxfp4, $0.13/$0.28), Cohere (unlisted quant, 384,000 max completion,
$0.14/$0.28), Novita (fp8, $0.14/$0.28), DeepInfra (fp8, 943,718 max completion, $0.14/$0.28),
Xiaomi (fp8, $0.14/$0.28, 100% uptime), Venice (fp8, 1,000,000 ctx, $0.175/$0.35, 88.9% uptime).
Flash is served at **four different quantization levels** (fp8, fp4, mxfp4, bf16) by different
providers at similar prices.

## Provider routing — UltraSpeed (1 endpoint)

Xiaomi only, `xiaomi/fp8`, 1,048,576 context, 131,072 max completion, **$4.35 / $8.70**, cache
read $0.036 — exactly 10× the Pro price at every line. There is no third-party route and no
second price point, so the UltraSpeed premium cannot be shopped.

## What this establishes

- **Prices match the vendor list exactly** on the Xiaomi route ($0.435/$0.87, cache $0.0036),
  and third-party hosts undercut it by 10–15% (DeepInfra, GMICloud) or overcharge by 20%
  (StreamLake).
- **The context figure disagrees with the vendor.** OpenRouter lists 1,050,000 for Pro and Flash
  while its own top-provider field says 1,048,576 and the vendor says 1M. The 1,050,000 is most
  likely a catalogue rounding, but OpenRouter does not say so, and no source states which window
  it enforces.
- **`is_moderated: false` here** contradicts Xiaomi's own catalogue record
  (`is_moderated: true`).
- **AA's own index value is embedded** in OpenRouter's records (46.3 Pro, 37.9 Flash), which is
  how the roster's "Index 46 at $0.13/task" label was reachable from the OpenRouter path.

## Gaps

- No latency or throughput fields populated (`latency_last_30m` and `throughput_last_30m` are
  null for every endpoint captured).
- OpenRouter's model page prose (descriptions of intended use, "released" date label) is
  client-rendered and was not captured; only the API payloads are recorded.
- No uptime history beyond the 1-day figure, and no per-provider rate limits.
