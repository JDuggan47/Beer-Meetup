import React from 'react';
import  BeerTile from './BeerTile'

const NewBeerForm = props => {
  return (
    <div className='row'>
        <label>{props.label}
          <textarea
            name={props.name}
            type='text'
            value={props.content}
            onChange={props.handleFunction}
          />
        </label>
    </div>
  )
}

export default NewBeerForm
