import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import todosgiphy from '../images/todosgiphy.gif';
import ToggleProjectsComponent from './ToggleProjectsComponent';

export default class ProjectToDosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="toDos-wrapper">
        <HeaderComponent />
        <div className="toDos-container">
          <div id="todos-header">
            <h1>ToDos</h1>
            <h3>A general reminder application</h3>
            <div id="toDos-techStatus">
              <ul>
                <li>
                  <strong>CLIENT:</strong> Personal Project
                </li>
                <li>
                  <strong>WEBSITE:</strong>
                  <a href="https://github.com/cangle007/todoList">GitHub</a>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>TECHNOLOGIES:</strong> React-Redux, Scss/Sass
                </li>
                <li>
                  <strong>SERVICES:</strong> Webdesign, Front-end development,
                </li>
              </ul>
            </div>
          </div>
          <div id="toDos-body1">
            <img alt="pokemonCreateDecks" src={todosgiphy} />
          </div>
        </div>
        <ToggleProjectsComponent
          nextComponent={'ResponsiveWeb'}
          previousComponent={'PokemonBattle'}
        />
        <FooterComponent />
      </div>
    );
  }
}
