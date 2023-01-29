module.exports = {
    devServer: {
        disableHostCheck: true,
        public: 'http://localhost:8080',
    }
}
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  devServer: {
    port: 8080,
    host: 'localhost',
    https: false,
    open: true,
    allowedHosts: 'all'
  },
  transpileDependencies: true,
// 其他webpack配置
  chainWebpack: (config) => {
    // 这个是给 webpack-dev-server开启可IP和域名访问权限。（已弃用，已写入DevServer中）
    // config.devServer.disableHostCheck(true)
  }
})