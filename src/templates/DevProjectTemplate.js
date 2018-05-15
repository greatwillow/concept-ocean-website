import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './dev-project-template.scss';

const DevProjectTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Helmet title={`Project - ${post.frontmatter.title}`} />
      <div>{post.frontmatter.title}</div>
    </div>
  );
};

export default DevProjectTemplate;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
