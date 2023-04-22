/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-10 16:25:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-19 16:03:43
 */

// import  i18n  from "./plugins/i18n";

import { locales } from './locales/index'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: 'Pingk-Nuxt',
      meta: [
        { name: 'description', content: 'pingk nuxt test' },
        { name: 'keywords', content: 'nuxt' },
        { name: 'applicable-device', content: 'pc, mobile' }, // 移动pc适配
      ],
    },
    // 页面切换过渡效果：https://nuxt.com.cn/docs/getting-started/transitions#%E8%BF%87%E6%B8%A1
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  // 环境变量、私有令牌配置：https://nuxt.com.cn/docs/getting-started/configuration#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%92%8C%E7%A7%81%E6%9C%89%E4%BB%A4%E7%89%8C
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
  vite: {
    // 公共样式：https://nuxt.com.cn/docs/getting-started/assets#%E7%A4%BA%E4%BE%8B-2
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/default.scss" as *;',
        },
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/devtools',
  ],
  // i18n: {
  //   // add `vueI18n` option to `@nuxtjs/i18n` module options
  //   vueI18n: {
  //     legacy: false,
  //     locale: 'en-US',
  //     messages: locales,
  //   },
  // },
  nitro: {
    // 代理 https://nitro.unjs.io/config/
    devProxy: {
      '/apis': {
        target: 'http://jy.ifunex.com',
        changeOrigin: true,
      },
    },
  },
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
  // 关闭问卷调查数据收集
  telemetry: false,
})
