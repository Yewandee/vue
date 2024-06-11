<script setup>
import {onMounted, ref } from 'vue';

const data = ref({
    name: '',
    email: '',
    message: '',
})

function handleSubmit(event){
    // event.preventDefault();
    console.log(data.value);
}

</script>

<template>

    <form @submit.prevent="handleSubmit">
        <!-- <p>Hi, my name is {{ name }}</p> -->
        <label for="name">Name:</label> 
        <input type="text" name="name" v-model="data.name"/>

        <label for="email">Email:</label>
        <input  type="email" name="email" v-model="data.email"/>
        <!-- <input v-on:input="event => name = event.target.value" :value="name" type="text" name="email"/> -->

        <label for="message">Message:</label>
        <textarea id="message" name="message" v-model="data.message"></textarea>

        <button type="submit">Submit</button>

        <pre v-if="Object.values(data).every(e => e !== '')">{{ data }}</pre>
    </form>
   

</template>

<style scoped>
form{
    display: grid;
    gap: 1em;
    max-width: 20em;
    margin: 0 auto;
}
</style>