<template>
    <div>
        <div class="test">hello scss</div>
        <div class="text-red-500">hello Nuxt3</div>
        <h1 class="text-center text-4xl font-semibold text-green-700">
            Hello Tailwind
        </h1>

        <AppAlert>
            This is an auto-imported component.
        </AppAlert>


        <button class="bg-red-400 mx-[20px] p-1 rounded border-solid border-4 border-light-red-500"
            @click="toggleDark()">暗黑模式</button>{{ isDark }}
    </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import AppAlert from '../components/AppAlert.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<style lang="scss"></style>
