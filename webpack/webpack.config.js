const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'), // 打包后的文件存放的地方
    filename: 'index.js', // 打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // 用正则匹配文件路径
        use: 'ts-loader', // 加载器名
      },
    ],
  },
  devServer: {
    port: 1988,
    proxy: {},
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
