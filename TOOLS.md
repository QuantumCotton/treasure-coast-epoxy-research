# TOOLS.md - Local Notes

Skills define *how* tools work. This file is for *your* specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:
- Camera names and locations
- SSH hosts and aliases  
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras
- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH
- home-server → 192.168.1.100, user: admin

### TTS
- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

---

## VPS Environment

### Connection
- **Host:** 76.13.101.120
- **VNC Port:** 5901 (TigerVNC + XFCE4 Desktop)
- **VNC Password:** `clawd123`
- **SSH Tunnel:** `ssh -L 5901:localhost:5901 chris@76.13.101.120`
- **Gateway Port:** 18789
- **Knowledge Server:** http://100.80.189.119:18791

### What's Installed
- TigerVNC Server + XFCE4 Desktop
- Chromium Browser
- All dependencies configured
- Clawdbot Gateway with `/restart` enabled

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Clawdbot Commands

### Gateway
- `/restart` - Restart gateway (enabled as of 2026-01-28)
- Via CLI: `clawdbot gateway restart`
- Config file: `/home/chris/.clawdbot/clawdbot.json`

### Agent Sessions
- `sessions_spawn(task="...", agentId="main", model="zai/glm-4.7")` - Spawn sub-agent
- `sessions_list` - List active sessions
- `session_status` - Show usage/status card

---

Add whatever helps you do your job. This is your cheat sheet.
