const path = require("path");
const { merge: WebpackMerge } = require("webpack-merge");
const webpack = require("webpack");
const webpackDevConfig = require("./webpack.main.dev.config");

module.exports = WebpackMerge(webpackDevConfig, {
  devtool: "eval-cheap-module-source-map",
  mode: "production", // 生产模式
  output: {
    path: path.join(__dirname, "dist/main"),
    filename: "main.prod.js", // 生产模式文件名为main.prod.js
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
    }),
  ],
});
