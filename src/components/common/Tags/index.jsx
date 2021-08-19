import React from "react"
import { slugify } from "utils/utilityFunctions"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

export const TagsList = () => {
  const data = useStaticQuery(graphql`
    query allTags {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  return (
    <Wrapper>
      <div style={{ position: "sticky", top: 20 }}>
        <h4>TOP CATEGORIES</h4>
        <ul>
          {data.allMdx.group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${slugify(tag.fieldValue)}`}>
                <span>
                  {tag.fieldValue} <Count>{tag.totalCount}</Count>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0rem 2rem;
  flex: 1;
  ul {
    margin: 0px;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      letter-spacing: 1px;
      font-size: 14px;
      font-weight: normal;
      background-color: #ff0066;
      padding: 3px 6px;
      margin: 5px;
      span {
        color: white;
      }
    }
  }

  @media (max-width: 960px) {
    padding: 2rem;
  }
`

const Count = styled.span`
  font-size: small;
  font-weight: bold;
  background-color: #2f2e41;
  padding: 1px 4px;
`
