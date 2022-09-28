<template>
  <div class="about">
    <h1>Rock</h1>
    <ol>
      <li>
        <p
          :style="{
            color: strokesColor,
            fontSize: strokesFontSize + 'em',
          }"
        >
          The Strokes
        </p>
      </li>
      <li>
        <p
          :style="{
            color: queenColor,
            fontFamily: 'serif',
            fontSize: '2em',
          }"
        >
          Queen
        </p>
      </li>
    </ol>
  </div>
</template>
<script setup>
import { ref } from "vue";

const strokesColor = ref("purple");
const strokesFontSize = ref("1.5");
const queenColor = ref("yellow");
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

<!-- Añadimos un estilo dinámico bindeado, podemos apuntar a la propiedad dentro del objeto y pasarla a string o en una constante podemos guardar el valor que le asignaremos a la propiedad -->
