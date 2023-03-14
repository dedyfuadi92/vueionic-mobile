<template>
    <div class="w-full mx-auto bg-slate-800 text-white h-screen flex justify-center items-center px-6">
        <div class="w-full">
            <div class="w-full justify-center flex">
                <h3 class="text-white font-extrabold">LOGIN PAGE</h3>
            </div>
            <input type="text" v-model="body.email" class="w-full text-gray-800 p-2 text-lg rounded-lg"
                placeholder="account@email.com">
            <input type="password" v-model="body.password" class="w-full text-gray-800 p-2 text-lg rounded-lg mt-3"
                placeholder="********">
            <button type="button" @click="submit"
                class="w-full p-2 text-center mt-6 bg-blue-500 hover:bg-white text-white hover:text-blue-500  active:bg-blue-800 active:text-white focus:outline-none focus:ring focus:ring-white rounded-lg font-bold text-lg">Login</button>
        </div>
    </div>
</template>
<script setup>
import { reactive } from "vue"
import { toastController } from "@ionic/vue"
import AuthServices from "@/services/auth"
import { Preferences } from '@capacitor/preferences'
import { useRouter } from "vue-router"

const router = useRouter()
const body = reactive({
    email: null,
    password: null,
})
const submit = async () => {
    try {
        console.log('Login Success');
        const resp = await AuthServices.login(body)
        setPreferences(resp.user)
        router.push('/')
    } catch (error) {
        if (error?.response?.status == 401) {
            console.log(error.response?.data?.message)
            const toast = await toastController.create({
                message: 'Error ' + error.response?.data?.message,
                duration: 1500,
                position: 'top',
                color: 'danger',
                mode: 'ios'
            })
            await toast.present()
        }
    }
}

const setPreferences = async (item) => {
    await Preferences.set({
        key: 'token',
        value: item?.token
    })
    await Preferences.set({
        key: 'user',
        value: JSON.stringify({
            email: item?.email,
            password: item?.password
        })
    })
}

const checkToken = async () => {
    const { value: token } = await Preferences.get({ key: 'token' })
    if (token?.length > 0) router.replace('/todo')
}

checkToken()

</script>
<style scoped></style>
