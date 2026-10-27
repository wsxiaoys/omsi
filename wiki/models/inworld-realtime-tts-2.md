# Inworld Realtime TTS-2

Inworld AI's current text-to-speech family: `inworld-tts-2` (flagship, steerable) and
`inworld-tts-2-flash` (latency/cost tier), announced **2026-05-05** and carrying a general-availability
label of **2026-08-31** on the vendor's own model page
([release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md),
[model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md)). It replaces the TTS-1.5
generation, which the vendor now marks deprecated without an end-of-life date
([models page](../../sources/inworld.ai/tts-models/2026-10-26.md)). On the independent Artificial
Analysis leaderboard captured the same day, TTS-2 ranks **7th** (1267 ± 14) and TTS-2 Flash **13th**
(1218 ± 13) — the vendor's "#1" claim is a May-2026 snapshot that the board no longer supports
([AA](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).

The roster labels for this row ("Realtime TTS-2", "TTS-2 Flash") are Artificial Analysis display
names; the canonical IDs are `inworld-tts-2` and `inworld-tts-2-flash`. The separate roster row for
"Inworld TTS" with endpoint `fal-ai/inworld-tts` is a different generation — fal's endpoint is titled
"Inworld TTS-1.5 Max"
([fal](../../sources/fal.ai/inworld-tts/2026-10-26.md)) — and nothing in fal's catalogue serves TTS-2.

## Identity

- **Canonical names and IDs:** Realtime TTS-2 = `inworld-tts-2`; Realtime TTS-2 Flash =
  `inworld-tts-2-flash`. Both IDs appear verbatim in the vendor's model table, feature comparison and
  API examples ([models page](../../sources/inworld.ai/tts-models/2026-10-26.md),
  [language support](../../sources/inworld.ai/tts-language-support/2026-10-26.md),
  [WebSocket guide](../../sources/inworld.ai/tts-synthesize-speech-websocket/2026-10-26.md)).
- **Vendor:** Inworld AI. No source in the corpus attributes the model to another developer, and the
  vendor describes it as first-party ("We built each layer ourselves",
  [model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md)).
- **Aliases in circulation:** "Realtime TTS 2.0" and `inworld/realtime-tts-2` (Replicate,
  [record](../../sources/replicate.com/inworld-realtime-tts-2/2026-10-26.md)); `inworld-ai/realtime-tts-2`
  (DeepInfra, [record](../../sources/deepinfra.com/inworld-realtime-tts-2/2026-10-26.md)); "TTS-2" and
  "TTS 2.0" in partner quotes on the vendor page; "Inworld Realtime TTS-2"/"TTS-2 Flash" on
  Artificial Analysis.
- **Siblings:** `inworld-tts-1.5-max`, `inworld-tts-1.5-mini` (previous generation, deprecated, still
  served by fal and Replicate), `inworld-tts-1`, `inworld-tts-1-max` (discontinued 2026-06-15,
  auto-routed) ([models page](../../sources/inworld.ai/tts-models/2026-10-26.md)). No TTS-2 Pro/Max
  tier exists in any captured catalogue.
- **In-window:** yes. 2026-05-05 is inside the roster's one-year window (≥ 2025-10-26).

### Dates, and where they disagree

| Date | Event | Source |
| --- | --- | --- |
| 2026-05-04T22:17Z | DeepInfra creates `inworld-ai/realtime-tts-2`, in the same minute as the 1.5 renames | [DeepInfra](../../sources/deepinfra.com/inworld-realtime-tts-2/2026-10-26.md) |
| ~2026-05 | Replicate creates `inworld/realtime-tts-2` ("Model created 5 months, 3 weeks ago") | [Replicate](../../sources/replicate.com/inworld-realtime-tts-2/2026-10-26.md) |
| 2026-05-05 | Release note: "Launched Realtime TTS-2 (`inworld-tts-2`)" | [release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md) |
| 2026-08-09 | `inworld-tts-2-flash` released | [release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md) |
| 2026-08-31 | Model page header: "General availability · August 31, 2026" | [model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md) |
| "Aug 2026" | Artificial Analysis "release" column for **both** TTS-2 and TTS-2 Flash | [AA](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md) |

The May launch and the August GA label are not reconcilable from the corpus: both hosts served the
model from early May, so a May launch with an August GA (or an August re-labelling of the page) are
both consistent with the evidence, and no first-party text explains which. The AA "release" column
matching August for both variants suggests the evaluator dates from GA, not first availability.

### One page or two

TTS-2 and TTS-2 Flash meet two of the wiki's three split tests: both are obtainable, and the
difference is material — Flash lacks steering and Professional Voice Cloning, is 5× faster on the
vendor's own metric, and costs 40% less
([models page](../../sources/inworld.ai/tts-models/2026-10-26.md)). The third test is weak: the only
variant-specific evidence outside vendor copy is one AA row, and every vendor page that describes
language coverage, limits, formats and cloning describes both together. They are kept here as
variant-scoped sections; a split is warranted once Flash has its own host or independent record.

## Current assessment

TTS-2 is a real successor generation, not a repackaging of TTS-1.5. The differences the vendor
documents are structural rather than cosmetic: natural-language steering instead of a fixed emotion
enum, `deliveryMode` instead of `temperature`, conditioning on prior-turn **audio** inside the
Realtime API, and a language expansion from 15 languages to 623 codes
([models page](../../sources/inworld.ai/tts-models/2026-10-26.md),
[language support](../../sources/inworld.ai/tts-language-support/2026-10-26.md),
[generating audio](../../sources/inworld.ai/tts-generating-audio/2026-10-26.md)). The vendor says
migration from 1.5 is "changing the model identifier, no other code changes"
([model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md)) — which is about API
compatibility, not about behaviour.

It is **current, GA, and the vendor's default**, while TTS-1.5 is deprecated and unpriced on the
vendor's own pricing page ([pricing](../../sources/inworld.ai/pricing/2026-10-26.md)). The strongest
independent signal is the AA board: TTS-2 sits in the 5–8 rank interval, roughly 66 Elo below the top
two and 49 above Flash — a mid-table position, not the "#1" the vendor's page claims.

## Documented capabilities

All of the following is vendor documentation or vendor marketing unless marked otherwise. No direct
tests were run for this page.

### Steering (TTS-2 only)

Bracketed natural-language instructions — `[say excitedly]`, `[whisper in a hushed style]`,
`[speak as if barely holding back rage]` — cover articulation, intonation, volume, pitch, range,
speed, vocal style and non-verbals; a single-property vocabulary (`[very loud]`, `[say in a low tone]`,
`[very fast]`) is also documented
([model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md),
[Replicate](../../sources/replicate.com/inworld-realtime-tts-2/2026-10-26.md)). Inline non-verbals
(`[laugh]`, `[sigh]`, `[breathe]`, `[clear throat]`, `[cough]`, `[yawn]`) work on **both** models.
Since 2026-08-06 a tag "stays in force until you change it", with a new `[reset]` tag; the vendor
flags this as a behaviour change and explicitly exempts `inworld-tts-1.5-max`/`-mini`
([release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md)).

The Flash column of the models page marks steering unsupported, and the release notes restate that
"Steering instructions and Professional Voice Cloning are supported on `inworld-tts-2` only — use it
when you need directed, contextually aware delivery."

### Delivery control

`deliveryMode` (`STABLE`, `BALANCED`, `CREATIVE`) is "Only supported by `inworld-tts-2`. The field is
ignored on other models", while `temperature` is "Not supported by `inworld-tts-2`"
([API reference](../../sources/inworld.ai/tts-synthesize-speech-api/2026-10-26.md),
[generating audio](../../sources/inworld.ai/tts-generating-audio/2026-10-26.md)). The vendor also
sells three named stability modes through Voice Design (Expressive/Balanced/Stable)
([model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md)). Talking speed is
0.5–1.5 with 1.0 native.

### Conversational context

Inside the Realtime API, "the model takes the actual audio of the prior turns of the exchange as
input, not just a transcript" and conditions the next response on it
([model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md)). On the TTS routes the
weaker equivalent is `synthesisContext`: up to 5 previous requests, 2,000 characters combined, and
"Context text is not billed" ([API reference](../../sources/inworld.ai/tts-synthesize-speech-api/2026-10-26.md)).
The WebSocket transport carries the same context per session and uses it for language auto-detection
of short strings ([WebSocket guide](../../sources/inworld.ai/tts-synthesize-speech-websocket/2026-10-26.md)).
Only the Realtime API's audio conditioning is unique to TTS-2; `synthesisContext` is text.

### Languages

The vendor's language page is the authoritative count: **623 BCP-47 codes over 470 languages**, split
into Tier 1 (15 languages, "most extensively evaluated"), Tier 2 (79, "fully supported … results can
vary more") and Tier 3 (376, "not evaluated … best-effort", with no text normalization)
([language support](../../sources/inworld.ai/tts-language-support/2026-10-26.md)). Both variants
share the same coverage. Cross-lingual synthesis aims for native delivery without the voice's original
accent; `languageSettings.candidates` restricts auto-detection to ≤10 languages; Voice Localization
re-cuts a voice for a target language but "is currently only supported for voices where the original
audio was in English".

Four different language claims exist for the same model, in order of publication:

| Claim | Source |
| --- | --- |
| "15 languages, plus experimental support for 90+ additional languages" | release note, 2026-05-05; Replicate readme |
| "over 100 languages" | vendor model page and FAQ; Replicate tagline |
| "200+ languages and locales" | vendor models page and docs index |
| 623 codes / 470 languages in three tiers | vendor language page |

The progression is undated on every page, so whether it is growth over time or inconsistent copy
cannot be settled. What is stable across all four is that **15 languages** are the quality tier.

### Voice cloning

Instant voice cloning works from "as little as 3 seconds of audio", up to a 30-second prompt limit
(applies to voices cloned on or after 2026-08-15), one file, `wav`/`mp3`/`webm`, 12 MB maximum,
longer samples auto-trimmed to 30 s
([instant voice cloning](../../sources/inworld.ai/tts-instant-voice-cloning/2026-10-26.md)). The
vendor's own model page states a different range — "5–15 seconds, clean, single speaker" — and is
undated ([model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md)). Professional
Voice Cloning (Beta, asynchronous training on more audio) is `inworld-tts-2`-only. The Portal asks
the operator to "Confirm you have the rights to clone the voice"; no verification step is documented.

Host portability is contested on Replicate: the readme says a caller's clones "aren't usable here",
while the input schema says `voice_id` accepts "a custom cloned voice ID"
([Replicate](../../sources/replicate.com/inworld-realtime-tts-2/2026-10-26.md)).

### Output formats and sample rates

The TTS API accepts `MP3` (default), `LINEAR16`, `WAV`, `PCM`, `OGG_OPUS`, `FLAC`, `ALAW`, `MULAW`,
with `sampleRateHertz` in [8000, 48000]; a requested rate that differs from the model's native rate is
converted, and no native rate is published for either variant
([API reference](../../sources/inworld.ai/tts-synthesize-speech-api/2026-10-26.md),
[generating audio](../../sources/inworld.ai/tts-generating-audio/2026-10-26.md)). The Realtime API
path is fixed: "PCM16, 24kHz mono, base64"
([model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md)). Replicate exposes four
containers (`mp3`, `wav`, `ogg_opus`, `flac`) and rates 8–48 kHz defaulting to 48 kHz
([Replicate](../../sources/replicate.com/inworld-realtime-tts-2/2026-10-26.md)).

Timestamps (word/character alignment, visemes usable for lipsync) are available on both variants and
claimed for every supported language; `timestampTransportStrategy: ASYNC` trades timestamp order for
lower time-to-first-audio ([API reference](../../sources/inworld.ai/tts-synthesize-speech-api/2026-10-26.md),
[WebSocket guide](../../sources/inworld.ai/tts-synthesize-speech-websocket/2026-10-26.md)).

### Transports

| Route | Limit | Notes |
| --- | --- | --- |
| REST `POST /tts/v1/voice` | 2,000 chars | complete file in one response |
| HTTP streaming `:stream` | 4,000 chars | NDJSON chunks |
| WebSocket `/v1/tts/synthesize:websocket` | 2,000 chars **per message** | only transport that accepts raw LLM tokens via `SENTENCE_BOUNDARY`, which "supports `inworld-tts-2` and `inworld-tts-2-flash`" and returns `INVALID_ARGUMENT` on other models |
| OpenAI-compatible `POST /v1/audio/speech` | same as streaming | `mp3`/`opus`/`flac`/`wav`/`pcm` + SSE, base URL `https://api.inworld.ai/v1` |
| Async | 100,000 chars/job (10,000 on On-Demand) | **Preview**, signed-URL delivery |
| Batch | many requests, one job | **Preview**, "Costs 20% less per character" |

Source: [synthesize speech guide](../../sources/inworld.ai/tts-synthesize-speech-guide/2026-10-26.md),
[WebSocket guide](../../sources/inworld.ai/tts-synthesize-speech-websocket/2026-10-26.md),
[release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md). Character counts are UTF-16
code units, and the metered count is not reduced by cancelling a request that has already been
accepted.

### Latency

| Model | Vendor figure | Basis |
| --- | --- | --- |
| `inworld-tts-2` | 100 ms TTFB | "P90 time to first audio byte, measured server-side — excludes network latency" |
| `inworld-tts-2-flash` | 20 ms TTFB | same footnote; "5× faster than `inworld-tts-2`" |
| `inworld-tts-2` | "Sub-200ms first chunk" / "Sub-200ms median time-to-first-audio for the TTS layer alone" | model page, no percentile stated |

Sources: [models page](../../sources/inworld.ai/tts-models/2026-10-26.md),
[model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md). The two are not
reconcilable without knowing whether "sub-200ms median" or "100 ms P90" is the harder figure, and
neither page gives a measurement date, region, text length or voice. **No independent latency
measurement exists in this corpus**: the WebSocket page publishes no ms figure, the AA capture records
scores with no latency column, and both host endpoints are non-streaming.

## Limitations and constraints

- **Host coverage is thin and feature-poor.** fal serves no TTS-2 endpoint at all; Replicate serves
  the flagship only, with `temperature` (which the vendor says TTS-2 does not support) and no
  `deliveryMode`, `synthesisContext`, or streaming; DeepInfra carries the flagship only and still
  describes it as "an early access preview ahead of full launch"
  ([fal](../../sources/fal.ai/inworld-tts/2026-10-26.md),
  [Replicate](../../sources/replicate.com/inworld-realtime-tts-2/2026-10-26.md),
  [DeepInfra](../../sources/deepinfra.com/inworld-realtime-tts-2/2026-10-26.md)). The vendor's own
  availability list (Cloudflare, DeepInfra, GMI Cloud, LiveKit, Stream, VoiceRun) omits both fal and
  Replicate ([model page](../../sources/inworld.ai/realtime-tts-2-launch/2026-10-26.md)).
- **No host serves TTS-2 Flash**, so its 20 ms claim and its cheaper price are vendor-only.
- **2,000 characters is the practical ceiling** on the default call and on every host; the 100,000-
  character async path and the 20%-cheaper batch path are both marked Preview.
- **Language quality is tiered.** 376 of 470 languages are explicitly unevaluated with no text
  normalization, and only 15 are in the top tier.
- **Predecessor support is undefined.** TTS-1.5 Max/Mini are "deprecated and not recommended for new
  projects" with no shutdown date; TTS-1 requests "are automatically routed to newer models" without
  saying which ([models page](../../sources/inworld.ai/tts-models/2026-10-26.md)).
- **Cloning governance is a checkbox.** No cloning policy page, retention statement, or dispute
  process is published; the only gate is "Confirm you have the rights to clone the voice"
  ([instant voice cloning](../../sources/inworld.ai/tts-instant-voice-cloning/2026-10-26.md)).
- **No watermarking or content-provenance mechanism** is documented on any page in the corpus.
- **Vendor quality claims are unverifiable as stated.** The model page's "#1 on Artificial Analysis"
  table is a May-2026 snapshot; the 2026-10-26 board puts TTS-2 7th and Flash 13th, with Eleven v4
  Turbo and v4 first and second ([AA](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).

## Access, pricing and licensing

Vendor list prices are per 1M input characters and tier-discounted
([pricing](../../sources/inworld.ai/pricing/2026-10-26.md)):

| Plan | Realtime TTS-2 | Realtime TTS-2 Flash |
| --- | --- | --- |
| On-Demand (pay as you go) | $25 | $15 |
| Creator ($25/mo) | $20 | $10 |
| Builder ($100/mo) | $17.50 | $9 |
| Developer ($300/mo) | $15 | $8 |
| Growth ($1,500/mo) | $12.50 | $7 |
| Enterprise | "As low as $5" | "Sub-$5" |

On-Demand includes "up to 70 minutes of TTS". Concurrency runs 5 → 500 by tier; custom-voice and
professional-clone quotas scale with the plan. Billing is on processed UTF-16 input characters,
counted even when a request is cancelled after acceptance
([API reference](../../sources/inworld.ai/tts-synthesize-speech-api/2026-10-26.md)).

Host rates differ from the vendor's and from each other: Replicate bills **$25/1M** with a documented
"Price cut: $35/M → $25/M chars"; DeepInfra bills **$35/1M** — the highest route in the corpus, $10/M
above Inworld's own list. Artificial Analysis's normalised $20.8/M (TTS-2) and $10.4/M (Flash) are
third-party estimates, not list prices
([Replicate](../../sources/replicate.com/inworld-realtime-tts-2/2026-10-26.md),
[DeepInfra](../../sources/deepinfra.com/inworld-realtime-tts-2/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).

**Licensing:** closed API only — no weights, checkpoints or model licence are published anywhere in
the corpus. "Commercial license" is a plan feature on every tier including pay-as-you-go; Zero Data
Retention is available on both variants, with HIPAA/BAA, SLA/DPA and EU/India data residency as
Enterprise add-ons ([pricing](../../sources/inworld.ai/pricing/2026-10-26.md),
[models page](../../sources/inworld.ai/tts-models/2026-10-26.md)). The vendor terms govern permitted
use; this page did not analyse them.

## Unresolved questions

1. **May launch vs August GA.** Was TTS-2 generally available from 2026-05-05, or was May a
   preview/beta with GA on 2026-08-31? DeepInfra's "early access preview ahead of full launch" copy
   hints at the latter, but the vendor's May release note says "Launched" and neither host carries a
   preview badge.
2. **Which latency figure is real.** "Sub-200ms median" and "100 ms P90" cannot both describe the
   same configuration; no percentile-consistent, independently measured number exists.
3. **Language count trajectory.** Is 623 codes a post-GA expansion of the 15+90 launch set, or was
   the launch copy simply conservative? No page dates the change.
4. **Cloning sample length.** 5–15 s (model page) vs 3–30 s (docs, post-2026-08-15 rule). Which
   applies to a clone created today?
5. **TTS-1 auto-routing target.** "Requests to those two models are automatically routed to newer
   models" — 1.5 Max/Mini or TTS-2? This decides what an old integration silently becomes.
6. **Whether hosts serve the GA snapshot**, and whether Replicate's `temperature` path still behaves
   as documented now that the vendor lists temperature as unsupported on TTS-2.
7. **Watermarking and provenance.** Nothing published; unverifiable either way.

## Evidence status

- **Floor met.** First-party: vendor models page, language-support page, WebSocket guide, API
  reference, generating-audio page, instant-voice-cloning page, release notes, pricing page and the
  TTS-2 model page. Independent hosts: Replicate (schema and billing config) and DeepInfra (catalogue
  entry and rate). Independent evaluation: Artificial Analysis text-to-speech leaderboard.
- **No direct tests were run** for this page. Nothing here reports a latency, quality, refusal or
  format measurement made by us; the only independent quality number is AA's blind-preference Elo,
  which measures preference, not accuracy, latency or robustness.
- **Weakest links.** All latency, language-coverage and quality-improvement figures are vendor-run and
  undated; both host endpoints are non-streaming, so the model's headline realtime behaviour is
  unverified outside vendor copy; fal — the host that carries the previous generation — serves
  nothing for this one.
- Contradictions preserved rather than resolved: the two latency statements, the four language
  counts, the two cloning sample ranges, the GA-vs-launch date gap, and Replicate's readme/schema
  disagreement on cloned voices.
