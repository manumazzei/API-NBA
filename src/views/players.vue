<script>
import { RouterLink } from "vue-router";
import nophoto from "../assets/players/nophoto.png";
export default {
  data() {
    return {
      people: [],
      loading: false,
      next: null,
      previous: null,
      searchWord: "",
    };
  },
  methods: {
    getPeople(url) {
      this.loading = true;
      fetch(url)
        .then((res) => res.json())
        .then((players) => {
          this.people = players.data;
          this.next = players.meta.next_page;
          this.previous = players.meta.previous;
          this.loading = false;
        });
    },
    handleNext() {
      if (this.searchWord == "") {
        this.getPeople(
          `https://www.balldontlie.io/api/v1/players?page=${this.next}`
        );
      } else {
        this.getPeople(
          `https://www.balldontlie.io/api/v1/players?page=${this.next}&search=${this.searchWord}`
        );
      }
    },
    handlePrevious() {
      if (this.searchWord == "") {
        this.getPeople(
          `https://www.balldontlie.io/api/v1/players?page=${this.previous}`
        );
      } else {
        this.getPeople(
          `https://www.balldontlie.io/api/v1/players?page=${this.previous}&search=${this.searchWord}`
        );
      }
    },
    searchPlayers() {
      this.getPeople(
        `https://www.balldontlie.io/api/v1/players?search=${this.searchWord}`
      );
    },
    clearSearch() {
      this.searchWord = "";
      this.getPeople(`https://www.balldontlie.io/api/v1/players`);
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
      if (http.status === 404) {
        filename = nophoto;
        http = new XMLHttpRequest();
        http.open("HEAD", filename, false);
        http.send();

        return http.status !== 404;
      }
      return http.status !== 404;
    },
  },

  mounted() {
    this.getPeople("https://www.balldontlie.io/api/v1/players");
  },
};
</script>

<template>
  <main>
    <div class="divGeral1">
      <div class="divSearch">
        <input
          type="search"
          v-model="searchWord"
          placeholder="search by last name"
          class="inputSearch"
        />
        <span class="material-symbols-sharp" @click="searchPlayers()">
          search
        </span>
        <span class="material-symbols-sharp" @click="clearSearch()">
          restart_alt
        </span>
      </div>
      <div class="divNav">
        <div class="divNavTitulo">
          <p class="pTituloItem">Players</p>
          <h3 v-show="loading">loading .....</h3>
        </div>
        <div class="divNavBottoes">
          <span class="material-symbols-sharp" @click="handlePrevious">
            arrow_circle_left
          </span>
          <span class="material-symbols-sharp" @click="handleNext">
            arrow_circle_right
          </span>
        </div>
      </div>
      <div class="divShoItens">
        <div class="divCard" v-for="player in people" :key="player.name">
          <div class="divCardFoto">
            <img
              v-if="fileExists(getImagePath(player.id))"
              :src="getImagePath(player.id)"
              alt=""
              width="65"
              @error="replaceByDefault"
            />
          </div>
          <RouterLink :to="`/player/${player.id}`">
            {{ player.first_name }} {{ player.last_name }}
            {{ player.team.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
iframe {
  border: none;
  background-color: white;
}

th {
  color: white;
  background-color: black;
}

table {
  align-items: center;
}

#button-Container {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  width: 100px;
}

table {
  width: 500px;
}

a {
  text-decoration: none;
}
</style>
