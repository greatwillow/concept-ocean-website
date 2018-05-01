import React from "react";
import Link from "gatsby-link";

export default () => (
  <div style={{zIndex: 0, position: 'relative'}}>
    <p>Hello world from my second Gatsby page</p>
    <Link to="/">back home</Link>
  </div>
);