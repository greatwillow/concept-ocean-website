import React, { Component } from 'react';
import Img from 'gatsby-image';

import './carousel.scss';

class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? 'carousel-indicator carousel-indicator-active'
              : 'carousel-indicator'
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

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
        <li
          key={index}
          className={
            index == this.state.activeIndex
              ? 'carousel-slide carousel-slide-active'
              : 'carousel-slide'
          }
        >
          <div key={index}>
            <Img sizes={{ ...slide.childImageSharp.sizes }} />
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="carousel-container">
        <div className="carousel">
          {/* ============================ CHEVRON LEFT ============================= */}

          <a
            href="#"
            className="carousel-arrow carousel-arrow-left"
            onClick={e => this.goToPreviousSlide(e)}
          >
            <Img sizes={{ ...this.props.iconChevronLeft }} />
          </a>

          {/* ============================ CAROUSEL SLIDES ============================= */}

          <ul className="carousel-slides">
            {this.renderCarouselSlides(this.props.slides)}
          </ul>

          {/* ============================ CHEVRON RIGHT ============================= */}

          <a
            href="#"
            className="carousel-arrow carousel-arrow-right"
            onClick={e => this.goToNextSlide(e)}
          >
            <Img sizes={{ ...this.props.iconChevronRight }} />
          </a>

          {/* ============================ CAROUSEL BOTTOM INDICATOR ============================= */}

          <ul className="carousel-indicators">
            {this.props.slides.map((slide, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex == index}
                onClick={e => this.goToSlide(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Carousel;
