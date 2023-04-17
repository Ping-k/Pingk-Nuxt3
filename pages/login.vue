<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-17 15:55:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-17 17:45:23
-->
<template>
    <div>
        <div> 登录 </div>
        <button type="button" @click="login">登录</button>
    </div>
</template>

<script setup>

const login = async () => {
    const data = await useFetch('/api/getData')
    useState('userInfo', () => data.data.value)
    console.log('====登录成功：', useState('userInfo'));
    navigateTo('/')
}

</script>
<style lang="scss"></style>