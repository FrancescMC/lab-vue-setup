<template>
  <div class="about">
    <h1>Música Electrónica</h1>
    <ol>
      <li><p :class="['dvno', 'dance']">Justice</p></li>
      <li><p>Boys Noice</p></li>
    </ol>
  </div>
</template>

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
.dvno {
  color: blue;
}
.dance {
  text-decoration: overline;
}
</style>

<!-- pasamos un array de clase -->
