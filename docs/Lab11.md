# Lab 11 - Create a communication compliance policy for agentic work
Time: 15 minutes
Objective: Enable the required data connection, review AI agent posture, investigate an instructor-provided signal, and document remediation.

For more details and the latest prerequisites, see Configure a Communication Compliance policy to detect generative AI interactions. This exercise monitors supported agent prompts and responses; it does not establish coverage of every autonomous action or tool call.
1.	Open policy management. In the Microsoft Purview portal, open Solutions > Communication Compliance > Policies. Review existing policies before selecting Create policy so the pilot does not duplicate an existing monitoring scope.
2.	Choose a starting policy. For Microsoft 365 Copilot, use the Detect Microsoft 365 Copilot and Microsoft 365 Copilot Chat interactions template. For other supported AI applications, use a custom policy with the relevant AI location available in your tenant.
3.	Name and describe the policy. Use a clear name such as Workshop – Agent AI interaction compliance. Describe the intended application coverage, pilot scope and risks being detected; do not describe it as a runtime blocking control.
4.	Set the monitored scope. Select only the intended workshop users or supported groups and configure exclusions where necessary. Select the supported generative AI locations explicitly; do not assume a Microsoft 365 Copilot location also covers Copilot Studio or external agents.
5.	Choose detection conditions. Review the template's Prompt Shields and Protected material classifiers where available. Add only the sensitive-information types, keywords or other supported conditions needed for the exercise, such as a synthetic project codename; check that the conditions apply to the selected AI location.
6.	Assign reviewers and review coverage. Select designated compliance reviewers and set the review percentage to 100% for the small pilot. Document who will review matches and escalate unresolved compliance risks.
7.	Review and create. Check the name, user scope, AI locations, conditions, reviewers and review percentage before saving. Reopen the saved policy to verify its configuration and allow for activation and ingestion before testing.
8.	Run controlled tests. Send benign synthetic prompts through each supported application, including one that should match the chosen keyword or sensitive-information condition and one that should not. Record the application, agent identifier where available, test user and UTC time. Do not use real confidential information or attempts to bypass safeguards.
9.	Validate and review matches. Open the policy's matches and alerts after processing. Check the available prompt and response evidence against the test record, record false positives and use the supported review or escalation workflow. If evidence is missing, check scope, location, connector status, billing and ingestion delay; record the coverage as unverified rather than compliant.
10.	Record the outcome and tune the policy. Capture the saved settings, observed matches, review decisions and remaining coverage gaps. Use available reports to assess detection volume and refine conditions before expanding the pilot. Keep separate DLP, permissions and security controls for preventive protection, and pause or retire the workshop policy when testing is complete.

---

Next: [Lab 12](./Lab12.md)
