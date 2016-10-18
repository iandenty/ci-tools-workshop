'use strict';

module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
        sasslint: 'grunt-sass-lint',
        mochaTest: 'grunt-mocha-test'
    });

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
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/scripts/app.js': 'src/**.js'
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test/reports/results.txt',
                    require: 'babel-register'
                },
                src: ['test/**/*.js']
            }
        }
    });

    grunt.registerTask('scripts', ['babel']);
    grunt.registerTask('test', ['sasslint', 'eslint', 'mochaTest']);
    grunt.registerTask('default', ['test']);
};
