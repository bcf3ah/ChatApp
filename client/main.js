import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './messageList';

const App = () => {
	return (
		<div>
			<h1>ChatChit</h1>
			<MessageList />
		</div>
	);
}



Meteor.startup(()=>{
	ReactDOM.render(<App />, document.getElementById('container'));	
});
