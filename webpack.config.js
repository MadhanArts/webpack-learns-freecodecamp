const path = require('path');

module.exports = {
  mode: 'development',
  //   devtool: 'none',
  entry: './src/index.js',
  output: {
    filename: 'master.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {

    // loader loads in reverse order
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // inject loaded css webpack to DOM
          },
          {
            loader: 'css-loader', // to convert css file to webpack
          },
        ],
      },
    ],
  },
};
