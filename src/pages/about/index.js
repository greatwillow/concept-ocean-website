import React, { Component } from 'react';
import CommonPageContainer from '../../components/CommonPageContainer/CommonPageContainer';
import RadialBarChart from '../../components/RadialBarChart/RadialBarChart';
import BarChart from '../../components/BarChart/BarChart';
// import TreeMap from '../../components/TreeMap/TreeMap';
import FocusAreas from '../../components/FocusAreas/FocusAreas';
import Img from 'gatsby-image';

import './about.css';

const radialData = [
  { name: 'C', pv: 30, fill: '#82ca9d' },
  { name: 'Python', pv: 40, fill: '#8dd1e1' },
  { name: 'Java', pv: 50, fill: '#83a6ed' },
  { name: 'SQL', pv: 60, fill: '#83a6ed' },
  { name: 'HTML/CSS', pv: 80, fill: '#83a6ed' },
  { name: 'Javascript', pv: 85, fill: '#8884d8' }
];

const barData = [
  {
    name: 'React',
    pv: 85
  },
  {
    name: 'React-Native',
    pv: 80
  },
  {
    name: 'Redux',
    pv: 90
  },
  {
    name: 'Vue.Js',
    pv: 80
  },
  {
    name: 'Gatsby.Js',
    pv: 75
  },
  {
    name: 'Node.Js',
    pv: 50
  },
  {
    name: 'Express.Js',
    pv: 65
  },
  {
    name: 'MongoDB',
    pv: 65
  },
  {
    name: 'PostreSQL',
    pv: 40
  },
  {
    name: 'Jest',
    pv: 40
  }
];

export default class DevResume extends Component {
  render() {
    return (
      <CommonPageContainer>
        <div className="about-page-container">
          <div className="about-profile-section-container">
            <Img
              className="profile-image"
              sizes={{
                ...this.props.data.profileImage.childImageSharp.sizes,
                aspectRatio: 1 / 1
              }}
            />
            <div
              style={{
                position: 'absolute',
                marginTop: '30px',
                left: '50%',
                transform: 'translate(-50%,0)',
                fontSize: '20px'
              }}
            >
              <div
                style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
              >
                Gregory Denys
                <br />
                <div style={{ fontSize: '15px', marginTop: '5px' }}>
                  Full Stack Javascript Developer
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="about-summary-section-container">
            <p>
              As a software developer, I am passionate about making beautiful and engaging
              experiences that communicate to the user in a clear and effective way.
              Technically, I am interested in working with elegant solutions that take
              into account performance, user experience, as well as developer experience
              of those looking at my code in the future.
            </p>
          </div>
          <div className="about-metrics-section-container">
            <p className="section-title">Areas of Focus</p>
            <FocusAreas />
            {/* <TreeMap /> */}
            <br />
            <p className="section-title">Language Skills Distribution</p>
            <RadialBarChart data={radialData} />
            <br />
            <p className="section-title">Javascript Skills Distribution</p>
            <BarChart data={barData} />
            {lorem}
          </div>
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

const lorem = `The standard Lorem Ipsum passage, used since the 1500s
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  
  1914 translation by H. Rackham
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  
  Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  
  1914 translation by H. Rackham
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.basnbflanslfaklsjfkljasdklfjaklsd"`;
