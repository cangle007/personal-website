import React, { Component } from 'react';

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
    return <div className="container">HELLO</div>;
  }
}