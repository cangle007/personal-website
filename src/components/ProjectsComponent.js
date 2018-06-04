import React, { Component } from 'react';
// import pokemonBattle from '../images/pokemonBattle.jpg';
// import userProfile from '../images/userProfile.jpg';
// import toDos from '../images/toDos.jpg';
// import gmailInbox from '../images/gmailInbox.jpg';
// import pixelArt from '../images/pixelArt.jpg';
//import responsiveWeb from '../images/responsiveWeb.jpg';

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
      <div className="wrapper-projects">
        <div id="left-side" />
        <div id="middle-side">
          {projects &&
            projects.map((obj, i) => {
              return (
                <div className={obj.name} id={i} key={i}>
                  <img className="visible" alt={obj.name} src={obj.file} />
                  <div className={obj.hover} id="hidden">
                    <h2>{obj.name}</h2>
                    <p>{obj.display}</p>
                  </div>
                </div>
              );
            })}
          {/* <div id="1">
            <img alt="pokemon app" src={pokemonBattle} />
          </div>
          <div id="2">
            <img alt="afero" src={userProfile} />
          </div>
          <div id="3">
            <img alt="pokemon app" src={gmailInbox} />
          </div>
          <div id="4">
            <img alt="pokemon app" src={pixelArt} />
          </div>
          <div id="5">
            <img alt="pokemon app" src={toDos} />
          </div>
          <div id="6">
            <img alt="pokemon app" src={responsiveWeb} />
          </div>
          <div id="7">
            <img alt="pokemon app" src={pokemonBattle} />
          </div>
          <div id="8">
            <img alt="pokemon app" src={pokemonBattle} />
          </div>
          <div id="9">
            <img alt="pokemon app" src={pokemonBattle} />
          </div> */}
        </div>
        <div id="right-side" />
      </div>
    );
  }
}
