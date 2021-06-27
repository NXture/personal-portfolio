import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Layout } from "components/common"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
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
      }
    }
  }
`
