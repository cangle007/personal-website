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
                <a href={'/' + obj.projectname} className={obj.projectname}>
                  <div id="listOfProjects" key={i}>
                    <img alt={obj.projectname} src={obj.image} />
                    <h2>{obj.projectname}</h2>
                    <p>{obj.type}</p>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    );
  }
}
