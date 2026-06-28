import { createRouteSelectedEvent, type IntentClassifiedEvent } from "./enterprise-route.js";

const intentClassified: IntentClassifiedEvent = {
  id: "evt-intent-demo",
  name: "IntentClassified",
  timestamp: new Date().toISOString(),
  source: "atlas-core",
  organizationId: "mobius-technologies",
  correlationId: "corr-demo",
  payload: {
    requestId: "req-demo",
    category: "platform_change",
    capability: "mcms",
    priority: "high",
    confidence: 0.98,
    reasoning: ["Request references a Platform Change Proposal."],
    requiredContext: ["repository state", "Genesis standards"],
    suggestedProvider: "codex"
  }
};

const memory = {
  matchCount: 2,
  confidence: 0.92,
  knownRisks: ["Repository synchronization required."],
  recommendations: ["Generate a governed engineering work package."]
};

const routeSelected = createRouteSelectedEvent(intentClassified, memory);

console.log(JSON.stringify(routeSelected, null, 2));
