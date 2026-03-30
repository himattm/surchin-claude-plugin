---
name: surchin-rate
description: Rate Surchin insights as helpful or unhelpful
user-invocable: true
disable-model-invocation: false
allowed-tools:
  - mcp__surchin__rate_insight
---

# Surchin Rate

Rate one or more Surchin insights as helpful or unhelpful to improve future retrieval quality.

## Instructions

1. Parse the user's input from: $ARGUMENTS
2. If insight IDs are provided in $ARGUMENTS, rate them directly
3. If no IDs are provided, look at the current conversation for any `query_insights` results that haven't been rated yet
4. For each insight to rate:
   - Determine if it was helpful based on the user's input or the conversation context
   - Call `rate_insight` with:
     - `insight_id`: the ID of the insight
     - `rating`: "helpful" or "unhelpful"
     - `context` (optional): brief reason for the rating
5. If rating multiple insights, use the `insight_ids` array parameter instead of individual calls
6. Confirm each rating with a brief summary of what was rated and why
