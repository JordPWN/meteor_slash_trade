import React, { Component, PropTypes } from 'react';

export default class Message extends Component {

	renderMenu() {
		if (Meteor.User && Meteor.User.username===this.props.user){
			return this.editMessageOptions() + this.messageOptions();
		}else{
			return this.messageOptions();
		}
	}

	messageOptions() {
		if (Meteor.userId() && Meteor.User.username===this.props.user){
			var editOptions = (
				<div>
				<a>Edit</a>
				<a>Delete</a>
				</div>
				)
		}
		return (
			<div>
				<a>Star</a>
				{editOptions}
			</div>
		)
	}

	render() {
		return (
				<div className="message">
					{this.props.user.toString()} : {this.props.text.toString()} {this.messageOptions()}
				</div>
			)
	}

}