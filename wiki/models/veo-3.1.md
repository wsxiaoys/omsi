# Veo 3.1

Google DeepMind's video generation family with native synchronised audio, shipped as three tiers —
Veo 3.1, Veo 3.1 Fast and Veo 3.1 Lite — under the model IDs `veo-3.1-generate-001`,
`veo-3.1-fast-generate-001` and `veo-3.1-lite-generate-001`
([Vertex AI model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)). It produces
4-, 6- or 8-second 24 FPS mp4 clips at 16:9 or 9:16 from text, a first image, first and last frames,
or up to three reference images, and can be extended in 7-second steps
([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md),
[extend guide](../../sources/cloud.google.com/veo-extend-videos/2026-10-26.md)).

**Out-of-window flag.** Veo 3.1 first shipped in preview on **2025-10-15** — eleven days before this
roster's 2025-10-26 cutoff — and reached general availability on **2025-11-17**
([release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md)). The roster retains
the row; this page records the original date and does not claim a launch inside the window. The GA
release, the extension feature (2025-12-08) and the Lite tier (2026-04-02) all fall inside it, which is
why the model is still a current, actively-served option rather than a historical one.

## Identity

- **Canonical name:** Veo 3.1. The vendor's product page titles it exactly that
  ([DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md)), so the roster label matches
  first-party naming.
- **Vendor:** Google DeepMind. First-party surfaces are the Gemini app, Google Flow, Google AI Studio,
  Google Vids, the Gemini API and Vertex AI / Gemini Enterprise Agent Platform
  ([DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md),
  [fal FAQ](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md)); only the Google Cloud and fal
  paths were captured in detail.
- **Aliases:** "Veo 3.1 Fast", "Veo 3.1 Lite" (fal writes "Light"). "Veo 3.1 preview" and "Veo 3.1 Fast
  preview" were the launch names of the preview IDs `veo-3.1-generate-preview` and
  `veo-3.1-fast-generate-preview`, retired on 2026-03-03
  ([release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md)).

| Tier | Google Cloud model ID | fal endpoints | Replicate |
| --- | --- | --- | --- |
| Veo 3.1 | `veo-3.1-generate-001` | `fal-ai/veo3.1`, `/image-to-video`, `/first-last-frame-to-video`, `/reference-to-video`, `/extend-video` | `google/veo-3.1` |
| Veo 3.1 Fast | `veo-3.1-fast-generate-001` | `fal-ai/veo3.1/fast` and `…/fast/{image-to-video,first-last-frame-to-video,extend-video}` | `google/veo-3.1-fast` |
| Veo 3.1 Lite | `veo-3.1-lite-generate-001` (preview) | not hosted | not hosted |
| Retired previews | `veo-3.1-generate-preview`, `veo-3.1-fast-generate-preview` | — | — |

Sources: [model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md),
[fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md),
[Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md),
[Replicate fast](../../sources/replicate.com/veo-3.1-fast/2026-10-26.md).

- **Siblings:** Veo 3 and Veo 3 Fast (GA IDs deprecated in favour of 3.1 on 2026-03-24, and still
  priced identically to 3.1 on the Google Cloud list), Veo 2 (the only Veo with documented
  insert/remove-object editing, in preview), and Gemini Omni Flash, which now owns prompt-driven video
  *editing* on Google Cloud
  ([release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md),
  [edit guide](../../sources/cloud.google.com/video-edit-models/2026-10-26.md)).

### One page for three tiers

The three tiers are treated here as one entity with per-tier caveats. Every capability statement that
matters is tier-specific and documented side by side on a single vendor page, and the vendor sells
them as one line ("Veo 3.1 is our latest line of video generation models"). Two of the three tiers are
not separately documented enough to carry a page: Lite appears in one release-note entry and one model
card section, with no launch post, no changelog history and no host. Splitting would produce pages that
drift from the parent's evidence rather than diverge from it.

The tier boundary is nevertheless real, not cosmetic: Lite takes no image input at all, standard is the
only tier advertising 4K output on Google Cloud, and the price spread between standard and Lite is
4–8× ([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md),
[pricing](../../sources/cloud.google.com/veo-pricing/2026-10-26.md)).

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2025-10-15 | Veo 3.1 and Veo 3.1 Fast available **in Preview** on Vertex AI, including reference-image generation | [release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md) |
| 2025-10-15 | Replicate publishes `google/veo-3.1` (10:30Z) and `google/veo-3.1-fast` (12:02Z) | [Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md), [fast](../../sources/replicate.com/veo-3.1-fast/2026-10-26.md) |
| 2025-10 | DeepMind's benchmark cards say "Last updated October 2025" | [DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md) |
| 2025-11-17 | **Generally Available** on Vertex AI (`…-001` IDs) | [release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md), [model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md) |
| 2025-12-08 | Video extension arrives, in Preview | [release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md) |
| 2026-01-13 | Reference-to-video gains 9:16 and 1080p/4K upsampling (still Preview) | [release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md) |
| 2026-03-03 | Preview IDs deprecated, replaced by the `…-001` IDs on 2026-04-02 | [release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md) |
| 2026-03-24 | Veo 3 and Veo 2 GA endpoints deprecated in favour of Veo 3.1 (migration by 2026-06-30) | [release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md) |
| 2026-03-25 | Latest Replicate versions of both tiers published | [Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md) |
| 2026-04-02 | **Veo 3.1 Lite** available in public preview | [release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md), [model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md) |
| 2026-11-17 | Retirement date for the GA IDs "or later"; fal mirrors it as its endpoint deprecation date | [model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md), [fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md) |

## Current assessment

Veo 3.1 is a **refinement of Veo 3, not a new generation of the model**, and the vendor material says
so in as many words: fal calls it "a refinement of that foundation" and Google's own page still carries
Veo 3 launch copy in the same scroll
([fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md),
[DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md)). What 3.1 adds, according to the
people selling it, is better dialogue and audio-visual sync, stronger reference-image adherence and
better multi-shot narrative control; fal's summary is that "for one-off hero shots, Veo 3 and 3.1 are
comparable" and that the upgrade pays off for dialogue-heavy or extended sequences
([fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md)). No independent measurement of
that delta was captured — the only numbers anywhere in the corpus are Google's own human-preference
cards, which publish no values, no opponent list and no margins
([DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md)).

It is **current, not deprecated**. Google's model card gives it a retirement date of 2026-11-17 "or
later", i.e. a year-long support window that had not closed at capture; the two older Veo generations
were deprecated *into* it in March 2026; and both hosts serve it with the same 2026-11-17 horizon
([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md),
[release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md),
[fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md)).

What the evidence actually supports is a **strong feature envelope at a high price with a narrow access
path**, not a quality ranking. The envelope — 4/6/8 s, 24 FPS, 720p/1080p/4K on standard, 16:9 or 9:16,
native audio with dialogue, reference subjects, extension — is documented consistently by Google,
fal and Replicate. The access path is narrow: one Google Cloud zone (`us-central1`), English-only
prompts, no batch inference, and a pricing unit that the price page never defines
([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md),
[pricing](../../sources/cloud.google.com/veo-pricing/2026-10-26.md)).

Three documented weaknesses are worth stating plainly because they come from the vendor:

1. **Short spoken audio is the vendor's own named gap** — "creating videos with natural and consistent
   spoken audio, particularly for shorter speech segments, remains an area of active development"
   ([DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md)).
2. **Eight seconds is a hard ceiling per generation**, and the only route past it is chained
   extension capped at 37 s on Google Cloud
   ([extend guide](../../sources/cloud.google.com/veo-extend-videos/2026-10-26.md)).
3. **The editing features DeepMind advertises are not in the Veo 3.1 API.** "Add object", "Remove
   object", "Outpainting", "Character controls" and "Motion controls" appear as panels on the Veo
   product page, but Google Cloud's video-editing guide lists only `gemini-omni-*` models, and the
   only Veo editing capability in the changelog is attached to Veo 2
   ([DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md),
   [edit guide](../../sources/cloud.google.com/video-edit-models/2026-10-26.md),
   [release notes](../../sources/cloud.google.com/veo-release-notes/2026-10-26.md)). Treat those
   panels as Flow application features until a source shows otherwise.

## Documented capabilities

All of this is vendor or host documentation. Nothing on this page was tested.

### Output envelope

| | Veo 3.1 | Veo 3.1 Fast | Veo 3.1 Lite |
| --- | --- | --- | --- |
| Duration | 4, 6 or 8 s (reference-to-video: 8 s only) | 4, 6 or 8 s | 4, 6 or 8 s |
| Output resolution | 720p, 1080p, 4K | 720p, 1080p (fal and the price list also sell 4K) | 720p, 1080p |
| Input resolution | 720p, 1080p | 720p, 1080p | 720p, 1080p |
| Frame rate | 24 FPS | 24 FPS | 24 FPS |
| Aspect ratio | 16:9, 9:16 | 16:9, 9:16 | 16:9, 9:16 |
| Audio | generated; hosts default `generate_audio: true` | same | Google: generated. fal: "silent" |
| Container | video/mp4 | video/mp4 | video/mp4 |
| Videos per request | up to 4 | up to 4 | up to 4 |
| Prompt language | English | English | English |
| Region | `us-central1` | `us-central1` | `us-central1` |

Sources: [model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md),
[fal schema](../../sources/fal.ai/veo-3.1-api-schema/2026-10-26.md),
[Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md).

The **4K row for Fast** is a live contradiction: the model card caps `veo-3.1-fast-generate-001` at
1080p output, while the Google Cloud price list sells "Veo 3.1 Fast … 4k" at $0.30/$0.35 per count and
fal sells `fal-ai/veo3.1/fast` at 4K for $0.30/$0.35 per second. The price list and fal agree against
the model card, but the model card is the only first-party *capability* statement. Unresolved below.

**Replicate has no 4K at all** on either tier — its `resolution` enum is `720p | 1080p` — so the three
routes are not interchangeable at the top of the range
([Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md)).

### Inputs and tasks

- **Text-to-video, image-to-video (first frame), first-and-last-frame interpolation** — all three
  tiers, on Google Cloud and on both hosts
  ([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md),
  [fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md),
  [Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md)).
- **Reference-subject generation.** "You provide up to three images of a single person, character, or
  product. Veo preserves the subject's appearance in the output video." Supported on standard and
  fast, not Lite; images in PNG/JPEG/WebP, passed as Cloud Storage URIs
  ([reference guide](../../sources/cloud.google.com/veo-reference-images/2026-10-26.md)). Replicate
  states the interaction rules that Google does not: reference images "only work with 16:9 aspect
  ratio and 8-second duration", and "Last frame is ignored if reference images are provided"
  ([Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md)).
- **Video extension.** 7 seconds per step, applied to a 1–30 s, 24 fps input; total capped at 37 s on
  Google Cloud ([extend guide](../../sources/cloud.google.com/veo-extend-videos/2026-10-26.md)).
- **Image input limits.** 20 MB maximum for the image-to-video input image; Replicate advises "16:9 or
  9:16 and 1280x720 or 720x1280" source images
  ([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md),
  [Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md)).
- **Host-side extras.** fal adds `negative_prompt`, `seed`, `auto_fix` (silently rewrites prompts that
  fail policy) and `safety_tolerance` (1–6). Replicate adds `negative_prompt` and `seed`. None of these
  appears in the captured Google documentation
  ([fal schema](../../sources/fal.ai/veo-3.1-api-schema/2026-10-26.md),
  [Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md)).
- **Audio is output-only.** The model card's modalities block lists Audio as "Not supported" for all
  three tiers, in a block that otherwise describes inputs (text in, image in, video out). There is no
  audio *input* path on any captured route: no dubbing, no voice reference, no music bed
  ([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)).

### Audio

Audio is generated with the picture: dialogue with lip sync, sound effects, ambient beds and music,
enabled per request (`generate_audio`, default `true` on both hosts)
([fal schema](../../sources/fal.ai/veo-3.1-api-schema/2026-10-26.md),
[Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md)). The only captured guidance
on dialogue length is fal's — short lines that fit "within an 8-second reading window; long speeches
get cut off or rushed" — and the vendor names short spoken segments as its active-development area
([fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md),
[DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md)).

Two things are documented nowhere: the audio codec, sample rate or channel count inside the mp4, and
whether the audio track survives 4K upsampling. fal claims dialogue "in multiple languages" while the
model card lists prompt languages as English only; the two could be reconciled if spoken dialogue is
independent of prompt language, but no captured source says so
([fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md),
[model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)).

### Watermarking and provenance

Every output is marked with SynthID, Google's invisible watermark, and "cannot be disabled" per fal;
the model card separately lists "Content Credentials (C2PA) — Supported"
([DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md),
[fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md),
[model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)). No captured page
explains how the two mechanisms relate, and Google Cloud's own responsible-AI page mentions neither.

### Vendor performance claims (labelled as claims)

Nine human-preference cards, all "Last updated October 2025", all internal studies run by Google:
T2V overall preference, T2V text alignment and T2V visual quality on 1,003 MovieGenBench prompts;
I2V overall preference, text alignment and visual quality on 355 VBench I2V pairs; T2VA overall
preference and audio-video alignment on 527 prompts; T2V realistic physics on the physics subset.
Method notes say comparisons ran at 1280×720 without sound except for the overall-preference metric,
and that "Veo videos are 8 seconds long. All other videos are 10 seconds long" — i.e. Veo was shown
shorter than its competitors
([DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md)).

The same page claims leading results for ingredients-to-video, scene extension, first-and-last-frame
and object insertion on internal benchmarks, with the object-insertion note saying "All videos had no
sound" and Veo clips 6 s against competitors' 5 s. These are claims about a study nobody outside Google
can inspect.

fal adds a vendor-agnostic superlative — "the first mainstream AI video model to support true 4K
output" — with no date or method, and a four-model comparison table (Veo 3.1 vs Sora 2, Kling 2.x,
Runway Gen-4) that is fal's own summary rather than a measurement
([fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md)).

## Limitations and constraints

- **Eight seconds per generation, 37 seconds total.** There is no long-form mode. Google Cloud caps a
  Veo extension chain at 37 s; fal documents "up to 7 seconds per step, 20 steps maximum … roughly 148
  seconds" ([extend guide](../../sources/cloud.google.com/veo-extend-videos/2026-10-26.md),
  [fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md)). The two cannot both be
  right; the vendor cap is the safer planning assumption.
- **English prompts only** on Google Cloud, for all three tiers
  ([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)). Whether other
  languages work undocumented is untested here.
- **One Google Cloud region: `us-central1`.** No other region is listed for any tier, so data
  residency outside the US is not offered on this route
  ([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)).
- **No batch inference and "Pay-as-you-go: Not supported"** on the Google Cloud listing, with
  Provisioned Throughput and "Fixed quota" the supported consumption options
  ([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)). The page does not
  explain what a buyer without a quota or a PT commitment can actually do; treat self-serve
  pay-per-video access on Vertex as unconfirmed.
- **No audio input.** No dubbing, voice cloning, music bed or reference-audio path is documented on any
  route ([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)).
- **No 4K on Replicate**, and no 4K on Lite anywhere
  ([Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md),
  [model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)).
- **Editing is not available on Veo 3.1.** Google Cloud's edit guide lists only `gemini-omni-*`
  preview models; DeepMind's outpainting/object-insert/character-control panels are not backed by any
  captured Veo 3.1 API documentation
  ([edit guide](../../sources/cloud.google.com/video-edit-models/2026-10-26.md),
  [DeepMind](../../sources/deepmind.google/veo-model-page/2026-10-26.md)).
- **Likeness and child-content restrictions are enforced by filter codes, not by a prose policy.**
  Photorealistic prominent people and content depicting children are rejected unless
  `personGeneration` is `allow_all` or the project is allowlisted, and filtered outputs return fewer
  videos than requested ([responsible AI](../../sources/cloud.google.com/veo-responsible-ai/2026-10-26.md)).
  fal summarises the same policy as blocking "characters resembling real individuals or celebrities"
  ([fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md)).
- **Host-side prompt rewriting.** fal's `auto_fix` (default `true`) rewrites prompts that fail policy
  or validation, so a hosted result may not correspond to the prompt as written
  ([fal schema](../../sources/fal.ai/veo-3.1-api-schema/2026-10-26.md)).
- **Runs cannot be cancelled on Replicate** (`supports_cancelation: false`), so a rejected prompt bills
  in full ([Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md)).
- **No open weights.** Every route is hosted; no checkpoint or licence download appears in any captured
  source.
- **Documentation is inconsistent between tiers and hosts.** Lite is "sound generation supported,
  720p/1080p" per Google and "silent 720p" per fal; Fast is 1080p-capped per the model card but sold at
  4K by Google's price list and fal; Replicate's Fast README promises three reference images that its own schema does not
  accept; fal's prose says "5-8 second duration" while its schema enumerates 4/6/8. Where a schema and
  prose disagree, the schema is the operational truth.

## Access, pricing, licensing

Three routes were captured, on three different billing bases.

### Google Cloud (Vertex AI / Gemini Enterprise Agent Platform) — per output unit

| Model | Feature | 720p/1080p | 4K |
| --- | --- | --- | --- |
| Veo 3.1 | video + audio | $0.40 / count | $0.60 / count |
| Veo 3.1 | video only | $0.20 / count | $0.40 / count |
| Veo 3.1 Fast | video + audio | $0.10 (720p) / $0.12 (1080p) / count | $0.30 / count |
| Veo 3.1 Fast | video only | $0.08 / $0.10 / count | $0.25 / count |
| Veo 3.1 Lite | video + audio | $0.05 (720p) / $0.08 (1080p) / count | — |
| Veo 3.1 Lite | video only | $0.03 / $0.05 / count | — |

Source: [pricing](../../sources/cloud.google.com/veo-pricing/2026-10-26.md). The page writes every price
as "$X / 1 count" and never defines the unit. If one count is a **second**, Google Cloud matches the
hosts ($0.40/s with audio at 720p–1080p); if it is a **video**, an 8-second clip costs $0.40 there
versus $3.20 on both hosts. The identical unit prices for Veo 3 and Veo 3.1, the separate 4K row and
the host agreement all point to per-second, but the page does not say so and this page does not assume
it.

### fal — per second of output video

| Tier | 720p/1080p silent | 720p/1080p audio | 4K silent | 4K audio |
| --- | --- | --- | --- | --- |
| Standard | $0.20/s | $0.40/s | $0.40/s | $0.60/s |
| Fast | $0.10/s | $0.15/s | $0.30/s | $0.35/s |

Source: [fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md),
[fast/reference pages](../../sources/fal.ai/veo-3.1-fast-and-reference/2026-10-26.md).

### Replicate — per second of output video

| Model | silent | with audio |
| --- | --- | --- |
| `google/veo-3.1` | $0.20/s | $0.40/s |
| `google/veo-3.1-fast` | $0.10/s | $0.15/s |

Source: [Replicate standard](../../sources/replicate.com/veo-3.1/2026-10-26.md),
[fast](../../sources/replicate.com/veo-3.1-fast/2026-10-26.md). No resolution tiering — 1080p costs
the same as 720p — and no 4K.

### Comparing routes

For an 8-second 1080p clip with audio: fal $3.20 and Replicate $3.20 on the standard tier; fal $1.20
and Replicate $1.20 on Fast. The same clip on Google Cloud is $0.40 under the per-video reading or
$3.20 under the per-second reading — the unit question dominates any comparison, and is the single
most consequential unresolved item on this page. Lite is cheaper than everything at $0.05–$0.08 per
unit, but is preview-only and text-only.

Independent of the unit ambiguity, the hosts agree with each other to the cent on every tier they share,
which suggests both resell one Google rate card rather than competing on price.

### Licensing and terms

- **No weights, no open licence.** All access is hosted and commercial; fal labels the endpoint
  "Commercial use" and "Partner" ([fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md)).
- **Output ownership and commercial-use terms were not captured.** No Google Cloud service terms, fal
  terms or Replicate licence field was retrieved, so this page makes no statement about who owns
  generated video. fal's "yes, commercial projects" answer points at its own terms without quoting
  them ([fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md)).
- **Disclosure is not optional in practice:** SynthID is embedded and cannot be disabled, and C2PA
  Content Credentials are supported ([fal landing](../../sources/fal.ai/veo-3.1-landing-page/2026-10-26.md),
  [model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)).
- **Lite is a pre-GA offering** under Google Cloud's Pre-GA terms, which the model card quotes as
  allowing production and commercial use at the customer's election
  ([model card](../../sources/cloud.google.com/veo-3-1-model-card/2026-10-26.md)).

## Unresolved questions

1. **Is a Google Cloud "count" a second or a video?** The price list never says, and the two readings
   differ by 8× at the 8-second maximum. This is the highest-value question on the page.
2. **Does `veo-3.1-fast-generate-001` output 4K?** The model card says 1080p; the Google price list and
   fal both sell 4K on Fast, while Replicate offers no 4K on any tier. No changelog entry dates a 4K
   expansion for Fast.
3. **When did standard Veo 3.1 gain 4K?** 4K appears in the model card, the price list, fal and
   DeepMind's "1080p and 4K" panel, but the only 4K mention in the changelog is the 2026-01-13
   reference-to-video "upsampling … at 1080p and 4k resolutions" entry.
4. **Does Veo 3.1 Lite generate audio?** Google's model card says "Sound generation — Supported" and
   lists 1080p output; fal says Light is "silent 720p". No third source covers Lite.
5. **Is the extension cap 37 seconds or ~148 seconds?** Google Cloud says 37 s for Veo; fal documents 20
   steps × 7 s. Different surfaces may enforce different limits, but neither says so.
6. **Which DeepMind capabilities are Flow-only?** Outpainting, object add/remove, character and motion
   controls have no captured Veo 3.1 API documentation, and Google Cloud assigns video editing to
   Gemini Omni.
7. **Does Replicate's Fast endpoint accept reference images?** Its README says up to three; its schema
   has no such field.
8. **What audio does the delivered file contain?** No captured source gives codec, sample rate, channel
   count, or whether 4K upsampling re-renders or resamples audio.
9. **Which upstream serves fal and Replicate?** Both report CPU hardware and neither names the
   provider; fal's `auto_fix` and `safety_tolerance` parameters have no Google equivalent, so at least
   some behaviour is host-side.
10. **How does Veo 3.1 compare with Seedance 2.0, Sora 2 or Kling on any measured axis?** No
    independent benchmark was captured for any of them. Google's cards are internal and numeric-free;
    fal's comparison table is host marketing.

## Evidence status

Evidence floor: **met.** First-party: Google DeepMind's Veo product page and seven Google Cloud
documents (the Veo 3.1 model card, the Veo price list, the generative-AI release notes, and the
reference-image, extension, responsible-AI and video-editing guides). Independent hosts: three fal
records (landing page, standard API schema, fast and reference-to-video pages) and two Replicate
records (standard and fast, including version metadata). All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; price statements are published schedules;
quality statements are the vendor's own preference studies or the hosts' marketing. The 2025-10-15
preview date rests on a dated changelog entry corroborated by Replicate's version timestamps, not on a
launch post — none was found at `blog.google` or `deepmind.google/blog` for Veo 3.1. The Gemini API
documentation was not captured, so the Gemini API-side launch date is unestablished.

The next useful evidence would be a small reproducible test set against named endpoints and dates: the
same prompt at 4 s/6 s/8 s and 720p/1080p/4K with audio on, to check the 4K-on-Fast question and
whether duration changes the Google Cloud bill; a three-reference request at 9:16 and at 4 s to confirm
the coupling Replicate documents; an extension chain run past 37 s on fal to test its 148-second claim;
a dialogue-heavy prompt to probe the vendor's own short-speech weakness; and an `ffprobe` pass on the
delivered mp4 to settle the audio codec, channel count and sample rate.
