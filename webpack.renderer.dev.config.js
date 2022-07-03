// 渲染进程dev环境下的webpack配置
const path = require("path");
const webpack = require("webpack");
const { merge: WebpackMerge } = require("webpack-merge");
const { spawn } = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackBaseConfig = require("./webpack.base.config");

const port = process.env.PORT || 3000;
const publicPath = `http://localhost:${port}/dist`;

const hot = [
  "react-hot-loader/patch",
  `webpack-dev-server/client?http://localhost:${port}/`,
  "webpack/hot/only-dev-server",
];

const entry = {
  index: hot.concat(require.resolve("./src/renderer/index/index.tsx")), // 主页面
};
// 生成html模版
const htmlWebpackPlugin = Object.keys(entry).map(
  (name) =>
    new HtmlWebpackPlugin({
      inject: "body",
      scriptLoading: "defer",
      template: path.join(__dirname, "resources/template/template.html"),
      minify: false,
      filename: `${name}.html`,
      chunks: [name],
    })
);

module.exports = WebpackMerge(webpackBaseConfig, {
  devtool: "inline-source-map",
  mode: "development",
  target: "electron-renderer",
  entry,
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom", // 开发模式下
    },
  },

  output: { publicPath, filename: "[name].dev.js", clean: true },

  module: {
    rules: [
      // 处理全局css样式
      {
        test: /\.global\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
        ],
      },
      // 处理css样式，使用css模块
      {
        test: /^((?!\.global).)*\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: { localIdentName: "[name]__[local]__[hash:base64:5]" },
              sourceMap: true,
              importLoaders: 1,
            },
          },
        ],
      },
      // 处理图片
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        type: "asset/inline",
      },
      // 处理字体 WOFF
      {
        test: /\.woff(\?v=\d+\.\d+\/\d+)?$/,
        type: "asset/inline",
      },
      // 处理字体 WOFF2
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/inline",
      },
      // 处理字体 TTF
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/inline",
      },
      // 处理字体 EOT
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/inline",
      },
      // 处理SVG
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/inline",
      },
    ],
  },

  plugins: [
    // webpack 模块热重载
    new webpack.HotModuleReplacementPlugin({
      multiStep: false,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    ...htmlWebpackPlugin,
  ],
  // webpack服务，打包后的页面路径为http://localhost:${port}/dist/${name}.html
  devServer: {
    onBeforeSetupMiddleware: () => {
      // 启动渲染进程后执行主进程打包
      console.log("start main process...");
      spawn("npm", ["run", "dev-main"], {
        // 相当于命令行执行npm run dev-main
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(code))
        .on("error", (spawnError) => console.error(spawnError));
    },
    port,
    devMiddleware: {
      publicPath,
    },
    compress: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    static: {
      publicPath: path.join(__dirname, "dist"),
    },
  },
});
