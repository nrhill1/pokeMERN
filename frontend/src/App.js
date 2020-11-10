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
        {
          !this.props.userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {this.props.userReducer.user.username}</h1>
        }
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
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps)(App);

