<script setup>
import { RouterLink, RouterView } from "vue-router";
import Teams from "./views/teams.vue";
import Players from "./views/players.vue";
import PlayerView from "./views/playerDetail.vue";
import TeamView from "./views/teamDetail.vue";
</script>

<template>
  <RouterLink to="/Teams">Times</RouterLink>
  <RouterLink to="/Players">Jogadores</RouterLink>
  <RouterLink to="/games">Jogos</RouterLink>
  <RouterView />
</template>
