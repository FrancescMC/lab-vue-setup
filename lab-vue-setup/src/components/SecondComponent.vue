<script>
export default {
  methods: {
    helloWorld(message) {
      alert(message);
    },
  },
};
</script>

<template>
  <button @click="helloWorld('hello World')">Fire</button>
</template>
