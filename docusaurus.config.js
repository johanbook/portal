// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Portal",
  tagline: "Portal",
  url: "https://johanbook.com",
  baseUrl: "/portal/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://johanbook.com/favicon.ico",
  organizationName: "johanbook",
  projectName: "portal",
  staticDirectories: ["public"],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {},
      }),
    ],
  ],

  scripts: [
    {
      src: "https://analytics.johanbook.com/js/plausible.js",
      defer: true,
      "data-domain": "johanbook.com",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Johan Book",
        logo: {
          alt: "Site logo",
          src: "https://johanbook.com/fs/logo_light.png",
          srcDark: "https://johanbook.com/fs/logo_dark.png",
          href: "https://johanbook.com",
          target: "_self",
        },
        items: [
          {
            label: "Coding",
            position: "left",
            target: "_self",
            to: "https://johanbook.com/docs",
          },
          {
            label: "Cooking",
            position: "left",
            target: "_self",
            to: "https://johanbook.com/cooking",
          },
          {
            target: "_self",
            to: "https://johanbook.com/workout",
            label: "Workout",
            position: "left",
          },
          {
            target: "_self",
            to: "https://johanbook.com/projects",
            label: "Projects",
            position: "left",
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
