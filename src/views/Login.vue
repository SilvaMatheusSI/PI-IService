<template>
  <!--//////////////////////////////////////////////////////////////////////////////////////////////////-->
  <v-container class="loginc" fill-height pa-2>
    <form>
      <div class="loginform">
        <v-img src="https://pt.freelogodesign.org/Content/img/logo-ex-2.png" aspect-ratio="1.7"></v-img>

        <v-btn color="#502BDE" dark @click="Usuario">Usuario</v-btn>
        <v-btn color="#502BDE" dark @click="Prestador">Prestador</v-btn>

        <v-text-field
          dark
          v-model="name"
          :error-messages="nameErrors"
          :counter="20"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          dark
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          dark
          v-model="password"
          :error-messages="passwordErrors"
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Senha"
          hint="Pelo menos 8 caracteres"
          counter
          @click:append="show1 = !show1"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>

        <v-btn color="#502BDE" dark @click="submit">Entrar</v-btn>
      </div>
    </form>
  </v-container>

  <!--///////////////////////////////////////////////////////////////////////////////////////////////-->
  <!--///////////////////////////////////////////////////////////////////////////////////////////////-->
  <!--///////////////////////////////////////////////////////////////////////////////////////////////-->
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email }
  },

  data: () => ({
    name: "",
    email: "",

    show1: false,
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Mínimo 8 caracteres",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    }
  }
};
</script>

<style>
.loginc {
  background-color: rgb(85, 195, 255);
  text-align: center;
  position: absolute;
  top: 100px;
  right: 100px;
  width: 400px;
  height: 600px;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 10px;
}

.loginform {
  position: absolute;
  left: 10%;
  top: 10%;
  width: 80%;
  text-align: center;
  font-size: 40px;
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




