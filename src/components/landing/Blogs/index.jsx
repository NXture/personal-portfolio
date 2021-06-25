import React, { useContext } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { ThemeContext } from "providers/ThemeProvider"
import { Container, Card, TitleWrap } from "components/common"
import { Wrapper, Grid, Item, Content, Stats, Languages } from "./styles"

export const Blogs = () => {
  const { theme } = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query blogs {
      allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
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
            <Card theme={theme}>
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
