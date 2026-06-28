import type { RouteDecision } from "./route.js";
import type { TaskEnvelope } from "./task-envelope.js";

export interface RouteResult {
  decision: RouteDecision;
  taskEnvelope: TaskEnvelope;
  output: {
    kind: "mobius.router.decision";
    organizationId: string;
    actorId: string;
    subjectId: string;
    confidence: number;
    summary: string;
  };
}
