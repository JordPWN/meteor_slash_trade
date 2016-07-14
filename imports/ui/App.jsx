import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, Link } from 'react-router';

import { Items } from '../api/items.js';

import UserBazaar from './UserBazaar.jsx';
import PrivateChat from './PrivateChat.jsx';
import NavBar from './NavBar.jsx';

// App component - represents the whole app
class App extends Component {
  
  render() {
    return (
      <div className="page-container">
        <NavBar />
      </div>
    )

  }
}

App.propTypes = {
  bazaarItems: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    bazaarItems: Items.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, App);