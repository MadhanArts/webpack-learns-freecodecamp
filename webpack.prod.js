const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  //   devtool: 'none',
  // entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true, // this also used instead of CleanWebpackPlugin
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/template.html',
        inject: 'body',
        minify:{
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        }
      }),
    ],
  },
  module: {
    // loader loads in reverse order
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader, // extract css into files 
          {
            loader: 'css-loader', // to convert css file to commonjs
          },
          {
            loader: 'sass-loader', // to convert sass file to css
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({ filename: '[name].[contenthash].css' }),
    new CleanWebpackPlugin(), // this can also achieved using output.clean in webpack 5
  ],
});
