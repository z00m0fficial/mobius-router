import type { ProviderName } from "../models/provider.js";
import type { TaskEnvelope } from "../models/task-envelope.js";

export interface ProviderAdapterResponse {
  provider: ProviderName;
  accepted: boolean;
  taskId: string;
  message: string;
}

export interface ProviderAdapter {
  provider: ProviderName;
  route(task: TaskEnvelope): Promise<ProviderAdapterResponse>;
}
