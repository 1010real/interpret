const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.ts',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer: {
    contentBase: path.join(__dirname,'dist')
  },
};