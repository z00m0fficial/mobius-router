import type { RouteDecision } from "../models/route.js";

export interface DecisionLogEntry {
  id: string;
  decision: RouteDecision;
  createdAt: string;
}

export function createDecisionLogEntry(decision: RouteDecision): DecisionLogEntry {
  return {
    id: `router-log-${decision.requestId}`,
    decision,
    createdAt: new Date().toISOString()
  };
}
