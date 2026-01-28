# Testing Plan & Future Workflow

**Created:** 2026-01-27

## Current Phase: Testing Dual-Agent Setup

**Testing Goal:**
- Verify two concurrent agents work perfectly together
- Test zai (GLM-4.7) + OpenAI agents simultaneously
- Ensure no conflicts, token waste, or coordination issues
- Test with SAME task to verify parallel execution

**Do NOT Add More Agents Yet:**
- Keep current setup: zai (GLM-4.7) + OpenAI (GPT-4.2-mini)
- Test thoroughly until stable
- Only add more agents after this is proven reliable

**Testing Approach:**
```bash
# Spawn both agents with same task
sessions_spawn(task="Test task - produce a short report", agentId="main", model="zai/glm-4.7")
sessions_spawn(task="Test task - produce a short report", agentId="main", model="openai")
# Both should work simultaneously
```

**Success Criteria:**
- Both agents complete without errors
- Both deliver independent results
- No timeout or token issues
- Parallel execution confirmed

---

## After Testing: Project Restart

**Will restart entire environment:**
1. Restart VPS
2. Start fresh chat session
3. Begin new project

**Gateway restarts now available:**
- `/restart` command enabled as of 2026-01-28
- Can restart Clawdbot gateway in-place via `/restart` or `clawdbot gateway restart`
- Useful for applying config changes or clearing issues

**Why restart:**
- Clean slate for next phase
- Ensure VNC + browser + agents all stable
- Fresh context for new project goals

---

## Future Workflow: Product-Agnostic

**Key Change:** I will NOT be tied to specific products, APIs, or technologies

**My Approach for ANY project:**
1. Ask: What tools, APIs, or resources should I use?
2. Use: Whatever is available/appropriate
3. Adapt: To project requirements, not my "preferences"
4. Test: Before committing to approaches
5. Document: Everything in project-specific memory

**Examples:**
- If project needs zai → I'll use zai
- If project needs OpenAI → I'll use OpenAI
- If project needs Claude → I'll use Claude
- If project needs both → I'll use both
- If project needs something else → I'll adapt

**NO predetermined biases:**
- I won't say "zai is better for X"
- I won't say "OpenAI is better for Y"
- I'll use what you specify
- I'll adapt to what the project needs

**Agent Creation Philosophy:**
- Agents are tools, not permanent "characters"
- Create per-project needs
- Can be reused, modified, or replaced
- Flexible based on task requirements

---

## Knowledge Server

**Status:**
- Running: Yes (http://100.80.189.119:18791)
- Accessible via browser: Yes
- Agent configurations stored: Yes

**How I'll use it:**
- Save project-specific configs
- Store agent protocols/personas per project
- Document workflows that work
- Retrieve settings for future sessions in same project

**NOT generic memory:**
- Agent strategies stored per-project
- Product-specific notes kept separate
- Each project gets fresh context

---

## VPS Environment

**What's installed & running:**
- VNC Server (TigerVNC) on port 5901
- XFCE4 Desktop
- Chromium Browser
- All dependencies configured
- Clawdbot Gateway with `/restart` enabled

**Connection:**
- SSH tunnel: `ssh -L 5901:localhost:5901 chris@76.13.101.120`
- VNC password: `clawd123`
- Connect to: `localhost:5901`

**Gateway:**
- Port: 18789
- Restart command: `/restart` (enabled 2026-01-28)
- Auth: Token-based

---

## Testing Right Now

**Current Test:**
Running both agents (zai + OpenAI) with same task to verify:
- Parallel execution works
- No conflicts occur
- Token usage is efficient

**Next Steps:**
1. Confirm both agents delivered results
2. Verify results are independent
3. If stable → Ready for project restart
4. If unstable → Debug and retry

---

## Summary

**Phase:** Testing dual-agent setup
**Goal:** Prove stability before adding more agents
**After:** Full restart with new project
**Going Forward:** Product-agnostic, adaptable, documentation-driven
