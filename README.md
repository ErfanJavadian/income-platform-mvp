# Agent Studio — Product Prototype

A responsive multi-studio AI agent platform prototype. Each studio groups multiple specialist agents; each agent opens a hybrid workspace with task presets, a project brief, local file selection, capability details and a prepared-task record.

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

## Important execution status
This is a front-end prototype, not a live AI execution service. It does not call AI models, edit media, generate deliverable files, deploy code or upload selected files. The UI clearly labels this status. Do not market the listed agents as operational until their execution tools are connected and tested.

## Engineering roadmap
1. Define an agent execution contract: input schema, tools, provider/model, output schema, task states and error handling.
2. Build a secure backend orchestrator; never expose provider API keys in browser code.
3. Connect one valuable agent end-to-end before claiming live execution.
4. Add secure file storage, durable projects, quotas and observability.
5. Add multi-agent collaboration after individual agents are reliable.

## Run
Open index.html in a modern browser. No build step is required.