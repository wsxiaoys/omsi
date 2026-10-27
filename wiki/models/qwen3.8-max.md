# Qwen3.8 Max

Alibaba's Qwen flagship, announced **2026-08-03**: a 2.4-trillion-parameter sparse MoE
(95B active) with a 1M-token context that accepts text, images and video and returns text
([launch post](../../sources/qwen.ai/qwen3-8-max-blog/2026-10-26.md),
[Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md)).
It is the first Qwen-Max-class model whose base artifact was also released as open weights,
under a custom "Qwen3.8-Max License"
([model card](../../sources/huggingface.co/qwen3-8-2-4t-a95b/2026-10-26.md)).

Two things make this page harder to read than the usual flagship entry. The hosted SKU is
**not** the open artifact — Qwen says Max is "the official version based on
Qwen3.8-2.4T-A95B with more features, such as vision input & non-thinking support, 1M
context length by default, official built-in tools"
([model card](../../sources/huggingface.co/qwen3-8-2-4t-a95b/2026-10-26.md)) — and the
independent measurement that exists covers a **September snapshot**, not the August launch.
Artificial Analysis scores `Qwen3.8 Max (0902)` at **45** on its Intelligence Index, level
with DeepSeek V4.1 Flash 1017 while costing **20× more per index task** ($5.41 vs $0.26)
([AA](../../sources/artificialanalysis.ai/qwen3-8-max/2026-10-26.md)).

## Identity

- **Canonical name:** Qwen3.8-Max. **API ID:** `qwen3.8-max` — "the value of the `model`
  parameter" ([Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md)).
- **Vendor:** Alibaba (Qwen team), served through Alibaba Cloud Model Studio and QwenCloud.
- **Announced:** 2026-08-03 (`Published Time: 2026-08-03T10:00:00+08:00`
  [launch post](../../sources/qwen.ai/qwen3-8-max-blog/2026-10-26.md)). **Open weights:**
  promised "next week" in that post; the Hugging Face repository was created 2026-08-08
  ([card](../../sources/huggingface.co/qwen3-8-2-4t-a95b/2026-10-26.md)).
- **Snapshot:** `qwen3.8-max-0902`, alias `qwen3.8-max-2026-09-02`, dated 2026-09-02
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md),
  [QwenCloud](../../sources/qwencloud.com/qwen3-8-max-0902/2026-10-26.md)).
- **Status:** current flagship tier. Model Studio's tier table lists `qwen3.8-max` as
  "Highest capability" and keeps `qwen3.7-max` under "Legacy models … no longer
  recommended" ([tier table](../../sources/alibabacloud.com/qwen3-8-max-model-tiers/2026-10-26.md)).
- **Host endpoints:** Model Studio in China (Beijing), Singapore, Germany (Frankfurt), US
  (Virginia), Japan (Tokyo) and Hong Kong
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md));
  QwenCloud's Singapore region via an OpenAI-compatible `/compatible-mode/v1` endpoint and
  an Anthropic-protocol surface
  ([QwenCloud](../../sources/qwencloud.com/qwen3-8-max/2026-10-26.md)); OpenRouter, whose
  two endpoints for this slug are **both `provider_name: "Alibaba"`**
  ([OpenRouter](../../sources/openrouter.ai/qwen3-8-max-0902/2026-10-26.md)).
- **Aliases and leaderboard labels:** Artificial Analysis "Qwen3.8 Max (0902)"; OpenRouter
  `qwen/qwen3.8-max-0902`, canonical slug `qwen/qwen3.8-max-20260902`. The roster label
  "Qwen3.8 Max" is the vendor's own ID.
- **Siblings:** `qwen3.8-flash` (same 1M context, one tier down), `qwen3.7-plus`
  (Model Studio's cost/performance recommendation), legacy `qwen3.7-max`, and the open
  weights `Qwen/Qwen3.8-2.4T-A95B` — which Artificial Analysis scores **separately** at 40
  with a 262k context
  ([AA](../../sources/artificialanalysis.ai/qwen3-8-max/2026-10-26.md)).

### Is the August model still what `qwen3.8-max` serves?

Unresolved, and the reason this page carries a checkpoint note rather than a split. Model
Studio presents `qwen3.8-max` and `qwen3.8-max-0902` as **two entries**, calls the latter "an
upgraded snapshot of qwen3.8-max", and gives both the same international price
([Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md)). No
vendor statement says whether the un-suffixed ID now resolves to the September weights or
stays pinned to August. Neither host lists an un-suffixed slug: OpenRouter carries only
`qwen3.8-max-0902`
([OpenRouter](../../sources/openrouter.ai/qwen3-8-max-0902/2026-10-26.md)), and Artificial
Analysis carries only the 0902 row
([AA](../../sources/artificialanalysis.ai/qwen3-8-max/2026-10-26.md)).

This page therefore keeps one entry, with a checkpoint history, because only the snapshot
has independent evidence and the vendor keeps both IDs obtainable at one price. **Every
independent measurement below was made on `qwen3.8-max-0902`**; the vendor's benchmark
table is labelled Qwen3.8-Max and predates the snapshot, and the capability tables are
identical for both IDs. No source quantifies the
difference between August and September — QwenCloud's snapshot note says only that coding
"breaks new ground" and vision is "sharper and more reliable", with no numbers
([QwenCloud](../../sources/qwencloud.com/qwen3-8-max-0902/2026-10-26.md)).

### A second, unconfirmed SKU: "Max Prime"

OpenRouter also lists `qwen/qwen3.8-max-prime` (created 2026-09-23) at **$4 / $12** per 1M
tokens with the same declared modalities and 1M context, described as "a higher-throughput
variant of Qwen3.8 Max … served as a separate SKU at a higher price point"
([OpenRouter](../../sources/openrouter.ai/qwen3-8-max-prime/2026-10-26.md)). No first-party
page for it exists: the Model Studio and QwenCloud URLs return 404, and neither vendor
model page nor the tier table mentions it. "Higher throughput" is the host's
characterisation and is unmeasured; Artificial Analysis does not list the SKU. It is not
part of this page's identity, but a reader comparing prices will meet it.

## Current assessment

**A distinct tier, not a repackaging.** New parameter class (2.4T/95B against Qwen3.7-Max's
unspecified size), new price, new context, new modality set, and a new open artifact.

**The capability story is agentic and long-horizon, and it is mostly vendor-reported.**
Qwen's own table puts the model above Opus 4.8 on PaperBench (93.0 vs 80.3), FrontierSWE
(73.5 vs 70.0), WideSearch (81.9 vs 72.9) and IFBench (82.8 vs 62.2), and below it on
SWE-bench Pro (67.7 vs 69.2), DeepSWE 1.1 (56.6 vs 59.0) and HLE (43.6 vs 45.7)
([launch post](../../sources/qwen.ai/qwen3-8-max-blog/2026-10-26.md)). Several of the
headline wins are on benchmarks Qwen wrote: QwenSWEBench, QwenQoderBench, QwenReactBench,
QwenSVGBench and CoWorkBench are in-house, and the post introduces RecreationBench as a new
benchmark of its own.

**The independent picture is mid-pack at a high price.** Index 45, tied with DeepSeek V4.1
Flash 1017 and GLM-5.3, one point under Grok 4.7 and MiMo-V2.6-Pro
([AA](../../sources/artificialanalysis.ai/qwen3-8-max/2026-10-26.md)). AA's cost figure is
$5.41 per index task against DeepSeek's $0.26 for the same index score — a 20× gap that
follows from **verbosity**, not from per-token price: 190M output tokens to run the index
versus a median of 81M.

**The distinctive property is the open release.** A Max-class Qwen with downloadable weights
did not exist before this generation, and the licence is permissive with two commercial
triggers rather than a blanket restriction. That is the reason to read this page even if
the index score does not justify the price.

## Documented capabilities

All from the vendor pages unless marked; none independently verified.

- **Modalities:** input Image, Text, Video; output Text
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md),
  [QwenCloud](../../sources/qwencloud.com/qwen3-8-max/2026-10-26.md)). Video is claimed in
  the launch post as "videos longer than **100 hours**" with a "video memory graph"
  ([launch post](../../sources/qwen.ai/qwen3-8-max-blog/2026-10-26.md)).
- **Context:** window 1,000,000; max input 991,808; max input in thinking mode 983,616; max
  output 131,072 either way; max chain-of-thought 262,144. Vendor caveat: "The supported
  model length may vary depending on different combinations of API input parameters"
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md)).
- **Reasoning:** thinking mode, enabled with `enable_thinking` or depth-controlled with
  `reasoning.effort` on the Responses API; Model Studio describes Qwen3+ models as
  operating "in a hybrid mode togglable per request"
  ([tier table](../../sources/alibabacloud.com/qwen3-8-max-model-tiers/2026-10-26.md)).
  OpenRouter declares reasoning **mandatory** on both Max slugs with default effort
  `xhigh` and five levels — `xhigh, high, medium, low, minimal`
  ([OpenRouter](../../sources/openrouter.ai/qwen3-8-max-0902/2026-10-26.md)).
- **Tools:** function calling and built-in tools (`code_interpreter`, `web_search`,
  `web_extractor`, `t2i_search`, `i2i_search`, `pdf_parsing`, `web_fetch`), structured
  outputs, prefix completion, context caching, batch inference
  ([QwenCloud](../../sources/qwencloud.com/qwen3-8-max/2026-10-26.md)).
- **Not supported:** fine-tuning ([Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md)).
- **Open-weights artifact:** 92 layers, 512 experts (10 routed + 1 shared active), hybrid
  `23 × (3 × Gated DeltaNet → MoE → 1 × Gated Attention → MoE)` layout, 262,144 native
  context "extensible up to 1,010,000 tokens", thinking controlled by `reasoning_effort`
  and `preserve_thinking`, recommended sampling `temperature=1.0, top_p=0.95, top_k=20`
  ([model card](../../sources/huggingface.co/qwen3-8-2-4t-a95b/2026-10-26.md)).

### Benchmarks: vendor

Qwen's table, 2026-08-03, Qwen3.8-Max column against two frontier peers and its own
predecessor ([launch post](../../sources/qwen.ai/qwen3-8-max-blog/2026-10-26.md)):

| Benchmark | Qwen3.8-Max | Opus 4.8 | GPT-5.6 Sol (max) | Qwen3.7-Max |
| --- | --- | --- | --- | --- |
| Terminal Bench 2.1 | 86.6 | 84.6 | 88.8 | 74.5 |
| SWE-bench Pro | 67.7 | 69.2 | 64.6 | 60.6 |
| DeepSWE 1.1 | 56.6 | 59.0 | 73.0 | 21.6 |
| PaperBench | **93.0** | 80.3 | 90.5 | 64.8 |
| FrontierSWE | 73.5 | 70.0 | — | 40.7 |
| GPQA Diamond | 92.6 | 92.0 | 94.1 | 92.4 |
| HLE | 43.6 | 45.7 | 47.2 | 41.4 |
| HLE w/ tools | 56.2 | 57.9 | 58.0 | 53.5 |
| MRCR v2 256K (8-needle) | 92.9 | 83.2 | 93.8 | 86.7 |
| LongBench v2 | 66.3 | 69.1 | 67.1 | 65.3 |
| IFBench | **82.8** | 62.2 | 72.7 | 79.1 |

Read the harness footnotes before using any row. Terminal-Bench 2.1 was run "with Claude
Code (avg@10), using a 5-hour timeout", while the peers' numbers are "the best published
score across harnesses"; DeepSWE 1.1 is a **best-of-two-harnesses** figure ("notably,
Qwen3.8-Max performs best on Claude Code"); WideSearch used "the Claude Code harness for
external models and the Qwen-Agent harness for ours". The vendor's own note that the model
"performs best on Claude Code" is a reminder that these are model-plus-scaffold numbers.

### Benchmarks: independent

Artificial Analysis, Intelligence Index **v4.3.2**, 2026-10-26
([AA](../../sources/artificialanalysis.ai/qwen3-8-max/2026-10-26.md)):

- **Index 45**, "well above average among comparable models (median: 28)" but mid-pack
  among frontier models.
- **$5.41 per index task**; $2/$6 per 1M tokens; **40.5 t/s** output and **2.92 s** TTFT on
  Alibaba's API; **190M** output tokens for the full index (median 81M).
- AA's own verdict: "amongst the leading models in intelligence and reasonably priced when
  comparing to other models of similar price. It's also notably slow and very verbose."

OpenRouter re-publishes AA sub-indices for the same snapshot — coding 76.2, agentic 56,
intelligence 45.4 ([OpenRouter](../../sources/openrouter.ai/qwen3-8-max-0902/2026-10-26.md)).
These are AA's numbers relayed by a host, not a second measurement.

## Limitations and constraints

- **Context is smaller in practice than on paper.** Vendor: 1M window / 991,808 max input.
  AA measures "980k" and the leaderboard row shows 984k
  ([AA](../../sources/artificialanalysis.ai/qwen3-8-max/2026-10-26.md)).
- **Video input is vendor-only.** Alibaba lists Image/Text/Video; AA says the model
  "supports text and image input" and does not mention video. No captured source shows an
  independent video evaluation, so treat video as documented but unmeasured.
- **Region-dependent features.** Web search and batch inference are marked Supported on one
  Model Studio region tab and Unsupported on the others, and the capture cannot reliably
  map tabs to regions
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md)).
- **Throughput is tiered by spend in the two main regions.** China (Beijing) and Singapore
  use "dynamic rate limiting" keyed to monthly Model Studio spend; other regions are static
  30,000 RPM / 5,000,000 TPM
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md)).
  QwenCloud's Singapore page states 2M TPM for the base ID and 1M TPM for `0902` — a
  same-day, same-vendor inconsistency worth checking against your own account
  ([QwenCloud](../../sources/qwencloud.com/qwen3-8-max-0902/2026-10-26.md)).
- **No fine-tuning.** Both the base and the snapshot list fine-tuning as unsupported
  ([Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md)).
- **Verbosity is a cost driver, not a style note.** 190M tokens per index run against an
  81M median is what turns a $2/$6 price into a $5.41 cost per task.
- **Reasoning is not reliably togglable through hosts.** The vendor documents a
  per-request hybrid mode; OpenRouter's metadata declares reasoning `mandatory: true` with
  no documented off switch
  ([OpenRouter](../../sources/openrouter.ai/qwen3-8-max-0902/2026-10-26.md)).
- **Several headline benchmarks are Qwen's own.** QwenSWEBench, QwenQoderBench,
  QwenReactBench, QwenSVGBench and CoWorkBench have no public harness in the capture, and
  RecreationBench is introduced by the launch post itself.
- **Weight availability is narrower than "open weights" suggests.** The downloadable
  artifact is text-only, thinking-only and 262k-native; the vision, non-thinking, 1M-default
  configuration that the benchmarks measure is the hosted SKU.

## Access, pricing, licensing

**Per-token prices** (USD per 1M tokens), all from the vendor's own price tables:

| Item | International / US | China | QwenCloud (Singapore) |
| --- | --- | --- | --- |
| Input | $2 | $1.65 | $2 |
| Output | $6 | $4.951 | $6 |
| Input (implicit cache) | $0.25 | $0.206 | $0.25 |
| Explicit cache write | $2.5 | $2.063 | $2.5 |
| Explicit cache read | $0.17 | $0.137 | $0.17 |
| Batch file input / output | — | $0.825 / $2.475 | $1 / $3 |

Sources: [Model Studio](../../sources/alibabacloud.com/qwen3-8-max-model-studio/2026-10-26.md),
[QwenCloud](../../sources/qwencloud.com/qwen3-8-max/2026-10-26.md). The international and
China blocks differ by roughly a fifth; the batch rows exist only on the China and QwenCloud
pages, so batch availability outside China is unconfirmed.

- **Host price agreement:** OpenRouter charges exactly $2 / $6 with a $0.25 cache read for
  `qwen3.8-max-0902`, and $4 / $12 for `qwen3.8-max-prime`
  ([OpenRouter](../../sources/openrouter.ai/qwen3-8-max-0902/2026-10-26.md),
  [prime](../../sources/openrouter.ai/qwen3-8-max-prime/2026-10-26.md)). Artificial
  Analysis independently reports $2/$6 and $5.41 per index task
  ([AA](../../sources/artificialanalysis.ai/qwen3-8-max/2026-10-26.md)).
- **Weights licence:** the `Qwen3.8-Max License` (`license: other`,
  `license_name: qwen3.8-max`) grants use, modification, sublicensing, sale, deployment,
  hosting and fine-tuning, on two conditions: prominent display of the model name for
  products above **100M MAU or $20M monthly revenue**, and a **separate licence** for
  "Model as a Service" or "AI Work Assistant" businesses whose revenue exceeds **$50M in
  twelve months** (internal use exempt)
  ([model card](../../sources/huggingface.co/qwen3-8-2-4t-a95b/2026-10-26.md)). This is not
  Apache-2.0 and not an OSI licence; the hosting clause is the one that matters for
  resellers.
- **Hosting gap:** no non-Alibaba inference provider appears on OpenRouter for either Max
  slug, so there is no competing serving stack to compare price, throughput or safety
  behaviour against.

## Unresolved questions

1. **Does `qwen3.8-max` still serve the August weights, or has it moved to `0902`?** No
   vendor statement. Both IDs are listed at the same price; hosts only expose `0902`.
2. **What is `qwen3.8-max-prime`?** A 2× priced SKU that OpenRouter dates 2026-09-23 and
   describes as a higher-throughput variant, with no first-party page (both vendor URLs
   404) and no independent measurement. Different checkpoint or faster serving of the same
   weights — unresolved.
3. **How large is the August → September delta?** Unquantified by the vendor and unmeasured
   independently; only one snapshot is on the AA board.
4. **Does video input work as documented?** Vendor-listed on three first-party pages,
   absent from AA's modality record, untested here.
5. **Why 40.5 t/s?** AA places it at the lower end of its price tier on Alibaba's own API
   (median 88.7 t/s). Whether that is serving capacity, the MoE's active-parameter profile,
   or reasoning overhead is not established.
6. **Do the vendor's agentic wins survive a neutral harness?** DeepSWE 1.1 is already a
   best-of-two-harnesses figure, and WideSearch gave Qwen a different harness from its
   peers. No independent agentic benchmark beyond AA's composite was captured.
7. **Is the Qwen-authored benchmark set reproducible?** Five rows in the vendor table use
   in-house benchmarks with no published harness in these captures.

## Evidence status

**Floor met.** First-party: four sources — the launch post, the Model Studio model page,
and the QwenCloud product pages, plus the Hugging Face card with its licence. Independent
host record: OpenRouter. Independent measurement: Artificial Analysis.

Two caveats on the floor's strength:

- **The host record is a reseller.** OpenRouter's only endpoints for these slugs are
  Alibaba's own, so it confirms availability, price, context and declared modalities but
  adds no independent serving behaviour.
- **The independent measurement covers one snapshot.** AA scores `0902` only, and its
  modality and weights labels disagree with the vendor's (no video; "proprietary"). Both
  disagreements are recorded above rather than resolved.

No direct tests were run for this page: no API calls, no reproduction of any benchmark, no
video input attempted. Every number is either vendor-reported or Artificial Analysis's
measurement of the `0902` snapshot, and the two are labelled as such throughout.
