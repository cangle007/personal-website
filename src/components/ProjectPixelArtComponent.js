import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ToggleProjectsComponent from './ToggleProjectsComponent';
import pixelArtGif from '../images/pixelArtMaker.gif';
export default class ProjectPixelArtComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  render() {
    return (
      <div className="pixelArt-wrapper">
        <HeaderComponent />
        <div className="pixelArt-container">
          <div id="pixelArt-header">
            <h1>Pixel Art Maker</h1>
            <h3>Drawing tool allows users to make pixel art</h3>
            <div id="pixelArt-techStatus">
              <ul>
                <li>
                  <strong>CLIENT:</strong> Personal Project
                </li>
                <li>
                  <strong>WEBSITE:</strong>
                  <a href="https://github.com/cangle007/Pixel-Art-Maker">
                    GitHub
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>TECHNOLOGIES:</strong> Vanilla Javascript
                </li>
                <li>
                  <strong>SERVICES:</strong> Webdesign, Front-end development,
                </li>
              </ul>
            </div>
          </div>
          <div id="pixelArt-body1">
            <img alt="responsiveWeb01" src={pixelArtGif} />
          </div>
        </div>
        <ToggleProjectsComponent
          nextComponent={'UserProfile'}
          previousComponent={'ResponsiveWeb'}
        />
        <FooterComponent />
      </div>
    );
  }
}
