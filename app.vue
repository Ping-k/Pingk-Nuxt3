<template>
  <div>
    <!-- <div class="test">hello scss</div>
    <div class="text-red-500">hello Nuxt3</div>
    <h1 class="text-4xl text-green-700 text-center font-semibold">Hello Tailwind</h1> -->
    <!-- <NuxtWelcome /> -->


    <AppHeader />


    <NuxtPage></NuxtPage>


    <AppFooter />

  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style lang="scss">
.test {
  color: red;
  font-size: 20px;
}
</style>
