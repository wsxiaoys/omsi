# Artificial Analysis — Speech to Text methodology, WER section

Captured from <https://artificialanalysis.ai/methodology/speech-to-text> on 2026-10-26.
Verbatim rendered text of the "Word Error Rate (WER) Evaluation" section.

## Word Error Rate (WER) Evaluation

Artificial Analysis conducts independent WER testing across all model-provider pairs.

Key details:

  * API endpoints tested directly to reflect end-user performance.
  * Current evaluation: ~8 hours of audio across AA-AgentTalk, VoxPopuli-Cleaned-AA, and Earnings22-Cleaned-AA (details below). Results within each dataset are calculated as a time-weighted average, then we take a weighted average of 50% AgentTalk, 25% VoxPopuli, 25% Earnings22 to produce our AA-WER result.
  * When models allow prompts, we provide: "Transcribe the audio verbatim, outputting only spoken words in sequence."

### Datasets

  1. **AA-AgentTalk** _(proprietary, held-out)_ : A proprietary evaluation dataset developed by Artificial Analysis, focused on speech relevant to voice agent use cases. See our [blog post](/articles/aa-wer-v2) for more details.

    * Number of samples: 469
    * Sample duration range: 8–109 seconds
    * Total duration: ~250 minutes
  2.  **[VoxPopuli-Cleaned-AA](https://huggingface.co/datasets/ArtificialAnalysis/VoxPopuli-Cleaned-AA)** : European parliamentary proceedings.

    * Subset: English
    * Number of samples: 628
    * Sample duration range: 5–38 seconds
    * Total duration: ~119 minutes
  3.  **[Earnings22-Cleaned-AA](https://huggingface.co/datasets/ArtificialAnalysis/Earnings22-Cleaned-AA)** : Corporate earnings calls with technical language and overlapping speakers.

    * Number of samples: 6
    * Sample duration range: ~14–22 minutes
    * Total duration: ~115 minutes

For details on VoxPopuli-Cleaned-AA and Earnings22-Cleaned-AA, see our [blog post](/articles/aa-wer-v2). The current cleaned transcript release in both repositories is Version 1.0, used in AA-WER v2.

These cleaned transcripts reflect our best effort at verbatim ground truth, informed by manual review and cross-validation across the dataset. Future refinements will be released as subsequent versions. If you spot issues, we'd welcome feedback via our [contact page](/contact) or [Discord](https://discord.gg/Mk298GPZ7V).

### Audio chunking (Earnings22)

Earnings22 contains longer files (~14-22 minutes), so chunking differs by evaluation mode and model configuration. For non-streaming transcription (batch/offline), we evaluate the full parent audio by default. When shorter input is required by model or API limits, or needed to avoid truncation/timeouts, we chunk Earnings22 starting with approximately 9-minute chunks and reduce to approximately 30-second chunks only if needed. For streaming transcription, most Earnings22 runs use approximately 30-second chunks, with results aggregated back to the parent calls; some streaming configurations are evaluated on the full parent audio where that better matches the provider endpoint behavior. Chunk boundaries are placed at speech boundaries where possible to avoid splitting mid-word. AA-AgentTalk and VoxPopuli samples are short enough that chunking does not apply.

For chunked Earnings22 audio, we aggregate results back to the parent call:

  *  **WER:** Chunk transcripts are concatenated back into their parent call, and WER is computed on the combined transcript against the parent-call ground truth. WER is then audio-duration-weighted across parent calls, consistent with all other datasets.
  *  **Streaming latency:** Time to Final Transcript and Time to First Partial Transcript are aggregated as a simple average across chunks.
