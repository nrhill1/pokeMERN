import React, { Component } from 'react';
import { connect } from 'react-redux';


class Profile extends Component {
  
  render() {
    return(
      <div>{this.props.userReducer.user.username}</div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps, null)(Profile)
