import React, { Component } from 'react';

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <footer className="footer">
          <div className="connect">
            <p>CONNECT</p>
            <ul>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cangle/">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/cangle007">Github</a>
              </li>
            </ul>
          </div>
          <div className="create">
            <p>CREATE</p>
            <p>
              "Perfection is achieved, not when there <br /> is nothing more to
              add, but when there is nothing <br />left to take away."
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
