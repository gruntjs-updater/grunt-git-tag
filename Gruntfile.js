/*
 * grunt-git-tag
 * https://github.com/markparolisi/grunt-git-tag
 *
 * Copyright (c) 2013 Mark Parolisi
 * Licensed under the MIT license.
 */

/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        nodeunit: {
            tests: ['test/*_test.js']
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ]
        }

    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.registerTask('default', ['jshint']);
};
