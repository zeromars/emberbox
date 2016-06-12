export default Ember.Component.extend({
  actions: {
    playSong() {
      alert('playing this');
    },
    currentlyPlaying(song){
        this.set('currentlyPlaying', song);
    }
  }
});