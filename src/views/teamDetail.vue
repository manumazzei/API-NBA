<script>
import nophoto from "../assets/teams/noimage.png";
export default {
  data() {
    return {
      fullTeam: {},
      id: this.$route.params.id,
    };
  },
  methods: {
    async getfullTeam(url) {
      const res = await fetch(url);
      const data = await res.json();
      const { full_name, city, abbreviation, conference, division } = data;

      this.fullTeam = {
        Name: full_name,
        City: city,
        Abbreviation: abbreviation,
        Conference: conference,
        Division: division,
      };
    },
    replaceByDefault(e) {
      e.target.src = nophoto;
    },
    getImagePath(id) {
      return `/teams/${id}.png`;
    },
    fileExists(filename) {
      console.log(filename);
      // Cria um novo objeto de requisição
      var http = new XMLHttpRequest();

      // Define o método e a URL da requisição
      http.open("HEAD", filename, false);

      // Envia a requisição
      http.send();

      // Verifica o status da resposta
      console.log(http.status);
      return http.status !== 404;
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getfullTeam(`https://www.balldontlie.io/api/v1/teams/${id}`);
  },
};
</script>

<template>
  <div class="divGeral1">
    <div class="divNav">
      <div class="divNavTitulo">
        <p class="pTituloItem">{{ fullTeam.Name }}</p>
        <h3 v-show="loading">loading .....</h3>
      </div>
      <div class="divNavBottoes">
        <RouterLink :to="`/teams`"
          ><span class="material-symbols-sharp setaBranca">
            undo
          </span></RouterLink
        >
      </div>
    </div>
    <div class="divProfile">
      <div class="divCardFotoProfile">
        <img
          v-if="fileExists(getImagePath(id))"
          :src="getImagePath(id)"
          alt=""
          width="200"
        />
        <img v-else src="../assets/teams/noimage.png" alt="" width="200" />
      </div>
      <div class="divDadosPlayer">
        <table v-show="!loading" class="tableProfile">
          <tr v-for="(value, label) in fullTeam" :key="label">
            <td>{{ label }}</td>
            <td>{{ value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.setaBranca {
  color: white;
}
</style>
