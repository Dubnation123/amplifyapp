module.exports = {
  siteMetadata: {
    title: `Yifang Wang`,
    description: `Welcome to @Yifang Wang's personal website`,
    author: `@Yifang Wang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yifang Wang`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
