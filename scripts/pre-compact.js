#!/usr/bin/env node

/**
 * Surchin PreCompact hook.
 *
 * Fires before conversation context is compacted. Urgently prompts the LLM
 * to deposit any undocumented knowledge before it is lost.
 */

import { outputContext } from "./util.js";

const context = [
  "## URGENT: Surchin — Context Compaction Imminent",
  "",
  "Your conversation context is about to be compacted. Knowledge not deposited",
  "will be **permanently lost**. Before this happens, you MUST:",
  "",
  "1. **Deposit**: If you solved a non-trivial problem, discovered a pattern,",
  "   or hit a pitfall in this session, call `deposit_insight` NOW with:",
  "   - `kind`: SOLUTION, PATTERN, PITFALL, CONTEXT, WORKFLOW, or DEPENDENCY",
  "   - `content`: specific details of what you learned",
  "   - `file_patterns`: relevant file paths",
  "   - `symbol_names`: relevant function/class names",
  "   - `tags`: categorization tags for discoverability",
  "",
  "2. **Rate**: If `query_insights` returned results earlier in this session",
  "   that you haven't rated yet, call `rate_insight` for each one.",
  "",
  "3. **Preferences**: If the user expressed preferences you haven't saved,",
  "   call `set_preference` for each one.",
  "",
  "Do this IMMEDIATELY, before any other work.",
].join("\n");

outputContext(context);
