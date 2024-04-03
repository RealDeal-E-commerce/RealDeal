<<<<<<< HEAD
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
=======
var path = require("path");
var SRC_DIR = path.join(__dirname, "/src");
var DIST_DIR = path.join(__dirname, "/dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
>>>>>>> 88999eabfdf028ca716c9e84e0b6198a6a0d4e4b
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
<<<<<<< HEAD
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
=======
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // New rule for CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
>>>>>>> 88999eabfdf028ca716c9e84e0b6198a6a0d4e4b
  },
  devServer: {
    historyApiFallback: true,
  },
<<<<<<< HEAD
=======
  resolve: {
    extensions: ['.js', '.jsx'],
  }
>>>>>>> 88999eabfdf028ca716c9e84e0b6198a6a0d4e4b
};
