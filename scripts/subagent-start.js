#!/usr/bin/env node

/**
 * Surchin SubagentStart hook.
 *
 * Fires when a sub-agent is spawned. Injects Surchin awareness so sub-agents
 * also query and deposit knowledge.
 */

import { outputContext } from "./util.js";

const context = [
  "## Surchin — Knowledge Base Available",
  "",
  "This project uses Surchin, a shared knowledge base. MCP tools available:",
  "",
  "- `query_insights`: Search for solutions, patterns, and pitfalls before",
  "  starting work. Pass `query`, `file_context`, and `tag_context`.",
  "- `deposit_insight`: After completing work, deposit what you learned.",
  "- `rate_insight`: Rate any insights returned as helpful/unhelpful.",
  "",
  "Call `query_insights` with your task description before reading files.",
  "Call `deposit_insight` after completing work with what you learned.",
].join("\n");

outputContext(context);
