import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

export default function Index({ data }) {
  // const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {/* <div style={{ zIndex: 1, position: 'absolute', marginTop: '650px' }}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="main-text-content-container" key={post.id}>
              </div>
            );
          })}
      </div> */}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
    hollowCircleImage: imageSharp(id: { regex: "/circle-fade-out-hollow/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    darkHollowCircleImage: imageSharp(
      id: { regex: "/circle-fade-out-hollow-darkened/" }
    ) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
