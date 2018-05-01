import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from "gatsby-image";
import hippyVan from "../img/HippyVan.jpg"

import Header from './header';
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
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }}
        alt="View of a calm ocean washed in pink"
        sizes={data.imageSharp.sizes}
      />
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}



export default TemplateWrapper

export const mainLayoutQuery = graphql`
  query BackgroungImageQuery {
    imageSharp(id: { regex: "/elliot-mann-pink-ocean/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`