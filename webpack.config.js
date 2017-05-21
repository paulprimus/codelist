

const webpack = require('webpack');
const path = require('path');

const config = {
	entry: {
		codelist:'./app/app.js',
		vendor: ['react', 'bootstrap', 'redux','react-router-dom']
	},
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: '[name].js',
		sourceMapFilename: '[name].map',		
	},
	devtool: 'inline-source-map',
	module: {
      	rules: [		
			{
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/,
				loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react'],                
                }
			}, 	      	
      	]      		
	},
	plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // Specify the common bundle's name.
        })
    ],
	devServer: {
  		contentBase: path.join(__dirname, 'public'),
  		compress: true,
  		port: 3000
	}
};

module.exports = config;