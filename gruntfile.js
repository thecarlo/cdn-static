module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      options: {},
      target: {
        files: [
          {
            expand: true,
            src: ['dist/**/*.css'],
            dest: '',
          },
        ],
      },
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          ignoreCustomFragments: [],
        },
        files: [
          {
            expand: true,
            src: ['dist/**/*.html'],
            dest: '',
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['cssmin', 'htmlmin']);
};
