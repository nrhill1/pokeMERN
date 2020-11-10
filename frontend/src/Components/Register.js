import React, { Component } from 'react'
import { connect } from 'react-redux';


class Register extends Component {

  render() {
    return(
      <div></div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(Register)

