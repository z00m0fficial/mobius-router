import type { Capability } from "../models/provider.js";

export type ThinkingMode = "instant" | "assisted" | "strategic";

export interface ThinkingModeDecision {
  mode: ThinkingMode;
  targetLatencyMs: number;
  rationale: string;
}

export function selectThinkingMode(params: {
  intent: Capability | "unknown";
  hasVerifiedPattern: boolean;
  hasPredictionCacheHit: boolean;
  riskLevel?: "low" | "medium" | "high";
}): ThinkingModeDecision {
  if (params.hasPredictionCacheHit || params.hasVerifiedPattern) {
    return {
      mode: "instant",
      targetLatencyMs: 50,
      rationale: "A verified pattern or prediction cache entry can satisfy this request without specialist reasoning."
    };
  }

  if (params.riskLevel === "high" || params.intent === "unknown" || params.intent === "architecture" || params.intent === "security") {
    return {
      mode: "strategic",
      targetLatencyMs: 10000,
      rationale: "The request is high-risk, ambiguous, or architecturally significant and requires deeper verification."
    };
  }

  return {
    mode: "assisted",
    targetLatencyMs: 500,
    rationale: "The request is familiar but still requires specialist assistance."
  };
}
