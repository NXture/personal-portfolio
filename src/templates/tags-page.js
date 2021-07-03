import React from "react"
import { Link } from "gatsby"
import { Layout } from "components/common"
import { slugify } from "utils/utilityFunctions"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout>
      <div>
        <ul>
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                {tag} <span>{tagPostCounts[tag]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TagsPage
