'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks('grunt-mocha-test');

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
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test/reports/results/txt',
                    require: 'babel-register'
                },
                src: ['test/**/*.test.js']
            }
        }
    });

    grunt.registerTask('test', ['sasslint', 'eslint', 'mochaTest']);
};
