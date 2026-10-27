# ElevenLabs Multilingual v2

ElevenLabs' **previous-generation multilingual text-to-speech model**, model ID
`eleven_multilingual_v2`, released **2023-08-22**
([launch post](../../sources/elevenlabs.com/eleven-multilingual-v2-launch/2026-10-26.md)). It supports
29 languages, 10,000 characters per request, instant and professional voice cloning, and it is still
the **default `model_id`** on ElevenLabs' primary text-to-speech endpoint — three years after launch
and after two newer generations shipped
([API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md)).

> **Out-of-window specialist exception.** The model launched **2023-08-22**, roughly three years
> before the roster's one-year window (launch on or after 2025-10-26). Its only host listing captured,
> fal's, is dated 2025-02-27 — also before the window. This page is retained as an out-of-window
> specialist model; no newer date is asserted for it. The vendor has not deprecated it, and it is not
> a repackaging of v3 or v4.

## Identity

- **Canonical name:** Eleven Multilingual v2. **Model ID:** `eleven_multilingual_v2`.
  Aliases in circulation: "ElevenLabs Multilingual v2" (roster label), "ElevenLabs TTS Multilingual
  v2" (fal title), "v2 Multilingual" (pricing-page card), "Multilingual v2" (docs prose).
- **Vendor:** ElevenLabs (model lab and sole developer; no third party is credited).
- **Original release:** 2023-08-22, first-party dateline on the launch post
  ([launch](../../sources/elevenlabs.com/eleven-multilingual-v2-launch/2026-10-26.md)). No changelog
  entry for that date was captured, and the post does not say whether launch was preview or GA.
- **Vendor status at capture:** *current but previous-generation.* The models page lists it in the
  main model table and calls it "a previous generation emotionally-aware speech synthesis model"; it
  is **absent** from the page's "Deprecated models" table, which names only `eleven_turbo_v2_5`,
  `eleven_turbo_v2` and `scribe_v1`
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)). The v4
  launch changelog announces no deprecation of it
  ([changelog](../../sources/elevenlabs.com/eleven-v4-changelog/2026-10-26.md)).

| Route | Endpoint | Notes |
| --- | --- | --- |
| ElevenLabs | `POST /v1/text-to-speech/{voice_id}` with `model_id: eleven_multilingual_v2` | also the endpoint's **default** `model_id` ([API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md)) |
| fal | `fal-ai/elevenlabs/tts/multilingual-v2` | roster label is correct as written ([fal](../../sources/fal.ai/elevenlabs-tts-multilingual-v2/2026-10-26.md)) |
| Replicate | `elevenlabs/v2-multilingual` | official ElevenLabs entry, 39.5K runs ([Replicate](../../sources/replicate.com/elevenlabs-v2-multilingual/2026-10-26.md)) |
| WaveSpeedAI | `elevenlabs/multilingual-v2` (per provider listing) | appears in WaveSpeed's ElevenLabs provider listing, but no multilingual-v2 endpoint page or price was retrieved ([WaveSpeed v4 record](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md)) |

The fal endpoint is the **old** `fal-ai/elevenlabs/…` namespace and the old `text-to-audio` category;
Eleven v4 is the only ElevenLabs TTS family on fal's newer `elevenlabs/…` / `text-to-speech` form
([fal v4 record](../../sources/fal.ai/eleven-v4/2026-10-26.md)). A reader who "fixes" this row's
endpoint to the v4 style gets a path with no catalogue record.

- **Same-name siblings that are different models.** ElevenLabs uses "multilingual v2" across several
  distinct IDs — `eleven_multilingual_v1`, `eleven_multilingual_sts_v2` (speech-to-speech voice
  changer) and `eleven_multilingual_ttv_v2` (text-to-voice designer) appear on the same vendor pages.
  The vendor's own `GET /v1/models` schema carries per-model flags (`can_do_text_to_speech`,
  `can_do_voice_conversion`) precisely because these are separate models
  ([List models](../../sources/elevenlabs.com/eleven-multilingual-v2-models-list-api/2026-10-26.md)).
  A search for "multilingual v2" can land on a voice changer; only `eleven_multilingual_v2` is this
  page.
- **No checkpoint identifier anywhere in the corpus.** Nothing pins a revision, so every claim here is
  scoped to the 2026-10-26 capture, not to a specific build.

### Distinguishing it from v3 and v4

| | Multilingual v2 | Eleven v3 | Eleven v4 |
| --- | --- | --- | --- |
| Model ID | `eleven_multilingual_v2` | `eleven_v3` | `eleven_v4` |
| Released | 2023-08-22 | not captured | 2026-09-28 |
| Vendor status | "a previous generation" model, not deprecated | "previous generation" | current flagship |
| Languages | 29, enumerated by code | 70+ (85 codes listed) | 90+ (84 codes listed) |
| Character limit | 10,000 | 5,000 | 10,000 |
| Price / 1K chars | $0.08 | $0.08 | $0.08 |
| `language_code` | documented as **not supported** | supported | supported |
| Style / speed settings | documented shared settings; fal exposes both | not addressed | "not available in Eleven v4" |
| SSML break tags | implied supported (the exclusion names only v4 and v3) | not supported | not supported |
| Professional Voice Clone | auto-trained on it for every PVC | vendor says PVCs "weren't supported in v3" | supported, with a v4-only `clone_strength` |

Sources: [models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md),
[API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md),
[voice settings and SSML](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md),
[voice cloning](../../sources/elevenlabs.com/eleven-multilingual-v2-voice-cloning/2026-10-26.md),
[v4 landing page](../../sources/elevenlabs.com/eleven-v4-landing-page/2026-10-26.md).

Two conclusions follow. First, **v2 is not a repackaging of v3 or v4**: different ID, one third of v4's
language coverage, a documented `language_code` restriction the newer models do not have, and PVC
support that v3 lacked. Second, **it is not simply worse** — v4 removed the style and speed settings
that v2-era pipelines use, and v2 has twice v3's character ceiling. Where v2 is behind on paper is
language count, the `language_code` parameter, and multi-speaker dialogue, which the v3 and v4 cards
offer and the v2 card does not.

## Current assessment

The evidence supports a **retained, still-billed, non-deprecated previous-generation model that
functions as production infrastructure** — not a preview, and not a museum piece. The decisive
evidence is not marketing: `eleven_multilingual_v2` is the default `model_id` of the
`/v1/text-to-speech/{voice_id}` endpoint, and every code sample on that reference page passes it
explicitly ([API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md)).
A caller who omits `model_id` today gets this model. Every PVC in every account is also auto-trained
on it ([voice cloning](../../sources/elevenlabs.com/eleven-multilingual-v2-voice-cloning/2026-10-26.md)).

The vendor's own positioning is contradictory, and the contradiction is worth keeping visible:

- The models page calls v4 "our state of the art speech synthesis model, delivering our highest
  quality audio" and calls Multilingual v2 "a previous generation" model
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- The Text to Speech capability page still says "Multilingual v2 delivers the highest quality audio
  with more nuanced expression", and Replicate's README repeats "the highest-quality model in the
  ElevenLabs lineup" while listing only v2, v2.5 and v3 as alternatives — i.e. both texts predate v4
  ([capabilities](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-capabilities/2026-10-26.md),
  [Replicate](../../sources/replicate.com/elevenlabs-v2-multilingual/2026-10-26.md)).

Read together: the "highest quality" sentences are stale copy, while the "previous generation" label
and the v4 model-selection guide (which still lists `eleven_multilingual_v2` alongside `eleven_v4`
for "Quality" and "Content creation") describe current intent. For quality-critical work the vendor's
own selection guide still names this model.

**What the evidence does not support is any quality ranking.** No benchmark, MOS, WER or preference
study for Multilingual v2 was captured, and no direct tests were run for this page. The one
comparative number in the corpus is not about this model at all: Replicate's guidance puts Turbo v2.5
at ~250 ms and Flash v2.5 at ~75 ms ([Replicate](../../sources/replicate.com/elevenlabs-v2-multilingual/2026-10-26.md)).
For v2 the vendor only says it "has a higher latency & cost per character than Flash models"
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).

The most decision-relevant finding is not a capability either: **both hosts that serve this model
charge 25% more than ElevenLabs does**, while fal charges the vendor's exact list price for the newer
Eleven v4. The older model is the marked-up one.

## Documented capabilities

Everything in this section is vendor or host documentation. **No direct tests were run.**

### Languages

29 languages, enumerated as ISO codes — the count is reproducible from the list rather than merely
asserted: `ar bg zh hr cs da nl en fil fi fr de el hi id it ja ko ms pl pt ro ru sk es sv ta tr uk`
([supported languages](../../sources/elevenlabs.com/eleven-multilingual-v2-supported-languages/2026-10-26.md)).
The docs add regional variants inside single codes — English (USA, UK, Australia, Canada), French
(France, Canada), Portuguese (Brazil, Portugal), Spanish (Spain, Mexico), Arabic (Saudi Arabia, UAE)
— so the count is of codes, not locales
([capabilities](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-capabilities/2026-10-26.md)).
Flash v2.5's 32 languages are these 29 plus Hungarian, Norwegian and Vietnamese; v2 is a strict
subset.

Unlike the v4 and v3 rows, there is no count-versus-enumeration gap here: 29 is what both the
launch post and every live page say, and 29 codes are listed.

### Expression, voice settings and long-form continuity

- Emotion comes from the text itself: "The models interpret emotional context directly from the text
  input… Voice settings like Stability and Similarity help control the consistency, while the
  underlying emotion comes from textual cues." Descriptive prose is **spoken aloud**, so "she said
  excitedly" must be trimmed from the output
  ([capabilities](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-capabilities/2026-10-26.md)).
- Voice settings are the shared object: `stability` 0.5, `similarity_boost` 0.75, `style` 0,
  `speed` 1.0 (range 0.7–1.2), plus `use_speaker_boost` default true
  ([API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md)).
  fal exposes `style` and `speed` for this model explicitly
  ([fal](../../sources/fal.ai/elevenlabs-tts-multilingual-v2/2026-10-26.md)); the vendor does not state
  per-model support, and its `can_use_style` flag was not readable without a key
  ([List models](../../sources/elevenlabs.com/eleven-multilingual-v2-models-list-api/2026-10-26.md)).
- Long-form continuity: `previous_text` / `next_text`, plus `previous_request_ids` /
  `next_request_ids` (max 3 each). The vendor pitches this model as "most stable on long-form
  generations" with a 10,000-character (~10 minute) ceiling.
- Pronunciation dictionaries: up to 3 locators per request. `apply_text_normalization`
  (`auto`/`on`/`off`) is available; ElevenLabs notes "The Multilingual v2 model does a better job of
  normalizing numbers" than Flash v2.5 and recommends it "for phone numbers and other cases where
  number normalization is important"
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- SSML break tags: the vendor's exclusion names only v4 and v3 ("Eleven v4 and Eleven v3 do not
  support SSML break tags"), which implies v2 still accepts them. **No captured page states v2 SSML
  support positively**, so treat this as an inference from the exclusion, not a documented feature
  ([voice settings and SSML](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)).

### Voice cloning

- **Instant Voice Cloning:** roughly 1–2 minutes of clean audio; each file ≥ 5 s, ≥ 10 s total.
- **Professional Voice Cloning:** 30–180 minutes of audio, 3–6 hours of fine-tuning, and — the
  model-specific part — "All Professional Voice Clones (PVCs) will automatically train on the Flash
  v2.5, Turbo v2.5 and **Multilingual v2** models"
  ([voice cloning](../../sources/elevenlabs.com/eleven-multilingual-v2-voice-cloning/2026-10-26.md)).
  So a cloned voice works with this model by default, with no opt-in step.
- `use_pvc_as_ivc` uses the instant-clone version of a professional clone "to improve expressiveness
  and reduce latency" ([API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md)).
- Third-party cloning is refused: "Even with their consent, you cannot clone someone else's voice.
  All Professional Voice Clones require a verification process to confirm that the voice belongs to
  you." Sharing happens by the owner creating and verifying a PVC, then issuing a link
  ([voice cloning](../../sources/elevenlabs.com/eleven-multilingual-v2-voice-cloning/2026-10-26.md)).

### Output formats and sample rate

| Route | Formats | Top sample rate |
| --- | --- | --- |
| ElevenLabs TTS | 28 enum values: MP3 (22.05/24/44.1 kHz, 32–192 kbps), PCM S16LE (8–48 kHz), WAV (8–48 kHz), Opus (48 kHz, 32–192 kbps), μ-law 8 kHz, A-law 8 kHz | 48 kHz (Opus, PCM, WAV) |
| fal | **not selectable** — no `output_format` field; documented example returns MP3 | not stated |
| Replicate | **not documented** — no `output_format` field | not stated |

Default is `mp3_44100_128`. Plan gates: "MP3 with 192kbps bitrate requires you to be subscribed to
Creator tier or above. PCM and WAV formats with 44.1kHz sample rate requires you to be subscribed to
Pro tier or above"
([API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md),
[capabilities](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-capabilities/2026-10-26.md)).
The capability page summarises codecs and rates but not the full enum; the reference has the
authoritative list.

### Watermarking

ElevenLabs "embeds watermarks into audio we generate", the mark is inaudible and adds "zero latency in
nearly all cases", and "No other platforms can currently detect ElevenLabs watermarks" — detection is
via ElevenLabs' own Audio Detector. There is no documented opt-out and no `watermark` parameter on the
TTS endpoint. The policy is stated for all ElevenLabs-generated speech, so it covers this model; the
page's exclusion is for *third-party models hosted by* ElevenLabs, not for ElevenLabs models hosted
elsewhere ([watermarking](../../sources/elevenlabs.com/eleven-v4-watermarking/2026-10-26.md),
[API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md)).

### Determinism

Output is nondeterministic. `seed` (0–4294967295) is "best effort… Determinism is not guaranteed" on
the vendor API; fal does not expose `seed` at all for this endpoint
([API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md),
[capabilities](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-capabilities/2026-10-26.md),
[fal](../../sources/fal.ai/elevenlabs-tts-multilingual-v2/2026-10-26.md)).

## Limitations and constraints

- **10,000 characters ≈ 10 minutes per request** on the vendor route
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)); Replicate
  restates the same limit ([Replicate](../../sources/replicate.com/elevenlabs-v2-multilingual/2026-10-26.md)).
  fal's schema sets `minLength: 1` and **no `maxLength`**, so the host publishes no ceiling and the
  effective limit on that route is untested
  ([fal](../../sources/fal.ai/elevenlabs-tts-multilingual-v2/2026-10-26.md)).
- **`language_code` is documented as unsupported, yet both hosts expose it.** The vendor reference
  says "This parameter is not supported for `multilingual_v2` models"; fal's schema documents the
  parameter with "An error will be returned if language code is not supported by the model"; Replicate
  exposes it with a default of `en`
  ([API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md),
  [fal](../../sources/fal.ai/elevenlabs-tts-multilingual-v2/2026-10-26.md),
  [Replicate](../../sources/replicate.com/elevenlabs-v2-multilingual/2026-10-26.md)). This is
  unresolved; do not build a language-routing pipeline on it without testing.
- **Only 29 languages**, one third of v4's advertised coverage. Language detection is implicit — the
  model infers the language from the text, since the explicit parameter is documented as unavailable.
- **Concurrency is halved relative to Flash.** The models page carries a "Concurrency Limit
  (Multilingual v2)" column: 2 concurrent requests on Free against 4 for Flash
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **Descriptive text is voiced**, not interpreted silently (see above) — a real constraint for
  LLM-generated scripts that embed stage directions.
- **Host control surfaces are narrower than the vendor's.** fal drops `output_format`, `seed`,
  `model_id`, pronunciation dictionaries, request-ID stitching, `use_pvc_as_ivc`, `use_speaker_boost`
  and `audio_effects`; Replicate drops `output_format`, `timestamps`, pronunciation dictionaries and
  request-ID stitching, and renames `text` to **`prompt`**
  ([fal](../../sources/fal.ai/elevenlabs-tts-multilingual-v2/2026-10-26.md),
  [Replicate](../../sources/replicate.com/elevenlabs-v2-multilingual/2026-10-26.md)). Code is not
  portable between the three routes.
- **Cloned voices are not documented as reachable through either host.** fal offers 20 preset names
  plus a free-form string, default "Rachel", with no voice-ID field; Replicate's `voice` is likewise a
  free-form string defaulting to `Rachel`. Neither page explains how a workspace voice resolves
  ([fal](../../sources/fal.ai/elevenlabs-tts-multilingual-v2/2026-10-26.md),
  [Replicate](../../sources/replicate.com/elevenlabs-v2-multilingual/2026-10-26.md)).
- **Top output quality is plan-gated** on the vendor route (192 kbps MP3 → Creator; 44.1 kHz PCM/WAV →
  Pro), and the higher-quality formats are unavailable on the hosts anyway.
- **Zero retention is enterprise-only**: `enable_logging=false` "may only be used by enterprise
  customers" ([API reference](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-api-reference/2026-10-26.md)).
- **Free-plan output cannot be used commercially** and requires attribution (see below).
- **No weights, no self-hosting.** fal marks the endpoint `hostingType: "proxy"`,
  `provider_type: "partner"`, `is_partner_api: true` — forwarded to ElevenLabs, not run by fal.
- **No independent quality evidence.** Nothing in the corpus measures this model.

## Access, pricing, licensing

### Billing basis

**Per input character**, on all three routes. Vendor list price is **$0.08 per 1,000 characters**
([pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)). Replicate meters
`character_input_count` ([Replicate](../../sources/replicate.com/elevenlabs-v2-multilingual/2026-10-26.md));
fal bills per 1,000-character unit
([fal](../../sources/fal.ai/elevenlabs-tts-multilingual-v2/2026-10-26.md)).

| Route | Price / 1K chars | vs vendor list |
| --- | --- | --- |
| ElevenLabs API | $0.08 | — |
| fal | **$0.10** | +25% |
| Replicate | **$0.10** ("or 10,000 characters for $1") | +25% |

**Both hosts mark this model up by a quarter, and neither marks up Eleven v4.** fal charges $0.08 for
`eleven_v4` — the vendor's exact list price
([fal v4](../../sources/fal.ai/eleven-v4/2026-10-26.md)) — while charging $0.10 for
`eleven_multilingual_v2`. So on fal the 2023 model is the more expensive of the two per character,
and a 10,000-character request costs $1.00 on either host versus $0.80 direct.

ElevenLabs also sells credits, and states the conversion for this model explicitly: "For V2
Multilingual models, 1 text character equals 1 credit"
([pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)). Plan prices: Free
$0/10,000 credits; Starter $6/30,000; Creator $22/121,000; Pro $99/600,000; Scale $299/1.8M; Business
$990/6M.

Free regenerations: up to 2 per generation, same text and parameters, and the vendor says
regenerations "solve roughly half of issues with quality"
([capabilities](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-capabilities/2026-10-26.md)).

### Licensing and commercial terms

- **Output ownership:** "You retain ownership of any audio you generate."
- **Commercial use is plan-gated, not model-gated:** "All paid plans include a commercial license,
  provided you're not using Beta Services"; content generated during a paid subscription "can be used
  commercially, and indefinitely".
- **Free plan is not commercial:** it "does **not** include a commercial license and cannot be used
  for any commercial purpose", and free or signed-out output must be attributed by putting
  "elevenlabs.io" or "11.ai" in the title.

Sources: [commercial use policy](../../sources/elevenlabs.com/eleven-multilingual-v2-commercial-use/2026-10-26.md),
[capabilities FAQ](../../sources/elevenlabs.com/eleven-multilingual-v2-tts-capabilities/2026-10-26.md).

- **No weights licence exists** — the model is hosted-only, so there is nothing to license.
- **fal's `licenseType: "commercial"`** describes use through fal, not an ElevenLabs licence grant.
- **Voice-cloning consent:** PVCs are self-only with a verification step; sharing is by owner-issued
  link ([voice cloning](../../sources/elevenlabs.com/eleven-multilingual-v2-voice-cloning/2026-10-26.md)).
  The Service-Specific Terms and Prohibited Use Policy are referenced by the policy page but were not
  captured.

## Unresolved questions

1. **Is `language_code` supported on this model or not?** The vendor says no; fal documents it with an
   error contract; Replicate defaults it to `en`. All three are first-party or host-authoritative and
   none references the others. This is the single most consequential open question for multilingual
   pipelines.
2. **What does `GET /v1/models` report for `eleven_multilingual_v2`?** The authoritative per-model
   flags — `maximum_text_length_per_request`, `can_use_style`, `serves_pro_voices`,
   `requires_alpha_access`, `character_cost_multiplier` — need an API key this knowledge base does not
   hold.
3. **Does the watermark survive fal and Replicate output?** Both proxy to the ElevenLabs partner API,
   so it should; no source states it and no test was run.
4. **What audio format does fal return?** No `output_format` field exists and the example URL is
   `.mp3`, but the codec, sample rate and bitrate of the returned file are undocumented.
5. **What is the character ceiling on the hosts?** fal sets no `maxLength` and Replicate restates
   10,000 in prose without a schema that enforces or reports it, so the effective ceiling on either
   host is unknown.
6. **Is "highest quality" current or stale copy?** The capability page and Replicate's README say this
   is the highest-quality model in the lineup; the models page gives that title to v4. No date on
   either page resolves which is current.
7. **Why do both hosts mark up v2 but not v4?** Nothing in the corpus explains the pricing
   difference; it may be a legacy-contract artefact.
8. **How good is it, independently?** No MOS, WER, speaker-similarity or preference study was
   captured for any ElevenLabs TTS model, and none for this one.
9. **Will it be deprecated?** It is absent from the deprecated table and no changelog entry mentions
   it, but no vendor lifecycle/support-window policy was captured either. The 2023-era launch post
   promised a speed update "in the upcoming days" that this corpus never identifies.
10. **Does v2 support SSML break tags?** Implied by the v4/v3 exclusion, never stated positively.
11. **Which revision is served?** No checkpoint identifier anywhere, and no captured page documents any
    post-2023 model update, so whether the served model has changed since launch is unknown.
12. **Do failed or empty generations bill?** No source states it.

## Evidence status

Evidence floor: **met.** First-party: seven ElevenLabs records captured for this page — the
2023-08-22 launch post, the Text to Speech capability page, the Text to Speech API reference, the
Professional Voice Cloning guide, the commercial-use policy FAQ, the supported-languages help page and
the `GET /v1/models` reference — plus existing ElevenLabs records cited for shared claims: the models
overview, the API pricing page, the watermarking/Audio-Detector policy, and the v4 prompting guide,
changelog and landing page for the v3/v4 comparison. Independent hosts: one fal record (catalogue,
metadata API, OpenAPI schema, `llms.txt`, billing payload) and one Replicate record (model page,
README, embedded billing config). All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules; the only
latency figures in the corpus are Replicate's prose for *other* models (Turbo v2.5, Flash v2.5).

The next useful evidence would be a small reproducible test set against named endpoints and dates: the
same 1,000-character multilingual script through `eleven_multilingual_v2` on ElevenLabs, fal and
Replicate, compared for speaker identity and prosody; an explicit `language_code` on all three routes
to settle question 1; a 5,000- and a 10,000-character request on fal to find where its ceiling
actually bites; an inspection of the returned file's codec and sample rate on both hosts; and a
watermark check on host-produced files with the ElevenLabs Audio Detector.
