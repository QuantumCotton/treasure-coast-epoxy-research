# Agent Spawn Behavior Rules

**Updated:** 2026-01-27

## Core Rules

**zai (GLM-4.7) is ALWAYS Priority #1**
- If only 1 agent: Must be zai
- If 2 agents: Must include zai as one of them
- If 3 agents: Must include zai (zai should always be present)

## Spawn Sequence

**Phase 1: Task OK ("during it OK")**
- Clear terminal/output
- Clarify: "Spawning agents... zai (GLM-4.7) as priority"
- State background: "Waiting to begin..."

**Phase 2: Agent Execution**
- Agents begin processing
- zai agent should start first (if possible)

## Multi-Agent Allocation

**1 Agent Scenario:**
- zai (GLM-4.7) - Only agent used

**2 Agents Scenario:**
- Agent 1: zai (GLM-4.7) - Always used as priority
- Agent 2: OpenAI - Secondary

**3 Agents Scenario:**
- Agent 1: zai (GLM-4.7) - Always used as priority
- Agent 2: OpenAI - Secondary
- Agent 3: OpenAI - Background waiting (third one)

## Key Point

**zai is ALWAYS included in any multi-agent spawn**
- zai is always the "anchor" or priority agent
- Never spawn without zai unless it's the only option
