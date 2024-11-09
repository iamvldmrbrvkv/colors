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
     // all the necessary options are in one place
      entry: {
        index: 'src/index.html', // save generated HTML into dist/index.html
      },
      js: {
        filename: 'js/[name].[contenthash:8].js', // JS output filename
      },
      css: {
        filename: 'css/[name].[contenthash:8].css', // CSS output filename
      },
    }),
  ],
  
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