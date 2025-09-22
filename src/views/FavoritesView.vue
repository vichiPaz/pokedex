<script setup>
import Card from "@/components/Card.vue";
import { useAuth } from "@/composables/useAuth.js";
import { computed, onMounted, ref, watch } from "vue";

const { user } = useAuth();
const globalKey = "fav:pokemon";

const storageKey = computed(() => {
  const u = user?.value;
  return u?.email ? `favorites:${u.email}` : globalKey;
});

const noFavorites = ref(true);

function updateEmptyState() {
  try {
    const raw = localStorage.getItem(storageKey.value);
    const arr = raw ? JSON.parse(raw) : [];
    noFavorites.value = !Array.isArray(arr) || arr.length === 0;
  } catch {
    noFavorites.value = true;
  }
}

onMounted(() => {
  updateEmptyState();
});

watch(storageKey, () => {
  updateEmptyState();
});

window.addEventListener("storage", (e) => {
  if (e.key === storageKey.value) updateEmptyState();
});
</script>

<template>
  <section v-if="noFavorites" class="text-center py-4 text-muted">
    Aún no tienes Pokemones Favoritos, ve a Inicio y dales 🖤
  </section>
  <Card v-else :only-favorites="true" />
</template>
