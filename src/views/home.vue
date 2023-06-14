<script>
import HomeCard from "@/components/HomeCard.vue";
export default {
  components: {Homecard},
};
</script>
<template>
  <div class="divGeral">
    <Homecard route="/Teams" title="TEAMS" customClass="divTimes"/>
    <Homecard route="/Players" title="PLAYERS" customClass="divJogadores"/>
    <Homecard route="/Games" title="LAST MATCHUPS" customClass="divJogos"/>
  </div>
</template>

<style>
a {
  text-decoration: none;
}

a:any-link {
}
</style>
