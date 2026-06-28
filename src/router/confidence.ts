import type { Capability } from "../models/provider.js";

export function scoreConfidence(intent: Capability | "unknown", prompt: string): number {
  if (intent === "unknown") return 0.35;

  const lengthSignal = Math.min(0.15, prompt.length / 1000);
  return Math.min(0.95, 0.65 + lengthSignal);
}
