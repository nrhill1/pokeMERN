import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return <div>{this.props.user.username}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    error: state.error
  };
};

export default connect(mapStateToProps, null)(Profile);
