# Mobius Router Architecture

Mobius Router is the AI orchestration layer for the Mobius Organizational Intelligence Platform™.

## Boundary

Mobius Router makes routing decisions. It does not own product data, user interfaces, organization records, payment workflows, or long-term memory storage.

## Layers

```text
Request
  |
Classifier
  |
Policy Engine
  |
Confidence Scoring
  |
Provider Registry
  |
Task Envelope
  |
Provider Adapter
  |
Decision Log
  |
Memory-Ready Output
```

## Core Principle

Atlas provides intelligence. Mobius Router directs specialist execution.

## Provider Independence

Providers are selected by capability, not hard-coded product behavior. This keeps Mobius vendor-neutral and ready for future AI providers.
