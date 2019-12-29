module.exports = {
  plugins: [
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wep App Tulum-Maps`,
        short_name: `Tulum-Maps`,
        start_url: `/`,
        background_color: `#F34B68`,
        theme_color: `#F34B68`,
        display: `minimal-ui`,
        icon: `src/images/tulum-maps-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
  siteMetadata: {
    title: `Tulum-Maps`,
    description: `Web App PWA for travel tips in Tulum`,
    author: `@geralcantara79`,
  },
}
