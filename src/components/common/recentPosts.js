import React, { useContext } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { ThemeContext } from "providers/ThemeProvider"
import { Container, Card } from "."
import styled from "styled-components"
import { slugify } from "utils/utilityFunctions"

export const TopPosts = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper as={Container}>
      <StaticQuery
        query={recentPostsQuery}
        render={data => (
          <Grid>
            <Item theme={theme}>
              <Card theme={theme}>
                <Info>
                  <div>
                    <h3>Following are my recent blogs!</h3>
                    <p>
                      I write a lot more about Data Science, Statistics,
                      Programming, Machine Learning & some more related topic.
                    </p>
                    <Link to="/blogs">
                      <p>
                        <span>Click here for more!</span>
                      </p>
                    </Link>
                  </div>
                </Info>
              </Card>
            </Item>
            {data.allMdx.edges.map(({ node }) => (
              <Item key={node.id} theme={theme}>
                <GatsbyImage
                  image={
                    node.frontmatter.featureImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt="feature images"
                />
                <Card theme={theme}>
                  <div style={{ marginBottom: 5 }}>
                    <span>{node.frontmatter.date}</span>{" "}
                    <span role="img" aria-labelledby="divider">
                      ◾
                    </span>{" "}
                    <span>{node.frontmatter.author}</span>
                  </div>
                  <hr style={{ margin: "4px 0px" }} />
                  <Link to={node.fields.slug}>
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
                  <p>{node.frontmatter.description}</p>
                  <ul>
                    {node.frontmatter.tags.map(tag => (
                      <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                          <span className="tag">{tag}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
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
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }

  p span {
    text-decoration: underline;
    &:hover {
      color: #007bff;
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

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
  }

  ul li {
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: normal;
    background-color: #ff0066;
    border-radius: 5px;
    padding: 3px 6px;
    margin: 5px;
    box-shadow: rgba(149, 157, 165, 0.8) 2px 2px 1px;
  }
`

const recentPostsQuery = graphql`
  query recentPostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
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
