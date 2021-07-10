import React from "react"
import { Link } from "gatsby"
import { Layout, Container } from "components/common"
import { slugify } from "utils/utilityFunctions"
import styled from "styled-components"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout>
      <Container>
        <Wrapper>
          <ul>
            {tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <span>
                    {tag} <Count>{tagPostCounts[tag]}</Count>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Wrapper = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      letter-spacing: 1px;
      font-size: 14px;
      font-weight: bolder;
      background-color: #ff0066;
      border-radius: 5px;
      padding: 4px 6px;
      margin: 5px;
      box-shadow: rgba(149, 157, 165, 0.8) 2px 2px 1px;
      span {
        color: #fff;
      }
    }
  }
`

const Count = styled.span`
  font-size: small;
  background-color: #2f2e41;
  padding: 1px 4px;
  border-radius: 4px;
`

export default TagsPage
