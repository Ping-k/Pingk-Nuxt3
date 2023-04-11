<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-11 13:42:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-11 13:55:48
-->
<template>
    <div class="container mx-auto">
        <ul class="text-blue-500 p-[30px]">
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
</template>
  
<script setup></script>
  
<style lang="scss"></style>