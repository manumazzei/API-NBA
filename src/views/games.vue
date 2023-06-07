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
    <h2>LAST MATCHUPS</h2>
    <div class="tabel">
     

      <div v-for="game in parsedGames" :key="game.games">
        <div class="cardgames">
            <div class="house">
                  <div class="view">Logo home
                    <div class="name">{{ game.home_team.abbreviation }}</div>
                  </div>
                  
                  <div class="points">{{ game.home_team_score }}</div>
            </div>
            <div class="status">{{ game.status}}</div>
            <div class="visitor">
                  <div class="points">{{ game.visitor_team_score}}</div>

              <div class="view">Logo visi
              <div class="name">{{ game.visitor_team.abbreviation }}</div>
              </div>
            </div>
       </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
h2 {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: black;
  color: whitesmoke;
  width: 1200px;
  margin-left: 320px;
  border-radius: 30px;
  height: 40px;
}
.cardgames{
  display: flex;
  align-items: center;
  margin: 2rem;
  background: whitesmoke;
  box-shadow: inset 0 0 1em gray, 0 0 1em gray;
  border-radius: 3px;
  width: 300px;
  height: 200px;
}

.tabel{
  text-align: center;
  width: 1200px;
  height: 540px;
  margin-left: 320px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
.house{
  display: flex;
  width: 116px;
  height: 200px;
}
.status{
  display: block;
  width: 80px;
  height: 200px;
  text-align: center;
  padding-top: 10rem;
  font-family: 'Bebas Neue', sans-serif;
}
.visitor{
  display: flex;
  width: 116px;
  height: 200px;
}
.view{
  width: 60px;
  padding-top: 4rem;
}

.name{
  padding-top: 1rem;
  text-align: center;
}
.points{
  padding-top: 5rem;
  width: 50px;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: bold;
  font-size: 25px;
}
</style>
