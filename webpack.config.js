const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const mode = process.env.NODE_ENV;
const isDev = mode === "development";
const generateFilename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  entry: {
    main: "./index.js",
  },
  output: {
    filename: `./js/${generateFilename("js")}`,
    path: path.resolve(__dirname, "build"),
    environment: {
      arrowFunction: false,
    },
  },
  mode,
  context: path.resolve(__dirname, "src"),
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${generateFilename("css")}`,
    }),
    new CleanWebpackPlugin({
      patterns: [{ from: "css", to: "css" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|svg|ttf|otf|)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  devServer: {
    contentBase: "./build",
    open: true,
    port: 3000,
    hot: true,
    compress: true,
    overlay: true,
    writeToDisk: false,
    HistoryApiFallback: true,
  },
  devtool: isDev && "source-map",
};
