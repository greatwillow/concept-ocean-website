import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import Header from '../components/Header/Header';
import './main-layout.scss';

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Concept Ocean"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <div className="logo-outer-container">
      <div className="logo-text">
        C_<br />_O
      </div>
    </div>
    <div className="title-container">
      <div className="title-text">Concept Ocean</div>
      <div className="subtitle-text">Projects of Gregory Denys</div>
    </div>
    <Img
      title="Background image"
      style={{
        position: 'absolute',
        left: '0',
        top: '250px',
        width: '100%',
        height: '40%',
        backgroundColor: '#f2f7fa',
        paddingTop: '250px',
        zIndex: '-2'
      }}
      alt="View of a calm ocean washed in pink"
      sizes={{
        ...data.backgroundImage.childImageSharp.sizes,
        aspectRatio: 1 / 1
      }}
    />

    <Header
      conceptOceanIcon={data.conceptOceanIcon.childImageSharp.sizes}
      circleMenuIcon={data.circleMenuIcon.childImageSharp.sizes}
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const mainLayoutQuery = graphql`
  query MainLayoutQuery {
    backgroundImage: file(relativePath: { eq: "img/pure-ocean.png" }) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    conceptOceanIcon: file(relativePath: { eq: "img/concept-ocean-icon.png" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    circleMenuIcon: file(relativePath: { eq: "img/circle-menu-icon.png" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
