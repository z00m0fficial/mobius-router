import type { Capability, ProviderName } from "./provider.js";

export interface RouteRequest {
  requestId: string;
  organizationId: string;
  actorId: string;
  prompt: string;
  context?: Record<string, unknown>;
  requiredCapabilities?: Capability[];
}

export interface RouteDecision {
  requestId: string;
  organizationId: string;
  actorId: string;
  intent: Capability | "unknown";
  provider: ProviderName;
  confidence: number;
  rationale: string;
  requiredRepositories: string[];
  action: string;
}
