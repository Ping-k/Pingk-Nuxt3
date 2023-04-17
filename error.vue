<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-17 14:01:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-17 14:49:19
-->
<template>
    <div>404</div>
    <h2>
        <NuxtLink to="/">Back to Home</NuxtLink>
    </h2>
    <pre>错误信息：{{ error }}</pre>
</template>
<script setup>
useHead({
    title: 'Error Pingk-Nuxt',
    meta: [
        { name: 'description', content: 'Error' }
    ],
    bodyAttrs: {
        class: 'Error'
    },
    script: [{ children: 'console.log(\'Error\')' }]
})

/**
 * nuxt3错误页面前移
 * https://nuxt.com.cn/docs/migration/pages-and-layouts#%E8%BF%81%E7%A7%BB-1
 */
const orderNumber = ref(560003)
// 所以这里走api代理无效
const detail = await useFetch('apis/cservices/ordertrack?num=' + orderNumber.value)
console.log(detail)

const error = useError();
console.log(error)

const someErrorLogger = () => {
    return error.message;
}

</script>
<style lang="scss"></style>
