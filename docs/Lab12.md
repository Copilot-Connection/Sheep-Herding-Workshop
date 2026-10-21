# Lab 12 – Capture Data Loss Prevention risks
For more details and the latest guidance, see Design a data loss prevention policy and Create and deploy a data loss prevention policy.
1.	Define the policy intent. Write a single, clear statement describing the sensitive information to protect, the business risk, the people or processes in scope, and the expected outcome.
2.	Identify stakeholders and ownership. Confirm the business owner, compliance or security owner, technical administrator, reviewers, support contact, review date, and escalation route.
3.	Choose what to monitor. Select the appropriate sensitive information types, sensitivity labels, trainable classifiers, exact data match classifiers, or other supported signals. Use synthetic test data for the lab.
4.	Set policy scope. Decide whether the policy applies to all users and groups or selected users, groups, and administrative units. Add only justified exclusions and document their owner and expiry.
5.	Select locations. Choose the supported workloads and data paths that match the scenario, such as Exchange, SharePoint, OneDrive, Teams, devices, Microsoft 365 Copilot interactions, or other locations available in the tenant.
6.	Create the policy. In the Microsoft Purview portal, open Solutions > Data Loss Prevention > Policies, select Create policy, and choose a suitable template or a custom policy.
7.	Name and describe the policy. Use a unique, action-led name and record its purpose, owner, scope, review date, and change or approval reference so administrators can distinguish it from similar policies.
8.	Configure rules and conditions. Define the content, activity, user, location, and sharing conditions that must be matched. Keep rules as simple as possible, order them deliberately, and include exceptions only where a valid business requirement exists.
9.	Choose proportionate actions. Start with auditing or user notifications, then use warnings, justified overrides, restrictions, or blocking only when they match the policy intent. Configure alerts, incident reports, and policy tips for the appropriate audiences.
10.	Review conflicts and dependencies. Check existing DLP policies, sensitivity labels, retention controls, endpoint settings, licensing, permissions, and workload prerequisites to avoid duplicate, contradictory, or unsupported enforcement.
11.	Deploy in simulation first. Save the policy in simulation mode, with or without policy tips as appropriate. Use controlled positive and negative tests, allow for policy distribution and event ingestion, and review matches, false positives, overrides, alerts, and user impact.
12.	Tune, approve, and enforce gradually. Refine conditions, thresholds, exceptions, notifications, and actions with the business owner. Pilot with a narrow group before broader rollout, verify the policy in Activity Explorer and alerts, document rollback steps, and schedule regular policy reviews.

---

Next: [Lab 13](./Lab13.md)
