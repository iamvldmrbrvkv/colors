const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        index: 'src/index.html',
      },
      js: {
        filename: 'js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'css/[name].[contenthash:8].css',
      },
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  
  module: {
      rules: [
        {
          test: /\.s?css$/,
          use: ['css-loader', 'sass-loader'],
        },
        {
          test: /\.(ico|png|jp?g|svg)/,
          type: 'asset/resource',
        },
      ],
    },
};