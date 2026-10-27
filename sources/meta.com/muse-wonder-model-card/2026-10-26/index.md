# Meta: Muse Wonder model card (PDF)

- **Origin:** Meta, "Muse Wonder Model Card",
  <https://research.meta.ai/static/muse-wonder-model-card> (served as `application/pdf`, 13 pages).
  Publisher domain: `research.meta.ai` → `meta.com`. PDF saved beside this record as
  [`muse-wonder-model-card.pdf`](muse-wonder-model-card.pdf).
- **Evidence kind:** official model card (model developer): release date, modalities, context,
  evaluation methodology, safety results, limitations.
- **Publication date:** none printed beyond the release date; the card describes the 2026-10-12
  release and cites an ExploitGym update dated 23 October 2026, so it was current on or after that
  date.
- **Capture date:** 2026-10-26.
- **Relevant models:** Muse Wonder and Muse Wonder Full (described together as "the Muse Wonder
  models").
- **Capture type:** full PDF artifact plus transcribed text; quoted passages verbatim.

## Model facts (verbatim)

| Field | Value |
| --- | --- |
| Name | "Muse Wonder and Muse Wonder Full" |
| Model Provider | "Meta Platforms, Inc. or Meta Platforms Ireland Limited" |
| Website | `dev.meta.ai` |
| Date of Release | "October 12, 2026" |
| Modalities | "Input: text, image, video, audio" / "Output: text" |
| Languages | "trained on multilingual training data, with substantial representation across worldwide languages" |
| Context Length | "1M tokens at inference" |

Intended uses include general assistance, coding, personal/professional agents, domain knowledge
work (law, finance, health), multimodal understanding, and research.

## Evaluation methodology (verbatim excerpts)

> Models and configurations. Muse Wonder and Muse Wonder Full results are generated with max
> reasoning effort. We compare with GPT-6 Astra, Claude Fable 5.1, and Claude Opus 5.5 at max
> reasoning effort. For controlled internal coding comparisons, every model uses the same
> benchmark-specific harness. External coding results retain the harness or agent product used by
> the reporting vendor or model provider, and that source is identified below.

> Where a comparable third-party or provider-reported result exists, we use it; otherwise we use the
> highest of our internally validated run, self-reported score, or official leaderboard score.

> Model refusals receive zero credit and remain in the denominator rather than being dropped.

Named external sources: Artificial Analysis (Terminal-Bench 4.0, Harvey LAB-AA, AutomationBench-AA),
Vals AI (Vals Finance Agent V2), Surge (GDP.pdf), Datacurve (DeepSWE 1.1), Abundant AI
(SWE-Marathon), Perplexity (DRACO). SWE-Marathon notes that competitor rows use different agent
products, "so this row is not a controlled common-harness comparison", and that Muse Wonder Full was
reported with `xhigh` reasoning effort.

## Safety results (Muse Wonder Full; verbatim values)

| Evaluation | Result |
| --- | --- |
| CyberGym | 88.4% |
| ExploitBench | 58.9% |
| ExploitGym | 20 intended flags (corrected 2026-10-23; previously 21 intended / 92 total) |
| CyberBench ASR (single/multi-turn) | 0.8 / 0.8 |
| PolyGuard cyber subset ASR | 1.1 / 2.3 |
| RedCode ASR | 9.0 / 8.0 |
| SecureBio MBCT / HPCT / VCT | 59.6% / 66.5% / 55.9% (average 60.7%) |
| Lab-Bench ProtocolQA | 89.0% |
| BioTIER English / multilingual / adversarial | 98.7% / 98.7% / 98.2% |
| Internal Chemistry Refusal English / multilingual / adversarial | 100.0% / 100.0% / 99.8% |
| MASK | 87.3% |
| Agentic Misalignment | 0% |

Risk statement:

> Under the Meta Superintelligence Scaling Framework, a model reaches the high risk threshold when
> its deployment could substantially contribute to a threat scenario we have identified as severe.
> Without mitigations, we do not rule out the model reaching this threshold in the Chemical &
> Biological domain. Because of that, we apply mitigations designed for this domain ... With
> mitigations and system-level safeguards in place, we reach the same "moderate or lower" level
> across all domains, which supports our decision to deploy.

## Limitations (verbatim, abridged to the substantive items)

> 1. The model may produce inaccurate, biased, or objectionable responses to user prompts.
> 2. While optimized for agentic tasks, the model may still make errors in multi-step reasoning,
>    particularly in novel scenarios not well represented in training data.
> 3. Visual and spatial reasoning, especially 3D tasks, remains a known limitation. Validate
>    performance for applications that depend on precise spatial understanding.
> 4. The model has not been evaluated on all languages contained in the pre-training data.
>    Performance may degrade on languages outside the strongly supported set.
> 5. Performance can vary with quantization, serving configuration, prompts, tools, and the agent
>    harness.
> 6. The model is not intended to be used by individuals under the age of 18.

Use is governed by the Meta Model API Terms of Service, Meta Model Acceptable Use Policy, and Muse
Supplemental Terms of Service. The card recommends human-in-the-loop confirmation for irreversible
agentic actions.

## Notes

- The card's modality line omits **PDF**, while Meta's models documentation and OpenRouter both list
  PDF/file input. Preserve the contradiction.
- The card does not publish parameter count, architecture, training compute, knowledge cutoff,
  per-modality input limits, or a weights licence. It is a closed, hosted model.
- The benchmark results table itself is an image on page 3 of the PDF and is not text-extractable;
  the same numbers are rendered as text on the product page.

## Gaps

- No per-benchmark numeric table in extractable text; use the product-page transcription.
- No knowledge cutoff, no tokeniser details, no per-modality limits.
- No statement on preview vs GA, deprecation, or regional restrictions beyond the docs page.
