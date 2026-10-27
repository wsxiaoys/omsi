# fal.ai: `fal-ai/elevenlabs/speech-to-text/scribe-v2` (catalogue, schema, pricing)

- Origin: fal.ai public model catalogue and endpoint surfaces:
  - `GET https://api.fal.ai/v1/models?endpoint_id=fal-ai/elevenlabs/speech-to-text/scribe-v2`
    (saved as [`catalogue-metadata.json`](catalogue-metadata.json))
  - `GET https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=fal-ai/elevenlabs/speech-to-text/scribe-v2`
    (saved as [`openapi-queue-v2.json`](openapi-queue-v2.json))
  - model page: <https://fal.ai/models/fal-ai/elevenlabs/speech-to-text/scribe-v2>
  - sibling endpoint `fal-ai/elevenlabs/speech-to-text` (Scribe v1):
    [`catalogue-metadata-scribe-v1.json`](catalogue-metadata-scribe-v1.json),
    [`openapi-queue-scribe-v1.json`](openapi-queue-scribe-v1.json)
- Evidence kind: provider documentation (host catalogue metadata, input/output schema, price strings)
- Publication date: endpoint `date` 2026-01-14T14:30:10.342Z, `updated_at` 2026-10-20T22:07:58.113Z.
  Capture date 2026-10-26
- Relevant models: Scribe v2 (`scribe_v2`) as served by fal; Scribe v1 endpoint for comparison

## Endpoint identity

`endpoint_id` `fal-ai/elevenlabs/speech-to-text/scribe-v2`, `display_name` "ElevenLabs Speech to Text
- Scribe V2", `category` "speech-to-text", `status` "active", `kind` "inference", `license_type`
"commercial", `date` 2026-01-14T14:30:10.342Z, `updated_at` 2026-10-20T22:07:58.113Z, tags
`["speech-to-text"]`, `group` `{key: "e11-speech-to-text", label: "Scribe V2"}`.

Catalogue description (verbatim): *"Use Scribe-V2 from ElevenLabs to do blazingly fast speech to text
inferences!"*

Schema `about` (verbatim):

> ElevenLabs Speech to Text with Scribe V2: Transcribe audio with improved accuracy.
>
> Transforms spoken audio into text with word-level timestamps and optional speaker identification.
> Supports 99 languages with state-of-the-art accuracy. Scribe V2 offers improved performance and
> supports keyterms for biasing transcription.

The model page carries the labels "Inference", "Commercial use" and "Partner". Nothing on the page
calls the model a preview.

**Language-count discrepancy:** fal says "99 languages"; ElevenLabs' own docs say "90+ languages" and
enumerate 100 ISO-639-3 codes. fal's sentence is byte-identical to the `about` text on its Scribe v1
endpoint, so this looks like inherited copy rather than an independent count.

## Input schema (verbatim field descriptions)

| Field | Type | Default | Constraint / description |
| --- | --- | --- | --- |
| `audio_url` | string (url) | — | **required**. "URL of the audio file to transcribe" |
| `language_code` | string \| null | unset | "Language code of the audio"; examples `eng`, `spa`, `fra`, `deu`, `jpn` |
| `diarize` | boolean | **`true`** | "Whether to annotate who is speaking" |
| `tag_audio_events` | boolean | `true` | "Tag audio events like laughter, applause, etc." |
| `keyterms` | `list<string>` | `[]` | `maxItems` **100**. "Words or sentences to bias the model towards transcribing. Up to 100 keyterms, max 50 characters each. Adds 30% premium over base transcription price." |

The playground's accepted upload types are "mp3, ogg, wav, m4a, aac" — narrower than ElevenLabs'
own format list.

## Output schema

`text`, `language_code`, `language_probability`, `words[]` where each word has `text`, `start`, `end`,
`type` (`word` / `spacing` / `audio_event`) and `speaker_id` (e.g. `speaker_0`). The page's sample
response returns `"language_code": "eng"`, `"language_probability": 1`.

## Pricing (verbatim from the model page)

> Your request will cost **$0.008 per minute** of input audio. If keyterm is used, your request will
> cost 30% more.

That is **$0.48/hour**, i.e. ~2.2× ElevenLabs' own $0.22/hour list price for the same model, plus 30%
for keyterms ($0.0104/min, $0.624/hour).

## Sibling endpoint: Scribe v1

`fal-ai/elevenlabs/speech-to-text`, `display_name` "ElevenLabs Speech to Text", `date`
**2025-02-27T00:00:00.000Z**, `updated_at` 2026-10-14, `status` "active", `license_type`
"commercial", `group` `{key: "e11-speech-to-text", label: "Scribe V1"}`, description *"Generate text
from speech using ElevenLabs advanced speech-to-text model."*

Both endpoints sit in the same fal group (`e11-speech-to-text`) with labels "Scribe V1" and
"Scribe V2", and both are still active on 2026-10-26.

The v1 input schema has only `audio_url`, `language_code`, `tag_audio_events` and `diarize`
(`default: true`). **No `keyterms` field exists on the v1 endpoint.** That is the concrete,
host-observable capability difference between the two fal endpoints.

## What this establishes

- fal treats Scribe v2 as a distinct endpoint from Scribe v1 (separate slug, separate group label,
  separate `date`), and hosts both simultaneously — matching ElevenLabs' own ID-level split rather than
  a rename.
- fal's endpoint `date` of 2026-01-14 is five days after ElevenLabs' 2026-01-09 launch post.
- fal exposes only a subset of the vendor API: no `timestamps_granularity` (timestamps are always
  word-level), no `num_speakers`/`diarization_threshold`, no entity detection or redaction, no
  `transcript_edit`, no multichannel, no `source_url`/YouTube input, no webhooks, and a 100-keyterm cap
  where the vendor allows 1000.
- `diarize` defaults to `true` on fal (the vendor's own default is off), so a caller who does not set
  it gets speaker labels whether or not they want them.

## Known gaps

- `date`/`updated_at` are catalogue timestamps; the API does not say what `date` means (creation,
  first publication, or first successful inference), and there is no served-revision field, so which
  `scribe_v2` build fal runs is unknown.
- The page states no file-size, duration, or rate limit for the host endpoint.
- No latency measurement is captured here.
