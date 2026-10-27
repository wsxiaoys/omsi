# Qwen3.8 Flash-Next

Alibaba's **open-weights** mid-tier model, released **2026-08-26**: a 125B-parameter MoE
(6B active) with a 51B n-gram embedding table, a vision encoder, and a native 262,144-token
context that YaRN extends to 1,000,000
([launch post](../../sources/qwen.ai/qwen3-8-flash-next-blog/2026-10-26.md),
[model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)). Qwen
positions it as "an early preview of the architecture used in **Qwen4**" — the same
role Qwen3-Next played for Qwen3.5.

**This page is about the open artifact, not about `qwen3.8-flash`.** The hosted production
SKU carries the shorter name and is a different thing to call: Qwen says "**Qwen3.8-Flash**
is the official version based on Qwen3.8-Flash-Next with more production features, e.g., 1M
context length by default, official built-in tools"
([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)). No vendor
API sells anything called Flash-Next: the Model Studio and QwenCloud URLs for
`qwen3.8-flash-next` both 404, and OpenRouter's catalogue of 464 models contains no such
slug ([Model Studio](../../sources/alibabacloud.com/qwen3-8-flash-model-studio/2026-10-26.md),
[QwenCloud](../../sources/qwencloud.com/qwen3-8-flash/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/qwen3-8-flash/2026-10-26.md)). The distinction is
carried in full under [Identity](#identity).

Artificial Analysis independently scores it **40** on the Intelligence Index — level with
the open `Qwen3.8 2.4T A95B` and five points below `Qwen3.8 Max (0902)` — at **$0.37 per
index task** against Max's $5.41, while burning 240M output tokens to do it
([AA](../../sources/artificialanalysis.ai/qwen3-8-flash-next/2026-10-26.md)).

## Identity

- **Canonical name:** Qwen3.8-Flash-Next. **Weights IDs:** `Qwen/Qwen3.8-Flash-Next` on
  Hugging Face and ModelScope, with an FP8 sibling `Qwen/Qwen3.8-Flash-Next-FP8`
  ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)).
- **Vendor:** Alibaba (Qwen team). Config class `Qwen4ExpForConditionalGeneration`,
  `model_type: qwen4_exp` — the internal name is a Qwen4 placeholder, not a Qwen3.8 tier
  label ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)).
- **Release:** **2026-08-26**. See [the date dispute](#the-date-dispute) below; the launch
  post's own proxy timestamp says 2026-08-03 and is not trusted here.
- **Status:** current, open weights, no deprecation signal in any captured source. The
  hosted `qwen3.8-flash` is listed as current "Lightweight & low-cost" in Model Studio's
  tier guide ([tier guide](../../sources/alibabacloud.com/qwen3-8-flash-model-studio/2026-10-26.md)).
- **Host endpoints:** self-hosted weights (vLLM, SGLang, TokenSpeed recipes in the card);
  Featherless AI as the only third-party inference provider declared by Hugging Face, at
  262,144 context ([Featherless](../../sources/featherless.ai/qwen3-8-flash-next/2026-10-26.md));
  and the vendor's `qwen3.8-flash` on Model Studio (Beijing, Singapore, Hong Kong,
  Frankfurt, Tokyo, US) and QwenCloud (Singapore)
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-flash-model-studio/2026-10-26.md),
  [QwenCloud](../../sources/qwencloud.com/qwen3-8-flash/2026-10-26.md)).
- **Aliases and leaderboard labels:** Artificial Analysis "Qwen3.8-Flash-Next" (the
  roster's discovery label "Qwen3.8 Flash-Next" is that row, not a vendor ID); OpenRouter
  `qwen/qwen3.8-flash` (canonical `qwen/qwen3.8-flash-20260826`), which declares
  `hugging_face_id: "Qwen/Qwen3.8-Flash-Next"`; Featherless `Qwen/Qwen3.8-Flash-Next`.
- **Siblings:** [`Qwen3.8 Max`](qwen3.8-max.md) (2.4T/95B, separate page), the open `Qwen3.8-2.4T-A95B`,
  `Qwen3.8-27B` (the dense 27B that Qwen benchmarks against this model), `Qwen3.7-Plus`
  (the 397B predecessor tier it is compared with), and the hosted `Qwen3.8-Flash`.

### Flash-Next vs. Flash

The two names are one model lineage and two different deliverables. Qwen states the
relationship in two places, with the same content: the production version is "the official
version based on Qwen3.8-Flash-Next with more production features, e.g., 1M context length
by default, official built-in tools"
([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md),
[launch post](../../sources/qwen.ai/qwen3-8-flash-next-blog/2026-10-26.md)).

| | Qwen3.8-Flash-Next (weights) | Qwen3.8-Flash (`qwen3.8-flash`, API) |
| --- | --- | --- |
| Context | 262,144 native; YaRN to 1,000,000 | 1,000,000 window, 991,808 max input, 983,616 in thinking mode |
| Built-in tools | none hosted; function calling via your own stack | `code_interpreter`, `web_search`, `web_extract`/`web_fetch`, `pdf_parsing`, `t2i_search`, `i2i_search` |
| Reasoning control | `enable_thinking`, `preserve_thinking`, `reasoning_effort` | same parameters, plus Responses-API `reasoning.effort` |
| Price | self-host, or $0.15 / $0.50 per 1M on Featherless | $0.113 / $0.382 (Beijing, HK, Frankfurt, Tokyo, US-Global) to $0.15 / $0.47 (Singapore, US scope) |
| Fine-tuning | downloadable, fine-tunable | Unsupported |
| Licence | Qwen Community License 1.0 | vendor terms |

Sources: [model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md),
[Model Studio](../../sources/alibabacloud.com/qwen3-8-flash-model-studio/2026-10-26.md),
[QwenCloud](../../sources/qwencloud.com/qwen3-8-flash/2026-10-26.md),
[Featherless](../../sources/featherless.ai/qwen3-8-flash-next/2026-10-26.md).

Three things follow. First, **AA's entity is the open artifact by label but the hosted SKU
by measurement**: it labels the row "Open weights model" with a 256k context and links the
Hugging Face repository, yet reports speed, latency and price "based on Alibaba's API",
whose only SKU is the 1M-context `qwen3.8-flash`
([AA](../../sources/artificialanalysis.ai/qwen3-8-flash-next/2026-10-26.md)). Second, AA's
price for Flash-Next ($0.15 / $0.47) is exactly the Flash list price, so it is not a price
for the weights. Third, **no independent host resells the model under the Flash-Next
name** — OpenRouter's two endpoints for `qwen/qwen3.8-flash` are both
`provider_name: "Alibaba"` ([OpenRouter](../../sources/openrouter.ai/qwen3-8-flash/2026-10-26.md)),
and Featherless is the only non-Alibaba serving path found at all.

### The date dispute

The launch post's reader-proxy metadata reads `Published Time: 2026-08-03T10:00:00+08:00`
— byte-identical to the Qwen3.8-Max post's timestamp, and earlier than artifacts the post
says already exist ([launch post](../../sources/qwen.ai/qwen3-8-flash-next-blog/2026-10-26.md)).
The same proxy misdated the Qwen3-TTS post
([that record](../../sources/qwen.ai/qwen3-tts-open-source-announcement/2026-10-26.md)), so
the field is not reliable on this publisher. Three independent timestamps point at
**2026-08-26**:

- Hugging Face repository `createdAt` **2026-08-24T08:24:59Z**, collection `lastUpdated`
  2026-08-26T12:32:48Z
  ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md));
- GitHub repository `created_at` 2026-08-24T02:50:39Z with the "Initial commit" at
  **2026-08-26T12:29:38Z**
  ([GitHub](../../sources/github.com/qwenlm-qwen3-8-flash-next/2026-10-26.md));
- Wayback Machine's earliest capture of the blog is **2026-08-26T12:52:55Z**, while the
  Qwen3.8-Max post was already being captured on 2026-08-04
  ([archive](../../sources/archive.org/qwen3-8-flash-next-blog-first-capture/2026-10-26.md)).

AA's FAQ independently says "released on August 26, 2026"
([AA](../../sources/artificialanalysis.ai/qwen3-8-flash-next/2026-10-26.md)), and OpenRouter's
catalogue entry was created 2026-08-26T19:37:40Z. The page uses **2026-08-26** and records
the 2026-08-03 metadata as a contradiction rather than resolving it by preference.

The date is inside the roster's one-year window (≥ 2025-10-26), so no specialist exception
applies.

## Current assessment

**A distinct model, not a repackaging.** New architecture family (GDN + Qwen Sparse
Attention, Gated Residual, n-gram embedding, Muon), new parameter shape (125B + 51B n-gram
+ 4B MTP), a separate open artifact with its own licence, and an independent index score
that sits five points below the flagship and level with the open Max-class artifact. Qwen
frames the release as architecture-first: "We release these weights early so that the
architecture can be evaluated independently by the community"
([launch post](../../sources/qwen.ai/qwen3-8-flash-next-blog/2026-10-26.md)).

**The cost story is the point, and it is only partly corroborated.** Qwen claims training
"takes only about 1/9 as much" as Qwen3.7-Plus and that QSA gives 7.6× prefill / 4.9×
decode speedups at 1M tokens — vendor-internal measurements with no harness published.
The independently measurable version of the claim holds up better: at index 40 the model
costs **$0.37 per index task** against $5.41 for `Qwen3.8 Max (0902)` (index 45) and $2.16
for `Qwen3.8 2.4T A95B` (index 40)
([AA](../../sources/artificialanalysis.ai/qwen3-8-flash-next/2026-10-26.md)).

**Independent speed is poor for the price tier.** 52.8 t/s puts it at the low end of its
class (median 83.6 t/s), and AA's own verdict is that it is "amongst the leading models in
intelligence and well priced when comparing to other open weight models of similar size.
It's also notably slow and very verbose"
([AA](../../sources/artificialanalysis.ai/qwen3-8-flash-next/2026-10-26.md)).

**The weights are the durable part.** A 6B-active model with 262k native context under a
licence that permits hosting is a self-hosting option, which the hosted-only siblings in
this tier are not. That is the reason to read this page rather than the Flash SKU's.

## Documented capabilities

All vendor statements unless marked; none independently verified except where AA is cited.

- **Architecture:** 125B main parameters with 6B activated, plus 51B n-gram embedding and
  4B MTP; 48 layers in a `12 × (3 × (Gated DeltaNet → MoE) → 1 × (Qwen Sparse Attention →
  MoE))` layout; 512 experts with 10 routed + 1 shared active; Gated Residual with 4
  branches and bottleneck rank 320; n-gram table of 20M bigram/trigram entries at layer 2
  ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)). Safetensors
  reports 179,999,981,424 BF16 parameters — the 125B + 51B + 4B sum, consistent with AA's
  "180B total" ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)).
- **Modalities:** text, image and video in; text out. AA lists the same three inputs
  ([AA](../../sources/artificialanalysis.ai/qwen3-8-flash-next/2026-10-26.md)); Featherless
  declares image input and tool use but **not** video
  ([Featherless](../../sources/featherless.ai/qwen3-8-flash-next/2026-10-26.md)).
- **Context:** "262,144 natively and extensible up to 1,000,000 tokens"; the card's
  recommended output budget inside 1M is 262,144 reasoning tokens and 131,072 final-answer
  tokens ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)).
- **Reasoning:** thinking on by default; `enable_thinking`, `preserve_thinking` (also on by
  default, retaining thinking blocks from all prior turns) and `reasoning_effort` with
  levels `xhigh` (default), `medium`, `low`. The card warns that on multi-turn agentic
  tasks "lower reasoning effort does not always reduce overall task completion time"
  ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)).
- **Long video:** raising `longest_edge` to 469,762,048 enables "224k video tokens … for
  hour-scale videos"; the shipped preprocessor config is described as "conservatively
  configured" ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)).
- **Tooling in the weights:** none shipped. Function calling and structured outputs are
  documented for the hosted `qwen3.8-flash` SKU, not for the downloadable artifact
  ([QwenCloud](../../sources/qwencloud.com/qwen3-8-flash/2026-10-26.md)).
- **Serving:** Transformers, vLLM, SGLang and TokenSpeed, with the card warning that
  "Inference efficiency and throughput vary significantly across frameworks"
  ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)).
- **Not supported:** fine-tuning through Model Studio
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-flash-model-studio/2026-10-26.md)).
  QwenCloud's page still renders a fine-tuning feature link for the same SKU, which is an
  unreconciled vendor-side contradiction
  ([QwenCloud](../../sources/qwencloud.com/qwen3-8-flash/2026-10-26.md)).

### Benchmarks: vendor

Qwen's post-trained table, 2026-08-26, against its own siblings and two peers
([launch post](../../sources/qwen.ai/qwen3-8-flash-next-blog/2026-10-26.md)):

| Benchmark | Flash-Next | Qwen3.8-27B | Qwen3.7-Plus | DeepSeek-V4-Flash-0731 | Claude-Opus-4.6 (Max) |
| --- | --- | --- | --- | --- | --- |
| DeepSWE 1.1 | **58.7** | 42.2 | 16.5 | 54.4 | — |
| SWE-bench Pro | **62.5** | 61.7 | 55.8 | 56.0 | 53.4 |
| SWE-bench Multilingual | **81.0** | 73.8 | 75.8 | — | 77.5 |
| NL2Repo-Bench | 48.1 | 42.3 | 41.1 | **54.2** | 47.6 |
| CoWorkBench | **73.9** | 70.7 | 65.1 | 45.1 | 68.2 |
| JobBench | **55.7** | 33.4 | 27.6 | 41.3 | 36.6 |
| Agents' Last Exam (Pass@1 / Score) | 24.3 / **51.2** | 20.4 / 42.9 | 13.2 / 33.6 | **25.2** / — | — |
| Toolathlon Verified | **73.5** | 67.1 | 50.6 | 70.3 | — |
| IFBench | **81.3** | 79.5 | 79.1 | 79.2 | 62.5 |
| GPQA Diamond | **91.7** | 89.2 | 90.3 | 90.8 | 91.3 |
| HLE | 35.9 | 30.8 | 34.7 | 33.8 | **40.0** |
| LiveCodeBench v6 | **91.9** | 90.3 | 89.6 | 90.6 | 88.8 |
| LVBench (long video) | **76.6** | 72.4 | 76.2 | — | 63.0 |
| OSWorld 2.0 (binary / partial) | 19.4 / **52.3** | 19.4 / 48.0 | 2.8 / 21.5 | — | — |
| AndroidWorld | **84.5** | 81.9 | 81.0 | — | 62.0 |

Read the footnotes before the rows. DeepSWE 1.1 is "the highest score across the two
harnesses" and "Qwen3.8-Flash-Next performs best on mini-SWE-agent" — a best-of-two
number. The table above merges the post's language and vision tables; the vision-only rows
left out are ClawEval-MM 64.4/60.4, RecreationBench 49.9, Vision2Web 64.0, ERQA 72.3,
RealWorldQA 88.5, MathVision 90.6/95.7 and CharXiv 84.6/90.6. CoWorkBench and
RecreationBench are in-house; ClawEval-MM is Qwen's own multimodal harness; Vision2Web was
"judged by gpt-5.4-2026-03-05". The most striking
vendor row is JobBench 55.7 against Claude-Opus-4.6's 36.6 — a 19-point gap on a
vendor-authored benchmark, which is a claim about Qwen's own task suite as much as about
the model.

The base-model table (14 rows) claims the base checkpoint beats `Qwen3.7-Plus-Base` on 8
of 14, losing MMLU 90.36 vs 90.43 and MATH 72.78 vs 74.38. **No base-model weights were
found**: the `Qwen/qwen38-flash-next` collection contains only the post-trained model and
its FP8 copy ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)).

### Benchmarks: independent

Artificial Analysis, Intelligence Index **v4.3.2**, 2026-10-26
([AA](../../sources/artificialanalysis.ai/qwen3-8-flash-next/2026-10-26.md)):

- **Index 40** — #9 of 121 models on the board, "well above average among comparable
  models (median: 19)" for its open-weights size class.
- **$0.15 / $0.47 per 1M tokens**, 89% cache discount, **$0.37 per index task**, blended
  $0.09 per 1M at a 7:2:1 cache-hit/input/output ratio.
- **52.8 t/s** output and **2.00 s** TTFT "based on Alibaba's API"; 240M output tokens for
  the full index against a class median of 140M.
- AA's provider page lists Alibaba Cloud as the only provider, at $0.09 blended and
  **39.89 s** "time to first answer token" on its 10k-input benchmark workload — a
  different measurement from the 2.00 s TTFT, and AA does not reconcile them
  ([AA providers](../../sources/artificialanalysis.ai/qwen3-8-flash-next/2026-10-26.md)).

## Limitations and constraints

- **Native context is 262k, not 1M.** The 1M figure requires static YaRN, and the card
  warns that "All the notable open-source frameworks implement static YaRN … **potentially
  impacting performance on shorter texts**". Of the vendor's harness footnotes, the ones
  that state a window (SWE-bench Pro, DeepSWE 1.1, SWE-bench Multilingual) all use 256K;
  none uses 1M.
- **The 1M-context experience is the hosted SKU's.** Model Studio lists a 1,000,000 window
  with 991,808 max input for `qwen3.8-flash`
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-flash-model-studio/2026-10-26.md));
  no captured source shows the self-hosted weights behaving the same way at 1M.
- **Video input is not universal across hosts.** The card and AA list it; Featherless
  declares only `image_input` and `tool_use`
  ([Featherless](../../sources/featherless.ai/qwen3-8-flash-next/2026-10-26.md)). Whether
  that is a host gap or a model gap is unstated.
- **Verbosity is a cost driver.** 240M tokens per index run against a 140M class median,
  and AA ranks it 45th of 47 on verbosity. At $0.37 per task that is still cheap, but it
  means per-request output budgets run large.
- **Speed is at the bottom of its class.** 52.8 t/s against a median of 83.6 t/s; the
  vendor's efficiency claims are about prefill/decode kernels at 1M tokens, not about
  steady-state output rate at short context.
- **AA's context figure is internally inconsistent:** 256k in the spec table and
  leaderboard row, 260k in the FAQ. The vendor's 262,144 resolves the intended value.
- **No independent figure exists for non-thinking mode.** AA's row is explicitly "the
  reasoning version of this model" and adds only that "a non-reasoning variant may also
  exist"; the card documents an instruct mode (`enable_thinking: False`, different sampling
  defaults), so half the documented configuration surface is unmeasured by anyone but
  Qwen.
- **No fine-tuning** through Model Studio, despite the weights being fine-tunable.
- **Several headline rows are Qwen-authored** (CoWorkBench, RecreationBench, ClawEval-MM)
  or best-of-two-harness (DeepSWE 1.1), so they measure model-plus-scaffold, not the model.
- **Licence is not open source.** The Qwen Community License 1.0 imposes a separate
  licence on "Model as a Service" and "AI Work Assistant" businesses and a prominent
  model-name requirement above 100M MAU or $20M monthly revenue
  ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)).
- **Region-gated features on the hosted SKU:** web search is Supported in Beijing and
  Singapore only, and batch inference in Beijing only
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-flash-model-studio/2026-10-26.md)).

## Access, pricing, licensing

**Hosted `qwen3.8-flash`** (USD per 1M tokens; the price a Flash-Next reader will actually
meet if they call the API rather than self-host):

| Region | Input | Output | Implicit cache | Explicit cache write | Explicit cache read |
| --- | --- | --- | --- | --- | --- |
| Model Studio — Beijing, Hong Kong, Frankfurt, Tokyo, US (Global) | $0.113 | $0.382 | $0.014 | $0.177 | $0.014 |
| Model Studio — Singapore, US scope | $0.15 | $0.47 | $0.016 | $0.2 | $0.016 |
| QwenCloud (Singapore) | $0.15 | $0.47 | $0.016 | $0.2 | $0.016 |

Sources: [Model Studio](../../sources/alibabacloud.com/qwen3-8-flash-model-studio/2026-10-26.md),
[QwenCloud](../../sources/qwencloud.com/qwen3-8-flash/2026-10-26.md). Rate limits are
spend-tiered dynamic limiting in Beijing and Singapore, static 30,000 RPM / 5,000,000 TPM
in the four global regions, and 15,000 RPM / 2,500,000 TPM on the US scope.

**Host price agreement:** OpenRouter charges exactly $0.15 / $0.47 with $0.016 cache read
and $0.20 cache write, both endpoints behind Alibaba
([OpenRouter](../../sources/openrouter.ai/qwen3-8-flash/2026-10-26.md)). Artificial
Analysis reports the same $0.15 / $0.47
([AA](../../sources/artificialanalysis.ai/qwen3-8-flash-next/2026-10-26.md)). The launch
post quotes $0.15 / $0.47 as *the* price
([launch post](../../sources/qwen.ai/qwen3-8-flash-next-blog/2026-10-26.md)), which is the
Singapore list, not the cheapest region — Beijing and the four global regions are 19–25%
cheaper on both directions.

**Weights:** Featherless is the only non-Alibaba host found, at $0.15 in / **$0.50** out
per 1M, 262,144 context and 32,768 max output, with no cache pricing exposed
([Featherless](../../sources/featherless.ai/qwen3-8-flash-next/2026-10-26.md)). Self-hosting
has no published cost basis; the card recommends SGLang, vLLM or TokenSpeed and warns that
throughput varies by framework.

**Licence:** `Qwen Community License 1.0` (`license: other`,
`license_name: qwen-community-1.0`). It grants use, modification, sublicensing, sale,
deployment, hosting and fine-tuning, on two conditions: prominent display of the model
name for products above **100M MAU or $20M monthly revenue**, and a **separate licence**
for "Model as a Service" or "AI Work Assistant" businesses, with internal use exempt and
"mere relaying of requests to models hosted by other third parties" excluded from the
MaaS definition ([model card](../../sources/huggingface.co/qwen3-8-flash-next/2026-10-26.md)).
This is not an OSI licence; the hosting clause is the one that matters for resellers.

## Unresolved questions

1. **Was the post published 2026-08-03 or 2026-08-26?** The proxy says 08-03; repository
   creation, first commits, first Wayback capture, OpenRouter's `created` and AA's FAQ all
   say 08-26. No first-party page states a date in its body.
2. **What does `qwen3.8-flash` change relative to the weights?** Qwen says "more production
   features, e.g., 1M context length by default, official built-in tools". Whether the
   post-training differs, and by how much, is unstated and unmeasured.
3. **Which artifact does AA's 40 score?** AA labels the entity open weights with 256k
   context but measures Alibaba's API, which serves the 1M-context `qwen3.8-flash` SKU at
   the Flash price. A reader cannot tell whether 40 describes the downloadable weights or
   the hosted variant.
4. **Why is it slow and verbose?** 52.8 t/s and 240M index tokens are both near the bottom
   of its class, and Qwen's efficiency claims are about prefill at 1M context. Whether
   reasoning length, MoE routing, or the serving stack is responsible is not established.
5. **Do the vendor's agentic wins survive a neutral harness?** JobBench 55.7 vs 36.6 and
   CoWorkBench 73.9 vs 45.1 are large gaps on Qwen-authored or Qwen-run benchmarks; no
   independent agentic evaluation beyond AA's composite was captured.
6. **Does the 1M YaRN extension degrade short-context quality in practice?** The card warns
   that static YaRN "potentially impacts performance on shorter texts" and recommends
   raising the factor only when long context is needed. No measurement of the trade-off was
   captured.
7. **Is there a base checkpoint to download?** Qwen benchmarks a `Qwen3.8-Flash-Next-Base`
   but the collection lists only the post-trained model and its FP8 copy.
8. **Why does QwenCloud advertise fine-tuning for a SKU Model Studio marks Unsupported?**
   Both are first-party pages captured the same day.

## Evidence status

**Floor met.** First-party: the launch post, the Hugging Face model card with its
`Qwen Community License 1.0` text and repository metadata, the GitHub repository's commit
timestamps, and two vendor API product pages for the hosted sibling (`qwen3.8-flash` on
Model Studio and QwenCloud). Independent host records: **OpenRouter** (catalogue, price,
modalities, `hugging_face_id` mapping — but Alibaba-only endpoints) and **Featherless AI**
(a non-Alibaba host actually serving the open weights). Independent measurement:
**Artificial Analysis**.

Two caveats on the floor's strength:

- **The host records are thin.** OpenRouter resells Alibaba's own endpoints, so it
  confirms availability and declared metadata rather than independent serving behaviour;
  Featherless is one host, with no quantisation or hardware disclosure and no video flag.
- **No host sells the Flash-Next name.** OpenRouter's catalogue calls it
  `qwen3.8-flash` and Featherless calls it `Qwen/Qwen3.8-Flash-Next`, so the identity link
  between the roster label and the API SKU rests on the vendor statements plus OpenRouter's
  `hugging_face_id` field.

No direct tests were run for this page: no API calls, no self-hosted deployment, no
benchmark reproduction, no video input attempted. Every number is either vendor-reported
or Artificial Analysis's measurement, and the two are labelled as such throughout.
