import React, { Component } from 'react'


class Result extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pokemon: this.props.pokemon
        }
    }
}