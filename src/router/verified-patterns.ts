import type { Capability } from "../models/provider.js";

export interface VerifiedPattern {
  patternId: string;
  intent: Capability;
  name: string;
  description: string;
  confidenceFloor: number;
}

export const verifiedPatterns: VerifiedPattern[] = [
  {
    patternId: "PAT-ROUTER-CODEX-ENGINEERING",
    intent: "engineering",
    name: "Engineering work routes to Codex",
    description: "Repository changes, code generation, tests, schemas, workflows, and pull requests should route to Codex with Mobius repository context.",
    confidenceFloor: 0.85
  },
  {
    patternId: "PAT-ROUTER-RESEARCH",
    intent: "research",
    name: "Current research routes to research providers",
    description: "Requests requiring current external evidence should route to research-capable providers and require verification.",
    confidenceFloor: 0.8
  }
];

export function findVerifiedPattern(intent: Capability | "unknown"): VerifiedPattern | undefined {
  if (intent === "unknown") return undefined;
  return verifiedPatterns.find((pattern) => pattern.intent === intent);
}
