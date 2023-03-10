<template>
    <div class="w-full h-screen mx-auto bg-slate-800 text-white flex justify-center items-start px-6 pt-4">
        <div class="w-full">
            <div class="w-full flex justify-center">
                <h3>
                    <strong>
                        Todo Application
                    </strong>
                </h3>
            </div>
            <input type="text" name="todoItem" id="todoItem" class="w-full text-lg text-violet-800 p-2 rounded-xl"
                maxlength="20" minlength="1" required placeholder="let's doing something great...">
            <div class="h-3"></div>
            <button type="button" class="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-xl text-lg">
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
            <div v-for="item in 6">
                <div class="w-full text-lg border-solid border-violet-500 border-2 p-2 rounded-lg text-white">
                    <input type="checkbox" id="item{{ item }}" name="item{{ item }}" value="item{{ item }}">
                    <label for="item{{ item }}"> Playing MSFS {{ item }}</label><br>
                </div>
                <div class="h-2"></div>
            </div>
        </div>
    </div>
</template>
<script setup></script>