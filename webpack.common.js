const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //   devtool: 'none',
  entry: {
    main: './src/index.js', // these keys will be passed as [name] while setting output file name
    vendor: './src/vendor.js'
  },
  // output: {
  //   filename: 'master.[contenthash].js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      inject: 'body'
    }),
  ],
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
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "javascript/auto",  // since webpack 5 because webpack 5 has Assets loader by defaut
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: 'images',
              esModule: false // since webpack 5 because webpack 5 has Assets loader by defaut
            }
          },
        ],
      },
    ],
  },
};
