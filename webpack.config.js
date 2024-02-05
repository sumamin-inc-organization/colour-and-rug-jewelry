const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pages = [
  "index",
  "thanks",
];

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  mode:'development',
  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
          title: "COLOR & RUG-JEWELRY",
        })
    ),
    new MiniCssExtractPlugin({ filename: "[name].css" }) // Add this line .[contenthash]
  ),
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"[name].[contenthash].js",
    clean:true,
    assetModuleFilename:'./images/[name][ext]',
},
  devtool:'source-map',
  devServer:{
      static:{
          directory:path.resolve(__dirname,'dist')
      },
      port:3000,
      open:true,
      hot:true,
      compress:true,
      historyApiFallback:true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};