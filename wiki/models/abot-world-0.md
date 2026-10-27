# ABot-World-0

An action-conditioned **video world model** from Alibaba's AMAP CV Lab: a 5B-parameter causal
generator that turns one starting image plus a stream of keyboard commands into a continuous,
walkable video environment at 720P and up to 16 FPS on a single desktop GPU
([repository](../../sources/github.com/abot-world-repo/2026-10-26.md),
[technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md)). It is not a
text-to-clip video generator: there is no duration parameter and no clip artefact anywhere in its
first-party surfaces, and the only hosted output is a live video track.

The weights are **open** — Apache 2.0, ungated, 5.27B BF16 parameters
([model card](../../sources/huggingface.co/abot-world-0-5b-lf/2026-10-26.md)) — so this is the rare
case where the model, the code, the training data, the technical report and a third-party host all
exist at once. Its release date, 2026-07-09, is inside the roster's one-year window (on or after
2025-10-26).

## Identity

- **Canonical name:** ABot-World-0. The paper title is "ABot-World-0: Infinite Interactive World
  Rollout on a Single Desktop GPU"; the repository and project page drop the version suffix from the
  project name ("ABot-World") but the released checkpoint is `ABot-World-0-5B-LF`
  ([repository](../../sources/github.com/abot-world-repo/2026-10-26.md),
  [project page](../../sources/amap-cvlab.github.io/abot-world-project/2026-10-26.md)).
- **Vendor / developer:** ABot-World Team, AMAP CV Lab — Alibaba's mapping (Amap/Gaode) computer-vision
  lab. The project page footer reads "Copyright © 2026 Alibaba AMAP CV Lab"; `NOTICE` reads
  "Copyright 2026 AMAP CV LAB"
  ([project page](../../sources/amap-cvlab.github.io/abot-world-project/2026-10-26.md),
  [repository](../../sources/github.com/abot-world-repo/2026-10-26.md)).
- **Aliases and host IDs.** The roster label "ABot-World 0" is a discovery label; the canonical
  spelling is ABot-World-0.

| Surface | Identifier |
| --- | --- |
| Weights (HuggingFace / ModelScope) | `acvlab/ABot-World-0-5B-LF` / `amap_cvlab/ABot-World-0-5B-LF` |
| fal endpoint | `alibaba/abot-world-0`, title "Abot World 0" |
| Vendor playground | ABot World Studio, `abot-world.amap.com` |
| Third-party playground | Reactor, `reactor.inc/abot-world` |

- **Checkpoint suffixes:** `0` is the first generation; `5B` is the parameter count; `LF` is
  LongForcing, the long-horizon training stage named in the paper and in
  `configs/long_forcing_dmd.yaml` ([repository](../../sources/github.com/abot-world-repo/2026-10-26.md)).
  The model card never expands `LF` itself.
- **Base model:** `Wan-AI/Wan2.2-TI2V-5B`
  ([model card](../../sources/huggingface.co/abot-world-0-5b-lf/2026-10-26.md)). The checkpoint
  bundles the Wan2.2 VAE, a TAeW2.2 streaming VAE (`taew2_2.pth`) and a UMT5-XXL text encoder, and
  the repository credits Wan2.2, Causal Forcing, AngelSlim, LightX2V, taehv and Helios. ABot-World-0
  is therefore an adaptation and distillation of an Alibaba Wan2.2 image-to-video base, not a
  from-scratch architecture.
- **Siblings:**
  - **ABot-World-0's bidirectional teacher** is the parent model and is *not* released — the only
    unchecked item on the repository roadmap ([repository](../../sources/github.com/abot-world-repo/2026-10-26.md)).
  - **HappyOyster** is Alibaba Cloud's separate real-time world-model product, cited in ABot-World-0's
    own comparison table as a competitor ([technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md)).
    Same corporate parent, different organisation and product line; it is a sibling in the market
    sense, not a version of this model.
  - The `amap-cvlab` GitHub organisation publishes many other `ABot-*` repositories (ABot-3DWorld,
    ABot-PhysWorld, ABot-Earth-0.5, ABot-Recon, ABot-Navigation, …). "ABot" is a lab-wide prefix, not
    a model family, and those repositories are unrelated to this page.

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-04-16 | Repository created (development, pre-public) | [repository](../../sources/github.com/abot-world-repo/2026-10-26.md) |
| 2026-07-09 | **Public release**: causal student weights, inference code, local Gradio demo, ABot World Studio playground | [repository](../../sources/github.com/abot-world-repo/2026-10-26.md), [model card](../../sources/huggingface.co/abot-world-0-5b-lf/2026-10-26.md) |
| 2026-07-13 | Third-party playground listing (Reactor) | [repository](../../sources/github.com/abot-world-repo/2026-10-26.md), [Reactor](../../sources/reactor.inc/abot-world-playground/2026-10-26.md) |
| 2026-07-21 / 07-22 | Technical report submitted to arXiv / announced | [technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md) |
| 2026-08-03 | 500-hour action-annotated training dataset released | [repository](../../sources/github.com/abot-world-repo/2026-10-26.md) |
| 2026-08-15 | Experimental 24-hour uninterrupted rollout demo | [repository](../../sources/github.com/abot-world-repo/2026-10-26.md) |
| 2026-09-08 | Docker environment image published | [repository](../../sources/github.com/abot-world-repo/2026-10-26.md) |
| 2026-10-15 | fal endpoint published | [fal catalogue](../../sources/fal.ai/abot-world-0-catalogue/2026-10-26.md) |

## Current assessment

**It is an interactive environment, and that is a category distinction, not a marketing one.** Every
first-party surface describes a closed loop: an action changes the next observation, which becomes the
next input. The paper frames the goal as "a persistent generative environment in which actions change
state, the resulting observations inform subsequent actions, and the world remains coherent as
interaction continues"
([technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md)). fal files it under
a `worlds` category with the tags `realtime`, `interactive`, `walkable`, `explorable`, and its API
contract has no prompt-to-file call at all
([fal catalogue](../../sources/fal.ai/abot-world-0-catalogue/2026-10-26.md),
[fal realtime contract](../../sources/fal.ai/abot-world-0-realtime-api/2026-10-26.md)). Calling it a
video generator would misdescribe the input surface (per-frame key states), the output surface (a
stream, not a file) and the billing basis (time streamed).

**What the evidence supports well.** The operational envelope — ~720P, 16 FPS, ~1.2 s
action-to-first-frame latency, ~19 GiB peak VRAM, one RTX 5090 — is stated identically on every
vendor surface and matches the host contract, which negotiates a 1280 × 704 track at 16 fps
([repository](../../sources/github.com/abot-world-repo/2026-10-26.md),
[technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md),
[model card](../../sources/huggingface.co/abot-world-0-5b-lf/2026-10-26.md),
[fal realtime contract](../../sources/fal.ai/abot-world-0-realtime-api/2026-10-26.md)). That is
agreement about documentation, not an independent measurement: three of those four are the same
publisher. The eight-command control surface is the one thing confirmed by genuinely separate
authorities: the repository's per-frame key log, the Reactor playground's "WASD / IJKL" description,
and fal's `commands` message enum.

**What the evidence does not support.** Any quality ranking. The paper's WorldRoamBench table is
vendor-run on a benchmark written by the same team — reference [84]'s author list is the paper's own
Benchmark Team ([technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md)). No
independent measurement of any ABot-World-0 capability was captured, and no direct test was run for
this page.

**Is it current?** Yes, as of capture: the repository was last pushed 2026-10-09, fal published an
endpoint on 2026-10-15 and refreshed it on 2026-10-18, and the model card was last modified
2026-08-21. No deprecation notice exists on any surface. It is also the *first* generation of a
research line — `0` in the name is a version, not a marketing flourish — and the unreleased teacher
suggests the series is not finished.

**Is it a repackaging?** Partly, and honestly so. The released artefact is a 5B Wan2.2 TI2V derivative
with Wan2.2 VAE and UMT5-XXL, distilled from an unreleased bidirectional teacher into a causal student.
The contribution claimed is not the base architecture but the causal distillation, LongForcing, the
action-conditioning scheme and the streaming inference stack. That is a real and checkable set of
changes; it is not a new foundation model.

## Documented capabilities

All of the following is vendor or host documentation, not independent testing.

### Inputs

| Input | Detail | Source |
| --- | --- | --- |
| Starting image | One image defines the world. Studio: JPG/JPEG/PNG, "recommended aspect ratio 4:3 to 2:1, maximum 25 MB". fal: `image_url` (≤4096 chars), "Image URL takes precedence over the preset". | [Studio](../../sources/amap.com/abot-world-studio/2026-10-26.md), [fal realtime contract](../../sources/fal.ai/abot-world-0-realtime-api/2026-10-26.md) |
| Text prompt | Scene description, up to 2000 characters on fal; editable mid-session via `prompt`. Repo default: "A realistic outdoor world scene with a navigable path, natural lighting, detailed ground texture, and stable forward motion." | [fal realtime contract](../../sources/fal.ai/abot-world-0-realtime-api/2026-10-26.md), [repository](../../sources/github.com/abot-world-repo/2026-10-26.md) |
| Keyboard actions | Eight discrete commands per frame: `forward`, `left`, `backward`, `right`, `look_up`, `look_left`, `look_down`, `look_right` (WASD + IJKL locally). | [fal realtime contract](../../sources/fal.ai/abot-world-0-realtime-api/2026-10-26.md), [Reactor](../../sources/reactor.inc/abot-world-playground/2026-10-26.md) |
| Reference character | "reference-character memory provides persistent appearance cues for identity consistency during third-person rollouts" — described in the paper only; no host exposes a separate field for it. | [technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md) |
| Preset world | fal ships 10 built-in starting worlds (Cinema ×5, Adventure, Desert, Mountains, Forest, Arctic); Studio advertises 120+. | [fal catalogue](../../sources/fal.ai/abot-world-0-catalogue/2026-10-26.md), [Studio](../../sources/amap.com/abot-world-studio/2026-10-26.md) |

There is **no** video, audio, or multi-image input, and no first/last-frame control — the model is
open-loop on everything except the action stream.

### Output

- **Live video only**, negotiated on fal as a receive track of `{"frameRate":16,"height":704,"width":1280}`
  ([fal realtime contract](../../sources/fal.ai/abot-world-0-realtime-api/2026-10-26.md)).
- **No audio.** No captured source describes an audio track, and fal's media contract has none. This is
  the sharpest difference from the audio-video generation models in this wiki.
- **No file output.** fal's `AbotWorld0Output` schema is an empty object; the session ends with
  `stream_exhausted` and "clients must negotiate a new session to continue".
- **No stated container, codec, bitrate, colour depth, or download path.**

### Duration and horizon

- **Design goal is unbounded.** "Infinite World Rollout — Supports open-ended interactive world
  generation beyond fixed video-length limits"; the Studio's worlds are "continuously expandable"
  ([repository](../../sources/github.com/abot-world-repo/2026-10-26.md),
  [Studio](../../sources/amap.com/abot-world-studio/2026-10-26.md)).
- **Vendor demonstrations:** a "24-hour uninterrupted rollout demo" (2026-08-15), and hour-scale and
  day-scale rollouts shown as timestamped keyframe strips in the paper
  ([repository](../../sources/github.com/abot-world-repo/2026-10-26.md),
  [technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md)).
- **Hosted sessions are finite.** fal exposes `max_blocks` and `frames_per_block` per session; their
  values were not captured, and continuation requires a new session. "Infinite" is a model property,
  not a guarantee about a single API session.

### Control fidelity and long-horizon behaviour (vendor claims)

From the technical report, labelled as claims:

- "ABot-World-0 remains responsive to user commands while preserving recognizable scene structure,
  actor and object identity, and motion continuity, without rapidly degenerating into frozen motion,
  repetitive textures, or severe visual drift."
- Physical plausibility is emergent, not trained: "a person pushes a cardboard box away, footsteps
  induce temporally consistent disturbances in water, a person walking through snow leaves persistent
  footprints, first-person motion is blocked by a wall, and a character collides with a railing without
  passing through it." The paper concedes the model "is not explicitly trained with symbolic physical
  rules or real-world collision annotations."
- Out-of-domain control generalisation is shown qualitatively for novel scene–character pairs.

### WorldRoamBench (vendor-run, in-house benchmark)

| Model | Size | Strict Acc. | Partial Acc. | Traj. | Aesthetic | Imaging | Mechanics | Memory |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Genie 3 | – | 0.4700 | 0.6608 | 0.6719 | 0.4711 | 0.4757 | 0.5454 | 0.6073 |
| HappyOyster | – | 0.5317 | 0.7631 | 0.7737 | 0.5235 | 0.4377 | 0.5395 | 0.6309 |
| LingBot-World | 14B | 0.3235 | 0.4198 | 0.4094 | 0.2898 | 0.2875 | 0.2777 | 0.3006 |
| HY-World 1.5 | 8.3B | 0.1640 | 0.2088 | 0.2015 | 0.1400 | 0.1236 | 0.1115 | 0.1562 |
| ABot-World-0 | 5B | 0.5266 | 0.7290 | 0.6752 | 0.5039 | 0.4651 | 0.5223 | 0.5041 |

Source: [technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md), Table 3.
Read per column, ABot-World-0 is **second on five of seven and third on two, and leads no column** —
the vendor's caption promises bold for best and underline for second-best, but nothing here puts
ABot-World-0 first. Against Genie 3 it wins four columns (Strict Acc. +5.7, Partial Acc. +6.8, Traj.
+0.3, Aesthetic +3.3 points) and loses three (Imaging −1.1, Mechanics −2.3, **Memory −10.3**). Against
HappyOyster it wins only Imaging. The paper's prose — "achieves strong action fidelity, trajectory
following, visual quality, physical mechanics, and memory scores" — does not mention that memory, the
property its own LongForcing stage targets, is its weakest column. Treat the table as a vendor
demonstration that a 5B model is competitive with one 14B model and two of unstated size, not as a
ranking or a lead.

## Limitations and constraints

- **720P and 16 FPS is the ceiling, not the floor.** The paper says "up to 16 FPS"; the desktop claim
  is one RTX 5090. No lower-bound configuration, fallback resolution, or CPU path is documented
  ([technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md)).
- **Single GPU only.** "Not at present. The current release targets single-GPU desktop inference."
  ([FAQ](../../sources/github.com/abot-world-repo/2026-10-26.md)).
- **Hardware floor is high for a "desktop" claim:** ~19 GB VRAM and "at least 64 GB of system RAM
  recommended". RTX 4090 verified; RTX 3090 "has not yet been evaluated". Linux strongly recommended,
  Windows "limited or fragile", and the supported CUDA range is itself inconsistent — the FAQ lists
  12.8 and 12.9, the README says 12.8, and the model card claims a 13.3 test
  ([FAQ](../../sources/github.com/abot-world-repo/2026-10-26.md),
  [model card](../../sources/huggingface.co/abot-world-0-5b-lf/2026-10-26.md)).
- **No audio, no file, no post-production.** There is no export path, no re-render, no editing and no
  upscaling — the output is a live stream you watch or capture.
- **The teacher is withheld.** Only the distilled causal student is public; the roadmap's
  "Bidirectional Teacher Model Release" is unchecked, so the training recipe cannot be reproduced end
  to end from released artefacts alone
  ([repository](../../sources/github.com/abot-world-repo/2026-10-26.md)).
- **The hosted route is experimental.** fal's client is alpha — "may change in a minor version" — and
  the session endpoint must not be called with `fal.run`, `fal.subscribe` or the Queue API
  ([fal realtime contract](../../sources/fal.ai/abot-world-0-realtime-api/2026-10-26.md)).
- **Session state is fragile by design.** World updates run one at a time and "must not be replayed
  automatically"; `configure` is allowed once per connection; an `error` event "is diagnostic and does
  not identify a failed update" (same record).
- **No moderation, safety, consent, or likeness documentation anywhere.** fal accepts an arbitrary
  `image_url` and exposes no content-policy or refusal documentation; the repository contains an
  unmodified Apache 2.0 `LICENSE` and nothing resembling an acceptable-use policy; the paper has no
  safety section ([fal realtime contract](../../sources/fal.ai/abot-world-0-realtime-api/2026-10-26.md),
  [repository](../../sources/github.com/abot-world-repo/2026-10-26.md),
  [technical report](../../sources/arxiv.org/abot-world-0-2607-19191/2026-10-26.md)). A first-frame
  image of a real place or person therefore has no documented handling.
- **No first-party API.** Alibaba publishes no Model Studio/DashScope model ID, endpoint, rate limit
  or SLA for ABot-World-0; the only first-party hosted route is a login-gated, credit-billed Chinese
  playground ([Studio](../../sources/amap.com/abot-world-studio/2026-10-26.md)).
- **No Replicate listing.** A search of Replicate's catalogue on capture found nothing under "abot",
  "amap" or "abotworld", and no world-models collection (checked 2026-10-26).
- **Documentation is thin on the numbers that matter.** Resolution is given as "720P" in prose and
  `1280×704` in the host contract; context length, chunk size, maximum blocks, aspect-ratio handling,
  and codec are undocumented or runtime-only.
- **The evaluation is not independent.** WorldRoamBench is authored by the same team, and no
  independent benchmark, arena result, or third-party review was captured.

## Access, pricing, licensing

Four routes, four different arrangements.

| Route | Basis | Price | Notes |
| --- | --- | --- | --- |
| fal `alibaba/abot-world-0` | per second of generated video | **$0.00125 / s** | ≈$0.075/min, ≈$4.50/h; WebRTC session; alpha client |
| ABot World Studio (`abot-world.amap.com`) | credits ("积分") | not captured | login required; China-facing (Beijing ICP) |
| Self-host (Apache 2.0 weights) | free | $0 | ~19 GB VRAM, 64 GB RAM, Linux, single RTX 5090/4090 class |
| Reactor (`reactor.inc/abot-world`) | not stated | not captured | third-party playground, client-rendered page |

Sources: [fal catalogue](../../sources/fal.ai/abot-world-0-catalogue/2026-10-26.md),
[Studio](../../sources/amap.com/abot-world-studio/2026-10-26.md),
[repository](../../sources/github.com/abot-world-repo/2026-10-26.md),
[Reactor](../../sources/reactor.inc/abot-world-playground/2026-10-26.md).

The pricing shape is unusual and worth stating: because the output is a stream, **cost scales with
seconds streamed, not with the number of requests**. An hour of continuous exploration costs $4.50 on
fal; the same hour costs nothing beyond electricity on your own 5090. There is no per-generation price
anywhere, which is the clearest confirmation that no "generation" exists to price.

**Weights licence: Apache 2.0.** Ungated on HuggingFace, no access request, no acceptable-use annex.
The bundled Wan2.2 components are also Apache 2.0, and `THIRD_PARTY_NOTICES.md` records AngelSlim
(Apache 2.0), LightX2V (installed separately, not vendored), taehv and Helios
([model card](../../sources/huggingface.co/abot-world-0-5b-lf/2026-10-26.md),
[repository](../../sources/github.com/abot-world-repo/2026-10-26.md)). fal's `licenseType: "commercial"`
is fal's field about use through fal and does not modify the upstream licence
([fal catalogue](../../sources/fal.ai/abot-world-0-catalogue/2026-10-26.md)).

**What is not established:** who owns generated world footage, whether Studio credits carry
commercial-use rights, whether the 500-hour training dataset's own licence (Apache 2.0 on the Hub)
covers its underlying game and internet video, and what terms Reactor applies. None of the four
platforms' terms of service was captured.

## Unresolved questions

1. **Which checkpoint does fal serve?** fal's catalogue carries no model revision, and the runtime
   `session_info` message — the one place `model_id` and `model_revision` appear — has no captured
   example payload. fal's `serverless` hosting type and the `-LF` checkpoint's ~19 GB footprint are
   consistent with the released 5B student, but not proof.
2. **Is the hosted output 704p or 720p?** fal's negotiated track is 1280 × 704 (1.818:1); every vendor
   document says 720P. The likely explanation — a fixed 1280 × 704 streaming frame cropped or padded
   from 720p training — is not documented anywhere.
3. **How long is one fal session, really?** `max_blocks` and `frames_per_block` are exposed but their
   values are not published, so the practical ceiling on a single continuous session is unknown.
4. **How does the 24-hour demo relate to the released model?** The demo page is a client-rendered app
   whose content was not captured; only the README news line and a companion repository attest it.
   Whether it was one session, chained sessions, or a curated edit is unclear.
5. **What does the reference-character memory actually require?** The paper describes the capability;
   no host exposes an input field for it, and the local demo's presets encode identity in the prompt
   text instead.
6. **What happens to a real person's likeness in a starting image?** No consent, moderation, or
   refusal documentation exists on any surface.
7. **Does Studio's "< 1.5 s render latency" contradict the paper's 1.2 s?** They are probably different
   measurements (server-side first frame vs. end-to-end action-to-first-frame on a local GPU), but
   neither page defines its measurement point, so the gap stays open.
8. **Is there a successor?** The roadmap leaves the teacher unreleased and the repository has no tags
   or releases; whether a `-1` is planned is not stated.
9. **How does it compare with Genie 3, HappyOyster or LingBot-World on anything measured
   independently?** The only comparison is the team's own benchmark, run by the team.

## Evidence status

Evidence floor: **met.** First-party: the `amap-cvlab/ABot-World` repository (README, FAQ, licence,
configs, action log), the arXiv technical report 2607.19191, the HuggingFace model card and hub
metadata, the AMAP CV Lab project page, and the ABot World Studio product page. Independent host
record: fal's catalogue entry, endpoint metadata, price string, OpenAPI and AsyncAPI contracts and
documentation. Supplementary third-party: the Reactor playground page. All captured 2026-10-26.
Replicate was searched and has no listing.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor documentation; the 16 FPS / 1.2 s / 19 GiB figures are the
team's own desktop measurements; the WorldRoamBench table is vendor-run on a team-authored benchmark;
the price is a published schedule. Agreement on the eight-command control surface across three separate
surfaces is the strongest evidence on the page; agreement on the operational envelope is weaker,
because three of the four statements come from the vendor. All of it is agreement about documentation,
not about behaviour.

The next useful evidence would be a reproducible session against named endpoints and dates: one fixed
starting image driven by an identical scripted action sequence on fal and on a local 4090, comparing
the delivered frame size, sustained FPS, measured action-to-first-frame latency, and drift over ten
minutes; a drift test at 1 minute, 10 minutes and 1 hour against the paper's claimed horizon; a
first-person vs third-person pair from the same image to check the camera-mode claim; a real-person
portrait as `image_url` to observe the undocumented handling; and a `stream_exhausted` run to find the
actual session ceiling.
