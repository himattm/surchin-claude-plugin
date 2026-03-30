---
name: surchin-seed
description: Seed the Surchin knowledge base with foundational insights and skills from this repository
user-invocable: true
disable-model-invocation: false
allowed-tools:
  - mcp__surchin__query_insights
  - mcp__surchin__deposit_insight
  - mcp__surchin__create_skill
  - Read
  - Glob
  - Bash
---

# Surchin Seed

Bootstrap the Surchin knowledge base with foundational insights and skills from this repository. Run this once when first setting up Surchin for a project.

## Instructions

### Step 1: Check if already seeded

Call `query_insights` with `query` set to "seeded repository context", `tag_context` set to `["seeded"]`, and `limit` set to 1.

If results come back, tell the user this repo has already been seeded and show the count. Ask if they want to proceed anyway. If not, stop here.

### Step 2: Gather repository metadata

Read the following files (skip any that don't exist):

1. **`package.json`** (root) — name, scripts, dependencies, devDependencies
2. **`pnpm-workspace.yaml`** or check `package.json` for `workspaces` field — workspace layout
3. For each workspace, read its **`package.json`** — name, dependencies
4. **`README.md`** — project description and setup instructions
5. **`CLAUDE.md`** — coding conventions, pitfalls, architecture notes
6. **`AGENTS.md`** — agent integration instructions
7. **`.env.example`** (or `.env.sample`, `.env.template`) — required environment variable **names only** (never values!)
8. **`turbo.json`**, **`tsconfig.json`**, or equivalent build config
9. Run `ls` to see the top-level directory structure
10. Run `ls` on key subdirectories (src/, apps/, packages/, etc.) for 2-level depth
11. Check for database migrations: `supabase/migrations/`, `prisma/migrations/`, `migrations/`, `db/migrations/`
12. Check for CI config: `.github/workflows/`, `.gitlab-ci.yml`
13. Run `git log --oneline -5 --no-decorate` for recent activity context
14. Run `git remote get-url origin` for the repo identifier

### Step 3: Analyze and generate seed insights

Based on what you read, generate **10-20 seed insights** covering these categories (skip any that don't apply):

| Category | Kind | What to capture |
|----------|------|-----------------|
| Project overview | CONTEXT | Language, frameworks, monorepo structure, what the project does |
| Workspace layout | CONTEXT | What each workspace/package contains and its role |
| Database & data model | CONTEXT | Tables, schemas, migration strategy, ORM/driver used |
| Auth & authorization | CONTEXT | Auth strategy, middleware patterns, role system |
| API structure | CONTEXT | Route patterns, API conventions, request/response formats |
| Key dependencies | DEPENDENCY | Important libraries and why they're used |
| Build & test commands | CONTEXT | How to build, test, lint, deploy |
| Environment setup | CONTEXT | Required env vars, local dev prerequisites |
| Coding conventions | CONTEXT | Patterns from CLAUDE.md — naming, style, architecture rules |
| Known pitfalls | PITFALL | Gotchas from CLAUDE.md or README warnings |

### Step 4: Deposit the insights

Use `deposit_insight` in **batch mode** (up to 10 per call). For every insight:

- **`kind`**: `CONTEXT`, `DEPENDENCY`, or `PITFALL` (never SOLUTION/PATTERN/WORKFLOW for seeds)
- **`tags`**: Always include `"seeded"` plus domain tags (e.g., `"auth"`, `"database"`, `"api"`)
- **`file_patterns`**: Relevant file paths or glob patterns
- **`symbol_names`**: Key functions, classes, or modules mentioned
- **`idempotency_key`**: Use format `seed:{repo-name}:{topic-slug}` (e.g., `seed:my-app:project-overview`)

### Step 5: Discover skill files

Search for skill files in the repository:

1. `Glob` for `.claude/skills/*/SKILL.md`
2. `Glob` for `**/skills/*/SKILL.md` — but **skip** anything under `node_modules/` or `packages/mcp-server/skills/` (those are Surchin's own built-in skills)

For each SKILL.md found, read it and parse:
- **Frontmatter** (between `---` markers): extract `name` and `description` fields
- **Body** (everything after the closing `---`): this becomes the `instructions`

### Step 6: Upload skills

For each discovered skill, call `create_skill` with:

- **`name`**: from frontmatter `name` field
- **`description`**: from frontmatter `description` field
- **`instructions`**: the markdown body after frontmatter
- **`trigger_tags`**: infer 3-5 tags from the skill content (e.g., a skill about code review → `["code-review", "pull-request"]`)
- **`trigger_files`**: if the skill mentions specific file patterns, include them
- **`status`**: `"published"`

The `create_skill` tool is idempotent by name — if a skill with the same name already exists, it will be skipped.

### Step 7: Confirm

Tell the user:
- How many **insights** were deposited and what categories were covered
- How many **skills** were uploaded and their names
- Mention that seeded insights start at reduced strength and will be naturally outranked as the team deposits real knowledge
- Mention that uploaded skills will now be automatically served to agents when their queries match the skill's triggers

## Rules

- **Never include secrets or environment variable values** — only variable names
- **Be factual and specific** — no speculation about code you haven't read
- **Each insight should be self-contained** — useful on its own without needing other insights
- **Focus on what a new developer would need to know** — not implementation details they can read in the code
- **Keep insights concise** — 2-4 sentences each, max 500 chars
- **If CLAUDE.md exists, prioritize its content** — it contains team-curated knowledge that's highest value for seeding
- **Skip Surchin's own MCP skills** — only upload project-specific skills (`.claude/skills/`, `.claude/commands/`, or project-level skill directories)
