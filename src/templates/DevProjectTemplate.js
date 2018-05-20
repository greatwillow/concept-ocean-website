import React, { Component } from 'react';
import Helmet from 'react-helmet';
import CommonPageContainer from '../components/CommonPageContainer/CommonPageContainer';
import Img from 'gatsby-image';
import Modal from '../components/Modal/Modal';

import './dev-project-template.scss';

class DevProjectTemplate extends Component {
  //CHANGE SCROLLING BEHAVIOUR OF BODY ON MOUNT
  componentDidMount = () => {
    document.body.style.overflowY = 'hidden';
  };
  componentWillUnmount = () => {
    document.body.style.overflowY = 'scroll';
  };

  render() {
    const post = this.props.data.markdownRemark;
    return (
      <Modal>
        <div className="template-main-container">
          <div className="template-head-container">
            <div className="template-title-text">{post.frontmatter.title}</div>
          </div>
          <div className="template-body-container">
            <Img
              className="template-summary-image"
              sizes={{ ...post.frontmatter.thumbnail.childImageSharp.sizes }}
            />
            <div
              className="template-summary-excerpt"
              dangerouslySetInnerHTML={{
                __html: post.html
              }}
            />
          </div>
        </div>
      </Modal>
    );
  }
}

export default DevProjectTemplate;

export const devProjectTemplateQuery = graphql`
  query DevProjectTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 400) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      excerpt
    }
  }
`;
