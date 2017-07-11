Meteor.methods({
    addResolution : function(title){
       Resolutions.insert({
            title : title,
            createdAt : new Date(),
            owner: Meteor.userId()
        });
    },
    updateResolution : function(id, checked){
        var res = Resolutions.findOne(id);
        
        if(res.owner != Meteor.userId()){
            throw new Meteor.Error("Not-authorized");
        }
        
        Resolutions.update(id, {$set: {checked: checked}});
    },
    deleteResolution : function(id){
        var res = Resolutions.findOne(id);
        
        if(res.owner != Meteor.userId()){
            throw new Meteor.Error("Not-authorized");
        }
        
        Resolutions.remove(id);
    },
    setPrivate : function(id, private){
        var res = Resolutions.findOne(id);
        
        if(res.owner != Meteor.userId()){
            throw new Meteor.Error("Not-authorized");
        }
        
        Resolutions.update(id, {$set: {private: private}});
    }
});