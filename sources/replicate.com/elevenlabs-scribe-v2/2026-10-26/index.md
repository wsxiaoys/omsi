# Replicate: `elevenlabs/scribe-v2` (model page, schema, billing)

- Origin: Replicate, model page <https://replicate.com/elevenlabs/scribe-v2>; version/schema data from
  <https://replicate.com/elevenlabs/scribe-v2/api/schema> (saved as
  [`version-schema.json`](version-schema.json))
- Evidence kind: provider documentation (host catalogue listing, request schema, billing config)
- Publication date: latest version `created_at` **2026-05-06T16:07:57.474854Z**; the page renders the
  age as "5 months, 3 weeks ago". Capture date 2026-10-26
- Relevant models: Scribe v2 (`scribe_v2`) as served by Replicate

## Listing (verbatim)

> Transcribe speech with ElevenLabs Scribe v2. 90+ languages, word-level timestamps, speaker
> diarization for up to 32 speakers, audio event tagging, and keyterm biasing. Files up to 3 GB and 10
> hours.

Page metadata: **756.6K runs**, "Readme: This model doesn't have a readme", and a "License" link
pointing to <https://elevenlabs.io/terms>. Latest version ID
`9eb29120c4147eb5631dc99ab1f1f4ece9aac3c483e1810d4c5ef80f123edb11`, hardware **CPU**.

Replicate's own file limits here (3 GB, 10 hours) match ElevenLabs' FAQ and not the API reference's
5 GB figure.

## Input schema (verbatim descriptions, from `version-schema.json`)

| Field | Type | Default | Constraint / description |
| --- | --- | --- | --- |
| `audio` | string (uri) | — | **required**. "Audio or video file to transcribe. Supports MP3, WAV, M4A, FLAC, OGG, OPUS, WebM, AAC, MP4, MOV, MKV, AVI, and more. Max 3 GB, up to 10 hours." |
| `language_code` | string | `auto` | "ISO-639-1 (e.g. 'en') or ISO-639-3 (e.g. 'eng') code. Set to 'auto' to detect the language automatically." |
| `diarize` | boolean | **`false`** | "Identify and label different speakers […] each word in the output includes a 'speaker_id'. Supports up to 32 speakers." |
| `num_speakers` | integer | `0` | 0–32. "Maximum number of speakers expected […] Only used when 'diarize' is true." |
| `keyterms` | string | `""` | "Comma-separated list of words or phrases to bias transcription towards. […] Up to 1000 terms, max 50 characters each." |
| `no_verbatim` | boolean | `false` | "Remove filler words ('um', 'uh'), false starts, and disfluencies from the transcript." |
| `tag_audio_events` | boolean | `true` | "Tag non-speech sounds in the transcription, like (laughter), (footsteps), or (applause)." |
| `timestamps_granularity` | string | `word` | "`word` returns start/end times for each word, `character` adds per-character timing, `none` omits timestamps." |
| `temperature` | number | `-1` | −1–2. "Set to -1 to use the model default (usually 0)." |
| `seed` | integer | `-1` | "Random seed for reproducible outputs." |

Output: `text`, `language_code`, `language_probability` (required) plus `words[]` (`text`, `type`,
`start`, `end`, `speaker_id`) and `duration_seconds`.

Notably, Replicate passes through more of the vendor surface than fal: `num_speakers`,
`timestamps_granularity` including `none`/`character`, `no_verbatim`, `temperature` and `seed`. It
still exposes no entity detection/redaction, no `transcript_edit`, no multichannel and no webhooks.

## Billing (verbatim from the page's billing config)

> elevenlabs/scribe-v2: $0.003667/min = $0.22/hr (ElevenLabs list price pass-through). 1
> generic_output_count = 1 minute of input audio rounded up.

Rendered price strings: "$0.0001 per second"; "$3.667 per thousand outputs"; "or around 272 outputs for
$1".

## What this establishes

- Replicate hosts Scribe v2 as a **pass-through at the vendor's own $0.22/hour**, unlike fal's
  $0.48/hour — a 2.2× host difference for the same model.
- Replicate's billing granularity is coarser than the vendor's: it rounds each request **up to the next
  whole minute**, while ElevenLabs meters every second. Short clips therefore cost relatively more on
  Replicate.
- Replicate's version `created_at` (2026-05-06) is roughly four months after the vendor's 2026-01-09
  launch; this is a hosting date, not a model date.
- `diarize` defaults to `false` here and `true` on fal, so identical requests on the two hosts return
  different output shapes by default.

## Gaps

- No readme, no model card, no measurement of quality or latency on Replicate.
- The "License" link is to ElevenLabs' general terms; it says nothing about weights (none are
  published).
- Replicate's authenticated model API returns 401 without a token, so this record rests on the public
  page and the public schema endpoint.
