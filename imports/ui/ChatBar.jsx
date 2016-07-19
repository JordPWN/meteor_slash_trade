import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Messages } from '../api/messages.js';

export default class ChatBar extends Component {

	sendMessage(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 		if(text != ""){
	    Messages.insert({
	      text: text,
	      time: new Date(), // current time
	      user: Meteor.user.username ? ReactDOM.findDOMNode(this.refs.username).value.trim() : "Junk",
	      channel: 0,
	    });
	 
	    // Clear form
	    ReactDOM.findDOMNode(this.refs.textInput).value = '';
	  }
	}

	componentDidMount() {
		this.scrollToBottom().bind(this);
		React.findDOMNode(this.refs.textInput).focus();
	}
	componentDidUpdate(){
		this.scrollToBottom().bind(this);
	}

	scrollToBottom(){
		var objDiv = document.getElementById("chat-box");
		objDiv.scrollTop = objDiv.scrollHeight;
	}

	render() {
		return (
			<form className="chat-bar control has-addons" onSubmit={this.sendMessage.bind(this)}>
				<input className="input" type="textarea" placeholder="Who are you?" ref="username" />
			  <input className="input is-expanded" type="textarea" placeholder="Start typing!" ref="textInput" />
			  <button className="button is-info" type="submit" >
			    Send
			  </button>
			</form>
		)
	}
}