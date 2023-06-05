import { createRouter, createWebHistory } from "vue-router";
import Player from "../views/players.vue";
import Teams from "../views/teams.vue";
import Home from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/teams",
      name: "teams",
      component: Teams,
    },
    {
      path: "/players",
      name: "plaers",
      component: Player,
    },
  ],
});

export default router;
