const path = require("path");
// 基础的webpack配置
module.exports = {
  module: {
    rules: [
      // ts，tsx，js，jsx处理
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // babel-loader处理jsx或tsx文件
          options: { cacheDirectory: true },
        },
      },
      // C++模块 .node文件处理
      {
        test: /\.node$/,
        exclude: /node_modules/,
        use: "node-loader", // node-loader处理.node文件，用于处理C++模块
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".node"],
    alias: {
      "@": path.resolve(__dirname, "src"), // 别名，方便import
      "~resources": path.resolve(__dirname, "resources"), // 别名，方便import
    },
  },
  devtool: "source-map",
  plugins: [],
  cache: {
    type: "filesystem",
    buildDependencies: {
      /* 将你的 config 添加为 buildDependency，           
         以便在改变 config 时获得缓存无效 */
      config: [__filename],
      /* 如果有其他的东西被构建依赖，           
         你可以在这里添加它们 */
      /* 注意，webpack.config，           
         加载器和所有从你的配置中引用的模块都会被自动添加 */
    },
    // 指定缓存的版本
    version: "1.0",
  },
};
