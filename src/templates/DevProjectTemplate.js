import React, { Component } from 'react';
import Helmet from 'react-helmet';
import CommonPageContainer from '../components/CommonPageContainer/CommonPageContainer';
import Img from 'gatsby-image';
import Modal from '../components/Modal/Modal';
import Carousel from '../components/Carousel/Carousel';

import './dev-project-template.scss';

class DevProjectTemplate extends Component {
  //CHANGE SCROLLING BEHAVIOUR OF BODY ON MOUNT
  componentDidMount = () => {
    document.body.style.overflowY = 'hidden';
  };
  componentWillUnmount = () => {
    document.body.style.overflowY = 'scroll';
  };

  closeModal = () => {
    if (window) {
      window.history.back();
    }
  };

  render() {
    const post = this.props.data.markdownRemark;
    const projectImages = this.props.data.markdownRemark.frontmatter.images;
    const iconChevronLeft = this.props.data.iconChevronLeft.childImageSharp.sizes;
    const iconChevronRight = this.props.data.iconChevronRight.childImageSharp.sizes;
    const iconCross = this.props.data.iconCross.childImageSharp.sizes;

    return (
      <Modal>
        {/* ============================ HEAD ============================= */}

        <div className="template-head-container">
          <div className="template-title-text">{post.frontmatter.title}</div>
          <div onClick={() => this.closeModal()}>
            <Img className="icon-cross" sizes={{ ...iconCross }} />
          </div>
        </div>

        {/* ============================ BODY / SUMMARY ============================= */}

        <div className="template-body-container">
          <div className="template-summary-containter">
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

          {/* ============================ BODY / CAROUSEL ============================= */}
          <div className="template-carousel-container">
            <Carousel
              slides={projectImages}
              iconChevronLeft={iconChevronLeft}
              iconChevronRight={iconChevronRight}
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
        images {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 400) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    iconChevronLeft: file(relativePath: { eq: "img/icon-chevron-left.png" }) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    iconChevronRight: file(relativePath: { eq: "img/icon-chevron-right.png" }) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    iconCross: file(relativePath: { eq: "img/icon-cross.png" }) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
