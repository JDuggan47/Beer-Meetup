import React from 'react'

const BeerTile = (props) => {
  return (
    <div className= "beer-box">
      <div className= "large-4 columns">
        <div className="card text-center">
          <div className="card-section">
            <h4 className="beer-form-label">Name of Beer: {props.name}</h4>
            <h4 className="beer-form-label">Brewery: {props.brewery}</h4>
            <h4 className="beer-form-label">Style: {props.style}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BeerTile
