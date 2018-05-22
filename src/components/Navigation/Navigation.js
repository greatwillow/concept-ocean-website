import React, { Component } from 'react';
import Link from 'gatsby-link';

import './navigation.scss';

class Navigation extends Component {
  render() {
    const NavItem = ({ title, to }) => (
      <Link
        to={to}
        className={
          this.props.headerBackgroundShown ? 'navigation-link-backlit' : 'navigation-link'
        }
      >
        {title}
      </Link>
    );

    return (
      <div className="navigation-list">
        <NavItem to="/about/" title="About" />
        <NavItem to="/dev-projects/" title="Dev Projects" />
        <NavItem to="/contact/" title="Contact" />
      </div>
    );
  }
}

export default Navigation;
