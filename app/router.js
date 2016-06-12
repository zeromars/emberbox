import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('band', {path: '/band/:band_id'});
  this.resource('musician', {path: '/musician/:band_id'});
  this.resource('tunes', {path: '/tunes'});
});

export default Router;
