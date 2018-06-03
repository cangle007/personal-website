import React, { Component } from 'react';

export default class Parallax01Component extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section className="wrapper-parallax01" id="parallax01">
          <div className="inner">
            <div className="parallax01-mgs">
              <h1>Creating Stories</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
