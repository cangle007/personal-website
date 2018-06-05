import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupStore from './redux/setupStore';
import createBrowserHistory from 'history/createBrowserHistory';

import HomeContainer from './redux/containers/HomeContainer';
import FooterContainer from './redux/containers/FooterContainer';
import HeaderContainer from './redux/containers/HeaderContainer';
import Recommendation01Container from './redux/containers/Recommendation01Container';
import SliderContainer from './redux/containers/SliderContainer';
import ProjectsContainer from './redux/containers/ProjectsContainer';
import AboutMeContainer from './redux/containers/AboutMeContainer';

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
                path="/home"
                component={HomeContainer}
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
                path="/"
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
                path="/recon"
                component={Recommendation01Container}
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
                path="/footer"
                component={FooterContainer}
                history={history}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
