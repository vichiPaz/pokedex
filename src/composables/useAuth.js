import { computed, ref } from "vue";

const user = ref(null);

function loadFromStorage() {
  try {
    const raw = localStorage.getItem("auth:user");
    user.value = raw ? JSON.parse(raw) : null;
  } catch (error) {
    user.value = null;
  }
}

loadFromStorage();

export function login({ email, name, pswrd }) {
  user.value = { email, name, pswrd };
  localStorage.setItem("auth:user", JSON.stringify(user.value));

  let users = [];
  try {
    users = JSON.parse(localStorage.getItem("auth:users")) || [];
  } catch {
    users = [];
  }

  users = users.filter((u) => typeof u?.email === "string");

  const exists = users.some(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (!exists) {
    users.push({ email, name, pswrd });
    localStorage.setItem("auth:users", JSON.stringify(users));
  }
}

export function logout({ wipeFavorites = false } = {}) {
  const prev = user.value;

  if (wipeFavorites && prev?.email) {
    localStorage.removeItem(`favorites:${prev.email}`);
  }
  user.value = null;
  localStorage.removeItem("auth:user");
}

export const isAutenticated = computed(() => !!user.value);

export function useAuth() {
  return { user, isAutenticated, login, logout };
}
