# Agent Studio — Product Prototype

A responsive multi-studio AI agent platform prototype. Each studio groups specialist agents; each agent opens a workspace with task presets, a project brief, local file selection, capability details and a prepared-task record.

## Studios in this prototype
- Video & Film — 10 agents
- Design — 8 agents
- Business — 8 agents
- Development — 8 agents
- Marketing & Sales — 8 agents
- Audio & Music — 8 agents

## Working prototype features
- Browse, search and filter studios and agents
- Open a dedicated workspace for each specialist
- Select task presets and write a structured brief
- Select files from the device (not uploaded)
- Save prepared briefs in browser localStorage
- View prepared briefs in My Projects
- Responsive desktop and mobile layout

## Product architecture: User-Owned Execution

**The user's device executes the agents. Agent Studio does not provide compute for customer tasks.**

- The Local Runtime on the user's device will orchestrate and execute agent jobs.
- Local files and project data stay on-device by default.
- Models run locally or use a provider/account explicitly configured by the user.
- Any external data transfer must be disclosed and authorized.
- API keys must never be embedded in frontend code or agent packages.
- Agents receive only narrow, task-scoped capabilities; permissions default to deny.
- There is no silent fallback to hosted execution.

See [docs/LOCAL_FIRST_ARCHITECTURE.md](docs/LOCAL_FIRST_ARCHITECTURE.md) for the architecture, security requirements, first-release scope and acceptance criteria.

## Current execution status

This repository is still a front-end prototype. It does not yet include the Local Runtime, secure sandbox, model connections or live agent execution. The current UI does not upload selected files. Do not market the listed agents as operational until the local execution path has been implemented and tested.

## Engineering roadmap

1. Define versioned task, agent-manifest, permission and audit-event schemas.
2. Build a minimal desktop Local Runtime with secure pairing, status and cancellation.
3. Implement a deny-by-default capability broker and OS-enforced worker isolation.
4. Ship one bounded end-to-end local agent (CSV Analyzer) with tests.
5. Add optional user-configured model providers with explicit data-flow notices.
6. Expand to more agents and platforms only after the security acceptance criteria pass.

## Run

Open `index.html` in a modern browser. No build step is required.
