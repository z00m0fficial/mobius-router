export interface RepositoryImpact {
  repository: string;
  reason: string;
  requiredAction: "documentation" | "implementation" | "manifest" | "verification";
}

export function analyzeRepositoryImpact(featureName: string, keywords: string[]): RepositoryImpact[] {
  const normalized = keywords.map((keyword) => keyword.toLowerCase());
  const impacts: RepositoryImpact[] = [];

  impacts.push({
    repository: "mobius-docs",
    reason: `${featureName} requires platform documentation synchronization.`,
    requiredAction: "documentation"
  });

  if (normalized.some((keyword) => ["route", "codex", "provider", "task"].includes(keyword))) {
    impacts.push({
      repository: "mobius-router",
      reason: `${featureName} affects routing behavior and specialist execution.`,
      requiredAction: "implementation"
    });
  }

  if (normalized.some((keyword) => ["memory", "atlas", "verification", "knowledge"].includes(keyword))) {
    impacts.push({
      repository: "atlas-core",
      reason: `${featureName} affects memory, verification, or knowledge graph behavior.`,
      requiredAction: "implementation"
    });
  }

  if (normalized.some((keyword) => ["ui", "dashboard", "command", "center"].includes(keyword))) {
    impacts.push({
      repository: "mobius-command-center",
      reason: `${featureName} affects the executive operating UI.`,
      requiredAction: "implementation"
    });
  }

  return impacts;
}
