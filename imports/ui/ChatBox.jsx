import React, { Component, PropTypes } from 'react';

import ChatBar from './ChatBar.jsx'
import Message from './Message.jsx'

export default class ChatBox extends Component {
	
	renderChat() {
		console.log("props.messages: ", this.props.messages[0] );
		return this.props.messages.map((message) => (
			<Message text={message.text} user={message.user} time={message.time} key={message._id} />
		));
	}

	render() {
		return (
			<div className="chat-container">
				<div className="chat-box">
					{this.renderChat()}
				</div>
				<ChatBar />
			</div>
			)
	}

}