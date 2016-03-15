var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: "sourcemap",
  entry: [
    //'webpack-hot-middleware/client',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ "react-hot", "babel" ],
				exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
			{
        test: /\.json/,
        loaders: [ 'json' ],
        include: path.join(__dirname, 'src')
      },
			{
				test: /\.(css|scss)$/,
				loaders: [ 'style', 'css', 'sass' ],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.(png|jpg)$/,
				loaders: [ 'url-loader?limit=8192' ],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.ls$/,
				loaders: [ "react-hot", "livescript" ],
				include: path.join(__dirname, 'src')
			}
    ]
  }
}
