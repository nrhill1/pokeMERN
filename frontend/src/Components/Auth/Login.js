import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions.js";

class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: null
  };

  static propTypes = {
    loggedIn: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  };

  render() {
    return (
      <div className="regForm">
        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.authReducer.loggedIn,
  error: state.error
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userInfo) => dispatch(login(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
