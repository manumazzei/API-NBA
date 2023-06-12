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
        ><button class="btnAcessoCabecalho">
          <span class="material-symbols-sharp" title="home"> home </span>
        </button></RouterLink
      >
      <RouterLink to="/Teams"
        ><button class="btnAcessoCabecalho">
          <span class="material-symbols-sharp" title="teams"> groups </span>
        </button></RouterLink
      >
      <RouterLink to="/Players"
        ><button class="btnAcessoCabecalho">
          <span class="material-symbols-sharp" title="players">
            sports_handball
          </span>
        </button></RouterLink
      >
      <RouterLink to="/Games">
        <span class="material-symbols-sharp meulink" title="last machups">
          sports_basketball
        </span></RouterLink
      >
    </div>
  </div>
  <RouterView />
</template>
<style scoped>
.meulink {
  color: white;
}
</style>
