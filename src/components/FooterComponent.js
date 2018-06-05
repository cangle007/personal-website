import React, { Component } from 'react';

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer-container">
        <div className="footer-grid">
          <div id="footer-connect">
            <p>CONNECT</p>
            <br />
            <p>
              <a href="mailto:cang.b.le@gmail.com">Email Me</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/cangle/">LinkedIn</a>
            </p>
            <p>
              <a href="https://github.com/cangle007">GitHub</a>
            </p>
          </div>
          <div id="footer-create">
            <p>CREATE</p>
            <p>
              "Perfection is achieved, not when there <br /> is nothing more to
              add, but when there is nothing <br />left to take away."
            </p>
          </div>
        </div>
      </div>
    );
  }
}
