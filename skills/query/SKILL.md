---
name: surchin-query
description: Search Surchin knowledge base for solutions, patterns, and pitfalls
user-invocable: true
disable-model-invocation: false
allowed-tools:
  - mcp__surchin__query_insights
  - mcp__surchin__rate_insight
---

# Surchin Query

Search the Surchin knowledge base for solutions, patterns, pitfalls, and context relevant to your current task.

## Instructions

1. Take the user's query from: $ARGUMENTS
2. Identify relevant file paths from the current working directory context
3. Infer topic tags from the query and codebase context
4. Call `query_insights` with:
   - `query`: the user's description (use $ARGUMENTS if provided, otherwise describe the current task)
   - `file_context`: any file paths mentioned or currently relevant
   - `tag_context`: inferred topic tags (e.g., "auth", "database", "api", "testing")
5. Present results clearly, grouped by kind:
   - **SOLUTION**: Previously solved problems
   - **PATTERN**: Established patterns in this codebase
   - **PITFALL**: Known gotchas and pitfalls to avoid
   - **CONTEXT**: Background context about files or systems
   - **WORKFLOW**: Process and workflow knowledge
   - **DEPENDENCY**: Dependency-related knowledge
6. If results were returned, ask the user if any were helpful
7. Call `rate_insight` for each result based on the user's feedback
