#!/usr/bin/env node

/**
 * Surchin TaskCompleted hook.
 *
 * Fires when a task is marked as completed. Reminds the LLM to deposit
 * knowledge and rate any insights received.
 */

import { outputContext } from "./util.js";

const context = [
  "## Surchin — Task Complete",
  "",
  "If this task was non-trivial, before moving on:",
  "",
  "1. Call `deposit_insight` with what you learned (solutions, patterns,",
  "   pitfalls, workflows). Include `file_patterns`, `symbol_names`, and `tags`.",
  "2. Call `rate_insight` for any insights returned during this task.",
  "3. If the user expressed preferences, call `set_preference` to save them.",
  "",
  "Skip this only for single-line trivial fixes.",
].join("\n");

outputContext(context);
