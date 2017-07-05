var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    },
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2'
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        use: [
          'url-loader?limit=8192',
          'img-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};