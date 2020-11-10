import './App.css';
import React, { Component} from 'react'
import SearchBar from './Components/SearchBar.js'
import Login from './Components/Login.js'
import Navigation from './Components/Navigation.js'
import Register from './Components/Register.js'
import Profile from './Components/Profile.js'
import { Switch, Route } from 'react-router-dom'
import {connect} from 'react-redux'




class App extends Component {

  render() {
    return (
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
    );
  }
}

export default App

