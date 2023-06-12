<script>
import nophoto from "../assets/players/nophoto.png";
export default {
  data() {
    return {
      person: {},
      loading: false,
      query: "",
      ulrGoolge: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    async getPerson2(url) {
      this.loading = true;
      const res = await fetch(url);
      const data = await res.json();

      const { first_name, last_name, position, team } = data;

      (this.person = {
        Name: first_name,
        "Last Name": last_name,
        Position: position,
        Team: team.full_name,
        City: team.city,
      }),
        (this.loading = false);
    },
    replaceByDefault(e) {
      e.target.src = nophoto;
    },
    getImagePath(id) {
      return `/players/${id}.png`;
    },
    fileExists(filename) {
      // Cria um novo objeto de requisição
      var http = new XMLHttpRequest();

      // Define o método e a URL da requisição
      http.open("HEAD", filename, false);

      // Envia a requisição
      http.send();

      // Verifica o status da resposta
      return http.status !== 404;
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getPerson2(`https://www.balldontlie.io/api/v1/players/${id}`);
  },
};
</script>
<template>
  <main>
    <div class="divGeral1">
      <div class="divNav">
        <div class="divNavTitulo">
          <p class="pTituloItem">{{ person.Name }}</p>
          <h3 v-show="loading">loading .....</h3>
        </div>
        <div class="divNavBottoes">
          <RouterLink :to="`/players`"
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
          />
          <img v-else src="../assets/players/nophoto.png" alt="" width="200" />
        </div>
        <div class="divDadosPlayer">
          <table v-show="!loading" class="tableProfile">
            <tr v-for="(value, label) in person" :key="label">
              <td>{{ label }}</td>
              <td>{{ value }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.setaBranca {
  color: white;
}
</style>
