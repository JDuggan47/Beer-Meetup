import React, { Component } from 'react'
import NewBeerForm from '../components/NewBeerForm'
import BeerTile from '../components/BeerTile'

class BeerFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name_of_beer:"",
      name_of_brewery:"",
      style:"",
      beers:[]
    }
    this.handleBeerChange = this.handleBeerChange.bind(this)
    this.handleBreweryChange = this.handleBreweryChange.bind(this)
    this.handleStyleChange = this.handleStyleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.getData = this.getData.bind(this)
  }

    handleBeerChange(event) {
      this.setState({name_of_beer: event.target.value})
    }

    handleBreweryChange(event) {
      this.setState({name_of_brewery: event.target.value})
    }

    handleStyleChange(event) {
      this.setState({style: event.target.value})
    }

    handleClearForm(event) {
      this.setState({
        name_of_beer:"",
        name_of_brewery:"",
        style:""
      })
    }

    handleFormSubmit(event) {
      event.preventDefault()
      let formPayload = {
        name_of_beer: this.state.name_of_beer,
        name_of_brewery: this.state.name_of_brewery,
        style: this.state.style
      }
      fetch('/api/v1/beers', {
        credentials: 'same-origin',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formPayload)
      })
        .then(response => {
          if (response.ok) {
            let beer = response.json()
            return beer;
          } else {
            let errorMessage = `${response.status} ($response.statusText)`,
              error = new Error(errorMessage);
            throw(error); }
        })
        .then(beer => {
          let currentState = this.state.beers
          let newBeer = beer
          let newState = currentState.concat(newBeer)
          this.setState({beers: newState});
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
      this.handleClearForm(event);
    }

    getData() {
      fetch('/api/v1/beers', {credentials: 'same-origin'} )
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} ($response.statusText)`,
              error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({beers: body});
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    componentDidMount() {
      this.getData();
    }

  render() {
    // debugger;
    let newBeers = this.state.beers.map(beer => {
      return(
        <BeerTile
          id={beer.id}
          key={beer.id}
          name={beer.name_of_beer}
          brewery={beer.name_of_brewery}
          style={beer.style}
        />
      )
    })
    return (
      <div className="card beer-formcard">
        <form onSubmit={this.handleFormSubmit}>
          <NewBeerForm
            content={this.state.name_of_beer}
            label='Name of Beer'
            name='Beer'
            handleFunction={this.handleBeerChange}
          />
          <NewBeerForm
            content={this.state.name_of_brewery}
            label='Name of Brewery'
            name='Brewery'
            handleFunction={this.handleBreweryChange}
          />
          <NewBeerForm
            content={this.state.style}
            label='Style of the Beer'
            name='Style'
            handleFunction={this.handleStyleChange}
          />
          <div className="button-group">
            <button className="button" onClick={this.handleClearForm}>Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
        <h3 className="card text-center">Here are the Beers You've Tried!</h3>
        {newBeers}
      </div>
    )
  }
}
export default BeerFormContainer
