import { createRouter, createWebHistory } from "vue-router";
import Player from "../views/players.vue";
import Teams from "../views/teams.vue";
import Home from "../views/home.vue";
import PlayerView from "../views/playersDetail.vue";
import TeamView from "../views/teamDetail.vue";

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
      name: "players",
      component: Player,
    },
    {
      path: "/player/:id",
      name: "playerDetail",
      component: PlayerView,
    },
    {
      path: "/team/:id",
      name: "teamDetails",
      component: TeamView,
    },
  ],
});

export default router;
