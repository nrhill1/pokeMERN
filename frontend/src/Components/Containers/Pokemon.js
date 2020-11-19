import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Alert } from "react-bootstrap";

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

class Pokemon extends Component {
  state = {
    msg: null
  };

  /*
  componentDidUpdate(prevProps) {
    const { errorReducer } = this.props;
    if (errorReducer !== prevProps.errorReducer) {
      // Check for register error
      if (errorReducer.id === "LOGIN_FAIL") {
        this.setState({ msg: errorReducer.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }


  onClick = (e) => {
    e.preventDefault();
    const { user } = this.props.authReducer;
    const username = user.username;
    let pokemon = {
      name: this.props.pokemon.name,
      id: this.props.pokemon.id
    };
    // Remove this pokemon from your team
  };
  */

  render() {
    const { isAuth, user } = this.props.authReducer;
    return (
      <div className="pokemon">
        {this.state.msg ? (
          <Alert color="danger">{this.state.msg.msg}</Alert>
        ) : null}
        <Card border="dark" style={{ width: "18rem" }}>
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