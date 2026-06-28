export interface SonicSpeakerMapEntry {
  temporarySpeakerId: string;
  verifiedPersonId?: string;
  displayName?: string;
  verificationStatus: "temporary" | "confirmed" | "declined";
  consentStatus: "unknown" | "granted" | "denied";
}

export interface SonicVoiceIntelligencePayload {
  organizationId: string;
  actorId: string;
  captureId: string;
  sourceType: "microphone" | "upload" | "meeting" | "phone" | "studio" | "podcast" | "audiobook";
  language: string;
  dialect?: string;
  speakerMap: SonicSpeakerMapEntry[];
  intentSummary: string;
  cleanTranscript: string;
  actionItems: string[];
  decisions: string[];
  confidence: number;
  consentState: "pending" | "approved" | "restricted";
  provenance: string[];
}
