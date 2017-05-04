import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import BeerFormContainer from './containers/BeerFormContainer'


$(function() {
  ReactDOM.render(
    <BeerFormContainer />,
    document.getElementById('app')
  );
});
