# Lab 13 – Protecting from Insider Risk Management
For more details and the latest prerequisites, settings, and policy options, see Get started with Insider Risk Management.
1.	Open policy management. In the Microsoft Purview portal, go to Solutions > Insider Risk Management > Policies and review existing user and agent policies to avoid duplicate scope or conflicting detection coverage.
2.	Select Create policy. Choose a policy template that matches the risk scenario, such as data leaks, data theft by departing users, risky AI usage, or security policy violations; use a custom policy only when the built-in templates do not meet the requirement.
3.	Name and describe the policy. Use a unique, action-led name and record the policy purpose, accountable owner, intended reviewers, pilot scope, review date, and approval reference.
4.	Define the scope. Select the users or groups to include and add only justified exclusions. Start with a small workshop or pilot group rather than the whole organisation.
5.	Configure triggering events. Select the event that brings a user into policy evaluation, such as a supported HR event, a high-severity DLP alert, or another trigger offered by the selected template; confirm the supporting connector is active.
6.	Choose policy indicators. Enable the relevant exfiltration, device, access, security, or AI activity indicators available for the template. If an indicator is missing, check that it is enabled in the global Insider Risk Management settings.
7.	Set thresholds and policy windows. Configure trigger thresholds, activity thresholds, past-activity detection, and the active policy window conservatively so the pilot produces useful evidence without overwhelming reviewers. Keep numbers low for testing
8.	Prioritise important content. Where appropriate, select priority SharePoint sites, Teams, sensitive information types, sensitivity labels, or other supported content so the policy gives greater weight to activity involving high-value data.
9.	Review privacy and governance. Keep pseudonymisation and role-based access aligned with organisational policy, confirm that reviewers understand acceptable-use and legal requirements, and do not treat a risk score or alert as proof of intent or wrongdoing.
10.	Create and validate the policy. Review the summary, create the policy, reopen it, and verify its status, scope, template, triggers, indicators, thresholds, content priorities, and dependencies against the approved design.

---

Next: [Defender - Investigate security signals](./Lab8Defender.md)
