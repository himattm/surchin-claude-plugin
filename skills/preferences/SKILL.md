---
name: surchin-preferences
description: View or set persistent preferences that carry across sessions
user-invocable: true
disable-model-invocation: false
allowed-tools:
  - mcp__surchin__set_preference
  - mcp__surchin__query_insights
---

# Surchin Preferences

View or set persistent preferences that Surchin carries across sessions. Preferences influence how agents approach problems, communicate, and make decisions.

## Instructions

1. Parse the user's input from: $ARGUMENTS
2. Determine the intent:
   - **View preferences**: If $ARGUMENTS is empty or contains "show", "list", or "view"
   - **Set preference**: If $ARGUMENTS describes a preference to save

### Viewing preferences
- Call `query_insights` with `query` set to "user preferences" and a low limit (1)
- The response includes current preferences in the `## User Preferences` section
- Display them grouped by category: approach, communication, values, domain, general

### Setting a preference
- Extract from $ARGUMENTS:
  - `category`: approach, communication, values, domain, or general
  - `key`: a short snake_case key (e.g., "complexity_tolerance", "verbosity", "quality_bar")
  - `value`: the preference value (string, boolean, or number)
  - `scope`: "personal" (default) or "team" (requires admin role)
- Call `set_preference` with the extracted fields
- Confirm what was saved in one sentence

### Preference categories
- **approach**: How to solve problems (e.g., "prefer simple over clever", "always consider backwards compat")
- **communication**: How to communicate (e.g., "be concise", "explain trade-offs before choosing")
- **values**: Quality and engineering standards (e.g., "reliability over velocity", "test coverage is non-negotiable")
- **domain**: Domain-specific context (e.g., "we use DDD terminology", "this is a fintech codebase")
- **general**: Anything else that doesn't fit the above categories
