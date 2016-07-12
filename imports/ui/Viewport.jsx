import React, { Component, PropTypes } from 'react';

import BazaarItem from './BazaarItem.jsx';
import ContactMenu from './ContactMenu.jsx';

export default class Viewport extends Component {

	render() {
		return (
			<div className="viewport">
	      <BazaarItem key={this.props.activeItem._id} description={this.props.activeItem.description} 
	      						images={this.props.activeItem.images} name={this.props.activeItem.name} />
	      <ContactMenu />
			</div>
		)
	}
}