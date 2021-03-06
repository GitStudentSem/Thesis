const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "dev-bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  devServer: {
    open: true,
    port: 8080,
    hot: true,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
