import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
            results: [],
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        this.setState({query: event.target.value})
    }

    handleSubmit(query) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(res => res.json())
        .then(data => this.setState({results: [data]}))
    }


    showResults() {
        this.state.results.map(poke => {
            return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={poke.sprites['front_default']} />
                    <Card.Body>
                        <Card.Title>{poke.name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Add</Button>
                    </Card.Body>
                </Card>
            )
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChange} placeholder="Search for a Pokémon..."></input>
                    <Button type="submit" onClick={this.handleSubmit(this.state.query)}></Button>
                </form>
                <div id="result">
                </div>
            </div>
        )
    }
}

export default SearchBar