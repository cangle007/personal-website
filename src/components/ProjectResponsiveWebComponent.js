import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import responsiveWeb01 from '../images/responsiveWeb01.png';
import responsiveWeb02 from '../images/responsiveWeb02.png';
import ToggleProjectsComponent from './ToggleProjectsComponent';

export default class ProjectResponsiveWebComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  render() {
    return (
      <div className="responsiveWeb-wrapper">
        <HeaderComponent />
        <div className="responsiveWeb-container">
          <div id="responsiveWeb-header">
            <h1>Responsive Web</h1>
            <h3>App. based on 2-dimensional css-grid system</h3>
            <div id="responsiveWeb-techStatus">
              <ul>
                <li>
                  <strong>CLIENT:</strong> Personal Project
                </li>
                <li>
                  <strong>WEBSITE:</strong>
                  <a href="https://github.com/cangle007/cssGrids-responsive-website">
                    GitHub
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>TECHNOLOGIES:</strong> React-Redux, Scss/Sass
                </li>
                <li>
                  <strong>SERVICES:</strong> Webdesign, Front-end development,
                </li>
              </ul>
            </div>
          </div>
          <div id="responsiveWeb-body1">
            <img alt="responsiveWeb01" src={responsiveWeb01} />
          </div>
          <div id="responsiveWeb-body2">
            <img alt="responsiveWeb02" src={responsiveWeb02} />
          </div>
        </div>
        <ToggleProjectsComponent
          nextComponent={'PixelArt'}
          previousComponent={'ToDos'}
        />
        <FooterComponent />
      </div>
    );
  }
}
