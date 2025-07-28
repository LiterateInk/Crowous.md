// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Crowous',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			plugins: [
        starlightSidebarTopics([
          {
            label: "Guides",
            link: "/guides/getting-started/installation",
            icon: "open-book",
            items: [
              { label: "Getting Started", autogenerate: { directory: "guides/getting-started" } },
              { label: "Examples", autogenerate: { directory: "guides/examples" } },
            ]
            // autogenerate: { directory: "guides" }
            // items: [
            //   { label: 'Example Guide', slug: 'guides/example' },
            // ],
          }
        ])
      ],
      // sidebar: [
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{ label: 'Example Guide', slug: 'guides/example' },
			// 		],
			// 	},
			// 	{
			// 		label: 'Implementation',
			// 		autogenerate: { directory: 'implementation' },
			// 	},
			// ],
		}),
	],
});
