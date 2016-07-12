import React, { Component, PropTypes } from 'react';

export default class ContactMenu extends Component {

	render() {
		return (
			<div className="contact-menu">
				<ul>
					<li id="offer">Offer</li>
					<li id="buy">Buy</li>
					<li id="add-to-cart">Add to Cart</li>
					<li id="message">Message</li>
				</ul>
			</div>
		)
	}
}