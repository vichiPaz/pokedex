<script setup>
import { useAuth } from "@/composables/useAuth.js";
import { computed, defineProps, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { usePokedex } from "../composables/usePokedex.js";
const router = useRouter();

function goToDetails(p) {
  router.push({ name: "PokemonDetails", params: { id: p.id } });
}

const props = defineProps({
  search: { type: String, default: "" },
  onlyFavorites: { type: Boolean, default: false },
});
const emit = defineEmits(["no-results", "has-results"]);
const {
  list,
  loading,
  error,
  details,
  loadList,
  ensureDetails,
  show,
  hide,
  isExpanded,
} = usePokedex();

const { user } = useAuth();

onMounted(async () => {
  if (!list.value || list.value.length === 0) {
    await loadList(151, 0);
  }
});

const globalKey = "fav:pokemon";
const favIds = ref([]);

const storageKey = computed(() => {
  const u = user?.value;
  return u?.email ? `favorites:${u.email}` : globalKey;
});

function readFav() {
  try {
    const raw = localStorage.getItem(storageKey.value);
    const arr = raw ? JSON.parse(raw) : [];

    const num = Array.from(
      new Set((arr || []).map((x) => Number(x)).filter((x) => !Number.isNaN(x)))
    );
    favIds.value = num;
  } catch {
    favIds.value = [];
  }
}

function writeFav(arr) {
  localStorage.setItem(storageKey.value, JSON.stringify(arr));
}

function isFav(id) {
  return favIds.value.includes(Number(id));
}

function toggleFavLocal(id) {
  const nid = Number(id);
  const set = new Set(favIds.value);
  if (set.has(nid)) set.delete(nid);
  else set.add(nid);
  favIds.value = [...set];
  writeFav(favIds.value);
}

onMounted(() => {
  readFav();
});
watch(storageKey, () => readFav());

window.addEventListener("storage", (e) => {
  if (e.key === storageKey.value) readFav();
});

const filtered = computed(() => {
  const q = (props.search ?? "").toLowerCase().trim();
  let base = list.value;
  if (q) base = base.filter((p) => p.name.toLowerCase().includes(q));
  if (props.onlyFavorites) base = base.filter((p) => isFav(p.id));
  return base;
});

watch(
  [filtered, () => props.search, loading],
  ([f, q, isLoading]) => {
    if (isLoading) return;
    const query = (q ?? "").trim();
    if (!query) return;
    if (Array.isArray(f) && f.length === 0) {
      emit("no-results");
    } else {
      emit("has-results");
    }
  },
  { immediate: true }
);

function pad3(n) {
  return String(n).padStart(3, "0");
}
async function toggle(p) {
  const id = p.id;
  if (!isExpanded(id)) {
    await ensureDetails(id);
    show(id);
  } else {
    hide(id);
  }
}

async function prefetch(id) {
  if (!details.get(id)) {
    ensureDetails(id);
  }
}

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
</script>

<template>
  <div class="container py-3">
    <div v-if="loading" class="text-center py-5 custom-text text-black">
      Cargando pokémon…
    </div>

    <div class="row g-3">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="p in filtered"
        :key="p.id"
      >
        <div
          class="flip-card"
          role="button"
          @click="toggle(p)"
          @mouseenter="prefetch(p.id)"
          :aria-pressed="isExpanded(p.id) ? 'true' : 'false'"
        >
          <div
            class="flip-card-inner"
            :class="{ 'is-flipped': isExpanded(p.id) }"
          >
            <!-- FRONT -->
            <div
              class="flip-card-front card custom-card p-4 d-flex flex-column align-items-center justify-content-between"
            >
              <header
                class="card-title d-flex justify-content-between align-items-center w-100 gap-2 flex-row"
              >
                <div class="fw-bold fs-5">#{{ pad3(p.id) }}</div>
                <button
                  class="btn fav-btn"
                  :aria-pressed="isFav(p.id) ? 'true' : 'false'"
                  @click.stop="toggleFavLocal(p.id)"
                  :title="
                    isFav(p.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'
                  "
                >
                  <font-awesome-icon
                    :icon="[isFav(p.id) ? 'fas' : 'far', 'heart']"
                    :class="isFav(p.id) ? 'text-danger' : 'text-dark'"
                    @click.stop="toggleFavLocal(p.id)"
                  />
                </button>
              </header>
              <img
                :src="p.imageUrl"
                loading="lazy"
                class="card-img-top img-fluid my-2"
                :alt="p.name"
                style="max-height: 180px; object-fit: contain"
              />
              <h5 class="card-title text-capitalize text-center mt-2">
                {{ p.name }}
              </h5>
              <p
                v-if="details.get(p.id)"
                class="card-text text-muted small mb-2"
              >
                {{ (details.get(p.id).flavor || "").replace(/\n|\f/g, " ") }}
              </p>
              <span
                v-if="details.get(p.id)"
                :style="{
                  backgroundColor:
                    typeColors[details.get(p.id).types[0]] || '#777',
                }"
                class="badge type-badge text-capitalize mt-2"
              >
                {{ details.get(p.id).types[0] }}
              </span>
            </div>

            <!-- BACK -->
            <div
              class="flip-card-back card custom-card p-3 d-flex flex-column justify-content-between align-items-stretch"
            >
              <div
                v-if="details.get(p.id)"
                class="poke-back w-100 p-2 flex-column flex-grow-1 d-flex text-center"
              >
                <header
                  class="d-flex justify-content-between align-items-center gap-2 mb-4 w-100"
                >
                  <span class="fw-bold">#{{ pad3(p.id) }}</span>
                  <span class="fw-bold">{{ p.name.toUpperCase() }}</span>
                </header>

                <div class="justify-content-between gap-3 mb-2">
                  <div>
                    <strong>Altura:</strong> {{ details.get(p.id).heightM }}m
                  </div>
                  <div>
                    <strong>Peso:</strong> {{ details.get(p.id).weightKg }}kg
                  </div>
                </div>

                <h6 class="mt-3"><strong>Habilidades</strong></h6>
                <div class="d-flex justify-content-center flex-wrap mb-3">
                  <span
                    v-for="ab in details.get(p.id).abilities"
                    :key="ab"
                    class="ability text-capitalize m-1"
                  >
                    {{ ab }}
                  </span>
                </div>

                <h6 class="mt-1"><strong>Estadísticas</strong></h6>
                <div class="stats mb-auto">
                  <div class="stat">
                    <span class="label">HP:</span>
                    <span class="bar"
                      ><span
                        class="fill"
                        :style="{
                          width:
                            Math.min(details.get(p.id).stats.hp, 100) + '%',
                        }"
                      ></span
                    ></span>
                    <span class="value">{{ details.get(p.id).stats.hp }}</span>
                  </div>
                  <div class="stat">
                    <span class="label">Attack:</span>
                    <span class="bar"
                      ><span
                        class="fill"
                        :style="{
                          width:
                            Math.min(details.get(p.id).stats.attack, 100) + '%',
                        }"
                      ></span
                    ></span>
                    <span class="value">{{
                      details.get(p.id).stats.attack
                    }}</span>
                  </div>
                  <div class="stat">
                    <span class="label">Defense:</span>
                    <span class="bar"
                      ><span
                        class="fill"
                        :style="{
                          width:
                            Math.min(details.get(p.id).stats.defense, 100) +
                            '%',
                        }"
                      ></span
                    ></span>
                    <span class="value">{{
                      details.get(p.id).stats.defense
                    }}</span>
                  </div>
                  <div class="stat">
                    <span class="label">Speed:</span>
                    <span class="bar"
                      ><span
                        class="fill"
                        :style="{
                          width:
                            Math.min(details.get(p.id).stats.speed, 100) + '%',
                        }"
                      ></span
                    ></span>
                    <span class="value">{{
                      details.get(p.id).stats.speed
                    }}</span>
                  </div>
                </div>

                <div class="text-center mt-3" v-if="details.get(p.id)">
                  <button
                    class="btn custom-btn__card w-100"
                    @click.stop="goToDetails(p)"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
              <div v-else class="text-center py-5">Cargando detalles…</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.flip-card {
  perspective: 1000px;
  cursor: pointer;
  padding: 8px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}

.flip-card-inner.is-flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 12px;
}

.flip-card-back {
  transform: rotateY(180deg);
}

.card-header {
  display: flex;
  flex-direction: row;
}

.type-badge {
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.ability {
  background: #a6e82c;
  color: #032f0f;
  padding: 2px 6px;
  border-radius: 8px;
  font-weight: 600;
  font-size: small;
}

.stats {
  display: grid;
  gap: 8px;
  margin-top: 4px;
}
.stat {
  display: grid;
  grid-template-columns: 70px 1fr 40px;
  align-items: center;
  gap: 8px;
}
.stat .label {
  font-weight: 600;
  font-size: 12px;
}
.stat .bar {
  height: 10px;
  background: #eee;
  border-radius: 999px;
  overflow: hidden;
}
.stat .fill {
  display: block;
  height: 100%;
  background: #a6e82c;
}

.flip-card {
  height: 100%;
}
.flip-card-inner {
  min-height: 480px;
  max-height: 480px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flip-card-front,
.flip-card-back {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.custom-btn__card {
  border: 1px solid rgb(136, 176, 5);
  color: rgb(3, 50, 10);
}

.custom-btn__card:hover {
  background-color: rgb(136, 176, 5);
}
</style>
