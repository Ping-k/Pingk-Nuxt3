/*
 * @Descripttion: nuxt pm2 启动文件
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-11 10:38:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-11 10:59:01
 */

module.exports = {
  apps: [
    {
      name: 'PingkNuxt', // 应用程序名称（默认为不带扩展名的脚本文件名）
      port: '8082', // 端口
      exec_mode: 'cluster', // 启动应用程序的模式，可以是“cluster”或“fork”，默认fork
      instances: '1', // 要启动的应用实例数量，max 最大值
      script: './.output/server/index.mjs', // 启动文件入口
    },
  ],
}
