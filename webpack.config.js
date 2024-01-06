const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        // resolve: {
        //   extension: [".js", ".jsx"],
        // },
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    port: 8080,
    static: {
      directory: path.resolve(__dirname),
      publicPath: "/",
    },
    proxy: {
      "/api:": "http://localhost:3000",
    },
  },
  //plugin
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "build", "index.html"),
    }),
  ],
};
