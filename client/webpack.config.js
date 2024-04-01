var path = require("path");
var SRC_DIR = path.join(__dirname, "/src");
var DIST_DIR = path.join(__dirname, "/dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      // Add this rule for handling image assets
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  // If you're using React Router or other client-side routing,
  // you might want to consider adding this to handle client-side navigation.
  // It redirects all server requests to /index.html, letting React Router handle routing.
  devServer: {
    historyApiFallback: true,
  },
  // Resolve .js and .jsx file extensions so you can leave them off when importing.
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
