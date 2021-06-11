/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
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
