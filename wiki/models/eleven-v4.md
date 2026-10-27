# Eleven v4

ElevenLabs' text-to-speech flagship, launched **2026-09-28** as a two-variant family: Eleven v4
(`eleven_v4`, highest quality) and Eleven v4 Turbo (`eleven_v4_turbo`, ~100 ms median inference
latency). The vendor calls v4 "the first in a new generation of models" and positions it as a net
upgrade over Eleven v3 on quality, voice-cloning accuracy, audio tags and language coverage
([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md),
[changelog](../../sources/elevenlabs.com/eleven-v4-changelog/2026-10-26.md)). It is sold per character
at the same price as the model it supersedes, and it is served by at least two independent hosts.

The launch is inside the roster's one-year window (≥ 2025-10-26) by four weeks at the capture date,
so no out-of-window exception applies. No predecessor is re-dated here: Eleven v3 and Multilingual v2
are separate roster rows and separate models.

## Identity

- **Canonical name:** Eleven v4. **Model ID:** `eleven_v4`. **Variant:** Eleven v4 Turbo,
  `eleven_v4_turbo`. Both IDs are first-party
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **Vendor:** ElevenLabs (model lab; no third-party developer is credited).
- **Release:** 2026-09-28, both variants on the same day
  ([changelog](../../sources/elevenlabs.com/eleven-v4-changelog/2026-10-26.md)). fal's catalogue
  `date` for the two endpoints is the same calendar day — 2026-09-28T16:35Z — which is independent
  corroboration of the launch date rather than a copy of it
  ([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md)).
- **Host endpoints.** The roster row carried the discovery label "draft discovery" and named no
  endpoint; the verified endpoints are:

| Route | Endpoint | Notes |
| --- | --- | --- |
| ElevenLabs | `POST /v1/text-to-speech/{voice_id}` with `model_id: eleven_v4` | vendor's own sample code uses this ([API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)) |
| ElevenLabs | `POST /v1/text-to-dialogue` with `model_id: eleven_v4` | the route the launch changelog recommends ([Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md)) |
| fal | `elevenlabs/tts/eleven-v4`, `elevenlabs/tts/eleven-v4-turbo` | **not** `fal-ai/elevenlabs/tts/eleven-v4` ([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md)) |
| WaveSpeedAI | `POST https://api.wavespeed.ai/api/v3/elevenlabs/eleven-v4` (+ `-turbo`) | ([WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md)) |
| Replicate | none | `/elevenlabs/v4` and `/elevenlabs/v4-turbo` return 404 at capture ([negative record](../../sources/replicate.com/eleven-v4-not-listed/2026-10-26.md)) |

The fal endpoint-ID detail matters: ElevenLabs v4 is the first TTS family fal lists under the new
`elevenlabs/` namespace and the `text-to-speech` category, while v3, Multilingual v2 and Turbo v2.5
keep the older `fal-ai/elevenlabs/…` and `text-to-audio` forms. A reader who transposes the v3-style
path gets a bare endpoint ID with no catalogue record.

- **Siblings in the same family:** `eleven_v4_turbo` (this page), and the retained predecessors
  `eleven_v3` / `eleven_v3_conversational` and `eleven_multilingual_v2`. Deprecated models on the same
  vendor page are only `eleven_turbo_v2_5`, `eleven_turbo_v2` and `scribe_v1`
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **Identity ambiguity that remains:** ElevenLabs describes `eleven_v4` as a model "under active,
  continuous development" whose "behavior may shift over time" under the same ID
  ([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)). There is no
  snapshot or revision identifier anywhere in the corpus, so no claim on this page can be pinned to a
  v4 checkpoint — only to a capture date.

### Distinguishing v4 from v3 and Multilingual v2

| | Eleven v4 | Eleven v3 | Multilingual v2 |
| --- | --- | --- | --- |
| Model ID | `eleven_v4` | `eleven_v3` | `eleven_multilingual_v2` |
| Vendor status | current flagship | "previous generation" | "a previous generation" model |
| Languages claimed | 90+ (84 codes listed) | 70+ (85 codes listed) | 29 |
| Character limit | 10,000 | 5,000 | 10,000 |
| Price / 1K chars | $0.08 | $0.08 | $0.08 |
| Professional Voice Clone | supported, plus a v4-only `clone_strength` control | vendor says PVCs "weren't supported in v3" | not addressed on this page |
| Style / Speed sliders | not available | not addressed for v3 | `style` and `speed` are documented voice settings |
| SSML break tags | not supported | not supported | supported (the break-tag guidance excludes only v4 and v3) |

Sources: [models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md),
[landing page](../../sources/elevenlabs.com/eleven-v4-landing-page/2026-10-26.md),
[model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md).

Two things follow. First, **v4 is not a repackaging of v3**: different model IDs, different character
limits, a new accent-handling behaviour, a v4-only clone control, and the vendor calls v3 "previous
generation" in the same document. Second, **v4 costs exactly what v3 and Multilingual v2 cost** —
$0.08 per 1,000 characters, with Turbo at $0.04 — so the upgrade is price-neutral on the vendor's
list. The retired Turbo v2.5 is *not* the same thing as v4 Turbo despite the shared "Turbo" label:
v4 Turbo is a current model at $0.04, Turbo v2.5 is deprecated at $0.04.

One oddity in the same table undercuts the language claim. The enumerated v4 list contains **84**
codes; the enumerated v3 list contains **85** — it is a strict superset that adds only Chichewa
(`ny`). So "90+ languages" for v4 against "70+ languages" for v3 is a marketing contrast the
vendor's own enumerations do not support. The 90+ figure is only reachable by combining the models
page list with the seven extra languages named in the v4 model guide's FAQ
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)).

## Current assessment

The evidence supports a **current, generally available flagship**, not a preview. Three first-party
signals carry that: the launch changelog uses no preview or waitlist language; three weeks later
ElevenLabs made `eleven_v4_turbo` the **default** conversational TTS model for ElevenAgents and the
default dubbing voice; and the API pricing page badges both variants "New" at list price
([changelog](../../sources/elevenlabs.com/eleven-v4-changelog/2026-10-26.md),
[pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)). Hosts corroborate
availability: fal lists both endpoints `status: "public"`, `deprecated: false`, and WaveSpeed lists
them as normal catalogue entries.

What the evidence does **not** support is any quality ranking. The only number in the corpus is
ElevenLabs' own latency chart — v4 Turbo 150 ms time to first speech against Cartesia Sonic 3.6
(262 ms) and OpenAI GPT-4o mini TTS (814 ms) — with no methodology, region, text set or measurement
date attached ([landing page](../../sources/elevenlabs.com/eleven-v4-landing-page/2026-10-26.md)).
The voice-cloning comparison against v3 is paired audio samples, which this knowledge base cannot
evaluate. There is no WER, MOS, speaker-similarity score, or third-party re-measurement anywhere.

The most decision-relevant finding is not a capability at all: **the same model has three different
character ceilings depending on route.** The vendor advertises 10,000 characters for `eleven_v4`
(~10 minutes of audio); WaveSpeed enforces the same 10,000; fal hard-caps `text` at `maxLength: 5000`;
and the vendor's own preferred Text to Dialogue path recommends keeping total dialogue text at or
below **2,000** characters per request
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md),
[Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md)). A long-form
pipeline sized against the marketing number will fail on fal and will be unreliable on Text to
Dialogue.

## Documented capabilities

Everything in this section is vendor or host documentation. No direct tests were run.

### Speech synthesis and control surface

- **Two voice settings:** Stability (default 0.5) and Similarity (default 0.75), plus the API's
  shared `use_speaker_boost` flag. "Style and Speed sliders are not available in Eleven v4, and SSML
  is not supported"
  ([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)).
- **Professional Voice Clone extra:** a `clone_strength` slider (0–1), described in the API reference
  as applying "only to professional voice clones fine-tuned for the selected v4 model"; the vendor
  recommends starting at 0% ([API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)).
- **Audio tags.** Natural-language directions in square brackets — `[whispering]`, `[laughing]`,
  `[applause]`, `[gunshot]`, and "experimental" forms such as `[strong French accent]` and `[sings]`.
  The vendor says v4 "follows audio tags more reliably than earlier models", while warning that tags
  are "not perfect yet" and that "a tag can occasionally be interpreted as a request for a sound
  effect rather than a delivery instruction"
  ([Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md),
  [API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)).
- **IPA pronunciation.** v4 accepts IPA wrapped in forward slashes, e.g.
  `"/ˌbaɪoʊˈkemɪstri/"`, instead of the XML phoneme tags older models use; "more consistent than in
  previous models, but results can still vary by voice and phrase"
  ([API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)).
- **Multi-speaker dialogue.** Up to **10 unique voice IDs** per Text to Dialogue request and "no limit
  to the number of speakers" ([Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md)).
- **Long-form stitching.** `previous_text` / `next_text` (100 characters each) and
  `previous_request_ids` / `next_request_ids` (max 3 each) condition the model for continuity across
  separate requests — the mechanism behind the landing page's "stitch long-form audio without the
  seams" claim.
- **Audio effects.** `audio_effects` places the whole dialogue or utterance in a scene; dialogue
  effects are "available through the API only", and effects "don't change the cost of the request".
- **Timestamps.** fal exposes a `timestamps` flag returning character-level timing; the vendor's
  Text to Dialogue API has dedicated timestamp endpoints.

### Languages

The vendor claims "90+ languages" for the v4 family; the enumerated list on the models page contains
84 ISO codes, and the model guide's FAQ names seven more — Amharic, Fula (Pulaar), Lao, Luganda,
Shona, Sorani Kurdish and Wolof — without removing any of the 84. See the language-count discrepancy
under **Identity** for why the advertised figure does not follow from the enumerations.
`language_code` takes ISO 639-1 where one exists and ISO 639-3 for Asturian (`ast`), Cantonese
(`yue`), Cebuano (`ceb`) and Filipino (`fil`). The vendor concedes that "some languages are handled
more fluently than others"
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)).

### Voice cloning

Both cloning tiers are documented as supported, with v4 claimed as the most accurate generation yet:

- **Instant Voice Cloning** — "Upload a short sample, generally one to two minutes, and within seconds
  you have a voice you can use."
- **Professional Voice Cloning** — "fully supported in Eleven v4"; an existing PVC can be fine-tuned
  for v4 from My Voices. The landing page says PVCs "weren't supported in v3" and are "back" in v4
  ([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md),
  [landing page](../../sources/elevenlabs.com/eleven-v4-landing-page/2026-10-26.md)).

The vendor's own counter-claim deserves equal weight: "Eleven v4 may sound substantially different
from Eleven v3… you may still prefer how a voice sounded in Eleven v3", and because v4 captures the
source more faithfully it also captures its flaws — "clipping, plosives, uneven EQ, or jumps in
volume… are very likely in the training data for that voice"
([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)).

### Native accent handling — a deliberate behaviour change

When the generated language matches the reference voice's language, the accent is preserved. When it
differs, v4 generates fluent speech in the target language **without** carrying the source accent:

> if you clone a voice from a Korean speaker and generate English, Eleven v4 will produce natural,
> fluent English rather than English spoken with a Korean accent.

The vendor states this is intentional, that a toggle is "still a research project", and that "we do
not have a timeline". Workflows that depend on accented cross-language output must be re-tested
([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)).

### Output formats and sample rate

| Route | Formats | Top sample rate |
| --- | --- | --- |
| ElevenLabs TTS / Text to Dialogue | MP3 (32–192 kbps), PCM (S16LE), WAV, Opus, μ-law, A-law | 48 kHz (`pcm_48000`, `wav_48000`, `opus_48000`) |
| fal | MP3, PCM, Opus, μ-law, A-law (19 values) — no WAV | 48 kHz |
| WaveSpeed | MP3 only | not stated |

Default on every route is `mp3_44100_128`. Higher-bitrate MP3 (192 kbps) requires the Creator tier or
above, and 44.1 kHz PCM/WAV requires Pro or above
([API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md),
[Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md),
[fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md)).

### Determinism

`seed` (0–4294967295) is documented as "best effort… Determinism is not guaranteed" on both the
vendor API and fal. The Text to Dialogue FAQ is blunter: "The models are nondeterministic"
([API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md),
[Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md)).

### Latency

Vendor claim: median inference latency ~100 ms and ~150 ms time to first speech for v4 Turbo; ~280 ms
for v3 Conversational; ~75 ms for Flash v2.5. All are footnoted "excluding application & network
latency" ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
The comparative chart against Cartesia and OpenAI is vendor-run with no methodology, region, text set
or measurement date published — treat the ranking as a claim, not a measurement.

## Limitations and constraints

- **Duration and input limits.** 10,000 characters ≈ 10 minutes per request on the vendor TTS route;
  5,000 on fal; 2,000 total dialogue characters recommended on Text to Dialogue. No route publishes a
  hard audio-duration cap, and the Text to Dialogue figure is described as a reliability heuristic
  ("longer requests can terminate early in streaming responses or return a validation error"), not a
  rejection threshold.
- **No style, speed or SSML.** v4 removes control surfaces that the older models and the shared API
  expose: "Style and Speed sliders are not available in Eleven v4, and SSML is not supported", and
  "Eleven v4 and Eleven v3 do not support SSML break tags" while `<break time="x.xs" />` remains the
  documented pause mechanism for the models that do. Migrating a pipeline that leans on break tags or
  `speed` requires rewriting the prompt strategy around punctuation and audio tags
  ([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md),
  [API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)).
- **Accent loss across languages** by default, with no toggle (see above).
- **Audio tags are advisory.** "Audio tags guide delivery but do not guarantee an exact performance",
  and experimental tags "may be less consistent across different voices"
  ([WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md),
  [API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)).
- **The model moves under a fixed ID.** ElevenLabs states it will keep training and improving v4 after
  launch and recommends periodic re-testing. Reproducibility across months is therefore not
  promised, and `seed` does not fix it.
- **No weights, no self-hosting.** Every route is hosted and closed; fal marks the endpoints
  `hostingType: "proxy"` and `provider_type: "partner"`, i.e. forwarded to ElevenLabs rather than run
  by fal ([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md)).
- **fal cannot reach your own voices.** fal's schema exposes a `voice` string with 20 preset names
  (default "Rachel") and no documented voice-ID or cloning field; WaveSpeed accepts "Suggested voice
  name or custom voice ID". A pipeline that depends on a cloned voice is not portable across the two
  hosts as documented.
- **Output-format coverage differs by host.** WAV is unavailable on fal; anything but MP3 is
  unavailable on WaveSpeed.
- **Higher-quality audio is plan-gated** on the vendor route (192 kbps MP3 → Creator; 44.1 kHz
  PCM/WAV → Pro), so the $0.08 list price does not include the top formats on a cheap plan.
- **Text to Dialogue throughput is metered as sessions, not requests.** WebSocket connections hold a
  dialogue session for their lifetime (Free 14, Pro 70, Scale 105) and are rejected with
  `too_many_concurrent_requests` when exhausted; the vendor's own concurrency table has **no column
  for v4** on the request-based side ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **Watermarking is on and cannot be turned off in the API.** ElevenLabs embeds an inaudible
  watermark in "audio we generate"; no `watermark` parameter exists in either API reference, and the
  vendor publishes no opt-out. Only ElevenLabs' own Audio Detector can read it — "No other platforms
  can currently detect ElevenLabs watermarks"
  ([watermarking](../../sources/elevenlabs.com/eleven-v4-watermarking/2026-10-26.md)).
- **Enterprise-only features are mixed in with general ones.** Zero retention mode
  (`enable_logging=false`) is "only… for enterprise customers"; regional residency hosts (US, EU,
  India, Singapore) exist but their model coverage is not stated.
- **No independent quality evidence.** No benchmark, arena or third-party measurement of Eleven v4 was
  captured.

## Access, pricing, licensing

### Billing basis

**Per input character**, on all three routes — not per second of audio, not per request. fal's billing
block reads `billing_unit: "1000 characters"`; WaveSpeed states "Pricing is $0.08 per 1,000 input
characters, prorated according to the actual length of text" and counts "spaces, punctuation, and
inline audio tags" as billable ([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md)).

| Route | Eleven v4 | Eleven v4 Turbo | Rounding |
| --- | --- | --- | --- |
| ElevenLabs API (list) | $0.08 / 1K chars | $0.04 / 1K chars | not stated |
| fal | $0.08 / 1K chars | $0.04 / 1K chars | per 1,000-character unit |
| WaveSpeedAI | $0.08 / 1K chars | $0.04 / 1K chars | prorated per character, rounded up to $0.000001 |

Sources: [pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md).

**The three published rates are identical.** That is unusual in this knowledge base, where the same
generation typically varies 2–3× across routes, and it is the strongest pricing evidence on the page:
two independent hosts matching the vendor's list price to the cent. Practical cost on the routes that
accept the vendor's full input is $0.80 for a 10,000-character v4 request, or $0.40 on Turbo (fal
stops at 5,000 characters, so $0.40 / $0.20 there); WaveSpeed's own table gives $0.008 for 100
characters and $0.040 for 500, which is the prorated arithmetic.

The vendor also sells credits (Free 10,000; Starter $6/30,000; Creator $22/121,000; Pro $99/600,000;
Scale $299/1.8M; Business $990/6M) and states "Text to Speech 1 credit per character", but does not
reconcile credits with the USD-per-1K-character API price for v4
([pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)).

### Licensing and commercial terms

- **Output ownership:** "You retain ownership of any audio you generate."
- **Commercial rights:** "commercial usage rights are only available with paid plans. With a paid
  subscription, you may use generated audio for commercial purposes and monetize the outputs if you
  own the IP rights to the input content."
- **No weights licence exists** — there is nothing to license; the model is hosted-only.
- **Host licence fields are the host's assertion:** fal's `licenseType: "commercial"` describes use
  through fal, not an ElevenLabs licence grant.
- **Voice-cloning consent was not captured.** ElevenLabs' voice-cloning terms and the consent
  verification process are referenced by the product but no policy page was retrieved for this page,
  so nothing is claimed here about who may clone whom.

Source for ownership and commercial terms:
[Text to Dialogue FAQ](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md).

### Free regenerations

Two free regenerations per generation, same text and same parameters, **dashboard only** — not an API
feature, and not a billing guarantee
([Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md)).

## Unresolved questions

1. **Which endpoint is "the" Eleven v4 API?** The launch changelog routes v4 to Text to Dialogue and
   v4 Turbo to the Text to Dialogue WebSocket; the prompting guide calls `eleven_v4` through
   `text_to_speech.convert`; both hosts wrap it as a plain TTS endpoint. No source says whether the
   two paths produce identical audio.
2. **Is 10,000 or 2,000 characters the real ceiling?** The models page says 10,000 for `eleven_v4`,
   the Text to Dialogue docs say keep total dialogue text ≤ 2,000 for reliability, and fal enforces
   5,000. All three are first-party or host-enforced and none references the others.
3. **What is `eleven_v4_turbo`'s character limit?** It is absent from the vendor's character-limit
   table. WaveSpeed says 10,000; fal says 5,000.
4. **Does the ElevenLabs watermark survive on fal and WaveSpeed output?** Both proxy to the partner
   API, so it should; no source states it, and no test was run.
5. **Can a caller's own cloned voice be used through a host?** fal exposes preset names only;
   WaveSpeed advertises "custom voice ID" without explaining whose workspace it resolves in.
6. **Which v4 revision is being served?** The vendor says the model keeps changing under one ID and
   exposes no checkpoint. Cross-host or cross-month comparisons cannot be pinned.
7. **Is the 90+ language count real?** 84 codes are enumerated on one page and a different, larger set
   on another; no page reconciles them, and the vendor concedes "some languages are handled more
   fluently than others".
8. **How good is it, independently?** No benchmark, MOS, WER or preference study was captured. The
   only comparative number is a vendor-run latency chart.
9. **Why is v4 missing from Replicate** four weeks after launch, when v3, Flash v2.5, Turbo v2.5 and
   Multilingual v2 are all there?
10. **Do failed or empty generations bill?** No source states it.

## Evidence status

Evidence floor: **met.** First-party: eight ElevenLabs documents — models overview, the dedicated
Eleven v4 model guide, the dated changelog, the API pricing page, the v4 product landing page, the
Text to Dialogue capability page, the watermarking/Audio-Detector policy pages, and the Text to Speech
API reference plus prompting guide. Independent hosts: one fal record (catalogue, metadata API,
OpenAPI schema, price strings, `llms.txt`) and one WaveSpeedAI record (parameters, price table,
endpoint URL), plus a Replicate negative record establishing that v4 is not hosted there. All captured
2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules that
happen to agree across three publishers; quality and latency statements are the vendor's own, and the
only comparative numbers come from a vendor-run chart.

The next useful evidence would be a small reproducible test set against named endpoints and dates: the
same 1,000-character script through `eleven_v4` on ElevenLabs, fal and WaveSpeed, compared for
speaker identity and tag adherence; a 5,000- and a 10,000-character request on each route to confirm
where each ceiling actually bites; a Korean-cloned voice generating English to check the
accent-dropping behaviour; a PVC generation with `clone_strength` at 0 and 1; and a watermark check on
host-produced files using the ElevenLabs Audio Detector.
