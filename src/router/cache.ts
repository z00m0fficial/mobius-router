import type { RouteDecision } from "../models/route.js";

export interface CacheEntry {
  key: string;
  input: string;
  decision: RouteDecision;
  verified: boolean;
  createdAt: string;
}

const store = new Map<string, CacheEntry>();

export function normalize(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, " ");
}

export function getCachedDecision(input: string): CacheEntry | undefined {
  return store.get(normalize(input));
}

export function setCachedDecision(input: string, decision: RouteDecision): CacheEntry {
  const key = normalize(input);
  const entry: CacheEntry = {
    key,
    input: key,
    decision,
    verified: true,
    createdAt: new Date().toISOString()
  };

  store.set(key, entry);
  return entry;
}
