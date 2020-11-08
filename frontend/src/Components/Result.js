import React, { Component } from 'react'


String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

class Result extends Component {

  render() {
    return (
      <div className="pokemon">
        <h1>{this.props.pokemon.name.capitalize()}</h1>
        <img alt="sprite" src={this.props.pokemon.sprites['front_default']}></img>
        <img alt="backsprite" src={this.props.pokemon.sprites['back_default']}></img>
      </div>
    )
  }

}

export default Result