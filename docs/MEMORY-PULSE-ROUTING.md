# Memory and Pulse Routing

Mobius Router routes execution and emits decision events.

## Memory Output

Every significant routing decision should produce a memory-ready event for Mobius Memory.

## Pulse Output

Every significant routing decision should produce metric signals for Mobius Pulse, including decision latency, confidence, provider selection, and completion status.

## Flow

Request -> Router -> Provider -> Result -> Memory Event -> Pulse Metric Snapshot
