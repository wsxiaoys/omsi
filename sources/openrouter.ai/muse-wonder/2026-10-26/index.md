# OpenRouter: `meta/muse-wonder` model page, endpoints API, and model-index entry

- **Origin:** OpenRouter —
  - model page <https://openrouter.ai/meta/muse-wonder>
  - endpoints API <https://openrouter.ai/api/v1/models/meta/muse-wonder/endpoints>
  - model index <https://openrouter.ai/api/v1/models>
- **Evidence kind:** provider documentation (independent host listing: price, context, provider,
  modalities, supported parameters) plus host-displayed third-party benchmark scores.
- **Publication date:** endpoint `created` field 1791807945 → **2026-10-12T12:25:45Z**; page states
  "Released Oct 12, 2026". Content as served on the capture date.
- **Capture date:** 2026-10-26.
- **Relevant models:** `meta/muse-wonder` (canonical slug `meta/muse-wonder-20261012`).
- **Capture type:** page text transcribed verbatim; endpoint and index JSON saved as
  [`endpoints.json`](endpoints.json) and [`models-index-entry.json`](models-index-entry.json).

## Page text (verbatim)

> **Meta: Muse Wonder** — `meta` / `muse-wonder`
>
> Muse Wonder is a frontier reasoning model from Meta, designed for complex personal and
> professional agentic tasks. It accepts text, images, video, audio, and PDF documents and returns
> text, with a 1M-token context window.
>
> The model handles long-horizon work: it plans, delegates to sub-agents, calls tools in parallel,
> and recovers from errors, so multi-step tasks run to completion without step-by-step direction.
> It can also operate browsers and desktop and mobile applications, and works across many files in
> existing repositories to make and verify changes. Muse Wonder carries important context across
> conversations and retrieves the details relevant to the task at hand. And it's trained for Active
> Focus, so it works toward your goal even when a task gets challenging.
>
> In Meta's testing, it performs well on complex engineering tasks, extended agentic sessions, and
> multi-file refactors to tackle developers' most demanding work.

Header values:

> Modalities: text, image, video, audio, file → text
> In / Out Price: $4 / $20 per 1M
> Context: 1.0M
> Released: Oct 12, 2026

Provider note:

> This model is hosted by one provider. OpenRouter forwards every request to it directly — no
> routing decisions to make.
>
> Not currently available through EU in-region routing.

## Endpoint record (verbatim fields)

```json
{"id":"meta/muse-wonder","name":"Meta: Muse Wonder","created":1791807945,
 "architecture":{"modality":"text+image+file+audio+video->text",
   "input_modalities":["text","image","video","file","audio"],
   "output_modalities":["text"]},
 "endpoints":[{"name":"Meta | meta/muse-wonder-20261012",
   "context_length":1048576,
   "pricing":{"prompt":"0.000004","completion":"0.00002","web_search":"0.0025",
              "input_cache_read":"0.0000002","discount":0},
   "provider_name":"Meta","tag":"meta","quantization":"unknown",
   "max_completion_tokens":943718,
   "supported_parameters":["reasoning","include_reasoning","max_tokens","repetition_penalty",
     "top_k","temperature","top_p","tools","tool_choice","structured_outputs","response_format",
     "reasoning_effort"],
   "supports_tool_choice":{"none":true,"auto":true,"required":true,"function":true},
   "status":0,"uptime_last_30m":100,"uptime_last_5m":100,
   "uptime_last_1d":99.65181058495823,
   "supports_implicit_caching":true,
   "native_tools":{"openrouter:web_search":{"type":"web_search"}},
   "latency_last_30m":null,"throughput_last_30m":null}]}
```

Index entry adds `canonical_slug: "meta/muse-wonder-20261012"`, `hugging_face_id: null`,
`is_moderated: true`, and a `reasoning` object:

```json
{"mandatory":true,"supported_efforts":["max","xhigh","high","medium","low","minimal"],
 "default_effort":"medium"}
```

The index entry's `benchmarks.design_arena` rows (verbatim) cover Agents Arena and Models Arena:
Blender3d 1232 (#6), Htmlslides 1133 (#7), Python-Pptxslides 1096 (#26), Spreadsheet 1279 (#7),
Models 3D 1447 (#3), Code Categories 1382 (#2), Data Visualization 1304 (#14), Game Development
1404 (#5), UI Component 1376 (#3), Website 1367 (#1).

## Host-displayed benchmark scores (verbatim)

Vals AI:

| Benchmark | Score |
| --- | --- |
| Wonder Vals Index | 64.9% |
| Wonder Terminal-Bench 4.0 | 49.5% |
| Wonder SWE-bench Multimodal | 45.6% |
| Wonder Finance Agent v2.1 | 65.5% |
| Wonder HLAB-Vals-1.1 | 23.8% |
| Wonder Legal Research Bench | 50.5% |
| Wonder ProofBench v1.1 | 84.0% |
| Wonder Vals Science Index | 39.1% |
| Wonder Tax Agent Bench | 36.3% |
| Wonder Vibe Code Bench v1.1 | 83.1% |
| Wonder CyberBench v1.1 | 80.4% |
| Wonder Code Migration v1.1 | 72.4% |
| Wonder EMB v1.1 | 72.5% |
| Wonder IOI | 66.9% |
| Wonder Vibe Code Bench 1-100 | 26.6% |

## Notes

- **This is a first-party-hosted endpoint, not a third-party inference provider.** The endpoint's
  `provider_name` is `Meta` and `tag` is `meta`; OpenRouter is a routing/listing layer in front of
  Meta's own API. The price is identical to Meta's list price ($4 / $20 per 1M; $0.20 cached;
  $0.0025 per web search).
- **`muse-wonder-20261012`** is the only captured dated identifier. It matches the 2026-10-12 launch
  date and is the canonical slug OpenRouter publishes.
- **Vals AI's Terminal-Bench 4.0 score (49.5%) differs from Artificial Analysis's (52.0%) and from
  Meta's table (52.0%)**, so harness choice matters. Preserve all three.
- `supports_image_reference: false` is a text-model capability flag that does not describe this
  model's multimodal input parts; it is unreliable here.
- Latency and throughput are `null` on the endpoint record, so OpenRouter reports uptime only.
- OpenRouter's model index lists `meta/muse-wonder` alongside `meta/muse-spark-open`,
  `meta/muse-spark-1.3-contributor`, and `meta/muse-glimmer-30b`; `meta/muse-wonder-full` is absent,
  consistent with Full being subscription-only.

## Gaps

- No per-modality input limits, file-size caps, or PDF page limits.
- No statement of what the `-20261012` suffix denotes beyond the launch date.
- No independent latency/throughput measurement on this page (`null` fields).
- The Vals AI and Design Arena scores are host-displayed; the underlying reports were not captured.
