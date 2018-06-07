import React, { Component } from 'react';
import { Icon, Divider } from 'semantic-ui-react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

export default class AboutMeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ariaExpanded: false
    };
  }

  render() {
    return (
      <div className="wrapper-AboutMe">
        <HeaderComponent />
        <div className="aboutMe-container">
          <div className="aboutMe-grid">
            <div id="aboutMe-img">
              {/* <img alt="cang" id="aboutMe-photo" src={imgMe} /> */}
            </div>
            <div id="aboutMe-bio">
              <h3>About Cang Le</h3>
              <div>
                My name is Cang Le, and I’m a software engineer with full-stack
                development experience using popular technologies such as
                React-Redux, PostgreSQL, and Node.js.
              </div>
              <br />
              <div>
                I got into tech because I was attracted to this industry where I
                could really flex my creativity in an environment where I could
                build things from nothing, solve problems with logic, and learn
                new technologies to apply to my professional work and side
                projects.
              </div>
              <br />
              <div>
                I recently completed my 5 months internship at Outside2Inside,
                where I collaborated with other Engineers to convert the
                organization’s legacy website into React framework. I was in
                charged of architecting the Front-end and Back-end using React
                framework and Node.JS because of my professional training of
                React framework.
              </div>
              <br />
              <div>
                Completed my BS Degree in Finance/Economics at San Jose State
                University and Certificate of Web Development Immersive Program.
                I have one year of experience, and currently looking for new
                opportunity at innovative company where I could really make an
                impact and show my creativity and passion.
              </div>
            </div>
          </div>
        </div>
        <Divider className="expertise-divider" horizontal>
          EXPERTISE AND EXPERIENCE
        </Divider>
        <div className="expertise-container">
          <div className="expertise-grid">
            <div className="Front-End">
              <ul>
                <Icon name="desktop" size="huge" />
                <h3>Front-End</h3>
                <li>React-Redux</li>
                <li>Semantic UI</li>
                <li>HTML/CSS</li>
                <li>SCSS/SASS</li>
              </ul>
            </div>
            <div className="Back-End">
              <ul>
                <Icon name="cogs" size="huge" />
                <h3>Back-End</h3>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Knex.js</li>
                <li>PostgreSQL</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="Others">
              <ul>
                <Icon name="puzzle" size="huge" />
                <h3>Others</h3>
                <li>MySQL</li>
                <li>Linux</li>
                <li>Chai</li>
                <li>Socket.io</li>
                <li>Webpack</li>
                <li>AWS(RDS & EB)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="parallax01-container">
          <div className="parallax02-mgs">
            <h1>San Jose, Ca</h1>
          </div>
        </div>

        <div className="funFacts-container">
          <div id="funFacts">
            <p>
              When I am not coding I train at the gym to shape up for the
              Ironman Triathlon, and occasionally skydive. I believe in having
              an efficient workflow and constantly work toward the inbox zero.
            </p>
            <br />
            <p id="getInTouch">Get in touch!</p>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
