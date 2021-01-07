require('dotenv').config({ path: `.env` })

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const imagesConfig = {
  name: "images",
  path: "./src/images/",
}

const pagesConfig = {
  name: "pages",
  path: "./src/pages/",
}

const googleFontsConfig = {
  fonts: [
    `Permanent Marker`,
    `Montserrat:400,500` // you can also specify font weights and styles
  ],
  display: 'swap'
}

module.exports = {
  siteMetadata: {
    title: "Cris Noel",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-typescript",
    "gatsby-plugin-material-ui",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: imagesConfig,
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: pagesConfig,
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: googleFontsConfig
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
  ],
};
