import React, { Component } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import Img from 'gatsby-image';

import './image-card-grid.scss';

class ImageCardGrid extends Component {
  getAdjustedIndex = index => {
    let adjustedIndex = index + 1;
    let tempIndex = adjustedIndex;
    if (tempIndex > 3) {
      adjustedIndex = tempIndex % 3;
    }
    return adjustedIndex;
  };

  renderItem = (node, index) => {
    return (
      <ImageCard
        key={node.frontmatter.title}
        thumbnail={node.frontmatter.thumbnail.childImageSharp.sizes}
        title={node.frontmatter.title}
        slug={node.fields.slug}
        shortDescription={node.frontmatter.shortDescription}
      />
    );
  };

  render() {
    const dataArray = this.props.dataArray;
    return (
      <div className="image-grid-row">
        {/* FIRST COLUMN */}
        <div className="image-grid-column">
          {dataArray.map(({ node }, index) => {
            let adjustedIndex = this.getAdjustedIndex(index);
            if (
              adjustedIndex % 1 === 0 &&
              adjustedIndex % 2 !== 0 &&
              adjustedIndex % 3 !== 0
            ) {
              return <div key={index}>{this.renderItem(node, index)}</div>;
            }
          })}
        </div>
        {/* SECOND COLUMN */}
        <div className="image-grid-column">
          {dataArray.map(({ node }, index) => {
            let adjustedIndex = this.getAdjustedIndex(index);
            if (adjustedIndex % 2 === 0 && adjustedIndex % 3 !== 0) {
              return <div key={index}>{this.renderItem(node, index)}</div>;
            }
          })}
        </div>
        {/* THIRD COLUMN */}
        <div className="image-grid-column">
          {dataArray.map(({ node }, index) => {
            let adjustedIndex = this.getAdjustedIndex(index);
            if (adjustedIndex % 3 === 0) {
              return <div key={index}>{this.renderItem(node, index)}</div>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default ImageCardGrid;
