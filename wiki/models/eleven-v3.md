# Eleven v3

ElevenLabs' expressive text-to-speech model of the 2025 generation, announced **2025-06-03** as
"Eleven v3 (alpha)" and made **generally available on 2026-02-02**
([alpha announcement](../../sources/elevenlabs.com/eleven-v3-blog-announcement/2026-10-26.md),
[GA announcement](../../sources/elevenlabs.com/eleven-v3-ga-announcement/2026-10-26.md)). It introduced
inline audio tags and the Text to Dialogue endpoint, and it is now a retained, superseded model: since
2026-09-28 ElevenLabs has shipped Eleven v4 and steers users to it
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[help centre](../../sources/elevenlabs.com/eleven-v3-what-is/2026-10-26.md)).

**Window note.** The original launch (2025-06-03) predates the roster's one-year window (≥ 2025-10-26)
by about five months; the general-availability release (2026-02-02) falls inside it. Both dates are
stated here and neither is re-dated. No out-of-window exception is needed for the row, but a reader
comparing v3 with in-window launches is comparing a 2025 model that was re-released in 2026.

## Identity

- **Canonical name:** Eleven v3. **Model ID:** `eleven_v3`. **Variant:** `eleven_v3_conversational`
  ("Our most expressive, realtime speech synthesis model (~280ms†)") — a separate ID, not a flag
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **Vendor:** ElevenLabs. No third-party developer is credited anywhere in the corpus.
- **Aliases in circulation:** "Eleven v3 (alpha)" / "v3 alpha" (the launch name, still in Replicate's
  README and in the help-centre URL `what-is-eleven-v3-alpha`), "Eleven v3" (current), "v3"
  (host shorthand), "v3 Conversational" (`eleven_v3_conversational`).
- **Dates.** Announced 2025-06-03 as a "research preview"
  ([alpha announcement](../../sources/elevenlabs.com/eleven-v3-blog-announcement/2026-10-26.md));
  GA 2026-02-02 ([GA announcement](../../sources/elevenlabs.com/eleven-v3-ga-announcement/2026-10-26.md)).
  Neither post carries a checkpoint or revision ID, so "v3 at GA" is a date, not an identifier.
- **Host endpoints.** The roster label `fal-ai/elevenlabs/tts/eleven-v3` is **correct**; the verified
  routes are:

| Route | Endpoint | Notes |
| --- | --- | --- |
| ElevenLabs | `POST /v1/text-to-speech/{voice_id}`, `model_id: eleven_v3` | vendor's documented path ([help centre](../../sources/elevenlabs.com/eleven-v3-what-is/2026-10-26.md)) |
| ElevenLabs | `POST /v1/text-to-dialogue`, `model_id: eleven_v3` | multi-speaker dialogue ([help centre](../../sources/elevenlabs.com/eleven-v3-what-is/2026-10-26.md)) |
| ElevenLabs | `POST /v1/text-to-dialogue/stream-input` | WebSocket; `model_id` "must start with `eleven_v3` or `eleven_v4`" ([realtime dialogue guide](../../sources/elevenlabs.com/eleven-v3-realtime-dialogue/2026-10-26.md)) |
| fal | `fal-ai/elevenlabs/tts/eleven-v3` (+ `/stream`) | legacy `fal-ai/` namespace, category `text-to-audio` ([fal](../../sources/fal.ai/eleven-v3/2026-10-26.md)) |
| Replicate | `elevenlabs/v3` | official vendor-owned model, 165,105 runs at capture ([Replicate](../../sources/replicate.com/eleven-v3/2026-10-26.md)) |

- **Siblings:** `eleven_v3_conversational` (same family), and the predecessors/successors
  `eleven_v4` / `eleven_v4_turbo` (current flagship, 2026-09-28) and `eleven_multilingual_v2`
  (previous generation). `eleven_turbo_v2_5`, `eleven_turbo_v2` and `scribe_v1` are the only models on
  the vendor's **Deprecated** table; v3 is not among them
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **Identity ambiguity.** The alpha/GA boundary is a real model change with no version marker: the GA
  post claims a more stable and more accurate model, but both eras answer to `eleven_v3`
  ([GA announcement](../../sources/elevenlabs.com/eleven-v3-ga-announcement/2026-10-26.md)). Host
  listings cannot disambiguate — fal's schema still asserts the stitching limits of the model, while
  Replicate's README still advertises the alpha.

### Distinguishing v3 from v4 and Multilingual v2

| | Eleven v3 | Eleven v4 | Multilingual v2 |
| --- | --- | --- | --- |
| Model ID | `eleven_v3` | `eleven_v4` | `eleven_multilingual_v2` |
| First announced | 2025-06-03 (alpha) | 2026-09-28 | not captured |
| GA | 2026-02-02 | launch day | not captured |
| Vendor status | retained, superseded ("we recommend switching to Eleven v4") | current flagship | "a previous generation" model |
| Languages claimed | 70+ (85 codes listed) | 90+ (84 codes listed) | 29 |
| Character limit | 5,000 (~5 min) | 10,000 (~10 min) | 10,000 (~10 min) |
| List price / 1K chars | $0.08 (Conversational $0.04) | $0.08 (Turbo $0.04) | $0.08 |
| Audio tags | yes — the feature's debut | yes, "more reliably" | not documented |
| Professional Voice Clone | "not fully optimized … potentially lower clone quality" | supported, plus `clone_strength` | not addressed |
| SSML break tags | not supported | not supported | supported (break-tag guidance excludes only v4 and v3) |
| Request stitching | **not available** | supported | not stated |
| Text to Dialogue | yes | yes (vendor's preferred route) | not stated |

Sources: [models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md),
[character limits](../../sources/elevenlabs.com/eleven-v3-character-limits/2026-10-26.md),
[best practices](../../sources/elevenlabs.com/eleven-v3-prompting-best-practices/2026-10-26.md),
[stitching](../../sources/elevenlabs.com/eleven-v3-request-stitching/2026-10-26.md).

Two conclusions follow. **v3 is not a repackaging of Multilingual v2**: different model ID, audio tags,
a dialogue endpoint, half the character limit, and no SSML support — it is a different architecture
generation, and the vendor describes v3 as the expressive one and Multilingual v2 as the long-form
stable one. **v3 is also not v4 at a lower price**: v4 doubles the character limit, adds PVC support,
adds stitching, and is priced identically, so nothing in the vendor's own tables makes v3 the cheaper
choice on the vendor route.

## Current assessment

The evidence supports a **current but superseded specialist**, not a preview and not a deprecated
model. It is still listed as a first-class model ID on the vendor's models page and pricing page, still
served by fal (`status: active`, no deprecation flag) and Replicate (official listing, latest version
2026-10-06), and still the named fallback for dubbing ("you can switch to `eleven_v3` or
`eleven_flash_v2_5`")
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[fal](../../sources/fal.ai/eleven-v3/2026-10-26.md),
[Replicate](../../sources/replicate.com/eleven-v3/2026-10-26.md),
[changelog](../../sources/elevenlabs.com/eleven-v4-changelog/2026-10-26.md)).

What keeps it in the catalogue is not a capability v4 lacks but the **alpha-era voice behaviour**: the
vendor warns that v4 "may sound substantially different from Eleven v3… you may still prefer how a
voice sounded in Eleven v3" and that a v4 Professional Voice Clone captures source flaws
([v4 model guide](../../sources/elevenlabs.com/eleven-v4-model-guide/2026-10-26.md)). That is a
vendor statement about rendering, not a measured difference, and no source quantifies it.

The most decision-relevant finding is **host pricing inversion**: both hosts charge **$0.10 per 1,000
characters** for v3 while the vendor lists **$0.08**, a 25% markup that does not exist for v4, where
fal matches the vendor to the cent
([fal](../../sources/fal.ai/eleven-v3/2026-10-26.md),
[Replicate](../../sources/replicate.com/eleven-v3/2026-10-26.md),
[pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)). A pipeline migrated from
v4 to v3 on a host pays more per character *and* gets half the character limit.

The second is that **the hosts strip the control surface**. fal exposes six input fields and no
`output_format`, `similarity_boost`, `seed` or voice-ID; Replicate exposes nine including `style` and
`speed` but still no `output_format` and no voice-ID
([fal](../../sources/fal.ai/eleven-v3/2026-10-26.md),
[Replicate](../../sources/replicate.com/eleven-v3/2026-10-26.md)). Only the vendor route offers the
28-value format enum, so host output is MP3 in practice.

## Documented capabilities

Everything in this section is vendor or host documentation. No direct tests were run.

### Audio tags and emotion

Tags are the capability v3 introduced: a short instruction in square brackets placed inline where
delivery should change
([help centre](../../sources/elevenlabs.com/eleven-v3-audio-tags/2026-10-26.md)). That page groups them
in three classes — emotions (`[sad]`, `[angry]`, `[happily]`, `[curious]`, `[crying]`, `[mischievously]`),
delivery direction (`[whispers]`, `[shouts]`) and non-verbal reactions (`[laughs]`, `[clears throat]`,
`[sighs]`, `[snorts]`, `[exhales]`). The prompting guide — written under a v4 heading but stated to
apply to v3 — adds sound effects (`[gunshot]`, `[applause]`, `[explosion]`, `[swallows]`) and
"experimental" forms (`[strong French accent]`, `[sings]`, `[woo]`)
([best practices](../../sources/elevenlabs.com/eleven-v3-prompting-best-practices/2026-10-26.md)).

Two constraints come with the feature. The vendor says **"The same tags work with both models"** (v3
and v4) — tags are a family capability, not a v3 differentiator
([help centre](../../sources/elevenlabs.com/eleven-v3-audio-tags/2026-10-26.md)). And tag adherence is
explicitly better on v4 ("handles them with a level of nuance beyond previous models"), with the
general warning that a tag "can occasionally be interpreted as a request for a sound effect rather than
a delivery instruction", that tags "land more readily when the delivery is already in the voice's
training data", and that experimental tags "may be less consistent across different voices"
([best practices](../../sources/elevenlabs.com/eleven-v3-prompting-best-practices/2026-10-26.md)).
No page quantifies v3's tag adherence.

Multi-speaker dialogue is the second headline feature: Text to Dialogue takes an array of
`speaker_id` + `text` turns and "automatically manages speaker transitions, emotional changes, and
interruptions" ([alpha announcement](../../sources/elevenlabs.com/eleven-v3-blog-announcement/2026-10-26.md),
[help centre](../../sources/elevenlabs.com/eleven-v3-what-is/2026-10-26.md)).

### Languages

"70+ languages" on every v3 page. The only enumeration is on the models page: **85 ISO codes** — the
same 84 codes listed for v4 plus Chichewa (`ny`) — with ISO 639-1 codes used "for most languages" and
ISO 639-3 for Asturian (`ast`), Cantonese (`yue`), Cebuano (`ceb`) and Filipino (`fil`). The "70+"
label is therefore an understatement of the vendor's own list, and the vendor concedes that "some
languages are handled more fluently than others"
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).

### Voice cloning

- **Instant Voice Cloning / designed voices:** the vendor's recommended path for v3 at launch
  ("it would be best to find an Instant Voice Clone (IVC) or designed voice for your project if you
  need to use v3 features")
  ([alpha announcement](../../sources/elevenlabs.com/eleven-v3-blog-announcement/2026-10-26.md)).
- **Professional Voice Cloning:** "not fully optimized for Eleven v3, resulting in potentially lower
  clone quality compared to earlier models" — stated identically at launch and in the current
  prompting guide, with v4 recommended instead
  ([best practices](../../sources/elevenlabs.com/eleven-v3-prompting-best-practices/2026-10-26.md),
  [alpha announcement](../../sources/elevenlabs.com/eleven-v3-blog-announcement/2026-10-26.md)).

### Output formats and sample rate

| Route | Formats | Top sample rate |
| --- | --- | --- |
| ElevenLabs TTS endpoint | 28 values: MP3 (22.05/24/44.1 kHz, 32–192 kbps), PCM, WAV, Opus, μ-law, A-law | 48 kHz (`pcm_48000`, `wav_48000`, `opus_48000_*`) |
| fal | MP3 in the documented example; no format selector | not stated |
| Replicate | single file URI (MP3 example), no selector | not stated |

Default on the vendor route is `mp3_44100_128`. 192 kbps MP3 requires Creator tier or above; 44.1 kHz
PCM/WAV requires Pro or above
([API reference](../../sources/elevenlabs.com/eleven-v3-tts-api-reference/2026-10-26.md),
[fal](../../sources/fal.ai/eleven-v3/2026-10-26.md),
[Replicate](../../sources/replicate.com/eleven-v3/2026-10-26.md)). The format enum is a property of the
**shared** endpoint; no vendor page states that v3 honours all 28 values.

### Determinism and stitching

`seed` exists on the vendor endpoint and is "best effort… Determinism is not guaranteed"
([API reference](../../sources/elevenlabs.com/eleven-v3-tts-api-reference/2026-10-26.md)); fal does not
expose `seed` at all. **Request stitching is unavailable for v3**: "Request stitching is not available
for the `eleven_v3` model", while the same guide's examples use `eleven_v4`
([stitching guide](../../sources/elevenlabs.com/eleven-v3-request-stitching/2026-10-26.md)).

### Latency

Vendor figures: `eleven_v3_conversational` ~280 ms, footnoted "excluding application & network
latency"; plain `eleven_v3` has no published latency
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)). At launch
ElevenLabs said v3's latency made it "not suitable for real-time and conversational use cases"
([alpha announcement](../../sources/elevenlabs.com/eleven-v3-blog-announcement/2026-10-26.md)) — which
is what `eleven_v3_conversational` later addressed.

## Limitations and constraints

- **5,000 characters ≈ 5 minutes per request**, on the website and on the API, and fal enforces the
  same 5,000 (`maxLength`). Replicate publishes no cap
  ([character limits](../../sources/elevenlabs.com/eleven-v3-character-limits/2026-10-26.md),
  [fal](../../sources/fal.ai/eleven-v3/2026-10-26.md)). No route publishes an independent
  audio-duration cap.
- **No SSML.** "Eleven v4 and Eleven v3 do not support SSML break tags" — pauses must be driven by
  punctuation, tags and text structure
  ([best practices](../../sources/elevenlabs.com/eleven-v3-prompting-best-practices/2026-10-26.md)).
- **No stitching**, so long-form work cannot inherit prosody across the 5,000-character boundary
  ([stitching guide](../../sources/elevenlabs.com/eleven-v3-request-stitching/2026-10-26.md)).
- **PVC quality is a documented weakness**, not an edge case
  ([best practices](../../sources/elevenlabs.com/eleven-v3-prompting-best-practices/2026-10-26.md)).
- **Hosts cannot reach cloned voices.** fal offers 20 preset names plus a free-form string; Replicate
  offers a 26-name enum. Neither documents a voice-ID field, so a v3 pipeline that depends on a clone
  is vendor-route-only as documented
  ([fal](../../sources/fal.ai/eleven-v3/2026-10-26.md),
  [Replicate](../../sources/replicate.com/eleven-v3/2026-10-26.md)).
- **No host exposes a format selector**, so the only evidenced host output is MP3 while the vendor
  route offers 28 format values.
- **Watermarking is on with no documented opt-out.** ElevenLabs embeds an inaudible watermark in "audio
  we generate", publishes no `watermark` parameter, and only its own Audio Detector can read it: "No
  other platforms can currently detect ElevenLabs watermarks"
  ([watermarking](../../sources/elevenlabs.com/eleven-v4-watermarking/2026-10-26.md)).
- **Enterprise-only features sit next to general ones.** Zero retention mode
  (`enable_logging=false`) is "only… for enterprise customers" and, when used, disables history
  features "including request stitching"
  ([API reference](../../sources/elevenlabs.com/eleven-v3-tts-api-reference/2026-10-26.md)).
- **The vendor steers users away from it.** The v3 help-centre pages carry a "we recommend switching
  to Eleven v4" banner
  ([help centre](../../sources/elevenlabs.com/eleven-v3-what-is/2026-10-26.md),
  [audio tags](../../sources/elevenlabs.com/eleven-v3-audio-tags/2026-10-26.md)).

## Access, pricing, licensing

### Billing basis

**Per input character** on every route — not per second, not per request.

| Route | Eleven v3 | v3 Conversational | Rounding |
| --- | --- | --- | --- |
| ElevenLabs API (list) | $0.08 / 1K chars | $0.04 / 1K chars | not stated |
| fal | $0.10 / 1K chars | not listed | per 1,000-character unit |
| Replicate | $0.10 / 1K chars ("or 10,000 characters for $1") | not listed | per 1,000-character unit |

Sources: [pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/eleven-v3/2026-10-26.md),
[Replicate](../../sources/replicate.com/eleven-v3/2026-10-26.md).

At the vendor rate a full 5,000-character request costs $0.40 ($0.20 on v3 Conversational); on either
host the same request costs $0.50. The vendor also bills credits — "1 credit per character on the
website", with "API generations are discounted" — and does not reconcile credits with the
USD-per-1K-character rate
([credit FAQ](../../sources/elevenlabs.com/eleven-v3-credit-cost/2026-10-26.md),
[pricing](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)).

The June 2025 launch promotion (80% off UI generations "until the end of June 2025", after which v3
cost "the same as Multilingual V2") is historical and is not a current price
([alpha announcement](../../sources/elevenlabs.com/eleven-v3-blog-announcement/2026-10-26.md)).

### Licensing and commercial terms

- **Output ownership:** "You retain ownership of any audio you generate."
- **Commercial rights:** "commercial usage rights are only available with paid plans. With a paid
  subscription, you may use generated audio for commercial purposes and monetize the outputs if you own
  the IP rights to the input content."
- **No weights licence exists** — v3 is hosted-only, with no open weights and no self-hosting path.
  fal marks the endpoint `license_type: "commercial"`, which is the host's assertion about use through
  fal, not an ElevenLabs grant.
- **Voice-cloning consent terms were not captured.** ElevenLabs references a verification process but
  no consent policy page was retrieved for this page, so nothing is claimed about who may clone whom.

Ownership and commercial quotes: [Text to Dialogue FAQ](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md);
host licence field: [fal](../../sources/fal.ai/eleven-v3/2026-10-26.md).

## Unresolved questions

1. **Which v3 is being served?** The 2026-02-02 GA release changed the model under the same ID with no
   checkpoint, and neither host exposes a revision. Cross-host and cross-month comparisons cannot be
   pinned to a version.
2. **Why do both hosts charge $0.10 when the vendor lists $0.08?** Neither host explains its margin,
   and the vendor's own page does not mention reseller pricing.
3. **Do `previous_text` / `next_text` do anything on Replicate?** The vendor says stitching is
   unavailable for `eleven_v3` and fal's schema says the model "doesn't support" those fields, yet
   Replicate's input schema accepts both. Unresolved.
4. **Is the v3 watermark present on fal and Replicate output?** fal declares its ElevenLabs endpoints
   partner/proxied (`provider_type: "partner"` on the v4 sibling) and Replicate runs this model on CPU,
   both consistent with an API wrapper rather than self-hosted weights, so the mark should survive; no
   source says so and no test was run.
5. **Does v3 honour the full 28-format output enum, `style`, `speed` and `audio_effects`?** The API
   reference is model-agnostic and publishes no per-model matrix; hosts expose different subsets.
6. **How much better is v4 on tags, really?** The only statements are directional ("beyond previous
   models", "more reliably"); no measurement exists in the corpus.
7. **What did GA change in numbers?** The GA post's 72% preference and 15.3% → 4.9% error rate are
   vendor-internal, with no harness, sample size or per-language breakdown.
8. **Was the public API available at the alpha launch?** The launch post says "available today … in the
   API" in the body and "Public API for Eleven v3 (alpha) is coming soon" in its own FAQ.
9. **Do failed or empty generations bill?** No source states it.

## Evidence status

Evidence floor: **met.** First-party: two dated ElevenLabs announcements (alpha 2025-06-03, GA
2026-02-02) and eight documentation pages captured for this page — the help-centre "What is Eleven
v3?", audio-tag, character-limit and credit-cost FAQs, the prompting guide, the TTS API reference, the
stitching guide and the realtime dialogue guide — plus four ElevenLabs records already in the corpus
(models overview, API pricing, changelog, watermarking). Independent hosts: **fal** (catalogue record,
OpenAPI schema, price string, `llms.txt`) and **Replicate** (official listing, embedded version schema,
billing block). All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules that
disagree by 25% across publishers; the only quality numbers are ElevenLabs' own internal benchmark and
preference figures, and the only latency figure is a vendor footnote.

The next useful evidence would be a small reproducible test set against named endpoints and dates: the
same 1,000-character tagged script through `eleven_v3` on ElevenLabs, fal and Replicate, scored for tag
adherence and speaker identity; a 5,000-character request on each route to confirm the cap; a PVC
generation to test the "not fully optimized" warning; `previous_text` on Replicate to see whether the
field changes output; and a watermark check on host-produced files with the ElevenLabs Audio Detector.
