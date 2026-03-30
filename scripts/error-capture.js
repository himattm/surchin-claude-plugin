#!/usr/bin/env node

/**
 * Surchin PostToolUseFailure hook.
 *
 * Fires when a tool call fails. Reads the failure context from stdin and
 * suggests querying Surchin for known solutions.
 */

import { outputContext } from "./util.js";

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
    // Failed to parse — proceed with generic message.
  }

  const context = [
    `## Surchin — Tool Failure (${toolName})`,
    "",
    "A tool failure just occurred. Surchin may have a known solution.",
    "",
    "- Call `query_insights` with `error_signature` set to the error message",
    "  to check if your team has encountered this before.",
    "- If you resolve this issue, call `deposit_insight` with `kind: \"PITFALL\"`",
    "  to help future sessions avoid the same problem.",
  ].join("\n");

  outputContext(context);
});

// Handle case where stdin is already closed (no piped input).
if (process.stdin.isTTY) {
  const context = [
    "## Surchin — Tool Failure",
    "",
    "A tool failure occurred. Call `query_insights` with `error_signature`",
    "set to the error message to check for known solutions.",
  ].join("\n");

  outputContext(context);
}
