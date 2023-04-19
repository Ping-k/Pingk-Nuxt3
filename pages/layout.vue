<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-19 16:43:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-19 17:34:30
-->
<template>
    <div>
        pingk-布局-页面。。。
    </div>
</template>
<script setup>
/**
 * 在你的pages/目录中，你可以使用definePageMeta和useHead来基于当前路由设置元数据。
 */

definePageMeta({
    title: '自定义布局页面', // 默认标题，构建时提取到路由
    layout: "pingk", // 指定布局
});

const route = useRoute()
useHead({
    title: `App Name - ${route.meta.title}` // 动态标题，渲染时动态构建
})
</script>
<style lang="scss"></style>