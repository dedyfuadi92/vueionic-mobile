<template>
    <div class="h-[80vh] w-full flex flex-col justify-center items-center">
        <div class="flex w-full h-8 justify-end">
            <button type="button" class="w-20 bg-red-500 p-2 rounded-xl text-white" @click="logout">
                <strong>
                    Logout
                </strong>
            </button>
        </div>
        <HelloWorld msg="Vue 3 + Vite + Tailwind" />
    </div>
</template>
<script setup>
import { Preferences } from "@capacitor/preferences"
import { useRouter } from "vue-router"
import HelloWorld from '@/components/HelloWorld.vue'
const router = useRouter()
const logout = async () => {
    await Preferences.clear()
    router.replace('/login')
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
