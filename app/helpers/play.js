import Ember from 'ember';

export function play(params/*, hash*/) {
  alert('playing this one');
  return params;
}

export default Ember.Helper.helper(play);