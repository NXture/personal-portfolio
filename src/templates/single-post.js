import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout, Seo } from "components/common"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "utils/utilityFunctions"
import styled from "styled-components"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Seo />
      <GatsbyImage
        style={{ display: "flex", justifyContent: "center", margin: "0% 4%" }}
        image={mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData}
        alt="feature images"
      />
      <PostContainer>
        <h1>{mdx.frontmatter.title}</h1>
        <div>
          <span>{mdx.frontmatter.date}</span>{" "}
          <span role="img" aria-labelledby="divider">
            ▫️
          </span>{" "}
          <span>{mdx.frontmatter.author}</span>
        </div>
        <hr />
        <div>
          <Tags>
            {mdx.frontmatter.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <span>{tag}</span>
                </Link>
              </li>
            ))}
          </Tags>
        </div>

        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </PostContainer>
    </Layout>
  )
}

//Styled Components
const PostContainer = styled.div`
  margin: 0% 20%;
  h1 {
    margin-top: 4%;
  }

  hr {
    margin: 4px 0px;
  }

  @media (max-width: 880px) {
    margin: 0% 5%;
  }
`

const Tags = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  margin-left: 0px;

  li {
    letter-spacing: 1;
    font-size: 12px;
    font-weight: bolder;
    background-color: #ff0066;
    border-radius: 5px;
    padding: 3px 6px;
    margin: 5px;
    box-shadow: rgba(149, 157, 165, 0.8) 2px 2px 1px;
    span {
      color: #fff;
    }
  }
`

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        featureImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              height: 400
            )
          }
        }
      }
    }
  }
`
