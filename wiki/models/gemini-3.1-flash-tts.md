# Gemini 3.1 Flash TTS

Google's low-latency, steerable text-to-speech model, launched as `gemini-3.1-flash-tts-preview` on
**2026-04-15** and already superseded: the vendor calls it a "legacy preview model", names the 3.8
TTS pair as replacements, and has scheduled it for shutdown on **2026-11-17**
([changelog](../../sources/google.dev/gemini-api-changelog-tts/2026-10-26.md),
[model card](../../sources/google.dev/gemini-3.1-flash-tts-model-page/2026-10-26.md),
[deprecations](../../sources/google.dev/gemini-api-deprecations-tts/2026-10-26.md)). It is the middle
generation between Gemini 2.5 TTS (2025-05-20) and Gemini 3.8 TTS (GA 2026-09-22). fal still lists it
as `status: active` and Replicate as an official model with 1.8M runs; neither host carries a
deprecation notice.

The roster row names "Gemini 3.1 Flash TTS" with endpoint `fal-ai/gemini-3.1-flash-tts`. Both are
real: the display name is Google's own catalogue label and the fal slug is fal's
([models catalogue](../../sources/google.dev/gemini-api-models/2026-10-26.md),
[fal](../../sources/fal.ai/gemini-3.1-flash-tts/2026-10-26.md)). The canonical model ID carries a
`-preview` suffix that no host uses in its slug.

## Identity

- **Canonical name:** Gemini 3.1 Flash TTS. **Model ID:** `gemini-3.1-flash-tts-preview`. The card
  lists exactly one version string — no dated snapshot, no second revision
  ([model card](../../sources/google.dev/gemini-3.1-flash-tts-model-page/2026-10-26.md)).
- **Vendor:** Google (Gemini API; also exposed through Google Cloud / Gemini Enterprise Agent
  Platform). Nothing in the corpus names a different developer.
- **Aliases:** "Gemini 3.1 Flash Tts" (fal display name), `google/gemini-3.1-flash-tts` (Replicate
  slug). fal's own description calls it "Newest audio model from Google" — stale, since fal also
  hosts the 3.8 endpoints.
- **Siblings:** `gemini-2.5-flash-preview-tts` / `gemini-2.5-pro-preview-tts` (predecessors, Cloud IDs
  `gemini-2.5-flash-tts` / `gemini-2.5-pro-tts`); `gemini-3.8-flash-tts` and
  `gemini-3.8-flash-lite-tts` (successors). No `gemini-3.1-flash-lite-tts` or `gemini-3.1-pro-tts`
  exists in any captured catalogue.
- **In-window:** yes. 2026-04-15 is inside the roster's one-year window (≥ 2025-10-26).

### Release dates disagree inside first-party documentation

| Source | Date it gives |
| --- | --- |
| Changelog, "Launched Gemini 3.1 Flash TTS Preview" | **2026-04-15** |
| Deprecations table, "Release date" | **2026-02-26** |
| Model card, "Latest update" | April 2026 |

The 48-day gap is unresolved. Two host timestamps fall on the April date and none on February:
fal's `date` is 2026-04-16 and Replicate's model object `created_at` is 2026-04-15T19:17Z
([fal](../../sources/fal.ai/gemini-3.1-flash-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/gemini-3.1-flash-tts/2026-10-26.md)). The page treats
2026-04-15 as the obtainable launch date and keeps the February figure as a documented
contradiction — a February announcement with an April public launch would explain it, but no source
in the corpus says so.

### Lifecycle

| Date | Event |
| --- | --- |
| 2026-04-15 | Launch, preview, Gemini API + fal (2026-04-16) + Replicate (2026-04-15) |
| 2026-06-17 | Streaming supported for this model via `streamGenerateContent` / `stream: true` |
| 2026-09-22 | `gemini-3.8-flash-tts` and `gemini-3.8-flash-lite-tts` GA; Lite described as the replacement |
| 2026-11-17 | Scheduled shutdown ("earliest possible date") |

Sources: [changelog](../../sources/google.dev/gemini-api-changelog-tts/2026-10-26.md),
[deprecations](../../sources/google.dev/gemini-api-deprecations-tts/2026-10-26.md).

### Host endpoints

| Route | Endpoint | Status at capture | Notes |
| --- | --- | --- | --- |
| Gemini API | `gemini-3.1-flash-tts-preview` | legacy preview, shutdown 2026-11-17 | Batch API only extra consumption tier |
| Google Cloud (Cloud TTS / Gemini Enterprise) | `gemini-3.1-flash-tts-preview` | listed as Preview | no dedicated Vertex model card; 404 on all three URL patterns tried |
| fal | `fal-ai/gemini-3.1-flash-tts` | `status: active`, `license_type: commercial` | `date` 2026-04-16, `updated_at` 2026-08-26 |
| Replicate | `google/gemini-3.1-flash-tts` | `is_official: true`, 1.8M runs | created 2026-04-15, version 2026-06-19 |

Sources: [model card](../../sources/google.dev/gemini-3.1-flash-tts-model-page/2026-10-26.md),
[Cloud TTS](../../sources/cloud.google.com/gemini-tts-cloud-text-to-speech/2026-10-26.md),
[fal](../../sources/fal.ai/gemini-3.1-flash-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/gemini-3.1-flash-tts/2026-10-26.md).

## Gemini 2.5 TTS vs 3.1 vs 3.8

| | 2.5 Flash / Pro TTS (preview) | **3.1 Flash TTS (preview)** | 3.8 Flash / Flash-Lite TTS |
| --- | --- | --- | --- |
| Launch | 2025-05-20 (expressivity update 2025-12-10) | 2026-04-15 | 2026-09-22 |
| IDs (Gemini API) | `gemini-2.5-flash-preview-tts`, `gemini-2.5-pro-preview-tts` | `gemini-3.1-flash-tts-preview` | `gemini-3.8-flash-tts`, `gemini-3.8-flash-lite-tts` |
| IDs (Cloud) | `gemini-2.5-flash-tts`, `gemini-2.5-pro-tts` | same `-preview` ID on both | 3.8 IDs are Enterprise-API-only |
| Voices | 30 | 30 | 30 prebuilt + Extended Voice Library (150+) |
| Voice design / replication | — | **—** | yes |
| Languages | same shared table | 78 codes in the API guide; 87 locale rows on Cloud (24 GA) | "over 130" (Flash) / "over 100" (Lite) |
| Streaming | no | **yes, from 3.1** | yes |
| Default unary output | raw PCM `audio/l16` | **raw PCM `audio/l16`** (24 kHz mono 16-bit) | WAV `audio/wav` |
| Delivery control | prose prompt + `[tags]` | prose prompt + `[tags]` | `speech_metadata` + angle-bracket `<tags>` |
| Price /1M tokens (in/out) | $0.50/$10.00 (Flash), $1.00/$20.00 (Pro) | **$1.00/$20.00** | $0.90/$10.80, then $1.80/$21.60 from 2027-01-01 |
| Status | access-limited, not deprecated | **deprecated, shutdown 2026-11-17** | current |

Sources: [changelog](../../sources/google.dev/gemini-api-changelog-tts/2026-10-26.md),
[pricing](../../sources/google.dev/gemini-api-pricing-tts/2026-10-26.md),
[Cloud TTS pricing](../../sources/cloud.google.com/text-to-speech-pricing/2026-10-26.md),
[live guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md),
[archived guide](../../sources/archive.org/gemini-api-speech-generation-2026-08-09/2026-10-26.md).

Three conclusions. First, **3.1 is a real generation step, not a repackaging**: it added streaming
(absent on 2.5), raised the price of the Flash tier to the Pro rate, and kept the 30-voice,
prose-prompt surface. Second, **3.1 did not add voice design or voice replication** — those arrive
with 3.8, so a reader looking for custom voices gets nothing from this model that 2.5 lacked. Third,
**3.1 is priced at 2.5 Pro parity** ($20/1M output) while its successor is cheaper ($10.80), so the
successor is both newer and cheaper per token.

## Current assessment

**A deprecated, still-hosted middle generation, roughly three weeks from its vendor shutdown date.**
The vendor's position is unambiguous: "legacy preview model … migrate to Gemini 3.8 Flash TTS or
Gemini 3.8 Flash-Lite TTS", plus a shutdown row of 2026-11-17
([model card](../../sources/google.dev/gemini-3.1-flash-tts-model-page/2026-10-26.md),
[deprecations](../../sources/google.dev/gemini-api-deprecations-tts/2026-10-26.md)). The live TTS
guide no longer contains a single 3.1 request example
([live guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md)).

Both independent hosts contradict that status by omission: fal marks the endpoint `status: active`
with `license_type: commercial` and no deprecation flag, and Replicate carries no notice at all while
reporting 1.8M runs. That is a host choosing to keep selling an endpoint, not evidence of support.

There is **no independent quality measurement of 3.1** in the corpus. The 2026-10-26 Artificial
Analysis TTS board lists no Gemini 3.1 row; its two Gemini rows are 3.8 Flash TTS (5th, 1280 ± 14) and
3.8 Flash-Lite TTS (8th, 1256 ± 13)
([Artificial Analysis](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).
Nothing here should be read as a quality ranking of 3.1 itself.

## Documented capabilities

All of the following is vendor or host documentation. **No direct tests were run for this page.**

### Voices

30 prebuilt voices, each a name plus a one-word character, listed for the whole TTS family (so the
same 30 names apply to the 2.5 models): Zephyr (Bright), Puck (Upbeat), Charon (Informative), Kore
(Firm), Fenrir (Excitable), Leda (Youthful), Orus (Firm), Aoede (Breezy), Callirrhoe (Easy-going),
Autonoe (Bright), Enceladus (Breathy), Iapetus (Clear), Umbriel (Easy-going), Algieba (Smooth),
Despina (Smooth), Erinome (Clear), Algenib (Gravelly), Rasalgethi (Informative), Laomedeia (Upbeat),
Achernar (Soft), Alnilam (Firm), Schedar (Even), Gacrux (Mature), Pulcherrima (Forward), Achird
(Friendly), Zubenelgenubi (Casual), Vindemiatrix (Gentle), Sadachbia (Lively), Sadaltager
(Knowledgeable), Sulafat (Warm)
([archived guide](../../sources/archive.org/gemini-api-speech-generation-2026-08-09/2026-10-26.md)).
fal's `voice` enum lists exactly those 30 values, and Cloud TTS adds that "all voices for Gemini 3.1
Flash TTS are in Preview" ([fal](../../sources/fal.ai/gemini-3.1-flash-tts/2026-10-26.md),
[Cloud TTS](../../sources/cloud.google.com/gemini-tts-cloud-text-to-speech/2026-10-26.md)).

No custom-voice path: the live guide's capability table gives 3.1 a dash for both voice design and
voice replication, which 3.8 has
([live guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md)).

### Multi-speaker

Two speakers, with the speaker names supplied in the request and reused as prefixes in the
transcript: "each speaker (up to 2)"
([archived guide](../../sources/archive.org/gemini-api-speech-generation-2026-08-09/2026-10-26.md)).
fal exposes this as a `speakers` array of `{speaker_id, voice}` pairs whose aliases "must be
alphanumeric with no whitespace" ([fal](../../sources/fal.ai/gemini-3.1-flash-tts/2026-10-26.md)).
Replicate's published schema has no multi-speaker input at all, so the capability is unreachable on
that route ([Replicate](../../sources/replicate.com/gemini-3.1-flash-tts/2026-10-26.md)).

### Languages

Four different counts, none reconciled with the others:

| Source | Count | Shape |
| --- | --- | --- |
| Gemini API guide, 2026-07-30 revision | **78** | BCP-47 codes, one flat list for the whole TTS family |
| Google Cloud Gemini-TTS reference | **87** | locale rows with launch stage: 24 GA, 63 Preview |
| fal `language_code` enum | **89** | locale values incl. "Arabic (World)", "Spanish (Latin America)" |
| Replicate readme | "70+" | prose |

The lists agree on content (all include Cebuano, Konkani, Maithili and Mandarin) and differ mainly on
whether regional variants count separately
([archived guide](../../sources/archive.org/gemini-api-speech-generation-2026-08-09/2026-10-26.md),
[Cloud TTS](../../sources/cloud.google.com/gemini-tts-cloud-text-to-speech/2026-10-26.md),
[fal](../../sources/fal.ai/gemini-3.1-flash-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/gemini-3.1-flash-tts/2026-10-26.md)). Language is detected
automatically when not specified. For non-English transcripts the vendor still recommends English
audio tags.

### Delivery control

3.1 uses the prose-prompt model: an "Audio Profile", a "Scene" and "Director's Notes" written into
the prompt, plus bracketed inline tags — `[whispers]`, `[laughs]`, `[sigh]`, `[cough]`, `[gasp]` —
with the vendor noting "there is no exhaustive list on what tags do and don't work"
([archived guide](../../sources/archive.org/gemini-api-speech-generation-2026-08-09/2026-10-26.md)).
fal splits the same capability into `prompt` + `style_instructions` and adds a `temperature`
(default 1); Replicate exposes `text` + `prompt` and documents pause lengths for `[short pause]`
(~250 ms), `[medium pause]` (~500 ms) and `[long pause]` (~1000 ms+)
([fal](../../sources/fal.ai/gemini-3.1-flash-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/gemini-3.1-flash-tts/2026-10-26.md)).

The vendor's own migration guide defines what 3.8 changed, and therefore what 3.1 was: "Gemini 3.8
TTS treats input text strictly as a verbatim transcript", with delivery moved into `speech_metadata`
and inline tags reduced to angle-bracket vocal events
([live guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md)). Migration to 3.8
is therefore not behaviour-preserving: prompts must be restructured, and the default container
changes from raw PCM to WAV.

### Streaming

Added 2026-06-17 and first available on this model: "Streaming is supported for Text-to-Speech (TTS)
models starting with version 3.1"
([changelog](../../sources/google.dev/gemini-api-changelog-tts/2026-10-26.md),
[archived guide](../../sources/archive.org/gemini-api-speech-generation-2026-08-09/2026-10-26.md)).
Cloud TTS lists streaming encodings for 3.1 as PCM (default), ALAW, MULAW and OGG_OPUS
([Cloud TTS](../../sources/cloud.google.com/gemini-tts-cloud-text-to-speech/2026-10-26.md)). Neither
fal nor Replicate exposes a streaming mode.

### Output formats and sample rate

| Route | Formats | Default | Sample rate / depth |
| --- | --- | --- | --- |
| Gemini API | `audio/l16` raw PCM only | headerless PCM, caller wraps in WAV | 24 kHz, mono, 16-bit LE |
| Google Cloud | unary: LINEAR16, ALAW, MULAW, MP3, OGG_OPUS, PCM; streaming: PCM, ALAW, MULAW, OGG_OPUS | LINEAR16 (unary), PCM (streaming) | 24 kHz (`sampleRateHertz: 24000`) |
| fal | `wav`, `mp3`, `ogg_opus` | `mp3` | 24 kHz, 16-bit mono (WAV) |
| Replicate | not selectable in the schema | audio file output | not stated |

Sources: [live guide](../../sources/google.dev/gemini-api-speech-generation/2026-10-26.md) (the
`audio/l16` default for pre-3.8 models), [Cloud
TTS](../../sources/cloud.google.com/gemini-tts-cloud-text-to-speech/2026-10-26.md),
[fal](../../sources/fal.ai/gemini-3.1-flash-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/gemini-3.1-flash-tts/2026-10-26.md).

The Gemini API's and Cloud TTS's format lists disagree: the API names only `audio/l16` for this
generation, while Cloud TTS offers MP3 and OGG_OPUS containers. The likely explanation is that Cloud
TTS performs the container encoding and the Gemini API returns raw samples, but no captured page
says so.

### Batch

Batch API is supported on the Gemini API at half the standard per-token price; Flex and Priority are
not
([model card](../../sources/google.dev/gemini-3.1-flash-tts-model-page/2026-10-26.md),
[pricing](../../sources/google.dev/gemini-api-pricing-tts/2026-10-26.md)).

## Limitations and constraints

- **Input limits are stated twice, in different units, and do not reconcile.** The model card gives
  8,192 input / 16,384 output tokens. The July 2026 guide says "A TTS session has a context window
  limit of **32k tokens**". Cloud TTS gives 4,000 bytes per field, 8,000 bytes for text + prompt, and
  a **~655-second output ceiling with truncation**
  ([model card](../../sources/google.dev/gemini-3.1-flash-tts-model-page/2026-10-26.md),
  [archived guide](../../sources/archive.org/gemini-api-speech-generation-2026-08-09/2026-10-26.md),
  [Cloud TTS](../../sources/cloud.google.com/gemini-tts-cloud-text-to-speech/2026-10-26.md)).
  Replicate enforces exactly the Cloud numbers (4,000 / 4,000 / 8,000 bytes, "roughly 655 seconds"),
  which is the strongest corroboration that they apply to this model
  ([Replicate](../../sources/replicate.com/gemini-3.1-flash-tts/2026-10-26.md)). fal publishes no
  length cap at all.
- **Four model-specific failure modes are documented by the vendor**: output "may not always strictly
  match the selected speaker"; "speech quality and consistency may begin to drift" beyond a few
  minutes, so transcripts should be chunked; the model "occasionally returns text tokens instead of
  audio tokens, causing the server to fail the request with a 500 error", requiring retry logic; and
  vague prompts can trip the speech classifier, yielding `PROHIBITED_CONTENT` or the model reading
  the director's notes aloud
  ([archived guide](../../sources/archive.org/gemini-api-speech-generation-2026-08-09/2026-10-26.md)).
  These are vendor statements about its own model, not measured rates.
- **Text-only in, audio-only out.** No tools, no caching, no structured outputs, no thinking, no
  Live API ([model card](../../sources/google.dev/gemini-3.1-flash-tts-model-page/2026-10-26.md)).
- **Shutdown in 22 days.** 2026-11-17 is the "earliest possible" retirement date; the vendor does not
  say whether requests will fail or be re-routed, and neither host has published a migration notice
  ([deprecations](../../sources/google.dev/gemini-api-deprecations-tts/2026-10-26.md)).
- **Host feature gaps.** No streaming on either host; no multi-speaker on Replicate; no voice design or
  replication anywhere; fal adds a `temperature` control that the vendor documentation does not list.
- **Watermarking is not documented for this model.** The TTS guide, the model card, the pricing pages
  and both host schemas are silent. Google's SynthID page says the technology watermarks "images,
  audio, text or video", but the page itself covers only SynthID Text, names no model, and never
  states that Gemini TTS output is watermarked; no detector or opt-out is exposed on any route
  ([SynthID](../../sources/google.dev/synthid-watermarking/2026-10-26.md)). Treat the watermark status
  as **unverified**.
- **No weights, no self-hosting.** Every route is a closed hosted endpoint; no licence for model
  weights exists to check. fal's `license_type: commercial` and Replicate's `is_official` are host
  statements about their own service, not grants from Google.

## Access, pricing, licensing

### Billing basis differs by route

| Route | Basis | Rate | Implied per minute of audio |
| --- | --- | --- | --- |
| Gemini API (standard) | per token | $1.00 /1M text in, **$20.00 /1M audio out** | ≈ $0.03 |
| Gemini API (batch) | per token | $0.50 /1M text, $10.00 /1M audio | ≈ $0.015 |
| Google Cloud | per token | $1.00 /1M text, $20.00 /1M audio; no free allowance | ≈ $0.03 |
| fal | per character | **$0.05 /1,000 characters** ($50 /1M chars) | not derivable |
| Replicate | per token | **$2.00 /1M input**, **$0.04 /1,000 output** ($40 /1M audio) | ≈ $0.06 |

Sources: [pricing](../../sources/google.dev/gemini-api-pricing-tts/2026-10-26.md),
[Cloud TTS pricing](../../sources/cloud.google.com/text-to-speech-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/gemini-3.1-flash-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/gemini-3.1-flash-tts/2026-10-26.md).

The vendor's own footnote supplies the audio conversion — "Audio tokens correspond to 25 tokens per
second of audio" — so $20/1M output tokens is $0.0005 per second, $0.03 per minute. **Replicate
charges exactly 2× Google on both sides** ($2.00 vs $1.00 input, $40 vs $20 output per 1M tokens),
i.e. ≈$0.001 per second of audio. Replicate's page also displays a "$0.0001 per second" headline and a
`p50price` of $0.00052; the headline is a tenth of the rate its own token billing implies and the two
figures are not reconciled on the page.

fal's character basis cannot be compared to a token basis without a characters-per-token ratio that
Google does not publish. One cross-check: Artificial Analysis lists 3.8 Flash TTS at $16.5/1M
characters against a vendor list of $10.80/1M audio tokens, implying ≈1.53 characters per token; at
that ratio 3.1's $20/1M tokens is ≈$30/1M characters, making fal's $50/1M characters roughly 1.6×
the vendor rate. That is an estimate built on another model's ratio, not a measurement
([Artificial Analysis](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).

### Terms

The free tier exists on the Gemini API ("Free of charge", with "Used to improve our products: Yes")
and is absent on Cloud ("Not available"). Commercial use is not separately licensed: fal labels the
endpoint "Commercial use" and `license_type: commercial`, and Replicate marks the model official.
No first-party terms page was captured for this model, so output ownership, redistribution and
prohibited-use language are unverified here.

## Unresolved questions

1. **Was 3.1 announced in February and launched in April?** The deprecations table says 2026-02-26;
   the changelog says 2026-04-15; both host timestamps agree with April. No source explains the gap.
2. **What is the real input ceiling?** 8,192 tokens, a 32k-token session context, 8,000 bytes, and
   ~655 seconds of output are all first-party and none is stated in the same units as another.
3. **Is the output watermarked?** No TTS-specific statement exists; SynthID's scope page is generic and
   covers only SynthID Text in detail.
4. **What happens on 2026-11-17?** No first-party notice describes rejection versus auto-routing, and
   neither host has said whether its slug survives.
5. **Do the hosts serve the launch checkpoint?** No vendor revision identifier exists; Replicate cut a
   version on 2026-06-19 and fal last touched its metadata on 2026-08-26, and neither says what
   changed.
6. **Does Cloud TTS's MP3/OGG_OPUS output mean the Gemini API also supports containers?** The two
   first-party format lists disagree and no page reconciles them.
7. **Is the 32k session context shared with 2.5?** The sentence sits in a family-level limitations
   section, so it may not be 3.1-specific.

## Evidence status

Evidence floor: **met.** First-party: the model card, the live TTS guide, an archived (2026-07-30)
revision of the same guide, the release notes, the deprecations table, the Gemini API price list, the
Cloud TTS Gemini-TTS reference and the Cloud TTS price list. Independent hosts: fal (catalogue
metadata, input schema, price string, sibling endpoints) and Replicate (page, readme, embedded
billing config and schema). Third-party: the Artificial Analysis TTS leaderboard, which contains no
3.1 row. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base: capabilities are vendor or host documentation, prices are published schedules that differ by up
to 2× for the same model, and the documented failure modes are the vendor's own claims without rates.

The largest gap is that the vendor's live documentation has moved to 3.8, so the 3.1 request surface
is only fully described by an archived revision and by two host schemas — and the two host schemas
differ from each other (multi-speaker present on fal, absent on Replicate; `temperature` on fal only).

The next useful evidence would be a small reproducible set against named endpoints: the same 500-byte
script through `fal-ai/gemini-3.1-flash-tts` (Kore, WAV), `google/gemini-3.1-flash-tts` (Kore) and
`gemini-3.1-flash-tts-preview` directly, comparing container, sample rate, bit depth, duration and
speaker identity; a watermark check on each produced file; a 4,000-byte request to confirm the byte
cap outside Replicate; and a repeat after 2026-11-17 to see what the shutdown actually does to each
route.
