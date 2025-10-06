import axios from "axios";
import { reactive, ref } from "vue";

const list = ref([]);
const loading = ref(false);
const error = ref("");
const details = reactive(new Map());
const expanded = reactive(new Set());

const DETAIL_STORAGE_PREFIX = "pokedex:detail:";
const REQUIRED_STATS_KEYS = [
  "hp",
  "attack",
  "defense",
  "speed",
  "special-attack",
  "special-defense",
];

function loadDetailFromStorage(id) {
  try {
    const raw = localStorage.getItem(`${DETAIL_STORAGE_PREFIX}${id}`);
    if (!raw) return null;
    const data = JSON.parse(raw);

    const hasBasics =
      data && typeof data.id === "number" && typeof data.name === "string";
    const hasStats =
      data &&
      data.stats &&
      typeof data.stats === "object" &&
      REQUIRED_STATS_KEYS.some((k) => typeof data.stats[k] === "number");
    if (hasBasics && hasStats) {
      details.set(id, data);
      return data;
    }

    localStorage.removeItem(`${DETAIL_STORAGE_PREFIX}${id}`);
  } catch (_) {}
  return null;
}

function persistDetail(id, info) {
  try {
    localStorage.setItem(`${DETAIL_STORAGE_PREFIX}${id}`, JSON.stringify(info));
  } catch (_) {}
}

export function usePokedex() {
  async function loadList(limit = 151, offset = 0) {
    loading.value = true;
    error.value = "";
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );

      await new Promise((resolve) => setTimeout(resolve, 800));
      list.value = (data.results || []).map((it) => {
        const id = Number(it.url.split("/").filter(Boolean).at(-1));
        return {
          id,
          name: it.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          description: it.description,
        };
      });
    } catch (e) {
      error.value = "No se pudo cargar PokeAPI.";
    } finally {
      loading.value = false;
    }
  }

  async function ensureDetails(id) {
    if (details.has(id)) return details.get(id);

    const cached = loadDetailFromStorage(id);
    if (cached) return cached;

    const [p, s] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.data),
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((r) => r.data),
    ]);

    const statMap = Object.fromEntries(
      p.stats.map((st) => [st.stat.name, st.base_stat])
    );
    const esFlavor = s.flavor_text_entries.find(
      (f) => f.language.name === "es"
    );
    const enFlavor = s.flavor_text_entries.find(
      (f) => f.language.name === "en"
    );

    const info = {
      id,
      name: p.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      types: p.types.map((t) => t.type.name),
      heightM: parseFloat((p.height / 10).toFixed(1)),
      weightKg: parseFloat((p.weight / 10).toFixed(1)),
      abilities: p.abilities.map((a) => a.ability.name),
      stats: statMap,
      flavor: (esFlavor?.flavor_text || enFlavor?.flavor_text || "").replace(
        /\f|\n/g,
        " "
      ),
    };

    details.set(id, info);
    persistDetail(id, info);
    return info;
  }

  function show(id) {
    expanded.add(id);
  }
  function hide(id) {
    expanded.delete(id);
  }
  const isExpanded = (id) => expanded.has(id);

  return {
    list,
    loading,
    error,
    details,
    loadList,
    ensureDetails,
    show,
    hide,
    isExpanded,
  };
}
