# User-Owned Execution Architecture

Status: Proposed baseline for Agent Studio v1  
Applies to: `agent-platform-v1` only  
Core principle: **The platform distributes and manages agents; the user's device executes them.**

## 1. Product invariants

1. Agent Studio must not run customer agent jobs on our application servers.
2. The user's device supplies execution resources (CPU, memory, storage and, where available, GPU).
3. Project files remain on the user's device by default. A file is not uploaded merely because it is selected in the UI.
4. Model inference is either local or performed by a provider/account explicitly selected and authorized by the user. Provider calls must be disclosed before data leaves the device.
5. API keys and provider credentials must never be embedded in frontend bundles, agent packages, URLs, logs or analytics.
6. Every agent receives only the capabilities and files needed for its task. No ambient filesystem, shell, browser or network access.
7. The user can inspect, approve, cancel and revoke an agent's actions.
8. If the local runtime is unavailable, the product must explain that local execution is unavailable. It must not silently fall back to our cloud.

These are architecture constraints, not marketing language.

## 2. High-level architecture

```text
                 AGENT STUDIO (web UI)
          discovery / catalog / project interface
                           |
                 explicit device pairing
                           |
             LOCAL RUNTIME (user's device)
          authentication / task scheduler / audit
                           |
                  capability broker
            (per-task grants + user approval)
                           |
                  isolated agent worker
                  /       |        \
             local files  local   user-selected
                         tools     model provider
                                    (optional)
```

### Platform responsibilities

**Our hosted platform**
- Serves the web application, public agent catalog, documentation and signed/versioned agent packages.
- May store account/catalog metadata only where needed and clearly disclosed.
- Does not receive task payloads, user files, prompts, model responses or execution logs by default.
- Does not provide compute for user agent jobs.

**User's device**
- Runs the Local Runtime and all agent orchestration.
- Stores projects, local execution history and credentials.
- Enforces permissions and mediates access to files, processes, devices and network.
- Makes model-provider requests directly when the user has configured an external provider.

**External model provider (optional)**
- Receives only the prompt/context the user has chosen to send.
- Is billed to the user's own provider account/API key.
- Must be identified in the UI with a clear data-transfer notice.

## 3. Local Runtime connection model

The web UI is not itself a trusted operating-system agent. A browser page cannot safely or portably provide unrestricted filesystem access, process management or background execution. Desktop execution therefore requires an installable Local Runtime.

Initial desktop target: Windows, macOS and Linux. Mobile support is a later, separately designed capability; mobile operating systems impose different background-execution and filesystem restrictions.

The first pairing design should:
- Have the runtime bind only to loopback (127.0.0.1 / ::1), never a public network interface.
- Use a short-lived, high-entropy pairing challenge and per-browser session token.
- Validate the exact allowed web origin and reject cross-origin requests; protect state-changing calls against CSRF and DNS-rebinding-style attacks.
- Require explicit user confirmation when pairing a browser with the installed runtime.
- Rotate/revoke session tokens and expose a visible disconnect control.
- Use TLS where practical for the local channel, or a rigorously reviewed localhost authentication protocol; do not rely on CORS as authentication.
- Never accept arbitrary URLs, shell strings or filesystem paths from the page without validation and capability checks.

The web UI must display runtime status (not installed, offline, paired, busy, error) and never imply a task is running when it is not.

## 4. Agent package contract

Each agent package must declare a versioned manifest before it can be installed or run.

Required manifest fields:
- `id`, `name`, `version`, `description`
- `input_schema` and `output_schema`
- `required_capabilities` (empty unless truly required)
- `network_domains` (empty by default; exact domains, not wildcards)
- `model_requirements` (optional; provider/model is user-selected)
- `data_handling` (what is read, written, retained and transmitted)
- `entrypoint` and supported runtime versions
- package integrity/signature metadata

A package cannot grant itself permissions. The runtime compares manifest requests with the user's grants and denies anything not explicitly allowed. Updates must be versioned and integrity-checked; future marketplace publishing should require signing and review.

## 5. Capability and security model

Start from deny-by-default. Capabilities should be narrow and task-scoped, for example:
- `files.read`: read only user-selected files or a user-approved folder.
- `files.write`: write only to a user-selected output folder; show a change preview where possible.
- `network.request`: disabled by default; allow exact destinations and disclose data transfer.
- `model.invoke`: use only the configured local model or user-authorized provider.
- `process.execute`: disabled for v1 starter agents; never expose a general shell to an agent.
- `clipboard.read/write`, `camera`, `microphone`, `screen.capture`: separate explicit grants, not bundled into broad permissions.

Security requirements:
- Run untrusted agent code in an OS-enforced sandbox with resource limits. A JavaScript VM alone is not a security boundary.
- Separate the runtime control plane from agent workers.
- Validate inputs/outputs against schemas and enforce size/time/memory limits.
- Require confirmation for destructive writes, external transmission, purchases, messages, publishing and other consequential actions.
- Maintain a local, inspectable audit trail and a one-action stop/cancel mechanism.
- Do not log secrets, full file contents or sensitive prompts by default.
- Keep runtime updates signed and use least-privilege OS permissions.

## 6. First release scope

Do not begin with dozens of autonomous agents. Prove the execution architecture with three small, bounded agents:

1. **File Organizer (preview-first):** inspect a user-selected folder, propose a rename/move plan, show a diff, and only apply changes after approval. No deletion in v1.
2. **Document Assistant (local files):** summarize or restructure user-selected text/documents. Local processing first; optional user-selected model provider with an explicit outbound-data notice.
3. **CSV Analyzer (local):** inspect a selected CSV, calculate basic statistics and produce a report locally. No network access required.

For the first technical milestone, ship one end-to-end agent (CSV Analyzer is the safest narrow slice) through the Local Runtime, with schema validation, cancellation, audit events and tests. Keep the other two as planned packages until the runtime security boundary is proven.

## 7. Suggested implementation sequence

1. Architecture and threat-model review (this document).
2. Define JSON schemas for task, manifest, permission grant, task status and audit event.
3. Build a minimal desktop Local Runtime with health/status, pairing and cancellation; no agent code execution yet.
4. Add a capability broker and isolated worker boundary.
5. Implement CSV Analyzer end-to-end without network access.
6. Add user-configured model providers and explicit data-flow notices.
7. Add file write operations with preview and confirmation.
8. Expand to other agents and platforms only after security tests pass.

## 8. Explicit non-goals for v1

- No hosted execution fallback or shared platform compute.
- No always-on autonomous agents.
- No arbitrary shell/terminal access.
- No agent-to-agent delegation.
- No mobile runtime promise until platform constraints are validated.
- No automatic upload of selected files.
- No claim that local execution alone makes an agent safe.

## 9. Acceptance criteria

The first local execution release is not ready until:
- A task demonstrably runs on the user's device and stops when the runtime is stopped.
- Network inspection confirms no task payload or file is sent to Agent Studio servers.
- Any external model call is made directly to the user-selected provider and is disclosed.
- An agent cannot access an unselected file or ungranted capability.
- Destructive actions require approval and can be cancelled.
- Runtime pairing rejects untrusted origins and revoked sessions.
- Logs contain no API keys or raw file contents.
- Tests cover malformed manifests, path traversal, permission escalation, oversized inputs, timeouts and worker crashes.

---

This document establishes the product's architectural direction. It does not claim that Local Runtime or secure sandboxing has already been implemented.
