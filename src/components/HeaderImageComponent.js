import React, { Component } from 'react';

export default class HeaderImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section className="wrapper-header-img" id="header-img-1">
          <div className="inner">
            <div class="header-img-mgs">
              <h1>Developer You Can Trust</h1>
              <p>Make Website Great Again!</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
