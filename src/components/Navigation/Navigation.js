import React, { Component } from "react"
import Link from "gatsby-link"

import './navigation.css'

class Navigation extends Component {

    render() {

        const NavItem = ({ title, to }) => (
            <div 
                className={
                    this.props.headerBackgroundShown ?
                    "navigation-item-backlit" : 
                    "navigation-item"
                }
            >
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
                <NavItem to="/" title="Home"/>
                <NavItem to="/about/" title="About"/>
                <NavItem to="/projects/" title="Dev Projects"/>
                <NavItem to="/dev-resume/" title="Dev Resumé"/>
            </div>
        )
    }
}

export default Navigation