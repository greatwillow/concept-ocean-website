import React, { Component } from 'react';
import Img from 'gatsby-image';

import './modal.scss';

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  };

  handleKeyUp = e => {
    const keys = {
      27: () => {
        e.preventDefault();
        window.history.back();
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  handleOutsideClick = e => {
    if (this.modal) {
      if (!this.modal.contains(e.target)) {
        window.history.back();
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  };

  render() {
    return (
      <div className="modal-overlay-container">
        <div className="modal-container" ref={node => (this.modal = node)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
