import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Messages} from '../imports/collections/messages';
import {createContainer} from 'meteor/react-meteor-data';
import Message from './message';

class MessageList extends React.Component {
  createMessage(event){
    event.preventDefault();
    Meteor.call('message.insert', this.refs.content.value);
  }

  renderMessages(){
    return this.props.messages.map(message => {
      return <Message key={message._id} message={message} />
    });
  }

  render(){
    return (
      <div>
        <form>
          <input type="text" ref='content'/>
          <input type='submit' onClick={this.createMessage.bind(this)} value='send'/>  
        </form>
        
        <ul>{this.renderMessages()}</ul>
      </div>
    );
  }
}


export default createContainer(()=>{
    Meteor.subscribe('messages');
    return {messages: Messages.find({}).fetch()};
}, MessageList);