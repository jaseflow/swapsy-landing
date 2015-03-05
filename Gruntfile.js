module.exports = function(grunt) {

  grunt.initConfig({
    stylus: {
        compile: {
            files: {
            'css/theme.css': 'source/styles/theme.styl',
            'css/home.css': 'source/styles/home.styl'
            }
        }
    },
    autoprefixer: {
        no_dest: {
            src: 'css/*.css' // globbing is also possible here
        }
    },
    watch: {
      files: ['source/styles/theme.styl', 'source/styles/home.styl'],
      tasks: ['stylus']
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['stylus']);
  grunt.registerTask('build', ['stylus', 'autoprefixer']);

};
