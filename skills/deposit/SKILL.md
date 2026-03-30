---
name: surchin-deposit
description: Deposit knowledge into Surchin (solutions, patterns, pitfalls)
user-invocable: true
disable-model-invocation: false
allowed-tools:
  - mcp__surchin__deposit_insight
---

# Surchin Deposit

Deposit a piece of knowledge into the Surchin knowledge base for your team.

## Instructions

1. Parse the user's input from: $ARGUMENTS
2. If the user described what to deposit, extract:
   - `kind`: classify as SOLUTION, PATTERN, PITFALL, CONTEXT, WORKFLOW, or DEPENDENCY
   - `content`: the full knowledge to store — be specific and actionable
   - `file_patterns`: relevant file paths or glob patterns
   - `symbol_names`: relevant function, class, or variable names
   - `tags`: categorization tags for discoverability
3. If $ARGUMENTS is empty or vague, review the recent conversation to identify:
   - Problems solved → deposit as SOLUTION
   - Patterns discovered → deposit as PATTERN
   - Gotchas encountered → deposit as PITFALL
   - Background knowledge → deposit as CONTEXT
   - Process knowledge → deposit as WORKFLOW
4. Call `deposit_insight` with the extracted information
5. Confirm what was deposited with a brief summary
