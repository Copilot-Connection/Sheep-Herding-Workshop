import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Agentageddon",
  base: "/Agentageddon/",
  description: "#ESPC25 - Agentageddon",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Sections",
        items: [
          { text: "Setting up", link: "/01 setup/" },
          { text: "Building an agent", link: "/02 building/" },
          { text: "Breaking an agent", link: "/03 breaking/" }
        ],
      },
      { text: "Resources", link: "/resources" },
    ],

    sidebar: [
      {
        text: "Labs",
        items: [
          { text: "Setting up", link: "/01 setup/" },
          { text: "Building an agent", link: "/02 building/" },
          { text: "Breaking an agent", link: "/03 breaking/" }
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
