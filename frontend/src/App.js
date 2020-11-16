import "./App.css";
import React, { Component } from "react";
import SearchBar from "./Components/SearchBar.js";
import Login from "./Components/Login.js";
import Navigation from "./Components/Navigation.js";
import Register from "./Components/Register.js";
import Profile from "./Components/Profile.js";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">PokéMERN</header>
        {!this.props.user.loggedIn ? (
          <h2>Sign Up or Login!</h2>
        ) : (
          <h2>Welcome, {this.decoded.username}</h2>
        )}
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/user" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    error: state.error
  };
};

export default connect(mapStateToProps, null)(App);
