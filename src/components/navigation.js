import React, { Component } from "react"
import Link from "gatsby-link"

import './navigation.css'

class Navigation extends Component {

    render() {
        const NavItem = ({ title, to }) => (
            <div className="navigation-item">
                <Link 
                    to={to} 
                    className={
                        this.props.headerBackgroundShown ?
                         "navigation-link-backlit" : 
                         "navigation-link"
                }>
                    {title}
                </Link>
            </div>
        )

        return (
            <div className="navigation-list">
                <NavItem to="/about/" title="About"/>
                <NavItem to="/portfolio/" title="Portfolio"/>
                <NavItem to="/resumé/" title="Resume"/>
            </div>
        )
    }
}

export default Navigation