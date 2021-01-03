import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Card, Button } from "react-bootstrap";

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

class Pokemon extends Component {
  state = {
    msg: null
  };

  componentDidUpdate(prevProps) {
    const { errorReducer } = this.props;
    if (errorReducer !== prevProps.errorReducer) {
      // Check for delete error
      if (errorReducer.id === "RELEASE_FAIL") {
        this.setState({ msg: errorReducer.msg });
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
          style={{
            maxHeight: "400px",
            maxWidth: "fit-content",
            margin: "6px",
            display: "inline-block"
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.pokemon.sprites[0]}
            style={{
              maxWidth: "8rem",
              maxHeight: "8rem",
              margin: "0 auto",
              display: "inline-block"
            }}
          />
          <Card.Img
            variant="top"
            src={this.props.pokemon.sprites[1]}
            style={{
              maxWidth: "8rem",
              maxHeight: "8rem",
              margin: "0 auto",
              display: "inline-block"
            }}
          />
          <Card.Body>
            <Card.Title>
              #{this.props.pokemon.id} {this.props.pokemon.name.capitalize()}
            </Card.Title>
          </Card.Body>
          <Button
            variant="danger"
            onClick={this.props.onDelete}
            style={{
              marginBottom: "4px",
              maxWidth: "200px",
              maxHeight: "70px"
            }}
          >
            Remove from team
          </Button>
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
