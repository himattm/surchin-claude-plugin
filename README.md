# Surchin Plugin for Claude Code

Official [Claude Code](https://claude.ai/claude-code) plugin for [Surchin](https://getsurch.in) -- the context engineering platform for AI powered teams.

## Install

Add the marketplace and install in Claude Code:

```
/plugin marketplace add himattm/surchin-claude-plugin
/plugin install surchin@surchin
```

The Setup hook runs automatically on first install, opening your browser to sign in and configuring the current project.

Or install via the CLI (works with Claude Code, Cursor, Windsurf, and Cline):

```
npx @surchin/surchin init
```

## What it does

Surchin accumulates developer experience across coding sessions and teams. Every time an AI agent solves a problem, encounters a pitfall, or discovers a pattern, that knowledge is deposited into a shared substrate. Future sessions query this substrate first, so agents learn from past work instead of starting from scratch.

### MCP Tools

| Tool | Description |
|------|-------------|
| `query_insights` | Search the knowledge base before starting work |
| `deposit_insight` | Save solutions, patterns, pitfalls, and context |
| `rate_insight` | Rate returned insights as helpful or unhelpful |
| `get_friction_report` | Get unresolved errors and friction points |
| `set_preference` | Save user preferences for future sessions |
| `index_codebase` | Build or rebuild the local code index |

### Hooks

The plugin includes hooks that run automatically during Claude Code sessions:

- **Setup** -- authenticates and configures the project on first install
- **SessionStart** -- loads relevant knowledge when a conversation begins
- **PostToolUse** -- auto-captures tool usage (edits, tests, builds) as session events
- **PostToolUseFailure** -- captures error context for future debugging
- **Stop** -- generates per-turn summaries at each agent stop
- **PreCompact** -- preserves context before conversation compaction
- **TaskCompleted** -- prompts insight deposits after completing work
- **SubagentStart** -- injects the Surchin workflow into sub-agents
- **SessionEnd** -- finalizes the session and promotes high-signal events to insights

### Skills

Built-in slash commands:

- `/query` -- query the knowledge base
- `/deposit` -- deposit an insight
- `/rate` -- rate insights from the current session
- `/status` -- check connection and usage stats
- `/preferences` -- view and manage saved preferences
- `/seed` -- seed a new project with initial knowledge

## Links

- [Documentation](https://getsurch.in/docs)
- [Dashboard](https://getsurch.in/overview)
- [npm package](https://www.npmjs.com/package/@surchin/surchin)
