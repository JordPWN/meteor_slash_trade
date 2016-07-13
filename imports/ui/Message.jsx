import React, { Component, PropTypes } from 'react';

export default class Message extends Component {

	render() {
		return (
				<div className="message">
					{this.props.user.toString()} : {this.props.text.toString()}
				</div>
			)
	}

}