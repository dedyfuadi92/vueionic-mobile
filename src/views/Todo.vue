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
            <div v-for="todo in todos" :key="todo.id" >
                <div class="flex flex-row">
                    <div class="basis-5/6 h-12 text-lg border-solid border-violet-500 border-2 p-2 rounded-lg text-white">
                        <!-- <input type="checkbox" id="item{{ todo.id }}" name="item{{ todo.id }}" value="item{{ todo.id }}"> -->
                        <button type="button" class="bg-white p-1 h-full w-6 float-left text-violet-500 rounded-md"
                            @click="removeTodo(todo)">
                            <strong>v</strong>
                        </button>
                        <label for="item{{ todo.id }}">
                            &nbsp;
                            {{ todo.text }}
                        </label>
                    </div>
                    <div class="basis-1/6 h-12 text-lg pl-1 rounded-lg text-white">
                        <button type="button" class="bg-fuchsia-800 p-1 h-full w-full float-right text-white rounded-md"
                            @click="removeTodo(todo)">
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