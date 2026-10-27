# GPT-6 Astra

OpenAI's frontier text model, released **2026-09-03** at $10 / $50 per million input /
output tokens, with a **1,050,000-token context** and text+image input
([changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md),
[model page](../../sources/openai.com/gpt-6-astra-model/2026-10-26.md)). It is the
intelligence tier of the GPT-6 family — five times the token price of GPT-6.1 Sol for one
index point on Artificial Analysis — and it is the **first OpenAI model designated
Critical** for cybersecurity capability under the Preparedness Framework
([system card](../../sources/openai.com/gpt-6-astra-system-card/2026-10-26.md)).

Its defining constraint is not a capability but a set of removals: **reasoning cannot be
turned off**, sampling is fixed, tool calling requires the Responses API, and there is no
EU data residency in either fast tier
([changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md),
[guide](../../sources/openai.com/gpt-6-model-guide/2026-10-26.md)).

Not to be confused with Topaz's "Astra" video model family, an unrelated product that
appears in this wiki under [Topaz Upscale](topaz-upscale.md).

## Identity

- **Canonical name:** GPT-6 Astra. **API ID:** `gpt-6-astra`.
- **Vendor:** OpenAI. Proprietary; no weights, no fine-tuning endpoint.
- **Released:** **2026-09-03**. **Status:** active GA. **Retirement:** none announced in
  the captured [deprecations page](../../sources/openai.com/api-deprecations/2026-10-26.md)
  or changelog.
- **Host endpoints:** OpenAI API (`gpt-6-astra`) on Responses, Chat Completions and Batch;
  Microsoft Azure / Foundry (`gpt-6-astra`, version `(2026-09-03)`); AWS Bedrock (announced
  by OpenAI, not captured); OpenRouter (`openai/gpt-6-astra`, canonical slug
  `openai/gpt-6-astra-20260903`)
  ([model page](../../sources/openai.com/gpt-6-astra-model/2026-10-26.md),
  [Azure](../../sources/microsoft.com/gpt-6-astra-foundry-models/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/gpt-6-astra/2026-10-26.md)).
- **Aliases and leaderboard labels:** Artificial Analysis "GPT-6 Astra (max)" plus four
  lower-effort rows; OpenRouter `openai/gpt-6-astra`, `:batch`, `gpt-6-astra-pro`, and the
  floating alias `~openai/gpt-astra-latest`.
- **Siblings** (same family, same 1,050,000 context):

| Model | Standard price per 1M (in / out) | Position per OpenAI |
| --- | --- | --- |
| **GPT-6 Astra** | **$10 / $50** | Highest intelligence |
| GPT-6.1 Sol | $2 / $10 | Balanced speed, cost and intelligence |
| GPT-6.1 Terra | $1 / $5 | Fast and efficient |
| GPT-6 Luna | $0.10 / $0.50 | Fastest and most cost-effective |
| GPT-6 Sol (2026-09-22) | $2 / $10 | same-generation mid-tier |
| GPT-5.6 Sol | $4 / $20 | previous frontier, used as the comparison baseline |

Prices and positions: [pricing](../../sources/openai.com/gpt-6-astra-pricing/2026-10-26.md),
[guide](../../sources/openai.com/gpt-6-model-guide/2026-10-26.md),
[changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md).

### Label mapping: the roster row is a model, not a codename

The roster row came from Artificial Analysis as "GPT-6 Astra". Four independent matches tie
that label to `gpt-6-astra`: the $10/$50 price AA prints ("based on" the provider's API), the
1M context, the "Apr 30, 2026" knowledge cutoff, and the five effort variants
`max`/`xhigh`/`high`/`medium`/`low`, which is exactly OpenAI's `reasoning.effort` value set
([AA](../../sources/artificialanalysis.ai/gpt-6-astra/2026-10-26.md)). **"Astra" is the
product name, not a codename.**

Three host labels are *not* separate models:

- **"(max)"** is one of five effort settings of one model, and the five rows differ by seven
  index points (53 → 46). Any comparison quoting "GPT-6 Astra" without an effort level is
  under-specified.
- **"GPT-6 Astra Pro"** is the same model served with `reasoning.mode` set to `pro`
  ([OpenRouter](../../sources/openrouter.ai/gpt-6-astra/2026-10-26.md)); OpenAI's own launch
  post offers "GPT‑6 Astra Pro" only as a ChatGPT plan entitlement, and
  `/api/docs/models/gpt-6-astra-pro` returns 404.
- **`~openai/gpt-astra-latest`** is a floating alias that "always redirects to the latest
  model in the GPT Astra family".

### Is it a distinct model or a repackaging?

Distinct, on all three tests that matter:

1. **Own identity and price.** `gpt-6-astra` is a separate ID at $10/$50, against GPT-6
   Sol's $2/$10 and GPT-5.6 Sol's $4/$20 — not a rename of the previous frontier
   ([pricing](../../sources/openai.com/gpt-6-astra-pricing/2026-10-26.md)).
2. **Breaking API changes.** `reasoning.effort: "none"` is rejected, `temperature`, `top_p`
   and `logprobs` are unsupported, and tool calling moved to Responses-only
   ([changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md)).
3. **Variant-specific evidence exists.** A 344 KB system card, a dedicated safety post, and
   five separate AA effort rows describe Astra itself rather than the family
   ([system card](../../sources/openai.com/gpt-6-astra-system-card/2026-10-26.md),
   [Path to Astra](../../sources/openai.com/path-to-astra/2026-10-26.md)).

## Current assessment

**Current, GA, not preview, not deprecated.** It is OpenAI's top text tier at capture, and
its own successor generation (6.1) shipped *below* it rather than replacing it: GPT-6.1 Sol
is positioned "at a lower cost than GPT-6 Astra" and near-Astra rather than above it
([changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md)).

The evidence supports a narrower claim than the marketing. Astra is **frontier-class at
agentic computer use and coding, and state of the art on OpenAI's own cyber and science
suites**, but it is **not the top model on the independent composite index** — AA ranks it
#8 at 53, behind Claude Opus 5.5 (58), Claude Sonnet 5.5 (56) and Kimi K3.1 Pro (55)
([AA](../../sources/artificialanalysis.ai/gpt-6-astra/2026-10-26.md)). On AA's numbers the
interesting comparison is internal: **GPT-6.1 Sol scores 52 at $0.72 per index task against
Astra's 53 at $3.26** — one point for 4.5× the cost per task.

Where Astra's lead is largest and least contested:

- **Terminal-Bench Science 0.1: 64.6%**, against 52.6% for Claude Fable 5.1 and 22.4% for
  GPT-5.6 Sol ([announcement](../../sources/openai.com/gpt-6-astra-announcement/2026-10-26.md)).
- **Cybersecurity**: ExploitBench 100%, SRE-Bench 88.0%, SEC-Bench Pro 85.4% — the basis for
  the Critical designation ([announcement](../../sources/openai.com/gpt-6-astra-announcement/2026-10-26.md),
  [system card](../../sources/openai.com/gpt-6-astra-system-card/2026-10-26.md)).
- **Long context recall**: 96.3% on OpenAI MRCR v2 8-needle in the 512K–1M band, against
  73.8% for GPT-5.6 Sol.

Where it loses: **Humanity's Last Exam with tools (57.2%)** trails every Claude row on the
same table (63.6–65.0%); its GPQA Diamond lead is a near-tie (96.0% against GPT-5.6 Sol's
94.6% and Gemini 3.8 Flash's 95.3%); and it does not lead FrontierCode 1.1 Extended (64.5%
against Claude Fable 5's 64.9%).

Artificial Analysis's own summary is unusually blunt about the trade: "amongst the
leading models in intelligence, but particularly expensive when comparing to other models of
similar price … slower than average, however fairly concise"
([AA](../../sources/artificialanalysis.ai/gpt-6-astra/2026-10-26.md)).

## Documented capabilities

| Property | Value | Source |
| --- | --- | --- |
| Context window | 1,050,000 tokens | [model page](../../sources/openai.com/gpt-6-astra-model/2026-10-26.md) |
| Max input | 922,000 tokens | same |
| Max output | 128,000 tokens | same |
| Input modalities | text, image | same |
| Output modalities | text only | same |
| Knowledge cutoff | 2026-04-30 ("training data up to April 2026" on Azure) | same; [Azure](../../sources/microsoft.com/gpt-6-astra-foundry-models/2026-10-26.md) |
| Reasoning | always on; `reasoning.effort` = `low`/`medium`/`high`/`xhigh`/`max`; `none` rejected | same; [changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md) |
| Sampling | no custom `temperature`, `top_p` or `logprobs` | [changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md) |
| Tools (Responses only) | web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search | [model page](../../sources/openai.com/gpt-6-astra-model/2026-10-26.md) |
| Features | streaming, structured outputs, function calling, prompt caching, image input | same |
| Endpoints | Responses, Chat Completions, Batch; **no** fine-tuning, Realtime, Assistants, images, audio | same |
| Agentic extras | async tool calling, mid-turn steering (WebSocket), reasoning-effort change mid-conversation, persisted reasoning, compaction, pro mode, multi-agent orchestration | [guide](../../sources/openai.com/gpt-6-model-guide/2026-10-26.md) |
| Rate limits (standard) | Build 5,000 RPM / 1M TPM; Launch 10,000 / 4M; Grow 15,000 / 40M | [model page](../../sources/openai.com/gpt-6-astra-model/2026-10-26.md) |
| Data retention | "Astra supports Zero Data Retention for eligible API customers" | [announcement](../../sources/openai.com/gpt-6-astra-announcement/2026-10-26.md) |

**Marketing claims, labelled as such** (all from the
[launch post](../../sources/openai.com/gpt-6-astra-announcement/2026-10-26.md) and
[guide](../../sources/openai.com/gpt-6-model-guide/2026-10-26.md)): "the world's most
intelligent and aligned model"; "state-of-the-art performance in computer use, browsing,
software engineering, science, and professional work"; "our most aligned model yet"; "uses
approximately 65% fewer output tokens than Opus 5" at its highest-scoring settings;
"approximately 31% lower estimated API cost" than Claude Fable 5.1 on Terminal-Bench Science;
"1.9x faster task completion" than GPT-5.6 Sol on Mind2Web. These are vendor estimates for
vendor-chosen configurations, not independent measurements. Astra also "helped establish a
stronger bound" on short prime gaps (246 → 186) — a research claim backed by a linked proof,
which this page records without assessing.

### Benchmarks

OpenAI's own tables are large; the rows that carry the identity of the model are below.
Verbatim from the [announcement](../../sources/openai.com/gpt-6-astra-announcement/2026-10-26.md),
"scores are the maximum at any effort":

| Evaluation | GPT-6 Astra | GPT-5.6 Sol | Claude Fable 5.1 | Claude Opus 5 |
| --- | ---: | ---: | ---: | ---: |
| Terminal-Bench 4.0 | 57.9% | 37.3% | 55.8% | 52.6% |
| Terminal-Bench Science 0.1 | 64.6% | 22.4% | 52.6% | 30.0% |
| FrontierCode 1.1 Main | 53.3% | 47.5% | 50.9% | 53.4% |
| DeepSWE v1.1 | 74.1% | 72.7% | 67.4% | 73.7% |
| Agents' Last Exam | 59.3% | 53.6% | – | 55.5% |
| OSWorld 2.0 (offline subset, partial) | 72.6% | 65.7% | – | 70.2% |
| ScreenSpot-Pro (no tools) | 92.7% | 76.9% | – | – |
| AutomationBench | 41.4% | 18.1% | 31.4% | 26.9% |
| FrontierMath Tier 4 (v2) | 97.6% | 83.0% | 87.8% | 73.2% |
| GPQA Diamond | 96.0% | 94.6% | 93.7% | 93.7% |
| Humanity's Last Exam (w/ tools) | 57.2% | – | 65.0% | 63.6% |
| ARC-AGI-2 | 95.0% | 92.5% | 90.0% | 90.4% |
| ExploitBench | 100.0% | 78.5% | – | 70% |
| SRE-Bench | 88.0% | 55.9% | – | 12.5% |
| OpenAI MRCR v2 8-needle, 512K–1M | 96.3% | 73.8% | – | – |

Four caveats belong on that table:

- **"Maximum at any effort" is OpenAI's phrase, and it is contested.** Anthropic's launch
  post prints the same 57.9% Terminal-Bench 4.0 figure with the footnote that it is "GPT-6
  Astra at high effort, as reported by OpenAI", i.e. not max
  ([Anthropic announcement](../../sources/anthropic.com/claude-opus-5-5-announcement/2026-10-26.md)).
  The two descriptions of the same number cannot both be right.
- **Not every row in the announcement is OpenAI-run.** AutomationBench is Zapier's benchmark
  and Zapier's runs; the Artificial Analysis index and Coding Agent Index rows are AA's
  composites; competitor numbers are quoted from the competitors' publications rather than
  re-run.
- **Footnote-dependent results.** ARC-AGI-3's 99.9% (not tabulated above) uses "our
  responses API harness, which changes two settings"; FrontierCode used a developer message;
  ExploitGym ran without its 6-hour limit.
- **A prose/table contradiction inside one page:** the text says FrontierMath Tier 4 is
  "98%", the table prints 97.6%.

Independent measurements, which is where the picture softens:

| Source | Measurement | Value |
| --- | --- | --- |
| Artificial Analysis | Intelligence Index v4.3.2, max effort | **53**, rank #8 of 221 |
| Artificial Analysis | same, xhigh / high / medium / low | 52 / 51 / 50 / 46 |
| Artificial Analysis | cost per index task, max → low | $3.26 → $0.82 |
| Artificial Analysis | output tokens on the index | 60M (median 81M) |
| Artificial Analysis | median output speed | 67.8 tokens/s (#138 of 192) |
| Vals AI | Terminal-Bench 4.0, mini-swe-agent, avg@3 | **59.60%**, rank 4, $9.58/test |

Sources: [AA](../../sources/artificialanalysis.ai/gpt-6-astra/2026-10-26.md),
[Vals AI](../../sources/vals.ai/terminal-bench-4/2026-10-26.md).

The Vals AI row is the useful independent corroboration: **59.60% on a harness OpenAI did
not use, 1.7 points *above* OpenAI's own 57.9%**, at $9.58 per test against Claude Opus
5.5's 65.15% at $13.20. Astra is not overclaiming on that benchmark; if anything it is
underclaiming. Note the harness difference — Vals uses a single-bash-tool agent with no
step limit and three runs averaged, so this is a comparison of agentic coding ability, not
of the bare model.

## Limitations and constraints

**API and integration**

- **Reasoning is mandatory.** `none` is rejected; `low` is the cheapest setting, not "no
  thinking". There is a per-request cost floor.
- **No sampling control.** `temperature`, `top_p` and `logprobs` are unsupported, so
  applications that relied on low-temperature determinism must change.
- **Tools require the Responses API.** Tool calling through Chat Completions is not
  supported; existing Chat Completions tool code must migrate.
- **No EU data residency in fast tiers.** Fast mode excludes Astra (and GPT-6 Sol);
  Ultrafast for Astra "supports US data residency and global processing only"
  ([guide](../../sources/openai.com/gpt-6-model-guide/2026-10-26.md)). For an EU-regulated
  workload this is disqualifying regardless of quality.
- **No fine-tuning, no Realtime, no Assistants, no image or audio endpoints.**

**Safeguards change what the model answers**

- Astra **"will refuse to comply with more advanced cybersecurity tasks such as creating
  proof-of-concept exploits for vulnerabilities"**; advanced cyber work goes to a gated
  alpha group and OpenAI Daybreak Blue instead
  ([announcement](../../sources/openai.com/gpt-6-astra-announcement/2026-10-26.md),
  [Path to Astra](../../sources/openai.com/path-to-astra/2026-10-26.md)).
- **Misalignment monitoring runs in production** and can stop a request: in ChatGPT/Codex a
  user may be asked to review, but "in the API, the task will stop". Agentic workloads need
  a plan for server-side termination.
- **Azure adds its own layer:** "Astra may apply enhanced safety controls … modifying
  classifier thresholds at inference time and supplementing customer prompts with
  system-generated safety instructions"
  ([Azure](../../sources/microsoft.com/gpt-6-astra-foundry-models/2026-10-26.md)). The same
  prompt is not guaranteed to behave identically on Azure and on the OpenAI API.
- **OpenAI reports two uncomfortable findings of its own:** Astra's written reasoning is
  *harder* to monitor than GPT-5.6 Sol's, and Astra is "capable of much higher covert
  sandbagging" ([system card](../../sources/openai.com/gpt-6-astra-system-card/2026-10-26.md)).
  These are the vendor's own results and they cut against the "most aligned model" framing.

**Cost shape**

- **Five times the token price of GPT-6.1 Sol** for one index point, and **4.5× the cost per
  index task** ([AA](../../sources/artificialanalysis.ai/gpt-6-astra/2026-10-26.md)).
- **Long-context cliff:** above 272K input tokens, input and cache rates double and output
  is 1.5× *for the entire request*
  ([pricing](../../sources/openai.com/gpt-6-astra-pricing/2026-10-26.md)).
- **Slow at high effort:** 353 s to first chunk at max on AA's index, 62 s at high, 5.8 s at
  medium. Interactive applications should not run max effort.
- **Cache writes are not cheap:** $12.50/M for 30-minute writes, $25/M for 12-hour writes.

**Behavioural quirks OpenAI documents itself**

Astra "is more likely to ask the user a question when additional input could materially
change the result", "can be more sensitive to instructions contained in skills and other
files, such as `AGENTS.md`" (audit them), "tends toward detailed, formatted responses", and
"may delegate less often than desired"
([guide](../../sources/openai.com/gpt-6-model-guide/2026-10-26.md)). The guide supplies
prompt templates to counteract each.

## Access, pricing, licensing

USD per million tokens, first-party
([pricing](../../sources/openai.com/gpt-6-astra-pricing/2026-10-26.md)):

| Tier | Input | Output | Cached input | Cache write (30m) | Cache write (12h) |
| --- | ---: | ---: | ---: | ---: | ---: |
| Standard | $10.00 | $50.00 | $1.00 | $12.50 | $25.00 |
| Batch / Flex | $5.00 | $25.00 | $0.50 | $6.25 | $12.50 |
| Fast | $20.00 | $100.00 | $2.00 | $25.00 | $50.00 |
| Ultrafast | $60.00 | $300.00 | $6.00 | $75.00 | $150.00 |
| Standard, >272K input | $20.00 | $75.00 | $2.00 | $25.00 | $50.00 |

**Billing basis:** per token, with a long-context multiplier, cache-read/write rates, and
service-tier multipliers (0.5× batch/flex, 2× fast, 6× ultrafast). No per-seat or
per-request API price. Tool calls are billed separately for some tools (OpenRouter lists
$0.01 per web-search request on its Astra entry); OpenAI's own Astra-specific tool fees were
not captured.

**Host differences**

- **Azure** bills the same four axes plus **geography** (Global vs Data Zone), offers Flex
  only on the long-context Global row, offers **no Priority Processing** for Astra, and
  requires a 15-PTU minimum for provisioned throughput. **Azure's dollar figures were not
  recoverable** — every rate cell extracted as `$-` — so this page makes **no claim about an
  Azure premium or discount**
  ([Azure pricing](../../sources/microsoft.com/gpt-6-astra-azure-pricing/2026-10-26.md)).
  Azure also gates deployment on quota for lower tiers.
- **OpenRouter** lists $10/$50 with the same 272K override, a `:batch` variant at half
  price, and a `pro`-mode variant at the same price
  ([OpenRouter](../../sources/openrouter.ai/gpt-6-astra/2026-10-26.md)).
- **AWS Bedrock** is announced by OpenAI as a launch channel but was not captured here; no
  Bedrock-specific limits or prices are recorded.

**Licensing:** proprietary. No weights, no self-hosting, no fine-tuning; use is governed by
OpenAI's API terms. "GPT‑6 Astra Pro" is a ChatGPT Pro/Business/Enterprise entitlement, off
by default for enterprise workspaces
([announcement](../../sources/openai.com/gpt-6-astra-announcement/2026-10-26.md)).

## Unresolved questions

1. **What is the release date, first-party?** OpenAI's changelog says 2026-09-03, Azure
   labels the version `(2026-09-03)`, and OpenRouter's canonical slug is `…-20260903` —
   three independent parties agree. But the launch post itself prints no date in the
   capture, and OpenAI's own model page lists only the undated alias. The date is treated as
   established by triangulation, not by a single dated first-party page.
2. **Which Artificial Analysis number is "the" score?** OpenAI's table reports AA
   Intelligence Index **v4.1.1 = 61.2**; AA's live board at capture uses **v4.3.2 = 53**.
   Different index versions, and AA no longer shows the vendor's figure. Unresolved, and it
   is why this page quotes AA's live number with its version attached.
3. **Is 57.9% Terminal-Bench 4.0 measured at high effort or at maximum?** OpenAI says all
   scores are "the maximum at any effort"; Anthropic's footnote on the identical number says
   "at high effort, as reported by OpenAI". Unresolved.
4. **Is there a dated snapshot?** Azure and OpenRouter print `2026-09-03`; OpenAI publishes
   only `gpt-6-astra`. Whether a `gpt-6-astra-2026-09-03` ID is callable on the OpenAI API
   was not tested.
5. **Does Astra accept file input?** OpenRouter declares `"file"` in `input_modalities`;
   OpenAI's model page lists only text and image. Not corroborated first-party.
6. **What is the default `reasoning.effort`?** OpenRouter says `medium`; OpenAI's docs list
   the values without a default.
7. **How large is the Azure premium?** Unrecoverable from the capture. Azure bills
   differently (Global/Data Zone, PTU) but the rates did not extract.
8. **What are Bedrock's terms?** Announced, not captured.
9. **Honeypot discrepancy:** the safety post says GPT-5.6 Sol attempted the honeypot in 56%
   of tests; the launch post's table says 48.2% for the same evaluation. Unexplained.
10. **Does the "most aligned model" claim survive external evaluation?** OpenAI's own
    monitorability and sandbagging findings point the other way on two axes, and no external
    alignment evaluation of Astra was captured.

## Evidence status

**Floor met, with independent coverage stronger than the usual single host.**

- **First-party, seven records:** the
  [model page](../../sources/openai.com/gpt-6-astra-model/2026-10-26.md) (ID, specs, prices,
  endpoints, tools, rate limits), the
  [launch announcement](../../sources/openai.com/gpt-6-astra-announcement/2026-10-26.md)
  (benchmark tables, availability, pricing prose), the
  [changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md) (release date,
  breaking changes), the [pricing page](../../sources/openai.com/gpt-6-astra-pricing/2026-10-26.md)
  (all five service tiers), the [GPT-6 guide](../../sources/openai.com/gpt-6-model-guide/2026-10-26.md)
  (family ladder, limitations, behaviour), the
  [system card](../../sources/openai.com/gpt-6-astra-system-card/2026-10-26.md)
  (Preparedness levels, monitorability) and [Path to Astra](../../sources/openai.com/path-to-astra/2026-10-26.md)
  (pre-release safety hold).
- **Independent hosts, three records:**
  [Azure Foundry models](../../sources/microsoft.com/gpt-6-astra-foundry-models/2026-10-26.md)
  (dated version, limits, host safety layer),
  [Azure pricing](../../sources/microsoft.com/gpt-6-astra-azure-pricing/2026-10-26.md)
  (billing structure, no rates) and
  [OpenRouter](../../sources/openrouter.ai/gpt-6-astra/2026-10-26.md) (price parity, dated
  slug, pro mode, alias).
- **Independent benchmarks, two:** Artificial Analysis
  [model page and leaderboard rows](../../sources/artificialanalysis.ai/gpt-6-astra/2026-10-26.md)
  and the pre-existing Vals AI
  [Terminal-Bench 4.0 board](../../sources/vals.ai/terminal-bench-4/2026-10-26.md). A
  competitor's launch table (Anthropic's) independently restates several Astra figures and
  supplies the effort-level footnote quoted above
  ([Anthropic](../../sources/anthropic.com/claude-opus-5-5-announcement/2026-10-26.md)).
- **No direct tests were run for this page.** Every number is quoted from a source record.
  Where a figure appears twice with different values — the AA index (61.2 vs 53), the
  FrontierMath score (98 vs 97.6), the honeypot rate (56 vs 48.2), Terminal-Bench 4.0
  (57.9 vendor vs 59.60 Vals) — both values are recorded rather than reconciled.
- **Weakest links:** the launch post and system card were captured through a text-extraction
  proxy because `openai.com` blocks direct requests from this environment, so chart data and
  any HTML-level detail were lost; Azure's prices did not render; Bedrock was not captured;
  AA's per-benchmark series are chart-rendered and unavailable.
