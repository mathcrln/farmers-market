module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`karla\:300,400,400i,700`],
        display: "swap",
      },
    },
  ],
}
