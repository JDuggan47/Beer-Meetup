import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import BeerFormContainer from './containers/BeerFormContainer'
import BeerSearchContainer from './containers/BeerSearchContainer'


$(function() {
  if (document.getElementById('app')){
      ReactDOM.render(
      <BeerFormContainer />,
      document.getElementById('app')
    );
  }
});
$(function() {
  if (document.getElementById('beersearch')){
      ReactDOM.render(
      <BeerSearchContainer />,
      document.getElementById('beersearch')
    );
  }
});
