import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import paths from "./paths";
import rules from "./rules";

module.exports = {
  entry: paths.entryPath,
  module: {
    rules,
  },
  // resolve: {
  //   // library를 땡겨올 때 먼저 찾는 루트 설정
  //   modules: ["modules"],
  //   extensions: ["*", ".js", ".scss", ".css"],
  // },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
};
