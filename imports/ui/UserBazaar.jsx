import React, { Component, PropTypes } from 'react';

import ItemList from './ItemList.jsx';
import Viewport from './Viewport.jsx';
import ContactMenu from './ContactMenu.jsx';

export default class UserBazaar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {activeItem: 0};
  }

	setActiveItem(index) {
		this.setState({activeItem: index});
	}

	render() {
		var activeItem = this.state.activeItem;

		return (
			<div className="container">
				<div className="user-bazaar">
					<h1>User's Bazaar</h1>
					<ItemList bazaarItems={this.props.bazaarItems} setActiveItem={this.setActiveItem.bind(this)} activeItem={activeItem} />
					<Viewport activeItem={this.props.bazaarItems[activeItem]} />
					<ContactMenu />
				</div>

			</div>
		)
	}

}