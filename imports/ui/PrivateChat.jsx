import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

import ChatBox from './ChatBox.jsx';
import NavBar from './NavBar.jsx';

class PrivateChat extends Component {
	
	constructor(props) {
    super(props);
	}

	render() {
		return (
				<div className="page-container">
					<NavBar />
					<ChatBox messages={this.props.messages} />
				</div>
			)
	}
}

PrivateChat.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    messages: Messages.find({}, { sort: { time: 1 } }).fetch(),
  };
}, PrivateChat);