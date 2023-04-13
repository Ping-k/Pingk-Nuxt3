/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-11 17:19:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-11 17:46:09
 */
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export default defineNuxtPlugin((nuxtApp: any) => {
  // console.log(nuxtApp)
  nuxtApp.$pinia.use(piniaPluginPersistedstate)
})
