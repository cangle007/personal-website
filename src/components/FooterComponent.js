import React, { Component } from 'react';

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ariaExpanded: false
    };
  }

  render() {
    return (
      <div className="wrapper">
        <footer className="footer">
          <p>CONNECT</p>
          <ul>
            <li>Email</li>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>
        </footer>
      </div>
    );
  }
}
