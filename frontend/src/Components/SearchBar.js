import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
            pokemon: [],
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        this.setState({query: event.target.value})
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(res => this.setState({ pokemon: res.results }))
            .then(console.log(this.state.pokemon))
    }


    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChange} placeholder="Search for a Pokémon..."></input>
                    <Button type="submit"></Button>
                </form>
                <div id="result">
                </div>
            </div>
        )
    }
}

export default SearchBar