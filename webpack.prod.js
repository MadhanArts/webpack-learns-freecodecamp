const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  //   devtool: 'none',
  // entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true, // this also used instead of CleanWebpackPlugin
  },
  // module: {
  //   // loader loads in reverse order
  //   rules: [
  //     // {
  //     //   test: /\.css$/,
  //     //   use: [
  //     //     {
  //     //       loader: 'style-loader', // inject loaded css webpack to DOM
  //     //     },
  //     //     {
  //     //       loader: 'css-loader', // to convert css file to commonjs
  //     //     },
  //     //   ],
  //     // },
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         {
  //           loader: 'style-loader', // inject loaded css webpack to DOM
  //         },
  //         {
  //           loader: 'css-loader', // to convert css file to commonjs
  //         },
  //         {
  //           loader: 'sass-loader', // to convert sass file to css
  //         },
  //       ],
  //     },
  //   ],
  // },
  plugins: [
    new CleanWebpackPlugin(), // this can also achieved using output.clean in webpack 5
  ],
});
