---
name: surchin-status
description: Check Surchin connection status and show active preferences
user-invocable: true
disable-model-invocation: false
allowed-tools:
  - mcp__surchin__query_insights
---

# Surchin Status

Check the Surchin connection and show session summary.

## Instructions

1. Call `query_insights` with `query` set to "connection test" and a low limit (1)
2. If the call succeeds, report:
   - "Surchin is connected and working"
   - The API URL and repo ID from the response context
   - Any active user preferences
   - Total insight count if available
3. If the call fails, report the error and suggest troubleshooting:
   - Check that `~/.config/surchin/config.json` exists and has a valid API key
   - Verify the API URL is reachable
   - Try running `npx @surchin/surchin init` to reconfigure
