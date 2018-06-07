import React, { Component } from 'react';
import pokemonBattling from '../images/pokemonBattling.png';
import pokemonCreateDecks from '../images/pokemonCreateDecks.png';
import pokemonBattleNow from '../images/pokemonBattleNow.png';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import giphy from '../images/giphy.gif';

export default class ProjectPokemonBattleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder'
    };
  }

  render() {
    return (
      <div className="PokemonBattle-wrapper">
        <HeaderComponent />
        <div className="PokemonBattle-container">
          <div id="PokemonBattle-header">
            <h1>PokemonBattle</h1>
            <h3>Real-time user interface game </h3>
            <div id="PokemonBattle-techStatus">
              <ul>
                <li>
                  <strong>CLIENT:</strong> Personal Project
                </li>
                <li>
                  <strong>WEBSITE:</strong>
                  <a href="https://github.com/cangle007/react-pokemon-frontend">
                    GitHub
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>TECHNOLOGIES:</strong> React-Redux, Semantic UI,
                  PostgreSQL, Socket.io
                </li>
                <li>
                  <strong>SERVICES:</strong> Webdesign, Front-end development,
                  Back-end development
                </li>
              </ul>
            </div>
          </div>
          <div id="PokemonBattle-body2">
            <img alt="pokemonCreateDecks" src={pokemonCreateDecks} />
          </div>
          <div id="PokemonBattle-body3">
            <img alt="pokemonBattleNow" src={pokemonBattleNow} />
            <br />
            <br />
            <img alt="giphy" src={giphy} />
          </div>
          <div id="PokemonBattle-body1">
            <img alt="pokemonBattling" src={pokemonBattling} />
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
