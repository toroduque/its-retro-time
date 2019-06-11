module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './public'
    }
  };