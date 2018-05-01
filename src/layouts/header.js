import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

// import './css/index.css'
// import './css/bootstrap.min.css'
// import './css/template.css'
import './css/main.css'
import './css/header.css'

class Header extends Component {
    constructor() {
        super() 
        this.state = {
            headerBackgroundColor: 'green'
        }
    }

    componentDidMount() {
    //SETTING HEADER DYNAMIC PROPERTIES
    window.onscroll = () => {
        if(window.scrollY > 50) {
            this.setState({
                headerBackgroundColor: 'blue'
            })
        }
        if(window.scrollY < 50) {
            this.setState({
                headerBackgroundColor: 'transparent'
            })
        }
    }
    }


  render() {
    return (
      <header 
        className="header-outer-container" 
        style={{
          backgroundColor: this.state.headerBackgroundColor}}>
      {/* <div className="container-fluid">                  */}
        {/* <div className="inner-header"> */}
          {/* <a className="inner-brand" href="/">
            <img className="brand-dark" src="img/aria_logo_black.png"  alt=""/>
            <img className="brand-light" src="img/aria_logo_white.png"  alt=""/>
          </a> */}
        {/* </div>
            <div className="inner-navigation collapse">
              <div className="inner-navigation-inline">
                <div className="inner-nav">
                  <ul>
                    <li ><a href="/">Home</a>           
                    </li>
                    <li ><a href="team/">Meet Our Team</a>
                    </li>
                    <li ><a href="pricing/">Pricing</a>
                    </li>
                    <li ><a href="contact/">Contact Us</a>
                    </li>
                    <a className="btn btn-lg btn-outline btn-circle btn-dark" href="#">Learn More
                    </a>
                                                                      
                  </ul>
                </div>
                <a className="btn btn-circle btn-brand" href="https://launch.apparia.ca/e7b73c2de5">Request a Demo</a>
              </div>
            </div>
          <div className="extra-nav">
          <ul>
            <li>
                <a className="open-offcanvas" href="#">
                    <span>Menu</span>
                    <span className="fa fa-bars">
                    </span>
                </a>
            </li>
          </ul>
        </div>
        <div className="nav-toggle">
          <a href="#" data-toggle="collapse" data-target=".inner-navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
        </div> */}

      {/* </div> */}
    </header>
    );
  }
}

export default Header