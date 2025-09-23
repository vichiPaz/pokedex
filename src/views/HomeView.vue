<script setup>
import { onBeforeUnmount, ref } from "vue";
import Card from "../components/Card.vue";
import SearchBar from "../components/SearchBar.vue";
import { homeScrollY } from "../composables/useScrollStore.js";

onBeforeUnmount(() => {
  console.log("scroll: " + window.scrollY);

  homeScrollY.value = window.scrollY;
});

const searchQuery = ref("");
const errorMsg = ref("");
</script>
<template>
  <section class="container custom-searchBarWrapper">
    <SearchBar
      v-model="searchQuery"
      @search="
        (q) => {
          searchQuery = q;
        }
      "
    />
  </section>
  <section class="container custom-main">
    <div v-show="errorMsg" class="alert alert-success mx-auto mt-2">
      {{ errorMsg }}
    </div>
    <section class="container text-center">
      <Card
        :search="searchQuery"
        @no-results="errorMsg = 'No se encontraron resultados 😢'"
        @has-results="errorMsg = ''"
      />
    </section>
  </section>
</template>

<style></style>
