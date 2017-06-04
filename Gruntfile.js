module.exports = function (grunt) {
	'use strict';

	grunt.option('stack', true);
	grunt.util.linefeed = '\n';

	var project = {
		pkg: grunt.file.readJSON('package.json'),

		files: {
			main: 'dist/{{ plugin_file }}',
			min: 'dist/{{ plugin_file_min }}',
			boilerplate: 'src/boilerplate.js'
		},

		paths: {}
	};

	require('load-grunt-config')(grunt, {
		data: project
	});
};
