import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components"
import "../css/Main.css"

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    mainBackgroundImage: file(relativePath: { eq: "index-background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality:100) {
           ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function Main({prop, data}) {

  const mainBackgroundImage = data.mainBackgroundImage.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title}/>
      <div>
        <BackgroundImage
          className={"div-main-background"}
          fluid={mainBackgroundImage}
          backgroundColor={`#040e18`}
        >
          <div className={"main-title"}>
            <h2 className={"main-title-text"}>
              Nice to meet you
            </h2>
            <h1 className={"main-title-text"}>
              I'm {data.site.siteMetadata.title}
            </h1>
          </div>
        </BackgroundImage>
      </div>
    </Layout>
  )
}

export default Main;