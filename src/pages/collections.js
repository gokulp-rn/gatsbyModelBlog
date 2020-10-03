import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Gallery from "../components/gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Collections = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Container>
        <Gallery imgUrls={data?.allContentfulStillPhoto?.edges} />
      </Container>
    </Layout>
  )
}

export default Collections

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulStillPhoto {
      edges {
        node {
          id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
            id
          }
        }
      }
    }
  }
`
