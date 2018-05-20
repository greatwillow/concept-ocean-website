const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const devProjectSlug = createFilePath({
      node,
      getNode,
      basePath: `dev-projects`
    });

    createNodeField({
      node,
      name: `slug`,
      value: devProjectSlug
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log('CREATING PAGE ', node, 'with slug ', node.fields.slug);
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/DevProjectTemplate.js`),
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
