module.exports = {
  devServer: {
    open: true, // 启动时打开浏览器
    compress: true, // 本地开启 gzip
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:8080", // 接口域名
        ws: true, // 是否代理 web socket
        changeOrigin: true, //是否跨域
      },
    },
  },
};
