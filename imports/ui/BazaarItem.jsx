import React, { Component, PropTypes } from 'react';

import Thumbnail from './Thumbnail.jsx';
import ContactMenu from './ContactMenu.jsx';

export default class BazaarItem extends Component {

  constructor(props) {
    super(props);
    this.state = {activeThumbnail: 0};
  }

 setActiveThumbnail(index) {
		this.setState({activeThumbnail: index});
	}

	renderThumbnails() {
		return this.props.images.map((image, i) => (
      <Thumbnail className={this.state.activeThumbnail === i ? "thumbnail-image active-thumbnail" : "thumbnail-image"}
       key={image._id} image={image} clickMe={this.setActiveThumbnail.bind(this, i)}/>
    ));
	}

	render() {
		var bgImage = this.props.images[this.state.activeThumbnail]
		return (
			<div className="item-container">
			<img className="item-image"src={bgImage} />
				<ContactMenu />
				<div className="thumbnail-container">
					{this.renderThumbnails()}						
				</div>
				<div className="item-description has-text-centered">
					<h1 className="title">{this.props.name}</h1>
					<p>{this.props.description}</p>
				</div>
			</div>
			)
	}
}