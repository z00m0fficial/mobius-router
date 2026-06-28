export interface ClassifiedIntent {
  requestId: string;
  category: string;
  capability: string;
  priority: "low" | "medium" | "high";
  confidence: number;
  reasoning: string[];
  requiredContext: string[];
  suggestedProvider: string;
}

export interface IntentClassifiedEvent {
  id: string;
  name: "IntentClassified";
  timestamp: string;
  source: string;
  organizationId: string;
  correlationId: string;
  payload: ClassifiedIntent;
}

export interface MemoryLookupSummary {
  matchCount: number;
  confidence: number;
  knownRisks: string[];
  recommendations: string[];
}

export interface RouteDecision {
  requestId: string;
  selectedProvider: string;
  selectedDepartment: string;
  routeType: "codex-task" | "atlas-research" | "documentation" | "manual-review";
  confidence: number;
  reason: string;
  requiredInputs: string[];
  expectedOutput: string;
}

export interface RouteSelectedEvent {
  id: string;
  name: "RouteSelected";
  version: "1.0";
  timestamp: string;
  source: "mobius-router";
  organizationId: string;
  correlationId: string;
  payload: RouteDecision;
}

export function selectRoute(intent: ClassifiedIntent, memory?: MemoryLookupSummary): RouteDecision {
  if (intent.category === "platform_change" || intent.suggestedProvider === "codex") {
    return {
      requestId: intent.requestId,
      selectedProvider: "codex",
      selectedDepartment: "MCMS + Engineering",
      routeType: "codex-task",
      confidence: combineConfidence(intent.confidence, memory?.confidence ?? 0.8),
      reason: "Structured intent requires governed implementation work.",
      requiredInputs: ["classified intent", "repository context", "acceptance criteria", "memory lookup"],
      expectedOutput: "engineering work package or pull request"
    };
  }

  if (intent.category === "research_request") {
    return {
      requestId: intent.requestId,
      selectedProvider: "atlas-research",
      selectedDepartment: "Atlas Research",
      routeType: "atlas-research",
      confidence: combineConfidence(intent.confidence, memory?.confidence ?? 0.75),
      reason: "Structured intent requires research and source verification.",
      requiredInputs: ["classified intent", "memory lookup", "current sources"],
      expectedOutput: "verified research summary"
    };
  }

  if (intent.category === "documentation_update") {
    return {
      requestId: intent.requestId,
      selectedProvider: "atlas",
      selectedDepartment: "Documentation",
      routeType: "documentation",
      confidence: combineConfidence(intent.confidence, memory?.confidence ?? 0.7),
      reason: "Structured intent indicates documentation synchronization.",
      requiredInputs: ["classified intent", "current docs", "Genesis standards"],
      expectedOutput: "documentation update"
    };
  }

  return {
    requestId: intent.requestId,
    selectedProvider: "atlas",
    selectedDepartment: "Triage",
    routeType: "manual-review",
    confidence: 0.5,
    reason: "Intent confidence is insufficient for autonomous routing.",
    requiredInputs: ["human clarification"],
    expectedOutput: "clarified request"
  };
}

export function createRouteSelectedEvent(event: IntentClassifiedEvent, memory?: MemoryLookupSummary): RouteSelectedEvent {
  return {
    id: "evt-route-" + event.payload.requestId,
    name: "RouteSelected",
    version: "1.0",
    timestamp: new Date().toISOString(),
    source: "mobius-router",
    organizationId: event.organizationId,
    correlationId: event.correlationId,
    payload: selectRoute(event.payload, memory)
  };
}

function combineConfidence(intentConfidence: number, memoryConfidence: number): number {
  return Math.round(((intentConfidence * 0.7) + (memoryConfidence * 0.3)) * 100) / 100;
}
