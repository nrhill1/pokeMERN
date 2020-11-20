import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Alert } from "react-bootstrap";
import { addToTeam } from "../../actions/pokeActions.js";

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

class Result extends Component {
  state = {
    msg: null
  };

  onClick = (e) => {
    e.preventDefault();
    const { user } = this.props.authReducer;
    const username = user.username;
    let pokemon = {
      name: this.props.pokemon.name,
      id: this.props.pokemon.id,
      sprites: [
        this.props.pokemon.sprites["front_default"],
        this.props.pokemon.sprites["back_default"]
      ]
    };
    // Add this pokemon to your team
    this.props.addToTeam(username, pokemon);
  };

  render() {
    const { isAuth, user } = this.props.authReducer;
    if (this.props.pokemon) {
      return (
        <div className="result">
          {this.state.msg ? (
            <Alert color="danger">{this.state.msg.msg}</Alert>
          ) : null}
          <Card border="dark" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={this.props.pokemon.sprites["front_default"]}
              style={{ maxWidth: "8rem", margin: "0 auto" }}
            />
            <Card.Img
              variant="top"
              src={this.props.pokemon.sprites["back_default"]}
              style={{ maxWidth: "8rem", margin: "0 auto" }}
            />
            <Card.Body>
              <Card.Title>
                #{this.props.pokemon.id} {this.props.pokemon.name.capitalize()}
              </Card.Title>
              {isAuth ? (
                <Button variant="primary" onClick={this.onClick}>
                  Add to {user.username}'s team
                </Button>
              ) : null}
            </Card.Body>
          </Card>
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
    addToTeam: (username, pokemon) => dispatch(addToTeam(username, pokemon))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
