import React, { Component } from 'react';
import CommonPageContainer from '../../components/CommonPageContainer/CommonPageContainer';
import ContactForm from '../../components/ContactForm/ContactForm';
import Img from 'gatsby-image';

import './contact.scss';
import '../../styles/base.scss';

class ContactPage extends Component {
  render() {
    return (
      <CommonPageContainer>
        <div className="page-head-title">Get in Contact</div>
        <hr />
        <div className="page-section-spacing">
          <div className="contact-icon-container">
            <a href="https://github.com/greatwillow" target="_blank">
              <Img
                className="contact-icon"
                sizes={{
                  ...this.props.data.githubIcon.childImageSharp.sizes,
                  aspectRatio: 1 / 1
                }}
              />
            </a>
            <a href="https://www.linkedin.com/in/gregory-denys/" target="_blank">
              <Img
                className="contact-icon"
                sizes={{
                  ...this.props.data.linkedInIcon.childImageSharp.sizes,
                  aspectRatio: 1 / 1
                }}
              />
            </a>
          </div>
          <div className="page-section-text">
            <p>
              If you're interested in working together or learning more, I am happy to get
              in touch. Feel free to reach me on one of the above platforms or send me a
              message below and I will be sure to get back to you soon.
            </p>
          </div>
          <ContactForm />
        </div>
      </CommonPageContainer>
    );
  }
}

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPageQuery {
    githubIcon: file(relativePath: { eq: "img/icon-github.png" }) {
      childImageSharp {
        sizes(maxWidth: 300) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    linkedInIcon: file(relativePath: { eq: "img/icon-linkedin.png" }) {
      childImageSharp {
        sizes(maxWidth: 300) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
