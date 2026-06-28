import type { ProviderProfile } from "../models/provider.js";

export const providerRegistry: ProviderProfile[] = [
  {
    name: "atlas",
    capabilities: ["architecture", "operations", "security"],
    description: "Mobius intelligence coordinator and architecture policy reviewer.",
    defaultWeight: 90
  },
  {
    name: "chatgpt",
    capabilities: ["strategy", "architecture", "documentation", "design"],
    description: "Strategy, planning, product framing, and language generation.",
    defaultWeight: 85
  },
  {
    name: "codex",
    capabilities: ["engineering", "testing", "devops"],
    description: "Repository implementation, tests, tooling, and pull requests.",
    defaultWeight: 99
  },
  {
    name: "claude",
    capabilities: ["documentation", "architecture"],
    description: "Long-form reasoning, architecture review, and documentation.",
    defaultWeight: 88
  },
  {
    name: "gemini",
    capabilities: ["research", "design"],
    description: "Vision, multimodal analysis, and research synthesis.",
    defaultWeight: 80
  },
  {
    name: "grok",
    capabilities: ["research"],
    description: "Current research and trend analysis.",
    defaultWeight: 82
  },
  {
    name: "mistral",
    capabilities: ["engineering", "documentation"],
    description: "Private and efficient inference workloads.",
    defaultWeight: 70
  },
  {
    name: "local-model",
    capabilities: ["security", "operations"],
    description: "Sovereign and air-gapped workloads.",
    defaultWeight: 75
  }
];
