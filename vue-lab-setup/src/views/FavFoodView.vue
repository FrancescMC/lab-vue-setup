<template>
  <div>
    <!--Primera -->
    <br />
    <br />
    <br />
    <div>
      <ul>
        <li v-for="comidaFav in comidasFav" :key="comidaFav">
          {{ comidaFav }}
        </li>
      </ul>
    </div>
    <!-- Segunda -->
    <br />
    <br />
    <br />
    <div>
      <ul>
        <li v-for="(comidaFavPais, index) in comidasFavPais" v-bind:key="index">
          {{ comidaFavPais.name }} from {{ comidaFavPais.country }}
        </li>
      </ul>
    </div>
    <!-- Tercera -->
    <br />
    <br />
    <br />
    <div>
      <!-- <ul>
        <li
          v-for="comidaFavPaisIngrediente in comidasFavPaisIngrediente"
          :key="value"
        >
          {{ comidaFavPaisIngrediente }}
        </li>
      </ul> -->
      <ul>
        <li
          v-for="(comidaFavPaisIngrediente, index) in comidasFavPaisIngrediente"
          :key="index"
        >
          {{ comidaFavPaisIngrediente.name }} from
          {{ comidaFavPaisIngrediente.country }}. Main ingredients:
          {{ comidaFavPaisIngrediente.ingredients[0] }} and
          {{ comidaFavPaisIngrediente.ingredients[1] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const comidasFav = ref([
  "Sushi",
  "Pizza",
  "Spaghetti carbonara",
  "Lamb Tagine",
  "Ramen",
  "Poke Bowl",
  "Paella",
  "Okonomiyaki",
]);

const comidasFavPais = ref([
  { name: "Sushi", country: "Japan" },
  { name: "Pizza", country: "Italy" },
  { name: "Spaghetti carbonara", country: "Italy" },
  { name: "Lamb Tagine", country: "Morocco" },
  { name: "Ramen", country: "Japan" },
  { name: "Poke Bowl", country: "USA" },
  { name: "Paella", country: "Spain" },
  { name: "Okonomiyaki", country: "Japan" },
]);

const comidasFavPaisIngrediente = ref([
  {
    name: "Sushi",
    country: "Japan",
    ingredients: ["Rice", "Salmon"],
  },
  {
    name: "Pizza",
    country: "Italy",
    ingredients: ["Pinneapple", "Ham"],
  },
  {
    name: "Spaghetti carbonara",
    country: "Italy",
    ingredients: ["Egg yolks", "Pecorino"],
  },
  {
    name: "Lamb Tagine",
    country: "Morocco",
    ingredients: ["Lamb", "Ras el Hanout"],
  },
  {
    name: "Ramen",
    country: "Japan",
    ingredients: ["Miso", "Pork stock"],
  },
  {
    name: "Poke Bowl",
    country: "USA",
    ingredients: ["Edamame", "Quinoa"],
  },
  {
    name: "Paella",
    country: "Spain",
    ingredients: ["Garrafó", "Chicken"],
  },
  {
    name: "Okonomiyaki",
    country: "Japan",
    ingredients: ["Cabbage", "Bacon"],
  },
]);
</script>

<style scoped></style>

<!--  Generamos un array con ocho platos de comida que os gusten. Después creamos otra variable con un array de objetos en el que cada objeto tiene una key con el nombre del plato y otra con la región/país de donde proviene. En el tercer ejercicio vamos a generar un array de objetos, y cada objeto tendrá nombre, región y finalmente una tercera key que sea ingredientes, la cual debe contener al menos dos. Lo printeamos todo en el UI.
  Vamos a generar un objeto con 5 propiedades: nombre, fecha de nacimiento, comida preferida, artista preferido y edad.
  16:17
  Tenemos hasta las 16:45h -->
