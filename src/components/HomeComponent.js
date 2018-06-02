import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
        <Header />
        <Footer />
      </div>
    );
  }
}
