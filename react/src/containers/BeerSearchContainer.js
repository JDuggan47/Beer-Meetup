import React, { Component } from 'react'
import SearchBeerTile from '../components/BeerTile'
import SearchBar from '../components/SearchBar'

class BeerSearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state= {
      search: "",
      results: []
    }

    this.fetchSearchResults = this.fetchSearchResults.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)

  }

  fetchSearchResults() {
    let search = { search: this.state.search }
    fetch(`/api/v1/searches`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(search)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ results: body})
    });
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value })
    this.fetchSearchResults();
  }

  render(){
    let searchResults = this.state.results.map((beer) => {
      return(
        <SearchBeerTile
          id={beer.id}
          key={beer.id}
          name={beer.name_of_beer}
          brewery={beer.name_of_brewery}
          style={beer.style}
          user={beer.user.username}
        />
      )
    })
    return (
      <div>
        <SearchBar
          search={this.state.search}
          onChange={this.handleSearchChange}
        />
        <div>
          {searchResults}
        </div>
      </div>
    )
  }
}

export default BeerSearchContainer
