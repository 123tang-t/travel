// 在根目录下创建vue.config.js,如下配置：
module.exports = {
  devServer: {
    proxy: {
        '/api': {
            target: 'http://localhost:8080',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^api': '/mock'//路劲代理转发
            }
        }
    }
  }
}