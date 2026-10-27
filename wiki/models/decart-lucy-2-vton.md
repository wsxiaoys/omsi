# Lucy 2.1 VTON (Decart)

Decart's first dedicated realtime virtual try-on model: a live WebRTC stream in, a dressed version of
that stream out, driven by a text prompt and/or a garment reference image at 720p and billed per
second. Decart launched it as **`lucy-2.1-vton` in April 2026**, retired that ID in **June 2026**,
and has since moved the try-on line to `lucy-vton-3.x` (3.6 current). The endpoint the roster points
at — fal's `decart/lucy2-vton/realtime`, "Lucy 2.1 VTON Realtime" — is still public and still billed
at $0.02/sec ([changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md),
[fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)). The row is in window; the model is not
current first-party.

## Identity

- Canonical name: **Lucy 2.1 VTON**. Vendor: **Decart** ("Decart AI Lab"; API host
  `api.decart.ai`, platform `platform.decart.ai`).
- First-party model ID: **`lucy-2.1-vton`**, on both the realtime and batch surfaces. Decart's
  changelog records it as "Launched `lucy-2.1-vton` for realtime and batch virtual try-on"
  ([changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md)). The ID no longer appears in
  Decart's model tables, aliases or pricing
  ([catalogue](../../sources/decart.ai/decart-model-catalogue/2026-10-26.md),
  [pricing](../../sources/decart.ai/decart-pricing/2026-10-26.md)).
- Host endpoint: **`decart/lucy2-vton/realtime`** on fal, titled "Lucy 2.1 VTON Realtime", category
  `video-to-video`, discovery `family: "Lucy"`, `version: "2.1"`, `variant: "VTON Realtime"`, tags
  `input:video`, `output:video`, `task:video-try-on`, `landingPageSlug: "lucy-2.1"`
  ([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).
- Roster label and path: **"Decart Lucy 2 VTON"** / `decart/lucy2-vton`. The path is a truncated
  discovery label, not a callable endpoint: the bare slug 404s on fal's schema API, is absent from
  fal's catalogue searches, and its model page renders only a loading shell. Only `/realtime`
  resolves ([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).
- Release date: **April 2026**, month granularity only — Decart's changelog groups entries by month
  and publishes no day-level date. fal's catalogue `date` is 2026-04-29T10:30:43Z and `publishedAt`
  2026-04-30T19:03:01Z, consistent with an April vendor launch
  ([changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md),
  [fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).
- Lifecycle: **retired first-party, still served by fal.** "Lucy 2.1 VTON retirement -
  `lucy-2.1-vton` and its `lucy-vton` alias are no longer served. Use `lucy-vton-3`,
  `lucy-vton-latest`, or pin to `lucy-vton-2` if you need the previous generation" (June 2026)
  ([changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md)). fal's catalogue entry is
  `status: "public"` with `deprecated: false`, its metadata API reports `status: "active"`, and
  `updated_at` is 2026-08-26T20:55:32Z — two months after the vendor retirement
  ([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).
- Weights: **not published**. No Decart Lucy model has released weights; there is no model card, no
  parameter count and no licence beyond the API terms
  ([api terms](../../sources/decart.ai/decart-api-terms/2026-10-26.md)).

### Is "Lucy 2 VTON" a Decart name?

No Decart page captured uses the name "Lucy 2 VTON". Two different numbering schemes are in play:

| Generation | First-party ID | Launched | Retired | Named after |
| --- | --- | --- | --- | --- |
| First try-on model | `lucy-2.1-vton` | April 2026 | June 2026 | the Lucy 2.1 editing model (inferred from the shared 2.1 name and month) |
| Second | `lucy-vton-2` | May 2026 | September 2026 | its own try-on line |
| Third | `lucy-vton-3` | June 2026 | September 2026 | its own try-on line |
| Fourth | `lucy-vton-3.5` | August 2026 | still available | its own try-on line |
| Fifth | `lucy-vton-3.6` | October 2026 | current (`lucy-vton-latest`) | its own try-on line |

Source: [changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md),
[catalogue](../../sources/decart.ai/decart-model-catalogue/2026-10-26.md). After one month Decart
dropped the Lucy-2.1 tie from the try-on name and renumbered the line independently, so "try-on 3.6"
sits alongside "editing 2.6" with no shared version axis. The roster label and fal slug preserve the
short-lived first naming, which is why "Lucy 2 VTON" reads like a variant of Lucy 2 even though the
current try-on model is not versioned against Lucy 2 at all.

**Mapping status: strong inference, not a vendor statement.** fal titles the endpoint "Lucy 2.1 VTON
Realtime", tags it version 2.1, points its landing page at `lucy-2.1`, and published it in the same
month Decart launched `lucy-2.1-vton`. Neither company publishes a table mapping fal slugs to Decart
IDs, so the identification rests on those four coincidences
([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md),
[changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md)).

### Base Lucy 2 versus the VTON variant

Decart keeps these as separate model lines, not a flag on one model:

- **Base editing models** — `lucy-2` (February 2026), `lucy-2.1` (April 2026), `lucy-2.5` (July
  2026), `lucy-2.6` (October 2026) — do general video editing from text prompts, reference images, or
  both: character swap, add/replace/remove objects, background, style, VFX
  ([catalogue](../../sources/decart.ai/decart-model-catalogue/2026-10-26.md),
  [changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md)).
- **Try-on models** — `lucy-2.1-vton` → `lucy-vton-3.6` — are "dedicated optimized" try-on models.
  The base model's own guide lists "Virtual try-on | Swap clothing or accessories onto a person" as
  an edit type and then says: "Virtual try-on has a dedicated optimized model"
  ([Lucy 2.5 guide](../../sources/decart.ai/lucy-2-5-guide/2026-10-26.md)).
- The try-on line has its own prompting guide, its own pricing rows and its own aliases
  (`lucy-vton-latest`) ([prompting guide](../../sources/decart.ai/lucy-vton-prompting-guide/2026-10-26.md),
  [pricing](../../sources/decart.ai/decart-pricing/2026-10-26.md),
  [catalogue](../../sources/decart.ai/decart-model-catalogue/2026-10-26.md)).

So a reader who wants try-on should not read this page as documentation of `lucy-2.6`'s try-on
behaviour, and a reader of the base Lucy page should not assume the try-on model inherits its
findings. Whether the base model's prompt-driven try-on is worse, better or simply cheaper per
second is undocumented.

### Siblings on the same host

fal hosts four Decart endpoints: `decart/lucy2-vton/realtime` (the try-on model here),
`decart/lucy-2-5/realtime` (general editing, 2026-07-16), `decart/lucy-restyle` (restyling,
2025-12-18) and the proxied `fal-ai/decart/lucy-5b/image-to-video` (2025-08-28)
([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)). Replicate hosts only
`decart/lucy-edit-2`, with no try-on endpoint at all
([Replicate](../../sources/replicate.com/decart-lucy-edit-2/2026-10-26.md)).

## Current assessment

The evidence supports a narrow claim: **this is a real, shippable realtime try-on endpoint that
Decart has already superseded with four later generations, kept alive on one third-party host.** It
is not a repackaging of the base editing model — Decart gives try-on its own IDs, prompting guide,
aliases and price rows — but the specific April 2026 generation is no longer what Decart recommends
or sells.

What is documented: the endpoint exists, its parameter set, 720p output, the 16:9/9:16/2:1/1:2 shapes,
the 200MB MP4 input cap, the per-second price, and the vendor-side retirement date. What is **not**
documented anywhere captured: frame rate, latency, quality of the try-on relative to the 3.x line,
garment-category refusals, or any independent measurement. Decart's own quality language for the
whole line is unquantified ("next-generation", "latest-generation")
([changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md)).

Two practical consequences follow. First, the roster path `decart/lucy2-vton` will not resolve for a
caller; the callable form is `decart/lucy2-vton/realtime`
([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)). Second, anyone adopting it is adopting
a generation that the vendor retired in June 2026 while the host kept updating it in August 2026 —
which is either a partner carve-out or a stale deployment, and neither party says which.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run for this page.**

- **Realtime transport.** WebRTC session via `@decartai/sdk`
  (`client.realtime.connect(stream, { model })`) or a raw WebSocket at
  `wss://api.decart.ai/v1/stream?api_key=…&model=lucy-vton-latest`; the SDKs moved to LiveKit-backed
  media transport in May 2026 ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md),
  [changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md)).
- **Live or recorded input.** "Dress people in live or recorded video with text prompts, garment
  images, or both"; the batch/queue surface processes pre-recorded video asynchronously
  ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md)).
- **Session inputs.** `prompt` (text), `image` (garment reference; JPEG, PNG, WebP) and `enhance`
  (prompt auto-enhancement, default `true`) ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md)).
  A connect-time `speed: "fast"` option exists on the realtime surface, but Decart documents it for
  `lucy-vton-3.5` and `lucy-vton-3.6` only, and fal exposes no such option
  ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md),
  [fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).
- **Mid-session control.** `setPrompt()` / `set()` change the outfit without reconnecting; `set()`
  replaces the whole state, so omitted fields are cleared
  ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md)).
- **Batch inputs.** `data` (required MP4), `prompt`, `reference_image`, `seed` (0–4294967295),
  `resolution` (const `720p`), `enhance_prompt` (default `true`)
  ([batch API](../../sources/decart.ai/lucy-vton-batch-api/2026-10-26.md)).
- **Input video constraints.** MP4, H.264 or VP8, 16:9 or 9:16 (2:1 / 1:2 also supported), max 200MB;
  output 1280×720 / 720×1280, or 1280×640 / 640×1280 for the wider shapes; "VTON infers the aspect
  ratio from the input video stream and maps it to the nearest supported generation shape"
  ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md)).
- **Reference-image guidance.** "Clean garment images work best — just the clothing item, no person
  wearing it", plain backgrounds, "At least 512×512 pixels"
  ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md)).
- **Prompt patterns.** One action per prompt — `substitute` a named region (upper body, lower body,
  outfit, footwear, hat, necklace) or `add` an accessory — plus a ~750-character practical prompt
  limit ([prompting guide](../../sources/decart.ai/lucy-vton-prompting-guide/2026-10-26.md)).
- **Browser security.** Short-lived client tokens (`client.tokens.create()`), 60-second default
  lifetime, fetched per dial via `apiKeyProvider`
  ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md)).
- **fal's surface.** A WebRTC signaling proxy (`fal.realtime.connect("decart/lucy2-vton/realtime",
  …)`) exposing `prompt`, `image_url` (live frame input) and `reference_image_url`, with mid-session
  prompt and reference-image updates and `prompt_ack` / `set_image_ack` / `generation_started`
  server messages ([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).

### Output resolution and frame rate

- **Resolution: 720p.** Every Decart table lists 720p for the try-on models; the batch schema pins
  `resolution` to the single value `720p`; the realtime guide's example dimensions come from the
  model object ([catalogue](../../sources/decart.ai/decart-model-catalogue/2026-10-26.md),
  [batch API](../../sources/decart.ai/lucy-vton-batch-api/2026-10-26.md)). Decart added a 1080p
  realtime option in May 2026 that "lets supported models deliver 1080p output" and has never said
  try-on is one of them
  ([changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md)).
- **Frame rate: undocumented for every VTON model.** The docs pass `model.fps` into
  `getUserMedia` but never print the number
  ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md)). For the base model the record
  contradicts itself: the Lucy 2 launch post claims "30fps 1080p resolution with near-zero latency"
  (2026-01-26) while the changelog describes the January 2026 preview as "720p@20FPS" and lists
  720p everywhere afterwards ([launch post](../../sources/decart.ai/lucy-2-launch/2026-10-26.md),
  [changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md)). Do not carry the 30fps
  figure onto this model.

### Marketing claims (labelled as claims)

- "Dress people in live or recorded video…" and "realistically dress the subject while preserving
  motion and body shape — all with minimal latency" — no measurement attached
  ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md)).
- "Lucy places products on the viewer, live - precisely and naturally on the body, in the room, or
  outdoors" ([Lucy product page](../../sources/decart.ai/lucy-product-page/2026-10-26.md)).
- Base-model claim, not a try-on claim: "30fps 1080p … near-zero latency", "pure diffusion model",
  "Streams can persist for hours without identity collapse"
  ([launch post](../../sources/decart.ai/lucy-2-launch/2026-10-26.md)).

## Limitations and constraints

- **Retired by the vendor.** `lucy-2.1-vton` is "no longer served" as of June 2026; `lucy-vton-2` and
  `lucy-vton-3` followed in September 2026. This page's model survives only because fal still lists
  it ([changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md),
  [fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).
- **No first-party documentation for this generation remains.** The current try-on guide is written
  for 3.5/3.6, the prompting guide explicitly covers only 3.5 and 3.6, and no API-reference page
  exists for `lucy-2.1-vton` ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md),
  [prompting guide](../../sources/decart.ai/lucy-vton-prompting-guide/2026-10-26.md),
  [batch API](../../sources/decart.ai/lucy-vton-batch-api/2026-10-26.md)). Whether 3.5-era prompt
  patterns transfer to the 2.1 generation is unknown.
- **720p ceiling, no resolution control.** `resolution` is a one-value enum on batch, and the
  realtime docs expose no resolution parameter for try-on
  ([batch API](../../sources/decart.ai/lucy-vton-batch-api/2026-10-26.md)).
- **Aspect ratio is quantised to four shapes.** 16:9, 9:16, 2:1 and 1:2; anything else is remapped
  to "the nearest supported generation shape", so unusual framing is silently reshaped
  ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md)).
- **200MB MP4 cap** on batch input; no duration cap is published
  ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md),
  [batch API](../../sources/decart.ai/lucy-vton-batch-api/2026-10-26.md)).
- **One edit per prompt.** "Avoid mixing actions in one prompt, such as replacing a jacket and adding
  a bag at the same time" — so a full outfit change is a sequence of prompts, not one
  ([prompting guide](../../sources/decart.ai/lucy-vton-prompting-guide/2026-10-26.md)).
- **Garment image quality is load-bearing.** The model "reproduces what it sees"; on-model product
  photos must be converted to clean garment shots first, which the docs recommend doing with a
  separate image-editing model ([guide](../../sources/decart.ai/lucy-vton-guide/2026-10-26.md)).
- **No fit, size or body-measurement capability** appears anywhere in the captured material; the
  model dresses the person in frame and nothing else.
- **No published latency figure.** The JS SDK can measure glass-to-glass latency since August 2026,
  but Decart publishes no numbers and fal publishes none
  ([changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md),
  [fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).
- **Consent and impersonation are contractual constraints.** The AUP forbids "media that impersonate
  a real person without clear, conspicuous disclosure and verifiable consent from the person (or
  their authorized agent)" and requires AI/deepfake disclosure "as required by law"; the API terms
  add "Developer acknowledges it shall not use or permit the use of any Output to impersonate real
  persons" and forbid removing watermarks or provenance markers
  ([AUP](../../sources/decart.ai/decart-aup/2026-10-26.md),
  [API terms](../../sources/decart.ai/decart-api-terms/2026-10-26.md)). Try-on puts a real person's
  live body in frame, so this is the operative constraint on consumer deployments.
- **Host gap.** fal is the only host found; Replicate lists only `decart/lucy-edit-2`
  ([Replicate](../../sources/replicate.com/decart-lucy-edit-2/2026-10-26.md)). fal publishes no
  frame rate, resolution, latency, session limit or changelog for the endpoint
  ([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).

## Access, pricing, licensing

### Decart (first-party, for the current line)

| Item | Value |
| --- | --- |
| Realtime billing basis | "billed per second of active generation" |
| Realtime rate (720p) | $0.02/sec standard, $0.04/sec in `fast` mode |
| Video/batch billing basis | "billed per generated second" |
| Video rate (720p) | $0.04/sec |
| Resolution offered | 720p only; no 480p or 1080p row for try-on |
| Free tier | "New accounts receive free credits for evaluation" |

Sources: [pricing](../../sources/decart.ai/decart-pricing/2026-10-26.md). The table prices
`lucy-vton-3.6` and `lucy-vton-3.5`; the retired `lucy-2.1-vton` has **no published rate of its own**.
The $0.02/$0.04 figures are the current try-on rates, and fal charges $0.02/sec for the 2.1-era
endpoint — the same standard realtime rate ([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).

### fal

**$0.02 per second**, with no stated unit qualifier beyond seconds
([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)). Whether fal bills wall-clock session
time or active generation time is not stated; Decart's own basis is active generation, so a
session left open is the obvious billing risk on fal. fal exposes no `fast` mode for this endpoint,
so there is no $0.04/sec tier there.

### Licensing and commercial use

- **Outputs are yours, commercially.** "Decart.ai hereby assigns to you all its right, title and
  interest in and to Output. This means you can use your Content for any purpose, including
  commercial purposes such as sale or publication"
  ([Terms](../../sources/decart.ai/decart-terms/2026-10-26.md)); the API terms agree — "Developer
  retains ownership of Input and Output"
  ([API terms](../../sources/decart.ai/decart-api-terms/2026-10-26.md)).
- **Decart may train on your inputs and outputs.** The same Terms paragraph reserves the right to
  "develop, improve (including to train our AI models)"; the API terms grant a "perpetual,
  irrevocable … fully sublicensable" licence over Input and Output for that purpose and state that
  Input and Output "are not considered confidential information"
  ([Terms](../../sources/decart.ai/decart-terms/2026-10-26.md),
  [API terms](../../sources/decart.ai/decart-api-terms/2026-10-26.md)). For try-on — where the input
  is a shopper's face and body on camera — this is the clause to read before deploying.
- **No weights licence to grant.** No Lucy model publishes weights, so there is no model licence,
  only the service terms; reverse engineering and resale of API access are prohibited
  ([API terms](../../sources/decart.ai/decart-api-terms/2026-10-26.md)).
- **fal's "Commercial use" badge and `licenseType: "commercial"`** are fal's statements about use
  through fal, not a Decart licence grant
  ([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).

## Unresolved questions

1. **Is `decart/lucy2-vton/realtime` literally `lucy-2.1-vton`?** The title, version tag, landing
   page and launch month all agree, but neither company publishes the mapping
   ([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).
2. **Why is fal still serving a model Decart retired in June 2026 — and what changed in fal's
   2026-08-26 update?** A partner carve-out, a private Decart deployment, or a stale listing are all
   consistent with the evidence; fal has no changelog for the endpoint.
3. **What is the frame rate?** Unpublished for every VTON model. The base-model 30fps/1080p claim and
   the changelog's 720p@20FPS preview contradict each other and neither describes try-on
   ([launch post](../../sources/decart.ai/lucy-2-launch/2026-10-26.md),
   [changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md)).
4. **Does try-on get 1080p?** Decart added a 1080p realtime output option in May 2026 that "lets
   supported models deliver 1080p output" and never lists try-on among the supported models; every
   price table is 720p-only
   ([changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md),
   [pricing](../../sources/decart.ai/decart-pricing/2026-10-26.md)).
5. **How does the 2.1 generation compare with 3.5/3.6?** Decart calls each successor
   "next-generation" without a metric, and no side-by-side exists in the captured material
   ([changelog](../../sources/decart.ai/decart-changelog/2026-10-26.md)).
6. **Do the 3.5 prompting rules apply to 2.1?** The prompting guide says it covers 3.5 and 3.6 only,
   and its prompt-enhancement model is shared between those two
   ([prompting guide](../../sources/decart.ai/lucy-vton-prompting-guide/2026-10-26.md)).
7. **Did a non-realtime `decart/lucy2-vton` ever exist?** The bare slug is absent from fal's
   catalogue and schema API at capture; only `/realtime` is documented
   ([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md)).
8. **How does fal bill?** "per second" with no statement of whether idle or connection setup time
   counts, against Decart's explicit "active generation" basis
   ([fal](../../sources/fal.ai/decart-lucy2-vton/2026-10-26.md),
   [pricing](../../sources/decart.ai/decart-pricing/2026-10-26.md)).
9. **What does the model refuse?** No first-party statement covers swimwear, underwear, uniforms,
   religious dress, minors, or non-consenting third parties in frame; only the generic AUP applies
   ([AUP](../../sources/decart.ai/decart-aup/2026-10-26.md)).
10. **What does it cost to run a session end to end?** No published example, and no data on
    reconnect or idle billing, both of which matter for a per-second realtime model
    ([pricing](../../sources/decart.ai/decart-pricing/2026-10-26.md)).

## Evidence status

**Evidence floor: met.** Twelve first-party Decart records — the Virtual Try-On guide, the VTON
prompting guide, the batch API reference for 3.6/3.5/latest, the model catalogue, the pricing page,
the changelog, the Lucy 2.5 guide (base-versus-VTON note), the Lucy product page, the Lucy 2 launch
post, the Acceptable Use Policy, the Terms of Service and the API Terms — plus one independent host
record from fal (catalogue metadata, WebRTC input schema, price line, and the negative result for
the bare roster slug). A Replicate record documents that no Decart try-on model is hosted there. All
were captured on 2026-10-26.

**No direct tests have been run for this page.** No session was opened, no video was processed, no
latency was measured, and no output was compared against a reference. Every capability statement is
Decart's or fal's documentation; every quality statement is marketing without a metric; the frame
rate is unknown; and the mapping between the roster's fal endpoint and Decart's `lucy-2.1-vton` ID is
an inference.

**Date status: in window.** The model launched in April 2026, after the 2025-10-26 cut-off. The date
is month-granular because Decart's changelog does not publish days; fal's 2026-04-29/30 timestamps are
the only day-level evidence.

**What would change this assessment:** a session-level comparison of the fal endpoint against
`lucy-vton-3.6` on the same garments and body types (garment-detail fidelity, logo/text accuracy,
pose and hand failures, identity and body-shape preservation, frame rate, glass-to-glass latency),
plus a first-party statement on whether fal's deployment tracks Decart's or is frozen at the retired
generation.
