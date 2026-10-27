# Gemini 3.8 Flash TTS

Google's flagship creative text-to-speech model `gemini-3.8-flash-tts`, released generally available
on **2026-09-22** in the same changelog entry as its cheaper sibling `gemini-3.8-flash-lite-tts`
([release notes](../../sources/google.dev/gemini-3.8-flash-tts-release-notes/2026-10-26.md)). It is a
distinct tier, not a repackaging: it shares the sibling's schema and token limits exactly, but costs
**50% more per audio token**, supports **130 languages instead of 101**, and is the model Google names
first when retiring its three older TTS previews.

The launch is inside the roster's one-year window (≥ 2025-10-26) by eleven months, so no
out-of-window exception applies.

## Identity

- **Canonical name:** Gemini 3.8 Flash TTS. **Model code:** `gemini-3.8-flash-tts`, a single version
  with no snapshot suffix ([model page](../../sources/google.dev/gemini-3.8-flash-tts-model-page/2026-10-26.md)).
  The roster row 77 label "Gemini 3.8 Flash TTS" matches the first-party name exactly; fal's looser
  "Gemini 3.8 Flash Tts" and Replicate's "Gemini 3.8 Flash TTS" are the same model. The roster's
  discovery route ("draft discovery", no host endpoint) is resolved here to four endpoints, below.
- **Vendor:** Google (model developer and API operator). No weights, no self-hosting, no weights
  licence to review — every route captured is a hosted API.
- **Release:** **2026-09-22**, "generally available (GA)" in the Gemini API release notes, which also
  launched the `/v1beta/voices` endpoint behind Voice design, Voice replication and the Extended Voice
  Library ([release notes](../../sources/google.dev/gemini-3.8-flash-tts-release-notes/2026-10-26.md)).
  The deprecations table gives the same date
  ([deprecations](../../sources/google.dev/gemini-3.8-flash-tts-deprecations/2026-10-26.md)); the model
  page says only "Latest update: September 2026"
  ([model page](../../sources/google.dev/gemini-3.8-flash-tts-model-page/2026-10-26.md)).
- **Host endpoints:**

| Route | Endpoint | Notes |
| --- | --- | --- |
| Gemini API | `gemini-3.8-flash-tts` via `generateContent` | unary WAV or `stream=true` raw PCM ([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md)) |
| Gemini Enterprise (Vertex) | `…/locations/global/publishers/google/models/gemini-3.8-flash-tts:generateContent` | **Preview**, release date **2026-09-28**, `global` only ([Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-tts-model-card/2026-10-26.md)) |
| fal | `fal-ai/gemini-3.8-flash-tts` (`https://fal.run/…`) | partner proxy, `licenseType: private`, `status: unlisted`, $0.045/1K chars ([fal](../../sources/fal.ai/gemini-3.8-flash-tts/2026-10-26.md)) |
| Replicate | `google/gemini-3.8-flash-tts` | Google's own namespace, list-price token billing, WAV or MP3 ([Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md)) |

- **Siblings:** `gemini-3.8-flash-lite-tts` (same generation, 101 languages, $6.00/1M audio tokens);
  the model this generation replaces, `gemini-3.1-flash-tts-preview` (shutdown **2026-11-17**); and the
  older `gemini-2.5-flash-preview-tts` / `gemini-2.5-pro-preview-tts`, also scheduled for 2026-11-17
  ([deprecations](../../sources/google.dev/gemini-3.8-flash-tts-deprecations/2026-10-26.md)).

### Identity ambiguity

- **GA and Preview at the same time.** The Gemini API calls the ID GA on 2026-09-22; the Cloud/Vertex
  card for the identical ID says "Launch stage: Preview" with release date 2026-09-28. Neither page
  addresses the other
  ([release notes](../../sources/google.dev/gemini-3.8-flash-tts-release-notes/2026-10-26.md),
  [Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-tts-model-card/2026-10-26.md)).
- **Four dates, one model:** 2026-09-22 (Gemini API GA), 2026-09-28 (Vertex release), "September 2026"
  (model page "latest update"), and a Replicate listing created 2026-10-26 — a month after the model
  shipped ([Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md)).
- **"Flash" here is a TTS tier, not the text model.** Nothing captured says this ID shares a backbone
  with `gemini-3.8-flash`; the only documented family relationship is to the Flash-Lite TTS sibling,
  which Google says shares "the same request schema and prompting format"
  ([Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-tts-model-card/2026-10-26.md)).
- **No checkpoint or revision identifier.** Every route serves the bare ID, so claims here pin to the
  capture date (2026-10-26), not to a model revision.

## Current assessment

**A current, generally available flagship creative TTS tier — the higher-priced half of a two-model
3.8 TTS pair, and the vendor's designated destination for retiring TTS previews.**

*Distinct from its sibling on price and coverage.* The documented deltas are the audio output price
($9.00 vs $6.00 per 1M tokens through 2026-12-31), the language count (130 vs 101), the positioning
(fidelity/acting/dialects vs throughput/cost) and the recommended workloads (audiobooks and
multi-speaker dialogue vs high-volume read-aloud)
([pricing](../../sources/google.dev/gemini-3.8-flash-tts-pricing/2026-10-26.md),
[model page](../../sources/google.dev/gemini-3.8-flash-tts-model-page/2026-10-26.md)). Everything else
— schema, 8,192/16,384 token limits, voice surface, output formats, consumption modes — is shared.

*Distinct from what it replaces.* Against `gemini-3.1-flash-tts-preview` it adds Voice design and
Voice replication (the guide's matrix marks both unavailable on 3.1), changes the unary default from
headerless `audio/l16` to RIFF WAV, moves delivery direction out of the transcript into
`speech_metadata`, and is **less than half the output price** ($9.00 vs $20.00 per 1M audio tokens)
([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md),
[pricing](../../sources/google.dev/gemini-3.8-flash-tts-pricing/2026-10-26.md)).

*Current.* No shutdown date is announced and no replacement is listed for this ID; the models with
deadlines are the previews it replaces
([deprecations](../../sources/google.dev/gemini-3.8-flash-tts-deprecations/2026-10-26.md)).

Three decision-relevant findings:

1. **The tier premium buys coverage, not measurable quality.** Artificial Analysis' blind-preference
   board puts the flagship at **1280 ± 14**, 5th (rank interval 4–7), and Flash-Lite at **1256 ± 13**,
   8th (6–10). The intervals overlap, so the 24-point gap is not separable at that sample size, while
   the 50% price gap is hard. The 130-vs-101 language difference is the concrete reason to pay
   ([AA leaderboard](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).
2. **Every route bills differently and the host markup is large.** Google bills per token ($9.00/1M
   audio tokens ≈ $0.0135/min); Replicate charges exactly Google's token rates plus $0.0001/s of CPU;
   fal charges **$0.045 per 1,000 characters ≈ $45 per 1M characters**, roughly 2.7× the
   character-normalised list price and about 3.3× the per-minute list rate
   ([pricing](../../sources/google.dev/gemini-3.8-flash-tts-pricing/2026-10-26.md),
   [Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md),
   [fal](../../sources/fal.ai/gemini-3.8-flash-tts/2026-10-26.md)).
3. **Prices double on 2027-01-01.** The published schedule steps $9.00 → $18.00 per 1M audio tokens
   (input $0.50 → $1.00) on that date for this ID and its sibling. That is the single largest cost
   risk for a pipeline built on it today
   ([pricing](../../sources/google.dev/gemini-3.8-flash-tts-pricing/2026-10-26.md)).

## Documented capabilities

Everything in this section is vendor or host documentation. **No direct tests were run.**

### Input and control surface

- **Text in, audio out, nothing else.** "TTS models accept text-only inputs and produce audio-only
  outputs"; image and video are unsupported on every route
  ([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md),
  [Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-tts-model-card/2026-10-26.md)).
- **The text is a verbatim transcript.** "Gemini 3.8 TTS treats the text field strictly as a verbatim
  transcript" — sustained delivery belongs in `speech_metadata.style` (e.g. `"whispered urgently"`),
  and only point-in-time vocal events stay inline in angle brackets (`<short pause>`, `<sigh>`,
  `<cough>`, `<breath>`, `<laugh>`)
  ([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md)).
  This is the behaviour change Replicate's README narrates: earlier Gemini TTS models took long "Audio
  Profile"/"Director's Notes" blocks and "Sometimes the model read those directions out loud"
  ([Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md)).
- **Two speakers per request, prebuilt voices only.** "Single-request multi-speaker generation
  (`speech_config.speakers`) supports up to 2 speakers using prebuilt voices"; mixing designed or
  replicated voices in dialogue requires one request per turn, and concatenating turns means stripping
  the 44-byte RIFF header yourself
  ([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md)).
- **Single-speaker `speech_config` is an array, multi-speaker is an object** — an asymmetry the guide
  calls out explicitly.
- **Streaming** is supported (`stream=true`), returning headerless `audio/l16` chunks by default
  ([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md)).
- **Host-only conveniences.** Replicate documents backchannels (`|uh-huh|`, spoken by the other
  speaker underneath the current line), IPA pronunciation between slashes, CAPITALS for stress and
  ellipses for hesitation, plus a 24-tag inline inventory that is larger than the Google guide's five
  examples (`<cackle>`, `<snicker>`, `<sob>`, `<whimper>`, `<yawn>`, `<long pause>`, `<tsk>`,
  `<argh>`, …). None of these appear in Google's own TTS documentation
  ([Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md)).

### Voices

- **30 prebuilt studio voices**, listed with the same descriptors by Google and Replicate and counted as
  30 by Vertex and fal: Zephyr, Puck, Charon, Kore, Fenrir, Leda, Orus, Aoede, Callirrhoe, Autonoe,
  Enceladus, Iapetus, Umbriel, Algieba, Despina, Erinome, Algenib, Rasalgethi, Laomedeia, Achernar,
  Alnilam, Schedar, Gacrux, Pulcherrima, Achird, Zubenelgenubi, Vindemiatrix, Sadachbia, Sadaltager,
  Sulafat. Default `Kore`
  ([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md),
  [Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md),
  [fal](../../sources/fal.ai/gemini-3.8-flash-tts/2026-10-26.md)).
- **Extended Voice Library** — "Hundreds of additional voices" (guide), "150+ prebuilt and custom
  voices" (changelog), "more than 2,000 curated voices" (Vertex card), queryable via
  `GET /v1beta/voices`. The three counts are unresolved
  ([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md),
  [release notes](../../sources/google.dev/gemini-3.8-flash-tts-release-notes/2026-10-26.md),
  [Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-tts-model-card/2026-10-26.md)).
- **Voice design and Voice replication both work on this ID** (and not on the 3.1 preview). The
  changelog describes replication as consent-verified; the detailed consent flow is not in the
  captured Gemini 3.8 records.
- **Custom-voice quotas:** 200 stored voices per project shared across prompted and replicated voices,
  1-year TTL refreshed by use; stateless `voicekey_...` keys expire in 7 days
  ([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md)).

### Languages

Google claims "over 130 languages", and the model page enumerates **132** language names — so the
prose and the table agree while the tier comparison rounds to "130". The language is auto-detected;
Replicate confirms there is no `language_code` input, and that it was removed from the 3.1 schema
([model page](../../sources/google.dev/gemini-3.8-flash-tts-model-page/2026-10-26.md),
[Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md)). The guide's per-language
matrix marks the sibling as missing entries this model supports, so the sibling's 101 is a subset of
this list rather than a different set
([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md)).

### Output formats and sample rate

| Format | `mime_type` | When | Spec |
| --- | --- | --- | --- |
| WAV | `audio/wav` | default, unary requests | RIFF header, 24 kHz mono 16-bit LE PCM |
| Raw PCM | `audio/l16` | default, streaming requests | headerless 24 kHz mono 16-bit LE PCM |
| Mu-law | `audio/mulaw` | opt-in | 8-bit G.711, telephony/IVR |
| A-law | `audio/alaw` | opt-in | 8-bit G.711, European telephony |

`sample_rate` is settable to 24000, 16000 or 8000 Hz; mono is the only documented channel
configuration ([guide](../../sources/google.dev/gemini-3.8-flash-tts-speech-generation-guide/2026-10-26.md)).
Replicate adds `mp3` next to 24 kHz mono WAV — a host transcode, since Google's format list has no MP3
([Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md)). fal returns WAV only.

### Quality — the one independent measurement

Artificial Analysis' blind-preference board scores **Gemini 3.8 Flash TTS at 1280 ± 14** (8 voices
tested, 3,255 samples), ranked **5th** with a rank interval of 4–7, above Qwen-Audio-3.0-TTS-Plus
(1269), Inworld Realtime TTS-2 (1267) and its own Flash-Lite sibling (1256), and below Eleven v4 Turbo
(1333), Eleven v4 (1333), Qwen-Audio-3.1-TTS-Plus (1306) and Sonic 3.6 (1292). AA normalises
its price to **$16.5 per 1M characters**, which is consistent with Google's list rate at a normal
speaking pace ([AA leaderboard](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).
Replicate's claim that it "ranks first overall on Hume AI's Voice Design Benchmark" is a host
assertion with no score, no date and no Hume capture in this corpus
([Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md)).

## Limitations and constraints

- **8,192 input / 16,384 output tokens**, the output figure labelled a "Gemini API serving limit"
  ([model page](../../sources/google.dev/gemini-3.8-flash-tts-model-page/2026-10-26.md)). At the
  pricing page's own 25 audio tokens per second, 16,384 output tokens caps a single request at
  **≈655 s ≈ 10.9 minutes** of audio — derived here, not documented
  ([pricing](../../sources/google.dev/gemini-3.8-flash-tts-pricing/2026-10-26.md)).
- **No character or duration limit is documented anywhere.** The only numeric ceilings are the token
  limits, the two-speaker cap and the 200-voice project quota.
- **Multi-speaker is capped at two speakers and at prebuilt voices**, so custom-voice dialogue needs
  one request per turn plus caller-side WAV concatenation.
- **No caching, code execution, file search, function calling, structured outputs, thinking, URL
  context, Maps/search grounding, image generation or Live API** — each listed as unsupported on the
  model page. Batch, Flex and Priority inference are the supported consumption options
  ([model page](../../sources/google.dev/gemini-3.8-flash-tts-model-page/2026-10-26.md)).
- **The Vertex route is `global` only**, is a Pre-GA offering under Google Cloud's Pre-GA terms, and
  supports only `generateContent` — not the Interactions API, Live API, Count Tokens API or Chat
  Completions API
  ([Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-tts-model-card/2026-10-26.md)).
- **Free-tier prompts train Google's products.** "Used to improve our products: Yes" for the free
  tier, "No" for paid, on every consumption mode; Batch and Flex have no free tier at all
  ([pricing](../../sources/google.dev/gemini-3.8-flash-tts-pricing/2026-10-26.md)).
- **Host gaps.** fal exposes the 30 prebuilt voices and WAV only — no Voice design, Voice replication,
  streaming, sample-rate choice or μ-law/A-law — and gates access behind `licenseType: private` with
  the endpoint marked `status: unlisted`
  ([fal](../../sources/fal.ai/gemini-3.8-flash-tts/2026-10-26.md)). Replicate exposes WAV/MP3 plus
  richer prompting, but still no design or replication, and had 94 runs at capture
  ([Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md)). Neither host
  documents rate limits or latency.
- **A price step is already scheduled**: the audio output rate doubles on 2027-01-01.

### Watermarking — unresolved

Replicate states plainly: "Every clip includes an inaudible SynthID watermark that marks it as
AI-generated"
([Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md)). Neither the Gemini API
model page, the TTS guide, the pricing page, the changelog nor the Vertex card captured here mentions
SynthID or watermarking at all. A compliance pipeline should therefore not assume vendor-side
provenance marking on this model, and should not assume its absence either — the contradiction is
left open.

## Access, pricing, licensing

### Billing basis

Billed **per token** on Google's own routes: input text tokens plus output audio tokens, where "Audio
tokens correspond to 25 tokens per second of audio"
([pricing](../../sources/google.dev/gemini-3.8-flash-tts-pricing/2026-10-26.md)).

| Route | Input | Output (audio) | Basis |
| --- | --- | --- | --- |
| Gemini API, standard | $0.50 /1M → $1.00 from 2027-01-01 | **$9.00 /1M → $18.00** | tokens; $0.00225 → $0.0045 per 10 s |
| Gemini API, batch or flex | $0.25 /1M → $0.50 | $4.50 /1M → $9.00 | half of standard |
| Gemini API, priority | $0.90 /1M → $1.80 | $16.20 /1M → $32.40 | 1.8× standard |
| Vertex (Gemini Enterprise) | not stated | not stated | pay-as-you-go; no price on the card |
| fal | — | $0.045 per 1,000 characters | per-character partner proxy |
| Replicate | $0.50 /1M | $9.00 /1M | Google's list price, plus $0.0001/s CPU |

Derived from Google's own token/second note: standard-tier output costs **≈$0.0135 per minute** of
audio until 2026-12-31 and **≈$0.027 per minute** after; Batch/Flex halves that. A 10-minute narration
(the implied single-request ceiling) costs **≈$0.135 today and ≈$0.27 after the step**; fal's
per-character price for the same audio is roughly 3× that, at ≈$0.045 per minute
([pricing](../../sources/google.dev/gemini-3.8-flash-tts-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/gemini-3.8-flash-tts/2026-10-26.md)).

Replicate's sample prediction corroborates the token accounting rather than contradicting it: 189
output tokens for one short clip, "Generated speech in 5.29s", `predict_time` 5.315 s
([Replicate](../../sources/replicate.com/gemini-3.8-flash-tts/2026-10-26.md)). That is one request's
host log, not a latency benchmark.

### Licensing and commercial terms

- **No weights, no licence to review.** All four routes are hosted APIs; there is no open-weights
  release and no self-hosting path
  ([model page](../../sources/google.dev/gemini-3.8-flash-tts-model-page/2026-10-26.md)).
- **fal's `licenseType: "private"` is a host flag, not a Google grant**, and the endpoint is
  access-gated on fal's side
  ([fal](../../sources/fal.ai/gemini-3.8-flash-tts/2026-10-26.md)).
- **The Vertex route is a Pre-GA offering** under Google Cloud's Service Specific Terms, which
  explicitly permit production and commercial use and disclosure of generated output under those
  terms ([Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-tts-model-card/2026-10-26.md)).
- **Voice replication is consent-gated at creation** per the changelog's "replicate voices with
  consent verification"; the verification mechanics for this model are not in the captured records.

## Unresolved questions

1. **Is it GA or Preview?** The Gemini API says GA on 2026-09-22; the Vertex card says Preview with a
   2026-09-28 release date. Which support window a customer gets is undetermined by the pages.
2. **Is output SynthID-watermarked?** Replicate says yes; five Google pages captured here are silent.
   Untested.
3. **What is the real per-request duration ceiling?** The 16,384-token output limit implies ~10.9
   minutes at 25 tokens/s, but no page states a duration or a character cap, and no page says whether
   over-long input is truncated, refused, or split.
4. **How many voices exist?** 30 prebuilt is consistent everywhere; the Extended Voice Library is
   "hundreds", "150+" and "more than 2,000" in three first-party documents.
5. **Does it really rank first on Hume's Voice Design Benchmark**, as Replicate's README claims? No
   score, date or Hume page was captured, and the one independent board in this corpus (Artificial
   Analysis) places it 5th.
6. **Do style strings, inline tags and `speech_metadata` bill as input tokens?** The transcript is the
   billed input by implication, but no page defines the counting rule.
7. **Is the 2027-01-01 doubling a promotional expiry or a list-price correction?** It applies to both
   3.8 TTS IDs while the 3.1 preview carries no dated step.
8. **Do the flagship and Flash-Lite share weights?** Google says they "share the same request schema
   and prompting format" — a schema statement, not an architecture one. The 24-point Elo gap with
   overlapping intervals is consistent with either a different checkpoint or the same one at a
   different serving budget.
9. **What does fal's `status: unlisted` mean for this endpoint?** The page is public and priced, but
   the endpoint is not catalogue-discoverable; fal does not explain the flag.
10. **Do failed, refused or truncated requests bill?** No source states it.

## Evidence status

Evidence floor: **met.** First-party: the Gemini API model page and the TTS generation guide, plus the
model-specific pricing block, release-notes entry and deprecations rows captured for this page, and the
Cloud/Vertex model card. Independent hosts: **fal** (catalogue data, `llms.txt`, input schema, billing
payload) and **Replicate** (model page, README, embedded billing config, sample prediction). Independent
measurement: the Artificial Analysis Text-to-Speech leaderboard, a shared capture that carries this
model's row. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capabilities are vendor or host documentation; prices are published schedules that agree between
Google and Replicate and diverge sharply at fal; the only quality number is a third-party Elo from
someone else's arena.

Contradictions are preserved rather than resolved: GA vs Preview, the four different voice-count figures,
the silence-versus-assertion on SynthID, fal's per-character markup against Google's token price, the
"ranks first on Hume" claim against the Artificial Analysis board, and the 130-vs-132 language count
inside a single Google page.

The next useful evidence would be a small reproducible test set: one script rendered on the Gemini API,
fal and Replicate and compared for speaker identity and prosody; a request long enough to hit the
16,384 output-token ceiling, to see whether it truncates or errors; a spectral check for an inaudible
watermark on each route's output; and a language in the flagship's 132-name list that Flash-Lite's 101
does not cover, to confirm the coverage advantage is real rather than a table artefact.
