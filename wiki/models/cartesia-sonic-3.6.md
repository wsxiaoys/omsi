# Cartesia Sonic 3.6

Cartesia's text-to-speech model, generally available from **2026-08-27** as `sonic-3.6`, with one dated
snapshot `sonic-3.6-2026-08-27` that the vendor says never changes
([changelog](../../sources/cartesia.ai/changelog-2026/2026-10-26.md),
[model page](../../sources/cartesia.ai/sonic-3.6-model-page/2026-10-26.md)). It is a quality update to
Sonic 3.5 rather than a new feature surface, and it is the model Cartesia now recommends and defaults
to: the TTS request schema's `TTSModelID` enum defaults to `sonic-3.6`
([API reference](../../sources/cartesia.ai/tts-bytes-api-reference/2026-10-26.md)).

The launch is inside the roster's one-year window (≥ 2025-10-26) — ten months after it opened — so
no out-of-window exception applies. The model is closed-weight and sold per character. Cartesia's own
API is the primary route; LiveKit Inference is the only independent host captured. **fal and Replicate
do not serve Cartesia at all** (checked 2026-10-26).

## Identity

- **Canonical name:** Sonic 3.6. **Model ID:** `sonic-3.6`. **Pinned snapshot:** `sonic-3.6-2026-08-27`
  ([model page](../../sources/cartesia.ai/sonic-3.6-model-page/2026-10-26.md)).
- **Vendor:** Cartesia (model developer and API operator). Cartesia describes its models as built on
  State Space Model architecture by its founding team at Stanford — a marketing claim, not a checkable
  specification ([Sonic product page](../../sources/cartesia.ai/sonic-marketing-page/2026-10-26.md)).
- **Release:** **2026-08-27**, "generally available from August 27 on `sonic-3.6`"
  ([changelog](../../sources/cartesia.ai/changelog-2026/2026-10-26.md)). Three independent surfaces give
  the same date or month: the snapshot name `sonic-3.6-2026-08-27`, LiveKit's catalogue row "Sonic 3.6
  (2026-08-27)" ([LiveKit](../../sources/livekit.io/cartesia-tts-inference/2026-10-26.md)), and
  Artificial Analysis's "Aug 2026" release column
  ([AA board](../../sources/artificialanalysis.ai/sonic-3-6-leaderboard/2026-10-26.md)).
- **Roster label:** row 113 "Cartesia Sonic 3.6" with discovery source "AA TTS leaderboard (`Sonic
  3.6`)". The AA label, the vendor name and the API ID agree; the roster label is accurate here.

### Host endpoints

| Route | Endpoint / ID | Notes |
| --- | --- | --- |
| Cartesia API | `POST https://api.cartesia.ai/tts/bytes` (also `/tts/sse`, `/tts/websocket`) with `model_id: "sonic-3.6"` | default model in the schema; `Cartesia-Version` header required ([API reference](../../sources/cartesia.ai/tts-bytes-api-reference/2026-10-26.md)) |
| Cartesia self-hosted | same IDs, on-prem / VPC / air-gapped / OEM | "Sonic-3.6 can be deployed on-prem inside your data center … or via OEM licensing"; enterprise contract ([product page](../../sources/cartesia.ai/sonic-marketing-page/2026-10-26.md)); self-hosted release 2026-09-17 ([changelog](../../sources/cartesia.ai/changelog-2026/2026-10-26.md)) |
| LiveKit Inference | `cartesia/sonic-3.6` and `cartesia/sonic-3.6-2026-08-27` | managed billing, EU endpoint available, no Cartesia key ([LiveKit](../../sources/livekit.io/cartesia-tts-inference/2026-10-26.md)) |
| fal | none | 0 results for `cartesia` in the catalogue; `fal-ai/cartesia/sonic` returns 404 |
| Replicate | none | `/cartesia` itself returns 404 |

### Siblings

`sonic-3.6` (this page) sits alongside the retained `sonic-3.5` / `sonic-3.5-2026-05-04`,
`sonic-3` / `sonic-3-2026-01-12`, the `sonic-preview` beta channel, and the sunsetting `sonic-2`,
`sonic-turbo` and `sonic` lines ([older models](../../sources/cartesia.ai/older-models/2026-10-26.md),
[deprecated models](../../sources/cartesia.ai/deprecated-models/2026-10-26.md)).

### Distinguishing Sonic 3.6 from Sonic 3.5 and Sonic 3

| | Sonic 3.6 | Sonic 3.5 | Sonic 3 |
| --- | --- | --- | --- |
| Snapshot | `sonic-3.6-2026-08-27` | `sonic-3.5-2026-05-04` | `sonic-3-2026-01-12` (also `-2025-10-27`) |
| Released | 2026-08-27 | 2026-05-04 | 2026-01-12 / 2025-10-27 |
| Languages | 44 (adds Odia `or`, Urdu `ur`) | 42 | 42 |
| Locales | 61 | not captured | not captured |
| `locale` / `accent` request fields | supported | not supported — "`locale` needs `sonic-3.6` or newer" | not supported |
| Instant-clone sample window | up to 60 s | first 10 s only | first 10 s only |
| Cross-language accent | deliberately reduced ("makes voices sound more native"); vendor says use 3.5 for a deliberately non-native accent | not flattened — the vendor names it as the model to use when a deliberate accent is wanted | not addressed |
| AA Elo (same board, 8-voice protocol) | 1292 (rank 4) | 1190 (rank 18) | 1054 (rank 62) |
| Billing | ~1 credit/char | ~1 credit/char | ~1 credit/char |

Sources: [changelog](../../sources/cartesia.ai/changelog-2026/2026-10-26.md),
[model page](../../sources/cartesia.ai/sonic-3.6-model-page/2026-10-26.md),
[instant clone](../../sources/cartesia.ai/instant-voice-clone/2026-10-26.md),
[multilingual voices](../../sources/cartesia.ai/multilingual-voices/2026-10-26.md),
[older models](../../sources/cartesia.ai/older-models/2026-10-26.md),
[credits pricing](../../sources/cartesia.ai/credits-pricing/2026-10-26.md),
[AA board](../../sources/artificialanalysis.ai/sonic-3-6-leaderboard/2026-10-26.md).

Three things follow. First, **3.6 is not a repackaging of Sonic 3**: it adds two languages, a
locale/accent control layer, a longer cloning window and a measurable quality delta on an independent
board. Second, **the step from 3.5 to 3.6 is quality-only** — the changelog states "No changes to the
feature surface. Prompting guidance, SSML tags, timestamps, codec, and speed and volume controls all
behave as they do on Sonic 3.5." Third, **price did not move** across the three generations, so the
upgrade is free at the same credit rate.

The independent measurement is the strongest identity evidence. On one board, one protocol and the same
8 voices, Sonic 3 → 3.5 is +136 Elo and 3.5 → 3.6 is +102 Elo, with non-overlapping 95% intervals
(1043–1065, 1179–1201, 1278–1306). That is the version, not noise — and it is also the reason this page
is separate from any Sonic 3 page rather than a checkpoint note.

### Identity ambiguity that remains

- **The moving alias.** `sonic-3.6` "will be updated to point to the most recent stable snapshot" while
  `sonic-3.6-2026-08-27` "will never change". No source says whether the September 2026 changes
  (case-insensitive pronunciation dictionaries, Latin-script spacing in Japanese/Chinese, the
  self-hosted release) landed in the same snapshot or in a newer one that the alias now points at
  ([model page](../../sources/cartesia.ai/sonic-3.6-model-page/2026-10-26.md),
  [changelog](../../sources/cartesia.ai/changelog-2026/2026-10-26.md)). Claims on this page pin to
  the capture date, not to a revision.
- **`sonic-latest` is both deprecated and accepted.** The older-models page calls it a deprecated alias
  for `sonic-preview`; the TTS request schema still lists it in the `TTSModelID` enum. Neither page
  addresses the other.
- **`sonic-preview` is not a 3.6 version.** It is a separate beta channel that "can change without
  notice"; a Pro Voice Clone cannot be used with it.

## Current assessment

The evidence supports a **current, generally available flagship**, not a preview and not a retained
specialist. Cartesia defaults to it in the request schema, points the Sonic 2 and Sonic Turbo lines at it
as the migration target, and shipped it to self-hosted customers on 2026-09-17. LiveKit's table carries
both the alias and the dated snapshot alongside the older generations.

What the evidence does **not** support is the vendor's own headline ranking. Cartesia's product page
says "Artificial Analysis Ranked #1 in Speech Arena"; the same evaluator's text-to-speech board on the
same capture date puts Sonic 3.6 **4th** at Elo 1292, behind two Eleven v4 variants (1333) and
Qwen-Audio-3.1-TTS-Plus (1306)
([product page](../../sources/cartesia.ai/sonic-marketing-page/2026-10-26.md),
[AA board](../../sources/artificialanalysis.ai/sonic-3-6-leaderboard/2026-10-26.md)). The vendor claim
carries no date or tab, and AA's page exposes several tabs (Speech Arena, Provider Voice Leaderboard,
Controlled Voice Leaderboard), so the claim may describe a different view or an earlier state. Nothing
captured resolves it.

Latency is the second soft spot. "Sub-90ms" appears three ways on Cartesia's own pages — "first audio in
under 90ms", "sub-90ms model latency", "sub-90ms latency" — with no region, endpoint, percentile or text
set. A competitor's chart published the same month measures Sonic 3.6 at **262 ms median time to first
speech** against Eleven v4 Turbo's 150 ms
([ElevenLabs landing page](../../sources/elevenlabs.com/eleven-v4-landing-page/2026-10-26.md)). The two
figures are not the same quantity (model compute versus end-to-end first speech), and Cartesia itself
notes that for HTTP routes "that overhead is often on the same order as TTFB for the audio itself"
([endpoint comparison](../../sources/cartesia.ai/tts-endpoint-comparison/2026-10-26.md)). Neither number
is a measurement this knowledge base made.

One retained-specialist case is worth naming: **Sonic 3.5 stays useful if you want a deliberately
non-native accent**, because 3.6 "makes voices sound more native when they speak another language, so a
deliberate accent may sound lighter" ([multilingual voices](../../sources/cartesia.ai/multilingual-voices/2026-10-26.md)).
That is a regression for accent-as-character workflows, not an upgrade.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run for this page.**

### Speech synthesis and control surface

- **One request shape across the Sonic line.** `model_id`, `transcript`, `voice`, `output_format` are
  required; `language` or `locale` (one, never both), `accent`, `normalization`, `pronunciation_dict_id`
  and `generation_config` are optional
  ([API reference](../../sources/cartesia.ai/tts-bytes-api-reference/2026-10-26.md)).
- **Speed and volume** via `generation_config`: speed 0.6–1.5, volume 0.5–2.0, both "guidance, not a
  strict multiplier". SSML-like tags `<speed>`, `<volume>`, `<emotion>`, `<break>`, `<spell>` cover the
  same ground mid-transcript; "each tag counts as 1 character"
  ([SSML tags](../../sources/cartesia.ai/ssml-tags/2026-10-26.md)).
- **Emotion** is beta and **English-only**: "Emotion tags are supported only for English", are "highly
  experimental, particularly when emotion shifts occur mid-generation", and work best with voices tagged
  Emotive.
- **Non-verbalisms:** "Insert `[laughter]` in your transcript to make the model laugh"
  ([volume/speed/emotion](../../sources/cartesia.ai/volume-speed-emotion/2026-10-26.md)). Note the
  conflict with LiveKit's statement that "Cartesia doesn't produce non-verbal sounds like laughs or
  sighs" — see **Unresolved questions**.
- **Streaming:** three endpoints. WebSocket adds continuations (partial text sharing a `context_id`),
  multiplexed contexts and timestamps; SSE adds timestamps over HTTP; bytes returns one generation per
  POST in raw/WAV/MP3.
- **No determinism control.** The request schema has no `seed` or temperature field, and no page
  documents reproducibility.

### Languages

44 languages, enumerated as 44 ISO codes on the model page, and "61 locales" per the changelog. Odia
(`or`) and Urdu (`ur`) are new in 3.6, "with instant voice cloning support". Language selection is
`language` or `locale`; `locale` (e.g. `en-GB`) also picks the regional accent when the voice supports
it, and `normalization` can diverge from the spoken language (e.g. British English reading US date
conventions). Hinglish/romanized Hindi is explicitly supported in 3.6; other mid-utterance mixing "may
sound accented" outside cases like Hinglish and Taglish
([model page](../../sources/cartesia.ai/sonic-3.6-model-page/2026-10-26.md),
[changelog](../../sources/cartesia.ai/changelog-2026/2026-10-26.md),
[multilingual voices](../../sources/cartesia.ai/multilingual-voices/2026-10-26.md)).

LiveKit's independent row lists the same 44 codes for `cartesia/sonic-3.6`, which is corroboration of
the language list rather than a copy of a marketing number.

### Voices and cloning

- **Inventory:** "500+ voices out-of-the-box", split into Featured, stable (agents) and Emotive
  (characters) sets, plus cloning
  ([choosing a voice](../../sources/cartesia.ai/choosing-a-voice/2026-10-26.md)). The September 2026
  changelog adds "85 new public voices" across 24 languages and says 58 voices now speak up to 27
  languages natively.
- **Instant Voice Clone:** 10 seconds is enough, up to 60 seconds "to better retain the speaker's
  accent" — a 3.6-and-newer behaviour; older models only learn from the first 10 seconds. Uploads
  ≤16 MB, one language per clone, dashboard or `POST /voices/clone`
  ([instant clone](../../sources/cartesia.ai/instant-voice-clone/2026-10-26.md)).
- **Pro Voice Clone:** ≥30 minutes of studio-quality single-speaker audio, up to 3 hours of training,
  Startup plan or above, one dataset per language, compatible snapshots listed as
  `sonic-3.5-2026-05-04` and `sonic-3.6-2026-08-27`, and unusable with `sonic-preview`
  ([pro clone](../../sources/cartesia.ai/pro-voice-clone/2026-10-26.md)).
- **Carry-over:** "Instant and Professional Voice Clones work on Sonic 3.6 with the same voice IDs —
  nothing to recreate."
- **Accents:** a voice can hold up to 10 accents; Add Voice Accents (private IVCs, same voice ID) and
  Localize Voice (any voice, new voice ID, 225 credits per accent) are the two routes; PVCs take
  neither ([multilingual voices](../../sources/cartesia.ai/multilingual-voices/2026-10-26.md),
  [plans/pricing](../../sources/cartesia.ai/plans-pricing/2026-10-26.md)).
- **Consent:** "All voice clones require verified consent from the speaker. Cloning voices you don't
  have permission to use — including public figures, celebrities, or other people without their consent
  — is prohibited under Cartesia's Terms of Use"
  ([product page](../../sources/cartesia.ai/sonic-marketing-page/2026-10-26.md)).

### Output formats and sample rate

| Container | Encodings | Sample rates | Where |
| --- | --- | --- | --- |
| `raw` | `pcm_f32le`, `pcm_s16le`, `pcm_mulaw`, `pcm_alaw` | 8000, 16000, 22050, 24000, 44100, 48000 | bytes, SSE, WebSocket |
| `wav` | same encodings (default `pcm_s16le`) | same set (default 44100) | **bytes only** |
| `mp3` | bit rate 32/64/96/128/192 kbit/s (default 128000) | same set (default 44100) | **bytes only** |

Sources: [output format](../../sources/cartesia.ai/tts-output-format/2026-10-26.md),
[API reference](../../sources/cartesia.ai/tts-bytes-api-reference/2026-10-26.md). There is no Opus,
FLAC or AAC option; the top rate is **48 kHz**, and telephony presets are μ-law/A-law at 8 kHz.

### Latency

Vendor: "sub-90ms" / "first audio in under 90ms", with the same claim repeated on the Sonic 3.5 page,
i.e. 3.6 is not claimed to be faster than 3.5
([product page](../../sources/cartesia.ai/sonic-marketing-page/2026-10-26.md),
[Sonic 3.5](../../sources/cartesia.ai/sonic-3-5/2026-10-26.md)). No methodology, region, percentile or
measurement date is published. A competitor-run chart puts Sonic 3.6 at 262 ms median time to first
speech ([ElevenLabs](../../sources/elevenlabs.com/eleven-v4-landing-page/2026-10-26.md)). LiveKit
publishes no latency figure for its Cartesia route.

## Limitations and constraints

- **No documented character or duration ceiling.** The `transcript` field carries no `maxLength` and no
  page states a per-request cap; the binding limits are plan concurrency (2/3/5/15 concurrent TTS
  requests on Free/Pro/Startup/Scale) and, for uploads, a 16 MB file cap
  ([API reference](../../sources/cartesia.ai/tts-bytes-api-reference/2026-10-26.md),
  [plans/pricing](../../sources/cartesia.ai/plans-pricing/2026-10-26.md)). This is the opposite design
  from ElevenLabs, which publishes a 10,000-character ceiling for `eleven_v4`
  ([Eleven v4 models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)) —
  a Cartesia pipeline cannot be sized against a published number, only against an observed one.
- **Emotion is English-only and beta**, and mid-generation emotion shifts are "highly experimental".
- **`[laughter]` and other non-verbalisms are contested** between vendor docs and a host.
- **Break tags degrade quality.** "Break tags split the generation, so the model has less surrounding
  context and the speech can sound less natural. Avoid placing several break tags in quick succession,
  which can cause the model to hallucinate."
- **PVCs lose request-time speed control** ("take their pacing from their source recordings") and cannot
  be used with `sonic-preview`; each language needs its own dataset and voice ID.
- **Cross-language accents flatten on 3.6**, deliberately; the vendor points accent-dependent workflows
  at 3.5.
- **The alias moves.** `sonic-3.6` tracks the newest stable snapshot; only the dated snapshot is
  immutable, and the September 2026 changes are not mapped to a snapshot.
- **Host gaps.** fal and Replicate serve no Cartesia model at all. LiveKit Inference serves the model
  but not voices you created in a Cartesia account: "Pre-existing custom Cartesia voices are not
  available through LiveKit Inference. To use these, create your own Cartesia account and use the
  Cartesia plugin." LiveKit runs its own cloning flow instead — "Upload or record a sample, and LiveKit
  clones it to all supported TTS providers on your plan" — so a cloned voice is portable across LiveKit
  providers but not from Cartesia's own workspace.
- **Self-hosting is enterprise-only** (on-prem, VPC, air-gapped, OEM) — no published price.
- **No watermarking statement was found.** Unlike ElevenLabs, which documents an inaudible watermark and
  no API opt-out ([Eleven v4 watermarking](../../sources/elevenlabs.com/eleven-v4-watermarking/2026-10-26.md)),
  no Cartesia page captured here mentions watermarking at all.
- **No independent quality measurement beyond the AA board.** No MOS, WER or speaker-similarity number
  was captured from any source.

## Access, pricing, licensing

### Billing basis

**Per character**, metered as credits at "~1 credit per character" with "the exact number of credits
[able to] vary slightly due to transcript pre-processing"; "credits are only used by successful
requests" ([credits pricing](../../sources/cartesia.ai/credits-pricing/2026-10-26.md)). Cartesia states
the conversion: "One minute of audio generation requires 750-800 credits. 1 credit equals 1 character."
There is no per-model TTS price — every Sonic version bills at the same rate.

| Route | Published basis | Effective rate |
| --- | --- | --- |
| Cartesia plans | credits; Pro $5/100K, Startup $49/1.25M, Scale $299/8M | **$50.00 / $39.20 / $37.38 per 1M chars** (plan price ÷ included credits) |
| Cartesia overage | stated explicitly | **$65 (Pro) / $45 (Startup) / $38 (Scale) per 1M credits** |
| LiveKit Inference | per minute, no character basis | **$0.0300/min** (Build/Ship), **$0.0225/min** (Scale) |
| Artificial Analysis | third-party normalisation | **$49.0 per 1M chars** |

Sources: [plans/pricing](../../sources/cartesia.ai/plans-pricing/2026-10-26.md),
[LiveKit pricing](../../sources/livekit.io/inference-pricing/2026-10-26.md),
[AA board](../../sources/artificialanalysis.ai/sonic-3-6-leaderboard/2026-10-26.md).

At Cartesia's own 750–800 credits per minute, the credit rates work out to roughly **$0.028–$0.040 per
minute of audio** depending on tier, which brackets LiveKit's $0.03/min. AA's $49.0/1M sits between
Cartesia's Startup overage ($45) and Pro list ($50) rates; AA does not publish its normalisation method,
so treat it as an estimate, not a list price.

Cartesia also publishes a credit-based side-price for voice work: 225 credits per added voice accent,
and PVC training free (generation still 1 credit/char).

### Licensing and commercial terms

- **Commercial use requires a paid plan.** The Free plan is "for evaluation and personal use"; the Pro
  plan ($5/mo) adds a "Commercial use license"
  ([plans/pricing](../../sources/cartesia.ai/plans-pricing/2026-10-26.md),
  [product page](../../sources/cartesia.ai/sonic-marketing-page/2026-10-26.md)).
- **Cloning requires verified consent** and unconsented cloning of public figures is prohibited by the
  Terms of Use. The verification mechanism itself is not documented in anything captured.
- **No weights licence exists** — the model is closed. Self-hosted, VPC and OEM deployment are available
  "under enterprise contracts", so the licence is a contract term, not a published one.
- **Compliance posture claimed:** SOC 2 Type II, HIPAA-eligible with BAAs, GDPR-compliant, zero data
  retention for enterprise customers.

## Unresolved questions

1. **Is Sonic 3.6 really #1 anywhere on Artificial Analysis?** The vendor says so; the 2026-10-26
   Provider Voice Leaderboard says 4th. The page's other tabs (Speech Arena, Controlled Voice
   Leaderboard) were not captured, so the claim is neither confirmed nor refuted.
2. **What is the actual maximum transcript length?** No schema or doc states one, so long-form
   generation cannot be sized from documentation.
3. **Which snapshot does `sonic-3.6` point to now?** The September 2026 changes have no snapshot name,
   and the alias is documented to move.
4. **Does the sub-90 ms claim mean model compute or first audio?** The vendor uses three phrasings; the
   competitor chart's 262 ms is a different quantity.
5. **Is `[laughter]` real?** Cartesia documents inserting it; LiveKit states the model "doesn't produce
   non-verbal sounds like laughs or sighs". Both are unmeasured here.
6. **Is output watermarked?** No Cartesia page captured mentions watermarking, in either direction.
7. **Does a failed mid-stream request bill?** The docs say errors do not consume credits but do not
   address partial streams.
8. **Why is there no fal or Replicate endpoint** for the model that a competitor benchmarks itself
   against, while LiveKit does serve it?
9. **How good is the 44-language claim per language?** The AA row is one aggregate over 8 voices; no
   per-locale breakdown was captured, and the vendor's own "native speaker quality" line is prose.
10. **What does self-hosted/OEM cost?** No price, no minimum, no model-access terms are published.

## Evidence status

Evidence floor: **met.** First-party: seventeen Cartesia captures — the Sonic 3.6 model page, the 2026
changelog, the Sonic product page, the plan pricing page, the docs credits-pricing page, the TTS bytes
API reference, the endpoint comparison, the output-format guide, the SSML-tag and volume/speed/emotion
guides, the instant-clone and pro-clone guides, the multilingual-voices guide, the voice-selection
guide, the older-models page, the deprecated-models page and the Sonic 3.5 page. Independent hosts: one
LiveKit record pair (model catalogue and per-minute pricing). Negative host records: fal and Replicate.
Independent measurement: one Artificial Analysis board capture covering the Sonic 3, 3.5 and 3.6 rows.
All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules (Cartesia's
in credits, LiveKit's in dollars per minute); the quality and latency statements are the vendor's own
except where the AA board or a competitor's chart is named, and neither of those is a test run here.

The next useful evidence would be a small reproducible test set: the same 1,000-character script through
`sonic-3.6` and `sonic-3.6-2026-08-27` on Cartesia's bytes endpoint at 8/16/48 kHz, timed for
time-to-first-byte with the connection cost separated out; a long transcript (10k, 50k characters) to
find the real ceiling; the same script in Odia, Urdu and Hinglish; a cloned voice across two languages to
check the 3.6 accent-flattening behaviour against 3.5; `[laughter]` in a transcript to settle the
non-verbalism dispute; and a watermark check on the resulting WAV files.
