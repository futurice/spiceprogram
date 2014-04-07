var fs = require("fs");

module.exports = function(grunt) {

  //var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({

/*
    browserify: {
      basic: {
        src: ['lib/browser.js'],
        dest: 'build/rho-<%=pkg.version%>.js'
      }
    },

    uglify: {
      options: {
      },
      build: {
        src: 'build/rho-<%=pkg.version%>.js',
        dest: 'build/rho-<%=pkg.version%>.min.js'
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            texts: texts,
            pkg: pkg
          }
        },
        files: {
          "index.html": "pages/index.jade",
          "love.html": "pages/love.jade",
          "thankyou.html": "pages/thankyou.jade"
        }
      }
    }
*/

jade: {
    html: {
        files: [{
            expand: true,
            cwd: '_harp/',
            src: ['*.jade'],
            dest: '.tmp',
            ext: '.html'
        }]
    }
}
  });

  //grunt.loadNpmTasks('grunt-browserify');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['jade']);

};
