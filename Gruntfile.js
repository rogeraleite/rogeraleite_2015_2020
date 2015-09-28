module.exports = function(grunt){
	
	
	 // Project configuration.
  grunt.initConfig({
    concat:{
		js:{
			src: ['js/*.js'],
			dest: 'build/js/scripts.js',
		},
		css:{
			src: ['css/*.css'],
			dest: 'build/css/styles.js',
		},
	},
	watch:{
		options: {
			livereload: true,
		},
		js:{
			files:['js/**/*.js'],
			tasks: ['concat:js'],
		},
		css:{
			files:['css/**/*.css'],
			tasks: ['concat:css'],
		},
	},	
	express:{
		all:{
			options:{
				port:9000,
				hostname:'localhost',
				bases:['.'],
				livereload: true,
			},
		},
	},
	open : {
		dev : {
			path: 'http://localhost:9000/',
			app: 'Chrome'
		},
	},
  });

  
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-open');
//  grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default',['concat','watch']);
	grunt.registerTask('server',['express','open','concat','watch']);

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);
	
	
}