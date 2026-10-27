# Vercel AI Gateway — Mercury 3 entries (host record)

- Origin: two pages of one publisher. (1) Gateway model catalogue API
  <https://ai-gateway.vercel.sh/v1/models> — artifact `models-excerpt.json`. (2) Gateway model page
  "Mercury 3" <https://vercel.com/ai-gateway/models/mercury-3>. Retrieved 2026-10-26.
- Evidence kind: independent host / aggregator catalogue (routes to Inception; not an independent
  measurement of quality).
- Publication date: not applicable (live catalogue). `released` field: 1792368000 = 2026-10-19.
- Capture date: 2026-10-26
- Relevant models: `inception/mercury-3`, with `inception/mercury-2.5` and `inception/mercury-2`
  in the same excerpt for comparison.
- Capture type: JSON excerpt plus page text.

## Catalogue entry, verbatim (JSON)

| Field | `inception/mercury-3` |
| --- | --- |
| `name` | "Mercury 3" |
| `owned_by` | "inception" |
| `created` | 1755815280 (2025-08-21 — a shared catalogue-row timestamp, also on Mercury 2 and 2.5) |
| `released` | 1792368000 (**2026-10-19**) |
| `type` | "language" |
| `modalities.input` / `.output` | `["text"]` / `["text"]` |
| `context_window` / `max_tokens` | 1000000 / 131072 |
| `pricing.input` / `.output` / `.input_cache_read` | "0.0000001" / "0.00000035" / "0.00000001" (= $0.10 / $0.35 / $0.01 per M) |
| `zdr` / `no_training` | "all" / "all" |
| `tags` | `["implicit-caching","reasoning","structured-output","tool-use"]` |
| `reasoning_options` | `{"type":"effort","values":["instant","low","medium","high"]}` |
| `supported_parameters` | `max_tokens`, `temperature`, `stop`, `tools`, `tool_choice`, `reasoning`, `include_reasoning`, `response_format`, `structured_outputs` |
| `description` | "Mercury 3 is Inception's most capable model for agentic workflows and real-time applications. It is one of the world's fastest models, powered by diffusion." |

## Reading

- **`released` = 2026-10-19 corroborates the vendor's launch date**, and unlike OpenRouter's
  `created` timestamp it is a date-only field, so it carries no time-of-day ambiguity.
- The gateway's `reasoning_options` list **`instant`, `low`, `medium`, `high`** — matching
  Inception's docs and contradicting OpenRouter's `none`/`low`/`medium`/`high` with a `medium`
  default. Two hosts, two vocabularies; the vendor's docs are the tiebreak.
- No `seed` in `supported_parameters` here either.
- `zdr: "all"` and `no_training: "all"` are gateway policy flags (zero-data-retention and
  no-training eligibility), not vendor terms.
- The gateway lists no price premium over the vendor's launch price, and the single `owned_by:
  "inception"` implies routing terminates at the vendor.

## Gaps

- The model page's provider table and code sample were not captured in text form; only the
  catalogue JSON and the page's existence are recorded.
- No latency or throughput figures for this model.
