module.exports = function (eleventyConfig) {
  //mrio: might want to try this to get hot reloading, but
  //it is not necessary to get stuff to work
  //eleventyConfig.setBrowserSyncConfig({
    //host: "0.0.0.0"
  //});
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
