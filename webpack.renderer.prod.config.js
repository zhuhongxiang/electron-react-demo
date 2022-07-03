// 渲染进程prod环境webpack配置
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const { merge: WebpackMerge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");

const entry = {
  index: path.join(__dirname, "src/renderer/index/index.tsx"), // 页面入口
};
// 对每一个入口生成一个.html文件
const htmlWebpackPlugin = Object.keys(entry).map(
  (name) =>
    new HtmlWebpackPlugin({
      inject: "body",
      scriptLoading: "defer",
      template: path.join(__dirname, "resources/template/template.html"), // template.html是一个很简单的html模版
      minify: false,
      filename: `${name}/index.html`,
      chunks: [name],
    })
);

module.exports = WebpackMerge(webpackBaseConfig, {
  devtool: "eval-cheap-module-source-map",
  mode: "production",
  target: "electron-preload",
  entry,
  output: {
    path: path.join(__dirname, "dist/renderer/"),
    publicPath: "../",
    filename: "[name]/index.prod.js", // 输出则是每一个入口对应一个文件夹
    clean: true,
  },
  module: {
    rules: [
      // 文件处理规则
      // 处理全局.css文件
      {
        test: /\.global\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: false, publicPath: "../../" },
          },
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
        ],
      },
      // 一般样式文件，使用css模块
      {
        test: /^((?!\.global).)*\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: { localIdentName: "[name]__[local]__[hash:base64:5]" },
              sourceMap: true,
            },
          },
        ],
      },
      // 处理字体文件 WOFF
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/inline",
      },
      // 处理字体文件 WOFF2
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/inline",
      },
      // 处理字体文件 TTF
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/inline",
      },
      // 处理字体文件 EOT
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/inline",
      },
      // 处理svg文件 SVG
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/inline",
      },
      // 处理图片
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash:8].css",
      chunkFilename: "assets/css/[name].[contenthash:8].css",
    }),
    ...htmlWebpackPlugin,
  ],
});
