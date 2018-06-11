import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupStore from './redux/setupStore';
import createBrowserHistory from 'history/createBrowserHistory';

import HomeContainer from './redux/containers/HomeContainer';
import HeaderContainer from './redux/containers/HeaderContainer';
import SliderContainer from './redux/containers/SliderContainer';
import ProjectsContainer from './redux/containers/ProjectsContainer';
import AboutMeContainer from './redux/containers/AboutMeContainer';
import CompaniesWorkedContainer from './redux/containers/CompaniesWorkedContainer';
import ProjectPokemonBattleContainer from './redux/containers/ProjectPokemonBattleContainer';
import ProjectToDosContainer from './redux/containers/ProjectToDosContainer';
import ToggleProjectsContainer from './redux/containers/ToggleProjectsContainer';
import ProjectResponsiveWebContainer from './redux/containers/ProjectResponsiveWebContainer';
import ProjectPixelArtContainer from './redux/containers/ProjectPixelArtContainer';
import ProjectUserProfileContainer from './redux/containers/ProjectUserProfileContainer';

const history = createBrowserHistory();
const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={HomeContainer}
                history={history}
              />
              <Route
                exact
                path="/PokemonBattle"
                component={ProjectPokemonBattleContainer}
                history={history}
              />
              <Route
                exact
                path="/ToDos"
                component={ProjectToDosContainer}
                history={history}
              />
              <Route
                exact
                path="/ResponsiveWeb"
                component={ProjectResponsiveWebContainer}
                history={history}
              />
              <Route
                exact
                path="/PixelArt"
                component={ProjectPixelArtContainer}
                history={history}
              />
              <Route
                exact
                path="/UserProfile"
                component={ProjectUserProfileContainer}
                history={history}
              />
              <Route
                exact
                path="/toggleprojects"
                component={ToggleProjectsContainer}
                history={history}
              />
              <Route
                exact
                path="/about"
                component={AboutMeContainer}
                history={history}
              />
              <Route
                exact
                path="/company"
                component={CompaniesWorkedContainer}
                history={history}
              />
              <Route
                exact
                path="/projects"
                component={ProjectsContainer}
                history={history}
              />
              <Route
                exact
                path="/slider"
                component={SliderContainer}
                history={history}
              />
              <Route
                exact
                path="/header"
                component={HeaderContainer}
                history={history}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
