module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            files: ['test/qunit.html']
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                globals: {
                    'window': true,
                    'jQuery': true
                }
            },
            files: {
                src: ['./src/rgbHex.js']
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            my_target: {
                files: {
                    './dist/rgbHex.min.js': ['./src/rgbHex.js']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'qunit', 'jshint', 'uglify' ]);
};