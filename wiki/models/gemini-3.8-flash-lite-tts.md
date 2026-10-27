# Gemini 3.8 Flash-Lite TTS

Google's cost-tier text-to-speech model `gemini-3.8-flash-lite-tts`, released generally available on
**2026-09-22** alongside its flagship sibling `gemini-3.8-flash-tts`, and named by Google as the
replacement for `gemini-3.1-flash-tts-preview`
([release notes](../../sources/google.dev/gemini-3.8-flash-lite-tts-release-notes/2026-10-26.md),
[model page](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-page/2026-10-26.md)). It is not
a repackaging: it shares the sibling's API schema and token limits exactly, but costs **33% less per
audio token**, supports **101 languages instead of 130**, and on the one independent measurement
available it is **24 Elo below the flagship with overlapping confidence intervals** — a price tier,
not a measurably worse model.

The launch is inside the roster's one-year window (≥ 2025-10-26) by eleven months, so no
out-of-window exception applies.

## Identity

- **Canonical name:** Gemini 3.8 Flash-Lite TTS. **Model code:** `gemini-3.8-flash-lite-tts`
  ([model page](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-page/2026-10-26.md),
  [catalogue](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-catalogue/2026-10-26.md)).
  The hyphen in "Flash-Lite" is first-party; the roster row's "Flash Lite TTS" and fal's
  "Gemini 3.8 Flash Lite Tts" are the same model under looser spelling.
- **Vendor:** Google (model developer and API operator). No weights, no self-hosting, no licence to
  review — every route is a hosted API.
- **Release:** 2026-09-22, "generally available (GA)" in the Gemini API release notes, in the same
  entry that launched the `/v1beta/voices` endpoint
  ([release notes](../../sources/google.dev/gemini-3.8-flash-lite-tts-release-notes/2026-10-26.md)).
  The model page states only "Latest update: September 2026"
  ([model page](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-page/2026-10-26.md)); the
  deprecations table agrees on the 2026-09-22 release date
  ([deprecations](../../sources/google.dev/gemini-3.8-flash-lite-tts-deprecations/2026-10-26.md)).
- **Host endpoints:**

| Route | Endpoint | Notes |
| --- | --- | --- |
| Gemini API | `gemini-3.8-flash-lite-tts` via `POST /v1beta/interactions` and `generateContent` | unary WAV or `stream=true` PCM ([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md)) |
| Gemini Enterprise (Vertex) | `…/locations/global/publishers/google/models/gemini-3.8-flash-lite-tts:generateContent` | **Preview**, release date **2026-09-28**, `global` only ([Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-lite-tts-model-card/2026-10-26.md)) |
| fal | `fal-ai/gemini-3.8-flash-lite-tts` (`https://fal.run/…`) | partner proxy, `licenseType: private`, $0.03/1K chars ([fal](../../sources/fal.ai/gemini-3.8-flash-lite-tts/2026-10-26.md)) |
| Replicate | `google/gemini-3.8-flash-lite-tts` | Google's own namespace; list-price token billing ([Replicate](../../sources/replicate.com/gemini-3.8-flash-lite-tts/2026-10-26.md)) |

- **Siblings:** `gemini-3.8-flash-tts` (flagship creative tier, 130 languages, $9/1M audio tokens);
  the model it replaces, `gemini-3.1-flash-tts-preview`, still listed as "Legacy TTS preview model"
  with a shutdown date of **2026-11-17**
  ([catalogue](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-catalogue/2026-10-26.md),
  [deprecations](../../sources/google.dev/gemini-3.8-flash-lite-tts-deprecations/2026-10-26.md));
  and the older `gemini-2.5-flash-preview-tts` / `gemini-2.5-pro-preview-tts`, now limited to prior
  users.

### Identity ambiguity

- **"Flash-Lite" here is a TTS tier, not a text model.** The catalogue lists `gemini-3.5-flash-lite`
  and `gemini-3.1-flash-lite` as text models, but **no `gemini-3.8-flash-lite` text model**; the
  Lite suffix on this ID names the cheaper serving tier of the 3.8 TTS family and should not be read
  as a shared backbone with any text model
  ([catalogue](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-catalogue/2026-10-26.md)).
- **GA and Preview at the same time.** The Gemini API calls it GA on 2026-09-22; the Cloud/Vertex
  card for the identical model ID says "Launch stage: Preview", release date 2026-09-28. Two Google
  surfaces disagree, and neither page addresses the other
  ([release notes](../../sources/google.dev/gemini-3.8-flash-lite-tts-release-notes/2026-10-26.md),
  [Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-lite-tts-model-card/2026-10-26.md)).
- **No snapshot or revision identifier.** Every route serves the bare ID; there is no dated
  checkpoint, so claims here pin to a capture date (2026-10-26), not to a model revision.
- **Four listing dates, one model:** 2026-09-22 (Gemini API GA), 2026-09-28 (Vertex release),
  "September 2026" (model page's "latest update"), and "13 hours ago" (Replicate's "Model created",
  i.e. ≈2026-10-25 — a host listing created a month after the model shipped)
  ([Replicate](../../sources/replicate.com/gemini-3.8-flash-lite-tts/2026-10-26.md)).

## Current assessment

**A current, generally available cost tier — not a preview and not a repackaging.**

*Distinct from the flagship, on price and coverage, not architecture.* Both 3.8 TTS model pages carry
an identical property table (8,192 input / 16,384 output tokens; audio generation only; Batch, Flex
and Priority supported; caching, thinking, function calling and Live API unsupported). Google says
outright that they "share the exact same API schema and prompting structure" and that switching is
"a single parameter change"
([Lite](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-page/2026-10-26.md),
[flagship](../../sources/google.dev/gemini-3.8-flash-tts-model-page/2026-10-26.md)). The documented
deltas are: audio output price ($6.00 vs $9.00 per 1M tokens through 2026-12-31), language count (101
vs 130), and positioning (throughput/cost vs fidelity/dialect).

*Distinct from what it replaces.* Against `gemini-3.1-flash-tts-preview` it adds Voice design and
Voice replication (the guide's matrix marks both unavailable on 3.1), changes the unary default from
headerless `audio/l16` to RIFF WAV, replaces inline text stage directions with `speech_metadata`, and
is cheaper on both sides — $0.50 vs $1.00 input and $6.00 vs $20.00 output per 1M tokens
([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md),
[pricing](../../sources/google.dev/gemini-3.8-flash-lite-tts-pricing/2026-10-26.md)).

*Current.* No shutdown date is announced for either 3.8 TTS ID, and the model it replaces is the one
with a deadline (2026-11-17)
([deprecations](../../sources/google.dev/gemini-3.8-flash-lite-tts-deprecations/2026-10-26.md)).

The decision-relevant findings are three:

1. **The "Lite" quality penalty is not measurable.** Artificial Analysis' blind-preference board puts
   Flash-Lite at **1256 ± 13**, 8th (rank interval 6–10), and the flagship at **1280 ± 14**, 5th
   (4–7). The intervals overlap, so the 24-point gap is not separable at that sample size — while the
   price gap
   is a hard 33% ([AA leaderboard](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).
   Replicate's claim that Flash-Lite "ranks second on Hume AI's Overall Quality Index" is a host
   assertion with no score, no date and no Hume capture in this corpus.
2. **The language gap is concrete and enumerable.** Flash-Lite's 101 languages are exactly the
   flagship's 130 minus 29, with nothing added — including Finnish, Swedish, Thai, Lithuanian,
   Slovenian and Burmese ([flagship page](../../sources/google.dev/gemini-3.8-flash-tts-model-page/2026-10-26.md),
   [Replicate](../../sources/replicate.com/gemini-3.8-flash-lite-tts/2026-10-26.md)). If a target
   language is in that gap, the price advantage is unusable.
3. **Hosts do not pass through the whole surface.** fal exposes 30 prebuilt voices, one WAV output and
   no Voice design/replication at $0.03 per 1,000 characters — roughly 3.3× Google's own per-minute
   cost. Replicate bills at Google's list price and adds an `mp3` option Google does not document, but
   still drops design/replication. Voice cloning is only reachable on Google's own surfaces.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run.**

### Input and control surface

- **Text in, audio out, nothing else.** "TTS models accept text-only inputs and produce audio-only
  outputs"; image and video are unsupported on every route
  ([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md),
  [Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-lite-tts-model-card/2026-10-26.md)).
- **Input text is a verbatim transcript.** "Gemini 3.8 TTS models treat input text strictly as a
  verbatim transcript" — old-style inline directions ("Say cheerfully: Hello!") "may be spoken
  aloud". Sustained delivery goes in `speech_metadata.style`; only point-in-time vocal events stay
  inline, in angle brackets (`<laugh>`, `<sigh>`, `<cough>`, `<breath>`, `<short pause>`); sound
  effects such as applause are explicitly discouraged
  ([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md)).
- **Two speakers per request, prebuilt voices only.** "Single-request multi-speaker generation
  (`speech_config.speakers`) supports up to 2 speakers using prebuilt voices"; combining custom
  designed or replicated voices in dialogue requires one request per turn
  ([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md)).
- **Backchannels and IPA** are host-level conveniences: Replicate documents `|pipe|` listener
  reactions and `/IPA/` pronunciation, which the Gemini API guide does not mention
  ([Replicate](../../sources/replicate.com/gemini-3.8-flash-lite-tts/2026-10-26.md)).
- **Streaming** is supported (`stream=true`), returning headerless PCM chunks by default
  ([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md)).

### Voices

- **30 prebuilt studio voices**, identical on Google, fal and Replicate: Zephyr, Puck, Charon, Kore,
  Fenrir, Leda, Orus, Aoede, Callirrhoe, Autonoe, Enceladus, Iapetus, Umbriel, Algieba, Despina,
  Erinome, Algenib, Rasalgethi, Laomedeia, Achernar, Alnilam, Schedar, Gacrux, Pulcherrima, Achird,
  Zubenelgenubi, Vindemiatrix, Sadachbia, Sadaltager, Sulafat. Default `Kore`
  ([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md),
  [fal](../../sources/fal.ai/gemini-3.8-flash-lite-tts/2026-10-26.md),
  [Replicate](../../sources/replicate.com/gemini-3.8-flash-lite-tts/2026-10-26.md)).
- **Extended Voice Library** — "Hundreds of additional voices" per the Gemini API guide, "150+"
  per the changelog, "more than 2,000 curated voices" per the Cloud card; queryable via
  `GET /v1beta/voices` with filters on language, region, accent, gender, pitch, persona and context.
  The three counts are unresolved
  ([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md),
  [release notes](../../sources/google.dev/gemini-3.8-flash-lite-tts-release-notes/2026-10-26.md),
  [Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-lite-tts-model-card/2026-10-26.md)).
- **Voice design** (text-described persona, `voice_...` ID) and **Voice replication** (clone from
  audio) both work on this ID and not on the 3.1 preview. Replication requires a **10–30 s reference
  clip plus a separate consent recording** in which the same adult speaker recites: "I am the owner of
  this voice and I consent to Google using this voice to create a synthetic voice model"
  ([replication](../../sources/google.dev/gemini-api-voice-replication/2026-10-26.md)).
- **Custom voice quotas:** 200 stored voices per project shared across design and replication, 1-year
  TTL refreshed by use; stateless `voicekey_...` keys expire in 7 days
  ([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md)).

### Languages

101 languages, auto-detected from the input text; no `language_code` parameter exists on this
generation (it was removed from the 3.1 schema)
([model page](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-page/2026-10-26.md),
[Replicate](../../sources/replicate.com/gemini-3.8-flash-lite-tts/2026-10-26.md)). The set is a
strict subset of the flagship's 130: the 29 missing are Banjar (Arab script), Bashkir, Bemba, Burmese,
Crimean Tatar, Dyula, Dzongkha, Finnish, Guarani, Igbo, Kabyle, Latgalian, Lithuanian, Luxembourgish,
Minangkabau (Latn script), Occitan, Pangasinan, Sindhi, Slovenian, Somali, Southern Sotho, Swahili,
Swati, Swedish, Tajik, Thai, Tigrinya, Tosk Albanian and Uyghur — derived here by set difference of
the two vendor tables, not stated by Google
([flagship page](../../sources/google.dev/gemini-3.8-flash-tts-model-page/2026-10-26.md)).

### Output formats and sample rate

| Format | `mime_type` | When | Spec |
| --- | --- | --- | --- |
| WAV | `audio/wav` | default, unary requests | RIFF header, 24 kHz mono 16-bit LE PCM |
| Raw PCM | `audio/l16` | default, streaming requests | headerless 24 kHz mono 16-bit LE PCM |
| Mu-law | `audio/mulaw` | opt-in | 8-bit G.711, telephony/IVR |
| A-law | `audio/alaw` | opt-in | 8-bit G.711, European telephony |

`sample_rate` is settable to 24000, 16000 or 8000 Hz
([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md)). Replicate adds `mp3`
as an output option (24 kHz mono WAV or mp3), which is a host transcode — the Gemini API's own format
list has no MP3 ([Replicate](../../sources/replicate.com/gemini-3.8-flash-lite-tts/2026-10-26.md)).
fal returns WAV only.

## Limitations and constraints

- **8,192 input / 16,384 output tokens.** Google labels the output figure a "Gemini API serving
  limit" ([model page](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-page/2026-10-26.md)).
  At the pricing page's own conversion of 25 audio tokens per second, 16,384 output tokens caps a
  single request at **≈655 s ≈ 10.9 minutes** of audio — a derived figure, not a documented one
  ([pricing](../../sources/google.dev/gemini-3.8-flash-lite-tts-pricing/2026-10-26.md)).
- **No character or duration limit is documented anywhere.** The only numeric ceilings are token
  limits and the 2-speaker / 200-voice quotas; a per-request character cap is neither stated nor
  denied ([guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md)).
- **Multi-speaker is capped at two and at prebuilt voices.** Custom voices need one request per turn,
  which also means the concatenation work (stripping the 44-byte RIFF header) is the caller's.
- **No caching, thinking, tool use, structured outputs, Live API, or search grounding.** Batch, Flex
  and Priority inference are the only consumption modes
  ([model page](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-page/2026-10-26.md)).
- **Free-tier prompts train Google's products.** The pricing page marks "Used to improve our
  products: Yes" for the free tier and "No" for paid, on every consumption mode
  ([pricing](../../sources/google.dev/gemini-3.8-flash-lite-tts-pricing/2026-10-26.md)).
- **Host gaps.** fal: 30 voices, WAV only, no design/replication, access-gated (`licenseType:
  private`). Replicate: 30 voices, WAV/mp3, no design/replication, 23 runs at capture. Neither
  documents rate limits or latency
  ([fal](../../sources/fal.ai/gemini-3.8-flash-lite-tts/2026-10-26.md),
  [Replicate](../../sources/replicate.com/gemini-3.8-flash-lite-tts/2026-10-26.md)).
- **Regional availability is `global` only on the Vertex route**, with no data-residency breakdown
  ([Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-lite-tts-model-card/2026-10-26.md)).
  The Gemini API page's regional table was not captured.

### Watermarking — unresolved

The only statement that this model's output is watermarked is Replicate's: "Every clip includes an
inaudible SynthID watermark that marks it as AI-generated"
([Replicate](../../sources/replicate.com/gemini-3.8-flash-lite-tts/2026-10-26.md)). Neither the
Gemini API TTS guide nor the Flash-Lite model page mentions SynthID or watermarking, and Google
DeepMind's first-party SynthID page scopes audio marking to **Lyria and NotebookLM podcast
generation** without naming Gemini TTS
([SynthID](../../sources/deepmind.google/synthid/2026-10-26.md)). The contradiction is left open: a
compliance pipeline should not assume vendor-side provenance marking on this model, and should not
assume its absence either.

## Access, pricing, licensing

### Billing basis

Billed **per token**, not per character: input text tokens plus output audio tokens, where "Audio
tokens correspond to 25 tokens per second of audio"
([pricing](../../sources/google.dev/gemini-3.8-flash-lite-tts-pricing/2026-10-26.md)).

| Route | Input | Output (audio) | Basis |
| --- | --- | --- | --- |
| Gemini API, standard | $0.50 /1M → $1.00 from 2027-01-01 | **$6.00 /1M → $12.00** | tokens; $0.0015 → $0.003 per 10 s |
| Gemini API, batch or flex | $0.25 /1M → $0.50 | $3.00 /1M → $6.00 | half of standard |
| Gemini API, priority | $0.90 /1M → $1.80 | $10.80 /1M → $21.60 | 1.8× standard |
| fal | — | $0.03 per 1,000 characters | per-character, partner proxy |
| Replicate | $0.50 /1M | $6.00 /1M | matches Google list price |

Derived from Google's own token/second note: standard-tier output costs **≈$0.009 per minute** of
audio until 2026-12-31 and **≈$0.018 per minute** after, versus ≈$0.0135 → $0.027 for the flagship.
fal's per-character price is ≈$0.03 per minute for typical English speech — roughly 3.3× Google's
list rate — so fal is the most expensive route captured, not a discount channel
([fal](../../sources/fal.ai/gemini-3.8-flash-lite-tts/2026-10-26.md)). Artificial Analysis normalises
it to $11.0 per 1M characters, above a naive $9.1 derivation from list prices, which suggests its
own character-to-token assumptions rather than a different price
([AA](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).

The **January 1, 2027 price doubling** applies to both 3.8 TTS models and is the single largest cost
risk for a pipeline built on this ID today.

### Licensing and commercial terms

- **No weights, no licence to review.** All four routes are hosted APIs; there is no open-weights
  release and no self-hosting path
  ([model page](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-page/2026-10-26.md)).
- **fal's `licenseType: "private"` is a host flag, not a Google grant**, and its endpoint is
  access-gated on fal's side
  ([fal](../../sources/fal.ai/gemini-3.8-flash-lite-tts/2026-10-26.md)).
- **Voice cloning is consent-gated at creation** (spoken consent statement from the same adult
  speaker), but no captured page says how consent is verified or how a disputed voice is handled
  ([replication](../../sources/google.dev/gemini-api-voice-replication/2026-10-26.md)).
- **Vertex route is a Pre-GA offering** subject to Google Cloud's Pre-GA terms, and may be used for
  production under those terms
  ([Cloud card](../../sources/cloud.google.com/gemini-3.8-flash-lite-tts-model-card/2026-10-26.md)).

## Unresolved questions

1. **Is it GA or Preview?** The Gemini API says GA (2026-09-22); the Vertex card says Preview
   (2026-09-28). Which is authoritative for a customer choosing a support window is unknown.
2. **Is output watermarked with SynthID?** Replicate says yes; Google's TTS docs are silent and
   DeepMind's SynthID page names only Lyria and NotebookLM for audio. Untested.
3. **What is the real per-request duration ceiling?** The 16,384-token output limit implies ~10.9
   minutes at 25 tokens/s, but no page states a duration, and no page states a character cap.
4. **How many voices are there really?** 30 prebuilt is consistent everywhere; the Extended Voice
   Library is "hundreds", "150+" and "more than 2,000" in three first-party documents.
5. **Do style strings and `speech_metadata` bill as input tokens?** The transcript is the billed
   input by implication, but no page defines the counting rule.
6. **Why is the measured gap to the flagship so small?** 24 Elo with overlapping intervals on
   Artificial Analysis, against a vendor story of a fidelity/acting tier difference. Either the
   flagship's advantage needs material the board does not sample (long-form stability, dialects,
   difficult pronunciation) or the tier is priced on throughput rather than quality. Both are
   consistent with the captured evidence.
7. **Does Replicate's listing represent Google-hosted inference or a copy?** Replicate bills exactly
   Google's list price, which is consistent with a passthrough, but the page does not say.
8. **Is the 2027 price doubling a promotional step or a list-price correction?** Both 3.8 TTS models
   double on 2027-01-01 while the 3.1 preview carries no dated step.

## Evidence status

Evidence floor: **met.** First-party: eight `google.dev` records (Lite model page, flagship model
page, catalogue, pricing, release notes, deprecations, TTS guide, Voice replication guide), one
`cloud.google.com` model card and one `deepmind.google` SynthID page. Independent hosts: fal
(catalogue, `llms.txt`, input schema, billing config) and Replicate (model page, README, embedded
billing config). Independent measurement: the Artificial Analysis Text-to-Speech leaderboard. All
captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capabilities are vendor or host documentation; prices are published schedules that agree
between Google and Replicate and diverge at fal; the only quality number is a third-party Elo from
someone else's arena.

Contradictions are preserved rather than resolved: GA vs Preview, the three voice-library counts, the
presence vs silence on SynthID, fal's per-character markup against Google's token price, and
Replicate's Hume-ranking claim against the Artificial Analysis board.

The next useful evidence would be a small reproducible test set: one script rendered on Google, fal
and Replicate and compared for speaker identity and prosody; a request long enough to hit the 16,384
output-token ceiling, to see whether it truncates or errors; a spectral check for an inaudible
watermark on each route's output; and the same paragraph in a language inside the 29-language gap
(Thai, Swedish) to confirm it is refused or degraded rather than silently transliterated.
