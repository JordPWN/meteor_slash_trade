import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
	constructor(props) {
    super(props);
    this.state = {isUserMenuActive: "user-menu"};
  }

	toggleUserMenu(){
		if (this.state.isUserMenuActive === "user-menu"){
			this.setState({isUserMenuActive: "user-menu active"});
		}else{
			this.setState({isUserMenuActive: "user-menu"});
		}
	}

	render() {
		return (
				<nav className="nav">
					<div className="container">
						<div className="nav-left">
						<a className="nav-item">LOGO</a>
						</div>
						<div className="nav-center">
							<Link to="/privatechat" className="nav-item is-tab" activeClassName="is-active">Private Chat</Link>
							<Link to="/userbazaar" className="nav-item is-tab" activeClassName="is-active">User Bazaar</Link>
							<Link to="/" className="nav-item is-tab" activeClassName="is-active">Page 3</Link>
						</div>
						<div className="nav-right">
							<a className="nav-item is-tab" onClick={this.toggleUserMenu.bind(this)}>User</a>
						</div>
					</div>
					<div className={this.state.isUserMenuActive}>
						<a className="nav-item is-tab">Profile</a>
						<a className="nav-item is-tab">Settings</a>
						<hr />
						<a className="nav-item is-tab">My Bazaars</a>
						<a className="nav-item is-tab">Add Item</a>
						<hr />
						<a className="nav-item is-tab">My Cart</a>
						<a className="nav-item is-tab">History</a>
					</div>
				</nav>
			)
	}
}