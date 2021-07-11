import React from "react"
import { slugify } from "utils/utilityFunctions"
import { graphql, useStaticQuery, Link } from "gatsby"

const TagsList = () => {
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
    <div>
      <ul>
        {data.allMdx.group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tag/${slugify(tag.fieldValue)}`}>
              <span>
                {tag.fieldValue} ({tag.totalCount})
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagsList
