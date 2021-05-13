const AngularTemplateCacheWebpackPlugin = require('angular-templatecache-webpack-plugin');

module.exports = {
  plugins: [
    new AngularTemplateCacheWebpackPlugin({
        source: 'templates/**/*.html'
        /**
         * See options and defaults below for more details
         */
    })
  ]
}