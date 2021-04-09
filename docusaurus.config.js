module.exports = {
  title: 'SAM Community :: Education & Training',
  tagline: "Understand the Fundamentals",
  url: 'https://community.simpleassetmanager.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'simple-asset-manager', // Usually your GitHub org/user name.
  projectName: 'education', // Usually your repo name.
  themeConfig: {
    // algolia: {
    //   apiKey: 'ec91977a19498233b2d536dbcea11c44',
    //   indexName: 'simpleassetmanager',
    //   searchParameters: {}, // Optional (if provided by Algolia)
    // },
    navbar: {
      title: '',
      logo: {
        alt: 'Simple Asset Manager Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/simple-asset-manager/',
          label: 'GitHub',
          position: 'right',
        },
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides',
              to: 'docs/guides/',
            },
            {
              label: 'Asset Managers',
              to: 'docs/asset_manager/',
            },
            {
              label: 'Tenants',
              to: 'docs/tenants/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ptda6eC',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/simple-asset-manager/education/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Simple Asset Manager`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'home',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
