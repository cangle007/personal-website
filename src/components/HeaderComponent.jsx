import React, { Component } from 'react';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-grid">
          <div id="full-name-logo">
            <a href="/" id="logo-link">
              CANG <span id="lastName">LE</span>
            </a>
          </div>
          <div className="navi-grid" id="navi">
            <a id="navi-home" className="naviLink" href="/">
              Home
            </a>
            <a id="navi-about" className="naviLink" href="/about">
              About
            </a>
            <a id="navi-contact" className="naviLink" href="/resume">
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
