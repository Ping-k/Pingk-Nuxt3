<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-11 09:51:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-11 13:54:42
-->
<template>
    <div>
        用户id： params：{{ $route.params.id }}
        query：{{ $route.query.id }}
    </div>
</template>
<script setup>
const route = useRoute()
console.log(route.params)
console.log(route.query)
</script> 
