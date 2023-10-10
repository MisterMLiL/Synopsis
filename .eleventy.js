module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/**/*.png");
  eleventyConfig.addPassthroughCopy("content/**/*.jpg");
  eleventyConfig.addPassthroughCopy("content/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("content/**/*.svg");
  eleventyConfig.addPassthroughCopy("public/**/*");
  eleventyConfig.addPassthroughCopy("public/**/*.svg");
  eleventyConfig.addPassthroughCopy("content/pages/**/files/**/*");

  eleventyConfig.addPairedShortcode("contentblock", function(content) {
    return `<div class="content-block">${content}</div>`;
  })

  eleventyConfig.addPairedShortcode("files", function(content) {
    return `<details class="dd-list"><summary><h1>Файлы</h1></summary>${content}</details>`;
  })

  eleventyConfig.addShortcode("summarylink", function(name, link) { 
    return `<p><a href="../files/${link}" download>${name}</a></p>`
  });

  eleventyConfig.addShortcode("summarylinktests", function(name, link) { 
    return `<p><a href="../../files/${link}" download>${name}</a></p>`
  });

  eleventyConfig.addShortcode("image", function(url) {
    return `<div class="image-block"><img src="${url}"></div>`;
  })

  return {
    templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
  };
};
