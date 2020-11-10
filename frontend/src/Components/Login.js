import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import {fetchUser} from '../actions/userActions.js'

class Login extends Component  {

  state = {
    email: "",
    password: ""
  }

  handleOnChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value 
    }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.fetchUser(this.state)
  }

  render() {
    return(
      <div className="loginForm">
        <Form>

          <Form.Group controlId="email" >
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleOnChange}/>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          
        </Form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(Login)