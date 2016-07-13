import React, { Component, PropTypes } from 'react';

export default class Thumbnail extends Component {

	render() {
		return (
			<div onClick={this.props.clickMe} className="thumbnail-img-containter">
				<img className={this.props.className} src={this.props.image} />
			</div>
		)
	}
}