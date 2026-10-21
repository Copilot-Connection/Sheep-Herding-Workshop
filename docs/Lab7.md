# Lab 7 – (Optional) Configure a Microsoft Entra Agent ID Blueprint
Time: 20 minutes
Objective: Create an accountable identity template, configure modern credentials, create an agent identity, and verify its audit and access posture.
Detailed walkthrough
For the latest prerequisites, portal steps, and programmatic options, see Create an agent identity blueprint in Microsoft Entra Agent ID.
1.	Confirm whether the blueprint will be created in the Microsoft Entra admin centre or programmatically with Microsoft Graph or PowerShell; use the portal wizard for this lab.
2.	Define the blueprint’s purpose, naming convention, expected agent type, hosting workload, lifecycle, and review date before creating it.
3.	Identify a named technical owner and human sponsor so that both administration and business accountability are explicit.
4.	In the Microsoft Entra admin centre, open Entra ID > Agents > Agent blueprints and select New agent blueprint.
5.	Enter the approved display name and a clear description of what identities created from the blueprint are intended to do.
6.	Assign the approved owner and sponsor, review the summary, and create the blueprint together with its associated blueprint principal.
7.	Open the completed blueprint and record its application ID, the blueprint principal’s object ID, creation time, owners, sponsors, and current status.
8.	Configure authentication credentials on the blueprint; prefer a federated identity credential and enter the trusted issuer, subject, and audience exactly as supplied by the hosting workload.
9.	Use a secret or certificate only when the design requires it and an Agent ID Administrator has approved secure storage, rotation, and retirement arrangements.
10.	If agents created from the blueprint must receive incoming requests, configure the approved identifier URI and delegated scope; otherwise leave inbound exposure unconfigured.
11.	Review required resource access and granted permissions, remove anything unnecessary, and obtain the correct administrator consent for privileged Microsoft Graph or other API permissions.
12.	Verify that the credential, identifier URI, scope, blueprint principal, ownership, sponsorship, and permissions match the approved design before using the blueprint to create agent identities or register agents in Agent 365.

---

Next: [Lab 8](./Lab8.md)
