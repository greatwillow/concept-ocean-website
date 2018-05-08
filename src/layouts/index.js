import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from "gatsby-image";

import Header from '../components/Header/Header';
import './css/main.css'

const TemplateWrapper = ({children, data}) => (
      <div>
      <Helmet
        title="Concept Ocean"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Img
        title="Background image"
        style={{
          position: "absolute",
          left: '0',
          top: '-100px',
          width: "100%",
          height: "100%",
          zIndex: '-1'
        }}
        alt="View of a calm ocean washed in pink"
        sizes={data.imageSharp.sizes}
      />
      
      <Header />
      <div className="subtitle-text-container">
        <div className="subtitle-text">
           creative projects of gregory denys
          </div>
        </div>
      <div>      
        {children()}
      </div>
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}



export default TemplateWrapper

export const mainLayoutQuery = graphql`
  query BackgroundImageQuery {
    imageSharp(id: { regex: "/main-logo-with-backdrop/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`