'use strict';

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    gruntfile: 'gruntfile.js',

    express: {
      options: {
        port: 9090
      },
      dev: {
        options: {
          script: 'index.js'
        }
      }
    },

    watch: {
      options: { livereload: false },
      express: {
        files: ['index.js'],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        }
      },
      livereload: {
        files: [
          'public/js/**/*.js',
          'public/styles/**/*.css',
          'public/index.html',
          'index.js'
        ],
        tasks: []
      }
    },

    open: {
      app: {
        url: 'http://localhost:9090'
      }
    }
  });

  grunt.registerTask('server', [
    'express:dev',
    'open:app',
    'watch'
  ]);

  grunt.registerTask('default', ['server']);
};
