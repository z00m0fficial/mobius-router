# Sonic Routing Boundary

Mobius Router does not process raw audio.

Sonic Department owns audio capture, transcription, speaker intelligence, multilingual understanding, and transcript cleanup.

Mobius Router receives structured voice intelligence from Sonic and decides the next specialist route.

## Flow

```text
Voice Input
  |
Sonic Department
  |
Structured Voice Intelligence
  |
Mobius Router
  |
Provider Selection
  |
Task Envelope
  |
Atlas Core / Specialist AI
```

## Router Responsibilities After Sonic

After Sonic prepares structured voice intelligence, Router may classify the output as:

- Engineering
- Strategy
- Documentation
- Research
- Operations
- Scheduling
- Task creation
- Memory update

## Required Sonic Payload Fields

- organizationId
- actorId
- captureId
- sourceType
- language
- dialect
- speakerMap
- intentSummary
- cleanTranscript
- actionItems
- decisions
- confidence
- consentState
- provenance

## Consent Rule

Router must preserve Sonic consent state. If speaker identity is not verified, Router must not promote temporary speaker labels into permanent identity records.
