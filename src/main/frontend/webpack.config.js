let WriteFilePlugin = require("write-file-webpack-plugin");

const webpack = require("webpack");
const path = require("path");
const Dotenv = require("dotenv-webpack")

module.exports = {
  entry: {
    path: "./main.js",
  },
  output: {
    path: path.join(__dirname, "../../../target/classes/static"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [new WriteFilePlugin(), new Dotenv({
    path: './.env'
  })],
  devtool: "eval-source-map",
};
