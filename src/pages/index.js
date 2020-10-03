import React from "react"
import styled from "styled-components";
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import BgImage from "../components/bgImage";
import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h2`
  padding-top: 10%;
  font-size: 5rem;
  color: white;
`;

const SubTitle = styled.h6`
  color: white;
  padding-bottom: 2rem;
  padding-top: 2rem;

  @media(min-width: 768px) {
    margin-right: 25rem;
  }
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <BgImage fluid={data.allContentfulHome.edges[0].node.image.fluid} />
      <Container>
          <Title >Look at me!</Title>
          <SubTitle className="ml-lg-10">Keep your thoughts positive because your thoughts become your words. Keep your words positive because your words become your behavior. Keep your behavior positive because your behavior becomes your habits. Keep your habits positive because your habits become your values. Keep your values positive because your values become your destiny. Mahatma Gandhi</SubTitle>
      </Container>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulHome {
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
