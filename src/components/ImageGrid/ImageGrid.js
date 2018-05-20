import React, { Component } from 'react';
import ImageCard from '../ImageCard/ImageCard';

import './image-grid.scss';

class ImageGrid extends Component {
  getAdjustedIndex = index => {
    let adjustedIndex = index + 1;
    let tempIndex = adjustedIndex;
    if (tempIndex > 3) {
      adjustedIndex = tempIndex % 3;
    }
    return adjustedIndex;
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
              return (
                <ImageCard
                  key={node.frontmatter.title}
                  thumbnail={node.frontmatter.thumbnail.childImageSharp.sizes}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  shortDescription={node.frontmatter.shortDescription}
                />
              );
            }
          })}
        </div>
        {/* SECOND COLUMN */}
        <div className="image-grid-column">
          {dataArray.map(({ node }, index) => {
            let adjustedIndex = this.getAdjustedIndex(index);
            if (adjustedIndex % 2 === 0 && adjustedIndex % 3 !== 0) {
              return (
                <ImageCard
                  key={node.frontmatter.title}
                  thumbnail={node.frontmatter.thumbnail.childImageSharp.sizes}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  shortDescription={node.frontmatter.shortDescription}
                />
              );
            }
          })}
        </div>
        {/* THIRD COLUMN */}
        <div className="image-grid-column">
          {dataArray.map(({ node }, index) => {
            let adjustedIndex = this.getAdjustedIndex(index);
            if (adjustedIndex % 3 === 0) {
              return (
                <ImageCard
                  key={node.frontmatter.title}
                  thumbnail={node.frontmatter.thumbnail.childImageSharp.sizes}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  shortDescription={node.frontmatter.shortDescription}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default ImageGrid;
