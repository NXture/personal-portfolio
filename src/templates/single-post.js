import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout, Container, Seo } from "components/common"
import { GatsbyImage } from "gatsby-plugin-image"
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
        <div>
          <span>{mdx.frontmatter.date}</span>{" "}
          <span role="img" aria-labelledby="divider">
            🔰
          </span>{" "}
          <span>{mdx.frontmatter.author}</span>
        </div>
        <hr style={{ margin: "4px 0px" }} />
        <div>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "0px",
            }}
          >
            {mdx.frontmatter.tags.map(tag => (
              <li
                style={{
                  letterSpacing: 1,
                  fontSize: 12,
                  fontWeight: "bolder",
                  backgroundColor: "#ff0066",
                  borderRadius: 5,
                  padding: "3px 6px",
                  margin: "5px",
                  boxShadow: "rgba(149, 157, 165, 0.8) 2px 2px 1px",
                }}
                key={tag}
              >
                <Link to={`/tag/${slugify(tag)}`}>
                  <span style={{ color: "#fff" }}>{tag}</span>
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
