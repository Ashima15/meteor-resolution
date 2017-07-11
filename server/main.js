import { Meteor } from 'meteor/meteor';

Resolutions = new Mongo.Collection('resolutions');

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("resolutions" , function(){
    return Resolutions.find({
        $or : [
            { private : {$ne : true} },
            { owner: this.userId }
        ]     
    });
});