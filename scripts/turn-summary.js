#!/usr/bin/env node

/**
 * Surchin Stop hook (ES module source).
 *
 * Triggers turn summary generation. Production version in
 * .claude-plugin/scripts/turn-summary.js.
 */

// No output — turn summaries are generated server-side.
// The production version calls POST /api/v1/sessions/turn-summary.
process.exit(0);
