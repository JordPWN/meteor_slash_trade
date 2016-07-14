import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Items } from '../api/items.js';

import ItemList from './ItemList.jsx';
import Viewport from './Viewport.jsx';
import NavBar from './NavBar.jsx';

class UserBazaar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {activeItem: 0, leftMenu: "left-menu"};
  }

	setActiveItem(index) {
		this.setState({activeItem: index});
	}

	toggleLeft() {
		if (this.state.leftMenu === "left-menu"){
			this.setState({leftMenu: "left-menu inactive"});
		}else{
			this.setState({leftMenu: "left-menu"});
		}
	}

	render() {
		var activeItem = this.state.activeItem;
		var leftMenuStatus = this.state.leftMenu + " is is-pulled-left column is-4";
		return (
			<div className="page-container">
				<NavBar />
				<div className="columns">
					<div className={leftMenuStatus}>
						<div className="toggle-left" onClick={this.toggleLeft.bind(this)}> ◕ </div> 
						<div className="left-menu-container">
							<h1 className="title">User's Bazaar</h1>
							<ItemList className="item-list" bazaarItems={this.props.bazaarItems} setActiveItem={this.setActiveItem.bind(this)} activeItem={activeItem} />
						</div>
					</div>
					<div className="right-menu is-pulled-right column">
						{this.props.bazaarItems.length && <Viewport activeItem={this.props.bazaarItems[activeItem]} />}
					</div>
				</div>
			</div>
		)
	}

}

UserBazaar.propTypes = {
  bazaarItems: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    bazaarItems: Items.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, UserBazaar);