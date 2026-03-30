#!/usr/bin/env node

/**
 * Surchin PostToolUse hook (ES module source).
 *
 * Selectively captures Edit, Write, and high-signal Bash operations.
 * Production version in .claude-plugin/scripts/auto-capture.js.
 */

import { outputContext } from "./util.js";

// This simplified version just outputs context reminding the agent to deposit.
// The production version (.claude-plugin/) makes API calls to auto-capture events.

let input = "";

process.stdin.setEncoding("utf-8");
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  let toolName = "unknown";
  try {
    const data = JSON.parse(input);
    toolName = data.tool_name || data.toolName || "unknown";
  } catch {
    // Failed to parse — skip.
    process.exit(0);
  }

  // Only nudge for significant tools
  const significant = new Set(["Edit", "Write"]);
  if (!significant.has(toolName)) process.exit(0);

  // No output — auto-capture is silent. The production version
  // sends data to the API instead of injecting context.
});

if (process.stdin.isTTY) {
  process.exit(0);
}
