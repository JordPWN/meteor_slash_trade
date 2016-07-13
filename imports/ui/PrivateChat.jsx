import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

import ChatBox from './ChatBox.jsx';

class PrivateChat extends Component {
	
	constructor(props) {
    super(props);
	}

	render() {
		return (
				<ChatBox messages={this.props.messages} />
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