import DS from 'ember-data';
var attr = DS.attr,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	first_name: attr('string'),
	last_name: attr('string'),
	band_id: belongsTo('band')
});