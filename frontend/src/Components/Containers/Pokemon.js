import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Alert } from "react-bootstrap";
import Chip from "@material-ui/core/Chip";

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

class Pokemon extends Component {
  state = {
    msg: null
  };

  componentDidUpdate(prevProps) {
    const { pokeReducer } = this.props;
    if (pokeReducer !== prevProps.pokeReducer) {
      // Check for error
      if (pokeReducer.msg.id === "RELEASE_FAIL") {
        this.setState({ msg: pokeReducer.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }
  render() {
    // const { isAuth, user } = this.props.authReducer;
    return (
      <div className="pokemon">
        {this.state.msg ? (
          <Alert color="danger">{this.state.msg.msg}</Alert>
        ) : null}
        <Card
          border="dark"
          style={{ width: "18rem", margin: "6px", display: "inline-block" }}
        >
          <Card.Img
            variant="top"
            src={this.props.pokemon.sprites[0]}
            style={{ maxWidth: "8rem", margin: "0 auto" }}
          />
          <Card.Img
            variant="top"
            src={this.props.pokemon.sprites[1]}
            style={{ maxWidth: "8rem", margin: "0 auto" }}
          />
          <Card.Body>
            <Card.Title>
              #{this.props.pokemon.id} {this.props.pokemon.name.capitalize()}
            </Card.Title>
          </Card.Body>
          <Chip
            label="Remove from your team"
            onDelete={this.props.onDelete}
            color="secondary"
            style={{ marginBottom: "2px" }}
          />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
  errorReducer: state.errorReducer
});
/*
const mapDispatchToProps = (dispatch) => {
  return {
    addToTeam: (username, pokemon) => dispatch(addToTeam(username, pokemon))
  };
};
*/
export default connect(mapStateToProps, null)(Pokemon);
