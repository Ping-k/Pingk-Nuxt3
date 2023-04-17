<template>
    <div>
        <div class="test">hello scss</div>
        <div class="text-red-500">hello Nuxt3</div>
        <h1 class="text-center text-4xl font-semibold text-green-700">
            Hello Tailwind
        </h1>

        <AppAlert>
            This is an auto-imported component.
        </AppAlert>

        <button class="bg-red-400 mx-[20px] p-1 rounded border-solid border-4 border-light-red-500"
            @click="toggleDark()">暗黑模式</button>{{ isDark }}

        <p>/api/getData: </p>
        <pre>{{ data }}</pre>
        <p>/api/getUser: </p>
        <pre>{{ users }}</pre>
    </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
// import AppAlert from '../components/AppAlert.vue'

// 鉴权是否登录
// definePageMeta({
//     middleware: 'auth'
// })

const data = await useFetch('/api/getData')
const users = await useFetch('/api/getUser')
const test = await useFetch('/api/test')
console.log(test.data.value)
const test2 = await useAsyncData('/api/test', () => $fetch('/api/test'))
console.log(test2.data.value)

const isDark = useDark()
const toggleDark = useToggle(isDark)

const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig)
const appConfig = useAppConfig()
console.log(appConfig)
</script>
<style lang="scss"></style>
