import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
            pokemon: null,
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        this.setState({query: event.target.value})
    }

    async componentDidMount() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        this.setState({ pokemon: res.data.results })
        console.log(this.state.pokemon)
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