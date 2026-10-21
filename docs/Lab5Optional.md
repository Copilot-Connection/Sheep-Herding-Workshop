# Lab 5 - OPTIONAL – create a Salesforce Connection
Time: 30 minutes
Objective: Create a Salesforce Developer tenant and connect it.
Detailed walkthrough
Part A - Create a Salesforce AgentForce tenant
1.	Open Salesforce Developers (https://developer.salesforce.com) and select the free Developer Edition option from Try For Free that includes Agentforce. Avoid the separate time-limited Agentforce 360 Platform trial unless the exercise specifically requires it.
2.	Select Sign up or Start free to open the Developer Edition registration form.
3.	Enter your name and an active email address that you can access during the workshop.
4.	Enter a company or organisation name, choose the closest matching job role and country or region, and accept the applicable terms.
5.	Create a globally unique Salesforce username in email-address format. It does not need to be a working mailbox, but it must not duplicate any existing Salesforce username; for example, use yourname+agentforceworkshop@example.com.
6.	Submit the form and wait for the account activation email. Check the spam or junk folder if it does not arrive after a few minutes.
7.	Open the activation email, select Verify Account, and complete registration by setting a strong password and the requested account-recovery details.
8.	Save the username and login URL in an approved password manager. Do not place passwords, recovery answers, tokens, or API credentials in the workshop notes.
9.	Sign in to the new Developer Edition org and allow the initial setup and sample-data provisioning to finish before changing configuration.
10.	Open Setup, use Quick Find to search for Agentforce Agents, and confirm that the Agentforce page is available.
11.	If the org shows an Einstein Generative AI prerequisite, enable it first. Then enable Agentforce if a toggle is still displayed, and refresh the page; newer Developer Edition orgs may already have Agentforce enabled.
12.	Confirm that New Agent is available. If it is missing, verify that you are in the new Developer Edition org and that your user has the permissions required to manage AI agents.
13.	Check that Data 360 or the relevant data setup area is present, because the current free Developer Edition includes Agentforce and Data 360 capabilities for development and learning.
14.	Create a simple test agent or open the guided Agentforce setup, but use only synthetic workshop data and do not connect production systems, real customer records, or confidential information.
15.	Record the org login URL, Salesforce username, org ID, creation date, and named owner in your notes. Sign in periodically to keep the free Developer Edition active and confirm the tenant is ready before starting the Salesforce connection exercise.
Part B - Connect the Salesforce tenant
1.	For the full Microsoft guidance and the latest prerequisites, see Connect Salesforce Agentforce to Microsoft Agent 365.
2.	Confirm that the Microsoft administrator has the Agent 365 AI Administrator role, that a Salesforce administrator can complete the Salesforce configuration, and that Einstein Generative AI, Agentforce, and Data 360 are available in the Salesforce org.
3.	In Salesforce, open Setup, search for App Manager, open External Client App Manager, and select New External Client App.
4.	Enter a clear app name and a monitored contact email address, then select Enable OAuth and enter a callback URL such as https://login.salesforce.com/services/oauth2/success.
5.	Add the OAuth scopes Access chatbot services (chatbot_api), Access the Salesforce API Platform (sfap_api), Manage user data via APIs (api), and Perform requests at any time (refresh_token, offline_access).
6.	Under Flow Enablement, select Enable Client Credentials Flow, create the external client app, open its Policies tab, and edit the OAuth policies.
7.	Turn on Enable Client Credentials Flow, set Run As to an active integration user with API access and permission to query the required Data 360 data space, then save the policy.
8.	On the app’s Settings tab, expand OAuth Settings and securely record the consumer key and consumer secret. In Setup > My Domain, also copy the current My Domain URL. Do not paste credentials into the lab notes.
9.	If Data 360 has not been provisioned, open Data 360 Setup (called Data Cloud Setup in some orgs), select Get Started, and allow up to an hour for provisioning.
10.	In Installed Packages, confirm that Salesforce Standard Data Model is version 1.130 or later and upgrade it if required before enabling tracing.
11.	In Salesforce Setup, open Einstein Generative AI > Einstein Audit, Analytics, and Monitoring Setup. Turn on Agentforce Session Tracing, select the default data space if prompted, and enable Agent Platform Tracing plus Audit and Feedback. Only sessions created after tracing is enabled can be collected.
12.	Open the Microsoft 365 admin centre, go to Agents > All agents, and under Connected platforms select Manage. Choose the option to add a Salesforce Agentforce connection.
13.	Enter the Salesforce My Domain URL, consumer key, and consumer secret from the external client app, review the connection details, and create the connection.
14.	Wait for the connection status to show as connected, then run or wait for synchronisation. Review the latest synchronisation time and resolve any authentication, permission, domain, tracing, or Data 360 errors shown.
15.	In Agents > All agents > Registry, filter for Salesforce Agentforce and confirm that the expected agents appear. Open a synchronised agent and verify its source-platform details; after test sessions have been processed, review its Activity information and record the connection status, synchronisation time, and verification result without capturing secrets.

---

Next: [Lab 6](./Lab6.md)
