import React, { Component, PropTypes } from 'react';

export default class Message extends Component {

	render() {
		return (
				<div className="message">
					<p>
					{this.props.user.toString()} : {this.props.text.toString()}
					</p>
				</div>
			)
	}

}