define(['marionette', 'tpl!app/template'], function(Marionette, template){
	var LayoutView = Marionette.LayoutView.extend({
		el: '.application',
		template: template,

		regions: {
			header: '.header',
			content: '.content'
		}
	});

	return LayoutView;
})