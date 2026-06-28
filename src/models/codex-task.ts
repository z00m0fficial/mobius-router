export interface CodexTaskEnvelope {
  taskId: string;
  title: string;
  owningDepartment: string;
  owningService: string;
  targetRepository: string;
  sourceFiles: string[];
  canonReferences: string[];
  implementationRequirements: string[];
  acceptanceCriteria: string[];
  validationCommands: string[];
  constraints: string[];
  expectedOutput: "commit" | "pull-request" | "patch";
  memoryEventRequired: boolean;
  mcmsRecordRequired: boolean;
}

export function createCodexTaskEnvelope(input: Omit<CodexTaskEnvelope, "taskId">): CodexTaskEnvelope {
  return {
    taskId: "codex-task-" + Date.now(),
    ...input
  };
}
