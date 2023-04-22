<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-17 15:55:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-21 10:12:05
-->
<template>
    <div class="text-center">
        <button class="p-3 px-6 mx-4 text-white bg--600 bg-amber-600 rounded" @click="login">登录</button>
    </div>
</template>

<script setup>

const login = async () => {
    const data = await useFetch('/api/getUser')
    useState('userInfo', () => data.data.value)
    console.log('====登录成功：', useState('userInfo'));
    // navigateTo('/')
    navigateTo({
        path: '/',
        query: {
            name: '张三',
            type: '1'
        }
    })
}

</script>
<style lang="scss"></style>