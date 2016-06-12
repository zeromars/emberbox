import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    playSong() {
      this.set('currentlyPlaying', 'now');
      this.sendAction('currentlyPlaying', 'Fear Factory!');
    }
  }
});
