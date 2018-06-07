import React, { Component } from 'react';

export default class ProjectsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  render() {
    let { projects } = this.props;
    return (
      <div className="projects-wrapper">
        <div className="projects-container">
          {projects &&
            projects.map((obj, i) => {
              return (
                <a href={'/' + obj.name} className={obj.name}>
                  <div id="listOfProjects" key={i}>
                    <img alt={obj.name} src={obj.file} />
                    <h2>{obj.name}</h2>
                    <p>{obj.display}</p>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    );
  }
}
