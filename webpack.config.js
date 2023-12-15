const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    assetModuleFilename: "images/[name].[ext]", //remove this and un comment the next line in distribution mode
    // assetModuleFilename: "images/[name].[hash][ext]",
    filename: "index.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename:"[name].[contentHash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

};