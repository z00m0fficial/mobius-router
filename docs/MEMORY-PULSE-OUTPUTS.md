# Memory and Pulse Outputs

Mobius Router v2 routes work and emits records for Memory and Pulse.

## Memory Outputs

Router sends routing decisions, provider selections, Codex task envelopes, audit events, and approval-linked execution records to Mobius Memory.

## Pulse Outputs

Router sends timing, confidence, provider selection, fallback, and execution status signals to Mobius Pulse.

## Required Events

- routing-decision
- provider-selection
- codex-task-envelope
- execution-status
- latency-snapshot
- confidence-snapshot

## Rule

Every routing decision must be auditable and memory-ready.
