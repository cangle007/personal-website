import React, { Component } from 'react';
import { Icon, Divider } from 'semantic-ui-react';

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
            <a href="mailto:cang.b.le@gmail.com">
              <Icon name="mail square" size="huge" />
            </a>
            <a href="https://www.linkedin.com/in/cangle/">
              <Icon name="linkedin" size="huge" />
            </a>
            <a href="https://github.com/cangle007">
              <Icon name="github" size="huge" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
