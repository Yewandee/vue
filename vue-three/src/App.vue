<script setup>
// import HelloWorld from './components/HelloWorld.vue';
// import Counter from './components/Counter.vue';
import Form from './components/Form.vue';
import FancyButton from './components/FancyButton.vue';

</script>

<template>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Counter /> -->
  <Form />
  <FancyButton >
    <template #icon>++</template>
   <span>Click on me Joor!!</span>
   </FancyButton>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
