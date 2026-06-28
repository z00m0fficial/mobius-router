import type { RouteRequest } from "../models/route.js";
import type { RouteResult } from "../models/route-result.js";
import { classifyIntent } from "./classifier.js";
import { actionForProvider, requiredRepositoriesFor, selectProvider } from "./policy-engine.js";
import { scoreConfidence } from "./confidence.js";

export function routeTask(request: RouteRequest): RouteResult {
  const intent = classifyIntent(request.prompt);
  const provider = selectProvider(intent);
  const requiredRepositories = requiredRepositoriesFor(intent);
  const confidence = scoreConfidence(intent, request.prompt);

  const decision = {
    requestId: request.requestId,
    organizationId: request.organizationId,
    actorId: request.actorId,
    intent,
    provider,
    confidence,
    rationale: `Mobius Router classified this request as ${intent} and selected ${provider}.`,
    requiredRepositories,
    action: actionForProvider(provider)
  };

  return {
    decision,
    taskEnvelope: {
      taskId: `${provider}-${request.requestId}`,
      provider,
      organizationId: request.organizationId,
      actorId: request.actorId,
      objective: request.prompt,
      repositoryContext: requiredRepositories,
      instructions: [
        "Follow the Mobius mission and Atlas Principles.",
        "Preserve Mobius naming: Atlas Core, MOS, Forge, MIS, Organizational Memory, and Mobius Intelligence Stack.",
        "Keep humans in control of final approval."
      ],
      definitionOfDone: [
        "Output is aligned with Mobius architecture.",
        "Routing decision is explainable.",
        "Repository context is preserved where required."
      ]
    },
    output: {
      kind: "mobius.router.decision",
      organizationId: request.organizationId,
      actorId: request.actorId,
      subjectId: request.requestId,
      confidence,
      summary: `Selected ${provider} for ${intent}.`
    }
  };
}
