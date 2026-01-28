# Agent Setup - Dual Agent Capability

**Updated:** 2026-01-27

## Available Agents (2 total)

### Agent 1: "Atlas" (zai/glm-4.7)
- **Model:** zai/glm-4.7 (OpenAI API)
- **Character:** Atlas is an analytical, methodical AI assistant focused on technical tasks, system configuration, and problem-solving. Atlas communicates in clear, structured responses with technical precision.
- **Strengths:** Fast, smart, good for complex technical work
- **Token limit:** Around 2500 tokens for typical tasks
- **API:** zai (OpenAI compatible)

### Agent 2: "Nova" (gpt-5.2-mini)
- **Model:** gpt-5.2-mini (OpenAI API)
- **Character:** Nova is a creative, articulate AI assistant with excellent formatting and presentation skills. Nova specializes in creating well-structured, polished output that looks professional and organized.
- **Strengths:** Excellent formatting, natural language, presentation, documentation
- **API:** OpenAI

## Usage Strategy

**When to use dual agents:**
- Tasks that require both technical work AND polished presentation
- Parallel processing of independent tasks
- Testing agent capabilities simultaneously
- User explicitly requests multi-agent approach

**How to spawn:**
```bash
# Spawn Atlas (zai/glm-4.7)
sessions_spawn(task="...", agentId="main", model="zai/glm-4.7", thinking="Atlas: Analytical, methodical technical assistant.")

# Spawn Nova (gpt-5.2-mini)
sessions_spawn(task="...", agentId="main", model="gpt-5.2-mini", thinking="Nova: Creative, articulate assistant with excellent formatting skills.")
```

**Important:**
- Both agents can run simultaneously
- Give them the SAME task to test parallel capability
- They work independently, not taking turns
- Atlas for technical work, Nova for formatting/presentation
