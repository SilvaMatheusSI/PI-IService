<template>
  <v-layout justify-center>
    <v-flex xs12 sm6>
      <v-toolbar color="brown" dark>
        <v-toolbar-title>Padaria</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="card in cards" :key="card.title" v-bind="{ [`xs${card.flex}`]: true }">
              <v-card>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline Black--text" v-text="card.title"></span>
                  </v-flex>
                </v-layout>

                <v-img :src="card.src" height="100px">
                  <v-container fill-height fluid pa-2></v-container>
                </v-img>

                <v-container>
                  <span class="Black--text" v-text="card.number"></span>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Padaria São João",
        src: "https://abrilveja.files.wordpress.com/2017/08/padariad-1.jpg",
        number: "(34) 93876-5433",
        flex: 3
      },
      {
        title: "Biscoitos da Vovo",
        src:
          "http://www.cheffsolutions.com.br/wp-content/uploads/2018/01/Como-aumentar-as-vendas-de-sua-padaria.jpg",
        number: "(34) 93876-5433",
        flex: 3
      },
      {
        title: "Rio Branco Padaria",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnCnL6zrmIuh7xiSuZti4mGF8My-mACVJkNfw46kviiXOaM-R5Q",
        number: "(34) 93876-5433",
        flex: 3
      },
      {
        title: "Pink Donnuts",
        src:
          "https://img.itdg.com.br/tdg/images/recipes/000/116/415/45150/45150_original.jpg?mode=crop&width=710&height=400",
        number: "(34) 93876-5433",
        flex: 3
      }
    ]
  })
};
</script>