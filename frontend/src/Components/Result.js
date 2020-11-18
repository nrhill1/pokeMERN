import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

class Result extends Component {
  render() {
    if (this.props.pokemon) {
      return (
        <div className="pokemon">
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
              {this.props.isAuth ? (
                <Button variant="primary">Add to my team</Button>
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
  isAuth: state.authReducer.isAuth,
  errorReducer: state.errorReducer
});

export default connect(mapStateToProps, null)(Result);
