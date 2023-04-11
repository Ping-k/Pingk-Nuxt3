/*
 * @Descripttion: nuxt pm2 启动文件
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-11 10:38:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-11 10:44:22
 */

module.exports = {
  apps: [
    {
      name: 'PingkNuxt',
      port: '8082',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
