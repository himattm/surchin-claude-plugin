/**
 * Shared utilities for Surchin hook scripts.
 */

/**
 * Output hook context as JSON, using the correct key for the current platform.
 * Cursor expects `additional_context`, Claude Code expects `additionalContext`.
 */
export function outputContext(context) {
  const isCursor = !!process.env.CURSOR_SESSION_ID;
  const key = isCursor ? "additional_context" : "additionalContext";
  console.log(JSON.stringify({ [key]: context }));
}
