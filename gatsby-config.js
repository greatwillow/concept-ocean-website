module.exports = {
  siteMetadata: {
    title: 'conceptocean.com',
    description: 'Personal software development projects site of Gregory Denys',
    url: 'https://www.conceptocean.com',
    github: 'https://github.com/greatwillow',
    author: {
      name: 'Gregory Denys',
      email: 'gregory.g.denys@gmail.com'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',

    //FILE_SYSTEM
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dev-projects`,
        path: `${__dirname}/src/pages/dev-projects`
      }
    },

    //STYLING
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    },

    //JSON TRANSFORMER
    `gatsby-transformer-json`,
    'gatsby-transformer-remark',

    //MARKDOWN TRANSFORMER
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1140
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    //FAVICON
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ]
};
