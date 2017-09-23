const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',

	entry: __dirname + "/app/main.js", // unique entry file
	output: {
		path: __dirname + "/build", // output path after package process
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader"
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							module: true
						}
					},
					{
						loader: "postcss-loader"
					}
				]
			}
		]
	},

	plugins: [
		new webpack.BannerPlugin('Copyright counterpartnpm'),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html" // create a instance of the plugin with the parameters
		}),
		new webpack.HotModuleReplacementPlugin() // hot loading plugin
	],

	devServer: {
		//contentBase: "./build", // local www bash directory
		//color: true,
		historyApiFallback: true, // do not redirect
		inline: true, // refresh after file changing
		hot: true
	}

}