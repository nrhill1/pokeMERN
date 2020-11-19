import React, { Component } from "react";
import { connect } from "react-redux";
import Pokemon from "./Containers/Pokemon.js";
import { delFromTeam } from "../actions/pokeActions.js";

class Profile extends Component {
  render() {
    const { user } = this.props.authReducer;
    if (user) {
      return (
        <div className="profile">
          <h1>{user.username}'s Team:</h1>
          {user.pokemon.map((poke) => {
            const onDelete = (e) => {
              e.preventDefault();
              const { user } = this.props.authReducer;
              const username = user.username;
              const id = poke._id;
              this.props.delFromTeam(username, id);
            };
            return <Pokemon pokemon={poke} onDelete={onDelete} />;
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

const mapDispatchToProps = (dispatch) => {
  return {
    delFromTeam: (username, id) => dispatch(delFromTeam(username, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
