import React, { Component, PropTypes } from 'react';

import ItemList from './ItemList.jsx';
import Viewport from './Viewport.jsx';

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
			<div className="page-container columns">
				<div className="left-menu is-pulled-left column hero is-4">
					<h1 className="title hero-head">User's Bazaar</h1>
					<ItemList className="hero-body" bazaarItems={this.props.bazaarItems} setActiveItem={this.setActiveItem.bind(this)} activeItem={activeItem} />
				</div>
				<div className="right-menu is-pulled-right column is-8">
					{this.props.bazaarItems.length && <Viewport activeItem={this.props.bazaarItems[activeItem]} />}
				</div>
			</div>
		)
	}

}