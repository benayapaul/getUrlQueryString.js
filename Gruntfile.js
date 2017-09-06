module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */'
		},

		eslint: {
			options: {
				quiet: true
			},
			target: ['src/**/*.js']
		},

		// Minifies JS files
		uglify: {
			options: {
				output: {
					comments: /^!|@preserve|@license|@cc_on/i
				},
				sourceMap: true,
				footer: '\n'
			},
			dist: {
				files: [{
					expand:	true,
					cwd:	'src',
					src:	['*.js','!*.min.js'],
					dest:	'dist',
					ext:	'.min.js',
					extDot:	'last'
				}]
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-eslint');

	// Default task.
	grunt.registerTask('lint', [ 'eslint' ]);
	grunt.registerTask('test', [ 'lint' ]);
	grunt.registerTask('default', [ 'test', 'uglify' ]);
};
