<script setup>
import NavBar from "../src/components/NavBar.vue";
</script>

<template>
  <NavBar />

  <footer class="custom-footer text-center">🐸</footer>
</template>

<style>
body {
  background-color: rgb(223, 240, 223);
  color: azure;
}

html,
body {
  height: 100%;
  margin: 0;
}

.custom-main {
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  flex: 1;
}

.custom-section__header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 3rem 0 2rem 0;
  color: rgb(3, 50, 10);
  border-bottom: 1px solid rgb(3, 50, 10);
}

.custom-searchBarWrapper {
  padding: 1rem 15%;
}

.custom-footer {
  padding: 3rem;
  font-size: 2rem;
}

@media (max-width: 1024px) {
  .custom-section__header {
    padding: 2rem 1rem 1rem 1rem;
  }

  .custom-searchBarWrapper {
    padding: 1rem 5%;
  }
}
</style>
