import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Registration extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  handleOnChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="regForm">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleOnChange}
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
              onChange={this.handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleOnChange}
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
  loggedIn: state.auth.loggedIn,
  error: state.error
});

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userInfo) => dispatch(register(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
