import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'


import './App.css';
import Github from './Github';
import OpenWeatherMap from './OpenWeatherMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Ain't no party like an</h3>
          <h1>API Party</h1>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub</NavLink>
          </li>
          <li>
            <NavLink to="/openweathermap">OpenWeatherMap</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/openweathermap" component = {OpenWeatherMap} />
          <Route
            render={() => (
              <p>To get started, click one of the links above.</p>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
