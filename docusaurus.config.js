// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Weird Wild West',
  tagline: 'Serveur RP',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://MssCerise.github.io',
  baseUrl: '/wiki-weird-wild-west/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MssCerise',
  projectName: 'wiki-weird-wild-west',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    localeConfigs: {
      fr: {
        label: 'Français',
        htmlLang: 'fr',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Weird Wild West',
        logo: {
          alt: 'Weird Wild West',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://github.com/MssCerise/wiki-weird-wild-west',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {label: 'Accueil', to: '/docs/intro'},
              {label: 'Règlement', to: '/docs/reglement/regles-rp'},
              {label: 'Bien démarrer', to: '/docs/demarrer/installer-redm'},
            ],
          },
          {
            title: 'Jeu',
            items: [
              {label: 'Lore', to: '/docs/lore/contexte'},
              {label: 'Métiers', to: '/docs/metiers/liste-metiers'},
              {label: 'Factions', to: '/docs/factions/liste-factions'},
            ],
          },
          {
            title: 'Aide',
            items: [
              {label: 'Commandes', to: '/docs/commandes/commandes-utiles'},
              {label: 'Économie', to: '/docs/economie/systeme-economique'},
              {label: 'Staff', to: '/docs/staff/contact'},
            ],
          },
        ],
        copyright: `Weird Wild West — Wiki du serveur RedM. ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
