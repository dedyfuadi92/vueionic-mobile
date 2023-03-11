<template>
    <div class="w-full h-screen mx-auto bg-slate-800 text-white flex justify-center items-start px-6 pt-4 overflow-auto">
        <div class="w-full">
            <!-- bagian header -->
            <div class="w-full flex justify-center">
                <h3>
                    <strong>
                        Todo Application
                    </strong>
                </h3>
            </div>
            <!-- tutup header -->

            <!-- bagian form input -->
            <input v-model="newTodo" type="text" name="newTodo" id="newTodo"
                class="w-full text-lg text-violet-800 p-2 rounded-xl" maxlength="20" minlength="1" required
                placeholder="let's doing something great...">
            <div class="h-3"></div>
            <button type="button" class="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-xl text-lg"
                @click="addTodo">
                <strong>
                    Make Todo !
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
                        Todo List Below
                    </strong>
                </h3>
            </div>

            <!-- mulai perulangan -->
            <div v-for="todo in todos" :key="todo.id">
                <div class="flex flex-row">
                    <div @click="$event => doneTodo(todo)"
                        class="basis-5/6 h-12 text-lg border-solid border-violet-500 border-b-2 border-l-2 border-t-2  p-2 rounded-tl-lg rounded-bl-lg text-white">
                        <!-- <input type="checkbox" id="item{{ todo.id }}" name="item{{ todo.id }}" value="item{{ todo.id }}"> -->
                        <input type="text"
                            class="bg-white p-1 h-full w-7 float-left text-violet-500 rounded-md text-center font-bold"
                            v-if="todo.doneYet" value="v" disabled>
                        <input type="text"
                            class="bg-white p-1 h-full w-7 float-left text-violet-500 rounded-md text-center font-bold"
                            v-else disabled>
                        <label for="item{{ todo.id }}"
                            :class="['pl-4', todo.doneYet ? 'line-through decoration-pink-500 decoration-2 text-gray-200/20' : '']">
                            {{ todo.text }}
                        </label>
                    </div>
                    <div
                        class="basis-1/6 h-12 bg-fuchsia-800 text-lg border-solid border-violet-500 border-t-2 border-r-2 border-b-2 text-white rounded-tr-lg rounded-br-lg">
                        <button type="button" class="h-full w-full float-right" @click="removeTodo(todo)">
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
let id = 0
// let doneYet = ''
const newTodo = ref('')
const todos = ref([])
function addTodo() {
    if (newTodo.value != '') {
        todos.value.push({ id: id, text: newTodo.value, doneYet: false })
        newTodo.value = ''
        id++
    }
}
function doneTodo(id) {
    let index = todos.value.indexOf(id)
    console.log(index)
    todos.value[index].doneYet = !todos.value[index].doneYet
}
function removeTodo(id) {
    let index = todos.value.indexOf(id)
    console.log(index)
    this.todos.splice(index, 1)
}
</script>
<style scoped>
.doneYet {
    text-decoration: line-through;
}
</style>