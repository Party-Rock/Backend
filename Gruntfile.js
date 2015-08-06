/*jslint node: true, indent: 2,nomen:true */
'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-jslint');

  grunt.initConfig({
    jslint: {
      all : {
        src: [
          'Gruntfile.js',
          'models/*.js',
          'routes/*.js',
          'server.js'
        ],
        directives : {
          indent : 2,
          node   : true,
          nomen  : true,
          regexp : true
        }
      }
    }
  });

  grunt.registerTask('lint', 'jslint');
};
