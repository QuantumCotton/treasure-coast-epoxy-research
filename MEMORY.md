# MEMORY.md - Long-Term Knowledge

*Last Updated: 2026-01-28*

---

## Quick Reference

### VPS Environment
- **Host:** [REDACTED_IP]
- **VNC:** Port 5901 (TigerVNC + XFCE4)
- **SSH Tunnel:** `ssh -L 5901:localhost:5901 chris@[REDACTED_IP]`
- **VNC Password:** [REDACTED_PASSWORD]
- **Browser:** Chromium installed
- **Knowledge Server:** http://[REDACTED_IP]:18791

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
