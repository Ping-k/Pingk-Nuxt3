/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-10 16:25:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-17 15:27:51
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
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],
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
})
