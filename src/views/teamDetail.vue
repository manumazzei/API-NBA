<script>
export default {
  data() {
    return {
      fullTeam: {},
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
        Division: division
      };
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getfullTeam(`https://www.balldontlie.io/api/v1/teams/${id}`);
  },
};
</script>

<template>
    <div>
      <table>
        <tr>
          <th width="30%">Time</th>
          <th width="30%">Cidade</th>
          <th width="30%">Abreviação</th>
          <th width="30%">Conferência</th>
          <th width="30%">Divisão</th>
        </tr>
        <tr>
            <td v-for="(value,label) in fullTeam" :key="label"> {{ value }}</td>
        </tr>
      </table>
    </div>
</template>

<style></style>
