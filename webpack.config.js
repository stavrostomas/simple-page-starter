const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',  
  entry: './src/js/main.js',  
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js',  
    publicPath:'/dist'
  },
  module: {
    rules:[
        { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
        },
        {
            test: /\.s[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader'  },
                { loader: 'sass-loader' }
            ]
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    })
  ]
};