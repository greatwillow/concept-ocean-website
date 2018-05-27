import React, { Component } from 'react';
import './focus-areas.scss';

class FocusAreas extends Component {
  render() {
    return (
      <div className="focus-main-container">
        <div className="inner-container-1 focus-container">
          <div className="percent-text percent-text-1">Front-End</div>
          {/* <div className="description-text">Front-End</div> */}
        </div>
        <div className="inner-container-2 focus-container">
          <div className="percent-text percent-text-2">Mobile</div>
          {/* <div className="description-text">Mobile</div> */}
        </div>
        <div className="inner-container-3 focus-container">
          <div className="percent-text percent-text-3">Back-End</div>
          {/* <div className="description-text">Back-End</div> */}
        </div>
      </div>
    );
  }
}

export default FocusAreas;
