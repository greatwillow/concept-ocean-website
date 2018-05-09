import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import CommonPageContainer from "../../components/CommonPageContainer/CommonPageContainer";
import "./projects.css";

export default class Projects extends Component {
  render() {
    return (
      <CommonPageContainer>
        <p>Project Page</p>
        {/* <div> 
        {data.projects.edges.map(({ node }) => {
          console.log("NODE ",node);
          console.log("NODE name ",node.name);
  
          return (<div key={node.name} ><p>{node.name} node</p></div>);
        })}
      </div> */}
        {console.log("DATA IS ", this.props.data, "AND this is ", this)}
        <div className="image-container">
          <Img
            className="image-styling"
            sizes={{
              ...this.props.data.captainImage.childImageSharp.sizes,
              aspectRatio: 1 / 1
            }}
          />
        </div>
      </CommonPageContainer>
    );
  }
}

export const projectQuery = graphql`
  query GatsbyImageSampleQuery {
    captainImage: file(relativePath: { eq: "pages/projects/shipCaptain.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
  # query AllFileQuery {
  #   allFile {
  #     edges {
  #       node {
  #         name,
  #         relativePath
  #       }
  #     }
  #   }
  # }
`;

/*
export const query = graphql`
  query IndexQuery {
    projects: allFile(
      filter: { extension: { eq: "md" }, sourceInstanceName: { eq: "projects" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              # title
              # date(formatString: "DD MMMM, YYYY")
              thumbnail {
                childImageSharp {
                  sizes(maxWidth: 400) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
    # summary: allFile(filter: { id: { regex: "/summary/" } }) {
    #   edges {
    #     node {
    #       childMarkdownRemark {
    #         html
    #       }
    #     }
    #   }
    # }
    # mugshot: imageSharp(id: { regex: "/mugshot.jpg/" }) {
    #   sizes(maxWidth: 630) {
    #     ...GatsbyImageSharpSizes
    #   }
    # }
  }
`;
*/
