import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import './image-card.scss';

class ProjectCard extends Component {
  render() {
    console.log('PROPS ARRRR ', this.props);
    return (
      <Link to={this.props.slug}>
        <div className="image-card-container">
          <div className="image-card-image-container">
            <Img sizes={{ ...this.props.thumbnail }} />
          </div>
          <div className="image-card-text">
            <div className="image-card-text-title">{this.props.title}</div>
            <hr />
            <div className="image-card-text-description">
              {this.props.shortDescription}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ProjectCard;
