const robots = {
  production: {
    host: 'https://www.sparkledonkeyvillage.com',
    sitemap: 'https://www.sparkledonkeyvillage.com/sitemap.xml',
    policy: [{ userAgent: '*', allow: '/' }]
  },
  staging: {
    host: null,
    sitemap: null,
    policy: [{ userAgent: '*', disallow: ['/'] }]
  }
};

module.exports = {
  siteMetadata: {
    title: 'Sparkle Donkey Village',
    siteUrl: 'https://www.sparkledonkevillage.com'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-link',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: "GTM-M43Z6MJ",
    //     includeInDevelopment: false,
    //     // Specify optional GTM environment details.
    //     // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
    //     // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: robots[process.env.GATSBY_ENV]
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: "UA-109826586-1",
    //   }
    // },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};