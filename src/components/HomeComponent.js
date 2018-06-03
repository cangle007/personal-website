import React, { Component } from 'react';

import HeaderComponent from './HeaderComponent';
import HeaderImageComponent from './HeaderImageComponent';
import Parallax01Component from './Parallax01Component';
import FooterComponent from './FooterComponent';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  placeholderFunction = () => {
    return this.state.placeholder;
  };

  render() {
    return (
      <div className="container">
        <HeaderComponent />

        <HeaderImageComponent />

        <Parallax01Component />

        <FooterComponent />
      </div>
    );
  }
}
