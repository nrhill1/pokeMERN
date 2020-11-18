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
    isAuth: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { errorReducer, isAuth } = this.props;
    if (errorReducer !== prevProps.errorReducer) {
      // Check for register error
      if (errorReducer.id === "LOGIN_FAIL") {
        this.setState({ msg: errorReducer.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (isAuth) {
      this.props.history.push("/");
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
    // Attempt Login
    this.props.login(this.state);
  };

  render() {
    return (
      <div className="regForm">
        {this.state.msg ? (
          <Alert color="danger">{this.state.msg.msg}</Alert>
        ) : null}
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
  isAuth: state.authReducer.isAuth,
  errorReducer: state.errorReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userInfo) => dispatch(login(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
