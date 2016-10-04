'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-sass-lint');

    grunt.initConfig({
        eslint: {
            options: {
                fix: true
            },
            target: [
                'Gruntfile.js',
                'src/**/*.js'
            ]
        },
        sasslint: {
            target: [
                './src/**/*.scss'
            ],
            options: {
                configFile: '.sass-lint.yml'
            }
        }
    });

    grunt.registerTask('test', ['sasslint', 'eslint']);
};
