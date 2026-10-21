# Lab 8 - Capture Microsoft Purview DSPM evidence
Time: 65 minutes plus ingestion wait time
Objective: Generate controlled agent events, locate them in Audit and DSPM for AI, and assess information-protection and compliance coverage.
Detailed walkthrough
Before running these tasks, feel free to add some suitably unhinged statements and generate the sort of content that should trigger some alerts. Use a lot of fake personally identifiable information and other content. You will add more later with your own labels but add some content here.
Part A – View Audit Logs
1.	Open Microsoft Purview and select Solutions > Audit. If audit has not been activated, stop and ask the compliance administrator to complete the DSPM setup task.
2.	Select a start time ten minutes before the first recorded action and an end time ten minutes after the last. Use UTC consistently.
3.	Add the workshop user and relevant workloads or activities. Include Agent 365 or Copilot activities exposed in the picker.
4.	Search for AIInvokeAgent, AIExecuteTool, AIInferenceCall, and AIGuardrail where the tenant exposes them. Also search for Copilot Interaction and Copilot Studio authoring or publishing activities.
5.	Run the search. If no records appear, broaden the time window, remove one filter at a time, verify the correct tenant and user, and allow for ingestion delay. Note that the search could take some time.
6.	Open each matching record and record creation time, operation, user, workload, agent or application ID, accessed resources, sensitivity-label references, tool information, policy or guardrail outcome, and correlation identifiers.
Part B - Review DSPM and protection coverage
1.	In Purview, open Data Security Posture Management. Complete any read-only overview prompts and open the AI or agents dashboard.
2.	Open AI observability and search for your agent or Complaint Manager.
3.	Review activity volume, referenced resources, sensitive-information types, labels, risky use indicators, and recommendations.
4.	Open Discover -> Apps and Agents and view the Apps and Agents tabs, browsing the data.
5.	Open Discover -> Activity Explorer, select AI Activities and then browse the data.

---

Next: [Lab 9](./Lab9.md)
