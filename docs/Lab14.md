# Lab 14 - Investigate Microsoft Defender security signals

Time: 65 minutes

Objective: Enable the required data connection, review AI agent posture, investigate an instructor-provided signal, and document remediation.

## Detailed walkthrough
### Part A - Review the AI agent inventory

1.	Select Assets > AI agents, then open the Agents tab.
2.	Select Customize columns and show agent name, platform, publish status, risk level, risk indicators, recommendations, and active alerts.
3.	Search for your agent. Open the details pane, then select Open agent page.
4.	Compare both records with the Agent 365 registry. Note differences in discovery time, platform naming, owner, publish status, or capability visibility.
5.	Open Incidents & alerts > Alerts or Incidents. Filter by the instructor-provided alert name, agent, and time window.
6.	Open the alert and read the detection summary before changing its status. Record severity, detection source, first and last activity, affected agent, user, and evidence entities.
7.	Open the incident graph or evidence and response view. Follow relationships between agent, identity, user, tool, data resource, cloud app, and endpoint.
8.	Review recommended actions. Map each action to an owner and expected verification: block or stop agent, disable tool, narrow permission, rotate credential, revise instructions, add data control, or increase monitoring.
Part B - Hunt and create the incident note
9.	Select Hunting > Advanced Hunting. Open the Schema pane and search for tables or fields containing agent, AI, Copilot, tool, identity, or alert data.
10.	Open a relevant table and select See and query data or use the instructor-provided current query. Set a narrow time range and filter on the exact workshop agent name or identifier.
11.	Run the query. Add user, identity, tool, resource, action, result, and alert fields only when they exist in the current schema.
12.	Correlate results using timestamps and stable identifiers. Avoid joining on display name alone when an object ID or correlation ID is available.
13.	Save the query as A365 Workshop - Agent investigation and export only the minimum workshop rows.

---

Back to [Workshop index](./index.md)
