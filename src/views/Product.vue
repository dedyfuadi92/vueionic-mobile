<template>
    <div class="w-full h-screen mx-auto bg-slate-800 text-white flex justify-center items-start px-6 pt-4 overflow-auto">
        <div class="w-full">
            <!-- bagian header -->
            <div class="flex w-full h-8 justify-end">
                <button type="button" class="w-20 bg-red-500 p-2 rounded-xl" @click="logout">
                    <strong>
                        Logout
                    </strong>
                </button>
            </div>
            <div class="w-full flex justify-center">
                <h3>
                    <strong>
                        Product Page
                    </strong>
                </h3>
            </div>
            <!-- tutup header -->

            <!-- bagian form input -->
            <input v-model="newProduct" type="text" name="newProduct" id="newProduct"
                class="w-full text-lg text-violet-800 p-2 rounded-xl" maxlength="20" minlength="1" required
                placeholder="Product Example">
            <div class="h-2"></div>
            <input v-model="newPrice" type="number" name="newPrice" id="newPrice"
                class="w-full text-lg text-violet-800 p-2 rounded-xl" max="200000" min="1" required placeholder="2000">
            <div class="h-3"></div>
            <button type="button" class="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-xl text-lg"
                @click="addProduct">
                <strong>
                    Add This Product !
                </strong>
            </button>
            <!-- tutup form input -->

            <div class="h-5"></div>
            <div class="w-full flex justify-center">
                <div class="w-1/2 h-1 bg-fuchsia-500 rounded-lg">
                </div>
            </div>
            <div class="h-3"></div>
            <div class="w-full flex justify-center">
                <h3>
                    <strong>
                        Product List
                    </strong>
                </h3>
            </div>

            <!-- mulai perulangan -->
            <div v-for="product in products" :key="product.id">
                <div class="flex flex-row">
                    <div @click="$event => doneProduct(product)"
                        class="basis-5/6 h-12 text-lg border-solid border-violet-500 border-b-2 border-l-2 border-t-2  p-2 rounded-tl-lg rounded-bl-lg text-white">
                        <!-- <input type="checkbox" id="item{{ todo.id }}" name="item{{ todo.id }}" value="item{{ todo.id }}"> -->
                        <input type="text"
                            class="bg-white p-1 h-full w-7 float-left text-violet-500 rounded-md text-center font-bold"
                            v-if="product.doneYet" value="v" disabled>
                        <input type="text"
                            class="bg-white p-1 h-full w-7 float-left text-violet-500 rounded-md text-center font-bold"
                            v-else disabled>
                        <label for="item{{ product.id }}"
                            :class="['pl-4', product.doneYet ? 'line-through decoration-pink-500 decoration-2 text-gray-200/20' : '']">
                            {{ product.name }}
                            <small>({{ (product.price).toLocaleString('id-ID') }})</small>
                        </label>
                    </div>
                    <div
                        class="basis-1/6 h-12 bg-fuchsia-800 text-lg border-solid border-violet-500 border-t-2 border-r-2 border-b-2 text-white rounded-tr-lg rounded-br-lg">
                        <button type="button" class="h-full w-full float-right" @click="removeProduct(product)">
                            <strong>X</strong>
                        </button>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="w-full h-2"></div>
                </div>
            </div>
            <!-- tutup perulangan -->
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Preferences } from "@capacitor/preferences"
import { useRouter } from "vue-router"
import api from "@/services/services"
const router = useRouter()
let id = 0
// let doneYet = ''
const newProduct = ref('')
const newPrice = ref('')
const products = ref([])
function addProduct() {
    if (newProduct.value != '') {
        products.value.push({ id: id, name: newProduct.value, price: newPrice.value, doneYet: false })
        newProduct.value = ''
        newPrice.value = ''
        id++
    }
}
function doneProduct(id) {
    let index = products.value.indexOf(id)
    // console.log(index)
    products.value[index].doneYet = !products.value[index].doneYet
}
function removeProduct(id) {
    let index = products.value.indexOf(id)
    // console.log(index)
    this.products.splice(index, 1)
}
const logout = async () => {
    await Preferences.clear()
    router.replace('/login')
}
const fetchData = async () => {
    try {
        const resp = await api.get('/api/products', {})
        // parseData(resp.data)
        console.log(resp);
    } catch (error) {
        console.log(error)
    }
}
fetchData()
</script>
<style scoped>
.doneYet {
    text-decoration: line-through;
}
</style>