import React from 'react'

const BeerTile = (props) => {
  return (
    <div className= "beer-box">
      <div className= "large-4 columns">
        <div className="card beer-card">
          <div className="card-section">
            <h4>Name of Beer: {props.name}</h4>
            <h4>Brewery: {props.brewery}</h4>
            <h4>Style: {props.style}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BeerTile
