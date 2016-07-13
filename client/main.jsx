import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
 
import App from '../imports/ui/App.jsx';
import UserBazaar from '../imports/ui/UserBazaar.jsx';
import PrivateChat from '../imports/ui/PrivateChat.jsx';
 
Meteor.startup(() => {
  render((
  	<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/privatechat" component={App}/>
    <Route path="/UserBazaar" component={App}/>
  	</Router>
  	), document.getElementById('render-target'));
});