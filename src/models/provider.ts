export type ProviderName =
  | "atlas"
  | "chatgpt"
  | "codex"
  | "claude"
  | "gemini"
  | "grok"
  | "mistral"
  | "local-model";

export type Capability =
  | "strategy"
  | "architecture"
  | "engineering"
  | "documentation"
  | "research"
  | "design"
  | "security"
  | "devops"
  | "testing"
  | "operations";

export interface ProviderProfile {
  name: ProviderName;
  capabilities: Capability[];
  description: string;
  defaultWeight: number;
}
