import React, { Component } from 'react';
import pokeBattleWeb from '../images/pokeBattleWeb.png';
import pokeCreateWeb from '../images/pokeCreateWeb.png';
import pokeDisplayWeb from '../images/pokeDisplayWeb.png';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ToggleProjectsComponent from './ToggleProjectsComponent';

import giphy from '../images/giphy.gif';

export default class ProjectPokemonBattleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'plaeholder',
      currentComponent: 'pokemonBattle'
    };
  }

  render() {
    return (
      // <div className="wrapper">
      //   <div className="header-container">
      //     <p id="home">HOME</p>
      //     <p id="login">LOGIN</p>
      //     <p id="about">ABOUT ME</p>
      //   </div>
      //   <div className="banner-container">
      //     <div id="partOne">partOne</div>
      //     <div id="partTwo">partTwo</div>
      //     <div id="partThree">partThree</div>
      //   </div>
      // </div>
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
          <div id="PokemonBattle-body1">
            <div id="pokemonBattleDisplay01">
              <img alt="pokemonBattleNow" src={pokeBattleWeb} />
            </div>
            <div id="pokemonBattleDisplay02">
              <img alt="giphy" src={giphy} />
            </div>
          </div>
          <div id="PokemonBattle-body2">
            <img alt="pokemonBattling" src={pokeDisplayWeb} />
          </div>
          <div id="PokemonBattle-body3">
            <img alt="pokemonCreateDecks" src={pokeCreateWeb} />
          </div>
        </div>
        <ToggleProjectsComponent
          currentComponent={this.state.currentComponent}
          nextComponent={'todos'}
        />
        <FooterComponent />
      </div>
    );
  }
}
