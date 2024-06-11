<script setup>
import {onMounted, ref} from 'vue'



const count = ref(0)
const message = ref('Hi Yewandeeee')
const messages = ref('<span style="color: blue">Hello this Yewande, and i"m learning how to use the (v-html) directives')
const disabled = ref(true)

const counting = ref(false)

const value = {
    id: "unique-id",
    class:" counter-button"
}

function increment(){
    count.value++
}

function decrement(){
    counting.value = true
    count.value--
}

function reset(){
    count.value = 0
}  

function formatCount(){
    return count.value === 0 ? '' : count.value > 1 ? 'items' : " item";
}

const fruits = ['apple', 'orange', 'banana', 'watermelon']
const fruitsRef = fruits

onMounted(()=>{
    console.log("Counter compount mounted!")
})
</script>

<template>
    <div  class="counter">
        <h1>Counter</h1>
        <!-- <p>Count: {{ count }} item{{ count > 1 ? 's': "" }}</p> -->
        <p>Count: {{ count }} {{ formatCount() }}</p>
        <button @click="increment" v-bind="value">Increment</button>
        <button @click="decrement">Decrement{{ counting ? 'ing' : '' }}  </button>
        <button @click="reset" v-bind:disabled="disabled">Reset</button>
        <p v-html="messages"> </p>
        <p>{{ message }}</p>

        <div class="v-for" >
            <ul>
                <li v-for="(fruits, index) in fruitsRef" :key="fruits">{{ index + 1 }} = {{ fruits }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>