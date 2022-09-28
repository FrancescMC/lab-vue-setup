<script setup>
import FirstComponent from "./components/FirstComponent.vue";
import router-view from "./router";
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">About</router-link></li>
    </ul>
  </nav>
  <router-view />
  <header></header>

  <main>
    <FirstComponent />
  </main>
</template>

<style scoped></style>
