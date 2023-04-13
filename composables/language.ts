//composables文件夹下新建 languages.js文件,
import { useState, useCookie } from 'nuxt/app'
// import { useState, useCookie } from '#app' 这两种方式都可以导入useState,方法
//示例：（使用命名导出）
export const userLanguages = () => {
  const language = useCookie('lang')
  console.log('userLanguages：', language.value)
  return useState('userLang', () => language.value ?? 'en-US')
}
