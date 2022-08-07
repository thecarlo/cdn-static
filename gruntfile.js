module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            src: ['dist/assets/css/*.css', '!dist/assets/css/*.min.css'],
            dest: '',
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']);
};
