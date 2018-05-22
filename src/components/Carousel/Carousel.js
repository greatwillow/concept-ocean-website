import React, { Component } from 'react';
import Img from 'gatsby-image';

import './carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  // ============================ SLIDE TRANSITION FUNCTIONS =============================
  goToSlide = index => {
    this.setState({
      activeIndex: index
    });
  };

  goToPreviousSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;

    if (index < 1) {
      index = this.props.slides.length;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  };

  goToNextSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;

    if (index === this.props.slides.length - 1) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  };

  // ============================ RENDER FUNCTIONS =============================
  renderCarouselSlides = slides => {
    return slides.map((slide, index) => {
      return (
        <div
          key={index}
          className={
            index == this.state.activeIndex
              ? 'carousel-slide carousel-slide-active'
              : 'carousel-slide'
          }
        >
          {/* ============================ CHEVRON LEFT ============================= */}

          <div
            className="carousel-arrow carousel-arrow-left"
            onClick={e => this.goToPreviousSlide(e)}
          >
            <Img sizes={{ ...this.props.iconChevronLeft }} />
          </div>

          {/* ============================ SLIDE IMAGE ============================= */}

          <Img
            className="carousel-slide-image"
            sizes={{ ...slide.childImageSharp.sizes }}
          />

          {/* ============================ CHEVRON RIGHT ============================= */}

          <div
            className="carousel-arrow carousel-arrow-right"
            onClick={e => this.goToNextSlide(e)}
          >
            <Img sizes={{ ...this.props.iconChevronRight }} />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="carousel-main-container">
        <div className="carousel-inner-container">
          {/* ============================ CAROUSEL SLIDES ============================= */}

          {this.renderCarouselSlides(this.props.slides)}

          {/* ============================ CAROUSEL BOTTOM INDICATOR ============================= */}
        </div>
        <div
          className="carousel-indicators"
          style={{ width: `${this.props.slides.length * 80}px` }}
        >
          {this.props.slides.map((slide, index) => (
            <div
              key={index}
              className={
                index == this.state.activeIndex
                  ? 'carousel-indicator carousel-indicator-active'
                  : 'carousel-indicator'
              }
              onClick={e => this.goToSlide(index)}
            >
              <Img style={{ width: '60px' }} sizes={{ ...slide.childImageSharp.sizes }} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
