<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-17 14:01:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-17 17:36:27
-->
<template>
    <div>
        <h2 class="text-center my-8">
            <NuxtLink to="/">Back to Home</NuxtLink>
        </h2>
        <div v-if="error.statusCode === 404">
            <div>404</div>
            <img src="/images/1.png" alt="404" />
            <img src="/images/404.jpg" alt="404" />
            <img src="~/assets/images/404.png" alt="404" />
        </div>
        <div v-if="error.statusCode === 500">
            <div>500</div>
        </div>
        <pre>错误信息：{{ error }}</pre>
    </div>
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
 * nuxt3错误页面
 * https://nuxt.com.cn/docs/migration/pages-and-layouts#%E8%BF%81%E7%A7%BB-1
 */
const error = useError();
console.log(error)

</script>
<style lang="scss" scoped>
div {
    color: $color;
    @include title;
}

img {
    max-width: 200px;
    max-height: 200px;
}
</style>
