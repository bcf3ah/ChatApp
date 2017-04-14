import {Mongo} from 'meteor/mongo'

Meteor.methods({
	'message.insert': function(content){
		const time = new Date();
		return Messages.insert({
			content: content,
			time: time
		});	
	}
});


export const Messages = new Mongo.Collection('messages');