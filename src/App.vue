

<template>
  <v-app>
    <!-- /////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!--<v-content>
    <router-view/>-->
    <!--<router-link class="Navbar-item" to="/">App</router-link>-->
    <!--<router-link class="Navbar-item" to="About">About</router-link>-->
    <!--<router-link class="Navbar-item" to="Home">Home</router-link>-->
    <!--<router-link class="Navbar-item" to="Login">Login</router-link>-->
    <!--</v-content> -->

    <!-- /////////////////////////////////////////////////////////////////////////////////////////////////// -->

    <div>
      <router-view style/>
      <v-card
        style="height: 86px; width:100%; position: fixed; left:0; bottom:0; background-color: #FFF;"
      >
        <v-bottom-nav :active.sync="activeBtn" :value="showNav">
          <v-btn flat color="blue" router-link class="Navbar-item" to="Login">
            <span>Login</span>
            <v-icon>home</v-icon>
          </v-btn>
          <v-btn flat color="blue" router-link class="Navbar-item" to="Home">
            <span>Home</span>
            <v-icon>home</v-icon>
          </v-btn>
          <v-btn flat color="blue" router-link class="Navbar-item" to="Services">
            <span>Services</span>
            <v-icon>home</v-icon>
          </v-btn>

          <!-- <router-link class="Navbar-item" to="Login">-->

          <!--</router-link>-->
        </v-bottom-nav>
        <div>
          <v-footer class="pa-3">
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }}</div>
          </v-footer>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<<script>
  export default {
    data () {
      return {
        activeBtn: 1,
        showNav: true
      }
    }
  }
</script>

<style>
</style>


