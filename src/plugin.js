'use strict';

var pluginName = 'bsAlert';

var publicAPI = {

	destroy: function () {
		this.$el.removeData(pluginName);
	}
};

var privateAPI = {

	init: function () {
	}
};

function Plugin(element, options) {
	this.$el = $(element);
	this.options = $.extend({}, $.fn[pluginName].defaults, options);

	this.init();
}

Plugin.prototype = $.extend({}, publicAPI, privateAPI);

$.fn[pluginName] = function () {
	var args = arguments;

	return this.each(function () {
		var plugin = $(this).data(pluginName);
		if (!plugin) {
			plugin = new Plugin(this, args[0]);
			$(this).data(pluginName, plugin);
		}

		if (typeof args[0] === 'string' && $.isFunction(publicAPI[args[0]])) {
			plugin[args[0]].apply(plugin, Array.prototype.slice.call(args, 1));
		}
	});
};

$.fn[pluginName].defaults = {};

//noinspection JSAnnotator
return $.fn[pluginName];
