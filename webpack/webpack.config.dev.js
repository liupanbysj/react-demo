const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

const miniCssExtractPlugin = new MiniCssExtractPlugin({
 filename: 'style/[name].[hash].css',
 chunkFilename: 'style/[id].[hash].css',
 });

const cssRegex = /\.(css|scss)$/;
const cssModuleRegex = /\.module\.(css|scss)$/;

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
});

module.exports = {
  mode: 'development',                              
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {                                         
    path: path.resolve(__dirname, '../build'),      
    filename: 'js/[name].[hash].bundle.js',    
      
  },
  devServer: {
    port: 3000,

  },
  module: {
    rules: [              
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
           {
               test: cssRegex,
               exclude: cssModuleRegex,
               sideEffects: true,
               use: [
                 {
                   loader: MiniCssExtractPlugin.loader,
                   options: {
                    publicPath: '/',  
                    //  hmr: process.env.NODE_ENV === 'development',
                   },
                 },
                 { loader: 'css-loader', options: { importLoaders: 1 } },
                 'sass-loader',
               ],
             },
             {
               test: cssModuleRegex,
               use: [
                 {
                   loader: MiniCssExtractPlugin.loader,
                   options: {
                    publicPath: '/', 
                    //  hmr: process.env.NODE_ENV === 'development',
                   },
                 },
                 {
                   loader: 'css-loader',
                   options: {
                     modules: {
                       localIdentName: '[local]__[hash:base64]',
                     },
                   },
                 },
                 'sass-loader',
               ],
             }
    ],
  },

  plugins: [
    htmlWebpackPlugin,
    miniCssExtractPlugin,
  ],

  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },
};