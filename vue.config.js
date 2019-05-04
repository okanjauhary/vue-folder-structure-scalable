const path = require('path')
var webpack = require('webpack');

module.exports = {
  devServer: {
    port: 5000 // CHANGE YOUR PORT HERE!
  },
  configureWebpack: {
    resolve: {
      alias: {
        'Helpers': path.resolve(__dirname,'./src/helpers'),
        'Components': path.resolve(__dirname,'./src/components'),
        'Views': path.resolve(__dirname,'./src/views'),
        'Api': path.resolve(__dirname,'./src/api'),
        'Config': path.resolve(__dirname,'./src/config'),
        'Services': path.resolve(__dirname,'./src/services'),
        'Router': path.resolve(__dirname,'./src/router'),
        'Store': path.resolve(__dirname,'./src/vuex'),
        'Assets': path.resolve(__dirname,'./src/assets'),
        'Style': path.resolve(__dirname,'./src/assets/scss'),
        'Mixins': path.resolve(__dirname,'./src/utils/mixins'),
        'Directives': path.resolve(__dirname,'./src/utils/directives'),
        'Filters': path.resolve(__dirname,'./src/utils/filters'),
      }
    }
  }
}