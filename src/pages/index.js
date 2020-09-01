import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
  
export default () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)

  return (
   <Layout>
     <h1>Home</h1>
     <p>Crafts, Apparel & Jewellery from Costa Verde, Portugal</p>
     <p><Link to="/about/">Read all about me &rarr;</Link></p>
     
     {data.allFile.edges.map(image => (
      <Img
        fluid={image.node.childImageSharp.fluid}
        alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
      />
    ))}
     
   </Layout>
  )
}