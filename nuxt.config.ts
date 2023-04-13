/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-10 16:25:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-12 13:13:26
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
})
