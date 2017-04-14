import React from 'react';

const Message = (props) => {
	return (
		<li>
			{props.message.content} - {props.message.time.toDateString()}
		</li>
	);
};

export default Message;