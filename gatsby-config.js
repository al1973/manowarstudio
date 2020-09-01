module.exports = {
  siteMetadata: {
    title: 'Man o\' War Studio',
    description:
      'Crafts, Apparel & Jewellery from Costa Verde, Portugal',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    
    
  ],
};
