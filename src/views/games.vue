<script>
export default {
  data() {
    return {
      games: [],
      data: [],
    };
  },
  methods: {
    getGames(url) {
      fetch(url)
        .then((res) => res.json())
        .then((response) =>{
          const {data,meta} = response;
          this.games = data;
        });
    },

    formatarData(date) {
      const dataObjeto = new Date();

      const dia = dataObjeto.getDate().toString().padStart(2,'0');
      const mes = (dataObjeto.getMonth() + 1).toString().padStart(2,'0');
      const ano = dataObjeto.getFullYear();
      const hora = dataObjeto.getHours().toString().padStart(2,'0');
      const minuto = dataObjeto.getMinutes().toString().padStart(2,'0');

      const dataFormatada = `${dia}/${mes}/${ano} - ${hora}:${minuto}`;

      return dataFormatada
    },

   
  },
  computed: {
    parsedGames(){
      return this.games.map(el =>({
        ...el,
        date: this.formatarData(el.date)
        
      }))
    }
  },
  mounted() {
    this.getGames(`https://www.balldontlie.io/api/v1/games`);
    
  },
};
</script>

<template>
  <main>
    <div>
      <table>
        <tr>
          <th width="30%">Data</th>
          <th width="30%">Time da casa</th>
          <th width="30%">Pontos do time da casa</th>
          <th width="30%">Time visitante</th>
          <th width="30%">Pontos do time visitante</th>
          <th width="30%">Etapa</th>
        </tr>
        <tr v-for="game in parsedGames" :key="game.games">
          <td>{{ game.date}}</td>
          <td>{{ game.home_team.abbreviation }}</td>
          <td>{{ game.home_team_score }}</td>
          <td>{{ game.visitor_team.abbreviation }}</td>
          <td>{{ game.visitor_team_score}}</td>
          <td>{{ game.status}}</td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style></style>
