module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		grunticon: {
			myIcons: {
					files: [{
						expand: true,
						cwd: 'grunt/svgs',
						src: ['*.svg', '*.png'],
						dest: "grunt/output"
					}],
				options: {
					loadersnippet: "grunticon.loader.js",
					enhanceSVG: true,
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.registerTask('default', ['grunticon:myIcons']);
};