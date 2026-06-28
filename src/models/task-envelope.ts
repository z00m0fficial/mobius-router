import type { ProviderName } from "./provider.js";

export interface TaskEnvelope {
  taskId: string;
  provider: ProviderName;
  organizationId: string;
  actorId: string;
  objective: string;
  repositoryContext: string[];
  instructions: string[];
  definitionOfDone: string[];
}
