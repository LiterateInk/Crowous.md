// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

export default defineConfig({
  adapter: netlify(),
  integrations: [
    starlight({
      title: "Crowous",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/LiterateInk?q=Crowous",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/f5KNCnMWzB",
        },
      ],
      plugins: [
        starlightSidebarTopics([
          {
            label: "Guides",
            link: "/guides/getting-started/installation",
            icon: "open-book",
            items: [
              {
                label: "Getting Started",
                autogenerate: { directory: "guides/getting-started" },
              },
              {
                label: "Examples",
                autogenerate: { directory: "guides/examples" },
              },
            ],
          },
          {
            label: "References",
            link: "/references",
            icon: "document",
            items: [
              {
                label: "Overview",
                link: "/references",
              },
              {
                label: "JS/TS",
                link: "https://js.crowous.docs.literate.ink/",
              },
              {
                label: "Rust",
                link: "https://docs.rs/crowous/",
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
