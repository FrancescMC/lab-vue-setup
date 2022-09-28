<template>
  <div class="about">
    <h1>Pop music</h1>
    <ol>
      <li>
        <p v-if="popBand === true">One direction</p>
        <p v-else>No direction :(</p>
      </li>
      <li>
        <p v-if="bestPopBand === 'Wu-Tang'">Wu-Tang Clan👐</p>
        <p v-else-if="bestPopBand === 'Lil Nas X'">🤠</p>
        <p v-else-if="bestPopBand === 'Els Amics de les Arts'">Ay Jean-Luc!</p>
        <p v-else>Albert Pla</p>
      </li>
    </ol>

    <br />

    <template v-if="popBands">
      <p>Michael Jackson</p>
      <p>Kanye West</p>
      <p>Metallica</p>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
const popBands = ref(true);
const popBand = ref(false);
const bestPopBand = ref("Wu-Tang");
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>

<!-- Usamos una condicional sencilla (v-if, v-else) con la constante que queráis. Después generamos una caondición un poco más extensa (añadiendo un v-else-if) y finalmente inyectamos una lista de elementos que queráis mediante el v-if en un template tag. -->
