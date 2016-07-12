import React, { Component, PropTypes } from 'react';

export default class NavBar extends Component {
	render() {
		return (
				<nav className="nav">
					<div className="container">
						<div className="nav-left">
						<a className="nav-item">LOGO</a>
						</div>
						<div className="nav-center">
							<a className="nav-item is-tab">Page 1</a>
							<a className="nav-item is-tab">Page 2</a>
							<a className="nav-item is-tab">Page 3</a>
						</div>
						<div className="nav-right">
							<a className="nav-item is-tab">User</a>
						</div>
					</div>
				</nav>
			)
	}
}