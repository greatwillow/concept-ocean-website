module.exports = {
  siteMetadata: {
    title: 'Concept Ocean',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',

    //FILE_SYSTEM
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src'
      }
    },

    //STYLING
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },

    //JSON TRANSFORMER
    `gatsby-transformer-json`,

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

    //IMAGES AND SHARP
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: "./src/favicon.png",
    //     injectHTML: true,
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       firefox: true,
    //       twitter: false,
    //       yandex: false,
    //       windows: false
    //     }
    //   }
    // }
  ]
}
