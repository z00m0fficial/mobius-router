# Mobius Router Performance Doctrine

Mobius does not trade accuracy for speed. Mobius becomes fast by eliminating unnecessary thinking, reusing verified knowledge, and routing only the work that truly needs specialist execution.

## Performance Principle

Eliminate unnecessary thinking.

This does not mean skipping verification. It means Mobius should not re-solve the same problem repeatedly when a verified pattern already exists.

## Decision Latency

Mobius optimizes decision latency: the time required to move from request to verified next action.

The Router should prefer:

1. Verified memory reuse.
2. Known workflow execution.
3. Single specialist routing.
4. Multi-specialist reasoning only when required.

## Thinking Modes

### Instant Mode

Target: under 50 ms.

Used when the request matches a verified workflow, cached decision, or approved pattern.

### Assisted Mode

Target: 200-500 ms.

Used when the request is familiar but still requires one specialist or lightweight reasoning.

### Strategic Mode

Target: 1-10 seconds.

Used when the request is new, ambiguous, high-risk, or requires multiple specialists.

## Router v2 Pipeline

```text
User Request
      |
      v
Intent Detection
      |
      v
Prediction Cache
      |
      v
Atlas Memory Lookup
      |
      v
Knowledge Graph
      |
      v
Verified Pattern Library
      |
      v
Confidence Engine
      |
      v
Need AI?
   |       |
  No      Yes
   |       |
Execute   Router
Direct      |
            v
   Best Specialist AI
            |
            v
Verification Layer
            |
            v
Memory Event
            |
            v
Knowledge Graph Update
            |
            v
Performance Metrics
```

## Organizational Intelligence Efficiency Score

OIES measures how efficiently Mobius converts organizational effort into verified action.

Inputs:

- Decision latency
- Reasoning depth
- Memory reuse rate
- Verification confidence
- Estimated automation savings

Router optimization goal:

Maximize verified work completed per second of organizational effort.
