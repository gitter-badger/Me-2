define(['marionette', 'tpl!index/template'], function(Marionette, template) {
	var IndexItem = Marionette.ItemView.extend({
		tagName: 'li',
		className: 'module-list-item',
		template: template,

		events: {
			'click .js-module-link' : 'showModule'
		},

		showModule: function(e) {
			e.preventDefault();
			// console.log(this.model.get('name'));
			
		}
	});

	return IndexItem;
})