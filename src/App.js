import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupStore from './redux/setupStore';
import createBrowserHistory from 'history/createBrowserHistory';

import HomeContainer from './redux/containers/HomeContainer';
import FooterContainer from './redux/containers/FooterContainer';
import HeaderContainer from './redux/containers/HeaderContainer';

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
