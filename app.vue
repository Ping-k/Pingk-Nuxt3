<template>
  <div>
    <!-- <div class="test">hello scss</div>
    <div class="text-red-500">hello Nuxt3</div>
    <h1 class="text-4xl text-green-700 text-center font-semibold">Hello Tailwind</h1> -->
    <!-- <NuxtWelcome /> -->
    <form class="float-right">
      <select v-model="locale" @change="changeLocale">
        <option value="en-US">en</option>
        <option value="zh-CN">zh</option>
      </select>
    </form>
    语言：{{ locale }}

    <AppHeader />

    <p>{{ $t('welcome') }}</p>
    <div class="container mx-auto">
      <NuxtPage></NuxtPage>
    </div>

    <AppFooter />

  </div>
</template>

<script setup>
import { useWebsiteStore } from '@/stores'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
// import { storeToRefs } from 'pinia';

const useWebsite = useWebsiteStore();
// // const { locale } = useI18n()
// const { language } = storeToRefs(useWebsite)

// 切换语言
const { locale } = useI18n()
//获取cookie
const language = useCookie('lang')
//获取state值， composables下的文件是自动导入，不需要额外的引入
const userLang = userLanguages()

const changeLocale = (e) => {
  console.log(locale.value, e.target.value);
  useWebsite.setLanguage(locale.value)
  // $i18n.setLocale(locale)

  locale.value = locale.value // 文字显示切换
  language.value = locale.value //更新cookie
  userLang.value = locale.value //更新state
}

onMounted(() => {
  // console.log('ssssssss', language.value)
  // locale.value = language.value;
})

</script>

<style lang="scss">
.test {
  color: red;
  font-size: 20px;
}
</style>
