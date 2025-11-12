import { homeScrollY, lastFromRoute } from "@/composables/useScrollStore.js";
import FavoritesView from "@/views/FavoritesView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import PokemonDetailsView from "@/views/PokemonDetailsView.vue";
import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => LoginView,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => FavoritesView,
    },
    {
      path: "/pokemon/:id",
      name: "PokemonDetails",
      component: () => PokemonDetailsView,
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => NotFoundView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log("scroll", { to, from, savedPosition });

    lastFromRoute.value = from.name;

    if (to.name === "PokemonDetails") {
      return { left: 0, top: 0.1 };
    }

    if (to.name === "home") {
      console.log("va hacia el home");

      return { top: homeScrollY.value, left: 0 };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

export default router;
