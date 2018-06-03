import React, { Component } from 'react';

import HeaderComponent from './HeaderComponent';
import HeaderImageComponent from './HeaderImageComponent';
import Parallax01Component from './Parallax01Component';
import FooterComponent from './FooterComponent';
//import Recommendation01Component from './Recommendation01Component';
//import Recommendation02Component from './Recommendation02Component';
import SliderComponent from './SliderComponent';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  render() {
    return (
      <div className="container">
        <HeaderComponent />

        <HeaderImageComponent />

        <Parallax01Component />
        <SliderComponent />

        <FooterComponent />
      </div>
    );
  }
}
