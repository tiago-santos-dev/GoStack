const path = require('path');//caminho

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),//arquivo de entrada
  output: { //arquivo que vai ser gerado depois de convertido
    path: path.resolve(__dirname, 'public'),//pasta que vai receber o arquivo
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {

    rules: [  //regras para conversão 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
};