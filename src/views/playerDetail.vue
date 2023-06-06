<script>
export default {
  data() {
    return {
      person: {},
      loading: false,
      query: "",
      ulrGoolge: "",
    };
  },
  methods: {
    async getPerson2(url) {
      this.loading = true;
      const res = await fetch(url);
      const data = await res.json();

      const { first_name, last_name, position, team } = data;

      const query = `${first_name} ${last_name} NBA player`;
      const googleUrl = `https://www.google.com/search?q=${query}&tbm=isch`;

      (this.person = {
        Name: first_name,
        "Last Name": last_name,
        Position: position,
        Team: team.full_name,
        City: team.city,
      }),
        (this.loading = false);
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
    <h3 v-show="loading">
      <iframe
        src="https://embed.lottiefiles.com/animation/21271"
        style="pointer-events: none"
      ></iframe>
    </h3>
    <table v-show="!loading">
      <tr v-for="(value, label) in person" :key="label">
        <td>{{ label }}</td>
        <td>{{ value }}</td>
      </tr>
    </table>
    <div id="button-Container">
      <RouterLink :to="`/players`"><button>back</button></RouterLink>
    </div>
  </main>
</template>
<style></style>
