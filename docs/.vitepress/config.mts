import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sheep Herding",
  base: "/Sheep-Herding-Workshop/",
  description: "Sheep Herding With Agent 365",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Labs",
        items: [
          { text: "Setting up environment", link: "/01%20setup" },
          { text: "Lab 1 - A365 overview", link: "/Lab1" },
          { text: "Lab 2 - Explore Agent 365 and the unified registry", link: "/Lab2" },
          { text: "Lab 3 - Build an Agent Builder agent", link: "/Lab3" },
          { text: "Lab 4 - Build and publish a Copilot Studio agent", link: "/Lab4" },
          { text: "Lab 5 - Create and register a plugin skill", link: "/Lab5" },
          { text: "Lab 5 (Optional) - Create a Salesforce Connection", link: "/Lab5Optional" },
          { text: "Lab 6 - Build Agent Management Rules", link: "/Lab6" },
          { text: "Lab 7 (Optional) - Configure a Microsoft Entra Agent ID Blueprint", link: "/Lab7" },
          { text: "Lab 8 - Capture Microsoft Purview DSPM evidence", link: "/Lab8" },
          { text: "Lab 8 - Investigate Microsoft Defender security signals", link: "/Lab14" },
          { text: "Lab 9 - Information Protection", link: "/Lab9" },
          { text: "Lab 10 - Capture Microsoft Purview DSPM evidence", link: "/Lab10" },
          { text: "Lab 11 - Create a communication compliance policy", link: "/Lab11" },
          { text: "Lab 12 - Capture Data Loss Prevention risks", link: "/Lab12" },
          { text: "Lab 13 - Protecting from Insider Risk Management", link: "/Lab13" },
        ],
      },
      { text: "Resources", link: "/resources" },
    ],

    sidebar: [
      {
        text: "Labs",
        items: [
          { text: "Setting up environment", link: "/01%20setup" },
          { text: "Lab 1 - A365 overview", link: "/Lab1" },
          { text: "Lab 2 - Explore Agent 365 and the unified registry", link: "/Lab2" },
          { text: "Lab 3 - Build an Agent Builder agent", link: "/Lab3" },
          { text: "Lab 4 - Build and publish a Copilot Studio agent", link: "/Lab4" },
          { text: "Lab 5 - Create and register a plugin skill", link: "/Lab5" },
          { text: "Lab 5 (Optional) - Create a Salesforce Connection", link: "/Lab5Optional" },
          { text: "Lab 6 - Build Agent Management Rules", link: "/Lab6" },
          { text: "Lab 7 (Optional) - Configure a Microsoft Entra Agent ID Blueprint", link: "/Lab7" },
          { text: "Lab 8 - Capture Microsoft Purview DSPM evidence", link: "/Lab8" },
          { text: "Lab 8 - Investigate Microsoft Defender security signals", link: "/Lab14" },
          { text: "Lab 9 - Information Protection", link: "/Lab9" },
          { text: "Lab 10 - Capture Microsoft Purview DSPM evidence", link: "/Lab10" },
          { text: "Lab 11 - Create a communication compliance policy", link: "/Lab11" },
          { text: "Lab 12 - Capture Data Loss Prevention risks", link: "/Lab12" },
          { text: "Lab 13 - Protecting from Insider Risk Management", link: "/Lab13" },
        ],
      },
      {
        text: "Resources",
        items: [{ text: "Resources", link: "/resources" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/kevmcdonk/Agentageddon",
      },
    ],
  },
});
