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
        this.findPoke = this.findPoke.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

       
    findPoke(query) {
        console.log("Finding ", query)
        if (query.length) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
                .then(res => this.setState({ pokemon: res}))
                .then(console.log(this.state.pokemon))
        } else {
            console.log("Blank query")
        }
    }

    handleChange(event) {
        this.setState({query: event.target.value})
        console.log(this.state.query)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("Submitting: ", this.state.query)
        this.findPoke(this.state.query)
    }

    /*
    async componentDidMount() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        this.setState({ pokemon: res.data.results })
        console.log(this.state.pokemon)
    }
    */


    render() {
        return (
            <div id="searchbar">
                <form className="search" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} placeholder="Search for a Pokémon"></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar