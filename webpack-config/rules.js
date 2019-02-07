module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },
  {
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "sass-loader",
        options: {
          indentedSyntax: false,
        },
      },
    ],
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    use: {
      loader: "file-loader",
    },
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /node_modules/,
    loader: "url-loader?prefix=font/&limit=5000",
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: "url-loader?limit=10000&mimetype=application/octet-stream",
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: ["url-loader?limit=10000", "img-loader"],
  },
];
