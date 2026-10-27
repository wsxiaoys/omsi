# Mistral Large 4

Mistral AI's current flagship, released **2026-10-06** as a **public preview**: a granular
Mixture-of-Experts model with **1.05T total and 52B active parameters**, text and image input, a
**1M-token** context window, and list pricing of **$1.36 / $4.18 per million input / output
tokens**
([launch post](../../sources/mistral.ai/mistral-large-4-launch/2026-10-26.md),
[model card](../../sources/mistral.ai/mistral-large-4-model-card/2026-10-26.md),
[pricing](../../sources/mistral.ai/mistral-large-4-pricing/2026-10-26.md)).

It is the largest model Mistral has shipped and its first at the trillion-parameter scale, but at
capture it is **unfinished in two specific senses**, and both matter more than the benchmark
spread. First, it is a preview: Mistral's own lifecycle policy says preview models take silent
updates and "may be retired before reaching" general availability, on one month's notice
([lifecycle policy](../../sources/mistral.ai/model-lifecycle-policy/2026-10-26.md)). Second, the
"open-weight" claim is a **promise with a date, not a property**: the weights, the licence and the
architecture write-up were all unpublished, with the vendor saying "end of this month" and
Hugging Face dating the ETA **2026-10-31**
([weights registry](../../sources/huggingface.co/mistral-large-4-weights/2026-10-26.md)).

The page's central tension is between the vendor's framing and the one independent composite
measurement. Mistral says ML4 "already achieves performance competitive with the strongest
open-source models globally"; Artificial Analysis's Intelligence Index scores it **38, #70 of 221**
— below Kimi K3.1 Pro's 55, and with weak legal-agentic and document-reasoning rows
([AA](../../sources/artificialanalysis.ai/mistral-large-4/2026-10-26/index.md)). Both can be true
because the vendor is claiming verticals (cyber, finance, law, visual grounding) while AA measures
a general composite; but a reader should not carry "frontier" over to general capability.

## Identity

- **Canonical name:** Mistral Large 4. **API names:** `mistral-large-4` and `mistral-large-4-0`,
  both listed on the model card; the version label is `v26.10`
  ([model card](../../sources/mistral.ai/mistral-large-4-model-card/2026-10-26.md)).
- **Vendor:** Mistral AI (France). **Status:** Public Preview; no GA date and no retirement date
  announced. Sold pay-as-you-go on the Mistral API and in Mistral Studio.
- **Released:** **2026-10-06**, stated on the model card and the launch post; OpenRouter's
  `created` timestamp is 2026-10-06T13:42:02Z and Artificial Analysis records
  `releaseDate: 2026-10-06`. All four agree. This is **inside** the one-year window.
- **Aliases and labels:** "ML4" and "le Chonk" (vendor's own joke: "Unofficially ML4, very
  officially: le Chonk"); "Mistral Large 4 Preview" on Artificial Analysis; "Mistral: Mistral
  Large 4" on OpenRouter (`mistralai/mistral-large-4-0`, canonical slug
  `mistralai/mistral-large-4-0-20261006`).
- **Planned weights repository:** `mistralai/Mistral-Large-4-1T-A52B`
  ([weights registry](../../sources/huggingface.co/mistral-large-4-weights/2026-10-26.md)).
- **Host endpoints:** Mistral's own API — global `api.mistral.ai`, plus regional
  `api.eu.mistral.ai` and `api.us.mistral.ai` at a 1.1× upcharge
  ([regional inference](../../sources/mistral.ai/regional-inference/2026-10-26.md)). OpenRouter
  exposes three routes, **all served by Mistral**
  ([OpenRouter](../../sources/openrouter.ai/mistral-large-4/2026-10-26/index.md)). Azure sells
  Mistral Large 3 but **not** Large 4
  ([Azure catalogue](../../sources/microsoft.com/azure-foundry-mistral-models/2026-10-26.md)).
- **Siblings:** Mistral Large 3 (`mistral-large-2512`, 675B total / 41B active, 256k context,
  Apache 2.0, GA since 2025-12-02, $0.50 / $1.50); Mistral Medium 3.5 ($1.50 / $7.50); Mistral
  Small 4 ($0.15 / $0.60). Large 4 costs 2.7× Large 3 on input and 2.8× on output, while
  sitting slightly *below* Mistral Medium 3.5 on both.

### Distinguishing Large 4 from Large 3

These are different models, not a re-release, on every axis the wiki uses:

| | Mistral Large 4 | Mistral Large 3 |
| --- | --- | --- |
| Release | 2026-10-06, Public Preview | 2025-12-02, GA |
| API IDs | `mistral-large-4`, `mistral-large-4-0` | `mistral-large-2512` |
| Parameters | 1.05T total / 52B active | 675B total / 41B active |
| Context | 1M | 256k |
| Price (in/out per M) | $1.36 / $4.18 | $0.50 / $1.50 |
| Licence | "Coming soon" (none named) | Apache 2.0 |
| Weights | pending, ETA 2026-10-31 | published |

Sources: [Large 4 card](../../sources/mistral.ai/mistral-large-4-model-card/2026-10-26.md),
[Large 3 card](../../sources/mistral.ai/mistral-large-3-model-card/2026-10-26.md),
[pricing](../../sources/mistral.ai/mistral-large-4-pricing/2026-10-26.md). Large 3 is still sold
at roughly a third of Large 4's price, so the two are a live choice rather than a migration pair.

## Current assessment

**Current flagship, preview stage, single-sourced, weights pending.**

What the evidence supports:

- **A genuine capability step at the top of Mistral's line, with a price to match.** 1.05T total
  parameters against Large 3's 675B, and 2.7–2.8× the per-token price.
- **The vendor and AA agree on individual rows and disagree on what they add up to.** On the
  same evaluation, Terminal-Bench 4.0 is 28.3% (vendor) against 26.8% (AA), and AutomationBench is
  59.9% on both — because the vendor is quoting AA's number. AA-Briefcase is 1,393 Elo (vendor)
  against 1,390.8 (AA, 95% CI 1,380–1,402). The divergence is in the aggregate: AA's index of 38
  puts ML4 **below** Kimi K3.1 Pro (55), GPT-6 Astra (53) and Gemini 4 Argon (53)
  ([AA](../../sources/artificialanalysis.ai/mistral-large-4/2026-10-26/index.md)).
- **Fast and verbose.** 116.1 output tokens/s (#56 of 192) and 200M output tokens on the index
  against an 81M median (#115 of 122). $1.61 per index task, driven more by cache writes ($0.77)
  than by output ($0.29).
- **The multimodal claim is narrow.** Text and image in, text out. There is no audio or video
  input on any captured surface, and no image output.

What the evidence undercuts:

- **"Frontier" in general terms.** The vendor's "competitive with the strongest open-source models
  globally" is a claim about verticals; on AA's composite ML4 sits in the upper-middle of the field.
  The vendor's own quoted rows are consistent with that reading — Terminal-Bench 4.0 at 28.3% is
  far below the 63–67% band reported for Kimi K3.1 Pro and Claude Opus 5.5 on the same benchmark.
- **"Open-weight" as a present property.** No repository content, no licence, no architecture
  detail. The Hugging Face page is a countdown, and the HF API returns 401.

What remains genuinely open: whether the weights arrive on 2026-10-31, under what licence, and
whether the preview checkpoint that AA measured is the one that ships. Mistral says the RL run
behind the preview "is still in flight", so the preview is explicitly a moving target.

## Documented capabilities

From the [model card](../../sources/mistral.ai/mistral-large-4-model-card/2026-10-26.md),
[launch post](../../sources/mistral.ai/mistral-large-4-launch/2026-10-26.md) and
[OpenRouter metadata](../../sources/openrouter.ai/mistral-large-4/2026-10-26/index.md).

| Property | Value |
| --- | --- |
| Architecture | "granular Mixture-of-Experts"; 1.05T total, 52B active (49B per token excluding embeddings and output layers), 1.6B vision encoder |
| Context window | Vendor "1M"; OpenRouter 1,048,576 on global endpoints, **524,288 on the EU endpoint**; AA records 524,288 |
| Max output | Not stated by the vendor; OpenRouter reports `max_completion_tokens` 262,144 |
| Input | Text, images |
| Output | Text, plus a separate reasoning stream |
| Reasoning | `reasoning_effort` supported; vendor example uses `"high"`; OpenRouter enumerates `high` and `none`, default `high`, not mandatory |
| Tool use | Function calling, `tool_choice` (`none`/`auto`/`required`/`function`), structured outputs, document QnA, prefix completion |
| Endpoints | `/v1/chat/completions`, `/v1/conversations`, `/v1/agents`, `/v1/batch` |
| Languages | "more than 160 languages, including every official language of the European Union" (vendor claim) |
| Training infrastructure | "trained from scratch on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's own datacenters in Europe" |
| Knowledge cutoff | Not published |

**Marketing claims, labelled as claims:** "state-of-the-art among open models" for cybersecurity,
finance and law; "surpassing even frontier closed models" in visual grounding; "significantly
outperforming any open-weight model developed in the US or Europe"; "one of the world's strongest
AI models for cybersecurity". The launch post's own framing of the preview as non-final ("it
continues to improve rapidly as we refine it") sits awkwardly beside the SOTA claims.

### Benchmarks, vendor-reported

Figures printed in the launch post's prose (its charts were images and could not be read):

| Evaluation | Mistral Large 4 | Comparator on the same row |
| --- | --- | --- |
| DeepSWE v1.1 | 61.7% | — |
| SWE-Atlas-QnA | 59.4% | — |
| Terminal-Bench 4.0 | 28.3% | — |
| Coding Agent Index (composite) | 49.8% | "ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max" |
| AutomationBench (657 workflows) | 59.9% | "ahead of Kimi K3, MiMo-V2.6-Pro, and DeepSeek V4 Pro" |
| AA-Briefcase | 1,393 Elo | "ahead of DeepSeek V4 Pro" |
| Dense 200 (visual grounding) | 42% | GPT-6 Astra 41% |
| Cybench | 93% | — |
| CyberGym-E2E | 82% ("highest of any model") | Claude Opus 5.5 and GPT-6 Astra "score near zero … because they refuse" |
| SciCode-Verified | "state of the art among open-weight models" (no number in prose) | — |
| Lakera B3 attack resistance | 93.3% | "no higher scores among competitors" |
| KORA | 1.691 (max 2) | highest of Mistral's OSS comparators |
| Surge AI blind human coding eval (1–5) | 3.74, second of five | Claude Opus 5 4.22; GLM-5.3 3.60; Kimi K3 3.59; GLM-5.2 3.40 |

### Benchmarks, independently measured

Artificial Analysis, Intelligence Index v4.3.2
([AA](../../sources/artificialanalysis.ai/mistral-large-4/2026-10-26/index.md)):

| Measurement | Value |
| --- | --- |
| Intelligence Index | **38.4**, #70 of 221 (median 28) |
| AA-Briefcase v1.1 | 1,390.8 Elo (CI 1,380–1,402) |
| GDPval-AA v2.1 | 1,433.85 Elo (CI 1,410–1,457) |
| AutomationBench-AA | 59.9% |
| Terminal-Bench 4.0 | 26.8% |
| Terminal-Bench-Science 0.1 | 4.8% |
| FrontierCode 1.1 | 41.5% |
| SciCode | 54.2% |
| Humanity's Last Exam | 35.0% |
| CritPt | 10.6% |
| AA-LCR v1.1 (long context) | 81.3% |
| GDP.pdf (all-pass) | 18.6% |
| Harvey LAB-AA v1.1 | 3.1% |
| AA-Omniscience accuracy / hallucination | 25.8% / 41.9% |
| MMMU-Pro | 76.4% |
| Capability indexes | Finance 38.3, Strategy 42.2, Legal 37.0, Healthcare 34.9, Engineering 37.6, Economics 43.6 |
| Speed / cost / verbosity | 116.1 tok/s (#56/192) / $1.61 per index task / 200M index tokens |

Three caveats. The vendor's vertical claims are largely **not** independently re-measured here:
AA has no Cyber Index at any URL tried, so "top five globally" on it is unverified. Several vendor
rows are drawn from AA's own harness (AutomationBench 59.9% is exactly AA's 59.90%, and the
Briefcase Elo is AA's 1,390.8 rounded up), which makes those rows agreement with AA rather than
independent confirmation of Mistral. And AA measured one configuration at default effort; the
vendor's own benchmark settings are not stated anywhere captured.

## Limitations and constraints

**Lifecycle and stability**

- Public Preview: silent updates are permitted, and there is "no guaranteed path to General
  Availability"; deprecation notice is one month
  ([lifecycle policy](../../sources/mistral.ai/model-lifecycle-policy/2026-10-26.md)). Any
  benchmark number on this page describes a checkpoint that Mistral may change without notice.
- The vendor states the RL run behind the preview "is still in flight" and expects "large and
  rapid improvements in the weeks and months to come" — so today's scores are a floor by the
  vendor's own account, and a snapshot by any other reading.

**Access**

- **Single-source.** All OpenRouter routes are served by Mistral; AA lists one provider; Azure's
  Mistral line stops at Large 3. There is no second-party capacity, so a Mistral outage or a
  regional restriction has no fallback.
- **Regional endpoints are degraded.** Function calling is "the only supported regional tool";
  Agents, Batch and the Files API are unavailable on regional endpoints, and available models vary
  by region. The EU route on OpenRouter also advertises half the context (524,288).

**Context and limits**

- The advertised context is **1M in the vendor card but 524,288 on AA and on OpenRouter's EU
  endpoint**. AA's long-context reasoning row (AA-LCR 81.3%) is measured on whatever context AA
  configured, and no source states which. Treat 1M as the vendor's ceiling, not a validated
  working window.
- No published maximum output tokens; 262,144 is a host figure only.

**Safety and policy**

- The preview is released with **reduced moderation for vetted red-team partners** during the
  weights embargo: "cybersecurity leaders, vetted partners, and state authorities … will access
  the same model with reduced moderation and expanded cyber capabilities". At least two
  configurations of ML4 therefore exist in the wild, and no captured source says which one any
  given cyber score was measured on.
- Mistral argues openly that closed models' cyber refusals block legitimate defence work, and
  reports that ML4's own cyber refusal rate is "higher than all OSS models" on JailbreakBench,
  StrongREJECT and AgentHarm. Both statements are the vendor's; neither is independently measured
  in any captured source.
- AA's hallucination row is high: 41.9% on AA-Omniscience, with accuracy 25.8% and an index of
  −5.3.

**Documentation**

- No licence text, no architecture detail, no knowledge cutoff, no GA date, and no per-token
  image metering. Mistral says architecture and methodology details come with the weights.

## Access, pricing, licensing

USD per million tokens ([pricing page](../../sources/mistral.ai/mistral-large-4-pricing/2026-10-26.md)):

| Item | Global | EU/US regional (1.1×) |
| --- | --- | --- |
| Input | $1.36 | $1.496 |
| Cached input | $0.14 | $0.154 |
| Output | $4.18 | $4.598 |

**Billing basis:** per token, with cached input at roughly a 90% discount. Mistral's regional
upcharge is documented at 1.1× "for input tokens, output tokens, cached reads, and cache writes"
and reconciles OpenRouter's two price points exactly. AA independently computes cache hit $0.14,
cache write $1.36, blended 7:2:1 $0.788 per M tokens, and $1.61 per Intelligence Index task. Batch
and Priority rates exist as tabs on the pricing page but were not captured, and Voice Agents
pricing lists "Larger models $0.08/min" without naming Large 4.

**Licence:** **unpublished.** The model card's Weights tab lists both "Weights" and "License" as
"Coming soon", and the Hugging Face release page names no licence
([weights registry](../../sources/huggingface.co/mistral-large-4-weights/2026-10-26.md)). The
predecessor's Apache 2.0 is **not** evidence for Large 4: Mistral's own badge for Large 4 is the
generic "Open", where Large 3 carries an explicit "Apache 2.0" badge — a change that would be
pointless if the licence were unchanged. Whether the weights will be Apache 2.0, a
Mistral-specific licence, or something with commercial-use conditions is unresolved.

**Self-hosting:** not possible at capture. The weights do not exist publicly, the HF API returns
401 for the planned repository, and the vendor's GPU-RAM column reads "N/A" — so even the hardware
envelope for a 1.05T bf16 checkpoint is unstated.

## Label mapping: Artificial Analysis to canonical ID

The roster label came from Artificial Analysis. AA's row is **"Mistral Large 4 Preview"**,
intelligence index **38**, released October 2026, $1.36/$4.18, 524k context
([AA](../../sources/artificialanalysis.ai/mistral-large-4/2026-10-26/index.md)). It maps to the
vendor's `mistral-large-4` on four matches: identical price, identical release date (AA's record
says `2026-10-06`), identical modality set, and the same 49B per-token active-parameter count
that Hugging Face's release notice gives for `Mistral-Large-4-1T-A52B`.

Two qualifications. AA's "Preview" suffix is the vendor's own stage, not an AA invention — so the
AA row is explicitly a moving target. And AA's **"Proprietary model"** classification contradicts
the vendor's "open-weight" language only on the surface: AA's field asks whether weights are
available, and at capture they were not.

## Unresolved questions

1. **Do the weights ship on 2026-10-31, and under what licence?** Both the vendor ("by the end of
   the month") and Hugging Face ("Expected release October 31, 2026 — Current ETA") give that date.
   Nothing captured after the announcement confirms delivery, and the HF API returned 401 at
   capture.
2. **What is the real context window — 1M or 512k?** The vendor card says 1M; AA and OpenRouter's
   EU endpoint say 524,288. The global OpenRouter endpoints say 1,048,576. No source explains the
   split, and no source reports a long-context test at 1M.
3. **Is the preview checkpoint the shipping one?** Mistral says the RL run "is still in flight" and
   that more benchmarks and architecture details will follow with the weights. Every score on this
   page may belong to a superseded checkpoint.
4. **Is the "Artificial Analysis Cyber Index" a real AA artefact?** The vendor cites a top-five
   ranking on it and an 82% on "one of the index's tests". No AA Cyber Index page was reachable
   (`/cyber`, `/models/cyber`, `/leaderboards/cyber` all 404), so the claim is uncorroborated.
5. **How do images meter?** No source gives an image-token conversion, an image price, or a
   per-image limit, for a model whose headline claim is multimodal understanding.
6. **Why is the general index low when the vertical claims are high?** AA's Legal capability index
   (37.0) and Harvey LAB-AA (3.1%) are weak, while the vendor claims to beat GPT-6 Astra on legal
   work via vals.ai. Different harnesses, different tasks — but the size of the gap is unexplained
   by any captured source.
7. **Does a non-reasoning mode exist?** OpenRouter lists `reasoning_effort: none` as supported and
   AA prints its standard "a non-reasoning variant may also exist" caveat, but the vendor documents
   only `high`. Whether `none` disables thinking or merely lowers effort is unstated.
8. **No Mistral Large 3 page exists in this wiki.** Large 3 is the live cheaper alternative
   throughout this page; it is not this task's row.

## Evidence status

**Floor met and exceeded.** Six first-party Mistral records, one vendor weights registry, two
independent host records and one independent benchmark record.

- **First-party, five records:** the
  [launch post](../../sources/mistral.ai/mistral-large-4-launch/2026-10-26.md) (date, architecture
  headline, weights timeline, all vendor benchmarks and safety claims), the
  [docs model card](../../sources/mistral.ai/mistral-large-4-model-card/2026-10-26.md) (API names,
  context, price, modalities, weights tab), the
  [pricing page](../../sources/mistral.ai/mistral-large-4-pricing/2026-10-26.md),
  the [lifecycle policy](../../sources/mistral.ai/model-lifecycle-policy/2026-10-26.md), and the
  [regional inference page](../../sources/mistral.ai/regional-inference/2026-10-26.md). The
  [Large 3 card](../../sources/mistral.ai/mistral-large-3-model-card/2026-10-26.md) supports the
  distinction section.
- **Vendor weights registry:** the
  [Hugging Face upcoming-release page](../../sources/huggingface.co/mistral-large-4-weights/2026-10-26.md),
  including the 401 on the API as a negative check.
- **Independent host, two records:** [OpenRouter](../../sources/openrouter.ai/mistral-large-4/2026-10-26/index.md)
  (catalogue metadata, per-endpoint prices and contexts, reasoning effort enumeration, saved as
  JSON artifacts) and the
  [Azure Mistral catalogue](../../sources/microsoft.com/azure-foundry-mistral-models/2026-10-26.md)
  (negative availability check establishing single-source serving).
- **Independent benchmarks, one record:** [Artificial Analysis](../../sources/artificialanalysis.ai/mistral-large-4/2026-10-26/index.md),
  with the page's serialized model record saved beside it so the per-benchmark numbers are
  reproducible rather than read off charts.
- **No direct tests were run for this page.** No request was sent to any endpoint; every number is
  quoted from a source record. Where figures disagree — context window (1M vs 524,288), active
  parameters (52B vs 49B), Terminal-Bench 4.0 (28.3% vs 26.8%), AA-Briefcase (1,393 vs 1,390.8) —
  all values are recorded with their sources rather than reconciled.
- **Weakest links:** the vendor's benchmark charts are images and were not readable, so only the
  rows quoted in prose are captured; AA's Cyber Index could not be located at all; the Azure check
  proves absence from one table, not global absence; and the entire weights/licence position is
  due to change on 2026-10-31, five days after this capture.
