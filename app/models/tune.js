import DS from 'ember-data';
var attr = DS.attr,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	band_id: attr('number'),
	first_name: attr('string'),
	last_name: attr('string'),
	band: belongsTo('band')
});