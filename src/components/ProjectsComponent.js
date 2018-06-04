import React, { Component } from 'react';
import pokemon02 from '../images/pokemon02.jpg';
import afero02 from '../images/afero02.jpg';
import toDos02 from '../images/toDos02.jpg';
import inbox02 from '../images/inbox02.jpg';
import pixel from '../images/pixel.jpg';
import responsiveweb from '../images/responsiveweb.jpg';

export default class ProjectsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  render() {
    return (
      <div className="wrapper-projects">
        <div id="left-side" />
        <div id="middle-side">
          <div id="1">
            <img alt="pokemon app" src={pokemon02} />
          </div>
          <div id="2">
            <img alt="afero" src={afero02} />
          </div>
          <div id="3">
            <img alt="pokemon app" src={inbox02} />
          </div>
          <div id="4">
            <img alt="pokemon app" src={pixel} />
          </div>
          <div id="5">
            <img alt="pokemon app" src={toDos02} />
          </div>
          <div id="6">
            <img alt="pokemon app" src={responsiveweb} />
          </div>
          <div id="7">
            <img alt="pokemon app" src={pokemon02} />
          </div>
          <div id="8">
            <img alt="pokemon app" src={pokemon02} />
          </div>
          <div id="9">
            <img alt="pokemon app" src={pokemon02} />
          </div>
        </div>
        <div id="right-side" />
      </div>
    );
  }
}
