<template>
    <div>about</div>
    <ul class="text-blue-500 p-[50px]">
        <li class="float-left mx-[20px]">
            <NuxtLink to="/">首页</NuxtLink>
        </li>
        <li class="float-left mx-[20px]">
            <NuxtLink to="/user/1">用户</NuxtLink>
        </li>
        <li class="float-left mx-[20px]">
            <NuxtLink to="/detail?id=11">详情</NuxtLink>
        </li>
    </ul>
</template>
<script setup>
useHead({
    title: 'About Pingk-Nuxt',
    meta: [
        { name: 'description', content: 'About' }
    ],
    bodyAttrs: {
        class: 'About'
    },
    script: [{ children: 'console.log(\'About\')' }]
})
</script>
<style lang="scss"></style>
