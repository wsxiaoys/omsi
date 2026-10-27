# EdenLive 5B

VAST's real-time generative renderer: a proxy or reference video stream, a target first frame and a text
prompt go in; a refined video stream comes out at 24 fps or more. It is the rendering half of VAST's
Project Eden bet that "world state and rendering have to be separated" — an upstream engine or coding
agent keeps the rules, the score and the geometry, and EdenLive only draws what that engine emits
([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md),
[tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)). The 5B is the size VAST
documents for single-GPU real-time deployment; it also publishes a 14B.

**In window.** The vendor's own date is the month `2026-10`; the code and weight repositories were
created **2026-10-12**, and fal listed the model on **2026-10-22/23**
([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md),
[GitHub](../../sources/github.com/edenlive-repo/2026-10-26.md),
[Hugging Face](../../sources/huggingface.co/edenlive-weights/2026-10-26.md),
[fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md)). That is after the roster's 2025-10-26 cut-off.
No day-level vendor launch date exists in the captured material.

## Identity

- **Canonical name:** **EdenLive**. One word, no space, on every first-party surface: the project page
  title, the technical report, the GitHub repository, the Hugging Face card, the bibtex key
  `huang2026edenlive` ([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md)).
- **The roster label "Eden Live 5B" is fal's spelling.** fal's catalogue carries `modelFamily: "Eden
  Live"` and titles `Eden Live 5B Video` / `Eden Live 5B Game`; no first-party page captured uses the
  two-word form ([fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md)). Reactor, the host VAST links
  from its own page, uses "EdenLive" ([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)).
- **Vendor:** VAST, the company behind Tripo. Its own about page describes it as "Founded 2022 ·
  Beijing", focused on "3D foundation models · world models", with two research tracks: "3D generation
  models in production, and a world model in development"
  ([corporate site](../../sources/vastworld.ai/vast-research-and-about/2026-10-26.md)). The EdenLive
  authors are affiliated with "VAST"; the project page credits "© 2026 VAST"
  ([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md)). Host naming differs
  without implying different owners: fal's `modelLab` is `VAST`, Reactor's `creator` is `Tripo`, and
  Reactor's docs say "EdenLive, from VAST"
  ([fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md),
  [Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)).
- **Model IDs by route:**

| Route | Identifier | Notes |
| --- | --- | --- |
| fal | `vast/eden-live-5b-video` | category `video-to-video`, group "Video-to-Video 5B" |
| fal | `vast/eden-live-5b-game` | category `worlds`, group "Game 5B" |
| Reactor | `reactor/eden-live` | one endpoint, game source and client-video source both |
| roster / fal family | `vast/eden-live-5b` | **not callable**; OpenAPI returns HTTP 404 |

Sources: [fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md),
[Reactor schema](../../sources/reactor.inc/eden-live/2026-10-26.md).

- **The roster's endpoint string is a group prefix.** `GET …/openapi.json?endpoint_id=vast/eden-live-5b`
  returns HTTP 404 with body `null`; only the `-video` and `-game` leaves resolve
  ([fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md)).
- **Siblings:** EdenLive **14B** (same interface, 480p, eight H100s for real-time) and the parent
  **Project Eden** world-model initiative, described by VAST as "a world model: somewhere that exists
  before you enter and continues after you leave"
  ([corporate site](../../sources/vastworld.ai/vast-research-and-about/2026-10-26.md),
  [project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md)).
- **Why 5B has its own page.** Both sizes ship in one weight repository, but they differ in a way a
  reader must choose between at request time: resolution (720p-class vs 480p), GPU footprint (1 vs 8
  H100s for the same throughput band) and price (2.86× on fal) — see
  [fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md) and
  [tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md). Findings on the 5B are
  not transferred to the 14B here.

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-10 | Vendor project-page `date` field; technical report cover "DATE October 2026" | [project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md), [report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md) |
| 2026-10-12T01:57Z | GitHub repository created | [GitHub](../../sources/github.com/edenlive-repo/2026-10-26.md) |
| 2026-10-12T01:59Z | Hugging Face weights repository created | [HF](../../sources/huggingface.co/edenlive-weights/2026-10-26.md) |
| 2026-10-20 | Last weight update; README "Sync the model with reactor/eden-live 2.1.3" commit | [HF](../../sources/huggingface.co/edenlive-weights/2026-10-26.md), [GitHub](../../sources/github.com/edenlive-repo/2026-10-26.md) |
| 2026-10-21 | Last observed repository commit (Reactor runtime integration) | [GitHub](../../sources/github.com/edenlive-repo/2026-10-26.md) |
| 2026-10-22T22:26Z / 2026-10-23T19:42Z | fal `date` / `publishedAt` for the 5B endpoints | [fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md) |

The pattern is a single open-source release on 2026-10-12 followed by host listings ten days later. No
press release, blog post or changelog announcement was found on `vastworld.ai` or `vast-eden.ai`; the
Eden site's blog array holds only posts from 2026-05 and 2026-07
([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md)).

## Current assessment

EdenLive 5B is a **distinct product, not a repackaging** — but it is a renderer, not a world model in the
sense the roster's other avatar and world rows use. VAST's own positioning table draws the line: action-
or text-conditioned world models such as Lingbot World and Pixverse R generate frames *and* carry state
implicitly, whereas EdenLive "decouples state from rendering: the proxy maintains state and interaction
control, while EdenLive is responsible only for rendering"
([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md)). It follows that the
model cannot be used without an upstream program producing a reference stream; it is a rendering layer
for a game, a 3D scene, a screen recording or a camera feed.

The real-time claim is the load-bearing one, and the vendor measures it rather than asserting it: 29.80
FPS at 1280 × 704 on a single H100, 73.52 FPS at 832 × 480, 26.76 FPS for the 14B on eight H100s, with
first-chunk latency 0.83–1.71 s and RTF 0.22–0.60
([tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)). A third party supplied the
consumer-GPU number: LightX2V reports "approximately 24.7 FPS inference throughput at 1280×704" for the
5B on one RTX 5090, which the vendor README relays
([GitHub](../../sources/github.com/edenlive-repo/2026-10-26.md)). That is throughput, not interaction
latency, and the report's own scheduling model puts input-to-display at "about two chunk durations plus
transmission" — consistent with the project page's "hundreds of milliseconds" only after warm-up.

Quality is vendor-measured only. In the authors' 30-second long-horizon comparison the 5B leads on
DOVER-Technical (9.938 vs 9.808 AgentGarten, 9.050 StreamCWM) and takes the second-highest VLM Elo in all
five judged dimensions, behind its own 14B
([tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)). Those baselines are two
autoregressive research systems, not the commercial interactive models the roster groups it with; the
report's comparison against Seedance 2.0 and MiniMax H3 is qualitative only, in one figure.

Status: **current, public, available on two hosts, open weights**, released two weeks before capture. Nothing
suggests preview or deprecation; nothing suggests adoption either — 335 Hugging Face downloads and 22
likes at capture ([HF](../../sources/huggingface.co/edenlive-weights/2026-10-26.md)).

## Documented capabilities

### Inputs

Three, per the vendor ([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md)):

1. **A proxy or reference video (stream)** — "specifies layout, camera, and motion". It may come from a
   2D or 3D scene built by a coding agent, frames from an existing engine or workbench, or a screen
   recording.
2. **A target first frame** — "determines the overall visual appearance".
3. **A text prompt** — "supplies stylistic and fine-grained details".

The technical report adds an optional fourth channel: per-chunk event captions, where "the program emits
a short sentence for each salient gameplay event, such as a landed hit, and the text condition of a chunk
appends the recent event sentences to the static scene prompt"
([tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)).

Reactor's implementation of that interface, verbatim constraints
([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)):

| Element | Host constraint |
| --- | --- |
| draft video in (`source_video`) | "at a steady rate from 10 to 60 fps"; scaled to cover and centre-cropped to 1280 × 704 |
| reference image | one image; scaled and centre-cropped to 1280 × 704 |
| prompt | "a nonblank prompt of up to 4096 characters" |
| seed | integer 0–2147483647, default `2026092901`; "The same seed, appearance reference, and draft repeat a world" |
| controls (game source) | `w a s d arrowup arrowdown arrowleft arrowright f space shift e r g` via `set_keys`, plus a `set_look` yaw/pitch rate |

### Output

- **Resolution:** 1280 × 704 on both hosts and in the paper's headline configuration; 832 × 480 is the
  other measured profile. The vendor's own shorthand is "480P/720P"
  ([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md),
  [Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md),
  [tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)).
- **Duration:** a continuous stream, not a clip. "Minutes" of continuous synthesis is the claim; the
  evaluation used 5-second and 30-second targets, and no maximum session length is published anywhere
  ([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md),
  [tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)).
- **Frame rate:** 24 fps or above is the design target; Reactor's output "plays at the rate your frames
  arrive" for client sources ([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)).
- **Transport:** WebRTC. The report states "the decoded frames are streamed to the client over WebRTC,
  which also carries keyboard and mouse events back"
  ([tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)); fal's endpoint schema
  takes an SDP offer described as "Offer forwarded by the WMA bridge"
  ([fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md)).
- **Tracks:** Reactor returns generated `main_video` plus `draft_video` — "The draft frame each generated
  frame was made from, with the same timing" ([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)).
- **Audio:** none documented. Neither host exposes an audio track for EdenLive, and the paper describes
  video only.

### Real-time behaviour

| Configuration | Inference throughput | First-chunk latency | Inter-chunk gap P95 | RTF | Peak allocated |
| --- | --- | --- | --- | --- | --- |
| 5B, 1280 × 704, 1× H100 | 29.80 FPS | 1161.81 ms | 391.54 ms | 0.5359 | 36.78 GiB |
| 5B, 832 × 480, 1× H100 | 73.52 FPS | 826.38 ms | 148.24 ms | 0.2172 | 28.53 GiB |
| 14B, 832 × 480, 8× H100 | 26.76 FPS | 1714.02 ms | 429.90 ms | 0.5966 | 50.83 GiB |

Timed "from model-side condition processing to decoded frames in CPU memory", excluding proxy
rendering, preprocessing and network transmission
([tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)).

Mechanism, as described by the authors: the generator is distilled to four denoising steps per chunk of
`L = 3` latent frames, attends to a bounded cache with a permanent sink plus a rolling window, decodes
with LightTAE instead of the full VAE, and is served on NVIDIA FlashDreams with simulation and reference
encoding pipelined one chunk ahead ([tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md),
[GitHub](../../sources/github.com/edenlive-repo/2026-10-26.md)). The response delay is a design
parameter: "a shorter chunk reduces this delay, but a rollout of fixed duration then involves more
autoregressive steps and is more prone to drift".

### Applications the vendor demonstrates

Interactive game preview (agent-built proxy plus engine code), scene and animation preview (one layout,
many appearances), video re-rendering and restyling, and embodied data augmentation (human manipulation
footage re-rendered from a robot viewpoint)
([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md),
[tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)).

### Vendor and host claims, labelled

- *Claim, vendor:* "even on a consumer GPU (RTX 5090)" and "minutes" of continuous generation
  ([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md)). The first is
  corroborated only by a third-party LightX2V optimization path, not by the repository's default
  configuration ([GitHub](../../sources/github.com/edenlive-repo/2026-10-26.md)).
- *Claim, vendor:* "real-time generation (24 fps or more on a single GPU)" — measured, at 29.80 FPS for
  1280 × 704, but on an H100 and with network transmission excluded
  ([tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)).
- *Claim, host:* Reactor calls it "a real-time world model that creates high-fidelity interactive worlds
  from a low-fidelity 3D scene" — a product description, not a measurement
  ([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)).
- *Claim, vendor:* Vidu S2 "is largely restricted to portrait scenes, whereas EdenLive handles diverse
  forms of reference" — unverified here; no Vidu S2 material was captured
  ([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md)).

## Limitations and constraints

**Architectural.** EdenLive does not maintain state. Every captured first-party page repeats that the
upstream program "keeps the game rules, health, and score", and Reactor's prompt guide warns not to
"expect prompt text to implement game logic or change the scene's geometry"
([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md),
[tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)). A reader looking for a
model that simulates a world from actions will not find it here.

**Reference must match the opening view.** Reactor instructs users to capture the reference "from the
view you plan to stream", to keep the camera and player at that pose until starting, and to check the
centre-crop before starting; a mismatched reference is the documented failure mode
([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)). This is host guidance, not a stated
model limit.

**Temporal memory.** The authors name three limitations themselves: the mapping "between reference
objects and their intended identities" is implicit; the "bounded temporal cache also lacks a dedicated
memory for fine appearance details", motivating retrieval "after extended occlusion or scene
revisiting"; and the encoder gives "a single learned representation without explicit control over which
levels of reference detail to preserve" ([tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)).

**Inputs the host has not validated.** Reactor: "We have not validated output quality for webcams or
prerecorded video, including moving subjects"
([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)). That is notable given that VAST's own
page advertises video re-rendering and restyling as an application.

**Drift versus latency.** Chunk length trades response delay against autoregressive drift by the
authors' own account; the shipped `L = 3` is a compromise, not a setting users can trade
([tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md)).

**Deployment weight.** The reference environment is "Linux x86-64, NVIDIA GPUs with 80 GB"; weights are
"about 210 GB"; the real-time service needs a TURN relay, and the prompt-to-game workbench additionally
needs a host with the `claude` CLI running "with `--dangerously-skip-permissions`"
([GitHub](../../sources/github.com/edenlive-repo/2026-10-26.md),
[HF](../../sources/huggingface.co/edenlive-weights/2026-10-26.md)).

**Safety, consent and moderation.** No captured vendor page documents a content policy, likeness or
consent rule, watermark, or moderation hook for EdenLive's video path; the only content-filtering
requirement found is Black Forest Labs' condition on the optional FLUX workbench renderer
([HF](../../sources/huggingface.co/edenlive-weights/2026-10-26.md)). Reactor, as host, states that
"Every model Reactor serves on the API … is moderated": the prompt text and uploaded reference images
are screened, and "a session that violates it is terminated", which stops the meter
([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)). That covers the text and reference-image
channels only — no captured page says the inbound `source_video` track is screened, so the draft video a
client streams is the unaddressed surface. fal documents no moderation behaviour for these endpoints
([fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md)).

**Session mechanics.** fal's endpoints expose nothing but an SDP offer: no prompt, resolution, duration
or seed parameter, and no public documentation of the "WMA bridge" that forwards the offer
([fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md)). Reactor's commands are richer but constrain
sequence — `select_game` and `set_image` "require a paused world and end it"
([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)).

## Access, pricing, licensing

### fal — per second of generated video

| Endpoint | Price | Floor |
| --- | --- | --- |
| `vast/eden-live-5b-video`, `vast/eden-live-5b-game` | $0.0035 per second of video generated | 10 billable seconds ($0.035) per session |
| `vast/eden-live-14b-video`, `vast/eden-live-14b-game` | $0.01 per second of video generated | 10 billable seconds ($0.10) per session |

`licenseType: "commercial"`, `authSkippable: false` — the playground needs an account
([fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md)). The two 5B endpoints are priced identically,
so the `-video` / `-game` split is a product distinction, not a price tier.

### Reactor — per second of session wall-clock time

$0.0017/s, displayed as $0.102/minute. The billing basis is explicitly **not** generated output:
"Reactor meters each session per second of wall-clock time while it holds a GPU, even when you send no
commands and receive no media", and recoverable disconnects keep billing
([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)). At $0.102/min against fal's $0.21/min of
generated video, Reactor is roughly half the price per minute of output *if* the session is generating
continuously, and more expensive if it idles. The two hosts cannot be compared on a single per-second
number without stating the basis.

### Replicate — absent

No VAST, Tripo or EdenLive listing exists: nine direct routes returned 404 and five catalogue searches
returned only fuzzy matches on unrelated models
([Replicate](../../sources/replicate.com/eden-live-not-listed/2026-10-26.md)). The independent host set
for this model is therefore fal plus Reactor, not fal plus Replicate.

### Weights and licences

Open weights at `VAST-AI/EdenLive` (public, not gated), covering both sizes and both sampling modes; code
is Apache-2.0. The weight licence is mixed, component by component
([HF](../../sources/huggingface.co/edenlive-weights/2026-10-26.md),
[GitHub](../../sources/github.com/edenlive-repo/2026-10-26.md)):

| Component | Licence |
| --- | --- |
| `dit-*`, `vae-*`, `umt5/`, `scheduler-*`, `decoder-*` | Apache 2.0 |
| `clip/` (LAION CLIP ViT-H/14, OpenCLIP) | MIT |
| `vision-encoder/` (DINOv3 and derivatives) | DINOv3 License |
| `flux-c2f/` (workbench first frame only) | FLUX Non-Commercial License v2.1 — non-commercial, non-production |

The vendor's own warning is worth keeping: "Public end-user or production deployment is not
automatically permitted by being free of charge or described as a demo"
([HF](../../sources/huggingface.co/edenlive-weights/2026-10-26.md)). A commercial deployment has to
resolve the DINOv3-licensed encoder, and anyone using the prompt-to-game workbench also inherits the FLUX
non-commercial term. Self-hosting the video pipeline does not load FLUX.

### Lineage

Built on Wan: the 5B from `Wan2.2-TI2V-5B` and the 14B from `Wan2.1-I2V-14B`, with a fine-tuned DINOv3
encoder as the reference interface and LightX2V's LightTAE decoders for fast decoding
([tech report](../../sources/vast-eden.ai/edenlive-tech-report/2026-10-26.md),
[HF](../../sources/huggingface.co/edenlive-weights/2026-10-26.md)). The report also credits NVIDIA
FlashDreams for the serving system and Three.js for the game renders.

## Unresolved questions

1. **What is the maximum session length?** "Minutes" is a claim in three places and a tested bound
   nowhere. The evaluation used 30-second targets; neither host publishes a cap
   ([project page](../../sources/vast-eden.ai/edenlive-project-page/2026-10-26.md),
   [Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)).
2. **What is the output frame rate and codec?** 24 fps is the design target, Reactor's client mode "plays
   at the rate your frames arrive", and the report reports FPS as throughput. Bitrate, codec and colour
   handling are undocumented.
3. **Which checkpoint does Reactor serve?** Its 1280 × 704 output and the repository's "runs on one B200"
   note point at the 5B, but the host never says so
   ([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md),
   [GitHub](../../sources/github.com/edenlive-repo/2026-10-26.md)).
4. **What distinguishes fal's `-game` endpoint from its `-video` endpoint?** Identical SDP schemas, one
   category label apart (`worlds` vs `video-to-video`), no prose beyond one line each. Reactor carries
   both sources in a single endpoint with `set_source`, which suggests fal is splitting one model's input
   modes — but fal does not say ([fal](../../sources/fal.ai/eden-live-5b/2026-10-26.md),
   [Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)).
5. **Is there a day-level launch date?** The vendor gives a month, the repositories give 2026-10-12, the
   hosts give 2026-10-22/23. No announcement post pins the public release.
6. **Does the 5B/14B split deserve two pages?** This page treats 5B as its own entity because the
   resolution, GPU footprint and fal price diverge. If the 14B turns out to share every host surface and
   differ only in quality, a merged page with a size table would be the better shape.
7. **Do the quality claims replicate?** Everything in the long-horizon table is vendor-run, with a
   Gemini-3.8-Flash judge over 45 cases; no independent evaluation of EdenLive was found.
8. **How does it compare with the interactive models the roster groups it beside** — LingBot World 2,
   Decart Lucy 2, ABot-World? VAST's table asserts a structural difference; no measurement compares them.
9. **What happens when the *draft video* is disallowed?** Reactor screens the prompt and reference
   images and terminates a violating session, but no page says the inbound `source_video` track is
   screened, and nothing describes refusal behaviour for real people or third-party footage
   ([Reactor](../../sources/reactor.inc/eden-live/2026-10-26.md)).
10. **Is "Eden Live" ever VAST's own spelling?** Every first-party artefact says "EdenLive"; the
    two-word form appears only in host catalogues. The page keeps "EdenLive" as canonical.

## Evidence status

**Evidence floor: met.** First-party: five new captures — the project page (read from the site's
`data/projects.js` content file, since the page shell is client-rendered), the 35-page technical report,
the GitHub repository README and metadata, the Hugging Face weight repository with its per-component
licence table, and VAST's corporate research/about pages. Independent hosts: fal (catalogue metadata,
four OpenAPI schemas, price strings) and Reactor (model page, overview, schema, prompt guide, billing and
moderation policies). One negative record documents Replicate's absence. All captured 2026-10-26.

**No direct tests have been run for this page.** No session was opened, no video streamed, no latency
timed, no output inspected. Every number here is the authors' or a host's, and the one third-party number
(24.7 FPS on an RTX 5090) comes from LightX2V and is relayed by the vendor README, not independently
reproduced by this knowledge base.

**Retrieval note.** The Eden site renders entirely client-side from `data/projects.js`; a plain fetch of
`https://vast-eden.ai/` returns a "Loading…" shell. fal's model pages are likewise client-rendered and
returned only skeletons, so fal evidence here comes from its catalogue and OpenAPI JSON, not page prose.
`tripo3d.ai/research/project-eden`, the page the abstract links for "project-eden", was behind a
Cloudflare interstitial (HTTP 403) at capture and was not recorded.

**Date status: in window.** First public artefacts 2026-10-12, fourteen days before capture and about a year
after the 2025-10-26 cut-off.

**What would change this assessment:** a controlled session on a fixed proxy recording at 1280 × 704
measuring input-to-display latency, sustained quality past one minute, and drift under fast camera motion;
a webcam or screen-share run to test the host's own caveat; a prompt-only restyle attempt to confirm the
model really refuses to implement game logic; a licence review of the DINOv3-licensed encoder for
commercial self-hosting; and an independent quality comparison against LingBot World 2 and Decart Lucy 2
under the same reference and first frame.
