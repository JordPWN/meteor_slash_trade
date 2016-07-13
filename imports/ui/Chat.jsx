import React, { Component, PropTypes } from 'react';

import ChatBox from './ChatBox.jsx';
import ChannelList from './ChannelList.jsx';


export default class Chat extends Component {

	render() {
		return (
				<ChannelList />
				<ChatBox />
			)
	}

}

export default createContainer(() => {
  return {
    messages: Messages.find({channel: 0}, { sort: { time: -1 } }).fetch(),
  };
}, Chat);