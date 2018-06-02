import React, { Component } from 'react';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ariaExpanded: false
    };
  }

  headerToggle = () => {
    //let { ariaExpanded } = this.state;
    this.setState(prevState => ({
      ariaExpanded: !prevState.ariaExpanded
    }));
  };

  render() {
    let { ariaExpanded } = this.state;
    return (
      <div className="wrapper-header">
        <header>
          <div className="header-inner">
            <span id="logo">
              <a id="logo-link">
                Cang <span id="lassName">Le</span>
              </a>
            </span>
            <nav id="nav">
              <ul>
                <a class="navLink" href="#">
                  Home
                </a>
                <a class="navLink" href="#">
                  About
                </a>
                <a class="navLink" href="#">
                  Contacts
                </a>
                <a class="navLink" href="#">
                  Linkedin
                </a>
                {/* <button
                  aria-expanded={ariaExpanded}
                  aria-controls="menu-list"
                  onClick={this.headerToggle}>
                  {ariaExpanded ? (
                    <span className="close">X</span>
                  ) : (
                    <span className="open">☰</span>
                  )}
                </button> */}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
