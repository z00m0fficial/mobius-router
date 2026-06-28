# Multi-Provider Research Routing

Mobius Router must route research tasks to the best available specialist providers while preserving Atlas context and Mobius memory.

## Routing Flow

```text
Research Request
  |
Intent Classification
  |
Memory Lookup
  |
Provider Selection
  |
Cross-Provider Comparison
  |
Confidence Scoring
  |
Atlas Verification
  |
Memory Event
```

## Providers

Router should be ready to coordinate research across OpenAI, Claude, Gemini, Grok, Mistral, local models, search systems, databases, and approved sources.

## Speed Rule

Router should avoid unnecessary provider calls when verified memory or approved patterns already answer the request.

## Accuracy Rule

Router should use multiple providers or source checks when facts may be current, uncertain, disputed, high-stakes, or strategically important.
