import Ember from 'ember';
//import Musicians from 'emberbox/models/emberbox-fixtures';


export default Ember.Route.extend({
  model: function(params) {
    //return Musicians.findBy('id', params.band_id);
    return this.store.find('musician', params.band_id);
  }
});
