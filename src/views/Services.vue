<template>
  <div class="home">
    <div id="app">
      <!-- Cards -->
      <div class="container cards">
        <v-app id="inspire">
          <v-layout justify-center>
            <v-flex>
              <v-card>
                <v-container fluid grid-list-md>
                  <v-layout row>
                    <v-flex
                      v-for="card in cards1"
                      :key="card.title"
                      v-bind="{ [`xs${card.flex}`]: true }"
                    >
                      <v-card>
                        <v-img :src="card.src" height="200px">
                          <v-container fill-height fluid pa-2></v-container>
                        </v-img>

                        <div class="text-xs-center">
                          <v-menu open-on-hover top offset-y>
                            <template v-slot:activator="{ on }">
                              <v-btn color="primary" dark v-on="on">
                                <v-layout fill-height>
                                  <v-flex xs12 align-end flexbox>
                                    <span class="white--text" v-text="card.title"></span>
                                  </v-flex>
                                </v-layout>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-tile v-for="(item, index) in card.but" :key="index">
                                <v-list-tile-title>
                                  <a href>{{ item.title }}</a>
                                </v-list-tile-title>
                              </v-list-tile>
                            </v-list>
                          </v-menu>
                        </div>
                      </v-card>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex
                      v-for="card in cards2"
                      :key="card.title"
                      v-bind="{ [`xs${card.flex}`]: true }"
                    >
                      <v-card>
                        <v-img :src="card.src" height="200px">
                          <v-container fill-height fluid pa-2></v-container>
                        </v-img>

                        <div class="text-xs-center">
                          <v-menu open-on-hover top offset-y>
                            <template v-slot:activator="{ on }">
                              <v-btn color="primary" dark v-on="on">
                                <v-layout fill-height>
                                  <v-flex xs12 align-end flexbox>
                                    <span class="white--text" v-text="card.title"></span>
                                  </v-flex>
                                </v-layout>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-tile v-for="(item, index) in card.but" :key="index">
                                <v-list-tile-title>
                                  <a href>{{ item.title }}</a>
                                </v-list-tile-title>
                              </v-list-tile>
                            </v-list>
                          </v-menu>
                        </div>
                      </v-card>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex
                      v-for="card in cards3"
                      :key="card.title"
                      v-bind="{ [`xs${card.flex}`]: true }"
                    >
                      <v-card>
                        <v-img :src="card.src" height="200px">
                          <v-container fill-height fluid pa-2></v-container>
                        </v-img>

                        <div class="text-xs-center">
                          <v-menu open-on-hover top offset-y>
                            <template v-slot:activator="{ on }">
                              <v-btn color="primary" dark v-on="on">
                                <v-layout fill-height>
                                  <v-flex xs12 align-end flexbox>
                                    <span class="white--text" v-text="card.title"></span>
                                  </v-flex>
                                </v-layout>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-tile v-for="(item, index) in card.but" :key="index">
                                <v-list-tile-title>
                                  <a href>{{ item.title }}</a>
                                </v-list-tile-title>
                              </v-list-tile>
                            </v-list>
                          </v-menu>
                        </div>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-app>
      </div>
    </div>
    <!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards1: [
        {
          title: "Alimentos",
          src:
            "https://portalbr.akamaized.net/brasil/uploads/2018/10/16101457/iStock-854326366-548x365.jpg",
          flex: 4,
          but: [
            { title: "Padaria", l: "www.globo.com" },
            { title: "Sorveteria " }
          ]
        },

        {
          title: "Assistência Técnica",
          src:
            "https://hotprodutos.com/wp-content/uploads/2018/12/como-abrir-uma-assist%C3%AAncia-t%C3%A9cnica-de-celulares.jpg",
          flex: 4,
          but: [{ title: "Celulares" }]
        },

        {
          title: "Automoveis",
          src:
            "https://alo.com.br/wp-content/uploads/2019/01/curso-de-mecanica-de-carros-4.png",
          flex: 4,
          but: [{ title: "Mecânica" }]
        }
      ],

      cards2: [
        {
          title: "Esportes e atividades",
          src:
            "https://www.estudopratico.com.br/wp-content/uploads/2019/01/esportes-ingles.jpg",
          flex: 4,
          but: [{ title: "Aluguel de Campo" }]
        },

        {
          title: "Moda e beleza",
          src:
            "https://static.wixstatic.com/media/ddf002_56c61144f46545b5a00fa3bcc98044e0~mv2.png",
          flex: 4,
          but: [{ title: "Roupas" }, { title: "Bijuterias" }]
        },

        {
          title: "Pets",
          src:
            "https://st1.ning.com/topology/rest/1.0/file/get/403907894?profile=original",
          flex: 4,
          but: [{ title: "Pet-shop" }]
        }
      ],

      cards3: [
        {
          title: "Reformas e Instalação",
          src:
            "https://www.tudoconstrucao.com/wp-content/uploads/2017/09/Pre%C3%A7o-da-Constru%C3%A7%C3%A3o-por-M2-para-2018-04.jpg",
          flex: 4,
          but: [{ title: "Materiais Construção" }, { title: "Eletricista" }]
        },

        {
          title: "Serviços Domésticos",
          src:
            "https://cdn.theshoppers.com/wp-content/uploads/faxina-the-shoppers-capa.jpg",
          flex: 4,
          but: [{ title: "Faxinas" }]
        },

        {
          title: "Saúde",
          src:
            "https://static5.vvale.com.br/cbnvaledoiguacu/files/2018/12/saude-reproducao.jpg",
          flex: 4,
          but: [{ title: "Laboratorios de Exames" }]
        }
      ]
    };
  }
};
</script>

<style>
.cards {
  background-color: rgba(10, 23, 55, 0);
}
.home {
  background: rgb(251, 133, 201);
  background: linear-gradient(
    90deg,
    rgba(251, 133, 201, 1) 0%,
    rgba(85, 85, 232, 1) 50%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>




