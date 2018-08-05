import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app.jsx';
import Searchbar from './component/searchbar/searchbar.jsx';

ReactDOM.render(<App />, document.getElementById('listing-description'));
ReactDOM.render(<Searchbar />, document.getElementById('search-bar'));