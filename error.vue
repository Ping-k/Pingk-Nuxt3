<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-17 14:01:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-21 10:02:49
-->
<template>
    <div>
        <h2 class="my-8 text-center">
            <NuxtLink to="/">Back to Home</NuxtLink>
        </h2>
        <div v-if="error.statusCode === 404" style="overflow: auto;text-align: center;">
            <div>404</div>
            <img src="/images/404.jpg" alt="404" />
            <img src="~/assets/images/404.png" alt="404" />
        </div>
        <div v-if="error.statusCode === 500">
            <div>500</div>
        </div>

        <div>
            <button class="p-2 px-4 text-white bg-yellow-600 rounded" style="background:#e8982f;color: white;padding: 10px;"
                @click="handleError">清空错误</button>
            <pre class="text-left" style="text-align: left;">错误信息：{{ error }}</pre>
        </div>
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
// const error = useError();
// console.log(error)

const props = defineProps({
    error: Object
})
console.log(props.error)
const handleError = () => clearError({ redirect: '/' })

</script>
<style lang="scss" scoped>
div {
    color: $color;
    @include title;
}

img {
    max-width: 200px;
    max-height: 200px;
    display: inline-block;
    margin: 10px;
}
</style>
