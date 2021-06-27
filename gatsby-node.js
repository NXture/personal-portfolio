/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
//const { slugify } = require("./src/utils/utilityFunctions")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              author
              tags
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/single-post.js`),
      context: { id: node.id },
    })
  })
}

// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query {
//       allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//         edges {
//           node {
//             id
//             slug
//           }
//         }
//       }
//     }
//   `)

//   // Create Paginated pages for posts

//   const postPerPage = 3

//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     actions.createPage({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: require.resolve("./src/templates/allPosts.js"),
//       context: {
//         limit: postPerPage,
//         skip: i * postPerPage,
//         numPages,
//         currentPage: i + 1,
//       },
//     })
//   })

//   //Create single blog posts

//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.slug
//     const id = edge.node.id
//     actions.createPage({
//       path: slug,
//       component: require.resolve(`./src/templates/singlePost.js`),
//       context: { id },
//     })
//   })
// }
