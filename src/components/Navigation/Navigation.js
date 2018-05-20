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

    const NavSpacer = () => (
      <div
        className={
          this.props.headerBackgroundShown
            ? 'navigation-spacer-backlit'
            : 'navigation-spacer'
        }
      >
        |
      </div>
    );

    return (
      <div className="navigation-list">
        <NavItem to="/about/" title="About" />
        {/* <NavSpacer /> */}
        <NavItem to="/dev-projects/" title="Dev Projects" />

        {/* <NavSpacer /> */}
        {/* <NavItem to="/other-projects/" title="Other Projects" /> */}
        <NavItem to="/contact/" title="Contact" />
      </div>
    );
  }
}

export default Navigation;
