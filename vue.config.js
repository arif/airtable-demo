module.exports = {
  assetsDir: 'src/assets',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/assets/style/variables.scss"; @import "src/assets/style/mixins.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    // remove the prefetch plugin.
    config.plugins.delete('prefetch');
  },
  productionSourceMap: false,
};
