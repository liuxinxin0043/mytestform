module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                src: 'dist/index.html',
                dest: 'dist/index.html'

            }
        },
        cssmin: {
            'dist/loginform.css': 'loginform.css'
        },
        uglify: {
            release:{
                files: {
                  'dist/loginform.js': 'loginform.js'
                }
              }  
        }
    })
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.registerTask('release', ['htmlmin', 'cssmin', 'uglify'])
}