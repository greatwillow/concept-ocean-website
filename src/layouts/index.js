import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Header from '../components/Header/Header';
import SiteMetaInformation from './SiteMetaInformation';

import './main-layout.scss';

class MainLayout extends Component {

  componentDidMount = () => {
      this.setBackground();
  }

  componentWillUpdate = () => {
      this.setBackground();
  }

  setBackground = () => {
    if(window.location.pathname === '/'){
      document.getElementsByTagName("BODY")[0].style.backgroundImage = 'none';
      document.getElementsByTagName("BODY")[0].style.backgroundColor = '#f2f7fa';
    } else {
      document.getElementsByTagName("BODY")[0].style.backgroundImage = 'linear-gradient(rgb(241,247,250), rgb(0,64,78))';
    }
  }

  render() {
    return (
      <div>
        <SiteMetaInformation siteMetadata={this.props.data.siteMetadata.siteMetadata} />
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
            ...this.props.data.backgroundImage.childImageSharp.sizes,
            aspectRatio: 1 / 1
          }}
        />

        <Header
          iconConceptOcean={this.props.data.iconConceptOcean.childImageSharp.sizes}
          iconCircleMenu={this.props.data.iconCircleMenu.childImageSharp.sizes}
          iconCross={this.props.data.iconCross.childImageSharp.sizes}
        />
        <div>{this.props.children()}</div>
      </div>
    );
  }
}

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.func
};

export const mainLayoutQuery = graphql`
  query MainLayoutQuery {
    siteMetadata: site {
      siteMetadata {
        title
        url
        description
        author {
          name
        }
      }
    }
    backgroundImage: file(relativePath: { eq: "img/pure-ocean.png" }) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    iconConceptOcean: file(relativePath: { eq: "img/icon-concept-ocean.png" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    iconCircleMenu: file(relativePath: { eq: "img/icon-circle-menu.png" }) {
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
