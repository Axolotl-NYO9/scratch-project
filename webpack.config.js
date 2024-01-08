const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname,"./client/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        // test: /\.(js|js)$/,
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
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
      '/api': 'http://localhost:3000',
      '/boredButton': 'http://localhost:3000',
      '/': 'http://localhost:3000',
      '/build/bundle.js': 'http://localhost:3000'
    },
  },
  //plugin
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "./client/index.html"),
    }),
  ],
};
