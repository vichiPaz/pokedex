import { homeScrollY, lastFromRoute } from "@/composables/useScrollStore.js";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../views/FavoritesView.vue"),
    },
    {
      path: "/pokemon/:id",
      name: "PokemonDetails",
      component: () => import("../views/PokemonDetailsView.vue"),
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
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
router.onError((error, to) => {
  if (error.message.includes("Failed to fetch dynamically imported module")) {
    window.location = to.fullPath;
  }
});
export default router;
