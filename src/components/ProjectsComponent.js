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
                <div className={obj.name} id="listOfProjects" key={i}>
                  <img className="visible" alt={obj.name} src={obj.file} />
                  <div className={obj.hover} id="hidden">
                    <h2>{obj.name}</h2>
                    <p>{obj.display}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
