import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ToggleProjectsComponent from './ToggleProjectsComponent';
import reactInbox from '../images/reactInbox.gif';

export default class ProjectGmailInboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="gmailInbox-wrapper">
        <HeaderComponent />
        <div className="gmailInbox-container">
          <div id="gmailInbox-header">
            <h1>Gmail Clone</h1>
            <h3>Replicating the functionality of Gmail's front-end</h3>
            <div id="gmailInbox-techStatus">
              <ul>
                <li>
                  <strong>CLIENT:</strong> Personal Project
                </li>
                <li>
                  <strong>WEBSITE:</strong>
                  <a href="https://github.com/cangle007/react-inbox">GitHub</a>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>TECHNOLOGIES:</strong> React-Redux, Storybook,
                  Bootstrap,
                </li>
                <li>
                  <strong>SERVICES:</strong> Webdesign, Front-end development,
                </li>
              </ul>
            </div>
          </div>
          <div id="gmailInbox-body1">
            <img alt="gmailInbox" src={reactInbox} />
          </div>
        </div>
        <ToggleProjectsComponent
          nextComponent={'PokemonBattle'}
          previousComponent={'UserProfile'}
        />
        <FooterComponent />
      </div>
    );
  }
}
