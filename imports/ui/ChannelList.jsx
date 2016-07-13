import React, { Component, PropTypes } from 'react';

export default class ChannelList extends Component {
	
	constructor(props) {
    super(props);
    this.state = {activeChannel: ''};
	}

	renderChannels() {
		return this.props.channels.map((channel, i) => (
				<div>{channel.name}
				</div>
			)
	}

	render() {
		return (
				{this.renderChannels()}
			)
	}

}