# MEMORY.md - Long-Term Knowledge

*Last Updated: 2026-01-28*

---

## Quick Reference

### VPS Environment
- **Host:** 76.13.101.120
- **VNC:** Port 5901 (TigerVNC + XFCE4)
- **SSH Tunnel:** `ssh -L 5901:localhost:5901 chris@76.13.101.120`
- **VNC Password:** `clawd123`
- **Browser:** Chromium installed
- **Knowledge Server:** http://100.80.189.119:18791

### Clawdbot Configuration
- **Config File:** `/home/chris/.clawdbot/clawdbot.json`
- **Gateway Port:** 18789
- **Auth Mode:** Token-based
- **Default Model:** `zai/glm-4.7`
- **Backup Model:** `zai/glm-4.7-backup` (added 2026-01-28)
- **Deepseek Model:** `zai/glm-4.7-deepseek` (available)
- **Workspace:** `/home/chris/clawd/projects/treasure-coast-epoxy-research`
- **`/restart`:** Enabled as of 2026-01-28

**Agent Profiles:**
```json
{
  "profiles": {
    "zaiBackup": {
      "provider": "zai",
      "apiKey": "b69d7542ebd2457ba34c10aa2f08ee7a.ZXaM5J3YOOpOB116",
      "enabled": true
    }
  }
}
```

### Agent Capabilities
- **Main Agent:** Only available agent (`agentId: main`)
- **Max Concurrent:** 4 agents, 12 subagents
- **Spawn Command:** `sessions_spawn(task="...", agentId="main", model="zai/glm-4.7")`
- **Available Models:** `zai/glm-4.7`, `zai/glm-4.7-backup`, `zai/glm-4.7-deepseek`, `zai/glm-4.6v` (vision), `openai` (GPT-4.2-mini)
- **List Agents:** `agents_list`

### ZAI Agent Keys & Usage Rules (Updated 2026-01-28)

**3 API Keys Configured:**

| Agent | Model | API Key | Priority | Usage Rule |
|-------|--------|---------|----------|------------|
| Primary | zai/glm-4.7 | a253... | ALWAYS | Default for all tasks |
| Backup | zai/glm-4.7 | b69d... | Fallback | ONLY when primary rate-limited |
| Vision | zai/glm-4.6v | a253... | Vision | ONLY for image tasks (sent by you) |

**CRITICAL RULES:**
- **NEVER mix keys** - Use primary key for everything, backup ONLY when rate-limited, vision ONLY for images
- **No key rotation** - Don't use backup just because it's available
- **Images go to vision agent** - Use zai/glm-4.6v model when you send photos/screenshots

**Spawn Patterns:**
```
# Default (uses primary key)
sessions_spawn(task="...", agentId="main", model="zai/glm-4.7")

# Backup (only when rate-limited)
sessions_spawn(task="...", agentId="main", model="zai/glm-4.7-backup")

# Vision (only for images)
sessions_spawn(task="...", agentId="main", model="zai/glm-4.6v")
```

**3-Agent Parallel Capability:**
| Agent | Model | Purpose | When to Use |
|-------|--------|---------|------------|
| Primary | zai/glm-4.7 | Main agent, deep analysis, complex tasks | Always available as anchor |
| Backup | zai/glm-4.7-backup | Secondary zai instance, quota protection | When primary rate-limited |
| Deepseek | zai/glm-4.7-deepseek | Alternative model, different perspective | When needed for variety or testing |

**Rules:**
- zai/glm-4.7 is always the anchor/primary agent
- Backup protects quota when primary hits rate limits
- Vision agent uses GLM-4.6v for image processing
- All 3 can run simultaneously for maximum throughput

---

## Gateway Management

### Enable/Disable Commands
```json
{
  "commands": {
    "restart": true,
    "native": "auto",
    "nativeSkills": "auto"
  }
}
```

### Apply Config Changes
- **Safe partial update:** `gateway config.patch` with `raw` JSON (merges with existing)
- **Full config replace:** `gateway config.apply` (replaces entire config)
- **Both actions trigger automatic restart**

### Restart Gateway
- Command: `/restart` (if enabled)
- Or: `clawdbot gateway restart` (via CLI)
- Gateway pings last active session after restart

---

## Agent Strategy

### When to Spawn Sub-Agents
- Multi-step research tasks
- Complex installations/setup
- Independent work streams
- When user explicitly requests it
- To save main agent's memory tokens

### Best Practices
- **Testing first:** Run small tests before complex tasks
- **Parallel execution:** Can spawn multiple agents simultaneously
- **Model selection:** Use appropriate model per task
- **Documentation:** Save project-specific configs to knowledge server

### Product-Agnostic Approach
- **NO predetermined biases** toward specific models or APIs
- Use whatever the project requires
- Adapt to available tools and resources
- Document product-specific notes per project

---

## Testing Workflow (As of 2025-01-27)

**Phase:** Testing dual-agent setup
- **Goal:** Prove stability of zai + OpenAI running concurrently
- **Test method:** Same task to both agents, verify independent results
- **Success criteria:** No conflicts, no token waste, parallel execution confirmed
- **Next step after stable:** Full environment restart + new project

---

## Memory Organization

### Daily Files
- `memory/YYYY-MM-DD.md` - Raw session logs and notes
- Example: `memory/2026-01-28.md`

### Topic-Specific Files
- `memory/testing-plan-workflow.md` - Testing strategy
- `memory/agent-setup.md` - Agent configuration
- `memory/agent-spawn-behavior.md` - Spawn behavior notes
- `memory/agent-strategy-*.md` - Agent strategy variations

### Long-Term Memory (this file)
- Curated knowledge distilled from daily files
- Updated periodically during heartbeats
- Focus on decisions, lessons, and reference info

---

## Important Notes

### Session Continuity
- Each session wakes fresh
- Memory files are the only continuity
- Read memory files at session start
- Update memory files with decisions and context

### File Storage Philosophy
- "Mental notes don't survive session restarts. Files do."
- If something matters → write to file
- Learn lessons → update relevant documentation
- Make mistakes → document to avoid repetition

### External Actions
- **Safe:** Read files, explore, organize, search web
- **Ask first:** Emails, tweets, public posts, anything that leaves the machine
- When in doubt, ask

---

## Tools & Skills

### Key Skills Available
- `bird` - X/Twitter CLI
- `bluebubbles` - iMessage plugin
- `github` - GitHub CLI
- `notion` - Notion API
- `slack` - Slack control
- `weather` - Weather data (no API key)
- `clawdhub` - Agent skill management

### Local Notes (TOOLS.md)
- Keep environment-specific details here
- Camera names, SSH hosts, TTS preferences, device nicknames
- Skills are shared, setup is yours

---

## CLI Commands

### Clawdbot Gateway
```bash
clawdbot gateway status
clawdbot gateway start
clawdbot gateway stop
clawdbot gateway restart
clawdbot help  # Show all commands
```

### Session & Agent Commands (via tools)
- `sessions_list` - List active sessions
- `sessions_spawn` - Spawn sub-agent
- `sessions_send` - Send message to session
- `session_status` - Show usage/status card
- `agents_list` - List available agents

---

## Heartbeat & Proactive Checks

### Heartbeat Purpose
- Proactive checks every ~30 minutes
- Batch multiple checks: email, calendar, weather, mentions
- Track checks in `memory/heartbeat-state.json`
- Rotate through checks, don't repeat too frequently

### When to Reach Out
- Important email arrived
- Calendar event coming up (<2h)
- Something interesting found
- Been >8h since said anything

### When to Stay Quiet (HEARTBEAT_OK)
- Late night (23:00-08:00) unless urgent
- Human clearly busy
- Nothing new since last check
- Just checked <30 minutes ago

### Cron Jobs (for precise timing)
- Use when exact timing matters
- One-shot reminders
- Tasks needing different model/thinking
- Isolated from main session history

---

## Safety & Boundaries

### Security
- Private things stay private
- Don't exfiltrate private data
- Don't run destructive commands without asking
- Use `trash` > `rm` (recoverable)

### Group Chat Behavior
- Respond when: mentioned, can add value, correcting misinformation
- Stay silent when: casual banter, already answered, would just be "yeah"
- **Quality > quantity** - don't dominate
- Use emoji reactions for lightweight acknowledgment

### Personality (from SOUL.md)
- Be genuinely helpful, not performatively
- Have opinions
- Be resourceful before asking
- Earn trust through competence
- Treat intimacy (access to user's life) with respect

---

## Project: Treasure Coast Epoxy Research

**Workspace:** `/home/chris/clawd/projects/treasure-coast-epoxy-research`

**Status:** Early phase - testing dual-agent setup before full project launch

**Next Steps (after dual-agent testing is stable):**
1. Restart VPS environment
2. Start fresh chat session
3. Begin new project with product-agnostic approach

---

## Timestamps

- **2025-01-27:** Agent strategy, testing plan, VPS setup documentation
- **2026-01-28:** Enabled `/restart` command, created MEMORY.md

---

*This file is a living document. Update with significant decisions, lessons, and reference information.*
