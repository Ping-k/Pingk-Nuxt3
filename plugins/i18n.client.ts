/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-12 09:51:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-13 11:20:44
 */

import { createI18n } from 'vue-i18n'
import { defineNuxtPlugin } from '#app'
import { locales } from '../locales/index'
import en from '~/locales/modules/en'
import zh from '~/locales/modules/zh'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const Cookies = useCookie('lang')
    const defaultLanguage = 'en-US'
    Cookies.value = Cookies.value || defaultLanguage

    console.log('i18n=========', Cookies.value, locales)
    const i18nClient = createI18n({
      // locales: ['en-US', 'zh-CN'],
      defaultLocale: defaultLanguage,
      // legacy: false,
      // globalInjection: true,
      locale: Cookies.value || defaultLanguage,
      fallbackLocale: defaultLanguage, //回退策略，指定的locale中没有找到对应资源的情况下使用的locale
      // warnHtmlMessage: false,
      messages: {
        en: en,
        'en-US': en,
        'zh-CN': zh,
      },
    })
    nuxtApp.vueApp.use(i18nClient)
  }
})
