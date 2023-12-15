const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode:'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'FUTURE L DAYS',
      filename:'index.html',
      template:'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename:"[name].[contenthash].css"
    })
  ],
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"[name][contenthash].js",
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