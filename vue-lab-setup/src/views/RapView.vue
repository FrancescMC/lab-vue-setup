<template>
  <div class="about">
    <h1>Rap</h1>
    <ol>
      <li>
        <p :class="disponible ? 'estaDisponible' : 'noDisponible'">
          Tyler, the Creator
        </p>
      </li>
      <li><p>bbno$</p></li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
const disponible = ref(true);
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

.estaDisponible {
  color: green;
  text-decoration: underline;
}
.noDisponible {
  color: red;
  text-decoration: line-through;
}
</style>

<!-- generamos dos clases, una que sea disponible y la otra no disponible y hacemos un ternario en la clase de algún elemento, si es verdadero le damos un estilo, si es falso le damos otro -->
