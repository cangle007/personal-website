import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupStore from './redux/setupStore';
import createBrowserHistory from 'history/createBrowserHistory';

import HomeContainer from './redux/containers/HomeContainer';
import HeaderContainer from './redux/containers/HeaderContainer';
import SliderContainer from './redux/containers/SliderContainer';
import DisplayAllProjectsContainer from './redux/containers/DisplayAllProjectsContainer';
import AboutMeContainer from './redux/containers/AboutMeContainer';
import ProjectPokemonBattleContainer from './redux/containers/ProjectPokemonBattleContainer';
import ProjectToDosContainer from './redux/containers/ProjectToDosContainer';
import ProjectResponsiveWebContainer from './redux/containers/ProjectResponsiveWebContainer';
import ProjectPixelArtContainer from './redux/containers/ProjectPixelArtContainer';
import ProjectUserProfileContainer from './redux/containers/ProjectUserProfileContainer';
import ProjectGmailInboxContainer from './redux/containers/ProjectGmailInboxContainer';
import ResumeContainer from './redux/containers/ResumeContainer';

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
                path="/Gmail-Inbox"
                component={ProjectGmailInboxContainer}
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
                path="/projects"
                component={DisplayAllProjectsContainer}
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
              <Route
                exact
                path="/resume"
                component={ResumeContainer}
                history={history}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
