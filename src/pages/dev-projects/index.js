import React, { Component } from 'react';
import CommonPageContainer from '../../components/CommonPageContainer/CommonPageContainer';
import ImageCardGrid from '../../components/ImageCardGrid/ImageCardGrid';

import '../../styles/base.scss';
import './dev-projects.scss';

class DevProjects extends Component {
  render() {
    const allDevProjects = this.props.data.allMarkdownRemark.edges;

    return (
      <CommonPageContainer>
        <div className="page-head-title">Dev Projects</div>
        <hr />
        <div className="card-section-container">
          <ImageCardGrid dataArray={allDevProjects} showFullCard={true} />
        </div>
      </CommonPageContainer>
    );
  }
}

export default DevProjects;

export const devProjectQuery = graphql`
  query DevProjectGalleryImageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            title
            shortDescription
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
