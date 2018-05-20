import React, { Component } from 'react';
import Link from 'gatsby-link';

import './header-menu.scss';

class HeaderMenu extends Component {
  render() {
    return (
      <div className="main-header-menu-container" onClick={this.props.toggleMenu}>
        <Link to="/about/" className="menu-item-container">
          <div>About</div>
        </Link>
        <Link to="/dev-projects/" className="menu-item-container">
          <div>Dev Projects</div>
        </Link>
        <Link to="/contact/" className="menu-item-container">
          <div>Contact</div>
        </Link>
      </div>
    );
  }
}

export default HeaderMenu;
