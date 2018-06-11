import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ToggleProjectsComponent from './ToggleProjectsComponent';
import userProfile02 from '../images/userProfile02.gif';
import userProfile01 from '../images/userProfile01.png';

export default class ProjectUserProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  render() {
    return (
      <div className="userProfile-wrapper">
        <HeaderComponent />
        <div className="userProfile-container">
          <div id="userProfile-header">
            <h1>User Profile</h1>
            <h3>
              Dynamic layout user’s Profile Editor based on a view style
              property
            </h3>
            <div id="userProfile-techStatus">
              <ul>
                <li>
                  <strong>CLIENT:</strong> AFERO
                </li>
                <li>
                  <strong>WEBSITE:</strong>
                  <a href="https://github.com/cangle007/userProfile-editor">
                    GitHub
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>TECHNOLOGIES:</strong> React-Redux, Scss/Sass,
                  Anime.css, Styled-Components
                </li>
                <li>
                  <strong>SERVICES:</strong> Webdesign, Front-end development,
                </li>
              </ul>
            </div>
          </div>
          <div id="userProfile-body1">
            <img alt="responsiveWeb01" src={userProfile01} />
          </div>
          <div id="userProfile-body2">
            <img alt="responsiveWeb02" src={userProfile02} />
          </div>
        </div>
        <ToggleProjectsComponent
          nextComponent={'Gmail-Inbox'}
          previousComponent={'ToDos'}
        />
        <FooterComponent />
      </div>
    );
  }
}
