import React, { Component } from "react";
import CommonPageContainer from "../../components/CommonPageContainer/CommonPageContainer";
import RadialBarChart from "../../components/RadialBarChart/RadialBarChart";
import BarChart from "../../components/BarChart/BarChart";
import Img from "gatsby-image";

import "./about.css";

export default class DevResume extends Component {
  render() {
    return (
      <CommonPageContainer>
        {/* <div className="about-profile-section-container"> */}
        <Img
          className="profile-image"
          sizes={{
            ...this.props.data.profileImage.childImageSharp.sizes,
            aspectRatio: 1 / 1
          }}
        />
        <div>
          <p
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%,0)",
              fontSize: "20px"
            }}
          >
            Gregory Denys
          </p>
        </div>
        {/* </div> */}
        <div>
          <BarChart />
          <RadialBarChart />
        </div>
      </CommonPageContainer>
    );
  }
}

export const aboutQuery = graphql`
  query AboutPageQuery {
    profileImage: file(
      relativePath: { eq: "pages/about/gregory-denys-profile-photo.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
