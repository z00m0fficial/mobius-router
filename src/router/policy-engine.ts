import type { Capability, ProviderName } from "../models/provider.js";
import { providerRegistry } from "../providers/registry.js";

export function requiredRepositoriesFor(intent: Capability | "unknown"): string[] {
  if (["engineering", "testing", "devops", "architecture"].includes(intent)) {
    return ["mobius-enterprise-starter-kit", "atlas-core", "mobius-os", "mobius-docs"];
  }

  return ["mobius-enterprise-starter-kit", "atlas-core"];
}

export function selectProvider(intent: Capability | "unknown"): ProviderName {
  if (intent === "unknown") return "atlas";

  const candidates = providerRegistry
    .filter((provider) => provider.capabilities.includes(intent))
    .sort((a, b) => b.defaultWeight - a.defaultWeight);

  return candidates[0]?.name ?? "atlas";
}

export function actionForProvider(provider: ProviderName): string {
  if (provider === "codex") {
    return "Create an engineering task envelope, inspect Mobius source-of-truth repositories, implement on a branch, and open a pull request.";
  }

  return "Prepare a routed specialist response aligned with Mobius architecture and Atlas Principles.";
}
