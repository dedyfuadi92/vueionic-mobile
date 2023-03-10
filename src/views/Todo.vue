<template>
    <div class="w-full h-screen mx-auto bg-slate-800 text-white flex justify-center items-start px-6 pt-4 overflow-auto">
        <div class="w-full">
            <div class="w-full flex justify-center">
                <h3>
                    <strong>
                        Todo Application
                    </strong>
                </h3>
            </div>
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
            <div v-for="todo in todos" :key="todo.id">
                <div class="w-full text-lg border-solid border-violet-500 border-2 p-2 rounded-lg text-white">
                    <input type="checkbox" id="item{{ todo.id }}" name="item{{ todo.id }}" value="item{{ todo.id }}">
                    <label for="item{{ todo.id }}">&nbsp;{{ todo.text }}<button type="button"
                            class="bg-fuchsia-800 p-2 float-right text-white" @click="removeTodo(todo)">X</button></label>
                </div>
                <div class="h-2"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
let id = 0
const newTodo = ref('')
const todos = ref([])
function addTodo() {
    if (newTodo.value != '') {
        todos.value.push({ id: id++, text: newTodo.value })
        newTodo.value = ''
    }
}

function removeTodo(todo) {
    todos.value = todos.value.filter((t) => t !== todo)
}
</script>