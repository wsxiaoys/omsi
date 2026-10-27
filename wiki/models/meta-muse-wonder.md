# Muse Wonder

Meta's frontier text model, released **2026-10-12** as the API-served top tier of its Muse family: a
**1,048,576-token context**, text/image/video/audio/PDF input, text-only output, and mandatory
reasoning from `minimal` to `max` effort
([launch post](../../sources/meta.com/muse-wonder-launch-blog/2026-10-26.md),
[models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
[model card](../../sources/meta.com/muse-wonder-model-card/2026-10-26/index.md)). On Meta Model API
it is `muse-wonder-1.0` at **$4.00 input / $0.20 cached input / $20.00 output per 1M tokens**, plus
**$2.50 per 1,000 web-search queries**
([pricing](../../sources/meta.com/muse-wonder-pricing/2026-10-26.md)). It is **in preview**, not GA
([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md)).

It is a distinct frontier model, not a repackaging: Artificial Analysis ranks it **10th of 221** by
its Intelligence Index at **52.4**, while the subscription-only sibling **Muse Wonder Full** reaches
**55.8** (4th of 704) with no public API, price or speed data
([AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md),
[AA Full](../../sources/artificialanalysis.ai/muse-wonder-full/2026-10-26/index.md)). Meta's
"state-of-the-art" claim is strongest for Full; the API-served Wonder is a top-ten model, not the
leader.

## Identity

- **Canonical name:** Muse Wonder. **API ID:** `muse-wonder-1.0`.
- **Vendor:** Meta (Meta Superintelligence Labs). Proprietary, closed weights; no checkpoint is
  listed by AA or OpenRouter and there is no weights licence
  ([AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md),
  [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)).
- **Released:** **2026-10-12**, stated by the launch post, the model card ("Date of Release October
  12, 2026"), OpenRouter (`created` 2026-10-12T12:25:45Z) and Artificial Analysis (`releaseDate:
  2026-10-12`). Inside the one-year window (after 2025-10-26).
- **Status:** **preview** on Meta Model API; also available in Muse Code, pay-as-you-go and on every
  subscription plan. No GA or retirement date is published
  ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md)).
- **Host endpoints:** Meta Model API on Responses and Chat Completions (`muse-wonder-1.0`);
  OpenRouter `meta/muse-wonder`, canonical slug `meta/muse-wonder-20261012`, routed to a single
  provider recorded as **Meta**
  ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)). Meta's models table
  also lists an Anthropic-compatible **Messages** endpoint for the combined "Muse Wonder, Muse
  Spark" row, but the Messages guide says it "serves the Muse Spark text models"; see the identity
  ambiguity below.
- **Aliases and labels:** roster "Meta Muse Wonder"; OpenRouter `meta/muse-wonder`; Artificial
  Analysis "Muse Wonder (Max)" / "Muse Wonder (max)". **Muse Wonder Full** is a different variant,
  not an alias.
- **Roster label resolves to the API variant.** The roster row "Meta Muse Wonder" is not the
  leaderboard-only "Muse Wonder Full" that the roster's exclusion note describes. Meta's docs
  attach the ID `muse-wonder-1.0` to the pay-as-you-go model and `muse-wonder-full-1.0` to the
  subscription-only one; OpenRouter lists `meta/muse-wonder` and not `meta/muse-wonder-full`
  ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)).
- **Sibling variants and lines:**

| Model | Relationship | API | Price |
| --- | --- | --- | --- |
| **Muse Wonder** (`muse-wonder-1.0`) | this page | Model API, Muse Code | $4 / $0.20 / $20 per 1M |
| Muse Wonder Full (`muse-wonder-full-1.0`) | higher-capability variant, same 1M context | Muse Code subscription only | not published; Power $50/mo or Maximum $200/mo |
| Muse Spark 1.3 / 1.2 / 1.1 | cheaper agentic/coding line, same endpoints and request shape | Model API, Muse Code | $1.25 in / $0.15 cached / $4.25 out per 1M |
| Muse Spark Open, Muse Glimmer | open-weight checkpoints | self-host / hosted providers | weights |
| [Muse Image](meta-muse-image.md) | image-generation line, image output | Model API, fal, OpenRouter | $0.01/image |

Prices and positions:
[pricing](../../sources/meta.com/muse-wonder-pricing/2026-10-26.md),
[models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
[model page](../../sources/meta.com/muse-wonder-model-page/2026-10-26.md).

### Identity ambiguity

- **Two variants, one page.** Meta documents `muse-wonder-1.0` and `muse-wonder-full-1.0` as
  separate model IDs with different access, and says explicitly that setting reasoning effort to
  `"max"` on Wonder "doesn't select" Full. Full is obtainable only through a Muse Code
  subscription, has no published price, and Artificial Analysis carries a score for it but **no
  price or speed**. They are kept on one page because only Wonder has a public API and both share
  the same model card, blog post and evaluation table; a split would produce two pages citing the
  same evidence. Revisit if Full gets its own API or model card.
- **The only dated checkpoint is a host slug.** OpenRouter publishes `meta/muse-wonder-20261012`,
  matching the launch date. Meta's own docs and model card present `muse-wonder-1.0` as an undated
  ID and publish no checkpoint history, so it is unknown whether the suffix is a vendor snapshot or
  OpenRouter's release-date convention.
- **PDF input is contradictory.** Meta's models documentation and OpenRouter both list PDF/file
  input; the model card's modality line says only "text, image, video, audio". The docs are more
  specific and are treated as authoritative here, with the card's omission recorded.
- **Messages endpoint is contradictory.** The models-at-a-glance row groups Muse Wonder and Muse
  Spark and lists "Responses, Chat Completions, Messages"; the Messages guide says "The Messages API
  serves the Muse Spark text models" and its settings table names only `muse-spark-1.3`. No captured
  page shows a `muse-wonder-1.0` request through `/v1/messages`
  ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
  [Messages guide](../../sources/meta.com/meta-model-api-messages/2026-10-26.md)).
- **"Muse" is overloaded.** Muse Wonder, Muse Spark, Muse Glimmer, Muse Code, Muse Image and Muse
  Video are different products. Muse Wonder is the text/agent line; Muse Image is the only image-output line
  and the launch post for Muse Image says it "integrates with Muse Spark", not with Muse Wonder.

## Current assessment

**A distinct frontier model and Meta's top text tier, still in preview.** Three things support that
reading:

- **It has its own identity, price and evaluation.** `muse-wonder-1.0` is a separate ID at $4/$20,
  roughly 3–5× Muse Spark's token prices, and Artificial Analysis evaluates it as its own release
  slug ([pricing](../../sources/meta.com/muse-wonder-pricing/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md)).
- **It is independently top-ten, not top-one.** AA's Intelligence Index puts it 10th of 221 at
  52.4, with 197 output tokens/s (16th of 192) and $3.27 per index task (107th of 121). AA's top
  five are Claude Opus 5.5 (58), Claude Sonnet 5.5 (56), Claude Opus 5.5 xhigh (56), Muse Wonder
  Full (56) and Kimi K3.1 Pro (55)
  ([AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md),
  [AA Full](../../sources/artificialanalysis.ai/muse-wonder-full/2026-10-26/index.md)).
- **Meta's own table agrees on the index.** Meta prints 52 for Wonder and 56 for Full on the
  "Artificial Analysis Index" row, matching AA's 52.4 / 55.8, while its other rows are vendor-run
  or vendor-selected
  ([model page](../../sources/meta.com/muse-wonder-model-page/2026-10-26.md)).

**Position inside Meta's line.** Meta describes Muse Wonder as "Meta's most capable model" and Muse
Spark as the high-volume, latency- and cost-sensitive option; the two accept the same requests on
the same endpoints, so switching is a model-ID change
([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md)). The product page
separately calls **Full** "our most advanced model yet". The contradiction is editorial: Wonder is
the most capable *API* model, Full the most capable *subscription* model.

**Status: preview.** The docs label it preview; the product page calls it "New" and publishes list
prices; AA marks it `deprecated: false` and lists it on the current leaderboard.
There is no GA date, SLA, or deprecation policy. Treat availability and behaviour as subject to
change.

**Retained specialist or default?** Neither. It is Meta's frontier general-purpose agent model,
priced for capability rather than volume; Muse Spark is the volume default. It is not a specialist
image, video or audio model.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run.**

- **Modalities and context.** Input text, image, video, audio and PDF; output text; 1,048,576-token
  context ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
  [model card](../../sources/meta.com/muse-wonder-model-card/2026-10-26/index.md)). OpenRouter
  reports `max_completion_tokens: 943,718` and `context_length: 1,048,576`
  ([OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)).
- **Reasoning is mandatory and selectable.** Effort levels run `minimal` → `max`; OpenRouter lists
  `max`, `xhigh`, `high`, `medium`, `low`, `minimal` with default `medium` and
  `reasoning.mandatory: true` ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)). There is no
  non-reasoning mode.
- **Long-horizon agent work.** Meta documents planning, delegation to sub-agents, parallel tool
  calls, error recovery across many steps, multi-file repository changes, and native computer use
  over browsers, desktop and mobile apps
  ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
  [model page](../../sources/meta.com/muse-wonder-model-page/2026-10-26.md)).
- **Tool surface.** Function/tool calling with `tool_choice` (`none`, `auto`, `required`,
  `function`), structured output / JSON schema, and a native `web_search` tool billed at $2.50 per
  1,000 queries ([pricing](../../sources/meta.com/muse-wonder-pricing/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)).
- **Protocols.** Responses and Chat Completions are documented for `muse-wonder-1.0`. Meta's models
  table also lists Messages, but the Messages guide scopes that endpoint to Muse Spark, so
  Wonder-on-Messages is unconfirmed
  ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
  [Messages guide](../../sources/meta.com/meta-model-api-messages/2026-10-26.md)).
- **Active Memory and Active Focus.** Meta's names for carrying context across conversations and
  persisting through blockers; the model card separately describes internal MemoryBench and
  FocusBench evaluations, not an externally reproducible benchmark
  ([launch post](../../sources/meta.com/muse-wonder-launch-blog/2026-10-26.md),
  [model card](../../sources/meta.com/muse-wonder-model-card/2026-10-26/index.md)).
- **Prompt caching.** Cached input is $0.20 per 1M; OpenRouter reports implicit caching and AA
  records a 95% cache discount ([pricing](../../sources/meta.com/muse-wonder-pricing/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md),
  [AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md)).

### Benchmarks

Three parties, three harnesses. **Meta's table is vendor-run or vendor-selected**; AA's is
independent; Vals AI's is independent but host-displayed by OpenRouter.

| Benchmark | Meta: Wonder | Meta: Full | AA: Wonder | AA: Full | Vals AI: Wonder |
| --- | --- | --- | --- | --- | --- |
| AA Intelligence Index | 52 | 56 | 52.4 | 55.8 | – |
| Terminal-Bench 4.0 | 52.0 | 57.1 | 52.0 | 57.1 | 49.5 |
| DeepSWE 1.1 | 78.8 | 79.0 | – | – | – |
| SWE-Marathon | 53.1 | 57.5 (xhigh) | – | – | – |
| ProgramBench | 50.0 | 59.0 | – | – | – |
| Harvey LAB-AA | 10.0 | 13.1 | 0.10 | 0.1306 | 23.8 (HLAB-Vals-1.1) |
| AA-Briefcase | – | – | 1658.65 Elo | 1729.32 Elo | – |
| GDPval-AA | – | – | 1770.34 | 1857.09 | – |
| AutomationBench-AA | 39.1 | 45.4 | 0.681 (partial) | 0.713 (partial) | – |
| AA-LCR | – | – | 80.7% | 83.7% | – |
| HLE | – | – | 50.1% | 53.6% | – |
| Vals Index | – | – | – | – | 64.9 |

Sources: [Meta model page](../../sources/meta.com/muse-wonder-model-page/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md),
[AA Full](../../sources/artificialanalysis.ai/muse-wonder-full/2026-10-26/index.md),
[OpenRouter/Vals](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md).

- **The AA Index row is the one clean cross-check.** Meta's 52 / 56 and AA's 52.4 / 55.8 agree
  within rounding.
- **Terminal-Bench does not.** AA and Meta both print 52.0 for Wonder, but Vals AI's
  host-displayed score is 49.5. The model card says external coding rows keep the reporting
  vendor's harness, so the gap is a harness difference, not a model version difference.
- **AutomationBench is not the same metric.** Meta reports 39.1 (strict pass@1, per the model
  card); AA's embedded record is a 0.681 "partial score". Do not compare them directly.
- **Design Arena Elo** (via OpenRouter) is another host-displayed signal: 3D 1447 (3rd), code
  categories 1382 (2nd), website 1367 (1st), UI component 1376 (3rd), game development 1404 (5th)
  ([OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)).
- **Meta's headline claim is about Full.** "Tops agentic and coding benchmarks, including DeepSWE
  and SWE-Marathon" is the Full variant's claim on the product page; Wonder's DeepSWE 78.8 is
  essentially tied, but its SWE-Marathon 53.1 is four points lower
  ([model page](../../sources/meta.com/muse-wonder-model-page/2026-10-26.md)).

### Claims kept separate

Vendor and host marketing, not findings:

- Meta: "Meta's most capable model"; "state-of-the-art results across key benchmarks for personal
  and professional agents, memory, and coding"; "our strongest safeguards to date against CBRN and
  cyber misuse"; "our most aligned model to date"
  ([launch post](../../sources/meta.com/muse-wonder-launch-blog/2026-10-26.md),
  [models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md)).
- Meta, on Full: "Our most advanced model yet, bringing SOTA performance"
  ([model page](../../sources/meta.com/muse-wonder-model-page/2026-10-26.md)).
- OpenRouter: "frontier reasoning model ... designed for complex personal and professional agentic
  tasks"; "in Meta's testing, it performs well on complex engineering tasks"
  ([OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)).

## Limitations and constraints

- **Preview status.** Meta labels Muse Wonder preview; no GA date, SLA, or deprecation policy is
  published. The product page's "New" label does not resolve this
  ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md)).
- **Closed weights.** No checkpoint, no licence, no fine-tuning path. AA records
  `isOpenWeights: false`, `licenseName: null`, `modelWeightsSourceUrl: null`; OpenRouter's
  `hugging_face_id` is null
  ([AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md),
  [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)).
- **Reasoning cannot be disabled.** Every request pays reasoning tokens; AA measured 130M output
  tokens across the Intelligence Index, "very verbose" against a median of 81M
  ([AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md)).
- **Latency at max effort.** AA measured a 31.6 s median time to first chunk, 41.8 s to first
  answer token, and 44.3 s end-to-end, with 197 output tokens/s
  ([AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md)). These are
  provider-observed, single-provider figures, not vendor claims.
- **No per-modality limits.** Video duration, audio length, PDF size/page count, image resolution,
  and file-size caps are not published. The only hard numbers are the 1M context and OpenRouter's
  943,718 max completion tokens
  ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)).
- **Web search is extra.** $2.50 per 1,000 queries on top of token cost; there is no bundled
  search allowance ([pricing](../../sources/meta.com/muse-wonder-pricing/2026-10-26.md)).
- **Rate limits.** 3,000 RPM and 4,000,000 TPM per team, plus 600 background-response submissions
  per minute; limits are per team, not per key
  ([pricing](../../sources/meta.com/muse-wonder-pricing/2026-10-26.md)).
- **Regional restriction.** Muse Wonder and Full are "not currently available in South Korea, on
  Model API or in Muse Code"; OpenRouter says the model is "not currently available through EU
  in-region routing"
  ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)).
- **Contributor mode is unavailable on API.** Unlike Muse Spark, `muse-wonder-1.0` has no
  discounted Contributor-mode variant on pay-as-you-go; Contributor mode exists only inside Muse
  Code ([pricing](../../sources/meta.com/muse-wonder-pricing/2026-10-26.md)).
- **Model-card limitations.** Visual and spatial reasoning, "especially 3D tasks", remains a known
  limitation; performance may degrade outside strongly supported languages; results vary with
  quantization, serving configuration, prompts, tools and harness; the model is not intended for
  users under 18
  ([model card](../../sources/meta.com/muse-wonder-model-card/2026-10-26/index.md)).
- **Safety is documented but not independently audited here.** The card reports CyberGym 88.4%,
  ExploitBench 58.9%, MASK 87.3%, Agentic Misalignment 0%, and BioTIER 98.7% English refusal for
  Full; Meta says it does not rule out a high CBRN risk threshold without mitigations and assesses
  "moderate or lower" with them. No third-party safety evaluation was captured
  ([model card](../../sources/meta.com/muse-wonder-model-card/2026-10-26/index.md)).
- **No knowledge cutoff.** AA's `knowledgeCutoffDate` is null and Meta publishes none
  ([AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md)).

## Access, pricing, licensing

Billing basis is **per token**, with web search metered per query:

| Route | Price | Notes | Captured? |
| --- | --- | --- | --- |
| Meta Model API (`muse-wonder-1.0`) | $4.00 input / $0.20 cached / $20.00 output per 1M | no long-context premium; no Contributor mode; 3,000 RPM / 4M TPM | [pricing](../../sources/meta.com/muse-wonder-pricing/2026-10-26.md) |
| Meta Model API web search | $2.50 per 1,000 queries | separate line item on top of tokens | [pricing](../../sources/meta.com/muse-wonder-pricing/2026-10-26.md) |
| OpenRouter (`meta/muse-wonder`) | $4.00 / $20.00 per 1M; $0.20 cache read; $0.0025 per web search | single provider, recorded as Meta; 1,048,576 context; 943,718 max completion; EU in-region routing unavailable | [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md) |
| Muse Code subscription | $50/mo Power or $200/mo Maximum | includes Muse Wonder Full; Contributor mode on by default, can be turned off | [model page](../../sources/meta.com/muse-wonder-model-page/2026-10-26.md) |
| Muse Wonder Full | no published price | subscription only; not on Model API | [models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md) |

- **AA's cost view.** $4/$20, 95% cache discount, $8.00 per 1M blended at 3:1 input/output, and
  **$3.27 per Intelligence Index task** — 107th of 121 on cost
  ([AA](../../sources/artificialanalysis.ai/muse-wonder/2026-10-26/index.md)).
- **Licensing.** Proprietary and API-only. Use is governed by the Meta Model API Terms of Service,
  the Meta Model Acceptable Use Policy, and the Muse Supplemental Terms of Service; the model card
  says the models are intended for "commercial and research use" but publishes no weights licence
  ([model card](../../sources/meta.com/muse-wonder-model-card/2026-10-26/index.md)).
- **No open-weight fallback.** Muse Spark Open and Muse Glimmer are the open-weight Muse models;
  Muse Wonder has no published checkpoint and neither AA nor OpenRouter lists one
  ([models doc](../../sources/meta.com/muse-wonder-models-doc/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/muse-wonder/2026-10-26/index.md)).

## Unresolved questions

1. **When does preview end, and what changes at GA?** No GA date, SLA, support commitment, or
   deprecation policy is published.
2. **How was Muse Wonder Full evaluated, and can a reader reproduce it?** AA has scores but no
   price or speed, and Full is subscription-only; the access path and evaluation date are not
   stated ([AA Full](../../sources/artificialanalysis.ai/muse-wonder-full/2026-10-26/index.md)).
3. **Is `-20261012` a vendor checkpoint or an OpenRouter convention?** Meta publishes no dated
   snapshot under `muse-wonder-1.0`; behaviour claims are valid only for the capture date.
4. **Does the API accept PDFs?** The docs and OpenRouter say yes; the model card omits PDF from its
   modality line.
5. **Which benchmark numbers should a buyer trust?** Terminal-Bench 4.0 is 52.0 on AA and Meta's
   table but 49.5 on Vals AI; AutomationBench is 39.1 strict versus 68.1 partial. The harnesses
   differ, but the captured sources do not give enough detail to normalise them.
6. **What are the real multimodal input limits?** No video duration, audio length, PDF size, image
   resolution, or file-size caps are published.
7. **What is the knowledge cutoff?** Not published by Meta; AA records null.
8. **How much does web search actually cost per task?** The per-query price is clear, but search
   frequency per request and whether failed searches are billed are not documented.
9. **Is "max" effort on Wonder ever equivalent to Full?** Meta says no; no independent comparison
   of Wonder at max versus Full exists.
10. **Does Muse Wonder work on the Messages API?** The models table lists Messages for the
    Wonder/Spark row, but the Messages guide scopes the endpoint to Muse Spark and names only
    `muse-spark-1.3`.
11. **How does Muse Wonder relate to Muse Image in practice?** They are separate lines with
    different outputs; Meta's Muse Image post names Muse Spark as the integration partner, not
    Wonder. No combined workflow is documented.

## Evidence status

**Floor met.** First-party: six Meta records — the 2026-10-12 launch post, the
`dev.meta.ai/models/muse-wonder` product page, the models documentation, the pricing/rate-limit
documentation, the Messages API guide, and the Muse Wonder model card PDF. Independent host: OpenRouter's model page,
endpoints API, and model-index entry (single provider recorded as Meta). Independent evaluation:
Artificial Analysis's model page, embedded model record, and leaderboard rows for both Wonder and
Full.

**No direct tests were run for this page.** Every capability claim is documentation; every price is
a published list price captured on 2026-10-26, not a billed invoice. OpenRouter restates Meta copy
and adds its own parameter surface and host-displayed Vals AI / Design Arena scores — it is a host
record, not a measurement. The only independent measurements here are Artificial Analysis's
Intelligence Index, per-benchmark scores, and observed speed/latency.

The next useful evidence would be a small reproducible set against `muse-wonder-1.0` on a named
date: exact output-token counts and latency at each effort level; whether `minimal` versus `max`
changes a fixed agentic task; PDF/video/audio input limits; a controlled Terminal-Bench 4.0 run to
settle the 49.5 vs 52.0 gap; and a Wonder-at-max versus Full comparison through Muse Code.
