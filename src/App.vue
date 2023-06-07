<script setup>
import { RouterLink, RouterView } from "vue-router";
import Teams from "./views/teams.vue";
import Players from "./views/players.vue";
import PlayerView from "./views/playerDetail.vue";
import TeamView from "./views/teamDetail.vue";
</script>

<template>
  <div class="divCabecalho">
    <div class="divCabecalhoLogoLocal">
      <div class="divCabecalhoLogo">
        <img src="/src/assets/nbaLogo.png" height="60" />
      </div>
    </div>
    <div class="divCabecalhoLink">
      <RouterLink to="/"
        ><button class="btnAcessoCabecalho">HOME</button></RouterLink
      >
      <RouterLink to="/Teams"
        ><button class="btnAcessoCabecalho">TEAMS</button></RouterLink
      >
      <RouterLink to="/Players"
        ><button class="btnAcessoCabecalho">PLAYERS</button></RouterLink
      >
      <RouterLink to="/Games"
        ><button class="btnAcessoCabecalho">GAMES</button></RouterLink
      >
    </div>
  </div>
  <RouterView />
</template>
