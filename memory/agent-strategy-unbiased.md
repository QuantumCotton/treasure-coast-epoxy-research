# Agent Strategy - Truly Unbiased

**Updated:** 2026-01-27

## Core Principle

**NO PREDICTED ROLES OR BIAS**
- Both APIs (zai/GLM-4.7 and OpenAI) are equally capable
- Both can handle ANY task type: technical, formatting, coding, documentation, presentation, creative writing
- NO default "Agent 1 = technical" or "Agent 2 = formatting"
- NO claiming one is "better" for specific use cases
- User CHOOSES which agent for each task - I don't decide

## Agent Selection

### Agent 1: zai/GLM-4.7
- **Model:** zai/glm-4.7 (very smart, fast)
- **Capabilities:** Everything - technical work, coding, system admin, problem-solving, formatting, documentation, creative work
- **When user chooses this:** It's for any task - no "technical bias" implied

### Agent 2: OpenAI (GPT-4.2-mini or similar)
- **Model:** OpenAI API
- **Capabilities:** Everything - technical work, coding, formatting, documentation, creative work, presentation
- **When user chooses this:** It's for any task - no "formatting bias" implied

## Usage

**User picks which agent for each task:**
```bash
# User chooses zai agent
sessions_spawn(task="...", agentId="main", model="zai/glm-4.7")

# User chooses OpenAI agent
sessions_spawn(task="...", agentId="main", model="openai")
```

**No predetermined preferences:**
- I don't suggest one over the other based on task type
- I don't claim either is "better" for anything
- Both are equally capable for all tasks
- Choice is based on user preference, availability, or random testing

## Important

**NEVER show bias in descriptions**
- NO saying "better for technical" or "better for formatting"
- NO predicting which agent should be used
- NO implying one API is more capable than the other
- User decides - I follow instructions

**Agents are neutral tools**
- Each agent can do anything
- No predefined "personas" that limit their scope
- No "technical" vs "creative" roles assigned
- Fully flexible based on user's actual needs
