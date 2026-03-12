# Surchin Plugin for Claude Code

Official [Claude Code](https://claude.ai/claude-code) plugin for [Surchin](https://surchin.dev) — the shared knowledge substrate for AI coding agents.

## Install

In Claude Code:

```
/plugin marketplace add himattm/surchin-claude-plugin
/plugin install surchin@surchin
```

## What it does

Surchin accumulates developer experience across coding sessions. Every time an AI agent solves a problem, encounters a pitfall, or discovers a pattern, that knowledge is deposited into a shared substrate. Future sessions query this substrate first, so agents learn from past work instead of starting from scratch.

### Tools

| Tool | Description |
|------|-------------|
| `query_insights` | Search the knowledge base before starting work |
| `deposit_insight` | Save solutions, patterns, pitfalls, and context |
| `rate_insight` | Rate returned insights as helpful or unhelpful |
| `set_preference` | Save user preferences for future sessions |

### Hooks

The plugin includes hooks that run automatically:

- **SessionStart** — queries relevant knowledge when a conversation begins
- **PreCompact** — preserves context before conversation compaction
- **PostToolUseFailure** — captures error context for future debugging
- **TaskCompleted** — prompts insight deposits after completing work
- **SubagentStart** — injects the Surchin workflow into sub-agents

### Skills

Built-in slash commands:

- `/query` — query the knowledge base
- `/deposit` — deposit an insight
- `/rate` — rate insights from the current session
- `/status` — check connection and usage stats
- `/preferences` — view and manage saved preferences

## Setup

1. Sign up at [surchin.dev](https://surchin.dev)
2. Get your API key from Settings
3. Set your environment variable:
   ```bash
   export SURCHIN_API_KEY=sk_...
   ```

## Links

- [Documentation](https://surchin.dev/docs)
- [Dashboard](https://surchin.dev/overview)
- [GitHub](https://github.com/himattm/surchin)
