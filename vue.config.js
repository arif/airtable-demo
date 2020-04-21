module.exports = {
  assetsDir: 'src/assets',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "src/assets/style/variables.scss"; @import "src/assets/style/mixins.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    // remove the prefetch plugin.
    config.plugins.delete('prefetch');
  },
  devServer: {
    proxy: {
      '/api-airtable': {
        target: process.env.API_AIRTABLE_URI,
        pathRewrite: { '^api-airtable': '/' },
        changeOrigin: true,
      },
    },
  },
  productionSourceMap: false,
};
