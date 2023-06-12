<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="divGeral">
    <div class="divGeralItem">
      <div class="divTimes">
        <RouterLink to="/Teams"
          ><button class="btnAcesso">TEAMS</button></RouterLink
        >
      </div>
    </div>
    <div class="divGeralItem">
      <div class="divJogadores">
        <RouterLink to="/Players"
          ><button class="btnAcesso">PLAYERS</button></RouterLink
        >
      </div>
    </div>
    <div class="divGeralItem">
      <div class="divJogos">
        <RouterLink to="/Games"
          ><button class="btnAcesso">GAMES</button></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style></style>
