# Agent Strategy - Flexible, Project-Based

**Updated:** 2026-01-27

## Key Principles

**Agent Personalities are TEMPORARY**
- Each agent exists only for the current project
- Can be created/changed/removed at any time
- No permanent "Atlas" or "Nova" characters

## Agent Selection (User Chooses Each Time)

### Agent 1: "zai/GLM Agent" (Priority #1)
- **When to use:** Technical work, coding, system administration, complex analysis, problem-solving
- **Model:** zai/glm-4.7 (very smart, fast)
- **Purpose:** Technical assistant, code helper, system operator

### Agent 2: "OpenAI Agent" (Priority #2)
- **When to use:** Formatting, presentation, documentation, creative writing, OpenAI-specific features
- **Model:** OpenAI (GPT-4.2-mini or similar)
- **Purpose:** Presentation, formatting, documentation, content creation

## How to Spawn Agents (User Chooses)

```bash
# Spawn zai/GLM agent for technical work
sessions_spawn(task="...", agentId="main", model="zai/glm-4.7")

# Spawn OpenAI agent for formatting/presentation
sessions_spawn(task="...", agentId="main", model="openai")
```

## Agent Management

**Saving Agents:**
- Save agent configurations to spreadsheet on knowledge server
- Track which agents were used for which projects
- Can add/remove agents anytime

**Creating New Agents:**
- User specifies: model, purpose, when to use it
- No predefined personalities needed - just describe what you want in the task
- Temporary for current project work

**Flexible Use:**
- Pick either agent based on current need
- Don't have to use zai first if task is presentation-focused
- Can spawn both agents simultaneously for parallel work if needed

## Example Agent Spawns

**Technical Task (zai/GLM):**
```bash
sessions_spawn(task="Install and configure VNC server on Ubuntu VPS. Set up Xfce desktop and TigerVNC with password authentication. Configure ports and firewall.", agentId="main", model="zai/glm-4.7")
```

**Presentation Task (OpenAI):**
```bash
sessions_spawn(task="Create a beautifully formatted report on the VPS setup with bullet points, code blocks, and clear sections.", agentId="main", model="openai")
```

## Notes

- Agents are flexible tools, not permanent characters
- User chooses which model/agent for each task
- zai/GLM is great for technical work (fast, smart)
- OpenAI is great for presentation/formatting
- Can run agents in parallel for complex tasks
