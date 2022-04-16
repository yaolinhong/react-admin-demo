const path = require('path')
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); 打包分析
// uglifyjs-webpack-plugin@1 打包忽略console，debugger
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const isBuild = process.env.NODE_ENV === 'production'
const env = process.env.REACT_APP_ENV // 环境变量: dev开发 pre预发布 pro线上
const productionPlugins = [
  // 打压缩包
  new CompressionWebpackPlugin({
    algorithm: 'gzip',
    test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
    threshold: 1024,
    minRatio: 0.8
  }),
]
const devPlugins = []
module.exports = {
  // webpack 配置
  webpack: {
    plugins: isBuild ? productionPlugins : devPlugins,
    devtool: isBuild ? 'none' : '#source-map',
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
      // 约定：使用 @scss 表示 样式 文件所在路径
    },
  },
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}