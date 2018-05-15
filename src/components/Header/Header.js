import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Navigation from '../Navigation/Navigation';

import './header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      headerBackgroundShown: false,
      headerBackgroundColor: 'transparent',
      subHeader1BackgroundColor: 'transparent',
      subHeader2BackgroundColor: 'transparent',
      subHeader3BackgroundColor: 'transparent',
      subHeader4BackgroundColor: 'transparent',
      subHeader5BackgroundColor: 'transparent'
    };
  }

  componentDidMount() {
    //SETTING HEADER DYNAMIC PROPERTIES
    window.onscroll = () => {
      if (window.scrollY > 50) {
        this.setState({
          headerBackgroundColor: 'rgba(0,64,78,0.9)',
          headerBackgroundShown: true
        });
      } else {
        this.setState({
          headerBackgroundColor: 'transparent',
          headerBackgroundShown: false
        });
      }

      if (window.scrollY > 100 && window.scrollY < 425) {
        this.setState({
          subHeader1BackgroundColor: 'rgba(0,64,78, 0.5)'
        });
      } else {
        this.setState({
          subHeader1BackgroundColor: 'transparent'
        });
      }
      if (window.scrollY > 150 && window.scrollY < 400) {
        this.setState({
          subHeader2BackgroundColor: 'rgba(0,64,78, 0.4)'
        });
      } else {
        this.setState({
          subHeader2BackgroundColor: 'transparent'
        });
      }
      if (window.scrollY > 200 && window.scrollY < 375) {
        this.setState({
          subHeader3BackgroundColor: 'rgba(0,64,78, 0.3)'
        });
      } else {
        this.setState({
          subHeader3BackgroundColor: 'transparent'
        });
      }
      if (window.scrollY > 250 && window.scrollY < 350) {
        this.setState({
          subHeader4BackgroundColor: 'rgba(0,64,78, 0.2)'
        });
      } else {
        this.setState({
          subHeader4BackgroundColor: 'transparent'
        });
      }
      if (window.scrollY > 300 && window.scrollY < 325) {
        this.setState({
          subHeader5BackgroundColor: 'rgba(0,64,78, 0.1)'
        });
      } else {
        this.setState({
          subHeader5BackgroundColor: 'transparent'
        });
      }
    };
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <header
          className="header-outer-container header-animation"
          style={{
            backgroundColor: this.state.headerBackgroundColor
          }}
        >
          <div className="header-left-container" />
          <div className="header-center-container">
            <Navigation headerBackgroundShown={this.state.headerBackgroundShown} />
          </div>
          <div className="header-right-container" />
        </header>
        <div
          className="sub-header-outer-container sub-header-1 header-animation"
          style={{ backgroundColor: this.state.subHeader1BackgroundColor }}
        />
        <div
          className="sub-header-outer-container sub-header-2 header-animation"
          style={{ backgroundColor: this.state.subHeader2BackgroundColor }}
        />
        <div
          className="sub-header-outer-container sub-header-3 header-animation"
          style={{ backgroundColor: this.state.subHeader3BackgroundColor }}
        />
        <div
          className="sub-header-outer-container sub-header-4 header-animation"
          style={{ backgroundColor: this.state.subHeader4BackgroundColor }}
        />
        <div
          className="sub-header-outer-container sub-header-5 header-animation"
          style={{ backgroundColor: this.state.subHeader5BackgroundColor }}
        />
      </div>
    );
  }
}

export default Header;
