import React from "react"
import { Link } from "gatsby"

const Post = ({ title, author, slug, date, tags }) => {
  return (
    <div>
      <Link to={slug}>{title}</Link>
      <div>
        <span>{date}</span> by <span>{author}</span>
      </div>
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default Post
