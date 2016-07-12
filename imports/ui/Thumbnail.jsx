import React, { Component, PropTypes } from 'react';

export default class Thumbnail extends Component {

	render() {
		return (
			<img className="thumbnail-image" src={this.props.image} />
		)
	}
}