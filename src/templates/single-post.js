import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout, Seo } from "components/common"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { slugify } from "utils/utilityFunctions"
import { Disqus } from "gatsby-plugin-disqus"
import styled from "styled-components"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx }, pageContext }) {
  const siteUrl = "https://varunsrivasta.dev"

  const DisqusConfig = {
    url: siteUrl + pageContext.slug,
    identifier: mdx.id,
    title: mdx.frontmatter.title,
  }
  return (
    <Layout>
      <Seo />
      <GatsbyImage
        style={{ display: "flex", justifyContent: "center", margin: "0% 4%" }}
        image={mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData}
        alt="feature images"
      />
      <PostContainer>
        <h1>{mdx.frontmatter.title}</h1>
        <Profile>
          <div style={{ alignItems: "center" }}>
            <StaticImage
              className="profile_img"
              quality="100"
              src="../images/varun_profile_posts.jpg"
              alt="varun srivasta"
            />
          </div>
          <div>
            <div>
              <span>{mdx.frontmatter.date}</span> <span>-</span>{" "}
              <span>{mdx.frontmatter.author}</span>
            </div>
            <hr />
            <div>
              <Tags>
                {mdx.frontmatter.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                      <span>{tag}</span>
                    </Link>
                  </li>
                ))}
              </Tags>
            </div>
          </div>
        </Profile>

        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <div style={{ marginTop: "10%" }}>
          <Disqus config={DisqusConfig} />
        </div>
      </PostContainer>
    </Layout>
  )
}

//Styled Components
const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr 11fr;
  grid-gap: 0px;

  .profile_img {
    min-width: 50px;
    max-width: 60px;
    border-radius: 50%;
    margin-left: 5%;
  }
  @media (max-width: 960px) {
    grid-gap: 4px;
  }
`

const PostContainer = styled.div`
  margin: 0% 20%;
  h1 {
    margin-top: 4%;
  }

  hr {
    background-color: gray;
    margin: 4px 0px;
  }

  @media (max-width: 880px) {
    margin: 0% 5%;
  }
`

const Tags = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  margin-left: 0px;

  li {
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: normal;
    background-color: #ff0066;
    padding: 2px 4px;
    margin: 5px;
    span {
      color: #fff;
    }
  }
`

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        featureImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              height: 400
            )
          }
        }
      }
    }
  }
`
