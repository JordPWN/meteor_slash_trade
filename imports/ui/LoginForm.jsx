import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state= {activeForm: "login"};
	}

	checkActive(arg) {
		return (arg === this.state.activeForm) ? "is-active" : "";
	}

	toggleForm(arg) {
		if(arg==="login"){
			this.setState({activeForm: "login"});
		}else if(arg==="signup"){
			this.setState({activeForm: "signup"});
		}
	}

	renderForm() {
		if(this.state.activeForm==="login"){
			return (
				<div className="tab-content">
					<p className="control has-icon">
					  <input className="input" type="email" placeholder="Email" />
					  <i className="fa fa-envelope"></i>
					</p>
					<p className="control has-icon">
					  <input className="input" type="password" placeholder="Password" />
					  <i className="fa fa-lock"></i>
					</p>
					<p className="control">
					  <span className="button is-success is-fullwidth">
					    Login
					  </span>
					</p>
				</div>
			)
		}else if(this.state.activeForm==="signup"){
			return (
				<div className="tab-content">
					<p className="control">
					  <input className="input" type="text" name="username" placeholder="Username" />
					</p>
					<p className="control is-grouped">
					  <input className="input" type="text" name="firstname" placeholder="First Name" />
					  <input className="input" type="text" name="lastname" placeholder="Last Name" />
					</p>
					<p className="control has-icon">
					  <input className="input" type="email" placeholder="Email" />
					  <i className="fa fa-envelope"></i>
					</p>
					<p className="control has-icon">
					  <input className="input" type="password" placeholder="Password" />
					  <i className="fa fa-lock"></i>
					</p>
					<p className="control has-icon">
					  <input className="input" type="password" placeholder="Re-enter Password" />
					  <i className="fa fa-lock"></i>
					</p>
					<p className="control">
					  <span className="button is-success is-fullwidth">
					    Signup
					  </span>
					</p>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="login-form">
			<div className="tabs is-toggle is-fullwidth">
			  <ul>
			    <li  onClick={this.toggleForm.bind(this, 'login')} className={this.checkActive('login')}>
			      <a>Login</a>
			    </li>
			    <li onClick={this.toggleForm.bind(this, 'signup')} className={this.checkActive('signup')}>
			      <a>Signup</a>
			    </li>
			  </ul>
			</div>
			{this.renderForm()}
			</div>
		)
	}
}