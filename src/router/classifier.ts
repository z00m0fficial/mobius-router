import type { Capability } from "../models/provider.js";

const keywordMap: Record<Capability, string[]> = {
  strategy: ["strategy", "investor", "pricing", "market", "roadmap", "business"],
  architecture: ["architecture", "system", "service", "boundary", "schema", "api"],
  engineering: ["build", "code", "implement", "repository", "repo", "branch", "pull request"],
  documentation: ["docs", "documentation", "readme", "manual", "guide", "spec"],
  research: ["research", "latest", "trend", "compare", "competitor", "lookup"],
  design: ["ui", "ux", "dashboard", "wireframe", "visual", "brand"],
  security: ["security", "privacy", "compliance", "audit", "encryption", "sovereignty"],
  devops: ["deploy", "docker", "kubernetes", "ci", "terraform", "workflow"],
  testing: ["test", "qa", "coverage", "validate", "regression"],
  operations: ["operations", "runbook", "support", "incident", "process"]
};

export function classifyIntent(prompt: string): Capability | "unknown" {
  const normalized = prompt.toLowerCase();
  let selected: Capability | "unknown" = "unknown";
  let score = 0;

  for (const [capability, keywords] of Object.entries(keywordMap) as [Capability, string[]][]) {
    const hits = keywords.filter((keyword) => normalized.includes(keyword)).length;
    if (hits > score) {
      score = hits;
      selected = capability;
    }
  }

  return selected;
}
