import React, { Component, PropTypes } from 'react';

import BazaarItem from './BazaarItem.jsx';

export default class Viewport extends Component {

	render() {
		console.log("viewport this.props.activeItem: ", this.props.activeItem);
		return (
			<div className="viewport">

			</div>
		)
	}
}