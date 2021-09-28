const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const path = require('path');

module.exports = {
  entry: {
    main: ['./src/js/index.js', './src/scss/index.scss'],
    vendors: ['./src/js/vendors.js', './src/scss/vendors.scss'],
  },
  output: {
    path: path.join(__dirname, 'static', 'wp-gen'),
    //path: path.join(__dirname, 'resources', 'build'),
    filename: '[name]-[contenthash].js',
    // chunkFilename: '[id]-[chunkhash].js',
    library: 'wpLib',
  },
  // optimization: {
  //   moduleIds: 'deterministic',
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //         enforce: true
  //       },
  //     },
  //   },
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        //test: /\.m?js$/,
        //exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,  // 4. Extract CSS file from js
          'css-loader',      // 3. resolve includes and files
          'postcss-loader', // 2. run autoprefixer and - see config file ()
          //'sass-loader',      // 1. Convert sass into css
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "./src/scss/scss-variables.scss";',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new SVGSpritemapPlugin('src/icons/**/*.svg', { 
      output: {
        filename: 'icons/sprite.svg',
        svgo: true,//compression
      },
      sprite: {
        prefix: false, //does not add prefix to #name of each svg
      },
    }),
    new WebpackAssetsManifest({
      output: '../../data/manifest.json', //relative to webpack output path
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id]-[chunkhash].css',
    }),
  ],
}; 