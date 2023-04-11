<template>
  <div>
    <!-- <div class="test">hello scss</div>
    <div class="text-red-500">hello Nuxt3</div>
    <h1 class="text-4xl text-green-700 text-center font-semibold">Hello Tailwind</h1> -->
    <!-- <NuxtWelcome /> -->
    <form class="float-right">
      <select v-model="locale">
        <option value="en">en</option>
        <option value="zh">zh</option>
      </select>
    </form>

    <AppHeader />

    <p>{{ $t('welcome') }}</p>
    <div class="container mx-auto">
      <NuxtPage></NuxtPage>
    </div>

    <AppFooter />

  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
const { locale } = useI18n()
</script>

<style lang="scss">
.test {
  color: red;
  font-size: 20px;
}
</style>
