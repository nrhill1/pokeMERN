import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux';

class Login extends Component  {

    render() {
      return(
        <div className="loginForm">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      )
    }
}

export default Login