#!/usr/bin/env node

/**
 * Surchin SessionEnd hook (ES module source).
 *
 * Finalizes session and promotes insights. Production version in
 * .claude-plugin/scripts/session-end.js.
 */

// No output — session finalization is server-side.
// The production version calls POST /api/v1/sessions/finalize.
process.exit(0);
