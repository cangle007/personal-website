import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import HeaderImageComponent from './HeaderImageComponent';
import Parallax01Component from './Parallax01Component';
import FooterComponent from './FooterComponent';
import SliderComponent from './SliderComponent';
import ProjectsComponent from './ProjectsComponent';
import CompaniesWorked from './CompaniesWorkedComponent';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  render() {
    let { projects } = this.props;
    return (
      <div className="container">
        <HeaderComponent />
        <HeaderImageComponent />
        <ProjectsComponent projects={projects} />
        <Parallax01Component />
        <CompaniesWorked />
        <SliderComponent />
        <FooterComponent />
      </div>
    );
  }
}
