import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux';

class Navigation extends Component {

  render() {
    return(
      <div>
        <Navbar bg="dark" variant="dark" className="navbar">
          <Nav.Link className="navLink" href="/">Home</Nav.Link>
          { localStorage.token ? <Nav.Link className="navLink" href="/user">Profile</Nav.Link>: ""}
          <Nav.Link className="navLink" href="/login">Login</Nav.Link>
          <Nav.Link className="navLink" href="/register">Register</Nav.Link>
          <Nav.Link className="navLink">Logout</Nav.Link>
        </Navbar>
      </div>
    )
  }
}

export default Navigation