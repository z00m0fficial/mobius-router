# EWP-000005: Router Online

## Mission

Bring Mobius Router online for Enterprise Alpha by converting structured intent and memory context into a RouteSelected event.

## Input

- IntentClassified event from Atlas Core
- Optional MemoryLookupCompleted summary from Mobius Memory

## Output

RouteSelected event with:

- selectedProvider
- selectedDepartment
- routeType
- confidence
- reason
- requiredInputs
- expectedOutput

## Rule

Router does not interpret natural language. Router consumes structured intent from Atlas and organizational context from Memory.

## Acceptance

- Platform change requests route to Codex and MCMS.
- Research requests route to Atlas Research.
- Documentation requests route to Documentation.
- Unknown or low-confidence requests route to manual review.
- RouteSelected includes confidence and explanation.
