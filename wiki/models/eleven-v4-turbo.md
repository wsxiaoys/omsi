# Eleven v4 Turbo

ElevenLabs' low-latency variant of Eleven v4, launched **2026-09-28** on the same day as the
flagship: `eleven_v4_turbo`, median inference latency ~100 ms, **$0.04 per 1,000 characters** — half
the price of `eleven_v4` ([changelog](../../sources/elevenlabs.com/eleven-v4-changelog/2026-10-26.md),
[pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)). The vendor's stated
integration path is the **Text to Dialogue WebSocket**, not the request/response TTS endpoint
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)). Three weeks
after launch it became the **default** conversational TTS model for ElevenAgents and the default
dubbing voice ([changelog](../../sources/elevenlabs.com/eleven-v4-changelog/2026-10-26.md)).

The launch is inside the roster's one-year window (≥ 2025-10-26) by roughly a month at the capture
date, so no out-of-window exception applies and no date is re-dated here.

The single most decision-relevant fact is an independent one: on Artificial Analysis' Speech Arena
the two variants are **statistically tied** — v4 Turbo 1333 ± 16 at $40 per 1M characters, v4
1333 ± 16 at $80 per 1M — so the cheaper, faster variant measured no worse in that arena
([AA leaderboard](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).
That is one arena's preference vote, not a capability ceiling; see **Independent quality** below.

## Identity

- **Canonical name:** Eleven v4 Turbo. **Model ID:** `eleven_v4_turbo`
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **Vendor:** ElevenLabs. No third-party developer is credited anywhere in the corpus.
- **Aliases in circulation:** "v4 Turbo", "Eleven V4 Turbo" (fal group label and WaveSpeed page
  title), `elevenlabs/tts/eleven-v4-turbo` (fal endpoint), `elevenlabs/eleven-v4-turbo` (WaveSpeed
  path). "Turbo" alone is ambiguous in this vendor's line: `eleven_turbo_v2_5` is a **deprecated**
  model from 2024-07-19 sold at the same $0.04 rate, unrelated to v4 Turbo
  ([Turbo v2.5 launch](../../sources/elevenlabs.com/eleven-turbo-v2-5-launch/2026-10-26.md),
  [models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
  [pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)).
- **Dates.** Launched 2026-09-28 alongside `eleven_v4`
  ([changelog](../../sources/elevenlabs.com/eleven-v4-changelog/2026-10-26.md)). fal's catalogue
  timestamps are the same calendar day (`date` 2026-09-28T16:35:30.936Z, `publishedAt`
  2026-09-28T17:46:16.574Z), which corroborates rather than copies the vendor date
  ([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md)). Artificial Analysis lists the release as
  **2026-09-28** as well
  ([AA per-entry record](../../sources/artificialanalysis.ai/minimax-speech-2.8-hd-leaderboard/2026-10-26.md)).
  Promoted to ElevenAgents' default conversational TTS model and the default dubbing voice on
  **2026-10-19** ([changelog](../../sources/elevenlabs.com/eleven-v4-changelog/2026-10-26.md)).
- **Host endpoints.** The roster row names no host; the verified routes are:

| Route | Endpoint | Notes |
| --- | --- | --- |
| ElevenLabs | `wss://api.elevenlabs.io/v1/text-to-dialogue/stream-input` with `model_id=eleven_v4_turbo` | the vendor's stated path ([WebSocket reference](../../sources/elevenlabs.com/text-to-dialogue-websocket-api-reference/2026-10-26.md)) |
| ElevenLabs | `POST /v1/text-to-dialogue` with `model_id` | the HTTP dialogue route behind the socket; its reference does not enumerate model IDs ([Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md)) |
| ElevenLabs | `POST /v1/text-to-speech/{voice_id}` with `model_id: eleven_v4_turbo` | implied by the model table and the pricing page, **not** demonstrated by any captured sample |
| fal | `elevenlabs/tts/eleven-v4-turbo` (+ `/stream`) | **not** `fal-ai/elevenlabs/…`; `status: public`, `deprecated: false`, `hostingType: proxy` ([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md)) |
| WaveSpeedAI | `POST https://api.wavespeed.ai/api/v3/elevenlabs/eleven-v4-turbo` | MP3 only, asynchronous ([WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md)) |
| Replicate | none | `/elevenlabs/v4-turbo` returned **404** at capture (checked 2026-10-26) |

- **Siblings:** `eleven_v4` (the quality tier, same family), and the retained predecessors
  `eleven_v3` / `eleven_v3_conversational` and `eleven_multilingual_v2`. The vendor's Deprecated table
  names only `eleven_turbo_v2_5`, `eleven_turbo_v2` and `scribe_v1`; v4 Turbo is not on it
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).

### Why this is a separate page from Eleven v4

The wiki skill splits only when both variants are obtainable, the difference changes the
recommendation, and variant-specific evidence exists. All three hold: both are sold and hosted today
by the vendor, fal and WaveSpeed; the price, the socket constraints and the default-role differ; and
Artificial Analysis scores `eleven_v4_turbo` as its **own** arena entry with its own sample count and
price, fal carries a separate catalogue record and schema, and the changelog names the two variants
separately. This page therefore does not inherit
[Eleven v4](eleven-v4.md)'s findings, and vice versa.

### Identity ambiguity that remains

- **The model moves under a fixed ID.** ElevenLabs says the v4 family is "under active, continuous
  development" and that behaviour "may shift over time" under the same ID
  ([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)). No checkpoint,
  revision or build identifier exists in the corpus, so no claim here pins a Turbo revision — only a
  capture date.
- **Is Turbo reachable outside the dialogue routes?** The models page lists `eleven_v4_turbo` in its
  text-to-speech model table and the pricing page sells it as "Text to Speech", while the prose on
  both vendor pages says it "is available via the Text to Dialogue websocket"
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
  [pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)). Both hosts serve it as
  a plain HTTP TTS endpoint. No captured source resolves this.
- **One voice or ten on the socket?** The comparison guide says "Up to **10** registered voices for
  `eleven_v4`; **`eleven_v4_turbo` allows only one**"
  ([WebSocket comparison](../../sources/elevenlabs.com/tts-vs-ttd-websockets/2026-10-26.md)); the
  socket's own API reference says "For `eleven_v3_conversational` and `eleven_v4` models, only **one**
  voice ID may be registered" and never mentions Turbo
  ([WebSocket reference](../../sources/elevenlabs.com/text-to-dialogue-websocket-api-reference/2026-10-26.md)).
  Two first-party pages disagree about plain v4; Turbo is one-voice under the stricter reading and
  unmentioned under the other.

## Current assessment

**Current, generally available, and the vendor's own default for interactive work** — not a preview.
The changelog uses no preview or waitlist language, the model was made ElevenAgents' default
conversational voice and the dubbing default three weeks later, and fal lists the endpoint
`status: public`, `deprecated: false` while WaveSpeed carries it as a normal catalogue entry
([changelog](../../sources/elevenlabs.com/eleven-v4-changelog/2026-10-26.md),
[fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md)).

**It is a distinct tier, not a repackaging of `eleven_v4`.** Distinct model ID, distinct price (half),
distinct socket voice limit, distinct arena entry, and the vendor's own card describes it as "v4
expressiveness, **tuned for latency**" — i.e. the same family with a deliberate trade, not a rename
([pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)).

**What the evidence supports about the trade:**

- **Price:** documented and unambiguous. $0.04 vs $0.08 per 1,000 characters, identical on the vendor,
  fal and WaveSpeed, and independently normalised by Artificial Analysis at $40 vs $80 per 1M
  characters ([pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md),
  [fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
  [WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).
- **Latency:** the vendor gives Turbo ~100 ms median inference and ~150 ms time to first speech, but
  publishes **no latency figure for plain `eleven_v4`** anywhere captured. The claimed saving against
  v4 is therefore unquantified; the only comparative numbers are against other vendors' models
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
  [landing page](../../sources/elevenlabs.com/eleven-v4-landing-page/2026-10-26.md)).
- **Quality:** the one independent measurement finds no gap. AA's board puts Turbo 1st (interval 1-2)
  at 1333 ± 16 and plain v4 2nd at 1333 ± 16, on 2,177 and 2,469 samples respectively; the raw
  per-entry Elos are 1332.98 and 1332.89, a 0.09-point difference
  ([AA leaderboard](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md),
  [AA per-entry record](../../sources/artificialanalysis.ai/minimax-speech-2.8-hd-leaderboard/2026-10-26.md)).

Read together: **for a real-time or agent workload the halved price is documented, the arena quality
gap is zero, and the latency gain over v4 is a vendor claim with no published counterpart number.**
The honest verdict is that Turbo dominates v4 on price and equal measured preference, while the case
for paying for v4 is restricted to whatever the arena does not measure — long-form narration,
multi-speaker dialogue with more than one registered voice per socket, and the 10,000-character
single-request ceiling.

## Documented capabilities

Everything below is vendor or host documentation. No direct tests were run.

### Speech synthesis and control surface

- **Audio tags** (natural-language directions in square brackets, e.g. `[whispering]`, `[laughing]`,
  `[applause]`) and **IPA pronunciation** in forward slashes are the two inline control surfaces,
  inherited from the v4 family; the vendor warns that "a tag can occasionally be interpreted as a
  request for a sound effect rather than a delivery instruction"
  ([API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md),
  [Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md)).
- **Voice settings differ by route.** On the Text to Dialogue socket only `stability` (default 0.5)
  and the PVC-only `clone_strength` are accepted — **no `similarity_boost`**, although the HTTP TTS
  reference documents similarity for v4 ([WebSocket reference](../../sources/elevenlabs.com/text-to-dialogue-websocket-api-reference/2026-10-26.md),
  [API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)).
  fal's HTTP wrapper exposes `stability` (0.5) and `similarity_boost` (0.75) instead
  ([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md)).
- **No style, no speed, no SSML.** "Style and Speed sliders are not available in Eleven v4, and SSML
  is not supported"; break tags are out for v4 and v3
  ([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)).
- **Determinism:** `seed` (1–4294967295 on the socket, 0–4294967295 on fal) is "best effort";
  "Determinism is not guaranteed" ([WebSocket reference](../../sources/elevenlabs.com/text-to-dialogue-websocket-api-reference/2026-10-26.md),
  [fal](../../sources/fal.ai/eleven-v4/2026-10-26.md)).

### Latency and WebSocket behaviour

Vendor figures, all footnoted "excluding application & network latency"
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[landing page](../../sources/elevenlabs.com/eleven-v4-landing-page/2026-10-26.md)):

| Model | Median inference latency | Time to first speech |
| --- | --- | --- |
| **Eleven v4 Turbo** | **~100 ms** | **~150 ms** |
| Eleven v3 Conversational | ~280 ms | not stated |
| Eleven Flash v2.5 | ~75 ms | not stated |
| Eleven v4 | not stated | not stated |

The landing page's only comparative chart pits Turbo's 150 ms against Cartesia Sonic 3.6 (262 ms) and
OpenAI GPT-4o mini TTS (814 ms) with no region, text set, hardware or measurement date attached — a
vendor claim, not a measurement. The vendor also claims Turbo "stays consistent in long
interactions".

The socket that carries Turbo adds its own timing constraints, none of which appear in the ~100 ms
figure:

- **Server-side buffering:** "Text for the same turn is buffered until the server has enough context
  (at least ~40 characters and 8 words), then partial audio chunks are emitted"; `flush` forces
  generation early ([WebSocket reference](../../sources/elevenlabs.com/text-to-dialogue-websocket-api-reference/2026-10-26.md)).
- **Fixed 20-second receive timeout** between client messages, reset only by `keep_alive`
  ([WebSocket comparison](../../sources/elevenlabs.com/tts-vs-ttd-websockets/2026-10-26.md)).
- **Default model trap:** the socket's `model_id` defaults to `eleven_v3_conversational`; a Turbo
  caller must pass the ID explicitly ([WebSocket reference](../../sources/elevenlabs.com/text-to-dialogue-websocket-api-reference/2026-10-26.md)).
- **One registered voice per connection** (see the contradiction under **Identity**), with per-line
  `new_turn` to finalise a prosody segment
  ([WebSocket comparison](../../sources/elevenlabs.com/tts-vs-ttd-websockets/2026-10-26.md)).
- **No Text to Speech WebSocket.** That endpoint excludes v3 and v4 models outright, so Turbo's only
  vendor streaming route is the dialogue socket
  ([WebSocket comparison](../../sources/elevenlabs.com/tts-vs-ttd-websockets/2026-10-26.md)).
- **Concurrency is metered as dialogue sessions:** "Each open connection holds one dialogue session
  from a separate pool for its whole lifetime; generation over the connection does not consume
  standard concurrency." Sessions per plan are Free 14, Starter 21, Creator 35, Pro 70, Scale 105,
  Business 105 ([WebSocket comparison](../../sources/elevenlabs.com/tts-vs-ttd-websockets/2026-10-26.md),
  [models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **Residency hosts** exist for the socket: US, EU (Ireland), India and Singapore, plus the default
  ([WebSocket reference](../../sources/elevenlabs.com/text-to-dialogue-websocket-api-reference/2026-10-26.md)).

No independent latency measurement of v4 Turbo was captured; the AA records preserve arena scores,
sample counts and prices, not per-model generation times for this family.

### Languages

The v4 family claims "90+ languages" and both variants share one enumeration of **84 ISO codes**
(Afrikaans through Yoruba), with `language_code` taking ISO 639-1 where one exists and ISO 639-3 for
Asturian (`ast`), Cantonese (`yue`), Cebuano (`ceb`) and Filipino (`fil`); a separate vendor FAQ adds
seven languages absent from that list (Amharic, Fula, Lao, Luganda, Shona, Sorani Kurdish, Wolof)
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)). The "90+" headline
does not follow from either enumeration; the vendor concedes "some languages are handled more
fluently than others". No source gives a Turbo-specific language list, so the family list is all
there is.

Cross-language accent behaviour is inherited: when the target language differs from the reference
voice's language, the model deliberately drops the source accent, with no toggle yet
([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)). The landing page
frames the same behaviour positively for Turbo: "Point it at Japanese, Spanish or Portuguese text and
the voice speaks it fluently, with a native accent"
([landing page](../../sources/elevenlabs.com/eleven-v4-landing-page/2026-10-26.md)).

### Voice cloning

Documented at family level, and the landing page claims parity across the two variants under the
heading "One voice across every turn": PVCs "work identically across both models"
([landing page](../../sources/elevenlabs.com/eleven-v4-landing-page/2026-10-26.md)).

- **Instant Voice Cloning** — "a short sample, generally one to two minutes, and within seconds you
  have a voice you can use".
- **Professional Voice Cloning** — "fully supported in Eleven v4"; an existing PVC can be fine-tuned
  for v4 from My Voices.
- **`clone_strength`** (0–1, recommended start 0) applies "only to professional voice clones
  fine-tuned for the selected v4 model" and is accepted on the dialogue socket, so PVC tuning is
  reachable on the Turbo route
  ([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md),
  [WebSocket reference](../../sources/elevenlabs.com/text-to-dialogue-websocket-api-reference/2026-10-26.md)).
- **Host coverage is the weak point.** fal's schema exposes a `voice` string with 20 preset names
  (default "Rachel") and no voice-ID field; WaveSpeed advertises "Suggested voice name or custom voice
  ID" without saying whose workspace it resolves in. A cloned voice is not portably addressable
  across hosts as documented ([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
  [WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md)).

No source states how many characters or minutes of audio cloning accepts on Turbo specifically, and no
voice-cloning consent policy page was captured for this family.

### Output formats and sample rate

| Route | Formats | Top sample rate | Default |
| --- | --- | --- | --- |
| ElevenLabs Text to Dialogue (the Turbo path) | MP3 22.05–44.1 kHz @ 32–192 kbps, PCM (S16LE) listed as 8/16/22.05/24/44.1/48 kHz (the page's own range line says 16–44.1 kHz), Opus 48 kHz @ 32–192 kbps, μ-law 8 kHz, A-law 8 kHz | **48 kHz** (PCM and Opus) | `mp3_44100_128` |
| ElevenLabs dialogue socket | `output_format` query parameter, **untyped** in the reference ("Any type") | not stated | `mp3_44100_128` in the vendor's own socket example |
| ElevenLabs HTTP TTS | 28 values including `wav_8000…48000`, `pcm_32000`, `mp3_24000_48` | 48 kHz | `mp3_44100_128` |
| fal | 19 values: MP3 22.05–44.1 kHz, PCM 8–48 kHz, Opus 48 kHz, μ-law, A-law — **no WAV** | 48 kHz | `mp3_44100_128` |
| WaveSpeed | MP3 only | not stated | — |

Sources: [Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md),
[WebSocket reference](../../sources/elevenlabs.com/text-to-dialogue-websocket-api-reference/2026-10-26.md),
[API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md),
[fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md).

Higher-bitrate MP3 (192 kbps) requires Creator tier or above and 44.1 kHz PCM/WAV requires Pro or
above, so the top formats are plan-gated on the vendor route
([pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)). The vendor does not
enumerate the socket's allowed formats, so a caller who needs 48 kHz PCM should verify the format
string on the socket rather than assume the dialogue page's list applies.

### Character limits

| Route | Limit | Source |
| --- | --- | --- |
| ElevenLabs (models page, character-limit table) | **not listed** — `eleven_v4_turbo` has no row, although `eleven_v4` is 10,000 | [models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md) |
| ElevenLabs Text to Dialogue (Turbo's stated route) | keep total `inputs[].text` **≤ 2,000 characters** per request "for reliable generation"; longer requests "can terminate early in streaming responses or return a validation error" | [Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md) |
| ElevenLabs dialogue socket | no text limit documented; only the ~40-character / 8-word generation trigger | [WebSocket reference](../../sources/elevenlabs.com/text-to-dialogue-websocket-api-reference/2026-10-26.md) |
| ElevenLabs server-side field | `maximum_text_length_per_request` exists per model and "longer requests are rejected", but the live value needs an API key | [models list API](../../sources/elevenlabs.com/eleven-multilingual-v2-models-list-api/2026-10-26.md) |
| fal | `text` **`maxLength: 5000`** (hard schema cap) | [fal](../../sources/fal.ai/eleven-v4/2026-10-26.md) |
| WaveSpeed | "Text to convert into speech. Supports 1–10000 characters." | [WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md) |

The vendor's flagship card makes the omission visible: the v4 card lists "10,000 character limit" and
the Turbo card substitutes "Audio tags for fine-grained control"
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)). **A
long-form pipeline must not size against the 10,000-character figure**: on the route ElevenLabs names
for Turbo the published reliability guidance is 2,000 characters of total dialogue text, and fal
rejects anything over 5,000.

### Independent quality

One independent measurement exists. Artificial Analysis' Text to Speech board places **Eleven v4
Turbo 1st** (rank interval 1-2) with a score of **1333 ± 16** over 2,177 samples and 8 voices, price
normalised to **$40.0 per 1M characters**; plain Eleven v4 is 2nd on the same interval at 1333 ± 16
over 2,469 samples at $80.0 per 1M
([AA leaderboard](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).
The board's own method line describes the score as arena preference Elo from user votes, with
"Evaluation results measured independently by Artificial Analysis"
([AA per-entry record](../../sources/artificialanalysis.ai/minimax-speech-2.8-hd-leaderboard/2026-10-26.md)).

Two cautions. The board's ±16 interval on 2,177 samples means a 0.09-point gap is indistinguishable
from noise — the correct reading is **"no measured difference"**, not "Turbo is better". And
preference Elo measures short-sample naturalness and appeal under an 8-voice protocol; it says
nothing about long-form consistency, tag adherence, or speaker similarity on a cloned voice, which is
where the vendor claims v4 is stronger.

## Limitations and constraints

- **The vendor's own routes disagree on where Turbo lives.** Models page: "available via the Text to
  Dialogue websocket". Pricing page: a Text to Speech card. Model table: listed among TTS models. fal
  and WaveSpeed: plain HTTP TTS. A pipeline built on `/v1/text-to-speech` with this ID is documented
  only by implication.
- **The socket defaults to the wrong model.** `model_id` defaults to `eleven_v3_conversational`, so a
  missing query parameter silently yields v3 Conversational output — a different model that happens
  to sit at the same $0.04 rate
  ([pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)).
- **No similarity control on the socket**, only `stability` and `clone_strength`. Callers who tuned
  `similarity_boost` on HTTP TTS cannot carry that setting over.
- **One registered voice per socket** (per the comparison guide), which rules out multi-speaker
  dialogue on a single Turbo connection; `eleven_v4` is the documented multi-voice option.
- **20-second idle timeout** with no configurable `inactivity_timeout` (unlike the TTS WebSocket), so
  a conversational agent must send `keep_alive` or reconnect.
- **~40 characters / 8 words of server buffering** sits in front of first audio unless `flush` is
  used — a per-turn latency floor that the ~100 ms inference figure does not include.
- **Sessions are a separate concurrency pool** (Free 14 … Scale 105), so Turbo capacity is not
  governed by the TTS concurrency table, which in any case has no v4 column
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **No style, speed or SSML** (family constraint); audio tags are advisory — "guide delivery but do
  not guarantee an exact performance".
- **Cross-language accent dropping is always on**, with the vendor calling a toggle "still a research
  project" and giving "no timeline"
  ([model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)).
- **Host ceilings and formats diverge**: fal caps `text` at 5,000 and omits WAV; WaveSpeed accepts
  10,000 but returns MP3 only and exposes no `language_code`, `seed`, timestamps or text
  normalisation ([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
  [WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md)).
- **Host voice access is opaque** — fal's preset-name field cannot name a cloned voice; neither host
  says whose ElevenLabs workspace proxies the call.
- **Hosts are proxies, not hosts.** fal lists `hostingType: "proxy"` on both v4 catalogue rows and
  its billing payload declares `provider_type: "partner"`, `is_partner_api: true`, so host-side
  latency and availability are ElevenLabs' too
  ([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md)).
- **Not on Replicate** four weeks after launch, while v3, Flash v2.5, Turbo v2.5 and Multilingual v2
  are all listed there (checked 2026-10-26).
- **No weights, no self-hosting, no snapshot pinning** — closed and hosted only, and the vendor says
  behaviour "may shift over time" under the fixed ID.

### Watermarking

ElevenLabs embeds an inaudible watermark in "audio we generate", states that it adds "zero latency in
nearly all cases", and offers no opt-out parameter in any captured API reference; only ElevenLabs'
own Audio Detector can read it — "No other platforms can currently detect ElevenLabs watermarks"
([watermarking](../../sources/elevenlabs.com/eleven-v4-watermarking/2026-10-26.md)).

Two gaps are Turbo-specific and unresolved. First, the policy record lists as a gap "whether
`eleven_v4_turbo` realtime/WebSocket output is watermarked" — the watermark's zero-latency claim is
stated for generated audio generally, but no captured page says whether the streamed, base64-chunk
socket output carries it. Second, whether the mark survives on fal or WaveSpeed output is unstated;
both proxy the partner API, so it should be present, but no source says so and no test was run.

## Access, pricing, licensing

### Billing basis

**Per input character**, not per second, not per request, and not per dialogue session. fal's billing
block reads `billing_unit: "1000 characters"`; WaveSpeed prorates per character and counts "spaces,
punctuation, and inline audio tags" as billable
([fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md)).

| Route | Eleven v4 Turbo | Eleven v4 | Rounding |
| --- | --- | --- | --- |
| ElevenLabs API (list) | **$0.04 / 1K chars** | $0.08 / 1K chars | not stated |
| fal | **$0.04 / 1K chars** | $0.08 / 1K chars | per 1,000-character unit |
| WaveSpeedAI | **$0.04 / 1K chars** ("~25 / $1") | $0.08 / 1K chars ("~12 / $1") | prorated, rounded up to $0.000001 |
| Artificial Analysis (normalised) | $40 / 1M chars | $80 / 1M chars | — |

Sources: [pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/eleven-v4/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/eleven-v4/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md).

Four publishers agree to the cent, and AA's independent normalisation lands on the same number — this
is a genuine list price, not a reseller markup. Practical cost: **$0.40** for a 10,000-character
request where the route accepts it, **$0.20** on fal's 5,000-character cap, and **$0.08** for a
2,000-character dialogue request. No route charges a separate streaming or session fee as documented.

The vendor's credit system is not reconciled with these rates: plans run Free 10,000 credits, Starter
$6/30,000, Creator $22/121,000, Pro $99/600,000, Scale $299/1.8M, Business $990/6M, with "Text to
Speech 1 credit per character", but no v4-specific credit multiplier is published
([pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)).

### Licensing and commercial terms

- **Output ownership:** "You retain ownership of any audio you generate."
- **Commercial rights:** "commercial usage rights are only available with paid plans. With a paid
  subscription, you may use generated audio for commercial purposes and monetize the outputs if you
  own the IP rights to the input content."
- **No weights licence exists** — hosted-only model; there is nothing to license.
- fal's `licenseType: "commercial"` describes use through fal, not an ElevenLabs grant.
- Voice-cloning consent terms were not captured for this family.

Source: [Text to Dialogue FAQ](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md).

### Free regenerations

Two free regenerations per generation, same text and parameters, **dashboard only** — not an API
feature ([Text to Dialogue](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md)).

## Unresolved questions

1. **What is `eleven_v4_turbo`'s character limit?** The vendor's table omits the model; the server
   enforces a per-model `maximum_text_length_per_request` that needs a key to read; fal says 5,000
   (hard), WaveSpeed says 10,000, and the dialogue guidance says 2,000. Three published numbers and
   one omission for one model.
2. **Is Turbo callable on `/v1/text-to-speech`?** Both hosts expose it as plain HTTP TTS and the
   vendor's model table lists it there, but every vendor prose statement routes it to the dialogue
   socket and no sample code calls it on the TTS endpoint.
3. **Does the watermark survive on streamed socket audio, and on host output?** Unstated in both
   directions.
4. **One registered voice or ten?** The comparison guide and the socket reference disagree about
   `eleven_v4`; neither is unambiguous about Turbo.
5. **What does the latency premium actually buy?** No captured source gives a v4 latency number, so
   the ~100 ms claim has no baseline. A same-text A/B on both IDs would settle it.
6. **Which formats does the socket emit?** `output_format` is untyped in the reference; the 48 kHz
   ceiling is documented for the HTTP dialogue endpoint, not the socket.
7. **How good is it outside short-sample preference?** Arena Elo ties v4; nothing measures long-form
   consistency, tag adherence, or cloned-voice similarity on Turbo.
8. **Why is Turbo absent from Replicate** when the rest of the line is there?
9. **Do failed, empty or early-terminated generations bill?** No source states it, and dialogue
   requests "can terminate early in streaming responses".
10. **Which Turbo revision is being served?** No checkpoint exists; the vendor says the family keeps
    changing under one ID.

## Evidence status

Evidence floor: **met.** First-party: the ElevenLabs changelog (launch and the 2026-10-19 default
change), the models overview, the v4 model guide, the API pricing page, the v4 landing page, the Text
to Dialogue capability page, the Text to Dialogue WebSocket API reference, the TTS-vs-TTD WebSocket
comparison guide, the watermarking/Audio-Detector policy pages, and the Text to Speech API reference
plus prompting guide. Independent: one fal record (catalogue metadata, input schema, price, billing
payload), one WaveSpeedAI record (parameters, price table, endpoint), one Artificial Analysis
leaderboard capture with a Turbo-specific entry (rank, score, sample count, price, release date) and a
second AA capture with per-entry Elo values, plus a Replicate negative record establishing that Turbo
is not hosted there. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules that four
publishers agree on; the latency figures are the vendor's own with no published baseline for v4; and
the only independent quality number is one arena's preference Elo, which ties the two variants within
its confidence interval.

The next useful evidence would be a small reproducible test set against named endpoints and dates: the
same 2,000-character script through `eleven_v4_turbo` and `eleven_v4` on the dialogue socket and on
fal, measuring time to first audio chunk and total wall time (to put a number on the latency delta the
vendor does not publish); a 5,000- and a 10,000-character request on each route to find where the
ceiling actually bites; `output_format=pcm_48000` on the socket to confirm the format enum; a PVC
generation with `clone_strength` at 0 and 1; and an Audio Detector check on socket- and host-produced
files to settle the watermark question.
