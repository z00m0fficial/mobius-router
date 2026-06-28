# Mobius Router

AI orchestration and specialist routing layer for the Mobius Organizational Intelligence Platform™.

## Mission

Build organizations that learn faster than they forget.

## Motto

One Organization. Infinite Intelligence. Limitless Impact.

## Purpose

Mobius Router decides which specialist should handle a task. It does not own business logic, product workflows, or organizational memory storage. It acts as the routing and orchestration layer between Mobius applications, Atlas Core, Codex, ChatGPT, Claude, Gemini, Grok, Mistral, and local models.

## Core Responsibilities

1. Classify task intent.
2. Select the best provider.
3. Enforce routing policy.
4. Generate task envelopes.
5. Record routing decisions.
6. Emit memory-ready outputs.
7. Preserve Mobius architecture and Atlas Principles.

## Canonical Flow

```text
User Request
      |
      v
Intent Classification
      |
      v
Routing Policy
      |
      v
Confidence Score
      |
      v
Provider Selection
      |
      v
Task Envelope
      |
      v
Provider Adapter
      |
      v
Decision Log
      |
      v
Memory Output
```

## Provider Routing

| Domain | Primary Provider |
| --- | --- |
| Engineering | Codex |
| Strategy | ChatGPT |
| Architecture | Atlas / Claude |
| Documentation | Claude / ChatGPT |
| Research | Grok / Gemini |
| Vision / Multimodal | Gemini |
| Private / Sovereign Workloads | Local Model / Mistral |

## Repository Context

Engineering tasks must inspect Mobius source-of-truth repositories before implementation:

1. `mobius-enterprise-starter-kit`
2. `atlas-core`
3. `mobius-os`
4. `mobius-docs`

## Status

Version: 1.0.0  
Status: foundation scaffold  
Classification: internal-platform
