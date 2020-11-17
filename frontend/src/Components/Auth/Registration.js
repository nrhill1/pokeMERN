import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions.js";

class Registration extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    msg: null
  };

  static propTypes = {
    isAuth: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (this.props.isAuth) {
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="username"
              placeholder="Enter username"
              value={this.state.username}
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
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  error: state.error
});

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userInfo) => dispatch(register(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
