# Lab 5 - Create and register a plugin skill
Time: 75 minutes
Objective: Package a reusable skill as a Microsoft 365 Copilot plugin, validate the release artifact, share it, and verify that administrators can govern it.
Detailed walkthrough
Part A - Inspect and prepare the source project
1.	Open the Microsoft Learn quickstart and note that the wiqd plugin command tree is in alpha and can change. Follow the detailed walk through there or see summary here.
2.	Confirm the prerequisites: Node.js 24 or later, PowerShell 7 or later on Windows.
3.	Open a terminal at the root of the local folder.
4.	Install Work IQ Dev Tools using the current command for your operating system in the quickstart, then open a new terminal session if the installer asks you to refresh your environment.
5.	Run wiqd doctor and resolve any failed checks before continuing.
6.	Sign in with the workshop account by running wiqd auth login --interactive. Verify the tenant and signed-in identity before any provisioning or sharing step.
7.	From the project root, run the current wiqd plugin create command shown in the quickstart to create the plugin definition from the supported declarative-agent project.
8.	Review the generated plugin files. Check the plugin name, description, capability references, manifest paths, privacy URL, terms-of-use URL, publisher information, and version; do not add secrets or production data.
9.	Run the current wiqd plugin validate command against the project. Treat errors as blocking, correct the referenced files or metadata, and repeat validation until the project passes.
10.	Run the current wiqd plugin provision command to create the tenant-side resources required by the plugin. Save the console output and any request, correlation, or tracing identifier.
11.	Run the current wiqd plugin package command. Record the generated package path and version, and keep this exact artifact for validation, sharing, and any later publication.
12.	Validate the generated package with the package-validation command in the quickstart. Do not share or publish a different build from the one that passed validation.
13.	Review the passing artifact before moving to Part D. Confirm that it contains only the intended declarative agent and referenced files, store it in the approved lab location, and record the package name, version, validation result, and responsible owner.
Part D - Provision, share, and test
1.	Navigate to the M365 Admin Centre (https://admin.microsoft.com) and browse to Agents->Tools.
2.	Navigate to Skills and then click on Upload
3.	Select the App Package folder and the zip file below.
4.	Confirm that the Skill uploads correctly.

---

Next: [Optional Salesforce connection](./Lab5Optional.md)
