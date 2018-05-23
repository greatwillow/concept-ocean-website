import React, { Component } from 'react';
import CommonPageContainer from '../../components/CommonPageContainer/CommonPageContainer';
import RadialBarChart from '../../components/RadialBarChart/RadialBarChart';
import BarChart from '../../components/BarChart/BarChart';
import FocusAreas from '../../components/FocusAreas/FocusAreas';
import ContactForm from '../../components/ContactForm/ContactForm';
import Img from 'gatsby-image';

import {
  languageSkillsData,
  javascriptSkillsData,
  relatedTechSkillsData
} from '../../data/aboutPageData';
import '../../styles/base.scss';
import './about.scss';

class AboutPage extends Component {
  render() {
    return (
      <CommonPageContainer>
        <div>
          {/* ============================ SECTION - HEADER ============================= */}

          <section id="about-head-section">
            <Img
              className="profile-image"
              sizes={{
                ...this.props.data.profileImage.childImageSharp.sizes,
                aspectRatio: 1 / 1
              }}
            />
            <div className="about-name-and-title-container">
              Gregory Denys
              <br />
              <div className="about-title-container">Full Stack Javascript Developer</div>
            </div>
          </section>
          <hr />

          {/* ============================ SECTION - SUMMARY ============================= */}

          <section className="about-section-container page-section-spacing">
            <div className="page-section-title">Summary</div>
            <div className="page-section-text">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a software developer with a
                background knowledge coming from both University and personal studies.
                When working on projects, I am passionate about making beautiful and
                engaging experiences that communicate to the user in a clear and effective
                way. My background is firmly planted in both the sciences and arts and I
                draw from each field as part of the development process.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technically, I am interested in
                working with elegant solutions that look to optimize performance as well
                as user and developer experience. My focus is on React, Redux, React
                Native, Node.Js, and other technologies centered around this stack. Other
                technologies I am exploring include Gatsby.Js, GraphQL and Rx.Js.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As part of a team, I aim to bring
                value to those I work with through every interaction while always being
                happy to listen to and work with the ideas of everyone involved.
              </p>
            </div>
          </section>
          <hr />

          {/* ============================ SECTION - AREAS OF FOCUS ============================= */}

          <section className="about-section-container page-section-spacing">
            <div className="page-section-title">Areas of Focus</div>
            <FocusAreas />
          </section>
          <hr />

          {/* ============================ SECTION - LANGUAGE SKILLS ============================= */}

          <section className="about-section-container about-chart-section-container page-section-spacing">
            <div className="page-section-title">Language Skills</div>
            <RadialBarChart ref="radialBarChartRef" data={languageSkillsData} />
          </section>
          <hr />

          {/* ============================ SECTION - JAVASCRIPT SKILLS ============================= */}

          <section className="about-section-container about-chart-section-container page-section-spacing">
            <div className="page-section-title">Javascript Skills</div>
            <BarChart
              data={javascriptSkillsData}
              fillColor={'#40c4b4'}
              height={`${javascriptSkillsData.length * 40 + 100}px`}
            />
          </section>
          <hr />

          {/* ============================ SECTION - OTHER RELATED TECH SKILLS ============================= */}

          <section className="about-section-container about-chart-section-container page-section-spacing">
            <div className="page-section-title">Related Tech Skills</div>
            <BarChart
              data={relatedTechSkillsData}
              fillColor={'#00404e'}
              height={`${relatedTechSkillsData.length * 40 + 100}px`}
            />
          </section>
          <hr />

          {/* ============================ SECTION - FINISH ============================= */}

          <section className="about-section-container page-section-spacing">
            <div className="page-section-title">Go Further</div>
            <div className="page-section-text">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; When I'm not engaged in software or
                busy thinking about ideas to change our world, I can often be found
                travelling, rock-climbing, playing music, or enjoying my time learning
                about others and the world around me. If you're curious to learn more, I
                would be happy to hear from you. Feel free to send a message and I will
                get back to you soon.
              </p>
            </div>
            <ContactForm />
          </section>
        </div>
      </CommonPageContainer>
    );
  }
}

export default AboutPage;

export const aboutPageQuery = graphql`
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
