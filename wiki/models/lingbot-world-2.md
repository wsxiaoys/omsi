# LingBot World 2

Robbyant's real-time interactive world model: you give it a starting image and a description of a
place, and it generates a continuous, navigable video world that responds to movement and look
controls while you watch. Robbyant calls it **LingBot-World 2.0** and, in the same sentence,
**LingBot-World-Infinity** ([repository](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md),
[technical report](../../sources/arxiv.org/lingbot-world-v2-2607-07534/2026-10-26.md)). The technical
report was submitted 2026-07-08, code and the first weights were released 2026-07-09, the remaining
variants on 2026-09-10, and fal published a hosted WebRTC endpoint on 2026-10-16.

It is within the roster's one-year window. It is also **not a video model in the roster's usual
sense**: there is no duration parameter, no per-clip price, and no documented output file. The unit of
work is a *session* that streams frames until the server ends it, and the output is a live video track
rather than a file
([fal session contract](../../sources/fal.ai/lingbot-world-2-webrtc-api/2026-10-26.md)).

## Identity

- **Canonical name:** LingBot-World 2.0. Vendor alias: **LingBot-World-Infinity**, used interchangeably
  on the project page and in the report abstract. The roster label "LingBot World 2" is fal's display
  title (`Lingbot World 2` in fal's catalogue), not first-party naming
  ([fal catalogue](../../sources/fal.ai/lingbot-world-2/2026-10-26.md)).
- **Developer:** Robbyant — "Shanghai Ant Robbyant Technology Co., Ltd.", an embodied-AI company under
  Ant Group ([project page](../../sources/robbyant.com/lingbot-world-v2-project-page/2026-10-26.md)).
  The repository owner is `Robbyant`; the paper is attributed to the "Robbyant Team".
- **Weights:** public on Hugging Face and ModelScope under `robbyant/lingbot-world-v2-*`
  ([weights record](../../sources/huggingface.co/lingbot-world-v2-model-files/2026-10-26.md)).

| Route | Identifier | What it serves |
| --- | --- | --- |
| fal | `robbyant/lingbot-world-2` (legacy path `fal-ai/lingbot-world-2/start-session`) | WebRTC session, `model_variant: "14b-causal-fast"` |
| Reactor | `reactor.inc/models/lingbot-world-2` | playground + API, variant not published |
| LingGuang | vendor-listed demo partner, "Domestic (Mobile)" | mobile demo in China; no terms captured |
| Self-host | `robbyant/lingbot-world-v2-14b-causal-fast` (+ `-diffusers`), `-14b-causal-pretrain`, `-14b-bid`, `-1.3b-causal-fast` | open weights, CC BY-NC-SA 4.0 |

### Checkpoints

Four released variants, all image+action→video models built on Wan2.2
([repository](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md)):

| Variant | Size | Sampling | Hosted? |
| --- | --- | --- | --- |
| `14b-causal-fast` | 14B | distilled few-step, causal | **yes** — fal's runtime reports this variant; a `-diffusers` conversion exists for SGLang |
| `14b-causal-pretrain` | 14B | 40-step with CFG (per a commented-out README block) | no |
| `14b-bid` | 14B | bidirectional | no |
| `1.3b-causal-fast` | 1.3B | distilled few-step, causal | no |

Only the distilled causal variant is served anywhere. That matters for reading every hosted
observation on this page: fal and Reactor are not exercising the 14B pretrained or bidirectional
checkpoints, and no captured source describes what those produce.

### Timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-07-08 | Technical report submitted (arXiv 2607.07534); repo and first HF weights created | [report](../../sources/arxiv.org/lingbot-world-v2-2607-07534/2026-10-26.md), [repo](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md) |
| 2026-07-09 | "We release the technical report, inference code, and models" | [repo news](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md) |
| 2026-09-04 | HF repositories created for `-causal-pretrain`, `-bid`, `-1.3b-causal-fast` | [weights](../../sources/huggingface.co/lingbot-world-v2-model-files/2026-10-26.md) |
| 2026-09-10 | Remaining variants announced in the repository | [repo news](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md) |
| 2026-10-16 | fal publishes `robbyant/lingbot-world-2`; metadata updated 2026-10-18 | [fal catalogue](../../sources/fal.ai/lingbot-world-2/2026-10-26.md) |
| 2026-10-23 | SGLang cookbook page last modified | [SGLang](../../sources/sglang.io/lingbot-world-2-cookbook/2026-10-26.md) |

Reactor's page carries no date, and the vendor's README captured on 2026-10-26 already lists Reactor as
its PC/web demo partner, so the integration predates fal's endpoint by an unknown margin
([Reactor](../../sources/reactor.inc/lingbot-world-2/2026-10-26.md)).

### Siblings and the predecessor

LingBot-World **1.0** is a different model with its own paper (arXiv 2601.20540), its own real-time
figure (**16 fps**, sub-second latency) and a **permissive Apache-2.0** licence; its repository now
says it "is no longer actively maintained" and points at v2
([predecessor repo](../../sources/github.com/lingbot-world-repo-succession/2026-10-26.md)). The other
LingBot families — Vision, Depth, Map, VLA, VA, Video — are separate products on the same corporate
site, not tiers of this model
([project page](../../sources/robbyant.com/lingbot-world-v2-project-page/2026-10-26.md)).

### Identity ambiguity that remains

1. **Name duality.** "2.0" and "Infinity" are the same model in vendor text, but the repository, HF
   organisation and both hosts use `lingbot-world-v2`, while the project page's headline uses
   "Infinity". There is no statement that a future release will separate them.
2. **Which checkpoint each host runs.** Only fal identifies one, via the runtime `model_variant`
   constant. Reactor publishes no variant, and its controls differ (a degrees-per-frame rotation
   slider rather than fal's discrete look tokens).
3. **fal's hosting label.** fal marks this endpoint `hostingType: "serverless"` rather than the
   `proxy` label its vendor-forwarded video models carry, which implies fal runs the weights itself —
   but fal does not say so in prose
   ([fal catalogue](../../sources/fal.ai/lingbot-world-2/2026-10-26.md)).

## Current assessment

The evidence supports a **genuinely new model, not a repackaging**: a new report, new weights at two
sizes, a licence change from Apache-2.0 to CC BY-NC-SA 4.0, and a new interaction model. It is current
and actively deployed — public and undeprecated on both hosts at capture.

The strongest documented claim is architectural rather than aesthetic: causal chunked generation with
KV caching lets the model keep producing frames indefinitely from a bounded state, which is why the
hosted product is a session instead of a clip
([SGLang](../../sources/sglang.io/lingbot-world-2-cookbook/2026-10-26.md),
[repo](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md)). SGLang states the trade-off
plainly: the model "prioritizes responsive control and bounded causal state over the full-clip global
context of offline video diffusion."

What the evidence does **not** support is the headline performance figure. Robbyant and the report
both claim "720p video streams at 60 fps" with "sub-second control latency", but the only machine-level
record of a hosted stream is fal's WebRTC contract, which negotiates **1664×960 at 48 fps**, and fal's
session schema defaults `generation_speed_verified` to `false`. 1664×960 is *wider and taller* than
720p but the frame rate is lower than claimed; nothing captured reconciles the two numbers, and no
latency measurement exists in any source. Treat "720p60" as a vendor claim and the fal track as the
one declared configuration.

The vendor's own limitations paragraph is unusually candid for a launch page: "true long-term world
memory and extended interactions, and faithful physical understanding" remain unsolved
([project page](../../sources/robbyant.com/lingbot-world-v2-project-page/2026-10-26.md)). That is
consistent with the hosts' bounded sessions and with the fact that neither host advertises persistence
of a world across sessions.

The practical obstacle is licensing, not capability. The weights are non-commercial, and fal — the only
host that publishes a programmatic session contract — labels the endpoint **Research only**, unlike
any commercial video endpoint in this knowledge base.

## Documented capabilities

Everything below is vendor or host documentation. No direct tests were run.

### Inputs

- **Starting image.** fal: "Use your own image instead of a built-in world", and "Image URL takes
  precedence over the preset"; a preset may be used instead. SGLang's open-weights path requires
  `first_frame` ("Initial reference image") with no preset fallback
  ([fal contract](../../sources/fal.ai/lingbot-world-2-webrtc-api/2026-10-26.md),
  [SGLang](../../sources/sglang.io/lingbot-world-2-cookbook/2026-10-26.md)).
- **World description prompt.** Up to 2000 characters, and it can be replaced mid-session
  (`prompt` message: "Change the scene's description while continuing this world"). The example
  prompts are long operational briefs specifying camera framing, avatar visibility, route width and
  forbidden cuts ([fal catalogue](../../sources/fal.ai/lingbot-world-2/2026-10-26.md)).
- **Prompt expansion.** Optional LLM rewrite of "world descriptions, updates, and quick actions",
  default on.
- **Quick actions.** Up to nine user-defined actions, each bound to a number key, each with a title
  (≤40 chars) and a description (≤1000 chars) of "What happens while the key is held".
- **Movement and look controls.** fal: 17 tokens — `forward`, `left`, `backward`, `right`, `look_up`,
  `look_left`, `look_down`, `look_right`, `quick_action_1…9` — sent as `active` (held) and `activated`
  (edge-triggered). SGLang uses the equivalent `w/a/s/d` and `i/j/k/l` tokens. fal notes a browser
  "may map a keyboard, gamepad, touch control, or agent action to these names", which is the only
  documented hook for programmatic agents.
- **Reset.** Restart with a new preset/prompt/image without opening a new session.

### Output

| Property | Value | Source |
| --- | --- | --- |
| Stream (fal) | video track `{"frameRate": 48, "width": 1664, "height": 960}`, no client→model media tracks | [fal contract](../../sources/fal.ai/lingbot-world-2-webrtc-api/2026-10-26.md) |
| Vendor claim | "720p and 60 fps with sub‑second control latency" | [project page](../../sources/robbyant.com/lingbot-world-v2-project-page/2026-10-26.md) |
| Open-weights examples | `--size 480*832`, `--frame_num 361` (14B), `832x480` (SGLang) | [repo](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md), [SGLang](../../sources/sglang.io/lingbot-world-2-cookbook/2026-10-26.md) |
| Transport | WebRTC on fal; WebSocket + MessagePack frame batches on SGLang (raw RGB, WebP or JPEG) | both records above |
| Audio | **no captured source mentions audio output** | — |
| Download/export | Reactor has a "Recordings" tab; fal documents no artefact | [Reactor](../../sources/reactor.inc/lingbot-world-2/2026-10-26.md) |

The 1664×960 track is not one of the resolutions any vendor document names. Whether it is a native
generation size, a 4× super-resolution of a smaller frame (SGLang documents optional 4× upscaling), or
a transport scaling choice is **not stated anywhere captured**; the arithmetic is suggestive and
should not be read as established.

### Duration and horizon

The vendor claims "an unbounded interaction horizon" and "infinite exploration across diverse
environments over hours without visual drifts"
([repo](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md),
[project page](../../sources/robbyant.com/lingbot-world-v2-project-page/2026-10-26.md)). The hosted
contract is bounded: the runtime publishes `max_blocks`, and the session ends with `stream_exhausted`
— "The model has no more frames to send and the current peer is closing. Clients must negotiate a new
session to continue." `max_blocks`' value is not published, so the hosted horizon is unknown. SGLang's
`max_chunks` is optional, which is the one configuration where "continuous" is documented.

The two statements are not necessarily contradictory — unbounded *generation* with a bounded *session*
is a coherent design — but no source states the actual limit, and no source demonstrates the
"hours" claim with a measured run.

### Interaction design claims (labelled as research claims)

- **Multi-player / director mode.** The report describes "an interface that permits multiple players to
  simultaneously immerse themselves in this vivid world simulator", and the project page describes one
  user navigating "as the player" while another "acts as a director, guiding actions, events, or
  high‑level intent" ([report](../../sources/arxiv.org/lingbot-world-v2-2607-07534/2026-10-26.md)).
  **No host exposes this**: fal's contract has a single `session_id` and one control stream, and
  Reactor's page shows one prompt and one control set.
- **Agentic harness.** A "pilot agent" plans and executes character behaviour while a "director agent"
  synthesises new environmental elements as the scene progresses
  ([repo](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md)). fal's only related surface is
  the note that an agent action can be mapped to a control token; the open release documents no agent
  implementation.
- **Embodied simulation.** The vendor positions the model as "a foundation for robotic simulation,
  future‑state prediction, and interactive data generation", claiming it learns "action‑conditioned
  visual dynamics from diverse egocentric, synthetic, and web‑scale videos"
  ([project page](../../sources/robbyant.com/lingbot-world-v2-project-page/2026-10-26.md)). No
  robotics benchmark or simulator integration was captured.

## Limitations and constraints

- **Non-commercial licence.** Weights are CC BY-NC-SA 4.0: "available for non-commercial use only …
  derivative works must be distributed under the same license"
  ([repo](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md)). This is a regression from
  LingBot-World 1.0's Apache-2.0
  ([predecessor](../../sources/github.com/lingbot-world-repo-succession/2026-10-26.md)).
- **fal's hosted endpoint is research-only.** The page carries a **"Research only"** badge and
  `licenseType: "research"` — not `commercial`, which is the value on every commercial endpoint in
  this knowledge base. fal's specific terms for the endpoint were not captured, so the exact
  restriction is undocumented here
  ([fal catalogue](../../sources/fal.ai/lingbot-world-2/2026-10-26.md)).
- **No deployment code.** "We do NOT plan to release our deployment code"; self-hosting means the
  weights plus a third-party stack (SGLang or NVIDIA flashdreams)
  ([repo](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md)).
- **Self-hosting is expensive.** The documented 14B real-time path needs **8 GPUs**
  (`torchrun --nproc_per_node=8`, `--ulysses_size 8`; SGLang `--num-gpus 8 --ulysses-degree 8`). The
  1.3B path uses 4 GPUs in the repository's own command, which contradicts the report's "effortless
  deployment on a single GPU" for that checkpoint
  ([repo](../../sources/github.com/lingbot-world-v2-repo/2026-10-26.md),
  [report](../../sources/arxiv.org/lingbot-world-v2-2607-07534/2026-10-26.md),
  [SGLang](../../sources/sglang.io/lingbot-world-2-cookbook/2026-10-26.md)).
- **Session bound is unpublished.** `max_blocks` exists but its value is not documented, and
  `stream_exhausted` forces a new session — so "infinite" cannot be planned against.
- **Only the distilled variant is hosted.** The pretrained-causal and bidirectional 14B checkpoints
  have no documented behaviour, no host, and no example outside the repository's flags.
- **Vendor-admitted gaps.** "true long-term world memory and extended interactions, and faithful
  physical understanding" are named as unsolved, along with a plan to explore "memory‑augmented
  architectures, stronger physical reasoning, and more efficient inference"
  ([project page](../../sources/robbyant.com/lingbot-world-v2-project-page/2026-10-26.md)).
- **No audio.** Neither vendor nor host documents an audio track or audio input.
- **Safety screening is a toggle with undefined thresholds.** fal's `enable_safety_checker` defaults
  on and is described as "Screen prompts and images with standard thresholds. When disabled, only
  illegal content is blocked." No policy, refusal taxonomy, or appeal path is published. Unlike the
  video models in this knowledge base, **no source states any restriction on real people, faces, or
  likeness** — absence of a documented restriction is not evidence that none exists.
- **The integration surface is alpha.** fal's realtime client is `@fal-ai/client@alpha` and "may change
  in a minor version"; the docs also note the legacy `keys` message is retained only for existing
  clients.
- **No independent quality evidence.** No benchmark, arena result, or third-party measurement of
  LingBot World 2 was captured. The only quality statements are Robbyant's, and they are unquantified.
- **Host documentation is thin.** Reactor publishes no resolution, fps, latency, session length or
  variant; its "API" tab content is not in the captured static page.

## Access, pricing, licensing

### fal — per second of generated video

**$0.00125 per second** of "video generated" (`billing_unit: "seconds"`, `price: 0.00125` in the
structured payload), i.e. ≈ **$0.075 per minute**. The page states: "Sessions cost $0.00125 per second
of video generated." No minimum, cap, idle charge or worked example is published, and what the second
is measured against is undefined
([fal catalogue](../../sources/fal.ai/lingbot-world-2/2026-10-26.md)).

Access is via a server-side proxy holding `FAL_KEY` and the alpha realtime client; the model starts
automatically and the session ends at `stream_exhausted`
([fal contract](../../sources/fal.ai/lingbot-world-2-webrtc-api/2026-10-26.md)).

### Reactor — per second, flat

**$0.007/second, $0.42/minute** — **5.6× fal's rate** for the same model family, on a page that
publishes no technical specification at all
([Reactor](../../sources/reactor.inc/lingbot-world-2/2026-10-26.md)). The unit is undefined in the same
way fal's is.

### Self-hosting

Weights are free to download but non-commercial (CC BY-NC-SA 4.0). Realistic cost is 8 GPUs of
inference hardware per 14B session; the 1.3B variant is documented at 4 GPUs. SGLang documents an
optional int4 KV-cache compression for long sessions, with "the current and most recent completed
chunks" kept in BF16
([SGLang](../../sources/sglang.io/lingbot-world-2-cookbook/2026-10-26.md)).

### Not available

- **Replicate does not host it.** `/robbyant/lingbot-world-2`, the `/robbyant` owner page and several
  plausible alternative slugs all return 404, and Replicate's search returns no LingBot result. The
  check is dated and recorded ([absence record](../../sources/replicate.com/lingbot-world-2-absence/2026-10-26.md)).
- **LingGuang** is listed by the vendor as the "Domestic (Mobile)" demo partner. No endpoint, terms or
  price were captured.

### Comparing the two routes

At the published rates, an hour of generated video costs about **$4.50 on fal** and about **$25.20 on
Reactor**. That is arithmetic on published per-second prices at an assumed 1:1 ratio between billed
seconds and wall-clock seconds — an assumption neither host confirms. The robust conclusion is
direction, not level: the two hosts differ by roughly 5–6×, and the cheaper route is also the one that
publishes a technical contract.

### Licensing summary

| Asset | Terms |
| --- | --- |
| Weights (`robbyant/lingbot-world-v2-*`) | CC BY-NC-SA 4.0, non-commercial, share-alike |
| fal endpoint | fal `licenseType: "research"`, "Research only" badge; fal's endpoint terms not captured |
| Reactor endpoint | no model-specific terms captured |
| LingGuang | no terms captured |

## Unresolved questions

1. **What does a billed "second of video generated" measure?** Neither host defines it: wall-clock
   session time, generated frames ÷ fps, and streamed duration are all plausible and can diverge when
   generation runs slower or faster than playback.
2. **What is the maximum session length?** `max_blocks` is a runtime field in the session contract but
   its value is not documented, so the "unbounded" claim cannot be tested against the hosted product.
3. **Is the 1664×960 / 48 fps track native, upscaled, or interpolated?** SGLang documents optional 4×
   super-resolution and RIFE interpolation, and fal's session schema leaves
   `generation_speed_verified` at its `false` default, which hints that the real-time claim is
   unverified even on the host side.
4. **Why 48 fps against a 60 fps claim?** No source addresses the gap, and no latency figure exists to
   check "sub-second".
5. **Which checkpoint does Reactor serve?** It publishes no variant, no resolution and no fps, so
   cross-host comparison cannot be pinned to a model version.
6. **Where is the multi-player/director interface?** Claimed in the report and on the project page;
   absent from both hosts' documented contracts.
7. **What do the pretrained-causal and bidirectional 14B checkpoints do?** They are downloadable but
   undocumented outside a commented-out block of the README; presumably they trade interactivity for
   clip-level quality, but that is inference.
8. **Can a world be saved, replayed, or resumed?** Reactor shows a "Recordings" tab; fal documents no
   artefact and forces a new session. Persistence across sessions is unaddressed everywhere.
9. **How does it compare with other world models** (Happy Oyster, SANA-WM, LongLive 2, Helios, and the
   LingBot-World 1.0 predecessor) on any measured axis? No independent benchmark was captured for any
   of them.
10. **Are the hosts and the open weights the same model?** fal reports the 14B causal-fast variant and a
    `source_revision` hash (`1895d300…`) with no mapping to a Hugging Face revision, so equivalence is
    plausible but unproven.

## Evidence status

Evidence floor: **met.** First-party: the Robbyant project page, the `Robbyant/lingbot-world-v2`
repository README and metadata, arXiv 2607.07534, and the Hugging Face weights metadata and card; plus
the LingBot-World 1.0 repository for the predecessor and licence contrast. Independent hosts: two fal
records (catalogue, licence label and session billing; WebRTC/OpenAPI session contract) and one Reactor
record (model page, price, catalogue position). Supporting third-party: the SGLang cookbook deployment
guide. A dated negative check records that Replicate does not host the model. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base: capability statements are vendor or host documentation, prices are published schedules, the
"720p60" figure is Robbyant's claim, and the 1664×960/48 fps track is fal's declared contract, not an
observed stream. The one quantitative comparison on the page (fal vs Reactor cost) is arithmetic on
published rates.

The next useful evidence would be a small reproducible session log: open one fal session on a named
preset and record the actual negotiated track, delivered fps, and time-to-first-frame; hold `forward`
for a fixed interval and check displacement consistency; push a `prompt` change mid-session and check
that it lands; run until `stream_exhausted` to learn `max_blocks` empirically; and compare one
identical starting image and prompt across fal, Reactor and a local 14B causal-fast deployment to see
whether the three routes produce the same world.
