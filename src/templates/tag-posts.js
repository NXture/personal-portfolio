import { Link, graphql } from "gatsby"
import React, { useContext } from "react"
import { Layout } from "components/common"
import { ThemeContext } from "providers/ThemeProvider"
import { Container, Card } from "components/common"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "utils/utilityFunctions"
import { Wrapper, Grid, Item } from "components/landing/Blogs/styles"

const TagPosts = ({ data, pageContext }) => {
  const { theme } = useContext(ThemeContext)
  const { tag } = pageContext
  const { totalCount } = data.allMdx
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <Wrapper as={Container}>
        <h2>{pageHeader}</h2>
        <Grid>
          {data.allMdx.edges.map(({ node }) => (
            <Item key={node.id} theme={theme}>
              <GatsbyImage
                image={
                  node.frontmatter.featureImage.childImageSharp.gatsbyImageData
                }
              />
              <Card theme={theme}>
                <div>
                  <span>{node.frontmatter.date}</span> by{" "}
                  <span>{node.frontmatter.author}</span>
                </div>
                <Link to={node.fields.slug}>
                  <h2>{node.frontmatter.title}</h2>
                </Link>
                <p>{node.frontmatter.description}</p>
                <ul>
                  {node.frontmatter.tags.map(tag => (
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
    </Layout>
  )
}

export const tagQuery = graphql`
  query($tag: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
`
export default TagPosts
