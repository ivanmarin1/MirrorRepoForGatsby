module.exports = {
  siteMetadata: {
    title: `Apartmani Mirna`,
    description: `Enjoy your stay with us.`,
    author: `@AnamariaBiocicIvanMarin`,
    menuItems: [
      {
        text: "POČETNA",
        link: "/",
        number: "one",
        iconName: "home.png",
      },
      {
        text: "O NAMA",
        link: "/about/",
        number: "two",
        iconName: "aboutus.png",
      },
      {
        text: "APARTMANI",
        link: "/apartments/",
        number: "three",
        iconName: "apartments.png",
      },
      {
        text: "REZERVACIJE",
        link: "/reservation/",
        number: "four",
        iconName: "reservation.png",
      },
      {
        text: "RECENZIJE",
        link: "/review/",
        number: "five",
        iconName: "review.png",
      },
      {
        text: "KONTAKT",
        link: "/contact/",
        number: "six",
        iconName: "contact.png",
      },
    ],
  },
  plugins: [
    // `gatsby-plugin-typography`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
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
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/images/Slides`, // wherever background images are stored
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sun.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-googlemaps-geocoding",
      options: {
        key: "AIzaSyDloMSI7dwiI3TDEhjM5Lc37H9ydLFvohI",
        address: "Put Kapelice 2",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
