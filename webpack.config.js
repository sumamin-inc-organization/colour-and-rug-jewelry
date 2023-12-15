const path = require("path");


module.exports = {
  entry: './src/index.js',
  output: {
    assetModuleFilename: "assets/[name][ext]",
    filename: "index.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

};