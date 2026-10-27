# Pixelcut Background Removal

Pixelcut's background-removal utility: a subject-cutout operation that returns a transparent PNG.
It is sold two ways — directly as `POST /v1/remove-background` on `api.developer.pixelcut.ai`
([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md)) and through fal as
`pixelcut/background-removal` ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)).
Pixelcut publishes no model name, version, architecture, parameter count, weights, or benchmark for
it; the only identity the vendor gives is the endpoint and an OpenAPI spec version (`0.0.2`).

**This model predates the roster window.** The only first-party release record, Pixelcut's API
changelog, reads "2024-07-20 — Initial public release"
([changelog](../../sources/pixelcut.ai/api-changelog/2026-10-26.md)). That is about fifteen months
before the window's 2025-10-26 cutoff, and no first-party date for the app feature exists at all.
The roster keeps this row as a **specialist/utility exception** — a commodity cutout primitive that
is worth a page because it is cheap, widely used through fal, and has a documented commercial API —
not because it is a new model. Its fal listing date is 2026-03-04, which is a *hosting* date, not a
model release date.

## Identity

- **Roster label:** "Pixelcut Background Removal" (fal discovery path
  `pixelcut/background-removal`). The roster label is a discovery label; it is not a vendor name.
- **Vendor / developer:** Pixelcut, Inc. (Delaware). The API overview says the API exposes "the same
  powerful photo editing tools available in the Pixelcut app", which is the vendor's own statement
  that the app and the API share an engine
  ([API overview](../../sources/pixelcut.ai/api-overview/2026-10-26.md)).
- **Canonical first-party identity:** `POST https://api.developer.pixelcut.ai/v1/remove-background`,
  `operationId: remove-background`, documented as "Remove Background" in the Pixelcut API
  (OpenAPI 3.1, `info.version: 0.0.2`)
  ([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md)).
- **Host endpoint:** `pixelcut/background-removal` on fal, displayed as "Pixelcut Background
  Remover", group "Image Background Removal", `modelLab: Pixelcut`, `hostingType: serverless`,
  `date`/`publishedAt` 2026-03-04T08:51Z, `updated_at` 2026-06-11T14:22Z
  ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)).
- **Release dates:** API public release **2024-07-20** (changelog, the only entry); fal hosting from
  **2026-03-04**. No first-party date exists for the underlying model, for any model update, or for
  the app feature.
- **Siblings:** within Pixelcut's API, the same platform exposes upscale, generate-background,
  outpaint, virtual try-on (beta), video remove-background, and looping video
  ([API overview](../../sources/pixelcut.ai/api-overview/2026-10-26.md),
  [image requirements](../../sources/pixelcut.ai/image-requirements/2026-10-26.md)). fal carries four
  Pixelcut endpoints: `background-removal` (2026-03-04), `video-background-removal` (2026-06-11),
  `product-photo` (2026-07-28), `looping-video` (2026-09-29)
  ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)).
- **Not the same thing as:** the Pixelcut design app as a product (the app is a workflow surface;
  this page is about the cutout operation behind it), and `pixelcut/product-photo` on fal, which
  reuses the background-remover description but is a composite product-photo pipeline with canvas
  size, background fill, shadow, and watermark parameters
  ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)).

### Identity ambiguity that could not be resolved

1. **No model name or version exists.** The API spec has an `info.version` of `0.0.2`, which versions
   the *specification*, not the model. No checkpoint, model card, or technical report was found, and
   Pixelcut's Hugging Face organisation publishes zero models
   ([Hugging Face](../../sources/huggingface.co/pixelcut-org/2026-10-26.md)). "Pixelcut Background
   Removal" is therefore a capability label, not a model ID.
2. **No revision history.** The API changelog has a single 2024-07-20 entry and nothing since, so the
   vendor does not document whether the model behind the endpoint has been retrained or replaced
   ([changelog](../../sources/pixelcut.ai/api-changelog/2026-10-26.md)). A reader cannot tell which
   model revision a 2024 result and a 2026 result came from.
3. **fal may or may not run it.** fal's catalogue says `hostingType: "serverless"` (fal
   infrastructure) while the same endpoint's billing object says `provider_type: "partner"` and
   `is_partner_api: true` (forwarded partner API)
   ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)). The "Partner" badge and
   the narrower input schema both suggest a wrapper over Pixelcut's API, but Pixelcut's own docs
   never mention fal, so the relationship is undocumented first-party.
4. **Two fal endpoints claim to be the background remover.** `pixelcut/product-photo`'s description
   is "Pixelcut's Background Remover produces fast, high-quality cutouts built for e-commerce product
   imagery", but its schema is a full product-photo pipeline
   ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)). Treat the description as
   stale copy, not as evidence that the two endpoints are the same model.

## Current assessment

This is a **retained specialist utility, not a frontier model**, and the evidence supports only a
narrow set of claims about it.

- **What is documented:** one operation (cut out the subject, return a transparent PNG), with
  optional AI shadow, subject crop, and margins, on a credit-metered commercial API with a
  documented no-training-data restriction and a customer-owns-output assignment
  ([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md),
  [API ToS](../../sources/pixelcut.ai/api-terms-of-service/2026-10-26.md)).
- **What is not documented:** any quality measure. No benchmark, no test set, no failure-rate data,
  no comparison against BRIA RMBG, BiRefNet, Ideogram's, or rembg's removers — even though fal
  lists several of them in the same "Background Remover APIs" category
  ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)). The vendor's "ultra high
  quality", "clean, perfect cutouts every time", "less than 3 seconds", and "trained on millions of
  images" lines are marketing copy
  ([tool page](../../sources/pixelcut.ai/background-remover-tool/2026-10-26.md)); nothing captured
  here measures them.
- **The one substantive limitation the vendor admits:** "Does not support translucent materials such
  as glass" ([guide](../../sources/pixelcut.ai/background-removal-guide/2026-10-26.md)). That is the
  only first-party statement that scopes the model's competence rather than promoting it.
- **Where it is competitive is price and plumbing, not quality.** Through fal it costs $0.016 per
  image, about a third of Pixelcut's own list price of $0.05, with a single required parameter and
  no account setup beyond a fal key
  ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md),
  [API pricing](../../sources/pixelcut.ai/api-pricing/2026-10-26.md)).
- **Repackaging check:** this is the vendor's own engine, not a third-party model resold by
  Pixelcut. The app pricing page meters background removal as a plan feature ("Limited" /
  "Unlimited") rather than against third-party-model credits, unlike the FLUX/Seedream/Kling models
  it lists by name ([pricing plans](../../sources/pixelcut.ai/pricing-plans/2026-10-26.md)).

## Documented capabilities

All of the following is vendor or host documentation. None of it is an independent test.

- **Input:** an image by URL (`image_url`) or as a multipart binary (`image`)
  ([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md)). fal accepts only
  `image_url` ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)).
- **Output:** a PNG with transparency. Two response modes — JSON with a `result_url`, or the image
  bytes directly via `Accept: image/*`. `format` has exactly one legal value, `png`
  ([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md)).
- **Result lifetime:** "The file is deleted after at most 24 hours" — the endpoint is not storage
  ([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md),
  [FAQ](../../sources/pixelcut.ai/api-faq/2026-10-26.md)).
- **AI shadow (paid add-on):** `shadow.enabled` plus `opacity` and an optional `light_source`
  (`size`, and a `position` with x/y normalized to the image centre and z as height above the
  subject). Enabling it costs +3 credits
  ([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md)).
- **Crop and margins (beta):** `crop: true` crops to the detected subject; `margin` and
  `margin_left/right/top/bottom` accept `%` (0–49%) or `px`, and only apply when `crop` is true
  ([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md)).
- **Documented failure mode:** `unknown_foreground` — "The foreground subject of the image could not
  be detected" ([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md)).
- **fal output variants:** `output_format` is `rgba` (default), `alpha`, or `zip`; `rgba`/`alpha`
  return an `image` object, `zip` returns a `file` object; `sync_mode` defaults to true, returning a
  data URL instead of uploading to storage
  ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)). What `alpha` and `zip`
  contain is not documented anywhere captured.
- **App-side only:** a manual "Refine" brush for edge correction, and batch runs of "up to 10,000
  images" with ZIP download
  ([tool page](../../sources/pixelcut.ai/background-remover-tool/2026-10-26.md)). Neither has an API
  equivalent: the API has no mask input, no brush, and no batch endpoint.

### Marketing claims (labelled as claims)

- "Removes the background 100% automatically in less than 3 seconds"
  ([tool page](../../sources/pixelcut.ai/background-remover-tool/2026-10-26.md)) — a web-app latency
  claim; no API latency is published and no independent measurement exists.
- "Get clean cutouts on the hardest edges, such as flyaway hair, jewelry filigree, thin glasses
  frames, and fur" ([tool page](../../sources/pixelcut.ai/background-remover-tool/2026-10-26.md)) —
  the hair/filigree claim is the vendor's central quality claim and is unmeasured here.
- "Trained on millions of images to recognize a subject, trace its outline pixel by pixel"
  ([tool page](../../sources/pixelcut.ai/background-remover-tool/2026-10-26.md)) — no dataset
  description, size, or licence is published.
- "Fast, ultra high-quality removal ... clean, perfect cutouts every time" — the same copy on fal's
  model page, which is fal repeating Pixelcut, not a second source
  ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)).
- "Keeps the original resolution when removing the background"
  ([tool page](../../sources/pixelcut.ai/background-remover-tool/2026-10-26.md)) — not reconciled
  with the documented maximum resolution, and not stated for the API.

## Limitations and constraints

- **Translucent materials are out of scope.** "Does not support translucent materials such as
  glass" ([guide](../../sources/pixelcut.ai/background-removal-guide/2026-10-26.md)). Partial-alpha
  subjects — glass, mesh, veils, smoke — are where the vendor itself says the model stops.
- **No alpha matte or mask output.** The API returns a composited PNG only; there is no confidence
  map, trimap, or separate matte channel, and no edge/alpha controls beyond crop and margin
  ([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md)). fal's `alpha`
  output format might be a matte, but its contents are undocumented
  ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)).
- **The published limits contradict each other.** For the same endpoint, the API reference says
  64×64 to **10000×10000** and lists JPEG, PNG, WebP, HEIC, AVIF; the Image Requirements page says
  64×64 to **6000×6000** and JPEG or PNG only; the FAQ says JPEG and PNG only
  ([API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md),
  [image requirements](../../sources/pixelcut.ai/image-requirements/2026-10-26.md),
  [FAQ](../../sources/pixelcut.ai/api-faq/2026-10-26.md)). fal's schema says "JPEG or PNG" while its
  file picker accepts jpg, jpeg, png, webp, gif, avif, heic, heif
  ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)). The safe planning
  assumption is the narrower one: 25MB, JPEG/PNG, ≤6000×6000.
- **The app's own limits disagree within a day.** The rendered tool page said "Up to 50MB and
  6000 × 6000px"; its markdown variant said "Up to 100MB and 8000 × 8000px", both fetched on
  2026-10-26 ([tool page](../../sources/pixelcut.ai/background-remover-tool/2026-10-26.md)).
- **fal is a narrower surface than the vendor API.** fal exposes `image_url`, `output_format`,
  `sync_mode` only — no AI shadow, no crop, no margins
  ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md),
  [API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md)).
- **Rate limit and no SLA.** 5 requests/second per developer account by default (raisable on
  request), and "We do not offer SLAs for the API at this time"
  ([FAQ](../../sources/pixelcut.ai/api-faq/2026-10-26.md)).
- **Credits expire.** API credits "do not rollover between billing periods", and Pixelcut can
  change prices with 30 days' notice; the developer dashboard is declared the authoritative price
  source ([API pricing](../../sources/pixelcut.ai/api-pricing/2026-10-26.md),
  [API ToS](../../sources/pixelcut.ai/api-terms-of-service/2026-10-26.md)).
- **No moderation documentation.** The only moderation statement is that credits may still be
  consumed when a request fails "due to a safety check violation"; the filter itself, its categories,
  and its behaviour are undocumented ([FAQ](../../sources/pixelcut.ai/api-faq/2026-10-26.md),
  [API ToS](../../sources/pixelcut.ai/api-terms-of-service/2026-10-26.md)).
- **No weights, no self-hosting.** Pixelcut's Hugging Face organisation publishes 0 models and 0
  datasets ([Hugging Face](../../sources/huggingface.co/pixelcut-org/2026-10-26.md)); the only routes
  are Pixelcut's API and fal.
- **Only one host was found.** Replicate has no Pixelcut entry at all (0 matches in a 6,161-URL
  model sitemap; five direct URLs 404), and a set of other hosts returned nothing on plausible paths
  ([Replicate absence record](../../sources/replicate.com/pixelcut-background-removal/2026-10-26.md)).
  "Available on fal" is therefore the whole third-party footprint found on 2026-10-26, not a
  convenience among many.
- **No benchmark exists to cite.** There is no published evaluation of Pixelcut's background remover
  on a named dataset, and no measured head-to-head against the other removers fal lists. This page
  therefore makes **no quality comparison**; where a reader needs one, it has to be run.

## Access, pricing, licensing

### First-party API (Pixelcut)

| Component | Price |
| --- | --- |
| Background removal | 5 credits = **$0.05** per image at the stated flat rate of 1 cent/credit |
| AI shadow add-on (`shadow.enabled`) | +3 credits = **$0.08** per image |
| Signup free tier | **100 credits** = 20 background removals |
| Plans | $10 / 1,000 credits (200 removals) up to $10,000 / 1,000,000 credits per month; custom quote above 1M |
| Rollover | none — credits expire at the end of each billing period |

Sources: [API pricing](../../sources/pixelcut.ai/api-pricing/2026-10-26.md) (credits per operation,
plan table, 1-cent flat rate, 100 signup credits, no rollover) and
[API reference](../../sources/pixelcut.ai/remove-background-api/2026-10-26.md) (shadow surcharge).
The dollar figures are arithmetic on the published 1-cent credit price, not vendor-quoted per-image
prices.

### fal

**$0.016 per image**, `billing_unit: "images"`, `provider_type: "partner"`
([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)). That is **68% below**
Pixelcut's own $0.05 list price — the host route is cheaper than the vendor route, which is unusual
enough to be worth stating plainly: a 1,000-image batch costs $16 on fal versus $50 direct.

### App (non-API)

Free: background removal marked "Limited", "Free export without watermark", no "Commercial license"
on the card. Pro $10/month: "Unlimited Background Removal", 600 AI credits/month, "Commercial
license". Business $30/month: the same two lines with 3,600 credits/month
([pricing plans](../../sources/pixelcut.ai/pricing-plans/2026-10-26.md)).
"Limited" is never quantified. App credits and API credits are separate systems
([API pricing](../../sources/pixelcut.ai/api-pricing/2026-10-26.md)).

### Commercial terms and licensing

- **Commercial use is permitted through the API**, explicitly: "Yes, you can use the API for
  commercial purposes ... You may not use the API to create training data for your own models"
  ([FAQ](../../sources/pixelcut.ai/api-faq/2026-10-26.md)).
- **Output ownership is assigned, not merely licensed:** "Customer retains ownership rights in
  Customer Content and own the Output. Pixelcut hereby assigns to Customer all right, title, and
  interest, if any, in and to Output"
  ([API ToS](../../sources/pixelcut.ai/api-terms-of-service/2026-10-26.md)). This is the strongest
  commercial-terms statement found and the one to cite for output rights.
- **Prohibited uses** (API): generating training data for your own models, illegal content, sexually
  explicit content, violence/self-harm/hate/harassment, deceptive content, content intended to harm;
  the vendor reserves sole discretion and the list is not exhaustive
  ([acceptable use](../../sources/pixelcut.ai/api-terms-summary/2026-10-26.md), and the numbered
  restriction list in the [API ToS](../../sources/pixelcut.ai/api-terms-of-service/2026-10-26.md)).
- **Input retention:** 24-hour outer bound per the docs/FAQ; the ToS words it as "discarded after
  Call is completed". Both are first-party; they are not worded identically
  ([FAQ](../../sources/pixelcut.ai/api-faq/2026-10-26.md),
  [API ToS](../../sources/pixelcut.ai/api-terms-of-service/2026-10-26.md)).
- **No training on customer data** without consent (FAQ and ToS agree).
- **Warranty and liability:** "AS IS", no error-free/uninterrupted warranty, liability capped at
  amounts paid, California law, either party may terminate immediately with or without cause
  ([API ToS](../../sources/pixelcut.ai/api-terms-of-service/2026-10-26.md)).
- **No weights licence exists** because no weights are published
  ([Hugging Face](../../sources/huggingface.co/pixelcut-org/2026-10-26.md)). fal's
  `licenseType: "commercial"` badge is fal's statement about use through fal, not a Pixelcut
  licence ([fal](../../sources/fal.ai/pixelcut-background-removal/2026-10-26.md)).
- **No evidence covers the app's free tier.** The commercial-use grant and output assignment are
  API-only; the app pricing page lists "Commercial license" on paid plans only
  ([pricing plans](../../sources/pixelcut.ai/pricing-plans/2026-10-26.md)).

## Unresolved questions

1. **Which model does the endpoint serve today, and has it changed since 2024-07-20?** There is no
   model name, version, or changelog entry after the initial release.
2. **Is the model itself older than the API?** The app ships a background remover, but no first-party
   date for the app feature was found, so its relation to the 2024-07-20 API launch is unknown.
3. **Does fal run the model or forward to Pixelcut?** `hostingType: "serverless"` and
   `provider_type: "partner"` / `is_partner_api: true` contradict each other on the same endpoint.
4. **What are fal's `alpha` and `zip` output formats?** Neither is described beyond its name.
5. **Is the maximum resolution 6000×6000 or 10000×10000?** Two first-party docs pages disagree.
6. **Which input formats are actually accepted?** Two docs pages say JPEG/PNG; the API reference
   lists WebP, HEIC, and AVIF as well; fal's picker lists eight types and its schema says two.
7. **Does the API downscale large inputs, or reject them?** The `resolution_too_high` error implies
   rejection, but no scaling behaviour is documented.
8. **How good is the cutout?** No benchmark, dataset, or head-to-head exists in the captured
   material, including against the other removers fal lists in the same category.
9. **What does the safety filter block, and does a refusal cost credits?** The FAQ says credits may
   be consumed on safety failures; the filter is undocumented.
10. **Is "Limited Background Removal" on the app's free plan watermarked, rate-limited, or
    resolution-capped?** The plan page does not say, and it does not state whether free-plan output
    may be used commercially.

## Evidence status

Evidence floor: **met.** Eleven first-party records from `pixelcut.ai` (API reference/OpenAPI,
guide, API pricing, image requirements, changelog, FAQ, Notion ToS, acceptable-use summary, tool
page, API overview, app pricing plans), one independent host record (fal: model page, catalogue
metadata, queue schema, billing fields), and two host absence checks (Replicate catalogue search,
Hugging Face organisation page). All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this
knowledge base. There is no independent benchmark of this model, and this page deliberately makes no
quality comparison to BRIA, BiRefNet, Ideogram, rembg, or any other background remover. The
vendor's quality, speed, and edge-detail claims are recorded as claims.

The next useful evidence would be a small reproducible cutout set — hair, fur, thin frames, jewellery
filigree, glass and mesh (the documented failure case), and a hard-shadow product shot — run against
`/v1/remove-background` and `pixelcut/background-removal` at the same resolution, with alpha
inspected at the edges and wall-clock latency measured, plus the same set against one competing
remover so the "no benchmark" gap can be closed rather than repeated.
