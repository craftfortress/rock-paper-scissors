 module.exports = function(grunt) {
 
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    cleanBowerDir: true
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'js/**/*.js', 'test/*.js']
        },
        qunit: {
            all: ['test/runner.html']
        },  
        concat: {
            project: {
                src:  [ 'js/view.js','js/controller.js', 'js/ai.js','js/main.js'],
                dest: 'build/js/main.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.js'
            }
        },

        copy: {
              main: {
                files: [
                  // includes files within path
                  {expand: true, src: ['index.html','css/style.css','sounds/*', 'images/*'], dest:   'build/' , filter: 'isFile'} 
                ],
              },
            }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task
    grunt.registerTask('default', [  'concat', 'copy']);

    // Additional tasks
    grunt.registerTask('test', ['bower', 'jshint', 'qunit']);
    grunt.registerTask('complete', ['bower', 'jshint', 'qunit', 'sass', 'concat', 'uglify']);

};

