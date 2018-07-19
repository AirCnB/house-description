const path = require('path');

module.exports = {
  entry: './client/component/app.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
  	rules: [
  	  { 
  	  	test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
  	  },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
  	]
  }
};