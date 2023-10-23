// @ts-check

const code_themes = {
  light: require('prism-react-renderer').themes.github,
  dark: require('prism-react-renderer').themes.dracula,
};

const meta = {
  title: 'DS Blog',
  tagline: 'DS Blog',
  favicon: '/favicon.ico',
  url: 'https://www.dscode.top',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  editUrl: 'https://github.com/Dongshan-git/blog/tree/main/',
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

const docs = [
  {
    id: 'react-web-core',
    path: 'docs/react-web-core',
    routeBasePath: '/react-web-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
];

const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  webpackPlugin,
  ...docs_plugins,
  tailwindPlugin,
  [
    '@docusaurus/plugin-client-redirects',
    {
      createRedirects(path) {
        // if (path.startsWith('/react-web-core/livestreaming')) {
        //   return [
        //     path.replace(
        //       '/react-web-core/livestreaming',
        //       '/react-web-core/livestreaming/livestream-apis',
        //     ),
        //   ];
        // }

        return undefined; // Return a falsy value: no redirect created
      },
    },
  ],
];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,
  organizationName: 'DSCodeStudio',
  projectName: 'ds-blog',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Dongshan-git/blog/tree/main/',
          // path: 'docs/react-web-core',
          // routeBasePath: '/docs',
          ...defaultSettings,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Dongshan-git/blog/tree/main/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/dyte-docs-card.png',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'DS Blog Logo',
          height: '40px',
          width: '101px',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
            className: 'guides-top-header',
          },

          {
            label: 'SDKs',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [
              {
                type: 'html',
                value: sdksHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          {
            label: 'REST API',
            to: '/blog',
          },
          {
            label: 'Resources',
            type: 'dropdown',
            className: 'dyte-dropdown resources-dropdown',
            items: [
              {
                type: 'html',
                value: resourcesHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          { to: '/blog', label: 'Blog', position: 'left' },

          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Book a demo',
            href: '/blog',
            position: 'right',
            className: 'navbar-book-demo',
          },
        ],
      },

      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      algolia: {
        appId: 'HL0HSV62RK',
        apiKey: '72ebf02146698733b7114c7b36da0945',
        indexName: 'docs',
        contextualSearch: true,
        searchParameters: {},
      },
    }),
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
