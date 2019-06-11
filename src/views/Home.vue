<template>
  <div class="home">
    <div>
      <!-- class="container" -->
      <v-carousel interval="3000" hide-controls>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import { scrypt } from "crypto";
export default {
  data() {
    return {
      items: [
        {
          src:
            "http://ec-corp.com.br/domsp/wp-content/uploads/2013/05/Servic%CC%A7os-Profissionais.jpg"
        },
        {
          src:
            "https://www.idealmarketing.com.br/blog/wp-content/uploads/2018/09/marketing-de-servicos-como-aplicar.jpg"
        },
        {
          src: "https://negociowp.com/wp-content/uploads/2018/12/14.jpg"
        },
        {
          src:
            "http://innovationinsider.com.br/wp-content/uploads/2017/05/profiss%C3%B5es.jpg"
        }
      ],
      reviews: 413,
      value: 4.5
    };
  }
};
</script>


<style>
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

<style lang="stylus">#example-custom-transition {
  .fade {
    &-enter-active, &-leave-active, &-leave-to {
      transition: 0.3s ease-out;
      position: absolute;
      top: 0;
      left: 0;
    }

    &-enter, &-leave, &-leave-to {
      opacity: 0;
    }
  }
}
</style>






