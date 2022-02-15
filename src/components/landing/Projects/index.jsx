import React, { useContext } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "providers/ThemeProvider"
import { Container, Card, TitleWrap } from "components/common"
import Star from "components/common/Icons/Star"
import Fork from "components/common/Icons/Fork"
import { Wrapper, Grid, Item, Content, Stats, Languages } from "./styles"
import styled from "styled-components"

export const Projects = () => {
  const { theme } = useContext(ThemeContext)
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper as={Container}>
      <h2>Projects</h2>
      <Info>
        <p>
          Following are my recent Projects.{" "}
          <Link target="_blank" to={"https://github.com/NXture"}>
            <span>Click Here</span>
          </Link>{" "}
          for more!
        </p>
      </Info>

      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                  <div>
                    <Star color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.forkCount}</span>
                  </div>
                </Stats>
                <Stats theme={theme}>
                  <Languages>
                    {node.languages.nodes.map(({ id, name }) => (
                      <span key={id}>{name}</span>
                    ))}
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}

const Info = styled.div`
  p {
    font-size: 20px;
  }

  p span {
    color: white;
    font-size: 18px;
    font-weight: bold;
    background-color: black;
    padding: 4px;
    &:hover {
      color: black;
      background-color: white;
      text-decoration: none;
    }
  }
`
