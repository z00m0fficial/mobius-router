# Atlas Router v2

Atlas Router v2 turns Mobius routing into a closed-loop engineering and execution system.

## Mission

Route approved work to the correct specialist, generate the right task envelope, preserve Mobius context, verify completion, and record the outcome through MCMS and Atlas Memory.

## Core Problem

Manual handoff between ChatGPT, GitHub, Codex, and repository workspaces wastes time and creates drift.

Atlas Router v2 removes the manual handoff.

## Operating Flow

Creator Request -> Atlas Review -> Approval Detected -> Router v2 -> Task Classification -> Repository Context Collection -> Codex Task Envelope -> Codex Implementation -> Pull Request or Commit -> Verification -> MCMS Sync Record -> Atlas Memory Event

## Routing Rule

Engineering work routes to Codex with repository context, implementation requirements, acceptance criteria, and Mobius terminology preserved.

Documentation and architecture work may be handled directly by Atlas or routed to documentation specialists when needed.

## Required Capabilities

1. Approval detection.
2. Task classification.
3. Repository impact analysis.
4. Repository context packaging.
5. Codex task envelope creation.
6. Execution status tracking.
7. Build and validation requirement tracking.
8. Pull request or commit status capture.
9. MCMS update event.
10. Atlas memory event output.

## Codex Task Envelope

Every Codex task must include:

- Task title
- Owning department
- Owning service
- Target repository
- Relevant source files
- Mobius Canon references
- Implementation requirements
- Acceptance criteria
- Build/test command
- Do-not-change constraints
- Required output format

## Acceptance Criteria

Router v2 is complete when it can generate a Codex-ready task package that contains enough context for Codex to execute without requiring manual prompt reconstruction.
