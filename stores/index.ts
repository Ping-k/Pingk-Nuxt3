import { defineStore } from 'pinia'

export const useWebsiteStore = defineStore({
  id: 'website',
  state: () => ({
    locales: 'en',
  }),
  getters: {
    getLocales: (state) => {
      return state.locales
    },
  },
  actions: {
    /**
     * 设置语言
     */
    setLocales(data: any) {
      this.locales = data
    },
  },
})
