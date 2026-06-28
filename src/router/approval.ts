export type ApprovalSignal = "approved" | "forward" | "continue" | "build" | "none";

export function detectApprovalSignal(input: string): ApprovalSignal {
  const value = input.toLowerCase();
  if (value.includes("approved")) return "approved";
  if (value.includes("move forward")) return "forward";
  if (value.includes("continue")) return "continue";
  if (value.includes("build it")) return "build";
  return "none";
}

export function hasApproval(input: string): boolean {
  return detectApprovalSignal(input) !== "none";
}
