<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-11 10:01:35
 * @LastEditors: 
 * @LastEditTime: 2023-04-11 10:01:49
-->
<template>
    <div>
        params：{{ $route.params.id }}
        query：{{ $route.query.id }}
    </div>
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
const route = useRoute()
console.log(route.params)
console.log(route.query)
</script> 