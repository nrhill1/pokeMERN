import "./App.css";
import React, { Component } from "react";

import { store } from "./store.js";
import { loadUser } from "./actions/authActions.js";

import SearchBar from "./Components/SearchBar.js";
import Login from "./Components/Login.js";
import Navigation from "./Components/Navigation.js";
import Registration from "./Components/Auth/Registration.js";
import Profile from "./Components/Profile.js";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">PokéMERN</header>
        {!this.props.token ? <h2>Sign Up or Login!</h2> : <h2>Welcome, {}</h2>}
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/user" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, null)(App);
