<script setup>
import { useAuth } from "@/composables/useAuth.js";
import { useRouter } from "vue-router";

const router = useRouter();
const { logout, isAutenticated, user } = useAuth();

function logoutAndRedirect() {
  logout();
  router.push("/");
}
</script>
<template>
  <header
    class="text-center custom-section__header d-flex justify-content-between mx-5"
  >
    <h1>Pokédex 📒</h1>
    <nav class="custom-navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink v-if="!isAutenticated" to="/login">Login</RouterLink>
      <template v-else>
        <RouterLink to="/favorites">Favoritos</RouterLink>
        <span class="navbar-greeting"> Hola, {{ user.email }}</span>

        <button class="btn custom-btn__logout" @click="logoutAndRedirect">
          Salir <font-awesome-icon :icon="['far', 'circle-right']" />
        </button>
      </template>
    </nav>
  </header>
  <RouterView />
</template>
<style>
.custom-section__header .custom-navbar {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-greeting {
  display: inline-block;
  padding: 0 8px;
  font-size: 24px;
  color: rgb(65, 126, 74);
  margin-left: 2rem;
}

a {
  color: rgb(3, 50, 10);
  text-decoration: none;
  font-size: 18px;
  display: inline-block;
  padding: 8px;
}

a:hover {
  color: rgb(4, 96, 17);
  text-decoration: underline wavy;
}

.custom-btn__logout {
  background-color: rgb(184, 29, 68);
  color: rgb(245, 235, 243);
  padding: 4px 16px;
  margin-left: 1rem;
}

.custom-btn__logout:hover {
  background-color: rgb(148, 15, 49);
  color: rgb(245, 235, 243);
}
</style>
