<script setup>
import { usePokedex } from "@/composables/usePokedex";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { homeScrollY } from "../composables/useScrollStore.js";

const route = useRoute();
const router = useRouter();
const { details, ensureDetails } = usePokedex();

const pokemon = ref(null);

const typeColors = {
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
  normal: "#A8A77A",
};

const orderedStats = [
  "hp",
  "attack",
  "defense",
  "speed",
  "special-attack",
  "special-defense",
];

const visibleStats = computed(() => {
  const s = pokemon.value?.stats;
  if (!s) return [];
  return orderedStats.filter((k) => s[k] != null);
});

const loadPokemon = async (id) => {
  let info = details.get(Number(id));
  if (!info) {
    info = loadDetailFromStorage(Number(id)); // <-- directo al localStorage
    if (info) {
      details.set(Number(id), info);
    } else {
      info = await ensureDetails(Number(id)); // último recurso: fetch
    }
  }
  pokemon.value = info;
};

onMounted(async () => {
  await loadPokemon(route.params.id);
});

onBeforeUnmount(() => {
  console.log(homeScrollY.value);
});

watch(
  () => route.params.id,
  (id) => loadPokemon(id)
);

const goBack = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <div class="container my-4 custom-main">
    <div v-if="!pokemon" class="text-center py-5">Cargando detalles…</div>

    <div v-else class="card p-4 shadow-sm">
      <div
        class="d-flex justify-content-between align-items-start mb-3"
        v-if="pokemon && pokemon.id"
      >
        <h5 class="text-muted mb-0">
          #{{ String(pokemon.id).padStart(3, "0") }}
        </h5>
        <h2 class="text-capitalize mb-0">{{ pokemon.name }}</h2>
      </div>
      <div v-else class="text-center text-muted mb-3">Datos no disponibles</div>

      <div class="text-center mb-4">
        <img
          :src="pokemon.imageUrl"
          :alt="pokemon.name"
          class="img-fluid pokemon-image"
          style="max-height: 250px; object-fit: contain"
        />
      </div>

      <div class="row mb-4">
        <div class="col-md-4 text-center mb-3 mb-md-0">
          <h6>Altura</h6>
          <span class="badge bg-success px-3 py-2"
            >{{ pokemon.heightM }} m</span
          >
        </div>
        <div class="col-md-4 text-center mb-3 mb-md-0">
          <h6>Peso</h6>
          <span class="badge bg-success px-3 py-2"
            >{{ pokemon.weightKg }} kg</span
          >
        </div>
        <div class="col-md-4 text-center">
          <h6>Habilidades</h6>
          <div class="d-flex flex-wrap justify-content-center">
            <span
              v-for="ab in pokemon.abilities"
              :key="ab"
              class="badge ability-badge me-2 mb-2 text-capitalize"
            >
              {{ ab.replace("-", " ") }}
            </span>
          </div>
        </div>
      </div>

      <div class="mb-4 text-center">
        <h6>Tipos</h6>
        <div>
          <span
            v-for="t in pokemon.types"
            :key="t"
            class="badge type-badge me-2 mb-2 text-capitalize"
            :style="{ backgroundColor: typeColors[t] || '#6c757d' }"
          >
            {{ t }}
          </span>
        </div>
      </div>

      <div>
        <h6 class="mb-3">Estadísticas</h6>
        <template v-if="pokemon && pokemon.stats">
          <div v-for="statKey in visibleStats" :key="statKey" class="mb-3">
            <div class="d-flex justify-content-between mb-1 text-capitalize">
              <span>{{ statKey.replace("-", " ") }}</span>
              <span>{{ pokemon.stats[statKey] }}</span>
            </div>
            <div class="progress stat-bar">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                :style="{ width: Math.min(pokemon.stats[statKey], 100) + '%' }"
                :aria-valuenow="pokemon.stats[statKey]"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </template>
        <div v-else class="text-muted">Sin estadísticas disponibles.</div>
      </div>

      <div class="text-center mt-4">
        <button class="btn btn-outline-success" @click="goBack">
          Volver a la Pokédex
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-image {
  max-width: 250px;
  height: auto;
}

.ability-badge {
  background-color: #d4edda;
  color: #155724;
  font-weight: 600;
  text-transform: capitalize;
}

.type-badge {
  color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  padding: 0.5em 1em;
  border-radius: 1rem;
}

.stat-bar {
  height: 1.2rem;
  border-radius: 0.5rem;
  background-color: #e9f5ec;
}
</style>
