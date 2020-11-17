<<<<<<< HEAD
import './App.css';
import React, { Component} from 'react'
import SearchBar from './Components/SearchBar.js'
import Login from './Components/Login.js'
import Navigation from './Components/Navigation.js'
import Register from './Components/Register.js'
import Profile from './Components/Profile.js'
import { Switch, Route } from 'react-router-dom'



=======
import "./App.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import { loadUser } from "./actions/authActions.js";
import SearchBar from "./Components/SearchBar.js";
import Login from "./Components/Auth/Login.js";
import Navigation from "./Components/Navigation.js";
import Registration from "./Components/Auth/Registration.js";
import Profile from "./Components/Profile.js";
import { Switch, Route } from "react-router-dom";
>>>>>>> refux

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Navigation />
        <header className="App-header">
            PokéMERN
        </header>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/user" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
=======
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <header className="App-header">PokéMERN</header>
          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/user" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
          </Switch>
        </div>
      </Provider>
>>>>>>> refux
    );
  }
}

export default App;
