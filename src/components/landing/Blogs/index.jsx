import React, { useContext } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { ThemeContext } from "providers/ThemeProvider"
import { Container, Card } from "components/common"
import { Wrapper, Grid, Item } from "./styles"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "utils/utilityFunctions"

export const Blogs = () => {
  const { theme } = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query blogs {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              date(formatString: "MMM Do YYYY")
              author
              tags
              featureImage {
                childImageSharp {
                  gatsbyImageData(transformOptions: { fit: COVER })
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges: posts } = data.allMdx

  return (
    <Wrapper as={Container}>
      <h2>Blog Posts</h2>
      <Grid>
        {posts.map(({ node: post }) => (
          <Item key={post.id} theme={theme}>
            <GatsbyImage
              image={
                post.frontmatter.featureImage.childImageSharp.gatsbyImageData
              }
              alt="feature images"
            />
            <Card theme={theme}>
              <div>
                <span>{post.frontmatter.date}</span> by{" "}
                <span>{post.frontmatter.author}</span>
              </div>
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.frontmatter.description}</p>
              <ul>
                {post.frontmatter.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                      <span>{tag}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
