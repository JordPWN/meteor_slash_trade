import React, { Component, PropTypes } from 'react';

export default class ItemList extends Component {

  renderList() {
  	return this.props.bazaarItems.map((bazaarItem, i) => (
      <div className={this.props.activeItem === i ? "list-item active-item" : "list-item"} key={bazaarItem._id}
      		 onClick={this.props.setActiveItem.bind(this, i)}>
		    <h3>{bazaarItem.name}</h3>
      </div>
    ));
  }

	render() {
		return (
			<div>
				<div className="item-list">
					{this.renderList()}
				</div>
			</div>
		)
	}
}