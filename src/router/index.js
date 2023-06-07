import { createRouter, createWebHistory } from "vue-router";
import Player from "../views/players.vue";
import Teams from "../views/teams.vue";
import Home from "../views/home.vue";
import PlayerView from "../views/playerDetail.vue";
import TeamView from "../views/teamDetail.vue";
import GameView from "../views/games.vue";


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
    {
      path: "/games",
      name: "games",
      component: GameView,
    },
  ],
});

export default router;
