import { defineStore } from 'pinia'

export const useWebsiteStore = defineStore({
  id: 'website',
  state: () => ({
    language: 'en',
  }),
  getters: {
    getLanguage: (state) => {
      return state.language
    },
  },
  actions: {
    /**
     * 设置语言
     */
    setLanguage(data: any) {
      this.language = data
    },
  },
  // 持久化
  persist: process.client && {
    key: "website",
    storage: localStorage,
    // paths: ['times'],
  },
})
