<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-11 10:01:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-17 15:47:58
-->
<template>
    <div>
        params：{{ $route.params.id }}
        query：{{ $route.query.id }}
        <br />
        <br />

        <input type="text" v-model="orderNumber">
        <button @click="getDetail">查询</button>

        <p>集運包裹單号"{{ orderNumber }}"追蹤結果</p>
        <ul>
            <li v-for="w in detail">
                {{ w?.time }}
                <div v-html="w?.location"></div>
            </li>
        </ul>
    </div>
</template>
<script setup>

useHead({
    title: '订单 Pingk-Nuxt',
    meta: [
        { name: 'description', content: '订单' }
    ],
    bodyAttrs: {
        class: '订单'
    },
    script: [{ children: 'console.log(\'订单\')' }]
})

const route = useRoute()
console.log(route.params)
console.log(route.query)
const orderNumber = ref(560003)
const detail = ref({});

// 初始化加载走的SSR所以不走代理，直连访问
// const detail = await useFetch('http://jy.ifunex.com/cservices/ordertrack?num=' + orderNumber.value)
// 所以这里走api代理无效
// const detail = await useFetch('apis/cservices/ordertrack?num=' + orderNumber.value)
console.log(detail)

const getDetail = async () => {
    // useAsyncData 类似一个封装的$fetch
    let data = await useAsyncData('test', () => $fetch('apis/cservices/ordertrack?num=' + orderNumber.value));
    detail.value = data.data.value;

    /**
     * $fetch 是nuxt3封装的useFetch，返回的是实际值
     */
    // detail.value = await $fetch('apis/cservices/ordertrack?num=' + orderNumber.value)
    // console.log(detail)

    /**
     * useFetch 返回的是整个http请求报文，结果在data中获取。
     */
    // let dd = await useFetch('apis/cservices/ordertrack?num=' + orderNumber.value)
    // detail.value = dd.data.value;
    // console.log(detail)
}
</script> 