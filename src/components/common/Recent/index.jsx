import React, { useContext } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { ThemeContext } from "providers/ThemeProvider"
import { Container, Card } from ".."
import styled from "styled-components"

export const Recent = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper as={Container}>
      <Info>
        <div>
          <h3 style={{ marginBottom: "10px" }}>
            Following are my recent blogs
          </h3>
          <p>
            I write about Data Science, Statistics, Programming, Machine
            Learning & some more related topics.{" "}
            <Link to="/blogs">
              <span>Click here</span>
            </Link>
          </p>
        </div>
      </Info>
      <hr style={{ marginBottom: "3%", backgroundColor: "GrayText" }} />
      <StaticQuery
        query={recentPostsQuery}
        render={data => (
          <Grid>
            {data.allMdx.edges.map(({ node }) => (
              <Item key={node.id} theme={theme}>
                <Link to={node.fields.slug}>
                  <GatsbyImage
                    image={
                      node.frontmatter.featureImage.childImageSharp
                        .gatsbyImageData
                    }
                    alt="feature images"
                  />
                </Link>
                <Card theme={theme}>
                  <div style={{ marginBottom: 5 }}>
                    <span>{node.frontmatter.date}</span> <span>-</span>{" "}
                    <span>{node.frontmatter.author}</span>
                  </div>
                  <hr
                    style={{ margin: "4px 0px", backgroundColor: "GrayText" }}
                  />
                  <Link to={node.fields.slug}>
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
                  <p>{node.frontmatter.description}</p>
                </Card>
              </Item>
            ))}
          </Grid>
        )}
      />
    </Wrapper>
  )
}

//Styled Components
const Wrapper = styled.div`
  padding: 0rem 2rem;
  width: 60%;

  @media (max-width: 960px) {
    width: 100%;
  }
`
const Info = styled.div`
  h3 {
    font-size: 35px;
  }

  p {
    font-size: 20px;
  }

  p span {
    color: white;
    font-size: 18px;
    font-weight: bold;
    background-color: blue;
    padding: 4px;
    &:hover {
      color: black;
      background-color: yellow;
      text-decoration: none;
    }
  }
`

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4,
  h2 {
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};
  }

  .tag {
    color: #fff;
  }

  h2 {
    &:hover {
      color: #007bff;
      text-decoration: none;
    }
  }

  p {
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#c7c7c7")};
  }
`

const recentPostsQuery = graphql`
  query recentPostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            author
            date(formatString: "MMM Do YYYY")
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
