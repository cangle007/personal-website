import React, { Component } from 'react';

export default class ProjectPokemonBattleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  render() {
    return (
      <div className="pokemonBattle-wrapper">
        <div className="pokemonBattle-container">
          <div id="pokemonBattle-header">
            header
            <h2>pokemonBattle</h2>
            <p>Real-time user interface game </p>
            {/* <p>CLIENT: Personal Project WEBSITE: GitHub</p> */}
            <div id="pokemonBattle-techStatus">
              <ul>
                <li>CLIENT: Personal Project</li>
                <li>WEBSITE: GitHub</li>
              </ul>
              <ul>
                <li>
                  TECHNOLOGIES: React-Redux, Semantic UI, PostgreSQL, Socket.io
                </li>
                <li>
                  SERVICES: Webdesign, Front-end development, Back-end
                  development
                </li>
              </ul>
            </div>
          </div>
          <div id="pokemonBattle-body1">body1</div>
          <div id="pokemonBattle-body2">body2</div>
          <div id="pokemonBattle-body3">body3</div>
          <div id="pokemonBattle-body4">body4</div>
        </div>
      </div>
    );
  }
}
