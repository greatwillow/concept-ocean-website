import React, { Component } from 'react';
import Helmet from 'react-helmet';
import CommonPageContainer from '../components/CommonPageContainer/CommonPageContainer';

import './dev-project-template.scss';

const DevProjectTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <CommonPageContainer>
      <Helmet title={`Project - ${post.frontmatter.title}`} />
      <div>{post.frontmatter.title}</div>
    </CommonPageContainer>
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
