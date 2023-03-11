<template>
    <div class="w-full mx-auto bg-slate-900 text-white h-screen flex justify-center items-center px-6">
        <div class="w-full">
            <h4 class="text-white">Login Page</h4>
            <input type="text" v-model="username" class="w-full text-gray-800 p-2 text-lg rounded-lg">
            <button type="button" @click="submit"
                class="w-full py-4 text-center transition duration-500 hover:bg-gradient-to-r from-[#c53737] to-[#398cea] mt-4">Login</button>
        </div>
        <div class="grid grid-cols-12">
            <div class="col-span-6"></div>
            <div class="col-span-6"></div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { IonCol, IonGrid, IonRow, IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';

// -- variable binding v-model -> input username

const username = ref(null)
const password = 'password' // parameter id, meta data json

const submit = () => {
    console.log(username.value, password)
}
</script>
<style scoped></style>
