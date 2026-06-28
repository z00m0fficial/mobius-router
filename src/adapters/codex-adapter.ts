import type { ProviderAdapter, ProviderAdapterResponse } from "./provider-adapter.js";
import type { TaskEnvelope } from "../models/task-envelope.js";

export const codexAdapter: ProviderAdapter = {
  provider: "codex",
  async route(task: TaskEnvelope): Promise<ProviderAdapterResponse> {
    return {
      provider: "codex",
      accepted: true,
      taskId: task.taskId,
      message: "Engineering task envelope prepared for repository implementation and pull request workflow."
    };
  }
};
