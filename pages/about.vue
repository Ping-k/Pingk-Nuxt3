<template>
    <div>about</div>
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
