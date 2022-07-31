module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addWatchTarget('src/assets/css/');

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'dist',
    },
    templateFormats: ['njk', 'html'],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
