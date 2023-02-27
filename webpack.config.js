const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  //   devtool: 'none',
  entry: './src/index.js',
  output: {
    filename: 'master.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    // loader loads in reverse order
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader', // inject loaded css webpack to DOM
      //     },
      //     {
      //       loader: 'css-loader', // to convert css file to commonjs
      //     },
      //   ],
      // },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // inject loaded css webpack to DOM
          },
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
    new HtmlWebpackPlugin({
      template: './src/template.html',
      inject: 'body'
    }),
  ],
};
