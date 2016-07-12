import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Users } from '../api/users.js';
import { Items } from '../api/items.js';

import UserBazaar from './UserBazaar.jsx';
import NavBar from './NavBar.jsx';

// App component - represents the whole app
class App extends Component {
  
  render() {
    return (
      <div className="page-container">
        <NavBar />
        <UserBazaar bazaarItems={this.props.bazaarItems} />
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