# Lab 9 – Information Protection
For more details and the latest prerequisites, see Create and publish sensitivity labels.
1.	Sign in to the Microsoft Purview portal with an account that has permission to manage sensitivity labels, then go to Solutions > Information Protection > Sensitivity labels.
2.	Review the existing label taxonomy, order, published policies, and any modern label scheme migration message before creating a label, so you do not duplicate or conflict with an existing classification.
3.	Select Create a label, then enter a clear name, user-facing display name, description for users, and administrator description. Use language that helps users choose the label correctly.
4.	Define the label scope. Select the supported locations that the label should govern, such as files and other data assets, emails, meetings, or groups and sites; only select scopes required for the workshop scenario.
5.	Configure the protection settings made available by the selected scope. For the lab, choose a low-risk combination such as a visible header, footer, or watermark, and use encryption only if the intended users and access rights have been agreed.
6.	If encryption is configured, specify who can access the content and what they can do with it. Apply least privilege, avoid production-wide access, and make sure an administrator can recover or reconfigure protected test content.
7.	Configure any content markings and other available controls, then preview the user experience. Keep markings short, recognisable, and consistent with the organisation’s classification taxonomy.
8.	Review the label summary carefully, create the label, reopen it, and verify its name, scope, protection settings, priority, descriptions, and ownership against the agreed design.
9.	Create or edit a label policy, add the new label, and publish it only to the workshop users or an instructor-approved pilot group. Configure policy options such as default labelling or justification for removing or lowering a label only when required by the exercise.
10.	Allow time for the label and policy to replicate, then sign in as a pilot user and confirm that the label appears in a supported Microsoft 365 app such as Word, Excel, PowerPoint, or Outlook.
11.	Apply the label to a document containing synthetic test data. Confirm that the expected marking, encryption, permissions, or container settings take effect, and verify the experience for both an authorised user and an unauthorised or out-of-scope test user where safe.
12.	Create some documents on the SharePoint Site and apply the sensitivity label to it.

---

Next: [Lab 10](./Lab10.md)
