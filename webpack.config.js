const path = require('path');

const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  devtool: 'source-map',
  // watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx|png|jpe?g)$/,
        exclude: /node_modules/,
        use: [
          // {
          //   loader: 'file-loader?name=dist/[name].[ext]',
          //   // options: {
          //   //   name: '/dist/[name].ext',
          //   // },
          //   //   name: '/dist/[name].[ext]',
          //   // },
          // },
          // { loader: 'image-webpack-loader' },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              // plugins: [
              //   ['@babel/plugin-transform-runtime',
              //     {
              //       regenerator: true,
              //     },
              //   ],
              // ],
            },
          },
          // {
          //   loader: 'url-loader',
          //   options: {
          //     limit: 10000,
          //     name: 'dist/Hamburger/[name].[hash:8].[ext]',
          //   },
          // },
        ],
      },
    ],
  },
};
