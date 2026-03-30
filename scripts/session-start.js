#!/usr/bin/env node

/**
 * Surchin SessionStart hook.
 *
 * Fires when a Claude Code session begins. Injects additionalContext prompting
 * the LLM to call query_insights as its first action.
 */

import { outputContext } from "./util.js";

const context = [
  "## Surchin — Session Start",
  "",
  "This project uses **Surchin**, a shared knowledge base for AI coding agents.",
  "Your FIRST action should be to call `query_insights` with:",
  "- `query`: a description of the task or problem you're working on",
  "- `file_context`: relevant file paths from the current working directory",
  "- `tag_context`: topic tags (e.g., \"auth\", \"database\", \"api\")",
  "",
  "This retrieves solutions, patterns, and pitfalls from your team's shared",
  "knowledge base, plus your saved preferences. Do this BEFORE reading files.",
  "",
  "After completing work, call `deposit_insight` with what you learned.",
  "Rate every insight returned as `\"helpful\"` or `\"unhelpful\"`.",
].join("\n");

outputContext(context);
