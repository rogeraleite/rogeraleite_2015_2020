module.exports = function(grunt){

	// require it at the top and pass in the grunt instance
   require('time-grunt')(grunt);
	 // Project configuration.
  grunt.initConfig({
    	concat:{
		js:{
			src: ['assets/js/*.js'],
			dest: 'build/js/scripts.js',
		},
		css:{
			src: ['assets/css/*.css'],
			dest: 'build/css/styles.js',
		},
	},
	watch:{
		options: {
			livereload: true,
		},
		js:{
			files:['assets/js/**/*.js'],
			tasks: ['concat:js'],
		},
		css:{
			files:['assets/css/**/*.css'],
			tasks: ['concat:css'],
		},
	},
	shell: {
      		jekyll_build: {
        		command: 'jekyll build'
      		},
      	// snip
    	},
	esteWatch: {
     		 options: {
     		   dirs: ['./', '_posts/*/', '_layouts', '_includes',
      		         'javascript/**/', 'apollo/tutorial','js/**/*.js','css/**/*.css',
     		          '_plugins/**/', 'stylesheets', 'javascripts'],
     		   livereload: {
     		     enabled: true,
     		   }
     		 },
     		 '*': function(filepath) { return 'concat' }
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
	grunt.loadNpmTasks('grunt-este-watch');
	grunt.loadNpmTasks('grunt-open');
//  grunt.loadNpmTasks('grunt-contrib-uglify');


	grunt.registerTask('server',['express','open','concat','watch']);
	grunt.registerTask('default',['express','concat','esteWatch']);

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);


}