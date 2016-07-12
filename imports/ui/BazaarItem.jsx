import React, { Component, PropTypes } from 'react';

import Thumbnail from './Thumbnail.jsx';

export default class BazaarItem extends Component {

	renderThumbnails() {
		return this.props.images.map((image) => (
      <Thumbnail key={image._id} image={image} />
    ));
	}

	render() {
		return (
			<div className="item-container">
				<div className="thumbnail-container"
						 >
					{this.renderThumbnails()}						
				</div>
				<h1>{this.props.name}</h1>
				<p>{this.props.description}</p>
			</div>
			)
	}
}