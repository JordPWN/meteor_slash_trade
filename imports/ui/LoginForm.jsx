import React, { Component, PropTypes } from 'react';
import { Accounts } from 'meteor/accounts-base';

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

	validate(field) {
		var failure= "";
		if (field.password1 != field.password2) failure= failure + "Passwords must match.\n";
		if (Meteor.users.findOne({username: field.username})) failure= failure + "That username is already in use.\n";
		if (Meteor.users.findOne({email: field.email})) failure= failure + "That email is already in use.\n";
		if (!field.username) failure= failure + "Please select a username.\n";
		if (!field.email) failure= failure + "Please enter your e-mail.\n";
		if (failure === ""){
			console.log("No validation errors.");
			return null;
		}else{
			console.log("Failure: ", failure);
			return failure;
		}

	}

	submitLogin() {
		console.log("Submitting login...");
		Meteor.loginWithPassword(this.refs.user, this.refs.password, renderInvalidation(error));

	}

	renderInvalidations(fails) {
		return (
				<div className="flash-box">
					{fails}
				</div>
			)
	}

	submitSignup(e) {
		e.preventDefault();
		console.log("Submitting signup...");
		var signupInvalidations = validate(this.refs);
		if (!signUpValidations){
			Accounts.createUser({
				username: this.refs.username.value,
				email: this.refs.email.value,
				password: this.refs.password1.value,
				profile: {
					firstname: this.refs.firstname.value,
					lastname: this.refs.lastname.value
				}
			});
			console.log("Signup success!")
		}else{
			console.log("Signup failure!");
			renderInvalidations(validate(this.refs));
		}
	}

	renderForm() {
		
		return (
			<div>
		 		{this.state.activeForm==="login" &&
					<form className="login-form tab-content" onSubmit={this.submitLogin.bind(this)}>
						<p className="control">
						  <input className="input" type="email" name="email" ref="email" placeholder="Email" />
						  <i className="fa fa-envelope"></i>
						</p>
						<p className="control">
						  <input className="input" type="password" name="password" ref="password" placeholder="Password" />
						  <i className="fa fa-lock"></i>
						</p>
						<p className="control">
						  <span type="submit" className="button is-success is-fullwidth">
						    Login
						  </span>
						</p>
					</form>
				}
				
				{this.state.activeForm==="signup" &&
					<form className="signup-form tab-content" onSubmit={this.submitSignup}>
						<p className="control">
						  <input className="input" type="text" ref="username" name="username" placeholder="Username" />
						</p>
						<p className="control is-grouped">
						  <input className="input" type="text" ref="firstname" name="firstname" placeholder="First Name" />
						  <input className="input" type="text" ref="lastname" name="lastname" placeholder="Last Name" />
						</p>
						<p className="control has-icon">
						  <input className="input" type="email" ref="email" name="email" placeholder="Email" />
						  <i className="fa fa-envelope"></i>
						</p>
						<p className="control has-icon">
						  <input className="input" type="password" ref="password1" name="password1" placeholder="Password" />
						  <i className="fa fa-lock"></i>
						</p>
						<p className="control has-icon">
						  <input className="input" type="password" ref="password2" name="password2" placeholder="Re-enter Password" />
						  <i className="fa fa-lock"></i>
						</p>
						<p className="control">
						  <span type="submit" className="button is-success is-fullwidth">
						    Signup
						  </span>
						</p>
					</form>
				}
			</div>
		)
	}

	render() {
		return (
			<div className="login-form-container">
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