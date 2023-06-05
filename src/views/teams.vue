<script>
  export default{
    data(){
      return {
          teams: {},
      };
    },
    methods:{
      getTeams(url){
          fetch(url)
          .then((res) => res.json())
          .then((data) => {
            const {name, full_name, division} = data;
            this.teams = data.data
          })
      }
    },
    computed:{

    },
    mounted(){
      this.getTeams(`https://www.balldontlie.io/api/v1/teams`);
    }
  }

</script>


<template>
   <main>
    <h3 v-show="loading">carregando</h3>
    <div class="div.tabela">
      <table v-show="!loading">
        <tr>
          <th width="30%">Time</th>
          <th width="30%">Divisão</th>
          <th width="30%">Conferência</th>
        </tr>
        <tr v-for="team in teams" :key="team.full_name">
          <td>{{ team.full_name }}</td>
          <td>{{ team.division }}</td>
          <td>{{ team.conference }}</td>
        </tr>
      </table>
    </div>
    <div id="button-Container">
      <button @click="handlePrevious">previous</button>
      <button @click="handleNext">next</button>
    </div>
  </main>
</template>

<style></style>
