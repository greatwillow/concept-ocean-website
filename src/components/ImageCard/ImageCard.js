import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Modal from '../Modal/Modal';

import './image-card.scss';

class ImageCard extends Component {
  render() {
    return (
      <Link to={this.props.slug} style={{ textDecoration: 'none', color: 'black' }}>
        <div>
          <div className="image-card-container">
            <div className="image-card-image-container">
              <Img sizes={{ ...this.props.thumbnail }} />
            </div>

            <div className="image-card-text">
              <div className="image-card-text-title">{this.props.title}</div>
              <hr className="image-card-horizontal-rule" />
              <div className="image-card-text-description">
                {this.props.shortDescription}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ImageCard;
