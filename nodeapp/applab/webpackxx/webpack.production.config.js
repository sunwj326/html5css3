// webpack.production.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',

    entry: __dirname + "/app/main.js", // unique entry file
    output: {
        path: __dirname + "/build",    // output path after package process
        filename: "bundle-[hash].js"
    },
    

    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader"
                }],
            })
        }]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" // create a instance of the plugin with the parameters
        }),
        new webpack.HotModuleReplacementPlugin(), // hot loading plugin
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ],

    devServer: {
		//contentBase: "./build", // local www bash directory
		historyApiFallback: true, // do not redirect
		inline: true, // refresh after file changing
		hot: true
    },
};