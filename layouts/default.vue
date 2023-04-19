<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-19 16:28:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-19 17:20:21
-->
<template>
    <div>
        <div class="text-3xl text-center text-orange-700">default-布局</div>
        <pre>{{ html }}</pre>
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>

<script setup>
const html = `
            在nuxt的约定下：只要用户在layouts/下编写布局页面，它将会被自动导入进应用程序。
            默认的情况下如果用户编写的布局文件的文件名是default.vue，那么它将会被默认应用到全局中。
            布局通常与<slot/>一同使用，nuxt在加载布局文件后，<slot/>将会默认加载pages目录下的页面。

            默认层级：layouts
                        app.vue
                            pages
                                组件.vue
                                [目录]
                                    组件.vue
            layouts布局再最外层，如果您的应用程序中只有一个布局，我们建议使用app.vue和<NuxtPage /> component 来代替。
            当手动在pages页面里面添加<NuxtLayout name="pingk"> html </NuxtLayout>，指定布局后，层级也跟着调整。
            如：layout2.vue页面，层级：app.vue->layouts[pingk]->页面.vue
            `

</script>
