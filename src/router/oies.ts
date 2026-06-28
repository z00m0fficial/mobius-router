export interface OiesInput {
  decisionLatencyMs: number;
  reasoningDepth: number;
  memoryReuseRate: number;
  verificationConfidence: number;
  automationSavingsMinutes: number;
}

export interface OiesResult {
  score: number;
  grade: "excellent" | "strong" | "developing" | "needs-improvement";
  rationale: string;
}

export function calculateOies(input: OiesInput): OiesResult {
  const latencyScore = Math.max(0, 1 - input.decisionLatencyMs / 10000);
  const reasoningEfficiency = Math.max(0, 1 - input.reasoningDepth / 10);
  const memoryScore = Math.min(1, input.memoryReuseRate);
  const confidenceScore = Math.min(1, input.verificationConfidence);
  const savingsScore = Math.min(1, input.automationSavingsMinutes / 60);

  const score = Math.round(
    (latencyScore * 0.2 +
      reasoningEfficiency * 0.2 +
      memoryScore * 0.25 +
      confidenceScore * 0.25 +
      savingsScore * 0.1) *
      100
  );

  const grade = score >= 90 ? "excellent" : score >= 75 ? "strong" : score >= 60 ? "developing" : "needs-improvement";

  return {
    score,
    grade,
    rationale: "OIES measures verified work completed per second of organizational effort."
  };
}
