import React, { Component } from 'react';
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
        console.log(this.state.query)
    }

    /*
    async componentDidMount() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        this.setState({ pokemon: res.data.results })
        console.log(this.state.pokemon)
    }
    */
   
    findPokemon(query) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
            .then(res => this.setState({ pokemon: res}))
            .then(console.log(this.state.pokemon))
    }


    render() {
        return (
            <div id="searchbar">
                <form className="search">
                    <input type="text" handleChange={this.handleChange} placeholder="Search for a Pokémon"></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar