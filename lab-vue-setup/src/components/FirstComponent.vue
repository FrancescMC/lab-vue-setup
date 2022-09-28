<template>
  <div id="using-moustache-syntax">
    <p>{{ game }}: {{ expansion }}</p>
    <button @:click="helloWorld">Fire</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
let game = ref("World of Warcraft");
let expansion = ref("Wrath of the Lich King");
function helloWorld() {
  console.log("Hello World!");
}
</script>

<style></style>
