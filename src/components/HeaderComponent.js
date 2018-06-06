import React, { Component } from 'react';
import resume from '../images/resume08.pdf';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ariaExpanded: false
    };
  }

  // headerToggle = () => {
  //   //let { ariaExpanded } = this.state;
  //   this.setState(prevState => ({
  //     ariaExpanded: !prevState.ariaExpanded
  //   }));
  // };

  render() {
    // let { ariaExpanded } = this.state;
    return (
      <div className="header-container">
        <div className="header-grid">
          <div id="full-name-logo">
            <a href="/home" id="logo-link">
              CANG <span id="lastName">LE</span>
            </a>
          </div>
          <div className="navi-grid" id="navi">
            <a id="navi-home" className="naviLink" href="/home">
              Home
            </a>
            <a id="navi-about" className="naviLink" href="/about">
              About
            </a>
            <a id="navi-contact" className="naviLink" href={resume} download>
              Resume
            </a>
            <a
              id="navi-linkedIn"
              className="naviLink"
              href="https://www.linkedin.com/in/cangle/">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }
}
