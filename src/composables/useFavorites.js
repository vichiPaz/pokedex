import { useAuth } from "@/composables/useAuth.js";
import { computed, onMounted, ref, watch } from "vue";

export function useFavorites() {
  const { user } = useAuth();
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
      favIds.value = Array.from(
        new Set(arr.map((x) => Number(x)).filter((x) => !Number.isNaN(x)))
      );
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
    window.addEventListener("storage", (e) => {
      if (e.key === storageKey.value) readFav();
    });
  });

  watch(storageKey, () => readFav());

  return { favIds, isFav, toggleFavLocal };
}
