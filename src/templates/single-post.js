import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout, Container, Seo } from "components/common"
import { GatsbyImage } from "gatsby-plugin-image"
import Pen from "assets/icons/writing.svg"
import { slugify } from "utils/utilityFunctions"

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
      <Container>
        <h1 style={{ marginTop: "4%" }}>{mdx.frontmatter.title}</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "10px",
          }}
        >
          <img
            src={Pen}
            style={{ margin: "10px 10px 10px 0px" }}
            width="30px"
            alt="writing logo"
          />
          <div>
            <span>{mdx.frontmatter.date}</span> by{" "}
            <span>{mdx.frontmatter.author}</span>
          </div>
        </div>
        <div>
          <ul>
            {mdx.frontmatter.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <span>{tag}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Container>
    </Layout>
  )
}

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
