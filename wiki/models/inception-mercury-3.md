# Mercury 3 (Inception)

Inception's flagship **diffusion LLM**: text in, text out, a 1M-token context, and a vendor speed
claim of **1,068 tokens per second**, launched **2026-10-19** at **$0.10 / $0.35 per million
input / output tokens** (50% off a $0.20 / $0.70 list price)
([launch post](../../sources/inceptionlabs.ai/mercury-3-launch/2026-10-26/index.md),
[models & pricing](../../sources/inceptionlabs.ai/mercury-models-pricing/2026-10-26.md)). It
replaces Mercury 2.5, which the vendor closed to new users on the same day.

The quality story is contested and should not be taken from the launch post. Inception publishes
**no per-benchmark table** — only a chart of a self-assembled composite — while the one independent
evaluator that has scored it puts it **#25 of 28 on the Vals Index at 43.66%**, with
**Terminal-Bench 4.0 at 3.03%** and **HLAB-Vals-1.1 at 5.00%**
([Vals AI](../../sources/vals.ai/mercury-3/2026-10-26.md)). Artificial Analysis, the index the
roster points at, **has no Mercury 3 entry at all**
([absence check](../../sources/artificialanalysis.ai/mercury-3-absence/2026-10-26.md)); its
Mercury 2.5 measurement is the predecessor's, not this model's.

## Identity

- **Canonical name:** "Mercury 3". API model ID `mercury-3` on `https://api.inceptionlabs.ai/v1`
  ([docs](../../sources/inceptionlabs.ai/mercury-models-pricing/2026-10-26.md)); OpenRouter ID
  `inception/mercury-3` with `canonical_slug` `inception/mercury-3-20261019`
  ([OpenRouter](../../sources/openrouter.ai/mercury-3/2026-10-26.md)); Vercel AI Gateway ID
  `inception/mercury-3` ([Vercel](../../sources/vercel.com/ai-gateway-mercury-3/2026-10-26/index.md)).
- **Vendor:** Inception (the site brands itself "Inception"; the roster and AA say "Inception
  Labs"). **Status:** current flagship. No preview, beta or deprecation label in any captured
  source.
- **Released:** **2026-10-19.** Four confirmations: the launch post's byline ("Product · Oct 19,
  2026"), Vals AI's "Release Date: Oct 19, 2026", Vercel's `released` field (1792368000 =
  2026-10-19), and OpenRouter's `canonical_slug`. **One contradiction:** OpenRouter's page prints
  "Released **Oct 16, 2026**" and its `created` field is 1792158337 = 2026-10-16T13:45:37Z. That
  looks like a listing timestamp; the vendor date is used here.
- **Aliases:** "M3" in Inception's own quality-vs-size chart; "Inception: Mercury 3" on OpenRouter.
  The roster label "Inception Mercury 3" is the vendor-qualified product name, not a separate ID.
- **Weights:** **not public.** OpenRouter's `hugging_face_id` is `null`; Vals AI lists "Weights:
  Private"; Artificial Analysis classifies Mercury 2.5 as "Proprietary". No Hugging Face repository
  exists for any Mercury 3 checkpoint.
- **Siblings:** `mercury-voice` (voice-agent variant, 128K context, $0.40/$1.50), `mercury-decide`
  (classification/scoring, $0.04 input only), `mercury-2.5`, `mercury-2`, `mercury-edit-2`
  (FIM/next-edit) ([models table](../../sources/inceptionlabs.ai/mercury-models-pricing/2026-10-26.md)).
- **Hosts:** Inception's own API, OpenRouter, Baseten, Vercel — the four the launch post names
  ([launch post](../../sources/inceptionlabs.ai/mercury-3-launch/2026-10-26/index.md),
  [Baseten](../../sources/baseten.co/mercury-3/2026-10-26.md)). On OpenRouter it is a
  **single-provider** model: "This model is hosted by one provider. OpenRouter forwards every
  request to it directly — no routing decisions to make"
  ([OpenRouter](../../sources/openrouter.ai/mercury-3/2026-10-26.md)).
- **Roster label mapping:** row 130 pairs "Inception Mercury 3" with host "OpenRouter
  `inception/mercury-3`" and "AA (`Mercury 2.5`)". The OpenRouter half resolves exactly. The AA
  half does **not** identify Mercury 3: AA has no Mercury 3 page (404) and its Inception creator
  page lists only Mercury 2.5 and Mercury 2
  ([absence check](../../sources/artificialanalysis.ai/mercury-3-absence/2026-10-26.md)). The
  parenthetical is a coverage note — AA's nearest entry is the predecessor.

### Mercury 3 vs Mercury 2.5

Mercury 3 is a **successor**, not a relabel, and the two differ where a reader must choose:

| | Mercury 2.5 | Mercury 3 |
| --- | --- | --- |
| Released | 2026-09-08 ([AA](../../sources/artificialanalysis.ai/mercury-2-5/2026-10-26.md)) | 2026-10-19 |
| Context | 260K ([docs](../../sources/inceptionlabs.ai/mercury-models-pricing/2026-10-26.md)) | 1M |
| Max output | 65,536 | 131,072 |
| Effort levels | `instant` / `low` / `medium` / `high`, default `medium` ([docs](../../sources/inceptionlabs.ai/mercury-reasoning-efforts/2026-10-26.md)) | same four, default **`low`** |
| Vendor speed claim | 1,107 t/s ([2.5 launch](../../sources/inceptionlabs.ai/mercury-2-5-launch/2026-10-26.md)) | 1,068 t/s ([3 launch](../../sources/inceptionlabs.ai/mercury-3-launch/2026-10-26/index.md)) |
| List price in / out / cache | $0.20 / $0.75 / $0.02 | $0.20 / $0.70 / $0.02 |
| Launch price in / out | $0.04 / $0.15 (80% off) | $0.10 / $0.35 (50% off) |
| Availability | **closed to new users from 2026-10-19; existing access ends 2026-11-15** | current |

Sources: [models table](../../sources/inceptionlabs.ai/mercury-models-pricing/2026-10-26.md),
[family page](../../sources/inceptionlabs.ai/mercury-model-family-page/2026-10-26.md),
[2.5 launch](../../sources/inceptionlabs.ai/mercury-2-5-launch/2026-10-26.md).

Three points that matter more than the table:

1. **Mercury 3 is not faster than its predecessor.** 1,068 t/s against 1,107 t/s. Inception's own
   framing is "just as fast" despite being ">40x larger than Mercury 1" — no regression, not a
   speed gain.
2. **Mercury 2.5 is being switched off.** "Mercury 2 and Mercury 2.5 are no longer available to
   new users. Existing customers with usage before October 19, 2026 will keep access until November
   15, 2026"
   ([family page](../../sources/inceptionlabs.ai/mercury-model-family-page/2026-10-26.md)). The
   docs table still lists both with prices and no retirement notice, so the two first-party pages
   disagree about availability.
3. **Mercury 2.5's measurements do not transfer.** AA measured 2.5 at Intelligence Index 12, 714
   t/s, 3.4 s median TTFT ([AA](../../sources/artificialanalysis.ai/mercury-2-5/2026-10-26.md)).
   Nothing independent has measured 3.

## Current assessment

**Current, single-vendor-hosted, and much less independently verified than its launch framing
suggests.** What the evidence supports:

- **The speed claim is plausible but unmeasured by anyone else.** 1,068 t/s is Inception's own
  figure on unnamed "NVIDIA GPUs", restated by Baseten and the marketing site. OpenRouter's
  throughput and TTFT fields are `null` for this model
  ([OpenRouter](../../sources/openrouter.ai/mercury-3/2026-10-26.md)), and AA has not benchmarked
  it. For the predecessor, AA's measurement came in **36% below** the vendor's claim (714 vs
  1,107 t/s), which is the right prior for Mercury 3's number.
- **Quality is below the frontier and below mid-tier competitors on the one independent index
  available.** Vals Index **43.66%**, rank **#25 of 28**, roughly 27 points behind Claude Sonnet
  5.5 (70.85%) and 9.5 points behind MiniMax-M3.1-Flash (53.21%)
  ([Vals AI](../../sources/vals.ai/mercury-3/2026-10-26.md)). Design Arena Elos cluster at
  1,178–1,233 across code, dataviz, gamedev, SVG, UI and website categories — mid-table, not
  frontier ([OpenRouter restatement](../../sources/openrouter.ai/mercury-3/2026-10-26.md)).
- **The agentic-terminal result is near-floor and reproducible.** Vals measures Terminal-Bench 4.0
  at **3.03%** with a zero-width confidence interval (rank 49/56), and HLAB-Vals-1.1 at **5.00%**.
  Mercury 2.5 scored **0** on AA's Terminal-Bench 4.0. Two models, two evaluators, the same
  direction.
- **Latency in the vendor's sense is throughput, not responsiveness.** Vals reports **22 min 6 s**
  per Vals Index test at `reasoning_effort: high` with a 131,072-token ceiling. AA's predecessor
  measurement shows median TTFT of **3.4 s** even at 714 t/s. Mercury 3 has no published TTFT
  figure at all — the "<170ms TTFT" claim on the family page belongs to **Mercury Voice**, a
  different model.

**Is it a distinct model or a repackaging?** Distinct. New context and output ceilings, a new
default effort level, a different output price, and a vendor statement that it is ">40x larger than
Mercury 1" with "intelligence […] risen 3x from Mercury 1 (mini)". It supersedes 2.5 rather than
sitting beside it.

**What it is for, per the vendor:** browser-use agents, interactive education, real-time search
agents, customer support — workloads where "latency compounds"
([launch post](../../sources/inceptionlabs.ai/mercury-3-launch/2026-10-26/index.md)). The
independent latency figure above is the main reason to test that framing before adopting it.

**Out-of-window check:** released 2026-10-19, inside the 2025-10-26 → 2026-10-26 window. No
specialist exception needed.

## Documented capabilities

From the [models table](../../sources/inceptionlabs.ai/mercury-models-pricing/2026-10-26.md),
[reasoning efforts](../../sources/inceptionlabs.ai/mercury-reasoning-efforts/2026-10-26.md),
[streaming & diffusion](../../sources/inceptionlabs.ai/mercury-streaming-diffusion/2026-10-26.md),
[tool use](../../sources/inceptionlabs.ai/mercury-tool-use/2026-10-26.md) and
[FAQ](../../sources/inceptionlabs.ai/mercury-api-faq/2026-10-26.md):

| Property | Value |
| --- | --- |
| Architecture | Diffusion LLM (dLLM) — produces and refines tokens in parallel rather than one at a time |
| Scale | ">40x larger than Mercury 1"; **no parameter count published** |
| Context | 1M tokens (vendor "1M"; OpenRouter and Vercel both `1000000`) |
| Max output | 131,072 tokens |
| Input / output | Text only in, text only out |
| Reasoning | `reasoning_effort` = `instant` / `low` / `medium` / `high`; **default `low`** |
| Tool use | OpenAI-compatible function calling, **including parallel tool calls** |
| Structured output | `response_format` JSON schema |
| Sampling | `temperature` clamped to 0.5–1.0; **no `seed` parameter** |
| Caching | Automatic prefix cache; hits billed at the cache-read rate; no TTL or invalidation API |
| Streaming | Block-by-block (refined chunks, not single tokens); optional `diffusing: true` streams the full text at each denoising step |
| Endpoints | `v1/chat/completions` only (FIM and edit endpoints belong to `mercury-edit-2`) |
| Rate limits | 1,000 / 3,000 requests per minute; 1M / 3M input tokens per minute; 100k / 300k output tokens per minute (Free / Pay As You Go) |

**The diffusion behaviour is the one capability a reader cannot get from an autoregressive model.**
The docs describe streaming as "a chunk of refined text the model emits as it decodes, rather than
one token at a time", and in `diffusing` mode "each chunk contains the full text as it is refined
into the final answer" — so the correct client pattern is overwrite, not append
([streaming](../../sources/inceptionlabs.ai/mercury-streaming-diffusion/2026-10-26.md)).

**Marketing claims, labelled as such** (Inception's own, unquantified):
"the most capable diffusion-based LLM released to date"; "on par or better than frontier
speed-optimized models like GPT-6 Luna and Claude Haiku 5.5, while running 4–8x faster at 1,000+
tokens per second"; "frontier LLM quality at 5x greater speed"; "our most intelligent reasoning
dLLM, at our lowest price"
([launch post](../../sources/inceptionlabs.ai/mercury-3-launch/2026-10-26/index.md),
[family page](../../sources/inceptionlabs.ai/mercury-model-family-page/2026-10-26.md)). No
comparator scores, no harness, and no per-benchmark numbers accompany any of them.

### Benchmarks

**Vendor: no table exists.** The launch post's only quantitative quality evidence is a two-axis
chart, "Model Quality vs. Model Size", whose y-axis footnote defines the composite as "Average of
GDPval (Elo), SciCode, τ³-Banking, AA-Omniscience-Public (Accuracy), IFBench, SO Quality, AA-LCR
v1.1, GPQA Diamond, Terminal-Bench v2.1, BrowseComp+, and DeepSeekQA (DSQA) @ 30"
([launch post](../../sources/inceptionlabs.ai/mercury-3-launch/2026-10-26/index.md), artifact
`quality-vs-size.png`). Reading point positions off that image puts M3 near 50, M2.5 near 36 and M2
near 31 on that composite — **approximate chart readings, not published numbers**, and the
composite is the vendor's own mixture, incomparable to any external index.

The only other number in the launch post is a customer's, not the vendor's: TinyFish reports
Mercury 3 "completed 50%" of 50 live Mind2Web navigation tasks, "significantly more than
GPT-6.1-Sol".

**Independently measured (Vals AI, 2026-10-26):**

| Benchmark | Mercury 3 | Rank |
| --- | --- | --- |
| Vals Index | **43.66%** ± 1.23 | 25 / 28 |
| Vals Legal Index | 62.96% | 24 / 29 |
| Vibe Code Bench v1.1 | 60.93% | 56 / 120 |
| EMB v1.1 | 57.88% | 32 / 34 |
| Finance Agent v2.1 | 54.71% | 28 / 32 |
| Vals Finance Index | 47.22% | 29 / 32 |
| Code Migration v1.1 | 39.26% | 21 / 28 |
| Legal Research Bench | 28.85% | 54 / 86 |
| Tax Agent Bench | 18.17% | 52 / 77 |
| HLAB-Vals-1.1 | 5.00% | 23 / 29 |
| Terminal-Bench 4.0 | **3.03%** ± 0.00 | 49 / 56 |

Configuration disclosed: default provider Inception, default temperature/top-p/top-k, max output
131,072, **reasoning effort `high`**; cost per Vals Index test $0.478; latency 22 min 6 s; refusal
rate 0.14%; fallback rate 0.00%
([Vals AI](../../sources/vals.ai/mercury-3/2026-10-26.md)).

**Design Arena, via OpenRouter's restatement** (no first-party Design Arena page captured): code
categories Elo 1230, dataviz 1210, gamedev 1220, SVG 1178, UI component 1233, website 1231
([OpenRouter](../../sources/openrouter.ai/mercury-3/2026-10-26.md)).

**The contradiction to preserve:** Inception claims "on par or better" than GPT-6 Luna and Claude
Haiku 5.5; Vals places Mercury 3 below MiniMax-M3.1-Flash and far below Claude Sonnet 5.5. The two
can coexist only if the vendor's comparators are measured on a different workload — which the
vendor does not publish. Until a second independent evaluator scores it, the Vals row is the
stronger evidence, and it is a single evaluator's harness.

## Limitations and constraints

**Capability boundaries**

- **Text only.** "Mercury 3, Mercury 2.5, Mercury 2, and Mercury Edit 2 accept text input only, and
  image generation is not supported" — no images, no files, no vision, no audio
  ([FAQ](../../sources/inceptionlabs.ai/mercury-api-faq/2026-10-26.md)). Vals independently lists
  image, video and file input as unsupported.
- **Chat completions only.** No FIM, no code-edit endpoint (those are `mercury-edit-2`), no
  embeddings, no fine-tuning through the API
  ([FAQ](../../sources/inceptionlabs.ai/mercury-api-faq/2026-10-26.md)).
- **No MCP server.** Tool calling is OpenAI-compatible, so MCP clients work only via an
  OpenAI-compatible bridge pointed at `https://api.inceptionlabs.ai/v1`.
- **Near-floor agentic-terminal performance** (3.03% Terminal-Bench 4.0 at Vals) — this is not a
  model to put behind a shell.

**Determinism and control**

- **No `seed`.** "Bit-exact reproducibility across runs is not supported today."
- **`temperature` is clamped to 0.5–1.0**; out-of-range values are "silently reset to the model's
  default … and the response includes a `warning` field".
- **Caching is opaque**: automatic, no TTL, no way to pin, invalidate or inspect entries.

**Operational**

- **A 1M-token context is bounded by the rate limit, not the model.** 1M input tokens/minute on the
  free tier and 3M on pay-as-you-go means one max-context request spends a third of a paid minute's
  budget ([rate limits](../../sources/inceptionlabs.ai/mercury-rate-limits/2026-10-26.md)).
- **Not available through EU in-region routing on OpenRouter**
  ([OpenRouter](../../sources/openrouter.ai/mercury-3/2026-10-26.md)) — a blocker for EU-resident
  workloads.
- **Single provider everywhere.** Inception is the only host behind the OpenRouter slug, Vercel
  routes to Inception, and Baseten's listing restates vendor copy. There is no second serving
  stack to fail over to, and no third-party speed or uptime measurement.
- **`diffusing: true` is a non-OpenAI parameter** that generic clients and routers will drop; the
  overwrite-not-append contract is undocumented outside the streaming page.

**Documentation defects**

- The docs table lists Mercury 2 and 2.5 with prices and no retirement notice, while the marketing
  site says both are closed to new users from 2026-10-19 with access ending 2026-11-15
  ([docs](../../sources/inceptionlabs.ai/mercury-models-pricing/2026-10-26.md),
  [family page](../../sources/inceptionlabs.ai/mercury-model-family-page/2026-10-26.md)).
- The FAQ's MCP answer tells Mercury 3 users to "set the model to `mercury-2.5`".
- No knowledge cutoff, parameter count, training-data description, safety evaluation, or licence
  text for the model is published anywhere captured.

## Access, pricing, licensing

USD per million tokens ([models table](../../sources/inceptionlabs.ai/mercury-models-pricing/2026-10-26.md),
[family page](../../sources/inceptionlabs.ai/mercury-model-family-page/2026-10-26.md)):

| Item | Launch (50% off) | List |
| --- | --- | --- |
| Input | **$0.10** | $0.20 |
| Cached input | **$0.01** | $0.02 |
| Output | **$0.35** | $0.70 |

**Billing basis:** per token at a single flat rate — the vendor lists no input-length tiers, so a
long-context call is not surcharged the way some competitors price it. Cache hits are billed at
10% of the input rate. Reasoning tokens are
billed at the output rate ("completion tokens, including reasoning tokens, use the output rate"),
so a `high`-effort call is priced by what it thinks as well as what it says
([FAQ](../../sources/inceptionlabs.ai/mercury-api-faq/2026-10-26.md)). Every new account gets a
one-time **100 million free tokens**, shared across all models.

**The real cost unit is higher than the token price suggests.** Vals reports **$0.478 per Vals
Index test** with a **22 min 6 s** latency at effort `high` — 4.8× the predecessor's AA cost per
index task ($0.10) on a differently-built index
([Vals AI](../../sources/vals.ai/mercury-3/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/mercury-2-5/2026-10-26.md)). The two indices are not
comparable, but both say the same thing: token price understates per-task cost for a model that
spends output tokens on reasoning.

**Host differences:** the launch price is the same on Inception's API, OpenRouter and Vercel
(OpenRouter's endpoint object carries `"discount": 0.5`). Baseten's library page shows no price.
Because Inception is the only serving provider, there is no host price spread to arbitrage —
the opposite of a multi-provider model.

**Licence:** proprietary, no published terms beyond the site's Terms of Use and Privacy Policy; no
weights, no model licence text, no open-weights path. Vals AI: "Weights: Private"; OpenRouter
`hugging_face_id: null`. Data retention is by reference to the Privacy Policy, with
"zero-retention configurations for regulated workloads … handled case by case"
([FAQ](../../sources/inceptionlabs.ai/mercury-api-faq/2026-10-26.md)).

## Unresolved questions

1. **How fast is it, really?** The only speed figures are Inception's (1,068 t/s) and its hosts'
   restatements. No independent throughput measurement exists, and AA has not indexed the model.
   Given AA measured the predecessor 36% below the vendor claim, this is the largest open number.
2. **What is the actual TTFT?** No first-party or independent time-to-first-token figure exists for
   Mercury 3. The "<170ms" figure is Mercury Voice's. Vals' 22-minute per-test latency is a
   different measurement (full task, effort `high`) and does not answer the question.
3. **Why is Vals' Terminal-Bench 4.0 result 3.03%?** With a zero-width interval, every run failed
   identically, which suggests a harness or interface failure rather than a capability floor — but
   Mercury 2.5 also scored 0 at AA, so a real weakness cannot be excluded. No captured source
   explains it.
4. **Does the "on par with GPT-6 Luna and Claude Haiku 5.5" claim survive an external harness?** The
   vendor publishes no comparator scores; Vals' index places Mercury 3 below mid-tier competitors.
5. **What happens on 2026-11-15?** Mercury 2 and 2.5 access ends for pre-2026-10-19 customers, but
   the docs still list both with prices. Whether the endpoints 404, keep serving, or are
   re-priced is unstated.
6. **When does the 50% launch discount end?** No source gives an end date; the list price of
   $0.20/$0.70 is the only documented alternative.
7. **How large is the model?** ">40x larger than Mercury 1" is a ratio against an undisclosed
   baseline. No parameter count, active-parameter count, or architecture paper exists for
   Mercury 3: Inception's research index has no entry after the June 2025 Mercury paper
   ([research listing](../../sources/inceptionlabs.ai/research-papers/2026-10-26.md)).
8. **Is 1M the usable context?** The vendor says "1M", OpenRouter and Vercel say `1000000`, and no
   source states the effective window after output reservation, or how quality degrades across it.
   Vals' long-context behaviour at 1M is untested here.
9. **Why does OpenRouter list reasoning efforts as `none`/`low`/`medium`/`high` with a `medium`
   default,** when the vendor documents `instant`/`low`/`medium`/`high` with a `low` default? One of
   the two is wrong; the vendor's docs are used here.
10. **Was Mercury 3 released on 2026-10-16 or 2026-10-19?** OpenRouter's `created` timestamp and
    page label say the 16th; the vendor's post, Vals and Vercel say the 19th.

## Evidence status

**Floor met.** Nine first-party records and four independent records, plus one negative check.

- **First-party:** the [launch post](../../sources/inceptionlabs.ai/mercury-3-launch/2026-10-26/index.md)
  (date, price, speed and quality claims, hosting, chart artifact); [models &
  pricing](../../sources/inceptionlabs.ai/mercury-models-pricing/2026-10-26.md) (IDs, context,
  output cap, all prices, sibling table); [reasoning
  efforts](../../sources/inceptionlabs.ai/mercury-reasoning-efforts/2026-10-26.md) (levels and
  default); [streaming & diffusion](../../sources/inceptionlabs.ai/mercury-streaming-diffusion/2026-10-26.md)
  (block streaming, `diffusing`); [tool use](../../sources/inceptionlabs.ai/mercury-tool-use/2026-10-26.md)
  (parallel tool calls); [API FAQ](../../sources/inceptionlabs.ai/mercury-api-faq/2026-10-26.md)
  (text-only, no seed, temperature clamp, caching, retention); [family
  page](../../sources/inceptionlabs.ai/mercury-model-family-page/2026-10-26.md) (positioning, the
  Mercury 2/2.5 sunset); [rate limits](../../sources/inceptionlabs.ai/mercury-rate-limits/2026-10-26.md);
  [research listing](../../sources/inceptionlabs.ai/research-papers/2026-10-26.md) (no Mercury 3
  paper).
- **Independent host records:** [OpenRouter](../../sources/openrouter.ai/mercury-3/2026-10-26.md)
  (catalogue metadata, single-provider routing, parameter list, restated Design Arena and Vals
  scores), [Vercel AI Gateway](../../sources/vercel.com/ai-gateway-mercury-3/2026-10-26/index.md)
  (release date, effort vocabulary, price), [Baseten](../../sources/baseten.co/mercury-3/2026-10-26.md)
  (listing and the 1M-vs-260K comparison).
- **Independent measurement:** [Vals AI](../../sources/vals.ai/mercury-3/2026-10-26.md) — the only
  captured third-party evaluation of Mercury 3 itself (Vals Index 43.66%, eleven benchmarks, cost
  and latency).
- **Predecessor evidence, captured for the comparison only:** the [Mercury 2.5 launch
  post](../../sources/inceptionlabs.ai/mercury-2-5-launch/2026-10-26.md) and [AA's Mercury 2.5
  measurement](../../sources/artificialanalysis.ai/mercury-2-5/2026-10-26.md). Neither is evidence
  about Mercury 3.
- **Negative check:** [AA has no Mercury 3 entry](../../sources/artificialanalysis.ai/mercury-3-absence/2026-10-26.md)
  (404 on the model page; creator page lists only Mercury 2.5 and Mercury 2).
- **No direct tests were run for this page.** No request was sent to any endpoint, no benchmark was
  re-run, and no weights exist to download. Every number is quoted from a source record. Where
  sources disagree — release date (2026-10-16 vs 2026-10-19), effort vocabulary (`instant` vs
  `none`) and default (`low` vs `medium`), Mercury 2.5 availability (docs table vs family page
  footnote), Mercury 2.5 price ($0.20 vs $0.25 vs $0.04), quality (vendor "on par with frontier" vs
  Vals #25 of 28) — all values are recorded rather than reconciled.
- **Weakest links:** the vendor's benchmark chart is an image and was read approximately, not
  transcribed from published numbers; Design Arena Elos are known only as OpenRouter restatements;
  and there is exactly **one** independent quality evaluator for Mercury 3, so every quality
  statement on this page rests on a single harness. A second independent score would materially
  change the assessment.
