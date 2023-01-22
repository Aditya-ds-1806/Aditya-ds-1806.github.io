require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = 'https://aditya-ds-1806.github.io/';
const TitleName = 'Aditya DS';
module.exports = {
  siteMetadata: {
    title: TitleName,
    description: 'Aditya DS Full Stack React Developer',
    siteUrl,
    canonicalUrl: siteUrl,
    keywords: [
      'Software Engineer',
      'React Developer',
      'Full Stack JavaScript Developer',
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://aditya-ds-1806.github.io/',
        sitemap: 'https://aditya-ds-1806.github.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Code Pro`, `Muli:400,400i,500,700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-copy-linked-files' },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              disableBgImageOnAlpha: true,
            },
          },
          { resolve: 'gatsby-remark-embedder' },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/blog/${edge.node.fields.slug}`,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                };
              });
            },
            query: `
            {
              allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: "Aditya DS Site's RSS Feed",
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        name: `Aditya DS`,
        short_name: `Adi`,
        description: 'The personal website of Aditya DS.',
        background_color: `#1f2347`,
        theme_color: `#FFCC68`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of
        // the site.
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-71632651-1',
        anonymize: true,
      },
    },
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn:
          'https://96c7558cd24e4da5bc1b8741b7c5cc95@o393383.ingest.sentry.io/5242381',
        debug: true,
      },
    },
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        clarity_project_id: 'fig5biar8e',
        // Boolean value for enabling clarity while developing
        // true will enable clarity tracking code on both development and production environments
        // false will enable clarity tracking code on production environment only
        enable_on_dev_env: false,
      },
    },
  ],
};
