import React, { Component } from 'react';
import axios from 'axios'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
            pokemon: null,
            loading: false,
            error: null
        }
        this.findPoke = this.findPoke.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

       
    findPoke(query) {
        console.log("Finding ", query)
        if (query.length) {
            query = query.toLowerCase()
            axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
                .then(res => {
                    this.setState({ pokemon: res.data})
                    console.log(this.state.pokemon)
                })
                .catch(function (error) {
                    console.log(error)
                })
        } else {
            console.log("Blank query")
        }
    }

    handleChange(event) {
        this.setState({ query: event.target.value })
        console.log(this.state.query)
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error })
        console.log(errorInfo)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("Submitting: ", this.state.query)
        try {
            this.findPoke(this.state.query)
        } catch(error) {
            this.setState({ error })
            console.log(error)
        }
    }

    showResult(result) {
        console.log("showing result: ", result.name)
        result = [result]
        return(result.map(poke => 
            <div>
                <h1>{poke.name}</h1>
                <img alt="sprite" src={poke.sprites['front_default']}></img>
            </div>
        ))
    }

    /*
    async componentDidMount() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        this.setState({ pokemon: res.data.results })
        console.log(this.state.pokemon)
    }
    */


    render() {
        if (this.state.error) {
            return (<h2>Error: ${this.state.error}</h2>)
        }
        return (
            <div id="searchbar">
                <form className="search" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} placeholder="Search for a Pokémon"></input>
                    <button type="submit">Search</button>
                </form>
                <div className="result">
                    {this.state.pokemon ? this.showResult(this.state.pokemon) : ""}
                </div>
            </div>
        )
    }
}

export default SearchBar