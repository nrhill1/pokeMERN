import React, { Component } from "react";
import { connect } from "react-redux";
import Pokemon from "./Containers/Pokemon.js";

class Profile extends Component {
  render() {
    const { user } = this.props.authReducer;
    if (user) {
      return (
        <div className="profile">
          <h1>{user.username}'s Team:</h1>
          {user.pokemon.map((poke) => {
            return <Pokemon pokemon={poke} />;
          })}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
  errorReducer: state.errorReducer,
  pokeReducer: state.pokeReducer
});

export default connect(mapStateToProps, null)(Profile);
