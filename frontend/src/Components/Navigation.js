import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { logUserOut } from "../actions/authActions.js";

class Navigation extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logUserOut();
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="navbar">
          <Nav.Link className="navLink" href="/">
            Home
          </Nav.Link>
          {this.props.userReducer.loggedIn ? (
            <Nav.Link className="navLink" href="/user">
              {this.props.userReducer.username}
            </Nav.Link>
          ) : (
            ""
          )}
          {!this.props.userReducer.loggedIn ? (
            <Nav.Link className="navLink" href="/login">
              Login
            </Nav.Link>
          ) : (
            ""
          )}
          {!this.props.userReducer.loggedIn ? (
            <Nav.Link className="navLink" href="/registration">
              Register
            </Nav.Link>
          ) : (
            ""
          )}
          {this.props.userReducer.loggedIn ? (
            <Nav.Link className="navLink" onClick={this.onLogout}>
              Logout
            </Nav.Link>
          ) : (
            ""
          )}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    errorReducer: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: (e) => dispatch(logUserOut(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
