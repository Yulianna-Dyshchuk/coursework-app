const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "./main.js",
    chunkFilename: "[name].bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ "file-loader" ],
      },
    ],
  },
};
