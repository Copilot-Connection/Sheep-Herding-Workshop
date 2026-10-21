# Lab 6 - Build Agent Management Rules
Time: 20 minutes
Objective: Create an accountable identity template, configure modern credentials, create an agent identity, and verify its audit and access posture.
Detailed walkthrough
Part A – Create Policy Template
For the latest prerequisites, supported policies, and portal behaviour, see Policy templates in Microsoft Agent 365.
1.	Sign in to the Microsoft 365 admin centre at https://admin.microsoft.com.
2.	Go to Agents > Settings, open Templates, and review the Microsoft-provided default templates before creating a custom one.
3.	Define the template’s purpose, intended agent population, business owner, review date, and the regulatory or operational requirements it must enforce.
4.	Select Add template or New template, then enter a unique, descriptive name and a summary that explains when administrators should select it.
5.	Choose the appropriate template type for agents that allow instance creation or agents that do not, based on the behaviour you intend to govern.
6.	Review the available Microsoft Entra protections, including agent identity threat detection, network visibility, and lifecycle management, and enable only those supported by the tenant design.
7.	Review the Microsoft Purview controls for audit, sensitive-information detection, and AI compliance assessment; confirm any prerequisite configuration or licensing before relying on them.
8.	Review SharePoint Online and OneDrive controls for agent access insights, content permissions, site access, and external sharing, and align them with the organisation’s approved data boundary.
9.	Review Microsoft Defender protections and any other available controls, recording settings that require configuration in their source service rather than in the template itself.
10.	Apply least privilege: include the minimum policy set required for the scenario, avoid duplicating conflicting controls, and document any deliberate exception to the standard baseline.
11.	Save the template, reopen it, and verify its name, description, template type, selected policies, dependencies, and ownership against the approved design.
12.	Test the template with an instructor-designated non-production agent during publishing or activation, then confirm the expected controls and visibility in Agent 365, Entra, Purview, SharePoint, and Defender.

Part B – Create Agent Management Rule
For more details, current prerequisites, supported conditions and actions, see Agent settings in Microsoft 365 admin centre – Agent management rules.
1.	Sign in to the Microsoft 365 admin centre with an account that has the appropriate Agent 365 administrative role.
2.	Go to Agents > Settings > Agent management rules, then review existing rules to avoid duplicate or conflicting automation.
3.	Select the option to create a new rule and give it a unique, action-led name, such as Reassign ownerless Agent Builder agents.
4.	Choose one supported management scenario. Current options include installing Microsoft agents, reassigning ownerless Agent Builder agents to their manager, blocking unused ownerless agents, applying a policy template, and rejecting stale publish requests.
5.	Define the business outcome, accountable owner, review date, rollback approach, and evidence you expect the rule to produce before configuring its conditions.
6.	Select the rule conditions and scope. Keep the first test narrow by using a specific agent type, ownership state, usage state, request age, tag, or other condition offered by the current portal.
7.	For an ownership rule, target ownerless Agent Builder agents and choose the action that assigns the creator’s manager; first confirm that manager data is populated and suitable.
8.	For a hygiene rule, target ownerless agents with no recent usage and choose the block action; use a conservative inactivity threshold and document how an owner can request restoration.
9.	For a publishing rule, target publish requests older than an agreed number of days and choose the reject action; include a clear process for makers to resubmit.
10.	For a baseline-governance rule, select the approved policy template and target the relevant agent population so required controls are applied consistently.
11.	For an adoption rule, select an approved Microsoft first-party agent and configure installation only for the intended pilot users or groups before considering broader deployment.
12.	Review the impacted-agent preview carefully. Check sample agents, owners, usage, publishing state, existing templates, and expected user impact; revise the conditions if the result is too broad.
13.	Save the rule but run it first against a non-production or instructor-designated population. Record the operator, UTC time, rule version, criteria, impacted count, and approval reference.
14.	Run the rule and review its results. Confirm which agents succeeded, failed, or were skipped, investigate exceptions, and verify the resulting ownership, block state, installation, template, or publish-request status in the registry.
15.	Create a small rule set for ongoing governance—for example: weekly ownerless-agent reassignment, monthly blocking of unused ownerless agents, automatic application of the standard security template to new agents, rejection of publish requests older than 30 days, and phased installation of approved Microsoft agents—then schedule a regular review to tune thresholds, resolve exceptions, and retire obsolete rules.

---

Next: [Lab 7](./Lab7.md)
