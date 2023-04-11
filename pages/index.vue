<template>
    <div>
        <div class="test">hello scss</div>
        <div class="text-red-500">hello Nuxt3</div>
        <h1 class="text-center text-4xl font-semibold text-green-700">
            Hello Tailwind
        </h1>
        <ul class="text-blue-500 p-[50px]">
            <li class="float-left mx-[20px]">
                <NuxtLink to="/">首页</NuxtLink>
            </li>
            <li class="float-left mx-[20px]">
                <NuxtLink to="/about">关于</NuxtLink>
            </li>
            <li class="float-left mx-[20px]">
                <NuxtLink to="/user/1">用户</NuxtLink>
            </li>
            <li class="float-left mx-[20px]">
                <NuxtLink to="/detail?id=11">详情</NuxtLink>
            </li>
        </ul>
    </div>

    <button class="bg-red-400 mx-[20px] p-1 rounded border-solid border-4 border-light-red-500"
        @click="toggleDark()">暗黑模式</button>{{ isDark }}
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<style lang="scss"></style>
