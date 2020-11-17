import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { logUserOut } from "../actions/authActions.js";
import PropTypes from "prop-types";

class Navigation extends Component {
  static propTypes = {
    isAuth: PropTypes.bool,
    logout: PropTypes.func.isRequired
  };

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
          {this.props.isAuth ? (
            <Nav.Link className="navLink" href="/user">
              Profile
            </Nav.Link>
          ) : null}
          {!this.props.isAuth ? (
            <Nav.Link className="navLink" href="/login">
              Login
            </Nav.Link>
          ) : null}
          {!this.props.isAuth ? (
            <Nav.Link className="navLink" href="/registration">
              Register
            </Nav.Link>
          ) : null}
          {this.props.isAuth ? (
            <Nav.Link className="navLink" onClick={this.onLogout}>
              Logout
            </Nav.Link>
          ) : null}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    errorReducer: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: (e) => dispatch(logUserOut(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
