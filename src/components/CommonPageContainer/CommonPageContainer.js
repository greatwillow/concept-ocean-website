import React, { Component } from "react";
import "./common-page-container.css";

class CommonPageContainer extends Component {
  render() {
    return <div className="page-container">{this.props.children}</div>;
  }
}

export default CommonPageContainer;
