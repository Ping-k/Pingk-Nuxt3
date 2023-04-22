<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-19 16:43:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-21 10:43:58
-->

<template>
    <div class="text-center">
        <button class="p-2 px-5 mx-3 text-white rounded bg--600 bg-amber-600" @click="routerError">路由-404</button>
        <button class="p-2 px-5 mx-3 text-white rounded bg--600 bg-amber-600" @click="apiNotFund">Api-404</button>
        <button class="p-2 px-5 mx-3 text-white rounded bg--600 bg-amber-600" @click="api404">Api-res-404</button>
        <button class="p-2 px-5 mx-3 text-white rounded bg--600 bg-amber-600" @click="api500">Api-res-500</button>
    </div>
</template>
<script setup>
definePageMeta({
    layout: false, // 关闭默认布局
});

const routerError = () => {
    navigateTo('/not-found')
}
const apiNotFund = async () => {
    const test = await useFetch('/api/test404')
}
const api404 = async () => {
    const test = await useFetch('/api/test')
}
const api500 = async () => {
    const test = await useFetch('/api/test')
}
</script>
<style lang="scss"></style>