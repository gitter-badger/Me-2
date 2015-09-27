define(['marionette', 'app/layout-view', 'header/view'], function(Marionette, LayoutView, Header) {
	var Me = Marionette.Application.extend({
		initialize: function() {
			this.$body = $(document.body);
			this.layout = new LayoutView();
			this.layout.render();

			var header = new Header();
			this.layout.header.show(header);
		}
	});

	return Me;
})