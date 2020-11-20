import React, { Component } from "react";
import { connect } from "react-redux";
import Result from "./Containers/Result.js";
import axios from "axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      pokemon: null,
      loading: false,
      error: null
    };
    this.findPoke = this.findPoke.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  findPoke(query) {
    console.log("Finding ", query);
    if (query.length) {
      query = query.toLowerCase();
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then((res) => {
          this.setState({ pokemon: res.data });
          console.log(this.state.pokemon);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      console.log("Blank query");
    }
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    console.log(errorInfo);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting: ", this.state.query);
    try {
      this.findPoke(this.state.query);
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  }

  render() {
    if (this.state.error) {
      return <h2>Error: ${this.state.error}</h2>;
    }
    return (
      <div id="searchbar">
        <form className="search" onSubmit={this.handleSubmit}>
          <input
            className="searchInput"
            type="text"
            onChange={this.handleChange}
            placeholder="Search for a Pokémon"
          ></input>
          <button type="submit">Search</button>
        </form>
        <Result pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default connect(null, null)(SearchBar);
