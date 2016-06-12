import Ember from 'ember';
//import All from 'emberbox/models/emberbox-fixtures';

export default Ember.Route.extend({
  model: function() {
    console.log('index');
    return this.store.findAll('musician');    
    //console.log(All);
    //return All;
  },
  actions: {
    currentlyPlaying: function(song){
        this.set('currentlyPlaying', song);
    }
  }  
});