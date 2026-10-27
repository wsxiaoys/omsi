# WaveSpeedAI: Wan 3.0 Prime and Wan 3.0 endpoints (catalogue, READMEs, per-second prices)

- Origin: WaveSpeedAI public catalogue and model pages:
  - `GET https://wavespeed.ai/api/models?search=wan` (1100-item catalogue response, 6 Wan 3.0 matches)
  - `https://wavespeed.ai/api/models/alibaba/wan-3.0-prime/text-to-video`
  - `https://wavespeed.ai/api/models/alibaba/wan-3.0/text-to-video`
  - `https://wavespeed.ai/api/models/alibaba/wan-3.0-prime/reference-to-video`
- Evidence kind: provider documentation (host catalogue metadata, host-written README, published
  per-second price tables)
- Publication date: no publication date is exposed on any of the three pages; fetched 2026-10-26
- Capture date: 2026-10-26
- Relevant models: `alibaba/wan-3.0-prime/*`, `alibaba/wan-3.0/*`

Artifact beside this file: `catalogue-wan30-items.json` (the six Wan 3.0 catalogue items verbatim).

## Endpoints and base prices

| `model_name` | Type | `base_price` | `discount_rate` |
| --- | --- | --- | --- |
| `alibaba/wan-3.0-prime/text-to-video` | text-to-video | 150000 | 95 |
| `alibaba/wan-3.0-prime/image-to-video` | image-to-video | 150000 | 95 |
| `alibaba/wan-3.0-prime/reference-to-video` | reference-to-video | 450000 | 95 |
| `alibaba/wan-3.0/text-to-video` | text-to-video | 100000 | 95 |
| `alibaba/wan-3.0/image-to-video` | image-to-video | 100000 | 95 |
| `alibaba/wan-3.0/reference-to-video` | reference-to-video | 300000 | 95 |

`base_price` reads as micro-USD for the cheapest legal request: the Prime text-to-video page quotes a
floor of "$0.15 per run", which is 2 s at 480p × $0.075/s = $0.15, and the standard page's floor of
$0.10 is 2 s at 480p × $0.05/s. Both reconcile exactly, so `base_price / 1e6` is the minimum charge.

`discount_rate: 95` corresponds to the "5% OFF" badge and the $0.1425-vs-$0.15 display on the page.

## Host descriptions (verbatim)

Prime text-to-video:

> Wan 3.0 Prime Text to Video is an accelerated variant that generates cinematic videos from text
> prompts, with flexible 2-30 second duration, aspect ratio control, optional audio, and deep-thinking
> controls for high-quality video generation.

Prime reference-to-video:

> Wan 3.0 Prime Reference to Video is an accelerated variant that creates coherent videos from prompts
> and multimodal references, including images, videos, and audio, with flexible 2-30 second duration
> and aspect ratio control for subject consistency, motion guidance, timing control, and scene
> continuity.

Standard text-to-video:

> Wan 3.0 Text to Video generates cinematic videos from text prompts, with flexible 2-30 second
> duration, aspect ratio control, optional audio, and deep-thinking controls for high-quality video
> generation.

The word "accelerated" / "accelerated variant" again appears only on the Prime endpoints, and the
"deep-thinking controls" phrase appears on both variants — corroborating that fal's `enable_thinking`
is a real property of the underlying model rather than a fal invention, even though Alibaba's own
request body does not list it.

## Published prices (verbatim tables)

Prime text-to-video:

> Pricing is based on output resolution and billed duration. Billed duration is rounded up to the next
> whole second and clamped to the 2–30s range.

| Resolution | Per 5 s | Per second |
| --- | --- | --- |
| 480p | $0.375 | $0.075 |
| 720p | $0.75 | $0.15 |
| 1080p | $1.50 | $0.30 |

Standard text-to-video: identical structure at **$0.25 / $0.50 / $1.00 per 5 s**, i.e.
**$0.05 / $0.10 / $0.20 per second**.

Prime reference-to-video adds input-duration billing:

> Each reference video is padded to at least 1 second, capped at 15 seconds, and the combined input is
> capped at 15 seconds and rounded up to a whole second for billing.

> Example: 5 seconds of normalized input plus 5 seconds of output costs $0.75 at 480p, $1.50 at 720p,
> or $3.00 at 1080p.

Prime and standard reference-to-video carry the same per-second rates as their text-to-video
counterparts, so the reference endpoint's higher `base_price` comes from input-duration billing, not
from a higher rate.

## Three-host comparison, Prime per second (USD)

| Route | 480p | 720p | 1080p | Prime ÷ standard on the same route |
| --- | --- | --- | --- | --- |
| Alibaba Model Studio, Singapore | 0.068 | 0.14 | 0.28 | 1.36× / 1.40× / 1.40× |
| fal | 0.068 | 0.14 | 0.28 | 1.36× / 1.40× / 1.40× |
| WaveSpeedAI | 0.075 | 0.15 | 0.30 | 1.50× / 1.50× / 1.50× |

WaveSpeed is 10.3% above the vendor rate at 480p and 7.1% above at 720p and 1080p. fal matches the
vendor's Singapore rate to the cent. The two hosts also price the Prime premium differently (a flat
1.5× versus 1.36–1.4×), so the "premium for speed" is a host decision, not a fixed vendor ratio.

## Host defaults that differ from the vendor

| Setting | Alibaba Model Studio | fal | WaveSpeedAI |
| --- | --- | --- | --- |
| `resolution` default | `1080P` | `1080p` | `720p` |
| `prompt_extend` / `enable_prompt_expansion` default | `true` | `true` | `false` |
| audio parameter name | `audio` | `audio` | `generate_audio` |
| aspect-ratio enum | includes `21:9` | `adaptive,16:9,4:3,1:1,3:4,9:16` | not enumerated in the README; default `16:9` |

A caller moving between hosts can silently change resolution (1080p → 720p on WaveSpeed) and prompt
rewriting (on → off), which changes both cost and output without any request error.

## Gaps

- No publication or last-updated date on any WaveSpeed page; the capture date is the only date
  available.
- No statement of whether WaveSpeed runs the weights or proxies to Alibaba.
- The README's aspect-ratio list is not given; only the default `16:9` is stated.
- WaveSpeed's own note: "Documentation prices are for reference and may be outdated. The Generate
  button shows an estimate; the final task charge prevails."
