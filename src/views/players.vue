<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      people: [],
      loading: false,
      next: null,
      previous: null,
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
      this.getPeople(
        `https://www.balldontlie.io/api/v1/players?page=${this.next}`
      );
    },
    handlePrevious() {
      this.getPeople(
        `https://www.balldontlie.io/api/v1/players?page=${this.previous}`
      );
    },
  },
  mounted() {
    this.getPeople("https://www.balldontlie.io/api/v1/players");
  },
};
</script>

<template>
  <main>
    <h3 v-show="loading">
      <iframe src="https://embed.lottiefiles.com/animation/4414"></iframe>
    </h3>
    <div class="div.tabela">
      <table v-show="!loading">
        <tr>
          <th width="30%">First Name</th>
          <th width="30%">Last Name</th>
          <th width="30%">Team</th>
          <th width="30%">-</th>
        </tr>
        <tr v-for="player in people" :key="player.name">
          <td>
            {{ player.first_name }}
          </td>
          <td>{{ player.last_name }}</td>
          <td>{{ player.team.name }}</td>
          <td></td>
        </tr>
      </table>
    </div>
    <div id="button-Container">
      <button @click="handlePrevious">previous</button>
      <button @click="handleNext">next</button>
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
