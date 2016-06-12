import Ember from 'ember';
import DS from 'ember-data';
var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	band_id: attr('number'),
	name: attr('string')
});