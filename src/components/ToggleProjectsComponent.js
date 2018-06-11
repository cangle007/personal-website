import React, { Component } from 'react';

export default class ToggleProjectsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { previousComponent, nextComponent } = this.props;
    return (
      <div className="toggleProjects-wrapper">
        <div className="toggleProjects-container">
          <a href={'/' + previousComponent} id="previousProject">
            <p>PREVIOUS PROJECT</p>
            <p>{previousComponent}</p>
          </a>
          <div id="currentProject" />
          <a href={'/' + nextComponent} id="nextProject">
            <p>NEXT PROJECT</p>
            <p>{nextComponent}</p>
          </a>
        </div>
      </div>
    );
  }
}
